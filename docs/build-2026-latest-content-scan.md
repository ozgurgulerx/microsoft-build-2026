# Build 2026 Latest Content Scan

Scan date: 2026-06-06

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

## Retrieved Public Source Deltas

The Build 2026 newsroom was rechecked on 2026-06-05 and showed `article:modified_time` of 2026-06-04. These public items were added to the repo source baseline because they were missing or underrepresented in the first scan.

The complete public newsroom "More news and information" inventory is captured separately in `docs/build-2026-newsroom-inventory.md`.

| Retrieved item | Newly captured signal | Source |
| --- | --- | --- |
| Microsoft Agent Framework Build announcement | MAF 1.0 GA foundation, Agent Harness, hosted-agent deployment, CodeAct with Hyperlight, GitHub Copilot SDK integration, and handoff orchestration. | https://devblogs.microsoft.com/agent-framework/microsoft-agent-framework-at-build-2026-announce/ |
| Microsoft Web IQ | Separate Build newsroom item for Microsoft-managed web grounding. | https://blogs.bing.com/search/June-2026/Announcing-Microsoft-Web-IQ |
| Azure Content Understanding | GPT 5.2 support, Foundry portal integration, GA SDKs, Agent Framework, LangChain, MarkItDown, Foundry IQ integrations, and July 2026 API roadmap. | https://devblogs.microsoft.com/foundry/whats-new-in-azure-content-understanding-at-build-2026/ |
| Azure HorizonDB | Public preview Postgres-compatible database for AI-era applications. | https://techcommunity.microsoft.com/blog/adforpostgresql/azure-horizondb-enterprise-ready-postgres-engineered-for-the-ai-era/4524094 |
| Frontier Tuning | Private preview reinforcement-learning tuning loop inside the customer compliance boundary. | https://devblogs.microsoft.com/microsoft365dev/frontier-tuning-teaching-ai-to-work-the-way-you-do/ |
| NVIDIA open models on Foundry | NVIDIA open model placement on Microsoft Foundry for agentic, speech, safety, physical AI, and accelerated inference workflows. | https://techcommunity.microsoft.com/blog/azure-ai-foundry-blog/nvidia%E2%80%99s-open-models-on-microsoft-foundry/4501643 |
| Azure Container Apps Sandboxes | Public preview first-class sandbox resource for fast, secure, ephemeral agentic workloads. | https://techcommunity.microsoft.com/blog/appsonazureblog/introducing-azure-container-apps-sandboxes-secure-infrastructure-for-agentic-wor/4524131 |
| Azure Logic Apps at Build | Integration workflow update relevant to connector-heavy agent actions and approvals. | https://techcommunity.microsoft.com/blog/integrationsonazureblog/whats-new-in-azure-logic-apps-at-microsoft-build-2026/4524685 |
| Azure Speech and Voice Live | Real-time, life-like voice agent experience update. | https://techcommunity.microsoft.com/blog/azure-ai-foundry-blog/azure-speech-at-build-2026-powering-voice-agents-with-real-time-and-life-like-ex/4524638 |
| Windows 365 at Build | Developer Cloud PC and agent execution support update. | https://techcommunity.microsoft.com/blog/windows-itpro-blog/made-for-developers-and-agents-windows-365-at-build-2026/4519041 |
| Secure agent development lifecycle | Agent 365 SDK GA, MXC SDK, Windows 365 for Agents GA, local-agent registry, Purview risk signals, DLP, and model scanning. | https://www.microsoft.com/en-us/security/blog/2026/06/02/microsoft-build-2026-securing-code-agents-and-models-across-the-development-lifecycle/ |

## Wide Crawl Deltas - 2026-06-06

A wider public-source crawl checked official Microsoft blogs, Microsoft AI model pages, Command Line deep dives, Microsoft Learn, Microsoft Tech Community tag pages, and Azure Integration Services posts. The crawl found no separate new Build wave, but it did find underrepresented public sources that sharpen several builder tracks.

