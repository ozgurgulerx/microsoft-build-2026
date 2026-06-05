# Build 2026 Latest Content Scan

Scan date: 2026-06-05

This scan captures public Microsoft Build 2026 content that should shape the next version of the AI Builder Atlas. It uses public Microsoft sources only and does not rely on local private reference decks.

## New Or Underrepresented Items

| Item | Why it matters for the AI builder | Suggested repo action | Source |
| --- | --- | --- | --- |
| MAI model family | The model layer is now more specific: reasoning, coding, image, transcription, and voice models are separate builder choices. | Add a model-router sample that records task type, selected model, latency, cost, and output quality. | https://microsoft.ai/news/building-a-hillclimbing-machine-launching-seven-new-mai-models/ |
| Foundry Managed Compute | Open-model customization and serving can move into managed elastic GPU capacity instead of hand-managed infra. | Add an inference substrate comparison: Foundry endpoint, Managed Compute, Foundry Local, and GPU/VM path. | https://devblogs.microsoft.com/foundry/announcing-foundry-managed-compute/ |
| Foundry Local 1.2 and Foundry Local on Azure Local | Local and edge AI got much more concrete: multilingual ASR, Linux ARM64, WinML 2.0, cancellation support, and Azure Local preview. | Add a local-first sample track for voice/retrieval agents and an edge deployment note. | https://devblogs.microsoft.com/foundry/accelerate-edge-ai-development-with-foundry-local/ |
| Microsoft IQ, Web IQ, and Scout | Context is now a named cross-product layer, not just a RAG implementation detail. | Add a context-layer explainer that separates Work IQ, Fabric IQ, Foundry IQ, and Web IQ. | https://blogs.microsoft.com/blog/2026/06/02/microsoft-build-2026-be-yourself-at-work/ |
| Rayfin, HorizonDB, Fabric IQ, and operations agents | The app/backend layer is a major part of the AI-builder story: agents need data models, APIs, auth, semantic context, and operational data. | Add a prompt-to-production backend demo blueprint using Rayfin plus Fabric/HorizonDB. | https://azure.microsoft.com/en-us/blog/microsoft-build-2026-building-agentic-apps-with-microsoft-fabric-and-microsoft-databases/ |
| Cobalt 200 | Agent services and data-intensive agent workloads need efficient scale-out compute, not only GPUs. | Add Cobalt 200 to the infrastructure decision table. | https://azure.microsoft.com/en-us/blog/new-azure-cobalt-200-vms-deliver-50-performance-improvement-fully-optimized-for-modern-agentic-ai-workloads/ |
| Windows MXC, Aion models, Surface RTX Spark Dev Box, DGX Station for Windows | Windows is now explicitly positioned as a local agent runtime with containment, identity, local models, and developer hardware. | Add a Windows-local-agent demo with MXC policy and local inference path. | https://blogs.windows.com/windowsdeveloper/2026/06/02/build-2026-furthering-windows-as-the-trusted-platform-for-development/ |
| Windows platform security for agents | Local agents need OS-level containment, identity attribution, and policy controls. | Add a local-agent security checklist to the harness track. | https://blogs.windows.com/windowsdeveloper/2026/06/02/windows-platform-security-for-ai-agents/ |
| GitHub Copilot app | The dev substrate now includes a native desktop surface for orchestrating agent sessions and worktrees. | Add a repo workflow demo for parallel agent sessions and PR review. | https://github.blog/news-insights/product-news/github-copilot-app-the-agent-native-desktop-experience/ |
| Microsoft Discovery GA | Agentic workflows are extending to scientific and engineering R&D, with governance and evidence loops. | Add a research-agent demo narrative for hypothesis, evidence, tool use, and review. | https://azure.microsoft.com/en-us/blog/announcing-microsoft-discovery-general-availability-and-microsoft-discovery-app-preview/ |

## Status Notes To Verify Before Runnable Samples

- Hosted agents are described as expected to reach GA by early July 2026 in the Foundry Build recap.
- Teams and Microsoft 365 Copilot publishing for Foundry agents is planned for GA in June 2026.
- Work IQ APIs are described as generally available on June 16, 2026 in Microsoft's official Build blog.
- Web IQ is described as limited access/select Azure customers in Foundry material.
- Agent Optimizer is described as coming soon/public preview timing in Foundry material.
- Some model names differ across public posts; prefer Microsoft AI model pages for MAI naming before writing sample code. The current model family names in this repo use Microsoft AI naming: MAI-Thinking-1, MAI-Code-1-Flash, MAI-Image-2.5, MAI-Transcribe-1.5, and MAI-Voice-2.

## Next Content Moves

1. Convert the current sample backlog into seven concrete demo briefs: model router, context layer, governed toolbox, serverless agent, local/edge agent, production eval loop, and prompt-to-production backend.
2. Add a short status field to each announcement row: GA, public preview, private preview, limited access, planned GA, or early access.
3. Create an infrastructure decision table that separates local device, Windows Cloud PC, Azure Functions, Container Apps dynamic sessions, Cobalt 200, GPU/Managed Compute, Foundry Local, and Azure Local.
4. Add a "source freshness" section to the README that links this scan.

