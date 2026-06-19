import {
  FilesetResolver,
  FaceLandmarker,
  type FaceLandmarkerResult,
} from "@mediapipe/tasks-vision";

export type { FaceLandmarkerResult };
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
  filesetPromise ??= FilesetResolver.forVisionTasks(WASM_PATH);
  return filesetPromise;
}

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

export async function preloadLandmarker(
  mode: "IMAGE" | "VIDEO" = "IMAGE",
): Promise<void> {
  await getLandmarker(mode);
}

export async function detectImage(
  image: HTMLImageElement | HTMLCanvasElement,
): Promise<FaceLandmarkerResult> {
  const landmarker = await getLandmarker("IMAGE");
  return landmarker.detect(image);
}

export async function detectVideoFrame(
  video: HTMLVideoElement,
  timestampMs: number,
): Promise<FaceLandmarkerResult> {
  const landmarker = await getLandmarker("VIDEO");
  return landmarker.detectForVideo(video, timestampMs);
}

export function disposeLandmarkers(): void {
  imageLandmarker?.close();
  videoLandmarker?.close();
  imageLandmarker = null;
  videoLandmarker = null;
}
