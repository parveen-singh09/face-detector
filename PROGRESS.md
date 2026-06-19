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


## 2026-06-18 — Whole-photo display, re-upload fix, 10MB limit, jaw-angularity feature

- **Uploaded photo now shown whole** (`src/components/Analyzer.astro`): `.media`
  and `.overlay` switched from `object-fit: cover` to `contain`, so a photo is
  letterboxed at its natural proportions instead of being zoomed/cropped. The
  overlay canvas uses the same fit so the mesh stays aligned (its buffer is already
  sized to the media's natural dimensions via `syncCanvasSize`).
- **Re-uploading the same file now works**: `resetStage()` was clearing everything
  except `fileInput.value`, so re-selecting the *same* photo fired no `change`
  event (browser sees no change). Added `fileInput.value = ""` to the reset.
- **Upload limit raised 5MB → 10MB**: `MAX_BYTES`, the over-limit message, the
  dropzone hint, and the how-it-works copy in `src/pages/index.astro`.
- **New `jawAngularity` feature** (`src/lib/faceShape.ts`) — researched against
  omnicalculator.com/health/face-shape, whose key discriminator is a "sharpness"
  input. We had no real sharpness signal: round vs. square shared length≈width and
  were split almost entirely by the chin-*tip* angle, which is fragile. The new
  feature measures the interior angle at each jaw corner (gonion) between cheek and
  chin, averages both sides, and maps ~160°→0 (soft/round) .. ~100°→1 (sharp/square)
  onto 0..1. Added to `Features`, all six `SHAPE_PROFILES`, `FEATURE_WEIGHTS` (0.9),
  the scoring sum, the multi-frame median, and the on-screen + console calibration
  readout. Reuses existing landmarks (no new measure points).
- **Note on "100% accuracy"**: not attainable — face shape is a subjective label
  (Omnicalculator says so itself) and borderline faces are genuinely ambiguous.
  These changes improve the round/square/diamond separation, the weakest split.
- **Deferred**: a 7th *Triangle/Pear* shape (jaw wider than cheeks) — would need a
  7th card image via the Pexels fetch script (needs `PEXELS_API_KEY`), so skipped
  for now. Profile sigmas for `jawAngularity` are first-pass and want calibration
  against real faces.
- Verified `npm run build` passes.


## 2026-06-18 — Upload tips for best results

- **Upload-mode guidance** (`src/components/Analyzer.astro`): added a `#upload-tips`
  list (mirrors the camera `#cam-tips`, reuses the `.cam-tips` styling) shown only in
  upload mode. Three tips: use a clear/sharp/well-lit front-facing photo, keep the
  background plain and uncluttered, and groom up (hair off the face, glasses off,
  neutral expression). Wired `uploadTips.hidden = mode !== "upload"` into `resetStage`
  next to the existing `camTips` toggle, so the two tip lists swap cleanly with the
  mode tabs.
- Verified `npm run build` passes.


## 2026-06-18 — Replaced 4 shape card photos with user-provided images

- **New oval/rectangle/round/square portraits**: the user dropped in their own
  images (as large 8–9MB PNGs) for these four shapes. Converted each to an optimized
  JPG at the existing `/shapes/{id}.jpg` path (480×600, `cover` from top, mozjpeg
  q82) via `sharp` — now ~30–44KB each — so the page markup (which expects `.jpg`)
  needs no change and the cards stay light. Deleted the heavy PNG originals.
- `heart.jpg` and `diamond.jpg` are unchanged (still the earlier Pexels portraits).
- Note: `public/shapes/credits.json` still lists Pexels attribution for the four
  replaced shapes — that attribution is now stale and should be cleared/updated if
  these user images aren't Pexels-sourced.
- Verified `npm run build` passes.


## 2026-06-18 — Normalized the new heart shape card image

- The user replaced `public/shapes/heart.jpg` with a full-size portrait
  (1600×1943, 256KB) — far heavier than the other five cards (~480×600, 30–44KB).
  The heart card was already rendering it; the only issue was the weight/size
  mismatch. Re-encoded it in place with the same `sharp` recipe used for the other
  user-provided shapes (480×600, `cover` from top, mozjpeg q82) → now 33KB. All six
  cards are now consistent.
- Verified `npm run build` passes.


## 2026-06-18 — Simplified the shape card frames

- The `.shape-glyph` images were each clipped into a distinct silhouette via
  per-shape `border-radius` (oval ellipse, round circle, heart/diamond curved
  bottoms, etc.), which looked busy and irregular across the grid. Replaced all of
  it with one uniform frame: 80×80, `object-fit: cover`, `--radius-md` rounded
  corners — same for all six cards. Removed the six `.shape-glyph[data-shape="…"]`
  rules and updated the `<img>` intrinsic size to 80×80.
- Verified `npm run build` passes.


## 2026-06-18 — Dark mode + UI polish

- **Dark mode** added as a full theme polarity, driven entirely by the existing
  CSS custom properties so no per-component rewrite was needed:
  - `src/styles/global.css`: light tokens stay on `:root`; a `html[data-theme="dark"]`
    block redefines every `--color-*` token (inverted ink/canvas ladder, dimmer
    body/mute, dark hairlines, brightened link/error/warning + `color-scheme`).
    Kept **unlayered** on purpose — Tailwind's `@theme` emits light tokens to
    `:root` unlayered, so the dark overrides must also be unlayered (and outrank
    `:root`) to win the cascade.
  - New semantic tokens so light-mode hardcodes survive the flip: `--color-band` /
    `--color-on-band` (the privacy polarity-flip band stays a deliberate dark
    surface in both themes instead of inverting with `--color-primary`, which now
    goes white for CTAs); `--shadow-ring` / `--shadow-soft` (card elevation —
    black drop-shadows are invisible on dark, so dark mode uses a brighter inset
    ring + deeper ambient drop); `--mesh-base` (mesh gradient sits on black in
    dark so brand colours glow instead of washing out).
  - `card`/`card-lg` shadows now read those shadow tokens; `::selection` and the
    privacy band/`h2` switched off hardcoded hex onto tokens.
- **No-FOUC theme resolution** (`src/layouts/BaseLayout.astro`): an `is:inline`
  blocking script in `<head>` sets `data-theme` before first paint from saved
  choice → else OS `prefers-color-scheme`.
- **Theme toggle** (`src/components/Nav.astro`): circular icon button (sun/moon,
  DESIGN.md `icon-button-circular`) next to the CTA inside a new `.nav-actions`
  wrapper. Persists choice to `localStorage`, updates `aria-pressed` + the
  `theme-color` meta. Icon shows the theme you'd switch *to*.
- **Polish**: smooth `background-color`/`color` transition on `body`; mesh
  gradient eased (lower opacity/saturation) in dark mode.
- Verified `npm run build` passes. NOT yet checked in a browser — the live
  light/dark toggle, no-flash on reload, and camera/upload chrome under dark
  mode want a manual visual pass.


## 2026-06-18 — Responsive pass (fluid type + spacing + mobile touch targets)

- The grids already collapsed (steps/shapes 3→2→1, analyzer & privacy-band 2→1,
  footer 3→2→1, nav links hide). The gaps were **fixed vertical rhythm, fixed
  heading sizes, and heavy card padding** that didn't scale down on phones.
  Fixed with `clamp()` rather than more breakpoints:
  - **Fluid headings**: all section/analyzer/result/privacy `h2`/`h3` heros
    moved from a hardcoded `32px` + `-1.28px` tracking to
    `clamp(26px, 5vw, 32px)` with relative `line-height: 1.2` and `-0.03em`
    tracking, so they shrink cleanly on small screens.
  - **Fluid section rhythm**: `.section` padding `clamp(4xl, 10vw, 5xl)`;
    `.analyzer-card` padding `clamp(md, 4vw, xl)` (was a fixed 32px, cramped on
    phones).
  - **Mobile spacing tightening** (`index.astro` ≤560px): single-column grids
    get `md` gaps, step/shape cards drop to `lg` padding, FAQ items to
    `sm md`, hero-trust wraps tighter.
  - **Mobile touch targets** (`Analyzer.astro` ≤560px): mode tabs stretch
    full-width (each tab `flex: 1`), and the action buttons stack full-width so
    they're easy to tap.
- Verified `npm run build` passes. Still wants a real-device/devtools visual pass.


## 2026-06-19 — Error pages (404 / 500)

- **Added error pages** that match the brand hero: a shared
  `src/components/ErrorState.astro` (centered layout on the signature
  `MeshGradient`, large gradient-clipped status code, mono "Error NNN" eyebrow,
  heading, explanation, and two recovery CTAs — "Back to home" + "Analyze my
  face"). It sizes to `calc(100vh - 64px)` so it fills the viewport under the
  64px sticky nav, and collapses CTAs to full-width on ≤560px.
- **Thin page wrappers**: `src/pages/404.astro` (Astro auto-serves this as the
  not-found page) and `src/pages/500.astro` (server-error convention). Each just
  sets its own SEO title/description/path via `BaseLayout` and passes copy into
  `ErrorState` — so all chrome (nav, footer, theme, fonts) and styling stay
  consistent with the rest of the site, dark mode included (all tokens reused).
- Note: the app currently builds `static` (no SSR adapter), so `500.astro`
  renders as a static `/500.html` — it'll be served by the host on a 5xx if
  configured, but Astro only auto-wires `500.astro` at runtime under SSR. The
  404 works out of the box on static hosts.
- Verified `npm run build` passes — both `/404.html` and `/500.html` generated.

## 2026-06-19 — Fix camera bleeding into the Upload-photo tab

- **Symptom**: with the **Upload photo** tab visibly active, the stage showed the
  live camera (capture button + "0 of 5 readings" dots) instead of the dropzone.
- **Root cause** (`src/components/Analyzer.astro`): `startCamera()` is async with
  several `await`s (load MediaPipe modules → warm VIDEO landmarker →
  `getUserMedia` → `video.play()`). Clicking **Use camera** then quickly back to
  **Upload photo** ran `setMode("upload")` (which calls `stopCamera()` +
  `resetStage()`) *while* the camera startup was still suspended on `getUserMedia`.
  When the stream finally resolved, the rest of `startCamera()` ran regardless and
  wired the camera into the stage on top of the upload view. `stopCamera()` also
  couldn't help because `stream` was still `null` at that point.
- **Fix**: added a `camGen` generation counter. `startCamera()` captures
  `myGen = ++camGen` at the top and re-checks `stale()` (`myGen !== camGen ||
  mode !== "camera"`) after every await; if stale it bails — stopping the freshly
  granted stream's tracks if `getUserMedia` already resolved — without touching the
  UI or showing a spurious camera error. `stopCamera()` bumps `camGen` to
  invalidate any in-flight startup.
- Verified `npm run build` passes.

## 2026-06-19 — Full favicon set + web manifest

- **Added the complete favicon/PWA icon set** to `src/layouts/BaseLayout.astro`
  `<head>`, alongside the existing SVG favicon: `favicon-96x96.png` (96×96 PNG),
  `favicon.ico` (shortcut icon), `apple-touch-icon.png` (180×180), an
  `apple-mobile-web-app-title` of "FaceShape", and `site.webmanifest`.
- Supporting assets dropped into `public/`: `apple-touch-icon.png`,
  `favicon-96x96.png`, `site.webmanifest`, `web-app-manifest-192x192.png`,
  `web-app-manifest-512x512.png` (192/512 referenced by the manifest), plus
  updated `favicon.ico` / `favicon.svg`.
- Verified `npm run build` passes (all 3 pages generated).

## 2026-06-19 — Use the real favicon as the in-page logo mark

- **Nav + Footer brand marks** (`src/components/Nav.astro`, `src/components/Footer.astro`)
  were rendering a generic gradient `<span>` square (`.nav-logo-mark` /
  `.footer-logo-mark`) that didn't match the site's actual favicon. Replaced each
  with an `<img src="/favicon-96x96.png">` (22px in nav, 20px in footer), keeping the
  rounded-corner frame (`--radius-sm`, `object-fit: cover`) and `aria-hidden`. Used
  the 96×96 PNG (15KB) rather than `favicon.svg` (1MB) since the mark renders tiny.
- Verified `npm run build` passes.

## 2026-06-19 — Accuracy disclaimers (results + footer)

- **Result disclaimer** (`src/components/Analyzer.astro`): added a `.result-disclaimer`
  line inside the `#results` block (under the full breakdown), so it shows with every
  analysis. Copy notes face shape is a subjective label, results are an estimate, and
  can vary with photo angle, lighting, expression, hair, glasses, and camera lens —
  many faces are a blend of two shapes. Styled as small muted text with a hairline
  top border.
- **Site-wide footer disclaimer** (`src/components/Footer.astro`): added a
  `.footer-disclaimer` row below the footer base line with a shorter version of the
  same caveat, framing results as a styling guide rather than definitive/professional
  advice. Appears on every page.
- Both reuse `--color-mute` + `text-wrap: pretty`, so they inherit dark mode and stay
  visually quiet. Complements the existing "How accurate is it?" FAQ entry.
- Verified `npm run build` passes.

