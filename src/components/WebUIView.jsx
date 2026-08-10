import React, { useState } from 'react';
import { ServerOff, Play, RefreshCw } from 'lucide-react';
import { startServer } from '../utils/serverBridge.js';

export function WebUIView({ status, config, onRefresh }) {
  const [starting, setStarting] = useState(false);
  const targetUrl = `http://${config.host}:${config.port}`;

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
              The Hermes WebUI server is not responding at <code style={{ background: 'rgba(0,0,0,0.4)', padding: '2px 6px', borderRadius: 4, color: '#38bdf8' }}>{targetUrl}</code>. Start the server daemon or update your connection settings.
            </p>
            <div style={{ display: 'flex', gap: 10, width: '100%', marginTop: 8 }}>
              <button 
                className="hermes-btn primary" 
                onClick={handleStart}
                disabled={starting}
                style={{ flex: 1, justifyContent: 'center', padding: '10px 16px' }}
              >
                <Play size={14} />
                <span>{starting ? 'Starting Server...' : 'Start Server Daemon'}</span>
              </button>
              <button 
                className="hermes-btn" 
                onClick={onRefresh}
                style={{ justifyContent: 'center', padding: '10px 14px' }}
                title="Retry Connection"
              >
                <RefreshCw size={14} />
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

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
