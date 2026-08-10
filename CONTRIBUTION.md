# Engineering Contribution Guidelines

## Architecture Principles

1. **Zero-Leak Styling**: All CSS selectors must be scoped strictly within `.hermes-webui-` classes. Never apply global tag overrides on `html`, `body`, or `#root`.
2. **Sovereign Dependencies**: Avoid bulky runtime dependencies. All logic must bundle into a self-contained `dist/bundle.es.js` via Vite.
3. **No Hardcoded Paths or Secrets**: Never commit local user paths (`/Users/`, `/Volumes/`), private IPs, or API keys to the repository.
4. **Lifecycle Contract**: `src/index.jsx` must always export a valid `mount_app(container, props)` lifecycle function returning an unmount callback.

---

## Development Workflow

1. Clone or pull repository.
2. Run `npm install` (or `pnpm install`).
3. Run `npm run build` to verify `dist/bundle.es.js` generation.
4. Test loading inside Obsidian (`GrexNexusObsidian`) and Android (`GrexNexusMobile`).
