# Capability Asset Audit

Audit date: 2026-06-06

This audit tracks the Blog / Docs / Code slots behind each capability row in the AI Builder Atlas. The goal is not to replicate Microsoft Build pages; it is to give AI builders the best follow-up path from announcement to documentation to runnable sample.

## Current Coverage

| Slot | Filled | Total |
| --- | ---: | ---: |
| Blog | 67 | 67 |
| Docs | 59 | 67 |
| Code | 54 | 67 |
| Complete Blog + Docs + Code bundles | 51 | 67 |

## Source Rules Applied

- Blog links use public Microsoft Build, Microsoft DevBlogs, Azure Blog, Microsoft Tech Community, Microsoft Security, Windows Developer, GitHub Blog, Bing Blog, Microsoft AI, or Command Line posts.
- Docs links prefer Microsoft Learn. GitHub README pages are not used as docs unless the capability is itself a GitHub-first project and no Microsoft Learn page exists.
- Code links use local repo samples when they are the best builder path, or public GitHub repositories when a stronger official sample exists.
- Missing slots are intentional when an exact or defensible public resource was not found. The UI renders those as colored hollow dots.

## Open Context Used

- Local Atlas page: `http://localhost:8875/index.html`
- Production Atlas page: `https://www.buildsignal2026.com/`
- Foundry Agent Service Build 2026 blog: `https://devblogs.microsoft.com/foundry/agent-service-build2026/`
- Azure Container Apps Dynamic Sessions docs: `https://learn.microsoft.com/en-us/azure/container-apps/sessions`

## Intentionally Shared Or Parent-Level Links

Some capabilities are slices of a larger documented feature. These rows use parent docs instead of weak one-off links:

| Capability family | Docs basis |
| --- | --- |
| Runtime / session state, hosted agents, agent identity, service memory | Microsoft Foundry Agent Service overview and runtime components docs |
| Azure Functions Serverless Agents | Foundry Agents Azure Functions tool docs plus local Functions sample |
| Code Interpreter / sandbox execution | Azure Container Apps Dynamic Sessions and Code Interpreter session docs |
| Evals, tracing, observability, ROI, optimizer | Foundry observability, trace, evaluation, and cost-management docs |
| Toolboxes, Tool Search, MCP tool standard | Foundry Agents tool catalog and MCP tool docs |
| Foundry IQ, Web IQ, Work IQ, Fabric IQ | Microsoft Learn docs for Foundry IQ, Work IQ APIs, Microsoft IQ, Fabric IQ, and Fabric ontology |
| HorizonDB and semantic context | HorizonDB Learn docs, Fabric ontology docs, Rayfin GitHub, and local prompt-to-backend sample |
| Models and infrastructure | Foundry Models MAI docs, partner model docs, Managed Compute docs, Foundry Local docs, Windows AI APIs, and available platform docs |

## Slots Still Open

These are left empty because the public source surface did not expose a clean docs page or runnable sample yet.

| Capability | Missing slot | Reason |
| --- | --- | --- |
| Agent Service Routines | Code | Foundry routines docs exist, but no exact public runnable sample was found. |
| Agent Control Specification (ACS) | Docs, Code | Public Command Line articles exist; no official Learn reference or sample was found. |
| Agent 365 | Code | Learn docs exist; no public sample repo found for Agent 365 management flows. |
| Purview / Defender / Entra | Code | Security docs exist; no single builder sample maps cleanly to this grouped governance row. |
| ASSERT open-source agent eval | Docs, Code | Public announcement exists; no exact official docs or sample found. |
| ACS (Agent Control Spec) | Docs, Code | Same status as the ACS row above. |
| Discovery evidence loops | Docs | Public announcement and local sample brief exist; no exact Learn documentation found. |
| Governed distribution | Code | Publish docs exist; no exact sample for the announced distribution path found. |
| Foundry Toolkit for VS Code | Docs | Direct Build blog exists; no exact Learn page for the Build 2026 Toolkit update was found. |
| Rayfin prompt-to-backend CLI | Docs | Rayfin is GitHub-first today; the repo is used as Code, not duplicated as Docs. |
| Frontier Tuning managed RL fine-tuning | Docs, Code | Public preview announcement exists; generic fine-tuning docs were not used as a substitute. |
| Microsoft IQ + Scout | Code | Microsoft IQ docs exist; no Scout-specific public sample found. |
| Cobalt 200 VMs | Docs, Code | Announcement exists; no Cobalt 200-specific Learn page or sample found. |
| Anyscale on Azure managed Ray on AKS | Code | Learn docs exist; no exact Build sample repo found. |
| NVIDIA Vera / Rubin NVL72 | Code | Azure GPU VM docs exist; no sample is appropriate for this hardware-row capability. |
| Majorana 2 quantum chip | Code | Azure Quantum docs exist; no Majorana 2 code sample is appropriate. |

## Follow-Up Search Targets

- Routines sample once Foundry Agent Service publishes one.
- ACS / Agent Control Specification reference docs and sample policy manifests.
- Agent 365 SDK sample flows for registration, inventory, and lifecycle.
- Foundry Toolkit for VS Code Microsoft Learn page, if published after the Build blog.
- Frontier Tuning implementation docs or private-preview public sample once Microsoft publishes them.
- Cobalt 200 VM size docs once the early-access VM SKUs appear in Microsoft Learn.
