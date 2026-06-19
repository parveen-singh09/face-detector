import { DrawingUtils, FaceLandmarker } from "@mediapipe/tasks-vision";
import type { Landmark } from "./faceLandmarker";

export interface OverlayStyle {
  mesh?: string;
  contour?: string;
  feature?: string;
  iris?: string;
  contourWidth?: number;
}

const DEFAULTS: Required<OverlayStyle> = {
  mesh: "rgba(80, 227, 194, 0.35)",
  contour: "rgba(255, 0, 128, 0.9)",
  feature: "rgba(80, 227, 194, 0.85)",
  iris: "rgba(255, 0, 128, 0.9)",
  contourWidth: 2,
};

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

export function clearOverlay(canvas: HTMLCanvasElement): void {
  const ctx = canvas.getContext("2d");
  if (ctx) ctx.clearRect(0, 0, canvas.width, canvas.height);
}

const utilsCache = new WeakMap<CanvasRenderingContext2D, DrawingUtils>();

function getDrawingUtils(ctx: CanvasRenderingContext2D): DrawingUtils {
  let utils = utilsCache.get(ctx);
  if (!utils) {
    utils = new DrawingUtils(ctx);
    utilsCache.set(ctx, utils);
  }
  return utils;
}

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

  const utils = getDrawingUtils(ctx);

  utils.drawConnectors(landmarks, FaceLandmarker.FACE_LANDMARKS_TESSELATION, {
    color: style.mesh,
    lineWidth: 0.5,
  });

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

  for (const set of [
    FaceLandmarker.FACE_LANDMARKS_LEFT_IRIS,
    FaceLandmarker.FACE_LANDMARKS_RIGHT_IRIS,
  ]) {
    utils.drawConnectors(landmarks, set, {
      color: style.iris,
      lineWidth: 1.5,
    });
  }

  utils.drawConnectors(landmarks, FaceLandmarker.FACE_LANDMARKS_FACE_OVAL, {
    color: style.contour,
    lineWidth: style.contourWidth,
  });

  ctx.restore();
}
