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
  /**
   * Jaw angularity 0..1 — how sharp vs. curved the jawline is, measured from the
   * deviation of the mid-jaw point off the straight cheek→chin line. ~0 = the jaw
   * follows a smooth round arc; ~1 = a hard angular (square) corner. This is the
   * signal that actually separates round (soft) from square (sharp), since both
   * share length≈width. Mirrors Omnicalculator's "sharpness" input.
   */
  jawAngularity: number;
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

/** Stable, ordered list of shape ids — useful for building localized lookups. */
export const SHAPE_IDS = Object.keys(SHAPE_LABELS) as ShapeId[];

/**
 * MediaPipe Face Mesh landmark indices used for measurements.
 * Kept here so they're tunable / auditable in one place.
 */
const IDX = {
  foreheadTop: 10, // top of forehead (NOT the hairline — sits below it)
  glabella: 9, // midline point between the eyebrows (lower bound of upper third)
  chin: 152, // bottom of chin
  cheekRight: 234, // widest face contour, right (subject's right)
  cheekLeft: 454, // widest face contour, left
  foreheadRight: 71, // upper face oval, right temple
  foreheadLeft: 301, // upper face oval, left temple
  jawRight: 172, // jaw angle (gonial), right
  jawLeft: 397, // jaw angle (gonial), left
} as const;

/** Exposed so the overlay can draw exactly the points the classifier measures. */
export const MEASURE_IDX = IDX;

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
  jawAngularity: [mu: number, sigma: number];
}

const SHAPE_PROFILES: Record<ShapeId, Profile> = {
  // length>width, cheek widest, jaw a touch narrower, soft chin, soft jaw
  oval: {
    lengthToWidth: [1.5, 0.18],
    foreheadToCheek: [0.92, 0.13],
    jawToCheek: [0.8, 0.13],
    chinAngle: [140, 26],
    jawAngularity: [0.35, 0.2],
  },
  // length≈width, soft wide jaw, rounded chin, smooth (low-angularity) jawline
  round: {
    lengthToWidth: [1.05, 0.13],
    foreheadToCheek: [0.9, 0.14],
    jawToCheek: [0.84, 0.14],
    chinAngle: [152, 24],
    jawAngularity: [0.25, 0.18],
  },
  // length≈width, parallel sides, wide angular chin, SHARP jaw corner
  square: {
    lengthToWidth: [1.05, 0.13],
    foreheadToCheek: [0.97, 0.1],
    jawToCheek: [0.97, 0.1],
    chinAngle: [166, 20],
    jawAngularity: [0.7, 0.18],
  },
  // long face, parallel sides, fairly angular jaw
  rectangle: {
    lengthToWidth: [1.68, 0.2],
    foreheadToCheek: [0.95, 0.12],
    jawToCheek: [0.92, 0.12],
    chinAngle: [160, 24],
    jawAngularity: [0.55, 0.2],
  },
  // wide forehead, narrow pointed chin, moderately defined jaw
  heart: {
    lengthToWidth: [1.4, 0.22],
    foreheadToCheek: [1.05, 0.12],
    jawToCheek: [0.72, 0.14],
    chinAngle: [116, 26],
    jawAngularity: [0.4, 0.22],
  },
  // cheek widest, narrow forehead AND jaw, pointed chin, defined jaw
  diamond: {
    lengthToWidth: [1.5, 0.22],
    foreheadToCheek: [0.8, 0.12],
    jawToCheek: [0.75, 0.14],
    chinAngle: [116, 26],
    jawAngularity: [0.45, 0.22],
  },
};

