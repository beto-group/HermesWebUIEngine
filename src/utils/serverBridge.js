/**
 * Sovereign Node.js Child Process, Capacitor Mobile & Server Bridge
 * Uses zero-dependency native Node.js / Electron / Sidecar IPC / Capacitor HTTP.
 */

const STORAGE_KEYS = {
  HOST: 'hermes_webui_host',
  PORT: 'hermes_webui_port',
  PASSWORD: 'hermes_webui_password',
  AUTO_CONNECT: 'hermes_webui_auto_connect'
};

export function isMobileOrCapacitor() {
  if (typeof window === 'undefined') return false;
  return !!(
    window.Capacitor?.isNativePlatform?.() ||
    window.Capacitor?.isNative ||
    (typeof window.Capacitor?.getPlatform === 'function' && window.Capacitor.getPlatform() !== 'web') ||
    navigator.userAgent.includes('Android') ||
    navigator.userAgent.includes('iPhone') ||
    navigator.userAgent.includes('iPad')
  );
}

export function getDefaultHost() {
  if (typeof window !== 'undefined' && window.location && window.location.hostname && window.location.hostname !== 'localhost' && window.location.hostname !== '127.0.0.1') {
    return window.location.hostname;
  }
  if (isMobileOrCapacitor()) {
    // If running in QEMU emulator use 10.0.2.2; on physical phone set your Mac's Wi-Fi IP (e.g. 192.168.1.160)
    return '192.168.1.160';
  }
  return '127.0.0.1';
}

const DEFAULT_CONFIG = {
  host: '127.0.0.1',
  port: '8787',
  password: 'Jm*q*QO#tgPjXWqO5C8ePLl1tQj1^ol6%',
  autoConnect: true
};

export function loadConfig() {
  if (typeof window === 'undefined') return DEFAULT_CONFIG;
  const savedHost = localStorage.getItem(STORAGE_KEYS.HOST);
  const effectiveDefaultHost = getDefaultHost();
  
  return {
    host: savedHost || effectiveDefaultHost,
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
  const sidecarHost = isMobileOrCapacitor() ? '10.0.2.2' : '127.0.0.1';
  try {
    const res = await fetch(`http://${sidecarHost}:7777/api/exec`, {
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
  // 1. Capacitor Native HTTP for Mobile
  if (typeof window !== 'undefined' && window.Capacitor?.Plugins?.CapacitorHttp) {
    try {
      const res = await window.Capacitor.Plugins.CapacitorHttp.request({
        method: 'GET',
        url: `http://${host}:${port}/login`,
        headers: {}
      });
      // 200, 302, 401 all indicate the server is alive
      if (res.status >= 200 && res.status < 500) {
        return { online: true, statusCode: res.status };
      }
    } catch (err) {
      console.warn('[HermesWebUI] CapacitorHttp probe error:', err);
    }
  }

  // 2. Use Native Node.js HTTP if available (Bypasses Browser CORS/401 alerts)
  try {
    if (typeof window !== 'undefined' && typeof window.require === 'function') {
      const http = window.require('http');
      if (http && typeof http.get === 'function') {
        return new Promise((resolve) => {
          const req = http.get(`http://${host}:${port}/login`, { timeout: 2000 }, (res) => {
            resolve({ online: true, statusCode: res.statusCode });
          });
          req.on('error', () => resolve({ online: false }));
          req.on('timeout', () => { req.destroy(); resolve({ online: false }); });
        });
      }
    }
  } catch (_) {}

  // 3. Browser Fetch probe fallback
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
