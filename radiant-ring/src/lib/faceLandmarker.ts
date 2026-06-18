/**
 * faceLandmarker.ts — thin wrapper around MediaPipe FaceLandmarker.
 *
 * Everything runs locally: the WASM runtime and the .task model are vendored in
 * /public/models, so no image data and no network request leaves the browser at
 * analysis time. The heavy MediaPipe module is only imported when one of these
 * functions is first called (the Analyzer dynamic-imports this file), keeping it
 * off the homepage's critical path.
 */
import {
  FilesetResolver,
  FaceLandmarker,
  type FaceLandmarkerResult,
} from "@mediapipe/tasks-vision";

export type { FaceLandmarkerResult };
/** A single normalized landmark (x/y/z in 0..1 relative to the input). */
export interface Landmark {
  x: number;
  y: number;
  z: number;
}

const WASM_PATH = "/models/wasm";
const MODEL_PATH = "/models/face_landmarker.task";

let imageLandmarker: FaceLandmarker | null = null;
let videoLandmarker: FaceLandmarker | null = null;
let filesetPromise: ReturnType<typeof FilesetResolver.forVisionTasks> | null = null;

function resolveFileset() {
  // Resolve the WASM fileset once and reuse it across both running modes.
  filesetPromise ??= FilesetResolver.forVisionTasks(WASM_PATH);
  return filesetPromise;
}

/** Lazily create (and cache) a FaceLandmarker for the given running mode. */
async function getLandmarker(
  mode: "IMAGE" | "VIDEO",
): Promise<FaceLandmarker> {
  if (mode === "IMAGE" && imageLandmarker) return imageLandmarker;
  if (mode === "VIDEO" && videoLandmarker) return videoLandmarker;

  const fileset = await resolveFileset();
  const landmarker = await FaceLandmarker.createFromOptions(fileset, {
    baseOptions: { modelAssetPath: MODEL_PATH, delegate: "GPU" },
    runningMode: mode,
    numFaces: 1,
    minFaceDetectionConfidence: 0.5,
    minFacePresenceConfidence: 0.5,
    minTrackingConfidence: 0.5,
  });

  if (mode === "IMAGE") imageLandmarker = landmarker;
  else videoLandmarker = landmarker;
  return landmarker;
}

/** Warm up the model + WASM ahead of first use (e.g. on mode select). */
export async function preloadLandmarker(
  mode: "IMAGE" | "VIDEO" = "IMAGE",
): Promise<void> {
  await getLandmarker(mode);
}

/** Detect landmarks in a still image element. */
export async function detectImage(
  image: HTMLImageElement | HTMLCanvasElement,
): Promise<FaceLandmarkerResult> {
  const landmarker = await getLandmarker("IMAGE");
  return landmarker.detect(image);
}

/** Detect landmarks in a single video frame (VIDEO mode, monotonic timestamp). */
export async function detectVideoFrame(
  video: HTMLVideoElement,
  timestampMs: number,
): Promise<FaceLandmarkerResult> {
  const landmarker = await getLandmarker("VIDEO");
  return landmarker.detectForVideo(video, timestampMs);
}

/** Release GPU/WASM resources (call when leaving the analyzer). */
export function disposeLandmarkers(): void {
  imageLandmarker?.close();
  videoLandmarker?.close();
  imageLandmarker = null;
  videoLandmarker = null;
}
