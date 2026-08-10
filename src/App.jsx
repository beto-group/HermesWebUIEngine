import React, { useState, useEffect, useCallback, useRef } from 'react';
import { 
  Play, 
  Square, 
  RotateCw, 
  Settings, 
  ExternalLink, 
  Globe, 
  Server,
  X,
  Save
} from 'lucide-react';
import { 
  loadConfig, 
  saveConfig, 
  checkServerHealth, 
  startServer, 
  stopServer, 
  restartServer 
} from './utils/serverBridge.js';
import './styles/styles.css';

export default function HermesWebUIEngineApp() {
  const [config, setConfig] = useState(loadConfig);
  const [status, setStatus] = useState({ online: false, checking: true });
  const [isNavHovered, setIsNavHovered] = useState(false);
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const [loadingAction, setLoadingAction] = useState(null);
  const hideTimeoutRef = useRef(null);

  const checkHealth = useCallback(async () => {
    setStatus(prev => ({ ...prev, checking: true }));
    const res = await checkServerHealth(config.host, config.port);
    setStatus({ online: res.online, checking: false });
  }, [config.host, config.port]);

  useEffect(() => {
    checkHealth();
    const interval = setInterval(checkHealth, 8000);
    return () => clearInterval(interval);
  }, [checkHealth]);

  const handleMouseEnter = () => {
    if (hideTimeoutRef.current) clearTimeout(hideTimeoutRef.current);
    setIsNavHovered(true);
  };

  const handleMouseLeave = () => {
    hideTimeoutRef.current = setTimeout(() => {
      setIsNavHovered(false);
    }, 400);
  };

  const handleStart = async () => {
    setLoadingAction('start');
    try {
      await startServer();
      setTimeout(checkHealth, 2000);
    } finally {
      setLoadingAction(null);
    }
  };

  const handleStop = async () => {
    setLoadingAction('stop');
    try {
      await stopServer();
      setTimeout(checkHealth, 1500);
    } finally {
      setLoadingAction(null);
    }
  };

  const handleRestart = async () => {
    setLoadingAction('restart');
    try {
      await restartServer();
      setTimeout(checkHealth, 2500);
    } finally {
      setLoadingAction(null);
    }
  };

  const targetUrl = `http://${config.host}:${config.port}`;

  return (
    <div 
      className="hermes-webui-fullscreen-frame"
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        width: '100%',
        height: '100%',
        margin: 0,
        padding: 0,
        overflow: 'hidden',
        background: '#030712'
      }}
    >
      {/* Top Hover Trigger Area */}
      <div 
        className="hermes-top-hover-zone"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: 36,
          zIndex: 100
        }}
      >
        <div className="hermes-top-edge-indicator" />
      </div>

      {/* Floating Auto-Hide Top Control Bar */}
      <div 
        className={`hermes-floating-navbar ${isNavHovered ? 'visible' : ''}`}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div className="hermes-nav-status">
          <Server size={14} color="#10b981" />
          <span className={`status-dot ${status.checking ? 'checking' : (status.online ? 'online' : 'offline')}`} />
          <span>{status.online ? `Hermes (${config.host}:${config.port})` : 'Daemon Stopped'}</span>
        </div>

        <div className="hermes-nav-actions">
          {status.online ? (
            <>
              <button 
                className="hermes-btn" 
                onClick={handleRestart}
                disabled={Boolean(loadingAction)}
                title="Restart Hermes WebUI Daemon"
              >
                <RotateCw size={11} className={loadingAction === 'restart' ? 'animate-spin' : ''} />
                <span>Restart</span>
              </button>
              <button 
                className="hermes-btn danger" 
                onClick={handleStop}
                disabled={Boolean(loadingAction)}
                title="Stop Hermes WebUI Daemon"
              >
                <Square size={11} />
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
              <Play size={11} />
              <span>Start Server</span>
            </button>
          )}

          <a 
            href={targetUrl} 
            target="_blank" 
            rel="noreferrer"
            className="hermes-btn"
            title="Open in Browser Window"
          >
            <ExternalLink size={11} />
          </a>

          <button 
            className="hermes-btn" 
            onClick={() => setIsSettingsOpen(true)}
            title="Host & Port Settings"
          >
            <Settings size={11} />
          </button>
        </div>
      </div>

      {/* Full-Bleed 100% Iframe */}
      <iframe 
        src={targetUrl}
        className="hermes-iframe-full"
        title="Hermes WebUI"
        allow="clipboard-read; clipboard-write; microphone; camera; display-capture"
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          border: 'none',
          margin: 0,
          padding: 0,
          display: 'block',
          background: '#030712'
        }}
      />

      {/* Settings Dialog */}
      {isSettingsOpen && (
        <SettingsModal 
          config={config}
          onClose={() => setIsSettingsOpen(false)}
          onSave={(newCfg) => {
            setConfig(newCfg);
            saveConfig(newCfg);
            setTimeout(checkHealth, 500);
          }}
        />
      )}
    </div>
  );
}

function SettingsModal({ config, onClose, onSave }) {
  const [formData, setFormData] = useState({ ...config });

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(formData);
    onClose();
  };

  return (
    <div className="hermes-modal-overlay" onClick={onClose}>
      <div className="hermes-modal-content" onClick={e => e.stopPropagation()}>
        <div className="hermes-modal-header">
          <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
            <Globe size={16} color="#10b981" />
            <span style={{ fontSize: 14, fontWeight: 600, color: '#f8fafc' }}>
              Hermes Host & Port Settings
            </span>
          </div>
          <button className="hermes-btn" onClick={onClose} style={{ padding: 3 }}>
            <X size={14} />
          </button>
        </div>

        <form onSubmit={handleSubmit}>
          <div style={{ display: 'flex', gap: 6, marginBottom: 14 }}>
            <button 
              type="button" 
              className="hermes-btn" 
              onClick={() => setFormData(prev => ({ ...prev, host: '127.0.0.1', port: '8787' }))}
              style={{ flex: 1, justifyContent: 'center' }}
            >
              Set Localhost (127.0.0.1)
            </button>
            <button 
              type="button" 
              className="hermes-btn" 
              onClick={() => setFormData(prev => ({ ...prev, host: '192.168.1.160', port: '8787' }))}
              style={{ flex: 1, justifyContent: 'center' }}
            >
              Set Phone Wi-Fi (192.168.1.160)
            </button>
          </div>

          <div className="hermes-form-group">
            <label className="hermes-form-label">Host IP / Domain</label>
            <input 
              type="text" 
              className="hermes-input"
              value={formData.host}
              onChange={e => setFormData({ ...formData, host: e.target.value })}
              required
            />
          </div>

          <div className="hermes-form-group">
            <label className="hermes-form-label">Port</label>
            <input 
              type="text" 
              className="hermes-input"
              value={formData.port}
              onChange={e => setFormData({ ...formData, port: e.target.value })}
              required
            />
          </div>

          <div className="hermes-form-group">
            <label className="hermes-form-label">Password</label>
            <input 
              type="password" 
              className="hermes-input"
              value={formData.password}
              onChange={e => setFormData({ ...formData, password: e.target.value })}
            />
          </div>

          <div style={{ display: 'flex', justifyContent: 'flex-end', gap: 6, marginTop: 18 }}>
            <button type="button" className="hermes-btn" onClick={onClose}>
              Cancel
            </button>
            <button type="submit" className="hermes-btn primary">
              <Save size={12} />
              <span>Save Changes</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
