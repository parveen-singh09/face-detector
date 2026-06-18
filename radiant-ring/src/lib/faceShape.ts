/**
 * faceShape.ts — the classification engine (the product's differentiator).
 *
 * MediaPipe gives us 478 landmarks but NOT a face shape. We derive scale-invariant
 * anthropometric ratios from the landmarks, then run soft rules-based scoring to
 * produce a probability for each of the 6 canonical shapes — not just a single
 * answer. Every threshold lives in SHAPE_PROFILES / FEATURE_WEIGHTS so the
 * classifier is easy to calibrate later.
 *
 * IMPORTANT: MediaPipe normalizes x by image width and y by image height
 * independently, so normalized coords are NOT isotropic. We convert to pixel
 * space (using the real media dimensions) before measuring distances/angles.
 */
import type { Landmark } from "./faceLandmarker";

export type ShapeId =
  | "oval"
  | "round"
  | "square"
  | "rectangle"
  | "heart"
  | "diamond";

export interface ShapeScore {
  id: ShapeId;
  label: string;
  /** 0..100, the full distribution sums to 100. */
  probability: number;
}

export interface ShapeResult {
  /** All six shapes, ranked high → low. */
  ranked: ShapeScore[];
  /** The winning shape. */
  top: ShapeScore;
  /** Runner-up (used for the "blend" copy). */
  runnerUp: ShapeScore;
  /** 0..100 — how decisive the result is (top strength + margin over #2). */
  confidence: number;
  /** True when top two are close enough to call it a blend of shapes. */
  isBlend: boolean;
  /** The raw normalized ratios, exposed for debugging / future metrics panel. */
  features: Features;
}

export interface Features {
  /** Face length ÷ cheekbone width. */
  lengthToWidth: number;
  /** Forehead width ÷ cheekbone width. */
  foreheadToCheek: number;
  /** Jaw width ÷ cheekbone width. */
  jawToCheek: number;
  /** Chin angle in degrees (low = pointed, high = wide/square). */
  chinAngle: number;
}

export const SHAPE_LABELS: Record<ShapeId, string> = {
  oval: "Oval",
  round: "Round",
  square: "Square",
  rectangle: "Rectangle",
  heart: "Heart",
  diamond: "Diamond",
};

export const SHAPE_DESCRIPTIONS: Record<ShapeId, string> = {
  oval: "Balanced proportions with a face length greater than its width and a gently rounded jaw. Widely considered the most versatile shape.",
  round: "Soft angles with face length and width close to equal, fuller cheeks, and a rounded jawline and chin.",
  square: "A strong, angular jaw with forehead, cheekbones, and jaw close to the same width — a bold, structured shape.",
  rectangle:
    "Like a square but longer — face length clearly exceeds width, with forehead, cheekbones, and jaw running close to parallel.",
  heart:
    "A wider forehead and cheekbones that taper to a narrower, often pointed chin — the classic heart silhouette.",
  diamond:
    "Cheekbones are the widest point, with a narrower forehead and jaw and a defined, pointed chin.",
};

/**
 * MediaPipe Face Mesh landmark indices used for measurements.
 * Kept here so they're tunable / auditable in one place.
 */
const IDX = {
  foreheadTop: 10, // top of forehead (hairline proxy)
  chin: 152, // bottom of chin
  cheekRight: 234, // widest face contour, right (subject's right)
  cheekLeft: 454, // widest face contour, left
  foreheadRight: 71, // upper face oval, right temple
  foreheadLeft: 301, // upper face oval, left temple
  jawRight: 172, // jaw angle (gonial), right
  jawLeft: 397, // jaw angle (gonial), left
} as const;

/**
 * Target ratio profiles per shape. mu = ideal value, sigma = tolerance.
 * Derived from classic anthropometric face-shape definitions; tune these to
 * recalibrate the classifier without touching the scoring logic.
 */
interface Profile {
  lengthToWidth: [mu: number, sigma: number];
  foreheadToCheek: [mu: number, sigma: number];
  jawToCheek: [mu: number, sigma: number];
  chinAngle: [mu: number, sigma: number];
}

const SHAPE_PROFILES: Record<ShapeId, Profile> = {
  // length>width, cheek widest, jaw a touch narrower, soft chin
  oval: {
    lengthToWidth: [1.5, 0.18],
    foreheadToCheek: [0.92, 0.13],
    jawToCheek: [0.8, 0.13],
    chinAngle: [140, 26],
  },
  // length≈width, soft wide jaw, rounded chin
  round: {
    lengthToWidth: [1.05, 0.13],
    foreheadToCheek: [0.9, 0.14],
    jawToCheek: [0.84, 0.14],
    chinAngle: [152, 24],
  },
  // length≈width, parallel sides, wide angular chin
  square: {
    lengthToWidth: [1.05, 0.13],
    foreheadToCheek: [0.97, 0.1],
    jawToCheek: [0.97, 0.1],
    chinAngle: [166, 20],
  },
  // long face, parallel sides
  rectangle: {
    lengthToWidth: [1.68, 0.2],
    foreheadToCheek: [0.95, 0.12],
    jawToCheek: [0.92, 0.12],
    chinAngle: [160, 24],
  },
  // wide forehead, narrow pointed chin
  heart: {
    lengthToWidth: [1.4, 0.22],
    foreheadToCheek: [1.05, 0.12],
    jawToCheek: [0.72, 0.14],
    chinAngle: [116, 26],
  },
  // cheek widest, narrow forehead AND jaw, pointed chin
  diamond: {
    lengthToWidth: [1.5, 0.22],
    foreheadToCheek: [0.8, 0.12],
    jawToCheek: [0.75, 0.14],
    chinAngle: [116, 26],
  },
};

