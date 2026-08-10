# HermesWebUIEngine — Sovereign Component Specification

## Overview
`HermesWebUIEngine` is the sovereign GREX Component wrapper and supervisor for the **Hermes WebUI** stack. It provides:
- Live embedding of the Hermes WebUI interface.
- Daemon process lifecycle management (`ctl.sh start|stop|restart`).
- Multi-host bridging (`127.0.0.1:8787` for desktop and `192.168.1.160:8787` for mobile APK / LAN).
- Cross-platform support across **Obsidian (Windows / macOS / Linux)**, **GrexNexusMobile (Android / iOS)**, and **GrexNexusWeb**.

---

## Component Metadata
- **ID**: `hermes-webui-engine`
- **Name**: `Hermes WebUI Engine`
- **Entrypoint**: `dist/bundle.es.js`
- **Category**: `agent` / `workspace`
- **Icon**: `layout-grid`

---

## Supported APIs & IPC Channels
- **Sidecar Bridge**: `http://localhost:7777/api/exec`
- **Platform Bridge**: `window.grexPlatformAPI.exec`
- **Backend Host**: `http://<host>:8787`
