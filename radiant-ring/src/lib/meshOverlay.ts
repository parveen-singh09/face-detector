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
  /** Line width for contour features. */
  contourWidth?: number;
}

const DEFAULTS: Required<OverlayStyle> = {
  // Brand gradient can't be applied per-line cheaply; use the brand cyan + ink.
  mesh: "rgba(80, 227, 194, 0.35)", // brand cyan, faint
  contour: "rgba(255, 0, 128, 0.9)", // brand highlight-pink
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

  // Stronger highlight on the face oval (the contour we actually measure).
  utils.drawConnectors(landmarks, FaceLandmarker.FACE_LANDMARKS_FACE_OVAL, {
    color: style.contour,
    lineWidth: style.contourWidth,
  });

  ctx.restore();
}
