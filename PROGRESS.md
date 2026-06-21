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

## 2026-06-19 — Full comment strip across the source tree

Per a follow-up "remove comments also" before deploy, stripped ALL comments from
every source file (`src/**/*.{ts,astro,css}` + `astro.config.mjs`). Comments don't
ship to users (the build already strips them from the bundle), so this is a
source-tidiness pass, not a perf change.

- **Scope**: all 48 source files — the 31 i18n files (`config.ts`, `utils.ts`,
  `en.ts` source-of-truth + 14 locale dicts), all `.astro` components/layouts/pages,
  the 4 `src/lib/*.ts` modules, `global.css`, and `astro.config.mjs`. Removed `//`,
  `/* */`, `/** */` (JS/TS), `/* */` (CSS), and `<!-- -->` (HTML) comments;
  collapsed resulting 2+ blank-line runs to one.
- **Preserved (NOT comments / functional)**: `// @ts-check` in `astro.config.mjs`
  (a directive that enables config type-checking); Astro frontmatter `---` fences;
  the empty `catch {}` / `catch (e) {}` blocks whose only body was a comment (kept
  as valid empty blocks so the fail-open / skip-bad-frame logic is unchanged).
- **Safety method**: pre-verified that NO `//`, `/*`, `*/`, or `<!--` sequence
  existed inside any string literal anywhere in `src/`, and that the only `://`
  URL literals were 3 in `src/` (HomePage `schema.org`, BaseLayout `SITE` +
  `schema.org`) + 2 in the config. Treated `://` count as an invariant. Ran the
  strip as 6 parallel sub-agents grouped by file type with strict
  preserve-strings rules; one agent hash-checked all non-comment lines before/after
  to prove zero string bytes changed.
- **Verified**: `npm run build` passes (77 pages); post-strip `grep` confirms zero
  `//` / `/* */` / `<!--` comment markers remain in `src/` (and only `// @ts-check`
  in the config); the `://` invariant holds (3 in src + 2 in config = 5, all the
  original URL literals, none corrupted).
- Note: this session also revealed the earlier i18n/legal-pages/icons work was
  never committed — `git status` shows `src/i18n/`, `src/components/pages/`, the
  new `src/pages/*` routes, and the favicon/flag/og assets as untracked/modified.
  The repo was NOT committed as part of this pass (no commit was requested).

## 2026-06-19 — Full-viewport hero gradient on every device

- **Hero now fills the first screen** (`src/components/pages/HomePage.astro`):
  `.hero` got `min-height: calc(100svh - 64px)` (with a `100vh` fallback line
  above it) so the band always spans the viewport minus the 64px sticky nav, and
  it now centers its content vertically (`display:flex; align-items:center`).
  `.hero-inner` is `width:100%` with symmetric `4xl` block padding (was
  `5xl`/`4xl`, since content is now centered rather than top-anchored).
- **Mesh covers the whole first screen**: the `.hero-mesh` fade mask moved from
  `linear-gradient(... black 40% ...)` to `black 88%`, so the gradient extends
  across the full hero instead of fading out at ~40% height. Used `svh` so mobile
  browser chrome (URL bar) doesn't leave a gap.
- Verified `npm run build` passes (77 pages).

## 2026-06-19 — Pre-deploy review pass (camera leaks, SEO canonical, hardening)

Full pre-deploy audit (3 parallel reviewers + manual code verification). Build
passes (77 pages); i18n verified clean across all 15 locales (no missing keys,
broken placeholders, or HTML/href drift); all asset references resolve. Fixed
the confirmed bugs:

- **Webcam left running after a successful capture** (`Analyzer.astro`
  `captureAndAnalyze`): on the 5th reading the rAF loop + capture button were
  stopped but the `MediaStream` tracks were never stopped, so the physical
  camera/LED stayed on until tab switch or page leave. Now computes the result
  first, then calls `stopCamera()` before rendering (kept the order so the catch
  path can still resume the live loop if classification throws).
- **Live stream leaked on Reset in camera mode** (`reset()`): `resetStage()`
  never stops tracks, and `startCamera()` overwrote `stream` with a fresh one,
  orphaning the old still-running track. `reset()` now calls `stopCamera()`
  before `startCamera()`. (The `camGen` race fix itself was sound — the gap was
  that only `stopCamera()` stops tracks and two flows skipped it.)
