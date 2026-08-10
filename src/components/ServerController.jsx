import React, { useState } from 'react';
import { Play, Square, RotateCw, Settings, ExternalLink, Activity, Server } from 'lucide-react';
import { startServer, stopServer, restartServer } from '../utils/serverBridge.js';

export function ServerController({ status, config, onRefresh, onOpenSettings }) {
  const [loadingAction, setLoadingAction] = useState(null);

  const handleStart = async () => {
    setLoadingAction('start');
    try {
      await startServer();
      setTimeout(onRefresh, 2000);
    } finally {
      setLoadingAction(null);
    }
  };

  const handleStop = async () => {
    setLoadingAction('stop');
    try {
      await stopServer();
      setTimeout(onRefresh, 1500);
    } finally {
      setLoadingAction(null);
    }
  };

  const handleRestart = async () => {
    setLoadingAction('restart');
    try {
      await restartServer();
      setTimeout(onRefresh, 2500);
    } finally {
      setLoadingAction(null);
    }
  };

  const webUrl = `http://${config.host}:${config.port}`;

  return (
    <header className="hermes-webui-header">
      <div className="hermes-header-left">
        <div className="hermes-logo-badge">
          <Server size={18} />
        </div>
        <div className="hermes-header-title">
          <span className="hermes-title-text">Hermes WebUI Engine</span>
          <div className="hermes-subtitle-text">
            <span className={`status-dot ${status.checking ? 'checking' : (status.online ? 'online' : 'offline')}`} />
            <span>{status.checking ? 'Checking daemon...' : (status.online ? `Connected (${config.host}:${config.port})` : 'Daemon Stopped')}</span>
          </div>
        </div>
      </div>

      <div className="hermes-header-actions">
        {status.online ? (
          <>
            <button 
              className="hermes-btn" 
              onClick={handleRestart}
              disabled={Boolean(loadingAction)}
              title="Restart Hermes WebUI Daemon"
            >
              <RotateCw size={13} className={loadingAction === 'restart' ? 'animate-spin' : ''} />
              <span>Restart</span>
            </button>
            <button 
              className="hermes-btn danger" 
              onClick={handleStop}
              disabled={Boolean(loadingAction)}
              title="Stop Hermes WebUI Daemon"
            >
              <Square size={13} />
              <span>Stop</span>
            </button>
          </>
        ) : (
          <button 
            className="hermes-btn primary" 
            onClick={handleStart}
            disabled={Boolean(loadingAction)}
            title="Start Hermes WebUI Daemon"
          >
            <Play size={13} />
            <span>Start Server</span>
          </button>
        )}

        <a 
          href={webUrl} 
          target="_blank" 
          rel="noreferrer"
          className="hermes-btn"
          title="Open in Browser"
        >
          <ExternalLink size={13} />
        </a>

        <button 
          className="hermes-btn" 
          onClick={onOpenSettings}
          title="Connection Settings"
        >
          <Settings size={13} />
        </button>
      </div>
    </header>
  );
}
