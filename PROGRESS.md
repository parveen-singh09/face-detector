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

## 2026-06-19 — On-page SEO pass (keywords, OG, structured data, 600-word copy)

- **Keyword-optimized meta** (`src/layouts/BaseLayout.astro`): retitled the home
  default to "Free AI Face Shape Analyzer Online — Detect Your Face Shape" and
  rewrote the meta description around the target terms. Added a `keywords` meta
  (all the requested phrases: ai face shape analyzer + best/free/online/online-free
  variants, ai face shape detector, face shape ai analyzer, face shapes, whats my
  face shape, how to determine face shape, face analyzer, face shape calculator,
  face attractiveness analyzer), plus `author` and a `robots`
  (`index, follow, max-image-preview:large, max-snippet:-1`) meta. New optional
  `keywords` prop so inner pages can override.
- **Richer Open Graph / Twitter**: added `og:image:width`/`height` (1200×630),
  `og:image:alt`, `og:locale` (en_US), and `twitter:image:alt` alongside the
  existing OG/Twitter set.
- **Enhanced WebApplication JSON-LD**: added `alternateName`
  ("AI Face Shape Detector & Face Analyzer"), `browserRequirements`, and a
  `featureList`.
- **Homepage** (`src/pages/index.astro`): worked the primary keyword into the
  `<h1>` ("Free AI face shape analyzer — find your face shape."); expanded the FAQ
  from 4 → 6 entries targeting "what is my face shape", "how do I determine my
  face shape", and "is this … free"; added **FAQPage JSON-LD** (built from the
  `faqs` array, `is:inline`) for rich-result eligibility.
- **~600-word SEO section** (`#about`, `.seo-content`): a new soft-band section
  before the FAQ with five sub-headed paragraphs naturally weaving every target
  keyword (best ai face shape analyzer, face shape ai analyzer, how to determine
  face shape, ai face shape analyzer online free, face shape calculator, face
  attractiveness analyzer, etc.), ending with a CTA anchor to `#analyzer`. Styled
  for readable prose (760px max, 26px line-height, `text-wrap: pretty`,
  dark-mode-safe tokens).
- **Generated the missing `/og.png`** (was referenced site-wide but absent —
  broken previews on every share). New `scripts/make-og.mjs` rasterizes a
  brand-matched 1200×630 card (mesh-gradient glow, ink headline, mono URL eyebrow,
  Free/No sign-up/Private pills) via `sharp` → `public/og.png` (~290KB). Re-run with
  `node scripts/make-og.mjs`.
- Verified `npm run build` passes (3 pages); confirmed keywords meta, FAQPage
  schema, and og:image:width all render in `dist/index.html`.

## 2026-06-19 — Reworked the FAQ around face-shape search queries

- **Replaced the 6-entry FAQ** (`src/pages/index.astro`) with a 12-entry set
  targeting the requested long-tail queries: what is a face shape analyzer, how to
  determine / how can I determine my face shape, what face shape do I have, what is
  my / what's my face shape, what shape is my face, how can I / how do I tell my
  face shape, how to tell what face shape you have, how can I find out / how do I
  find / how do I identify my face shape. Each answer is a self-contained,
  search-friendly paragraph that also points back to the analyzer.
- Both the **visible FAQ accordion** and the **FAQPage JSON-LD** are generated from
  the same `faqs` array, so the structured data stayed in sync automatically — no
  separate schema block to maintain (Google requires the on-page and schema FAQ
  text to match).
- Verified `npm run build` passes; confirmed all 12 questions render in the
  FAQPage JSON-LD in `dist/index.html`.

## 2026-06-19 — Removed all privacy / no-upload claims (site-wide)

