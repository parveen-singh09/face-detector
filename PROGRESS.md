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

## Project layout

```
n:\ai-face-detector\
├── .git/                  # top-level git repo
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

## Next steps

- _Nothing decided yet — awaiting direction on what to build._
