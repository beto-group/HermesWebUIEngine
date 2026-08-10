import React, { useState, useEffect } from 'react';
import { ServerOff, Play, RefreshCw, ExternalLink } from 'lucide-react';
import { startServer, isMobileOrCapacitor } from '../utils/serverBridge.js';

export function WebUIView({ status, config, onRefresh }) {
  const [starting, setStarting] = useState(false);
  const targetUrl = `http://${config.host}:${config.port}`;

  // On standalone Android child APK, X-Frame-Options blocks iframes from file:// origin.
  // Solution: navigate the WebView directly to the backend URL — no iframe needed.
  const isStandaloneAndroid = typeof window !== 'undefined' && !!window.grexNativeBridge;
  const isMobile = isMobileOrCapacitor();

  useEffect(() => {
    if (status.online && isStandaloneAndroid) {
      // Navigate whole WebView directly — bypasses X-Frame-Options / ERR_BLOCKED_BY_RESPONSE
      window.location.replace(targetUrl);
    }
  }, [status.online, isStandaloneAndroid, targetUrl]);

  const handleStart = async () => {
    setStarting(true);
    try {
      await startServer();
      setTimeout(onRefresh, 2500);
    } finally {
      setStarting(false);
    }
  };

  if (!status.online) {
    return (
      <div className="hermes-webui-body">
        <div className="hermes-offline-container">
          <div className="hermes-offline-card">
            <div style={{ width: 48, height: 48, borderRadius: 12, background: 'rgba(239, 68, 68, 0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#f87171' }}>
              <ServerOff size={24} />
            </div>
            <span className="hermes-offline-title">Hermes WebUI Server Offline</span>
            <p className="hermes-offline-desc">
              Not responding at <code style={{ background: 'rgba(0,0,0,0.4)', padding: '2px 6px', borderRadius: 4, color: '#38bdf8' }}>{targetUrl}</code>.
              {isMobile && <><br /><span style={{ fontSize: '11px', color: '#94a3b8', marginTop: 4, display: 'block' }}>Make sure Hermes is running on your desktop and both devices are on the same Wi-Fi.</span></>}
            </p>
            <div style={{ display: 'flex', gap: 10, width: '100%', marginTop: 8 }}>
              {!isMobile && (
                <button
                  className="hermes-btn primary"
                  onClick={handleStart}
                  disabled={starting}
                  style={{ flex: 1, justifyContent: 'center', padding: '10px 16px' }}
                >
                  <Play size={14} />
                  <span>{starting ? 'Starting Server...' : 'Start Server Daemon'}</span>
                </button>
              )}
              <button
                className="hermes-btn"
                onClick={onRefresh}
                style={{ justifyContent: 'center', padding: '10px 14px', flex: isMobile ? 1 : 0 }}
                title="Retry Connection"
              >
                <RefreshCw size={14} />
                {isMobile && <span style={{ marginLeft: 6 }}>Retry</span>}
              </button>
              {isMobile && (
                <a
                  href={targetUrl}
                  className="hermes-btn"
                  style={{ justifyContent: 'center', padding: '10px 14px', flex: 1, textDecoration: 'none' }}
                  title="Open directly in browser"
                >
                  <ExternalLink size={14} />
                  <span style={{ marginLeft: 6 }}>Open Browser</span>
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Standalone Android: WebView is navigated directly via useEffect above.
  // Show a brief loading indicator while redirect happens.
  if (isStandaloneAndroid) {
    return (
      <div className="hermes-webui-body" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', gap: 16, color: 'rgba(255,255,255,0.5)', fontFamily: 'sans-serif' }}>
        <div style={{ width: 36, height: 36, border: '2px solid #a855f7', borderTopColor: 'transparent', borderRadius: '50%', animation: 'spin 0.8s linear infinite' }} />
        <span style={{ fontSize: 13 }}>Connecting to Hermes…</span>
      </div>
    );
  }

  // Desktop / Capacitor: use iframe
  return (
    <div className="hermes-webui-body">
      <iframe
        src={targetUrl}
        className="hermes-iframe"
        title="Hermes WebUI"
        allow="clipboard-read; clipboard-write; microphone; camera"
      />
    </div>
  );
}

