# Sample 08: Prompt-To-Production Backend

Goal: turn an agent-generated app idea into a reviewable backend blueprint with data, auth, policy, and deployment boundaries.

## Builder Question

How does an agent produce a production backend instead of loose code snippets?

## Planned Shape

- Rayfin CLI workflow notes.
- Fabric deployment path and OneLake data-flow explanation.
- HorizonDB or Cosmos DB data model decision point.
- Authentication, authorization, and policy review checklist.
- Pull-request review gates for schema, backend logic, and generated code.
- Synthetic app scenario with no tenant-specific data.

## Public Sources

- https://azure.microsoft.com/en-us/blog/microsoft-build-2026-building-agentic-apps-with-microsoft-fabric-and-microsoft-databases/
- https://devblogs.microsoft.com/cosmosdb/announced-at-ms-build-2026-azure-cosmos-db-mcp-toolkit-semantic-reranking-global-secondary-indexes-and-more/

## Status

L0: design brief. Verify Rayfin public availability, HorizonDB preview status, and deployable public templates before implementation.
