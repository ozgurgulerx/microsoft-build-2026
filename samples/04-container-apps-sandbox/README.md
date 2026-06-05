# Sample 04: Azure Container Apps Sandbox

Goal: use Azure Container Apps dynamic sessions as a safe execution substrate for code generated or requested by an agent.

## Builder Question

How do I let an agent run code without exposing the host, tenant, or other users?

## Planned Shape

- Code interpreter session pool.
- Secure session identifier generation.
- Optional custom container session variant.
- Network control and identity notes.
- Logging and cleanup.
- Negative tests for session isolation assumptions.

## Public Sources

- https://learn.microsoft.com/azure/container-apps/sessions
- https://learn.microsoft.com/azure/container-apps/sessions-usage
- https://learn.microsoft.com/azure/container-apps/sessions-code-interpreter

## Status

L0: design brief. Verify supported regions and current API before implementation.

