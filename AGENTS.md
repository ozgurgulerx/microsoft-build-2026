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

## Source Rules

- Official Microsoft pages, Microsoft Learn, Microsoft DevBlogs, and Microsoft Tech Community are preferred.
- If a capability is preview, limited access, or planned, label it explicitly.
- Verify status dates before adding runnable instructions.
- Never require secrets in committed files. Use `.env.example` and documented environment variables.