- **Stuck loading spinner on MediaPipe load failure in camera mode**
  (`startCamera` catch): added `hideLoading()` so a failed module/WASM import
  shows the error instead of a permanent spinner (the image flow already did
  this via `finally`).
- **SEO canonical/sitemap trailing-slash mismatch** (`src/i18n/utils.ts`
  `localizePath`): sub-page canonicals/hreflang emitted `…/about-us` (no slash)
  while the sitemap emitted `…/about-us/`, so canonicals pointed at a URL the
  host would 301-redirect. Added a hash-aware `ensureTrailingSlash` so all
  localized paths get a trailing slash **without** corrupting anchor links
  (`/#analyzer`, `/#main`) or the `set:html` privacy/terms links. Verified in
  `dist/`: canonical, hreflang (15 + x-default), sitemap, and in-body links all
  agree now; hashes preserved.
- **Defensive guard in the classifier** (`faceShape.ts` `computeFeatures`):
  throws on an incomplete landmark set (`length <= maxIdx`) instead of a raw
  TypeError — latent today (MediaPipe always returns 478) but safe for future
  callers / `classifyFaceMulti`.
- **Per-frame `DrawingUtils` allocation** (`meshOverlay.ts`): was `new
  DrawingUtils(ctx)` ~60×/sec during the camera loop; now cached per-context in
  a `WeakMap`.
- **Upload UX/leak fixes** (`Analyzer.astro` `handleFile`): clear `fileInput.value`
  so re-selecting the **same** photo re-fires `change`; revoke any prior pending
  object URL before creating a new one (fast double-pick leak); hide stale
  results + clear the mesh overlay on new upload and on the no-face path; bail
  with a message if the video has zero dimensions at capture time.
- **Manifest name consistency** (`public/site.webmanifest`): `name`
  `aifaceshapeanalyzer.com` → `AI Face Shape Analyzer`, `short_name` `Faces` →
  `FaceShape`, matching the og/JSON-LD/apple-touch branding.
- **Tooling note**: the i18n type-check run added `@astrojs/check` + `typescript`
  to `devDependencies` (used for `astro check`). `astro check` reports 8
  pre-existing, non-blocking errors (sitemap `changefreq` literal types, two
  `@fontsource-variable/*` missing type decls, four `Landmark[]` vs
  `NormalizedLandmark[]` casts in `meshOverlay.ts`) — none affect `astro build`.
- **Deferred (not bugs)**: rate-limit boundary allows ~1 extra analysis at the
  exact 100-hit edge (soft client-side limit, not worth the flow complexity);
  stale `public/shapes/credits.json` (orphaned Pexels attribution) can be removed.
- Verified `npm run build` passes (77 pages) after all changes.

## 2026-06-19 — Hide the in-result disclaimer on mobile

- **`.result-disclaimer`** (the "Heads up: face shape is a subjective label…"
  box rendered under the breakdown in `src/components/Analyzer.astro`) is now
  `display: none` at the existing `≤560px` breakpoint. It stays visible on
  tablet/desktop.
- The **site-wide footer disclaimer** (`src/components/Footer.astro`) is
  untouched — the shorter caveat still appears at the bottom of every page on
  all screen sizes, so mobile users still see the accuracy note.
- Verified `npm run build` passes (77 pages).

## 2026-06-19 — Google Analytics (gtag.js)

- **Added the GA4 tag** (`G-C5YZ9RK6FX`) to the top of `<head>` in
  `src/layouts/BaseLayout.astro`, so it loads on every page and every locale
  (BaseLayout is the shared shell for all 77 routes). Both the async loader
  `<script>` and the inline `gtag('config', …)` snippet are marked `is:inline`
  so Astro ships them verbatim instead of trying to bundle/process them.
- Verified `npm run build` passes (77 pages); confirmed `G-C5YZ9RK6FX` /
  `googletagmanager` render in `dist/index.html` and the localized pages
  (e.g. `dist/ar/index.html`).

## 2026-06-20 — Mobile language switcher shows flag only

