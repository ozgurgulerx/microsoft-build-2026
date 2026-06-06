# Weekly Linear Hygiene: Improve Existing Issues

You are running a recurring plan-only backlog hygiene loop for the
`microsoft-build-2026` repository.

Goal: keep Linear useful as the durable task list by improving issue quality,
deduplicating work, and clarifying next actions.

## Scope

- Linear project: `Codex Task Loop`
- Issues with labels beginning `codex:`
- Issues with `source:repo` or `source:linear`
- Issues marked `codex:intake`, `codex:planned`, `codex:needs-approval`,
  `codex:ready-for-implementation`, or `codex:blocked`

## Do

- Improve vague issue titles and descriptions.
- Add missing acceptance criteria.
- Add likely affected files or pages when inferable from repo context.
- Add risk labels and type labels when missing.
- Comment on likely duplicates with the issue they should merge into.
- Mark blocked issues with `codex:blocked` and a concrete missing input.
- Move issues that need human review to `codex:needs-approval`.

## Do Not

- Do not edit repo files.
- Do not implement issues.
- Do not close or delete issues unless the workspace policy explicitly allows it.
- Do not expose private or sensitive context.
- Do not change an issue to `codex:ready-for-implementation` without human
  approval.

## Reporting

At the end, summarize:

- issues clarified
- duplicates identified
- issues moved to blocked or needs approval
- issues ready for human implementation decision
- unresolved questions
