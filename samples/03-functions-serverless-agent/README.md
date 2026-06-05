# Sample 03: Azure Functions Serverless Agent

Goal: run an event-driven agent on Azure Functions with durable state and an MCP/tool action path.

## Builder Question

When should an agent be a serverless workflow instead of a hosted app?

## Planned Shape

- Azure Functions project.
- Event trigger plus agent invocation.
- Durable workflow for long-running task state.
- MCP authentication notes.
- Local run and Azure deployment path.
- Cleanup commands.

## Public Sources

- https://techcommunity.microsoft.com/blog/appsonazureblog/azure-functions-at-build-2026-update/4524075
- https://techcommunity.microsoft.com/blog/appsonazureblog/host-declarative-markdown-based-agents-on-azure-functions/4496038

## Status

L0: design brief. Verify Functions v5, MCP auth, and serverless-agent public availability before implementation.

