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
  probability: number;
}

export interface ShapeResult {
  ranked: ShapeScore[];
  top: ShapeScore;
  runnerUp: ShapeScore;
  confidence: number;
  isBlend: boolean;
  features: Features;
}

export interface Features {
  lengthToWidth: number;
  foreheadToCheek: number;
  jawToCheek: number;
  chinAngle: number;
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

export const SHAPE_IDS = Object.keys(SHAPE_LABELS) as ShapeId[];

const IDX = {
  foreheadTop: 10,
  glabella: 9,
  chin: 152,
  cheekRight: 234,
  cheekLeft: 454,
  foreheadRight: 71,
  foreheadLeft: 301,
  jawRight: 172,
  jawLeft: 397,
} as const;

interface Profile {
  lengthToWidth: [mu: number, sigma: number];
  foreheadToCheek: [mu: number, sigma: number];
  jawToCheek: [mu: number, sigma: number];
  chinAngle: [mu: number, sigma: number];
  jawAngularity: [mu: number, sigma: number];
}

const SHAPE_PROFILES: Record<ShapeId, Profile> = {
  oval: {
    lengthToWidth: [1.5, 0.18],
    foreheadToCheek: [0.92, 0.13],
    jawToCheek: [0.8, 0.13],
    chinAngle: [140, 26],
    jawAngularity: [0.35, 0.2],
  },
  round: {
    lengthToWidth: [1.05, 0.13],
    foreheadToCheek: [0.9, 0.14],
    jawToCheek: [0.84, 0.14],
    chinAngle: [152, 24],
    jawAngularity: [0.25, 0.18],
  },
  square: {
    lengthToWidth: [1.05, 0.13],
    foreheadToCheek: [0.97, 0.1],
    jawToCheek: [0.97, 0.1],
    chinAngle: [166, 20],
    jawAngularity: [0.7, 0.18],
  },
  rectangle: {
    lengthToWidth: [1.68, 0.2],
    foreheadToCheek: [0.95, 0.12],
    jawToCheek: [0.92, 0.12],
    chinAngle: [160, 24],
    jawAngularity: [0.55, 0.2],
  },
  heart: {
    lengthToWidth: [1.4, 0.22],
    foreheadToCheek: [1.05, 0.12],
    jawToCheek: [0.72, 0.14],
    chinAngle: [116, 26],
    jawAngularity: [0.4, 0.22],
  },
  diamond: {
    lengthToWidth: [1.5, 0.22],
    foreheadToCheek: [0.8, 0.12],
    jawToCheek: [0.75, 0.14],
    chinAngle: [116, 26],
    jawAngularity: [0.45, 0.22],
  },
};

const FEATURE_WEIGHTS = {
  lengthToWidth: 1.1,
  foreheadToCheek: 1.0,
  jawToCheek: 1.0,
  chinAngle: 0.8,
  jawAngularity: 0.9,
} as const;

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

export function computeFeatures(
  landmarks: Landmark[],
  width: number,
  height: number,
): Features {
  const maxIdx = Math.max(...Object.values(IDX));
  if (!landmarks || landmarks.length <= maxIdx) {
    throw new Error("computeFeatures: incomplete landmark set");
  }
  const p = (i: number) => px(landmarks[i], width, height);

  const lowerTwoThirds = dist(p(IDX.glabella), p(IDX.chin));
  const faceLength = Math.max(
    lowerTwoThirds * 1.5,
    dist(p(IDX.foreheadTop), p(IDX.chin)),
  );
  const cheekWidth = dist(p(IDX.cheekRight), p(IDX.cheekLeft));
  const foreheadWidth = dist(p(IDX.foreheadRight), p(IDX.foreheadLeft));
  const jawWidth = dist(p(IDX.jawRight), p(IDX.jawLeft));
  const chinAngle = angleAt(p(IDX.chin), p(IDX.jawRight), p(IDX.jawLeft));

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

export function classifyFace(
  landmarks: Landmark[],
  width: number,
  height: number,
): ShapeResult {
  return classifyFromFeatures(computeFeatures(landmarks, width, height));
}

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

export function classifyFromFeatures(features: Features): ShapeResult {
  const totalWeight =
    FEATURE_WEIGHTS.lengthToWidth +
    FEATURE_WEIGHTS.foreheadToCheek +
    FEATURE_WEIGHTS.jawToCheek +
    FEATURE_WEIGHTS.chinAngle +
    FEATURE_WEIGHTS.jawAngularity;

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

  const sum = rawScores.reduce((acc, s) => acc + s.score, 0) || 1;
  const ranked: ShapeScore[] = rawScores
    .map((s) => ({
      id: s.id,
      label: SHAPE_LABELS[s.id],
      probability: (s.score / sum) * 100,
    }))
    .sort((a, b) => b.probability - a.probability);

  roundToHundred(ranked);

  const top = ranked[0];
  const runnerUp = ranked[1];

  const margin = top.probability - runnerUp.probability;
  const raw = top.probability * 0.6 + margin * 1.4 + 8;
  const confidence = Math.min(100, Math.max(0, Math.round(raw / 5) * 5));

  const isBlend = runnerUp.probability >= top.probability * 0.75;

  return { ranked, top, runnerUp, confidence, isBlend, features };
}

function roundToHundred(scores: ShapeScore[]): void {
  const floors = scores.map((s) => Math.floor(s.probability));
  let remainder = 100 - floors.reduce((a, b) => a + b, 0);
  const order = scores
    .map((s, i) => ({ i, frac: s.probability - floors[i] }))
    .sort((a, b) => b.frac - a.frac);
  scores.forEach((s, i) => (s.probability = floors[i]));
  for (let k = 0; k < order.length && remainder > 0; k++, remainder--) {
    scores[order[k].i].probability += 1;
  }
}