| Retrieved item | Newly captured signal | Repo implication | Source |
| --- | --- | --- | --- |
| Microsoft agent platform systems post | Microsoft frames the agent stack as one integrated system spanning GitHub, Microsoft IQ, Foundry, Agent 365, optimization, Teams/Microsoft 365, Windows, and Azure. | Use this as the architecture framing source for the atlas, not just the keynote recap. | https://blogs.microsoft.com/blog/2026/06/02/ai-alone-wont-change-your-business-the-system-running-it-will/ |
| MAI model detail pages | Individual Microsoft AI pages add model-specific constraints: private preview for MAI-Thinking-1, GitHub Copilot rollout for MAI-Code-1-Flash, image-editing positioning for MAI-Image-2.5, and a model card for MAI-Transcribe-1.5. | The model-router sample should keep model selection, availability, task type, and deployment surface separate instead of treating "MAI" as one endpoint. | https://microsoft.ai/news/introducing-mai-thinking-1/; https://microsoft.ai/news/introducingmai-code-1-flash/; https://microsoft.ai/news/introducing-mai-image-2-5/; https://microsoft.ai/models/mai-transcribe-1-5/ |
| Web IQ grounding architecture | The Command Line deep dive explains Web IQ as a coupled grounding system: embeddings, ANN infrastructure, evidence objects, orchestration, crawl freshness, attribution, and latency discipline. | Add this as the technical grounding source behind the Web IQ / Foundry IQ sample brief. | https://commandline.microsoft.com/grounding-system-agentic-web-engineering-retrieval/ |
| Project Solara | Microsoft describes a chip-to-cloud platform concept for agent-first devices, just-in-time UI, enterprise manageability, identity, privacy, and bring-your-own agents. | Treat this as an early-stage local/device runtime signal adjacent to Windows local-agent and edge-agent tracks; do not turn it into runnable instructions yet. | https://commandline.microsoft.com/project-solara-build-2026/ |
| Foundry Toolkit for VS Code at Build | A Tech Community post gives a more direct source for hosted-agent scaffold, local run, deploy, observe, toolbox, Work IQ, Fabric IQ, guardrails, and LangGraph sample updates. | Replace the indirect Foundry Toolkit source in the index with this direct post. | https://techcommunity.microsoft.com/blog/azuredevcommunityblog/foundry-toolkit-for-vs-code-at-build-hosted-agents-end-to-end-a-smarter-toolbox-/4524941 |
| Logic Apps Automation | Public preview SKU adds natural-language workflow authoring, agents as workflow actions, managed isolated sandboxes, Knowledge as a Service, JavaScript expressions, projects/apps governance, and scale-to-zero. | Upgrade the Logic Apps sample from "connector workflow" to "enterprise action plane for agents" with preview labels. | https://techcommunity.microsoft.com/blog/integrationsonazureblog/%F0%9F%8E%89-automation-just-became-a-team-sport-meet-azure-logic-apps-automation-/4524555 |
| Connector Namespace and hosted MCP servers | Connector Namespace docs and the hosted MCP preview describe managed/hosted remote MCP servers with platform-managed auth, hosting, scaling, credential handling, and observability. | Add hosted MCP as a separate tool-plane pattern from local MCP servers, Function-hosted tools, and Foundry Toolboxes. | https://learn.microsoft.com/en-us/azure/logic-apps/connector-namespace/connector-namespace-overview; https://techcommunity.microsoft.com/blog/integrationsonazureblog/hosted-mcp-servers-in-connector-namespace-preview/4524588 |
| Azure API Management and API Center MCP governance | APIM/API Center Build content adds AI gateway capabilities, MCP test console, Git sync, and catalog/discovery surfaces for APIs, agents, skills, and MCP tools. | Add an API/tool catalog governance lane to the Tools and Harness layers. | https://techcommunity.microsoft.com/blog/integrationsonazureblog/whats-new-in-azure-api-management-at-microsoft-build-2026/4524683; https://techcommunity.microsoft.com/blog/integrationsonazureblog/new-ai-gateway-capabilities-in-azure-api-management/4524604; https://techcommunity.microsoft.com/blog/integrationsonazureblog/mcp-test-console-and-git-repository-synch-in-azure-api-center/4524617 |
| Build skilling and credentials | Microsoft Pro Badges, Applied Skills, Foundry/MCP Applied Skills, and partner-authored AI Skills Navigator content are now part of the Build public surface. | Useful for a learning path appendix; lower priority than runnable samples. | https://techcommunity.microsoft.com/blog/skills-hub-blog/new-ways-to-learn-and-demonstrate-skills/4519038 |

## Status Notes To Verify Before Runnable Samples

- Hosted agents are described as expected to reach GA by early July 2026 in the Foundry Build recap.
- Teams and Microsoft 365 Copilot publishing for Foundry agents is planned for GA in June 2026.
- Work IQ APIs are described as generally available on June 16, 2026 in Microsoft's official Build blog.
- Web IQ is described as limited access/select Azure customers in Foundry material.
- Agent Optimizer is described as coming soon/public preview timing in Foundry material.
- Frontier Tuning is described as private preview via Forward Deployed Engineers, with more Copilot Studio and Foundry availability details to come.
- Azure HorizonDB is described as public preview with regional availability that should be checked before sample implementation.
- Azure Container Apps Sandboxes is described as public preview; prefer blog/docs checks before writing runnable provisioning.
- Logic Apps Automation is described as public preview with a limited initial region set and more AI/enterprise capabilities coming later.
- Connector Namespace is described as preview in Microsoft Learn; hosted MCP servers are explicitly public preview.
- Project Solara is early platform concept material, not an implementation-ready developer product surface.
- Some model names differ across public posts; prefer Microsoft AI model pages for MAI naming before writing sample code. The current model family names in this repo use Microsoft AI naming: MAI-Thinking-1, MAI-Code-1-Flash, MAI-Image-2.5, MAI-Transcribe-1.5, and MAI-Voice-2.

## Next Content Moves

1. Completed: expanded the public site and sample backlog to eleven design briefs covering model routing, local/edge execution, prompt-to-production backend, Windows local-agent harness, Copilot worktree workflow, and Discovery research workflows.
2. Completed: wider official-source crawl on 2026-06-06; promoted underrepresented public sources for the system architecture, Web IQ internals, Project Solara, hosted MCP, Logic Apps Automation, API Center/APIM, Foundry Toolkit, and skilling.
3. Add a short status field to each announcement row: GA, public preview, private preview, limited access, planned GA, or early access.
4. Create an infrastructure decision table that separates local device, Windows Cloud PC, Azure Functions, Container Apps dynamic sessions, Cobalt 200, GPU/Managed Compute, Foundry Local, and Azure Local.
5. Keep the README and `sources.html` source baseline in sync with this scan whenever new official Build posts are added.