- **Compact nav lang trigger on mobile** (`src/components/LangSwitcher.astro`):
  added the current locale's circular flag to the trigger button (`LOCALE_FLAG`
  → `.lang-flag-current`, hidden by default so desktop is unchanged). At
  ≤760px the **nav-instance** switcher (`.lang-switcher.nav-lang`) now hides the
  globe icon, language text, and chevron and shows only the 20px flag in a
  compact 36px circular button.
- **Nav** (`src/components/Nav.astro`): the desktop `.nav-lang` was previously
  `display:none` ≤760px (the language picker lived only in the hamburger drawer);
  removed it from that hide rule so the flag-only trigger is visible in the
  mobile header. The hamburger drawer's full labelled switcher (`.is-block`) is
  untouched.
- Verified `npm run build` passes (77 pages).

## 2026-06-20 — Shrunk favicon.svg 926 KB → 7.9 KB

- **Why**: `public/favicon.svg` was a 926 KB file — not a real vector, but a
  full-size PNG embedded as a `data:image/png` base64 string inside an SVG
  wrapper (generated by RealFaviconGenerator). Browsers prefer the
  `rel="icon" type="image/svg+xml"` link, so every tab load pulled ~1 MB for no
  visual benefit over the actual PNGs.
- **Fix**: regenerated `favicon.svg` from `public/web-app-manifest-512x512.png`
  via `sharp` — resized to 128×128, PNG-compressed (level 9), re-embedded in a
  minimal SVG wrapper. Result: 7.9 KB (5.8 KB PNG + wrapper), a 99% reduction.
  No markup change — the `<head>` link tags in `BaseLayout.astro` are unchanged.
