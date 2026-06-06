# Linear + Codex Task Loop

Purpose: use Linear as the durable task list while Codex continuously finds,
deduplicates, and improves work items from this repo. The default autonomy is
plan-only: Codex may create and refine Linear issues, but implementation needs
explicit approval.

## Operating Mode

- Linear is the durable backlog.
- Codex local + Linear MCP is the intake and refinement surface.
- Codex-in-Linear is the issue-level planning and explicit execution surface.
- GitHub remains the implementation and review surface.
- Default behavior is plan-only; do not auto-ship changes from recurring runs.

## Linear Setup

Recommended project: `Codex Task Loop`.

Recommended labels:

- `codex:intake`
- `codex:planned`
- `codex:needs-approval`
- `codex:ready-for-implementation`
- `codex:blocked`
- `source:repo`
- `source:linear`
- `type:bug`
- `type:content`
- `type:design`
- `type:deployment`
- `type:research`
- `risk:low`
- `risk:medium`
- `risk:high`
- `autonomy:plan-only`

Issue template:

```text
Problem / opportunity

Evidence

Proposed outcome

Acceptance criteria

Likely affected files or pages

Dependencies / blockers

Risk level

Suggested next action
```

## Codex Setup

Configure Linear MCP for local Codex access:

```bash
codex mcp add linear --url https://mcp.linear.app/mcp
codex mcp login linear
```

If remote MCP support is not already enabled, add this to
`~/.codex/config.toml`:

```toml
[features]
experimental_use_rmcp_client = true

[mcp_servers.linear]
url = "https://mcp.linear.app/mcp"
```

Native Codex-in-Linear setup:

1. Set up Codex cloud tasks with this repository connected to GitHub.
2. Create a Codex environment for this repository.
3. Install Codex for Linear in Codex connector settings.
4. Link Linear by mentioning `@Codex` on a Linear issue.

## Daily Intake Loop

Use `.codex/prompts/linear-daily-extraction.md` as the recurring automation
prompt.

Expected behavior:

- Inspect repo docs, changed files, TODO-like notes, deployed-site gaps, and
  existing Linear issues.
- Create only useful, non-duplicate, actionable issues.
- Update existing issues when the work already exists.
- Add acceptance criteria, likely affected files, risk, and suggested next step.
- Leave repo files unchanged.

## Weekly Hygiene Loop

Use `.codex/prompts/linear-weekly-hygiene.md` as the recurring automation
prompt.

Expected behavior:

- Improve vague issues.
- Merge or link duplicates through comments.
- Move stale or under-specified work to `codex:needs-approval`.
- Mark blocked tasks with concrete missing inputs.
- Keep implementation gated by human approval.

## Execution Rule

Only implement when a human explicitly asks Codex to implement an issue or moves
the issue to `codex:ready-for-implementation` and mentions `@Codex` with clear
execution instructions.

Use this wording in Linear for plan-only work:

```text
@Codex plan this only in ozgurgulerx/microsoft-build-2026.
Do not edit files or open a PR. Return a decision-complete implementation plan.
```

Use this wording in Linear for implementation:

```text
@Codex implement this in ozgurgulerx/microsoft-build-2026.
Use the acceptance criteria above, keep private material out of public files,
run scripts/validate-public-boundary.sh, and open a PR or report the patch.
```
