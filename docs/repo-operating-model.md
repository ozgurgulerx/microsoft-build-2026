# Repo Operating Model

This project has two surfaces:

1. Public-safe repo content: docs, sample plans, demo briefs, and eventual source code that can be pushed to GitHub.
2. Private local context: copied Microsoft Build 2026 research, decks, downloads, and validation files under `private/`.

Only the first surface belongs in git.

## Public Content Rules

- Use public Microsoft sources for claims.
- Link the source for every announcement entry.
- Mark preview, limited-access, planned, or GA status explicitly.
- Keep sample instructions reproducible with public docs.
- Do not include tenant IDs, internal names, unpublished deck text, screenshots from private decks, or downloaded snapshots.

## Private Context Rules

- `private/` is local-only.
- It is acceptable to use private context to decide what public source to verify next.
- It is not acceptable to paste private text or deck content into public files.
- Keep binary decks and downloaded files out of git.

## Sample Maturity Ladder

| Level | Meaning |
| --- | --- |
| L0 | Idea only: announcement mapped to a demo opportunity. |
| L1 | Design brief: architecture, source links, prerequisites, and risks. |
| L2 | Runnable local sample with no cloud dependency. |
| L3 | Runnable Azure sample with `azd` or documented provisioning. |
| L4 | Production harness sample with identity, evals, tracing, monitoring, and cleanup. |

## Release Checklist

Before any push:

1. Run `scripts/validate-public-boundary.sh`.
2. Confirm `git status --short` does not show `private/`.
3. Confirm no Office decks, PDFs, internal screenshots, or downloaded snapshots are tracked.
4. Confirm README and docs use public links for public claims.
5. Confirm sample code has no secrets and uses `.env.example` where needed.

