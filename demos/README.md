# Demo Narratives

These are demo storylines for turning announcement tracks into builder-facing walkthroughs.

## Demo 1: From Prompt to Production Agent

Audience: app and platform builders.

Flow:

1. Start with a local Agent Framework prototype.
2. Add Foundry IQ context.
3. Add tools through a managed MCP/toolbox surface.
4. Deploy to Foundry Agent Service.
5. Inspect traces and evaluations.
6. Publish the agent to a work surface.

## Demo 2: Safe Code Execution for Agents

Audience: AI app builders who need analysis, scripting, or notebook-like execution.

Flow:

1. Agent receives a data analysis task.
2. Agent routes generated code to an Azure Container Apps dynamic session.
3. Session runs with a secure identifier and constrained network posture.
4. Output returns to the agent with logs and cleanup.
5. Failure case shows why direct host execution is unsafe.

## Demo 3: Event-Driven Workstream Agent

Audience: builders turning operational workflows into durable agents.

Flow:

1. Azure Functions receives an event.
2. Durable workflow stores task state.
3. Agent calls a governed tool/MCP action.
4. Human approval checkpoint happens in a collaboration surface.
5. Observability links the task to trace and eval evidence.

## Demo 4: Agent Governance Readiness

Audience: engineering leads, platform teams, and security teams.

Flow:

1. Register agent and identity.
2. Map tools, data sources, and privileges.
3. Apply guardrail/evaluation policy.
4. Monitor traces, failures, and ROI.
5. Document lifecycle owner and rollback path.

## Demo 5: Model Router And Local Edge Agent

Audience: builders choosing between hosted, managed, GPU-backed, local, and edge inference.

Flow:

1. Classify the task by modality, latency, privacy, cost, and quality target.
2. Route to MAI, Fireworks on Foundry, Managed Compute, Foundry Local, or GPU/VM path.
3. Record latency, token usage, quality score, and fallback reason.
4. Repeat with a Foundry Local / Azure Local edge variant.
5. Explain why the substrate changed.

## Demo 6: Prompt-To-Production Backend

Audience: app builders using coding agents to create real backend systems.

Flow:

1. Start from a synthetic app prompt.
2. Generate a Rayfin-backed backend blueprint.
3. Review data model, auth, policy, and deployment boundaries.
4. Persist operational context through Fabric/HorizonDB/Cosmos DB options.
5. Gate the generated output through PR review before calling it production-ready.

## Demo 7: Windows Local-Agent Harness

Audience: builders who need local app, file, browser, or Cloud PC automation.

Flow:

1. Run a local agent with Windows AI / Foundry Local path.
2. Define file, network, and tool policy.
3. Attribute actions to an agent identity.
4. Move UI-level work to Windows 365 Agents when needed.
5. Document MXC, audit, and rollback requirements.

## Demo 8: Discovery Research Workflow

Audience: research, engineering, and product teams exploring agentic R&D.

Flow:

1. Start with a hypothesis and explicit evidence requirements.
2. Let the agent propose tools and collect artifacts.
3. Log claims, citations, uncertainty, and rejected paths.
4. Require human review before conclusions are promoted.
5. Preserve the source registry and handoff notes.
