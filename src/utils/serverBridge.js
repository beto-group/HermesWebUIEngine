/**
 * Sovereign Node.js Child Process & Server Bridge
 * Uses zero-dependency native Node.js / Electron / Sidecar IPC.
 */

const STORAGE_KEYS = {
  HOST: 'hermes_webui_host',
  PORT: 'hermes_webui_port',
  PASSWORD: 'hermes_webui_password',
  AUTO_CONNECT: 'hermes_webui_auto_connect'
};

const DEFAULT_CONFIG = {
  host: '127.0.0.1',
  port: '8787',
  password: 'Jm*q*QO#tgPjXWqO5C8ePLl1tQj1^ol6%',
  autoConnect: true
};

export function loadConfig() {
  if (typeof window === 'undefined') return DEFAULT_CONFIG;
  return {
    host: localStorage.getItem(STORAGE_KEYS.HOST) || DEFAULT_CONFIG.host,
    port: localStorage.getItem(STORAGE_KEYS.PORT) || DEFAULT_CONFIG.port,
    password: localStorage.getItem(STORAGE_KEYS.PASSWORD) || DEFAULT_CONFIG.password,
    autoConnect: localStorage.getItem(STORAGE_KEYS.AUTO_CONNECT) !== 'false'
  };
}

export function saveConfig(cfg) {
  if (typeof window === 'undefined') return;
  if (cfg.host !== undefined) localStorage.setItem(STORAGE_KEYS.HOST, cfg.host);
  if (cfg.port !== undefined) localStorage.setItem(STORAGE_KEYS.PORT, cfg.port);
  if (cfg.password !== undefined) localStorage.setItem(STORAGE_KEYS.PASSWORD, cfg.password);
  if (cfg.autoConnect !== undefined) localStorage.setItem(STORAGE_KEYS.AUTO_CONNECT, String(cfg.autoConnect));
}

// 🛡️ Resolve Native Node.js Child Process from Electron / Obsidian Host
function getNodeChildProcess() {
  try {
    if (typeof window !== 'undefined' && typeof window.require === 'function') {
      return window.require('child_process');
    }
  } catch (_) {}
  return null;
}

export async function executeCommand(command) {
  // 1. Native Node.js Child Process (Instant & Sovereign)
  const cp = getNodeChildProcess();
  if (cp && typeof cp.exec === 'function') {
    return new Promise((resolve) => {
      cp.exec(command, (err, stdout, stderr) => {
        if (err) {
          console.warn('[HermesWebUI] Node child_process error:', stderr || err.message);
          resolve({ ok: false, error: stderr || err.message, code: err.code });
        } else {
          resolve({ ok: true, stdout: stdout.trim(), code: 0 });
        }
      });
    });
  }

  // 2. Grex Platform API Bridge
  if (typeof window !== 'undefined' && window.grexPlatformAPI?.cli?.exec) {
    try {
      const res = await window.grexPlatformAPI.cli.exec(command);
      return { ok: res.code === 0, ...res };
    } catch (err) {
      console.warn('[HermesWebUI] grexPlatformAPI.cli.exec failed:', err);
    }
  }

  // 3. Sidecar Daemon API (:7777)
  try {
    const res = await fetch('http://127.0.0.1:7777/api/exec', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ command })
    });
    if (res.ok) {
      return await res.json();
    }
  } catch (_) {}

  return { ok: false, error: 'No execution bridge available.' };
}

export async function checkServerHealth(host, port) {
  // 1. Use Native Node.js HTTP if available (Bypasses Browser CORS/401 alerts)
  try {
    if (typeof window !== 'undefined' && typeof window.require === 'function') {
      const http = window.require('http');
      if (http && typeof http.get === 'function') {
        return new Promise((resolve) => {
          const req = http.get(`http://${host}:${port}/login`, { timeout: 2000 }, (res) => {
            // Any HTTP status code from the server (200, 302, 401) proves it's online
            resolve({ online: true, statusCode: res.statusCode });
          });
          req.on('error', () => resolve({ online: false }));
          req.on('timeout', () => { req.destroy(); resolve({ online: false }); });
        });
      }
    }
  } catch (_) {}

  // 2. Fetch probe fallback
  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 2000);
    await fetch(`http://${host}:${port}/login`, { signal: controller.signal, mode: 'no-cors' });
    clearTimeout(timeoutId);
    return { online: true };
  } catch (err) {
    return { online: false, error: err.message };
  }
}

export async function startServer() {
  const cmd = `cd /Users/blackbird/.hermes/hermes-webui && ./ctl.sh start`;
  return await executeCommand(cmd);
}

export async function stopServer() {
  const cmd = `cd /Users/blackbird/.hermes/hermes-webui && ./ctl.sh stop`;
  return await executeCommand(cmd);
}

export async function restartServer() {
  const cmd = `cd /Users/blackbird/.hermes/hermes-webui && ./ctl.sh restart`;
  return await executeCommand(cmd);
}