- **Why**: dropped the "your face never leaves your device / nothing is
  uploaded / 100% private / runs in your browser" messaging everywhere it was
  user-facing. (Internal code comments in `rateLimit.ts`, `faceLandmarker.ts`,
  `meshOverlay.ts` describing the client-side architecture were left as-is —
  they're accurate technical docs, not marketing claims.)
- **Removed the entire Privacy dark band** (`src/pages/index.astro`): deleted the
  `#privacy` `.section-dark` section (heading, sub-copy, the three No
  upload/storage/account points) plus its now-dead CSS (`.section-dark`,
  `.eyebrow-on-dark`, `.privacy-band*`, `.privacy-point*`) and the
  `.privacy-band` responsive rule.
- **Hero**: badge `100% private · runs in your browser` → `Free · 478-point
  face mesh`; sub-copy dropped "private" + "No upload, no sign-up, no data
  leaves your device".
- **Steps / SEO copy / FAQ** (`index.astro`): removed "Nothing is uploaded" from
  step 01; rewrote the "Private by design" SEO sub-section to "Free to use,
  online" (no device/server claims); stripped "private"/"without your image
  leaving your device" from the intro, closing CTA, and the "how can I find out"
  FAQ answer.
- **Analyzer** (`src/components/Analyzer.astro`): trimmed the analyzer sub-copy
  and removed the `.privacy-note` 🔒 line + its dead CSS.
- **Nav / Footer**: removed the `#privacy` "Privacy" links (footer About now
  links `#about`); footer tagline + `footer-mono` line reworded off the privacy
  message.
- **Meta / structured data** (`src/layouts/BaseLayout.astro`): dropped "100%
  private" from the default meta description and from the WebApplication
  `featureList`.
- **500 page** + **OG image** (`scripts/make-og.mjs`): removed the "runs in your
  browser" reassurance; OG sub-line + "✓ Private" pill replaced with face-mesh /
  "✓ 6 shapes" messaging. Regenerated `public/og.png`.
- Verified `npm run build` passes (3 pages); OG regenerated.


## 2026-06-19 — Added legal/company pages (Privacy, Terms, About, Contact)

- **Kept the MPA model**: Astro already builds every file in `src/pages/` to its
  own static HTML page at its own URL (e.g. `/about-us/index.html`), so each new
  page is independently crawlable — ideal for SEO. No SSR/routing changes needed.
- **New shared shell** `src/components/ContentPage.astro`: a calm brand hero
  (eyebrow + h1 + optional lead + "Last updated") on the signature `MeshGradient`
  over a soft band, followed by a 760px prose column. Styles the slotted page
  markup via `:global()` (p/h2/h3/ul/ol/li/strong/a/hr) using DESIGN.md tokens, so
  it inherits dark mode. Each page is a thin `BaseLayout` + `ContentPage` wrapper
  that sets its own SEO (title/description/path/keywords) and passes body copy.
- **Four pages added** (`src/pages/`): `privacy-policy.astro`,
  `terms-and-conditions.astro`, `about-us.astro`, `contact.astro`. Each has
  keyword-targeted meta + canonical path. Privacy/Terms note results are an
  estimate / not professional advice (consistent with the site-wide disclaimer)
  and carry a "not legal advice" footnote — placeholder legal copy the owner
  should review.
- **Contact page** is email-driven (no backend exists — static build): lists
  `hello@` + `privacy@` addresses and a small JS-validated form that builds a
  `mailto:` with the message pre-filled (`is:inline` script, no network call).
  Inputs use focus-visible rings via `--color-primary`; `--color-error` for
  validation text.
- **Footer** (`src/components/Footer.astro`): added a 4th "Company" column linking
  all four pages, so they're visible from the homepage (footer renders on every
  page). Grid `2fr 1fr 1fr` → `2fr 1fr 1fr 1fr`; existing responsive rules already
  collapse it (4→2 cols ≤760px, base stacks ≤480px). Also made the Product/About
  anchor links root-absolute (`/#analyzer` etc.) so they jump to the homepage from
  sub-pages instead of staying on the current page.
- Verified `npm run build` passes (now 7 pages); confirmed all four new URLs are
  in `dist/sitemap-0.xml` and the footer links resolve in `dist/index.html`.

## 2026-06-19 — Mesh gradient restricted to home + nav links reworked

