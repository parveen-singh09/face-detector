# Project Progress Log

A running record of what's been set up in this repo. Newest entries at the bottom.

## 2026-06-18

1. **Cleared the workspace** — deleted all previous contents of `n:\ai-face-detector`
   (old config files, `kiro-gateway/`, and the entire `violet-visual/` Astro app
   including its git history). Started from an empty folder.

2. **Scaffolded a fresh Astro app** (minimal template, deps installed).
   - Node v22.13.0, npm 10.9.2.
   - The app folder has been renamed a few times: `my app` → `my-app` → **`radiant-ring`** (current).

3. **Added a Vercel-inspired design system** via `npx getdesign@latest add vercel`
   - Created `radiant-ring/DESIGN.md` — the UI reference spec.
   - Rule: read `radiant-ring/DESIGN.md` before writing any UI so styling matches Vercel's design language.
   - Note: this command was run more than once; it overwrites `DESIGN.md` each time.

4. **Installed the `web-design-guidelines` skill** from `vercel-labs/agent-skills`
   via `npx skills add ... --skill web-design-guidelines`.
   - Location: `radiant-ring/.agents/skills/web-design-guidelines` (symlinked into Claude Code & Kiro CLI).
   - Security scan: Gen = Safe, Socket = 0 alerts, **Snyk = Med Risk**. Skills run with full
     agent permissions — review before relying on it. Details: https://skills.sh/vercel-labs/agent-skills

5. **Installed the `tailwind-4-docs` skill** from `Lombiq/Tailwind-Agent-Skills`
   via `npx skills add Lombiq/Tailwind-Agent-Skills`.
   - Location: `radiant-ring/.agents/skills/tailwind-4-docs` (symlinked into Claude Code & Kiro CLI).
   - Tailwind CSS v4 docs snapshot + workflow guidance (utility/variant selection, v4 config, v3→v4 migration).
   - Security scan: Gen = Safe, Socket = 0 alerts, **Snyk = Med Risk**. Details: https://skills.sh/Lombiq/Tailwind-Agent-Skills
   - NOTE: Tailwind itself is NOT installed in the app yet — this is reference docs only.
     Run `npx astro add tailwind` to actually add it.

6. **Made PROGRESS.md the shared context for all coding agents.**
   - Created `AGENTS.md` (cross-tool standard — Kiro, Cursor, Codex, etc.) instructing
     agents to read this file first and keep it updated.
   - Created `CLAUDE.md` that imports `AGENTS.md` (`@AGENTS.md`) so Claude Code gets the
     same instructions with no drift.

## Project layout

```
n:\ai-face-detector\
├── .git/                  # top-level git repo
├── AGENTS.md              # shared agent instructions (read PROGRESS.md first)
├── CLAUDE.md              # imports AGENTS.md for Claude Code
├── PROGRESS.md            # this file
└── radiant-ring/          # the Astro application
    ├── DESIGN.md          # Vercel-inspired design system (read before building UI)
    ├── src/
    ├── public/
    ├── astro.config.mjs
    ├── package.json
    └── tsconfig.json
```

## Commands (run from `radiant-ring/`)

- `npm run dev` — start dev server (default port 4321)
- `npm run build` — production build
- `npm run preview` — preview the build

## 2026-06-18 — Built the AI Face Shape Analyzer (Core MVP)

The product: **AI Face Shape Detector** (domain: aifaceshapeanalyzer.com). A free,
fast, privacy-first web app that detects face shape from an uploaded photo (≤5MB)
or live camera, **entirely in the browser** — no image ever leaves the device.
Built against `radiant-ring/DESIGN.md` (Vercel design language). Competitors
analyzed: findmyfaceshape.ai, faceshapedetector.ai, detect-face-shape.com.

**Differentiators we shipped vs. competitors:**
- Real-time **face mesh overlay** on the camera (none of the competitors show this).
- **Full probability breakdown** across all 6 shapes + confidence + "blend of two
  shapes" detection (competitors mostly give a single answer).
- Genuinely 100% client-side (model + WASM vendored locally) — a real privacy claim,
  not a server-side promise.
- Accessibility-first (skip link, focus-visible rings, ARIA, reduced-motion).