- **Note**: this is a real-user perf fix, NOT related to the Google search-result
  favicon (still Google's default globe). That was confirmed to be a timing issue
  only — all favicon files return HTTP 200 with correct MIME types to Googlebot /
  Google Favicon / Googlebot-Image; `_headers` `noindex` only targets the
  `pages.dev` preview domain, not the live domain. Just needs Google to re-crawl
  (URL Inspection → Request Indexing in Search Console can nudge it).
- Verified `npm run build` passes (77 pages).

## 2026-06-20 — Cloudflare Email Routing (inbound mail for hello@ / privacy@)

- **Made the site's two published addresses actually receive mail.** The contact
  page (`src/components/pages/ContactPage.astro`) exposes exactly
  `hello@aifaceshapeanalyzer.com` and `privacy@aifaceshapeanalyzer.com` (also in
  all 15 i18n dicts). Both are now live inboxes via **Cloudflare Email Routing**,
  not just `mailto:` links.
- **No code change** — this is a Cloudflare dashboard + DNS task. Email Routing
  enabled on the `aifaceshapeanalyzer.com` zone (auto-added the 3 MX records →
  `*.mx.cloudflare.net` + the SPF TXT `include:_spf.mx.cloudflare.net`; those
  records show as **Locked**/Cloudflare-managed).
- **Destination**: `contactfeedback9@gmail.com` (verified). **Routing rules** (both
  **Active**): `hello@` → that Gmail, `privacy@` → that Gmail. **Catch-all** left
  **Disabled** (action would be Drop) — so only the two named addresses forward;
  any other address at the domain bounces.
- **Caveat (unchanged behaviour)**: this is **inbound forwarding only**. The contact
  form still opens the visitor's own mail client via `mailto:hello@…` (no backend),
  which is unaffected. Replying *as* `hello@…` from Gmail would need a separate
  "Send mail as" / SMTP-relay setup — NOT done.
- **To verify**: send a test mail to `hello@aifaceshapeanalyzer.com` from another
  account; it should land in the Gmail inbox (check spam first time). The Email
  Routing **Activity Log** tab shows each routed message.

## 2026-06-20 — Removed mid-section disclaimer + hide tips once a result shows

- **Removed the "Heads up: face shape is a subjective label…" disclaimer**
  (`src/components/Analyzer.astro`): deleted the `.result-disclaimer` block that
  sat in the analyzer's `panel-main` (under the stage) along with its CSS rule,
  the `.result-disclaimer-icon` rule, and the now-dead `≤560px` `display:none`
  override. The string is still defined as `a.resultDisclaimer` in the dicts but
  is no longer rendered. (The site-wide footer disclaimer in `Footer.astro` is
  untouched, so the accuracy caveat still appears at the bottom of every page.)
- **Instruction tips now hide once a face-shape result appears**: the
  `#upload-tips` / `#cam-tips` lists were always visible for their mode. Moved
  their visibility into `showResults()` / `hideResults()` — `showResults()` now
  hides both tip lists (alongside the existing `idle-help` hide), and
  `hideResults()` restores the mode-appropriate one (`camTips.hidden = mode !==
  "camera"`, `uploadTips.hidden = mode !== "upload"`). So tips show while the user
  is setting up, then give way to the result; resetting/re-uploading brings them
  back via the existing `hideResults()` calls. `resetStage()` still sets the
  initial mode-based visibility before any result exists.
- Verified `npm run build` passes (77 pages).

## 2026-06-20 — Replaced "What you'll get" idle box with a default breakdown preview

- **Swapped the idle-help list for a result-shaped preview** (`src/components/Analyzer.astro`):
  the `#idle-help` box used to show a "What you'll get" title + 3 bullets. It now
  renders a static stand-in for a result — a `result-headline` with the eyebrow +
  an `<h3>Face Shape</h3>` heading, followed by a "Full breakdown" `ShapeBar` for
  all six shapes, each filled to **100%**. This is the placeholder shown before any
  analysis; the real `#results` block still replaces it on a real result via
  `showResults()`/`hideResults()`.
- **`ShapeBar.astro` gained an optional `pct` prop** (default 0) so it can render a
  statically-filled bar at build time (inline `--pct` + `{pct}%` label) instead of
  only being driven by the runtime JS. The live results path is unchanged — it
  still sets `--pct`/`data-pct` per row in `renderResult()`.
- "Face Shape" is a literal heading (not localized) per request; the heading reuses
  the `#result-shape` type styling via a shared selector. Removed the orphaned
  `.idle-help-title` / `.idle-help ul` CSS; added `.breakdown-list-preview`
  (flex column) so the preview bars stack like the real list.
- Verified `npm run build` passes (77 pages).

## 2026-06-20 — Default breakdown preview wrapped in a card, matched to stage height

- **Wrapped the idle-help preview in a bordered card and matched its height to the
  left stage** (`src/components/Analyzer.astro`): `.idle-help` now has the stage's
  card chrome (`--color-hairline` border, `--radius-md`, `--color-canvas-soft`
  background, `lg` padding). The `.analyzer-grid` switched from
  `align-items: start` → `stretch`, and `.idle-help` is `flex: 1` inside the
  flex-column `.panel-side`, so the preview grows to fill the right column and
  bottoms out level with the left `.stage` (whose height is its 4/3 aspect ratio).
- Verified `npm run build` passes (77 pages).

## 2026-06-20 — Right column unified into a single card

- **Merged the right column's tips + results + idle-preview into one card**
  (`src/components/Analyzer.astro`): the `#upload-tips`/`#cam-tips` lists,
  `#results`, and `#idle-help` are now wrapped in a single `.side-card` div. The
  card chrome (border, `--radius-md`, `--color-canvas-soft` bg, `lg` padding) moved
  off `.idle-help` onto `.side-card`; the `.cam-tips` lists lost their own
  border/background/padding so they read as flat content inside the one card
  instead of a box-in-a-box.
- **Card matches the left stage height**: `.side-card` is `flex: 1` inside the
  flex-column `.panel-side` (grid still `align-items: stretch`), so it fills the
  right column under the action buttons and bottoms out level with the left
  `.stage`. `.idle-help` and the `.results` block are themselves `flex: 1` columns
  so their content fills the card. Actions/progress/message stay above the card.
- Verified `npm run build` passes (77 pages).

## 2026-06-20 — Left stage stretches to match the right card (bottom alignment)

- **Fixed the bottom misalignment** between the left `.stage` and the right
  `.side-card` (`src/components/Analyzer.astro`): the grid already stretched both
  columns to the row height, but `.stage` stayed locked to its `aspect-ratio: 4/3`
  height (shorter than the taller right card), so only the tops lined up. Added
  `flex: 1` to `.stage` so it grows to fill the flex-column `.panel-main` (which the
  grid stretches to match the right column), making both columns the same height.
  The `aspect-ratio` stays as the minimum/natural-size hint; flex growth wins when
  the row is taller. Dropzone/media/overlay are `inset:0` absolute, so they fill
  the taller stage automatically.
- Verified `npm run build` passes (77 pages).

## 2026-06-20 — Locked the analyzer panel height (no more resize between states)

- **Problem**: the analyzer card jumped height between states (idle "What you'll
  get" → upload tips → result description+breakdown). With `align-items: stretch`,
  the row height tracked whichever column's *content* was taller, and the right
  card's content differs per state — so the whole panel resized, plus the action
  buttons appearing/disappearing shifted everything down. Bad UX.
- **Fix — the left image `.stage` is now the single height authority**
  (`src/components/Analyzer.astro`). The stage is a fixed `aspect-ratio: 4/3` box,
  completely content-independent, so the grid row height is now stable:
  - Wrapped the right card in a `.side-card-frame`. At ≥861px (two-column layout)
    the frame is `flex: 1; position: relative` and `.side-card` is
    `position: absolute; inset: 0` — so the card's content **no longer contributes
    to the row height**. It fills the locked height and scrolls internally
    (`overflow-y: auto`, thin themed scrollbar) if a result is taller than the box.
  - **Reserved the action-button row** at `min-height: 48px` (one button height) so
    the card top never shifts when Analyze/Reset/Capture toggle visibility.
  - The message/capture-progress strips, when shown, shrink the flexible card
    rather than growing the row — outer panel size stays constant.
  - Scoped to `min-width: 861px`; on mobile (single column) the card keeps its
    natural content height (no fixed-height clipping on small screens).
- **Tradeoff**: a long result can now exceed the stage height and scroll inside the
  card instead of growing it. That's the intended stability tradeoff — content
  swaps, the box never resizes.
- Verified `npm run build` passes (77 pages).

## 2026-06-20 — Action buttons shown-but-disabled by default

- **Analyze + "Analyze another" (reset) now render by default, disabled**
  (`src/components/Analyzer.astro`), instead of being `hidden` until a photo
  exists. The reserved `min-height: 48px` actions row already meant revealing them
  caused no layout shift; now they simply sit disabled in the idle state and
  enable once there's something to act on.
- **Logic** (`resetStage`): in upload mode `btnAnalyze` is shown+disabled and
  `btnReset` shown+disabled; on a successful `previewImg.onload` both flip to
  enabled. Camera mode is unchanged (Analyze stays hidden — not relevant; the live
  Capture button + an enabled Reset show instead). Markup defaults: `btn-analyze`
  and `btn-reset` start with `disabled` (was `hidden`); `btn-capture` still `hidden`.
- Verified `npm run build` passes (77 pages).

## 2026-06-20 — Right card static (no scroll), left stage grows to match

- **Reversed the earlier height strategy.** Instead of locking the row to the left
  stage and scrolling the right card, the right `.side-card` now sizes to its
  natural content (no internal scroll) and the **left `.stage` grows to match**
  (`src/components/Analyzer.astro`). Removed the `min-width: 861px` block that made
  `.side-card` `position: absolute; inset: 0; overflow-y: auto` with the themed
  scrollbar. The card is back in normal flow; the grid's `align-items: stretch` +
  `.stage { flex: 1 }` already stretch the left column to the row height, so the
  image box matches the card height in every state.
- **Removed the "YOUR FACE SHAPE / Face Shape" headline from the idle preview**:
  the default `#idle-help` box now shows only the "Full breakdown" with the six
  100% bars — no result-headline. (The real `#results` block still shows its own
  shape/confidence headline on an actual analysis.)
- Verified `npm run build` passes (77 pages).

## 2026-06-20 — Idle preview bars use varied (not all-100%) percentages

- **Idle default breakdown now shows plausible varied percentages** instead of
  every bar at 100% (`src/components/Analyzer.astro`). Added a `PREVIEW_PCT`
  map (oval 24, round 19, square 16, rectangle 14, heart 15, diamond 12) wired
  into the `#idle-help` `ShapeBar`s via `pct={PREVIEW_PCT[id]}`. Values are
  **fixed at build time** (not re-randomized per page load) so the preview stays
  stable and doesn't flicker. The real `#results` bars are unchanged (still set
  per-row from the live classifier in `renderResult()`).
- Verified `npm run build` passes (77 pages).

## 2026-06-21 — Manual measurement calculator section (no photo needed)

- **New `#manual-calculator` section** below the photo analyzer
  (`src/components/ManualCalculator.astro`, mounted in `HomePage.astro` right
  after `<Analyzer/>`). Lets people who already know their measurements type in
  four distances and get a calculated face shape — no upload/camera.
- **Inputs (4)**: forehead width, cheekbone width, face length, jaw width. Entered
  in any single consistent unit (cm/mm/in) since only the *ratios* matter. Each
  field is numbered + color-coded to match the measurement guide image.
- **Measurement guide image**: uses the user-provided diagrams in `public/` —
  `desktop.png` (landscape) on wide screens, `mobile.png` (portrait) ≤700px via a
  `<picture>`/`<source>` swap. Shown beside the form (stacks above it ≤860px).
- **New classifier path** `classifyManual()` (`src/lib/faceShape.ts`): derives the
  three *ratio* features the existing `SHAPE_PROFILES` already use
  (`faceLength/cheek`, `forehead/cheek`, `jaw/cheek`) and scores against the same
  six profiles via a shared new `rankAndFinalize()` helper (refactored out of
  `classifyFromFeatures()` so both paths share the softmax/round/confidence/blend
  logic). The two *angle* features the photo path uses (chinAngle, jawAngularity)
  can't be derived from linear measurements, so they're left out of the manual
  scoring (set to `NaN`, excluded via the `RATIO_KEYS` weight subset). Net: manual
  result is a good estimate but slightly less discriminating on the round/square
  split than the photo path — inherent to manual input.
- **Result UI reuses `ShapeBar`** + the same headline/breakdown markup as the photo
  analyzer (shape label, "{pct}% match strength", blend description, ranked 6-shape
  breakdown). Client script validates all four are positive numbers, else shows an
  inline error and hides results.
- **i18n**: English-first per decision — the section's own copy (labels, hints,
  headings, button text, validation message) is hardcoded English in the component
  so the 15-locale strict dict stays valid (no new keys). It *does* reuse existing
  translated keys where they already exist: `shapeLabels`, `shapeDescriptions`,
  `analyzer.resultEyebrow`, `analyzer.breakdownTitle`, `analyzer.msg.confidence`,
  `analyzer.msg.blendDesc`. Follow-up: lift the hardcoded strings into the dicts +
  translate to the other 14 locales.
