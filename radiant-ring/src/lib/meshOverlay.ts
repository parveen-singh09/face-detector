/**
 * meshOverlay.ts — draws the live face mesh on a <canvas> aligned over the
 * video/image. This is our signature differentiator: visible proof the analysis
 * runs locally and in real time.
 *
 * Uses MediaPipe's published connector sets via DrawingUtils. Coordinates are
 * normalized (0..1), so the canvas just needs to match the displayed media box.
 */
import { DrawingUtils, FaceLandmarker } from "@mediapipe/tasks-vision";
import type { Landmark } from "./faceLandmarker";

export interface OverlayStyle {
  /** Tessellation mesh line color. */
  mesh?: string;
  /** Face oval / contour color. */
  contour?: string;
  /** Eye / eyebrow / lip feature line color. */
  feature?: string;
  /** Iris ring color. */
  iris?: string;
  /** Line width for contour features. */
  contourWidth?: number;
}

const DEFAULTS: Required<OverlayStyle> = {
  // Brand gradient can't be applied per-line cheaply; use the brand cyan + ink.
  mesh: "rgba(80, 227, 194, 0.35)", // brand cyan, faint
  contour: "rgba(255, 0, 128, 0.9)", // brand highlight-pink
  feature: "rgba(80, 227, 194, 0.85)", // brand cyan, strong
  iris: "rgba(255, 0, 128, 0.9)", // brand highlight-pink
  contourWidth: 2,
};

/** Size the overlay canvas to match the rendered media element (CSS + buffer). */
export function syncCanvasSize(
  canvas: HTMLCanvasElement,
  media: HTMLVideoElement | HTMLImageElement,
): void {
  const w =
    media instanceof HTMLVideoElement ? media.videoWidth : media.naturalWidth;
  const h =
    media instanceof HTMLVideoElement ? media.videoHeight : media.naturalHeight;
  if (w && h && (canvas.width !== w || canvas.height !== h)) {
    canvas.width = w;
    canvas.height = h;
  }
}

/** Clear the overlay canvas. */
export function clearOverlay(canvas: HTMLCanvasElement): void {
  const ctx = canvas.getContext("2d");
  if (ctx) ctx.clearRect(0, 0, canvas.width, canvas.height);
}

/**
 * Draw the tessellation mesh + key contours for one face.
 * `mirrored` flips horizontally to match a mirrored (selfie) video preview.
 */
export function drawMesh(
  canvas: HTMLCanvasElement,
  landmarks: Landmark[],
  opts: OverlayStyle & { mirrored?: boolean } = {},
): void {
  const ctx = canvas.getContext("2d");
  if (!ctx) return;
  const style = { ...DEFAULTS, ...opts };

  ctx.save();
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  if (opts.mirrored) {
    ctx.translate(canvas.width, 0);
    ctx.scale(-1, 1);
  }

  const utils = new DrawingUtils(ctx);

  // Faint full tessellation for the "mesh" look.
  utils.drawConnectors(landmarks, FaceLandmarker.FACE_LANDMARKS_TESSELATION, {
    color: style.mesh,
    lineWidth: 0.5,
  });

  // Eye, eyebrow, and lip contours — denser, more "wired-up" look.
  for (const set of [
    FaceLandmarker.FACE_LANDMARKS_LEFT_EYE,
    FaceLandmarker.FACE_LANDMARKS_RIGHT_EYE,
    FaceLandmarker.FACE_LANDMARKS_LEFT_EYEBROW,
    FaceLandmarker.FACE_LANDMARKS_RIGHT_EYEBROW,
    FaceLandmarker.FACE_LANDMARKS_LIPS,
  ]) {
    utils.drawConnectors(landmarks, set, {
      color: style.feature,
      lineWidth: 1,
    });
  }

  // Iris rings (only present when the model emits the 478-point set with irises).
  for (const set of [
    FaceLandmarker.FACE_LANDMARKS_LEFT_IRIS,
    FaceLandmarker.FACE_LANDMARKS_RIGHT_IRIS,
  ]) {
    utils.drawConnectors(landmarks, set, {
      color: style.iris,
      lineWidth: 1.5,
    });
  }

  // Stronger highlight on the face oval (the contour we actually measure).
  utils.drawConnectors(landmarks, FaceLandmarker.FACE_LANDMARKS_FACE_OVAL, {
    color: style.contour,
    lineWidth: style.contourWidth,
  });

  ctx.restore();
}

/**
 * DEBUG: draw exactly the 8 landmarks the classifier measures, so we can verify
 * they land where we think (jaw corners, cheeks, forehead, chin). Each point is
 * a labeled dot. Remove once the classifier is calibrated.
 */
export function drawMeasurePoints(
  canvas: HTMLCanvasElement,
  landmarks: Landmark[],
  idx: Record<string, number>,
  opts: { mirrored?: boolean } = {},
): void {
  const ctx = canvas.getContext("2d");
  if (!ctx) return;
  ctx.save();
  if (opts.mirrored) {
    ctx.translate(canvas.width, 0);
    ctx.scale(-1, 1);
  }
  for (const [name, i] of Object.entries(idx)) {
    const lm = landmarks[i];
    if (!lm) continue;
    const x = lm.x * canvas.width;
    const y = lm.y * canvas.height;
    ctx.beginPath();
    ctx.arc(x, y, 5, 0, Math.PI * 2);
    ctx.fillStyle = "rgba(255, 213, 0, 0.95)"; // yellow — stands out from the mesh
    ctx.fill();
    ctx.lineWidth = 1.5;
    ctx.strokeStyle = "rgba(0,0,0,0.7)";
    ctx.stroke();
  }
  ctx.restore();
}