**Stack added:** Tailwind v4 (`@tailwindcss/vite`), `@mediapipe/tasks-vision`
(FaceLandmarker, 478 landmarks), `@astrojs/sitemap`, self-hosted fonts
(`@fontsource-variable/inter` + `jetbrains-mono`). No UI framework — vanilla TS +
Astro, so the homepage ships ~11K JS; the 130K MediaPipe bundle is a separate chunk
loaded only when the user activates a mode.

**Vendored locally (no runtime CDN):** `public/models/face_landmarker.task` (3.7MB)
and `public/models/wasm/` (SIMD + nosimd `vision_wasm_internal` variants).

**Key files:**
- `src/styles/global.css` — DESIGN.md tokens mapped into Tailwind v4 `@theme` + button/card utilities.
- `src/layouts/BaseLayout.astro` — SEO/OG/JSON-LD head, fonts, skip link, Nav + Footer.
- `src/components/` — `Nav`, `Footer`, `MeshGradient` (signature gradient), `Analyzer`
  (upload/camera/live-mesh/results), `ShapeBar` (probability row).
- `src/lib/` — `faceLandmarker.ts` (MediaPipe wrapper, lazy-loaded), `faceShape.ts`
  (the classifier: landmarks → anthropometric ratios → 6-shape distribution; tunable
  `SHAPE_PROFILES`/`FEATURE_WEIGHTS`), `meshOverlay.ts` (canvas mesh drawing),
  `rateLimit.ts` (localStorage soft throttle, 20/hour).
- `src/pages/index.astro` — homepage: hero + analyzer + how-it-works + 6 shapes +
  privacy dark band + FAQ.
- `public/robots.txt`, `public/favicon.svg`, `astro.config.mjs` (`site` set for sitemap/canonical).

**Verified:** `npm run build` passes; dev server serves homepage + all vendored
assets (correct `application/wasm` type); code-splitting confirmed (MediaPipe deferred);
ran the `web-design-guidelines` review and applied fixes (curly punctuation,
`text-wrap: balance` on headings, `touch-action: manipulation` on buttons/tabs).