- Verified `npm run build` passes (77 pages); confirmed `manual-calculator`,
  `desktop.png`, `mobile.png`, and "Calculate face shape" render in `dist/index.html`.

## 2026-06-21 — Manual calculator result shown by default (no layout jump)

- **Fixed the same layout-jump UX issue** the photo analyzer had: the manual
  calculator's `#manual-results` was `hidden` until Calculate, so the section grew
  downward when a result appeared (`src/components/ManualCalculator.astro`). Now the
  result area is **always rendered** with a neutral default state and gets filled
  in place — no reveal, no shift.
- **Default (preview) state**: heading shows literal "Face Shape", the confidence
  pill is hidden, the description reads "Enter your four measurements above…", and
  the six breakdown bars show fixed varied preview percentages (`PREVIEW_PCT`:
  oval 24 / round 19 / square 16 / heart 15 / rectangle 14 / diamond 12 — same set
  as the photo analyzer's idle preview).
- **On Calculate**: `renderResult()` fills the existing nodes (real shape label,
  reveals the confidence pill, real description, ranked bars + `is-top` gradient).
  **On Reset**: new `renderPreview()` restores the default state (re-hides the
  confidence pill, clears `is-top`/`order`, repaints preview bars). Removed the
  `scrollIntoView` jump and the `resultsBox.hidden` toggles; a validation error now
  just shows the inline message without touching the results area.
- Preview strings/percentages passed through the existing `manual-calc-i18n` JSON
  island (added `previewPct`/`previewShape`/`previewDesc` + matching `I18n` type).
- Verified `npm run build` passes (77 pages).

## 2026-06-21 — Manual calculator: stacked layout, button gap, 2-column breakdown

- **Stacked the section** (`src/components/ManualCalculator.astro`): `.manual-grid`
  is now single-column, so the measurement guide image spans the full card width on
  top and the form sits below it (was a 1fr/1fr side-by-side grid).
- **Button gap**: `.manual-actions` got `margin-top: var(--spacing-lg)` so
  Calculate/Reset are separated from the input fields above.
- **Two-column breakdown**: with the full-width layout the six single-column bars
  looked too sparse. `.breakdown-list` is now a `grid-template-columns: 1fr 1fr` /
  `grid-template-rows: repeat(3, auto)` / `grid-auto-flow: column` grid with a
  `2xl` column gap — so the JS-set `order` flows the top-3 ranked shapes down the
  left column and ranks 4-6 down the right. Collapses back to one column ≤560px
  (`grid-auto-flow: row`). The photo analyzer's breakdown is unchanged (still
  single column in its narrower side panel).
