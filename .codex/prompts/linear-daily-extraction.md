# Daily Linear Intake: Repo + Linear

You are running a recurring plan-only intake loop for the
`microsoft-build-2026` repository.

Goal: find new useful tasks, deduplicate them against existing Linear issues,
and improve the backlog without changing repo files.

## Sources To Inspect

- Current Linear project: `Codex Task Loop`
- Existing Linear issues with labels beginning `codex:`
- Recent repo changes and uncommitted diffs
- `AGENTS.md`, `CLAUDE.md`, `README.md`
- `docs/`
- `demos/`
- `samples/`
- Public site pages: `index.html`, `stack.html`, `journeys.html`,
  `samples.html`, `sources.html`

## Do

- Create a Linear issue only when the task is new, useful, non-duplicate, and
  actionable.
- Update an existing issue if it already covers the same work.
- Use labels:
  - `codex:intake`
  - `source:repo`
  - `autonomy:plan-only`
  - one `type:*` label
  - one `risk:*` label
- Write issue bodies using this shape:
  - Problem / opportunity
  - Evidence
  - Proposed outcome
  - Acceptance criteria
  - Likely affected files or pages
  - Dependencies / blockers
  - Risk level
  - Suggested next action
- Prefer 1-3 high-quality issues over many low-quality issues.

## Do Not

- Do not edit files.
- Do not create implementation branches or PRs.
- Do not copy private, sensitive, or non-public material into Linear.
- Do not create issues for broad ideas without acceptance criteria.
- Do not duplicate an existing issue; comment with improvements instead.

## Reporting

At the end, summarize:

- issues created
- issues updated
- duplicates avoided
- blocked items needing human input
- why there were no changes, if no issues were created or updated
