# AI Builder Map

This map turns Build 2026 AI updates into a builder sequence: pick intelligence, ground it, give it tools, run it safely, and operate it with evidence.

## 1. Model

Builder question: what intelligence do I use?

Relevant areas:

- Microsoft Foundry model catalog and model management.
- MAI models and partner models surfaced through Foundry.
- Fireworks AI on Foundry.
- Managed Compute for inference and customization.
- Frontier Tuning, fine-tuning, and model evaluation.
- Foundry Local and Foundry Local on Azure Local for offline or edge execution.
- Model routing across modality, cost, latency, quality, and privacy requirements.

Demo angle: compare model choices against latency, cost, quality, grounding needs, and governance requirements.

## 2. Context

Builder question: what does the agent know?

Relevant areas:

- Foundry IQ knowledge bases.
- Microsoft IQ and Scout as shared work-context signals.
- Web IQ for fresh external grounding.
- Work IQ for Microsoft 365 work context.
- Fabric IQ, OneLake, semantic models, and ontology-backed sources.
- Rayfin and HorizonDB for application backend and operational context.
- Azure SQL, File Search, Azure AI Search, and MCP-connected sources.
- Cosmos DB for operational data, vector search, semantic reranking, and memory patterns.

Demo angle: build a retrieval-first agent that can state which source answered which part of a task.

## 3. Tools

Builder question: what can the agent do?

Relevant areas:

- Toolboxes in Foundry as managed MCP-compatible tool endpoints.
- Tool search for choosing the right tool at runtime.
- Skills as versioned project capabilities.
- Azure Functions MCP and serverless agent actions.
- Rayfin CLI for prompt-to-production backend generation.
- GitHub Copilot app and worktrees for parallel agentic development.
- Azure Container Apps dynamic sessions for code execution sandboxes.
- Code Interpreter, Voice Live, Teams, Microsoft 365 Copilot, and app connectors.

Demo angle: route a task through a small set of governed tools instead of giving the model broad direct access.

## 4. Harness

Builder question: how does it run safely in production?

Relevant areas:

- Microsoft Agent Framework.
- Foundry Agent Service hosted agents, routines, memory, files, and long-running tasks.
- Agent identity through Entra and Agent 365 governance.
- ASSERT, Agent Control Specification, guided guardrails, and Rubric.
- Tracing, evaluations, monitoring, optimizer, and ROI.
- Windows agent containment, MXC policy, and Windows 365 Agents for local or UI-level automation.
- Microsoft Discovery-style evidence and review loops for research workflows.
- Publishing routes into Microsoft Teams and Microsoft 365 Copilot.

Demo angle: show the same agent moving from local harness to hosted service with traces, evals, and rollback-ready improvements.

## 5. AI Infrastructure

Builder question: where does this run?

Relevant areas:

- Foundry local and cloud development loops.
- Foundry Local, Azure Local, and Windows AI APIs for local or edge inference.
- Foundry Managed Compute and GPU-backed paths for open-model serving.
- Azure Functions for event-driven and durable agent workloads.
- Azure Container Apps for app hosting and dynamic sessions.
- Cosmos DB for operational memory and resilient data access.
- Cobalt 200 VMs for scale-out agent services and data-intensive tiers.
- AI compute choices for training, fine-tuning, and inference.
- Windows, RTX developer hardware, and Cloud PC execution paths for agents that need UI-level work.

Demo angle: explain the substrate decision for each sample, including isolation, cost, latency, and operational burden.