- Verified `npm run build` passes (77 pages).

## 2026-06-21 — Manual calculator default bars read 0%

- **Set the manual calculator's default preview bars to 0%** for all six shapes
  (`PREVIEW_PCT` in `src/components/ManualCalculator.astro`, was varied 24/19/16/
  15/14/12). So before any input the breakdown shows empty bars at 0% rather than
  fake sample percentages; real values fill in on Calculate, and Reset restores
  the 0% state. (Only affects the manual calculator — the photo analyzer's idle
  preview still uses its varied percentages.)
- Verified `npm run build` passes (77 pages).

## 2026-06-21 — Manual calculator fully translated (15 locales)

- **Lifted the manual calculator's hardcoded English into i18n** and translated it
  into all 14 other locales (completes the English-first deferral from the section's
  initial build). New `manualCalc` block in `src/i18n/ui/en.ts` (between `analyzer`
  and `seo`) holds: `eyebrow`, `heading`, `sub`, `imageAlt`, `fields.{foreheadWidth,
  cheekboneWidth,faceLength,jawWidth}.{label,hint}`, `btnCalculate`, `btnReset`,
  `previewShape`, `previewDesc`, `invalidInput`.
- **Component rewired** (`src/components/ManualCalculator.astro`): `FIELDS` labels/
  hints, the head copy, button text, preview headline/description, the image `alt`,
  and the client-script validation message all now read from `t.manualCalc` (the
  script gets `previewShape`/`previewDesc`/`invalidInput` via the existing
  `manual-calc-i18n` JSON island + matching `I18n` type). No more hardcoded English.