/** Relative importance of each feature in the combined score. */
const FEATURE_WEIGHTS = {
  lengthToWidth: 1.1,
  foreheadToCheek: 1.0,
  jawToCheek: 1.0,
  chinAngle: 0.8,
  jawAngularity: 0.9,
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

  // Face length: the forehead-top landmark (10) sits BELOW the hairline, so
  // measuring 10→chin under-reports length and pushes every face toward "round"
  // (length≈width). Instead use the facial-thirds rule: glabella (between the
  // brows) to chin is the lower two-thirds of the face, so the full hairline-to-
  // chin length ≈ that distance × 1.5. This matches the textbook ratios the
  // SHAPE_PROFILES were built from. We take the max of the two estimates so a
  // genuinely tall forehead isn't clipped.
  const lowerTwoThirds = dist(p(IDX.glabella), p(IDX.chin));
  const faceLength = Math.max(
    lowerTwoThirds * 1.5,
    dist(p(IDX.foreheadTop), p(IDX.chin)),
  );
  const cheekWidth = dist(p(IDX.cheekRight), p(IDX.cheekLeft));
  const foreheadWidth = dist(p(IDX.foreheadRight), p(IDX.foreheadLeft));
  const jawWidth = dist(p(IDX.jawRight), p(IDX.jawLeft));
  const chinAngle = angleAt(p(IDX.chin), p(IDX.jawRight), p(IDX.jawLeft));

  // Jaw angularity: the interior angle at each jaw corner (gonion) between the
  // cheek above it and the chin below. A smooth ROUND jaw bends gently → wide
  // angle; a SQUARE jaw turns hard → narrow angle. Average both sides, then map
  // the angle [~160°→soft .. ~100°→sharp] onto 0..1. This is the signal that
  // separates round from square, which otherwise share length≈width.
  const gonionRight = angleAt(p(IDX.jawRight), p(IDX.cheekRight), p(IDX.chin));
  const gonionLeft = angleAt(p(IDX.jawLeft), p(IDX.cheekLeft), p(IDX.chin));
  const gonionAvg = (gonionRight + gonionLeft) / 2;
  const jawAngularity = Math.min(1, Math.max(0, (160 - gonionAvg) / 60));

  const safe = cheekWidth || 1;
  return {
    lengthToWidth: faceLength / safe,
    foreheadToCheek: foreheadWidth / safe,
    jawToCheek: jawWidth / safe,
    chinAngle,
    jawAngularity,
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
  return classifyFromFeatures(computeFeatures(landmarks, width, height));
}

/**
 * Classify across several frames of the SAME face and average for stability.
 * We take the median of each feature (robust to the odd bad frame from a blink,
 * tilt, or motion blur), then score once. This is what the camera capture uses:
 * 5 readings beat a single snapshot.
 */
export function classifyFaceMulti(
  landmarkSets: Landmark[][],
  width: number,
  height: number,
): ShapeResult {
  if (landmarkSets.length === 0) {
    throw new Error("classifyFaceMulti: no frames supplied");
  }
  const perFrame = landmarkSets.map((lm) => computeFeatures(lm, width, height));
  const median = (pick: (f: Features) => number): number => {
    const vals = perFrame.map(pick).sort((a, b) => a - b);
    const mid = Math.floor(vals.length / 2);
    return vals.length % 2 ? vals[mid] : (vals[mid - 1] + vals[mid]) / 2;
  };
  const features: Features = {
    lengthToWidth: median((f) => f.lengthToWidth),
    foreheadToCheek: median((f) => f.foreheadToCheek),
    jawToCheek: median((f) => f.jawToCheek),
    chinAngle: median((f) => f.chinAngle),
    jawAngularity: median((f) => f.jawAngularity),
  };
  return classifyFromFeatures(features);
}

/** Score a set of (possibly averaged) features into the full shape distribution. */
export function classifyFromFeatures(features: Features): ShapeResult {
  const totalWeight =
    FEATURE_WEIGHTS.lengthToWidth +
    FEATURE_WEIGHTS.foreheadToCheek +
    FEATURE_WEIGHTS.jawToCheek +
    FEATURE_WEIGHTS.chinAngle +
    FEATURE_WEIGHTS.jawAngularity;

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
          Math.log(membership(features.chinAngle, prof.chinAngle) + 1e-9) +
        FEATURE_WEIGHTS.jawAngularity *
          Math.log(membership(features.jawAngularity, prof.jawAngularity) + 1e-9)) /
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
  // A small upward bias keeps the figure encouraging, and we snap to the nearest
  // 5 so it reads as an approximate estimate rather than a precise measurement.
  const margin = top.probability - runnerUp.probability;
  const raw = top.probability * 0.6 + margin * 1.4 + 8;
  const confidence = Math.min(100, Math.max(0, Math.round(raw / 5) * 5));

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