/** Relative importance of each feature in the combined score. */
const FEATURE_WEIGHTS = {
  lengthToWidth: 1.1,
  foreheadToCheek: 1.0,
  jawToCheek: 1.0,
  chinAngle: 0.8,
} as const;

/** Gaussian membership: 1 when x == mu, decaying with distance. */
function membership(x: number, [mu, sigma]: [number, number]): number {
  const d = (x - mu) / sigma;
  return Math.exp(-0.5 * d * d);
}

function px(l: Landmark, w: number, h: number): [number, number] {
  return [l.x * w, l.y * h];
}

function dist(a: [number, number], b: [number, number]): number {
  return Math.hypot(a[0] - b[0], a[1] - b[1]);
}

/** Angle (degrees) at vertex `v` between rays to `a` and `b`. */
function angleAt(
  v: [number, number],
  a: [number, number],
  b: [number, number],
): number {
  const v1 = [a[0] - v[0], a[1] - v[1]];
  const v2 = [b[0] - v[0], b[1] - v[1]];
  const dot = v1[0] * v2[0] + v1[1] * v2[1];
  const m1 = Math.hypot(v1[0], v1[1]);
  const m2 = Math.hypot(v2[0], v2[1]);
  if (m1 === 0 || m2 === 0) return 0;
  const cos = Math.min(1, Math.max(-1, dot / (m1 * m2)));
  return (Math.acos(cos) * 180) / Math.PI;
}

/** Compute the scale-invariant feature ratios from landmarks. */
export function computeFeatures(
  landmarks: Landmark[],
  width: number,
  height: number,
): Features {
  const p = (i: number) => px(landmarks[i], width, height);

  const faceLength = dist(p(IDX.foreheadTop), p(IDX.chin));
  const cheekWidth = dist(p(IDX.cheekRight), p(IDX.cheekLeft));
  const foreheadWidth = dist(p(IDX.foreheadRight), p(IDX.foreheadLeft));
  const jawWidth = dist(p(IDX.jawRight), p(IDX.jawLeft));
  const chinAngle = angleAt(p(IDX.chin), p(IDX.jawRight), p(IDX.jawLeft));

  const safe = cheekWidth || 1;
  return {
    lengthToWidth: faceLength / safe,
    foreheadToCheek: foreheadWidth / safe,
    jawToCheek: jawWidth / safe,
    chinAngle,
  };
}

/**
 * Classify a face from its landmarks into a probability distribution over the
 * six shapes. `width`/`height` are the pixel dimensions of the source media.
 */
export function classifyFace(
  landmarks: Landmark[],
  width: number,
  height: number,
): ShapeResult {
  const features = computeFeatures(landmarks, width, height);

  const totalWeight =
    FEATURE_WEIGHTS.lengthToWidth +
    FEATURE_WEIGHTS.foreheadToCheek +
    FEATURE_WEIGHTS.jawToCheek +
    FEATURE_WEIGHTS.chinAngle;

  // Weighted-geometric-mean of per-feature memberships → one score per shape.
  const rawScores = (Object.keys(SHAPE_PROFILES) as ShapeId[]).map((id) => {
    const prof = SHAPE_PROFILES[id];
    const logScore =
      (FEATURE_WEIGHTS.lengthToWidth *
        Math.log(membership(features.lengthToWidth, prof.lengthToWidth) + 1e-9) +
        FEATURE_WEIGHTS.foreheadToCheek *
          Math.log(membership(features.foreheadToCheek, prof.foreheadToCheek) + 1e-9) +
        FEATURE_WEIGHTS.jawToCheek *
          Math.log(membership(features.jawToCheek, prof.jawToCheek) + 1e-9) +
        FEATURE_WEIGHTS.chinAngle *
          Math.log(membership(features.chinAngle, prof.chinAngle) + 1e-9)) /
      totalWeight;
    return { id, score: Math.exp(logScore) };
  });

  // Normalize to probabilities summing to 100.
  const sum = rawScores.reduce((acc, s) => acc + s.score, 0) || 1;
  const ranked: ShapeScore[] = rawScores
    .map((s) => ({
      id: s.id,
      label: SHAPE_LABELS[s.id],
      probability: (s.score / sum) * 100,
    }))
    .sort((a, b) => b.probability - a.probability);

  // Round to whole %, fixing drift so the displayed values still sum to 100.
  roundToHundred(ranked);

  const top = ranked[0];
  const runnerUp = ranked[1];

  // Confidence blends absolute strength of the top shape with its margin over #2.
  const margin = top.probability - runnerUp.probability;
  const confidence = Math.round(
    Math.min(100, Math.max(0, top.probability * 0.6 + margin * 1.4)),
  );

  // A blend when the runner-up is within ~75% of the top score.
  const isBlend = runnerUp.probability >= top.probability * 0.75;

  return { ranked, top, runnerUp, confidence, isBlend, features };
}

/** Round probabilities to integers while preserving a sum of 100 (largest-remainder). */
function roundToHundred(scores: ShapeScore[]): void {
  const floors = scores.map((s) => Math.floor(s.probability));
  let remainder = 100 - floors.reduce((a, b) => a + b, 0);
  // Distribute the leftover to the largest fractional parts.
  const order = scores
    .map((s, i) => ({ i, frac: s.probability - floors[i] }))
    .sort((a, b) => b.frac - a.frac);
  scores.forEach((s, i) => (s.probability = floors[i]));
  for (let k = 0; k < order.length && remainder > 0; k++, remainder--) {
    scores[order[k].i].probability += 1;
  }
}