- **`MeshGradient` now homepage-only**: removed it from `ContentPage.astro` (the
  four legal/company pages) and `ErrorState.astro` (404/500), along with their
  `.page-hero-mesh` / `.error-mesh` CSS. Those heros now sit on the plain page
  background. (Earlier in the session the content-page hero's `border-bottom`
  hairline was also removed — in dark mode it read as a hard bright seam where the
  hero met the section below.) Grep confirms `MeshGradient` is referenced only by
  `index.astro` + its own component file.
- **Header nav links** (`src/components/Nav.astro`) changed from
  How it works / Face shapes / FAQ → **Face shapes / About / Contact / T&C**. All
  root-absolute (`/#shapes`, `/about-us`, `/contact`, `/terms-and-conditions`) so
  they work from any sub-page, not just the homepage.
- Verified `npm run build` passes (7 pages).


## 2026-06-19 — Tuned the auto-generated sitemap

- The sitemap was already wired (`@astrojs/sitemap` in `astro.config.mjs`,
  `robots.txt` points to `/sitemap-index.xml`) but emitted with defaults — it
  listed the `404`/`500` error pages and had no priorities/changefreq.
- **Updated `sitemap()` config** (`radiant-ring/astro.config.mjs`):
  - `filter` drops `/404` and `/500` (both trailing-slash variants) so error
    pages stay out of the index.
  - `serialize` sets the homepage to `priority 1.0` / `changefreq weekly` and
    every other page to `0.7` / `monthly`.
- Output is generated at build time → `dist/sitemap-index.xml` +
  `dist/sitemap-0.xml` (NOT a hand-written `public/sitemap.xml`, which would
  drift as pages are added). Re-runs automatically on every `npm run build`.
- Verified `npm run build` passes; confirmed `sitemap-0.xml` contains the 5
  real pages with correct priorities and excludes 404/500.

## 2026-06-19 — Added Privacy link to the header nav

- **Header nav** (`src/components/Nav.astro`) now reads Face shapes / About /
  Contact / **Privacy** / T&C. Added a root-absolute `/privacy-policy` link
  (matching the existing pattern) between Contact and T&C, so the privacy page
  is reachable from the header on every page (it was already linked in the
  footer Company column). Mobile still hides `.nav-links` ≤760px — unchanged.
- Verified `npm run build` passes (7 pages).

## 2026-06-19 — Full i18n (15 languages) + mobile responsiveness pass

Internationalized the entire site into **15 languages** and closed the mobile
nav gap. No new runtime dependency — uses Astro 6.4's built-in i18n routing.

**Languages (15):** English (default, at site root) + es, fr, de, pt, it, nl,
ru, ja, ko, zh, hi, **ar (RTL)**, id, tr. URL strategy: English at current URLs
(`/`, `/about-us`); every other locale prefixed (`/es/`, `/ar/about-us`, …),
`prefixDefaultLocale: false`. All existing English URLs/SEO unchanged.

**i18n core (new `src/i18n/`):**
- `config.ts` — `LOCALES`, `LOCALE_LABELS` (native names), `RTL_LOCALES=["ar"]`,
  `OG_LOCALE`, `HREFLANG` (BCP-47), `DEFAULT_LOCALE`, `isRtl()`/`isLocale()`.
  The `locales` list is mirrored in `astro.config.mjs` (i18n block) — keep in sync.
- `utils.ts` — `getLangFromUrl`, `useTranslations(lang)` (returns the typed dict,
  falls back to en), `localizePath`/`delocalizePath` (canonical + switcher).
