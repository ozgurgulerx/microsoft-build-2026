# Microsoft Build 2026 AI Builder Atlas

Public-safe repo for mapping Microsoft Build 2026 AI announcements into builder-ready samples, demos, and implementation tracks.

The target persona is the AI builder: someone who wants to assemble models, context, tools, runtime, identity, evaluations, and deployment into production-grade agent systems.

Last refreshed: 2026-06-05.

Static page: [index.html](index.html)

## Opening Map

The repo is organized around the practical builder path:

1. Model: choose and adapt the model layer.
2. Context: ground agents with enterprise, operational, and web knowledge.
3. Tools: expose safe actions through MCP, toolboxes, code execution, and app connectors.
4. Harness: run agents with identity, state, memory, evals, observability, and governance.
5. Infrastructure: place the workload on local, serverless, container, and AI compute substrates.

See [docs/ai-builder-map.md](docs/ai-builder-map.md) for the full structure.

## Repo Contents

- [docs/announcement-index.md](docs/announcement-index.md): public announcement map with sample opportunities.
- [docs/ai-builder-map.md](docs/ai-builder-map.md): AI-builder capability structure.
- [docs/repo-operating-model.md](docs/repo-operating-model.md): how to keep public and private material separated.
- [samples/README.md](samples/README.md): sample backlog and maturity ladder.
- [demos/README.md](demos/README.md): demo narrative options.
- [scripts/validate-public-boundary.sh](scripts/validate-public-boundary.sh): pre-push check for private or binary artifacts.

## First Sample Tracks

| Track | Builder question | Planned sample |
| --- | --- | --- |
| Agent Framework + Toolbox | How do I give an agent governed tools without custom plumbing? | Framework agent connected to a Foundry Toolbox/MCP endpoint. |
| Foundry IQ grounding | How do I ground an agent across enterprise and web context? | Retrieval-first agent with Foundry IQ and explicit source reporting. |
| Azure Functions serverless agent | How do I run an event-driven agent cheaply and durably? | Function-hosted markdown or code agent with MCP auth and durable workflow notes. |
| Container Apps sandbox | How do I let agents run code safely? | Dynamic session/code-interpreter sandbox with identity and network controls. |
| AgentOps eval loop | How do I know if the agent is safe and improving? | Traces, rubric evals, guardrail checks, and ROI/quality dashboard shape. |

## Public Source Baseline

This repo uses public Microsoft sources as the external source of truth, including:

- Microsoft Build 2026 newsroom: https://news.microsoft.com/build-2026/
- Microsoft Foundry Build recap: https://devblogs.microsoft.com/foundry/whats-new-in-microsoft-foundry-build-2026/
- Foundry Agent Service at Build: https://devblogs.microsoft.com/foundry/agent-service-build2026/
- Foundry IQ Build updates: https://devblogs.microsoft.com/foundry/build-smarter-agents-faster-with-foundry-iq/
- Trust, evals, ASSERT, and ACS: https://devblogs.microsoft.com/foundry/build-2026-open-trust-stack-ai-agents/
- Observability and ROI: https://devblogs.microsoft.com/foundry/build-2026-from-observability-to-roi-for-ai-agents-on-any-framework/
- Azure Functions Build update: https://techcommunity.microsoft.com/blog/appsonazureblog/azure-functions-at-build-2026-update/4524075
- Azure Container Apps dynamic sessions: https://learn.microsoft.com/azure/container-apps/sessions
- Cosmos DB Build announcements: https://devblogs.microsoft.com/cosmosdb/announced-at-ms-build-2026-azure-cosmos-db-mcp-toolkit-semantic-reranking-global-secondary-indexes-and-more/
- Work IQ for agents: https://devblogs.microsoft.com/microsoft365dev/work-iq-production-ready-intelligence-for-every-agent/

## Private Local Context

Local Microsoft-sensitive context is stored under:

`private/microsoft/ms-build-2026-info-repo`

That folder is intentionally gitignored. It should stay local and must not be uploaded or pushed.
