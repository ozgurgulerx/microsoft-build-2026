# Samples

The samples start as design briefs and should become runnable implementations as public SDKs, docs, and service availability settle.

## Backlog

| Sample | Maturity | Goal |
| --- | --- | --- |
| [01-agent-framework-toolbox](01-agent-framework-toolbox/README.md) | L0 | Connect a code-first agent harness to governed tools. |
| [02-foundry-iq-grounding](02-foundry-iq-grounding/README.md) | L0 | Ground an agent across managed knowledge sources. |
| [03-functions-serverless-agent](03-functions-serverless-agent/README.md) | L0 | Run an event-driven agent on Azure Functions. |
| [04-container-apps-sandbox](04-container-apps-sandbox/README.md) | L0 | Execute code safely in dynamic sessions. |
| [05-agentops-evals](05-agentops-evals/README.md) | L0 | Trace, evaluate, guardrail, optimize, and report value. |

## Implementation Standards

- Each sample gets its own folder, README, `.env.example`, and cleanup notes.
- Prefer `azd` when there is a stable public template or provisioning path.
- Document identity and authorization explicitly.
- Include test or verification steps before calling a sample runnable.
- Keep tenant-specific details out of committed files.

