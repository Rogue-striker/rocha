# Rocha Decision Log

## Open Questions

*(None currently)*

## Logged Decisions

### D-001: Project Layout and Technology Choices
- **Context:** Bootstrapping Rocha native orchestrator.
- **Decision:** Rust 2021 stable edition with Cargo workspace; pure ES2022 zero-dependency JS harness; MessagePack wire protocol (`rmp-serde`); `tokio` confined to `rocha-worker`, `rocha-sched`, `rocha-watch`.
- **Status:** Accepted.
