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

