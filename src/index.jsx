import React from 'react';
import { createRoot } from 'react-dom/client';
import HermesWebUIEngineApp from './App.jsx';
import './styles/styles.css';

/**
 * Sovereign Datacore Component Lifecycle Standard Export
 * Used by GrexNexusObsidian, GrexNexusMobile, and GrexNexusWeb host loaders.
 */
export async function mount_app(container, props = {}) {
  if (!container) {
    throw new Error('[HermesWebUIEngine] Target container is null.');
  }

  // Force Obsidian host container to fill 100% of the pane
  container.style.position = 'relative';
  container.style.width = '100%';
  container.style.height = '100%';
  container.style.minHeight = '100%';
  container.style.margin = '0';
  container.style.padding = '0';
  container.style.overflow = 'hidden';

  const root = createRoot(container);
  root.render(<HermesWebUIEngineApp {...props} />);

  return () => {
    try {
      root.unmount();
    } catch (_) {}
  };
}

export default mount_app;
export { HermesWebUIEngineApp };