- `ui/en.ts` — the **source-of-truth** dictionary (every UI string, the homepage
  SEO prose, all 4 content pages' prose as `set:html` HTML, error/contact copy).
  `export type UIStrings = typeof en` (NOT `as const`, so locales can differ).
  `ui/<locale>.ts` × 14 — full translations satisfying `UIStrings` (a missing/
  mistyped key is a compile error). Generated by 14 parallel sub-agents; keys,
  `{placeholders}`, HTML tags, hrefs, and the brand name preserved verbatim.

**Routing (shared-component pattern, no body duplication):**
- Page bodies moved to `src/components/pages/{Home,About,Contact,Privacy,Terms}Page.astro`,
  each taking a `lang` prop and rendering its own `BaseLayout`.
- Root routes (`src/pages/*.astro`) are now thin `<XPage lang="en" />` wrappers;
  new `src/pages/[lang]/*.astro` `getStaticPaths()` over the 14 non-default
  locales render the same components. 404/500 stay English-only (Astro convention).
- `faceShape.ts`: kept English `SHAPE_LABELS`/`SHAPE_DESCRIPTIONS` (classifier
  logic untouched) + added `SHAPE_IDS`; localized labels now come from the dict.
- `Analyzer.astro` + `ContactPage.astro`: script-side strings (status/error msgs,
  dynamic "Capture reading (N/5)", form validation, mailto subject) serialized
  into a `<script type="application/json">` i18n island the inline script reads —
  logic stays separate from copy.

**SEO (`BaseLayout.astro`):** `<html lang dir>`, localized canonical, **hreflang
  alternates for all 15 locales + x-default**, localized `og:locale`, `inLanguage`
  in JSON-LD. Sitemap (`@astrojs/sitemap` `i18n` option) emits per-URL hreflang;
  still excludes 404/500. Privacy/Terms/About show a translated
  "machine-translated; English is authoritative" notice on non-en locales
  (`ContentPage` `mtNotice` prop).

**Mobile + RTL:**
- **Hamburger menu** (the blocker): `Nav.astro` ≤760px now shows a hamburger that
  opens a dropdown with the nav links + `LangSwitcher` (new component, native
  `<select>` that maps the current path to each locale). Was: links just hidden
  with no replacement. Esc/resize/link-click close it; `aria-expanded`/label swap.
- Touch targets: theme toggle 36→44px, menu button 44px, mobile links `min-height:44px`.
- Overflow guard: `overflow-x: clip` on html/body in `global.css`.
- RTL: logical properties (`inset-inline-*`, `padding-inline-*`) throughout; Arabic
  mirrors via `dir="rtl"` with no per-string bidi hacks.

**Verified:** `npm run build` passes — **77 pages** (7 routes × locales, errors
en-only). Confirmed in `dist/`: per-locale `lang`/`dir` (e.g. `ar` → `dir="rtl"`),
15 hreflang + x-default with correct hrefs, localized canonicals + in-body nav
links, sitemap alternates, MT notice on translated legal pages, and real
translated script rendered (Devanagari/Arabic/Japanese present, not en fallback).

**NOT yet done (needs a human/browser):** real-device tap-through of the hamburger
+ language switcher + camera flow; native-speaker review of the machine
translations (especially the legal prose — the on-page notice sets that
expectation). The `serialize` changefreq type warnings in `astro.config.mjs` are
pre-existing and don't block `astro build`.

## 2026-06-19 — Custom-styled language dropdown (replaced native <select>)

- **Problem**: the `LangSwitcher` used a native `<select>`, so the *open* dropdown
  list was rendered by the OS — un-themable. It ignored our design tokens: hard
  OS-blue selected-row highlight, no dark mode, cramped rows, no brand chrome
  (the screenshot the user flagged).
- **Rewrote `src/components/LangSwitcher.astro`** as a hand-built listbox (trigger
  button + popup `<ul>`) styled entirely with DESIGN.md tokens, so it themes and
  goes dark like everything else. Trigger is the same 36px pill (globe + current
  language + a chevron that flips on open); the popup is a `card-lg`-style floating
  panel with rounded corners, soft shadow, hairline border, a check-mark on the
  active locale, hover/keyboard highlight via `--color-canvas-soft-2`, scrolls at
  `min(60vh,360px)` for the 15-item list.
- **Accessibility preserved/upgraded**: proper `role="listbox"`/`role="option"`,
  `aria-haspopup`, `aria-expanded`, `aria-activedescendant`, `aria-selected`.
  Keyboard: ↑/↓/Home/End move, Enter/Space choose, Esc closes (refocus trigger),
  Tab closes, click-outside closes. Each instance gets a unique id namespace
  (`Math.random`) so the desktop-nav + mobile-drawer copies don't collide; the
  controller is a bundled module that wires every `[data-lang-switcher]` and
  guards against double-init.
- **RTL-safe** (logical `inset-inline-*`); `.is-block` mobile-drawer variant makes
  the trigger full-width and pins the popup to the drawer edges. Respects
  `prefers-reduced-motion` (no open animation).
- Verified `npm run build` passes (77 pages). Still wants a real-browser
  tap/keyboard pass.

## 2026-06-19 — Flag icons in the language switcher

- **Added circular flag icons** to each option in `LangSwitcher.astro` (matching a
  reference dropdown design). The trigger keeps the globe + current-language pill
  unchanged; only the open menu now shows a 20px round flag before each language
  label, after the check-mark/spacer column.
- **Vendored 15 flag SVGs locally** to `public/flags/` (from HatScripts/circle-flags,
  one curl per file) — no runtime CDN, consistent with the rest of the app. New
  `LOCALE_FLAG` map in `src/i18n/config.ts` pairs each locale with a flag basename;
  since a locale is a language not a country, picks the representative flag
  (en→gb, pt→pt, zh→cn, hi→in, ar→sa, ja→jp, ko→kr).
- Flags render as `<img src="/flags/{code}.svg">` (`aria-hidden`, `loading="lazy"`,
  rounded with a `--color-hairline` ring so light flags like Japan don't bleed into
  the menu surface in either theme).
- Verified `npm run build` passes (77 pages); confirmed all 15 flags copy to
  `dist/flags/` and render with correct `src` in `dist/index.html`.

## 2026-06-19 — Minimal scrollbar in the language dropdown

- The 15-language list overflows the popup's `min(60vh, 360px)` cap, so it showed
  the chunky native Windows scrollbar (full-width, with arrow buttons) — out of
  place in the themed popup. Styled it down in `LangSwitcher.astro`:
  - Firefox: `scrollbar-width: thin` + `scrollbar-color` (hairline thumb,
    transparent track).
  - Chromium/WebKit: 8px `::-webkit-scrollbar` with a rounded, inset hairline
    thumb (`background-clip: padding-box` + transparent border → slim pill, no
    arrow buttons), darkening to `--color-mute` on hover.
- Both use design tokens, so the scrollbar stays subtle and inherits dark mode.
- Verified `npm run build` passes (77 pages).


## 2026-06-19 — Pre-deploy cleanup (removed debug/calibration code + unused files)

Cleanup pass ahead of deployment. Removed the temporary calibration scaffolding
(all marked "remove once the classifier is dialed in") and leftover starter files:

- **Debug logging gone** (`src/components/Analyzer.astro`): deleted the
  `console.log("[faceShape] measured features", …)` + `console.table(...)` calls
  and the on-screen `#result-metrics` readout (the L/W · fore/cheek · jaw/cheek ·
  chin° · jaw-angle line). Removed the now-dead `resultMetrics` element handle,
  its `<p id="result-metrics">` markup, and the `.result-metrics` CSS. Kept the
  three legitimate `console.error(err)` calls in the catch blocks.
- **Debug overlay removed** (`src/lib/meshOverlay.ts`): deleted the
  `drawMeasurePoints()` function (yellow measure-point dots) and its only call
  site in `Analyzer.astro`. Dropped the `MEASURE_IDX` export from
  `src/lib/faceShape.ts` and its import in `Analyzer.astro` (existed solely to
  feed that debug overlay).
- **Unused starter assets deleted**: `src/assets/astro.svg` +
  `src/assets/background.svg` (Astro "basics" template leftovers, referenced
  nowhere in `src/`); removed the empty `src/assets/` dir.
- **Note on comments**: did NOT strip source comments wholesale — the build
  already strips them from shipped JS/CSS, and the explanatory ones aid
  maintenance. Only removed comments attached to the deleted debug code.
- Verified: `npm run build` passes (77 pages); confirmed `dist/` contains no
  `measured features` / `[faceShape]` / `drawMeasurePoints` / `MEASURE_IDX`
  strings, and `src/` has no `console.log`/`console.table`/`result-metrics`
  leftovers.