- **14 locale dicts** (es/fr/de/pt/it/nl/ru/ja/ko/zh/hi/ar/id/tr) each got the
  translated `manualCalc` block inserted at the same position (before `seo:`),
  generated by 14 parallel sub-agents — keys verbatim English, values translated,
  units localized (e.g. "(cm, mm oder Zoll)", "（厘米、毫米或英寸）", "(सेमी, मिमी या इंच)").
- **Verified**: `npm run build` passes (77 pages); structural check confirms all 15
  dicts have exactly one `manualCalc` block with identical key-marker counts; spot-
  checked `dist/{ja,ar,hi}/index.html` render real translated strings (測定/計算,
  القياس/الوجه, चेहरा/माप), not English fallback. (`astro check` OOM'd — a tooling heap
  limit, not a type error; structural parity verified instead.)

## 2026-06-21 — Hero "Manual analyzer" trust badge translated (15 locales)

- **Translated `hero.trust.free`** (the first hero trust pill, earlier changed from
  "Free forever" → "Manual analyzer" in English only) into all 14 other locales so
  the badge is no longer English-on-translated-pages. Values: es "Analizador
  manual", fr "Analyseur manuel", de "Manuelle Analyse", pt "Analisador manual",
  it "Analizzatore manuale", nl "Handmatige analyse", ru "Ручной анализатор",
  ja "手動アナライザー", ko "수동 분석기", zh "手动分析器", hi "मैनुअल विश्लेषक",
  ar "محلل يدوي", id "Penganalisis manual", tr "Manuel analiz aracı".
- Verified `npm run build` passes (77 pages); confirmed each dict's `free:` value.

