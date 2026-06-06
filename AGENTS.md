# Agent Instructions

This repository is a public-safe builder surface for Microsoft Build 2026 AI announcements, samples, and demos.

## Private Boundary

- Treat `private/` as local-only Microsoft-sensitive context.
- Never commit, push, sync, publish, summarize, or upload files from `private/`.
- Do not copy deck text, downloaded snapshots, internal notes, or private markdown into public files.
- Use public Microsoft sources for public repo content.
- Before every commit or push, run `scripts/validate-public-boundary.sh`.

## Repo Direction

- The target persona is the AI builder: developers who want to turn Build announcements into working agent, context, tool, harness, governance, and infrastructure demos.
- Keep public docs practical: what changed, why builders care, and what sample should be built next.
- Prefer small, focused samples over broad demos.
- Samples should include setup, expected output, security notes, and cleanup instructions once implemented.

## Deployment Target

- The public site is served from Azure Static Web Apps at `https://www.buildsignal2026.com`.
- When asked to deploy or update the web site, update the Azure Static Web Apps deployment under `ozgurguler@microsoft.com`.
- Treat GitHub Pages as a secondary/reference surface only unless explicitly asked to update it.
- Before every deployment, run `scripts/validate-public-boundary.sh` and keep `private/` and local browser/debug artifacts out of the deployed files.

## Linear + Codex Task Loop

- Linear is the durable task list for this repo; use the `Codex Task Loop` project when available.
- Default autonomy is plan-only: Codex may extract, deduplicate, create, and refine Linear issues, but implementation requires explicit human approval.
- Use `.codex/prompts/linear-daily-extraction.md` for recurring repo-to-Linear intake.
- Use `.codex/prompts/linear-weekly-hygiene.md` for recurring backlog cleanup.
- Use `docs/linear-codex-task-loop.md` as the operating model.
- Do not copy private, sensitive, or non-public material into Linear issue bodies.
- Do not auto-ship or open PRs from recurring Linear automation unless the issue is explicitly approved for implementation.

## Source Rules

- Official Microsoft pages, Microsoft Learn, Microsoft DevBlogs, and Microsoft Tech Community are preferred.
- If a capability is preview, limited access, or planned, label it explicitly.
- Verify status dates before adding runnable instructions.
- Never require secrets in committed files. Use `.env.example` and documented environment variables.
