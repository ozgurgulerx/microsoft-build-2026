# Sample 06: Model Router + Inference Substrate

Goal: design a task router that chooses the right model and runtime path for each request.

## Builder Question

Which model and inference substrate should handle chat, reasoning, coding, image, transcription, voice, or batch work?

## Planned Shape

- Task classifier for modality, latency tolerance, privacy, and cost sensitivity.
- Candidate routes for MAI models, Fireworks AI on Foundry, Managed Compute, Foundry Local, and GPU/VM placement.
- Telemetry shape for latency, token usage, quality score, and failure mode.
- Fallback and escalation policy.
- Comparison table for pay-per-token, provisioned, managed GPU, local, and edge paths.

## Public Sources

- https://microsoft.ai/news/building-a-hillclimbing-machine-launching-seven-new-mai-models/
- https://devblogs.microsoft.com/foundry/whats-new-in-microsoft-foundry-build-2026/
- https://devblogs.microsoft.com/foundry/announcing-foundry-managed-compute/
- https://devblogs.microsoft.com/foundry/accelerate-edge-ai-development-with-foundry-local/

## Status

L0: design brief. Verify model names, access status, SDK support, and pricing before implementation.
