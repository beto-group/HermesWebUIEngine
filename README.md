
# Hermes WebUI Engine

### Sᴏᴠᴇʀᴇɪɢɴ WᴇʙUI Cᴏɴᴛʀᴏʟ Sᴜʀғᴀᴄᴇ & Dᴀᴇᴍᴏɴ Sᴜᴘᴇʀᴠɪsᴏʀ

`HermesWebUIEngine` is the sovereign micro-application and control surface for managing and interacting with the **Hermes WebUI** agent ecosystem. It delivers a full-screen, touch-responsive agent workspace across **Obsidian Desktop**, **GrexNexusMobile (Android & iOS)**, and standalone browser environments.

---

## 🌟 Core Architecture

1. **Immersive Full-Bleed Viewport**: Renders the complete Hermes Agent workspace in an edge-to-edge frame.
2. **Auto-Hiding Top HUD**: Move the cursor near the top edge of the window to access daemon controls:
   - **Start Server**: Launches the daemon via native IPC.
   - **Restart Daemon**: Triggers immediate service restart.
   - **Stop Server**: Halts the running process.
   - **Host Switcher**: Quick-toggle between local desktop loopback and local Wi-Fi.
3. **Cross-Platform Lifecycle**:
   - **Obsidian**: Embedded via `GrexNexusObsidian` using native Node.js process supervision.
   - **Mobile**: Touch-optimized interface running in `GrexNexusMobile` connecting over local network.
   - **Web**: Standalone ESM module compatibility.

---

## 📁 Repository Layout

| File / Folder | Purpose |
| :--- | :--- |
| [`src/index.jsx`](src/index.jsx) | Sovereign lifecycle entrypoint (`mount_app` export) |
| [`src/App.jsx`](src/App.jsx) | Root coordinating view & top hover HUD |
| [`src/utils/serverBridge.js`](src/utils/serverBridge.js) | IPC commands, process supervisor & connection store |
| [`src/styles/styles.css`](src/styles/styles.css) | Glassmorphic theme & full-screen layouts |
| [`grex.json`](grex.json) | Package metadata & entrypoint descriptor |
| [`manifest.json`](manifest.json) | Plugin discovery manifest |
| [`METADATA.md`](METADATA.md) | Package manifest & capability index |
| [`CONTRIBUTION.md`](CONTRIBUTION.md) | Engineering guidelines & build workflows |
| [`LICENSE.md`](LICENSE.md) | MIT License |

---

## 🛠️ Local Build & Verification

```bash
# Install dependencies
npm install

# Compile sovereign ESM bundle
npm run build
```

The compiled bundle is output to `dist/bundle.es.js` with integrated dynamic CSS injection.

---

## 📄 License

MIT © [Beto Group](https://github.com/beto-group)