**NOT yet tested (needs a real browser + webcam + face photos — can't be done via curl):**
the full upload → result, live camera mesh, and rate-limit-trip flows. The classifier
thresholds in `faceShape.ts` are first-pass and will likely need calibration against
real faces.

## Next steps / deferred (follow-up pass)

- Manually test upload/camera/rate-limit in a browser; calibrate `SHAPE_PROFILES`.
- Per-shape detail pages; hair/glasses/makeup recommendations (men/women).
- FAQ/blog/SEO long-form content pages.
- Detailed metrics panel (Farkas ratios), multi-frame camera averaging, shareable result card.
- Server-side (Vercel Edge) rate limiting if abuse becomes an issue.
- Generate a real `/og.png` social image (referenced in `<head>` but not yet created).

## 2026-06-18 — Mesh overlay detail + multi-frame camera capture

- **Denser mesh overlay** (`src/lib/meshOverlay.ts`): added eye, eyebrow, and lip
  contours (brand cyan) plus iris rings (highlight-pink) on top of the tessellation
  and face oval. Clarified that MediaPipe's coverage is anatomically bounded
  (forehead-to-chin only — no hair/ears/neck); the extra contours make the overlay
  read as more "wired up" within that region without faking coverage.
- **5-round camera capture** (`src/components/Analyzer.astro` + `faceShape.ts`):
  `captureAndAnalyze` now pauses the live loop and samples `CAPTURE_FRAMES` (5) good
  readings spaced `CAPTURE_GAP_MS` (120ms) apart, then averages them. New
  `classifyFaceMulti()` takes the **median** of each anthropometric feature across
  frames (robust to a single bad frame from a blink/tilt) and scores once via the
  extracted `classifyFromFeatures()`. Falls back gracefully if the face is lost
  mid-capture (resumes the live loop). Status pill shows "Reading N of 5…".
- **Capture tips UI**: added a `#cam-tips` list shown only in camera mode — remove
  glasses, face straight on with hair off the face, hold still (we average 5 reads).
- Verified `npm run build` passes.

## 2026-06-18 — Visible capture progress dots

- **Capture progress indicator** (`src/components/Analyzer.astro`): added a
  `#cap-progress` element — a row of `CAPTURE_FRAMES` dots plus an "N of 5 readings"
  label — so the user can see how many readings remain during a camera capture.
  Dots fill (brand cyan, slight scale-up) as each good reading lands via
  `updateCaptureProgress()`. During capture the live `#cam-status` pill is hidden and
  the progress strip takes its place (same bottom-left position/styling); on
  success/failure the pill returns. Helpers: `showCaptureProgress`,
  `updateCaptureProgress`, `hideCaptureProgress`; also hidden in `resetStage`.
  Respects `prefers-reduced-motion`.
- **Slower capture pacing**: `CAPTURE_GAP_MS` raised 120ms → 700ms so each reading
  (and its progress dot) lands with a visible, deliberate beat and the user has time
  to hold still. The loop now skips the trailing wait after the final reading so
  results still appear promptly. Total paced capture ≈ 2.8s.
- **Rate limit raised**: `MAX_PER_WINDOW` 20 → 100 analyses per rolling hour
  (`src/lib/rateLimit.ts`). Still a soft client-side deterrent; all derived UI
  (remaining count, limit message, retry-after) follows from the constant.
- Verified `npm run build` passes.

## 2026-06-18 — Click-driven camera capture (one click per reading)

- **Capture model changed** (`src/components/Analyzer.astro`): instead of one click
  kicking off an automatic timed 5-frame loop, the live preview now runs throughout
  and **each click snapshots one reading** from the currently-tracked landmarks.
  After the `CAPTURE_FRAMES`-th (5th) click we stop the loop, average via
  `classifyFaceMulti`, and show the result. The user paces themselves.
- `captureAndAnalyze` is now synchronous: guards on a detected face, pushes
  `lastLandmarks`, fills the next progress dot, and updates the capture button label
  (`Capture reading (N of 5)`) + status text. `recordAnalysis()` fires once, on the
  final click (5 clicks = 1 counted analysis). New module accumulator `captureFrames`
  (cleared in `resetStage` and on `startCamera`).
- The live `runVideoLoop` status text is now capture-aware ("click for the next
  reading", showing N of 5). Empty progress dots show from camera start.
- Moved the `.cap-progress` strip to **top-left** so it no longer collides with the
  live status pill (bottom-left), since both are now visible at once.
- Removed the now-unused `CAPTURE_GAP_MS` pacing constant; updated the camera tip
  copy to "Click to capture 5 readings".
- Verified `npm run build` passes.

## 2026-06-18 — Real face photos on the shape cards

- **Shape cards now show face photos** instead of black CSS glyphs
  (`src/pages/index.astro`): the `.shape-glyph` is now an `<img>` at
  `/shapes/{id}.jpg`, still clipped to each shape's `border-radius` silhouette
  (`object-fit: cover`), sized up to ~72–96px. Mixed set — women on
  oval/rectangle/heart, men on round/square/diamond.
- **Build-time fetch** (`scripts/fetch-shape-faces.mjs`): pulls one portrait per
  shape from the **Pexels API** into `public/shapes/` plus a `credits.json`
  (photographer attribution — Pexels ToS). Images are served LOCALLY so there's no
  third-party request on page load and the API key never reaches the browser. Re-run
  with `PEXELS_API_KEY=xxxx node scripts/fetch-shape-faces.mjs`. Key is read from env
  only, never written to disk or committed. NOTE: Pexels search returns
  representative portraits, not geometrically shape-matched faces.
- Verified `npm run build` passes.

## 2026-06-18 — Fix "everything reads round" length miscalculation

- **Root cause** (`src/lib/faceShape.ts`): `lengthToWidth` was computed from
  landmark 10 (forehead-top) → 152 (chin). Landmark 10 sits *below* the hairline,
  so face length was systematically under-reported. The `SHAPE_PROFILES` were
  built from textbook *hairline-to-chin* ratios (oval 1.5, rectangle 1.68), so the
  too-short length dragged nearly every face's ratio down toward `round`'s profile
  (length≈width, mu 1.05) — making round win regardless of actual shape.
- **Fix**: derive face length via the facial-thirds rule. Glabella (landmark 9,
  between the brows) → chin is the lower two-thirds of the face, so full length ≈
  that distance × 1.5 — a calibration-independent estimate that matches the
  profiles. We take `max(glabella→chin × 1.5, forehead-top→chin)` so a genuinely
  tall forehead isn't clipped.
- Verified `npm run build` passes. Still needs validation against real face photos
  in a browser; profile sigmas may want further calibration.


