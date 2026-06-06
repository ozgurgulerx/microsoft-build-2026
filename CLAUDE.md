# Build 2026 AI Builder Atlas — Project Guide

## What this is

A personal, public-safe **AI Builder Atlas** that takes the many fragmented Microsoft
Build 2026 announcements and capabilities and turns them into one **coherent, integrated
technical narrative** for builders. The owner (Özgür Güler) authors the content and will
keep adding his own material over time.

## Purpose (the north star)

Fix the complexity of dozens of scattered Build 2026 features by giving them a single
legible story. Explicitly:

- **Do NOT overcomplicate**, and **do NOT try to replicate the official Build site.** This
  is an opinionated interpretation/index, not a product launch page.
- Reduce fragmentation into structure a builder can actually navigate and act on.

### The three structural moves

1. **Cluster features into their rightful place in the tech stack** — the vertical stack
   (`stack.html`, and the schematic on `index.html`): Model → Context → Tools → Harness,
   wrapped by the Control / Build / Metal platform planes.
2. **Create horizontal "journeys"** — `journeys.html`: end-to-end workflows that cut
   _across_ the stack and answer "what would I actually build, end to end?" Journeys must
   **compose / cross-reference** existing sample tracks and demo narratives, never restate
   the stack.
3. **Consolidate collateral** — pull together the relevant material from Microsoft and
   from GitHub repos worth replicating, into the samples / demos surfaces.

### Roadmap (sequence of build efforts)

1. **First: address individual features** — place each capability correctly, link its
   public source, give it a concrete sample brief.
2. **Then: build larger, more comprehensive demos** — grow the demo narratives into
   runnable, multi-feature builds.

Let this purpose and sequence guide every change. When adding a feature, ask: does it
land in the right stack layer, does it strengthen a journey, and does it move toward the
demo stage?

## Design philosophy

**Elegant, simple, readable, minimal — but exuding design taste and professionalism.**
Frontend attractiveness is a first-class goal, not an afterthought.

- Favor **readability and minimalism**: clear hierarchy, generous whitespace, restraint.
  Remove redundancy (duplicate links, filler stats) on sight.
- **Professional, not flashy.** Color and motion are used to encode meaning (layer
  identity, maturity, flow direction), not for decoration. When in doubt, take something
  away.
- Stay **cohesive with the established system** (see below) — match the existing card,
  chip, and color language rather than inventing new patterns.
- **Use modern frontend capabilities** (modern CSS: `color-mix`, `clamp`, custom
  properties, container/scroll features; tasteful, performant motion). Reach for the
  latest, best-supported techniques. Before introducing a JS framework or build step,
  raise it — the current static approach is intentional (see Tech below).

## Content rules

- **No customer references anywhere** — no company/customer names, no
  `microsoft.com/.../customers/story` links, no testimonials. Use generic, un-attributed
  situational framing instead.
- **Cite real public sources only.** Never fabricate URLs, product names, or customer
  proof. If a referenced item has no verifiable public source, leave it out and flag it.
- Voice is terse, editorial, builder-to-builder.

## Tech & deploy

- **Static site**: plain HTML + `styles.css` + `atlas.js`. No framework, no build step.
- Pages: `index.html` (hero + vertical stack schematic + journeys band + routing),
  `stack.html`, `journeys.html`, `samples.html` (11 layer-tagged tracks, anchors
  `#track-01`…`#track-11`), `sources.html`. Cross-page deep-linking via anchors.
- Design system lives in `styles.css` `:root`: the "Build pixel rainbow" tokens and the
  signal aliases (`--azure` model, `--cyan` context, `--violet` tools, `--amber` harness,
  `--magenta` gov, `--orange` dev, `--teal` infra). Fonts: Bricolage Grotesque (display),
  Hanken Grotesk (body), IBM Plex Mono (data), Press Start 2P (pixel wordmark). Per-card
  accent via a local `--rc`/`--sc`/`--lc`/`--jc` variable. Reveal animations via
  `.reveal`/`.reveal-up` + `atlas.js` IntersectionObserver (register new grids in its
  stagger selector).
- **Deploy**: **Azure Static Web Apps** is the production target. The site builds from
  this repo; for the current no-build static setup the SWA app root is `/` and there is
  no build command (output is the repo's HTML/CSS/JS as-is). No SWA workflow/config is
  committed yet — the app is linked via the Azure portal/CLI. If the framework changes
  (e.g. Astro), add `staticwebapp.config.json` and set SWA's build command + `dist`
  output folder accordingly. (A GitHub Pages mirror may also exist; Azure SWA is
  canonical.)

## Working conventions

- A formatter (Prettier) runs on save — expect HTML/CSS to be reflowed after edits.
- When verifying CSS visually, serve on a **fresh port** each time (`python3 -m
http.server <port>`) — the browser caches `styles.css` per origin.
- Keep changes scoped; commit/push only when asked (changes go live immediately on push).
