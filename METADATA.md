---
author: beto.group
version: 1.0.0
id: hermes-webui-engine
name: HERMES WEBUI ENGINE
description: Sovereign Hermes WebUI control surface, daemon supervisor, and mobile bridge.
status: stable
complexity: intermediate
category:
  - agent
  - workspace
  - terminal
compatibility:
  - Obsidian >=1.4.11
  - GrexNexus >=1.0.0
  - Capacitor >=5.0.0
repository:
  - https://github.com/beto-group/HermesWebUIEngine
missing: []
resources: []
type: DatacoreComponent
target: Datacore
security:
  - Sandboxed
  - NodeFS
storage:
  - LocalState
network: External
runtime: PureJS
entry_point: HermesWebUIEngine.md
logic: src/index.jsx
---

Sovereign Hermes WebUI control surface, daemon supervisor, and mobile bridge.
