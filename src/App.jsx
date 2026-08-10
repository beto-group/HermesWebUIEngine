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
  Save, 
  AlertCircle, 
  CheckCircle2, 
  Smartphone, 
  Monitor,
  RefreshCw
} from 'lucide-react';
import { 
  loadConfig, 
  saveConfig, 
  checkServerHealth, 
  startServer, 
  stopServer, 
  restartServer,
  isMobileOrCapacitor,
  getDefaultHost,
  getTargetUrl
} from './utils/serverBridge.js';
import './styles/styles.css';

export default function HermesWebUIEngineApp() {
  const [config, setConfig] = useState(loadConfig);
  const [status, setStatus] = useState({ online: false, checking: true, lastCheck: Date.now() });
  const [isNavHovered, setIsNavHovered] = useState(false);
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const [loadingAction, setLoadingAction] = useState(null);
  const [iframeKey, setIframeKey] = useState(1);
  const hideTimeoutRef = useRef(null);
  const isMobile = isMobileOrCapacitor();

  const checkHealth = useCallback(async () => {
    setStatus(prev => ({ ...prev, checking: true }));
    let res = await checkServerHealth(config);
    
    // If on mobile/Capacitor and 127.0.0.1 failed, try 10.0.2.2 automatically
    if (!res.online && isMobile && config.host === '127.0.0.1' && !config.customUrl) {
      const fallbackCfg = { ...config, host: '10.0.2.2' };
      const fallbackRes = await checkServerHealth(fallbackCfg);
      if (fallbackRes.online) {
        setConfig(fallbackCfg);
        saveConfig(fallbackCfg);
        res = fallbackRes;
      }
    }

    setStatus({ online: res.online, checking: false, statusCode: res.statusCode, lastCheck: Date.now() });
  }, [config, isMobile]);

  useEffect(() => {
    checkHealth();
    const interval = setInterval(checkHealth, 8000);
    return () => clearInterval(interval);
  }, [checkHealth]);

  const [showMobileHud, setShowMobileHud] = useState(false);
  const mobileHudTimeoutRef = useRef(null);
  const lastTapTimeRef = useRef(0);
  const tapCountRef = useRef(0);

  const resetMobileHudTimer = useCallback((duration = 6000) => {
    setShowMobileHud(true);
    if (mobileHudTimeoutRef.current) clearTimeout(mobileHudTimeoutRef.current);
    mobileHudTimeoutRef.current = setTimeout(() => {
      setShowMobileHud(false);
    }, duration);
  }, []);

  useEffect(() => {
    if (!isMobile) return;

    const handleTap = (e) => {
      if (e.touches && e.touches.length >= 3) {
        resetMobileHudTimer(6000);
        return;
      }
      if (e.type === 'click' || e.type === 'touchend') {
        const now = Date.now();
        if (now - lastTapTimeRef.current < 450) {
          tapCountRef.current += 1;
          if (tapCountRef.current >= 3) {
            resetMobileHudTimer(6000);
            tapCountRef.current = 0;
          }
        } else {
          tapCountRef.current = 1;
        }
        lastTapTimeRef.current = now;
      }
    };

    window.addEventListener('touchstart', handleTap, { passive: true });
    window.addEventListener('click', handleTap);
    return () => {
      window.removeEventListener('touchstart', handleTap);
      window.removeEventListener('click', handleTap);
      if (mobileHudTimeoutRef.current) clearTimeout(mobileHudTimeoutRef.current);
    };
  }, [isMobile, resetMobileHudTimer]);

  const handleMouseEnter = () => {
    if (hideTimeoutRef.current) clearTimeout(hideTimeoutRef.current);
    setIsNavHovered(true);
  };

  const handleMouseLeave = () => {
    if (!isMobile) {
      hideTimeoutRef.current = setTimeout(() => {
        setIsNavHovered(false);
      }, 400);
    }
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

  const handleReloadFrame = () => {
    setIframeKey(prev => prev + 1);
    checkHealth();
  };

  const targetUrl = getTargetUrl(config);

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
        background: '#030712',
        display: 'flex',
        flexDirection: 'column'
      }}
    >
      {/* Top Hover Trigger Area (Desktop) */}
      {!isMobile && (
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
      )}

      {/* Floating Auto-Hide Top Control Bar */}
      <div 
        className={`hermes-floating-navbar ${(isMobile ? showMobileHud : isNavHovered) ? 'visible' : ''}`}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={() => isMobile && resetMobileHudTimer(6000)}
        style={{
          position: 'absolute',
          top: isMobile ? 'calc(env(safe-area-inset-top, 8px) + 36px)' : 0,
          left: '50%',
          transform: 'translateX(-50%)',
          zIndex: 1000,
          maxWidth: '92vw',
          flexWrap: 'wrap',
          justifyContent: 'center',
          gap: '8px',
          padding: '6px 14px'
        }}
      >
        <div className="hermes-nav-status">
          <Server size={14} color="#10b981" />
          <span className={`status-dot ${status.checking ? 'checking' : (status.online ? 'online' : 'offline')}`} />
          <span style={{ fontSize: '11px', fontWeight: '600' }}>
            {status.online ? `Hermes (${targetUrl})` : 'Offline'}
          </span>
        </div>

        <div className="hermes-nav-actions" style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
          {status.online ? (
            <>
              <button 
                className="hermes-btn" 
                onClick={handleRestart}
                disabled={Boolean(loadingAction)}
                title="Restart Hermes WebUI Daemon"
                style={{ padding: '4px 8px', fontSize: '11px' }}
              >
                <RotateCw size={11} className={loadingAction === 'restart' ? 'animate-spin' : ''} />
                <span>Restart</span>
              </button>
              <button 
                className="hermes-btn danger" 
                onClick={handleStop}
                disabled={Boolean(loadingAction)}
                title="Stop Hermes WebUI Daemon"
                style={{ padding: '4px 8px', fontSize: '11px' }}
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
              style={{ padding: '4px 10px', fontSize: '11px', backgroundColor: '#10b981', color: '#030712' }}
            >
              <Play size={11} />
              <span>Start Server</span>
            </button>
          )}

          <button 
            className="hermes-btn" 
            onClick={handleReloadFrame}
            title="Reload Iframe"
            style={{ padding: '4px 8px' }}
          >
            <RefreshCw size={11} />
          </button>

          <a 
            href={targetUrl} 
            target="_blank" 
            rel="noreferrer"
            className="hermes-btn"
            title="Open in Browser Window"
            style={{ padding: '4px 8px' }}
          >
            <ExternalLink size={11} />
          </a>

          <button 
            className="hermes-btn" 
            onClick={() => setIsSettingsOpen(true)}
            title="Host & Port Settings"
            style={{ padding: '4px 8px' }}
          >
            <Settings size={11} />
          </button>
        </div>
      </div>

      {/* Main Content: Iframe or Offline Diagnostic Surface */}
      {status.online ? (
        <iframe 
          key={iframeKey}
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
            background: '#030712',
            zIndex: 1
          }}
        />
      ) : (
        <div style={{
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '32px 20px',
          textAlign: 'center',
          color: '#e2e8f0',
          background: 'radial-gradient(circle at 50% 30%, #0f172a 0%, #030712 100%)',
          zIndex: 2
        }}>
          <div style={{
            width: '56px',
            height: '56px',
            borderRadius: '16px',
            background: 'linear-gradient(135deg, rgba(239, 68, 68, 0.2), rgba(249, 115, 22, 0.2))',
            border: '1px solid rgba(239, 68, 68, 0.4)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: '20px'
          }}>
            <AlertCircle size={28} color="#f87171" />
          </div>

          <h2 style={{ fontSize: '20px', fontWeight: '700', margin: '0 0 8px 0', color: '#f8fafc' }}>
            Hermes Server Offline
          </h2>
          
          <p style={{ fontSize: '13px', color: '#94a3b8', maxWidth: '380px', margin: '0 0 24px 0', lineHeight: '1.5' }}>
            Could not reach Hermes WebUI at <code style={{ color: '#38bdf8', background: 'rgba(56, 189, 248, 0.1)', padding: '2px 6px', borderRadius: '4px' }}>{targetUrl}</code>.
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', width: '100%', maxWidth: '300px' }}>
            <button
              onClick={handleStart}
              disabled={Boolean(loadingAction)}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '8px',
                padding: '12px 18px',
                background: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
                color: '#fff',
                border: 'none',
                borderRadius: '12px',
                fontSize: '14px',
                fontWeight: '700',
                cursor: 'pointer',
                boxShadow: '0 4px 14px rgba(16, 185, 129, 0.3)'
              }}
            >
              <Play size={16} />
              <span>Start Hermes Daemon</span>
            </button>

            <button
              onClick={checkHealth}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '8px',
                padding: '10px 16px',
                backgroundColor: 'rgba(255, 255, 255, 0.06)',
                color: '#e2e8f0',
                border: '1px solid rgba(255, 255, 255, 0.15)',
                borderRadius: '12px',
                fontSize: '13px',
                fontWeight: '600',
                cursor: 'pointer'
              }}
            >
              <RotateCw size={14} />
              <span>Retry Connection</span>
            </button>

            {isMobile && (
              <div style={{ display: 'flex', gap: '8px', marginTop: '4px' }}>
                <button
                  onClick={() => {
                    const newCfg = { ...config, host: '10.0.2.2' };
                    setConfig(newCfg);
                    saveConfig(newCfg);
                    setTimeout(checkHealth, 300);
                  }}
                  style={{
                    flex: 1,
                    padding: '8px 10px',
                    fontSize: '11px',
                    fontWeight: '600',
                    backgroundColor: config.host === '10.0.2.2' ? 'rgba(168, 85, 247, 0.2)' : 'rgba(255, 255, 255, 0.04)',
                    color: config.host === '10.0.2.2' ? '#c084fc' : '#94a3b8',
                    border: `1px solid ${config.host === '10.0.2.2' ? '#a855f7' : 'rgba(255, 255, 255, 0.1)'}`,
                    borderRadius: '8px',
                    cursor: 'pointer'
                  }}
                >
                  📱 10.0.2.2 (AVD)
                </button>
                <button
                  onClick={() => {
                    const newCfg = { ...config, host: '127.0.0.1' };
                    setConfig(newCfg);
                    saveConfig(newCfg);
                    setTimeout(checkHealth, 300);
                  }}
                  style={{
                    flex: 1,
                    padding: '8px 10px',
                    fontSize: '11px',
                    fontWeight: '600',
                    backgroundColor: config.host === '127.0.0.1' ? 'rgba(168, 85, 247, 0.2)' : 'rgba(255, 255, 255, 0.04)',
                    color: config.host === '127.0.0.1' ? '#c084fc' : '#94a3b8',
                    border: `1px solid ${config.host === '127.0.0.1' ? '#a855f7' : 'rgba(255, 255, 255, 0.1)'}`,
                    borderRadius: '8px',
                    cursor: 'pointer'
                  }}
                >
                  ⚡ 127.0.0.1 (ADB)
                </button>
              </div>
            )}

            <button
              onClick={() => setIsSettingsOpen(true)}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '6px',
                padding: '8px 12px',
                background: 'transparent',
                color: '#94a3b8',
                border: 'none',
                fontSize: '12px',
                cursor: 'pointer',
                marginTop: '4px'
              }}
            >
              <Settings size={13} />
              <span>Configure Host & Port</span>
            </button>
          </div>
        </div>
      )}

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
  const previewUrl = getTargetUrl(formData);

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
              Hermes Connection & Protocol Settings
            </span>
          </div>
          <button className="hermes-btn" onClick={onClose} style={{ padding: 3 }}>
            <X size={14} />
          </button>
        </div>

        <form onSubmit={handleSubmit}>
          {/* Target URL Live Preview Banner */}
          <div style={{
            backgroundColor: 'rgba(16, 185, 129, 0.1)',
            border: '1px solid rgba(16, 185, 129, 0.3)',
            borderRadius: '10px',
            padding: '10px 12px',
            marginBottom: '16px'
          }}>
            <div style={{ fontSize: '11px', color: '#94a3b8', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.5px', marginBottom: '2px' }}>
              Active Target URL Preview
            </div>
            <div style={{ fontSize: '13px', color: '#34d399', fontWeight: '700', fontFamily: 'monospace', wordBreak: 'break-all' }}>
              {previewUrl}
            </div>
          </div>

          {/* Quick Preset Buttons */}
          <div style={{ display: 'flex', gap: 6, marginBottom: 16 }}>
            <button 
              type="button" 
              className="hermes-btn" 
              style={{ flex: 1, padding: 6, fontSize: 11 }}
              onClick={() => setFormData(prev => ({ ...prev, customUrl: '', host: '127.0.0.1', port: '8787', protocol: 'http' }))}
            >
              <Monitor size={12} style={{ marginRight: 4 }} /> Localhost (8787)
            </button>
            <button 
              type="button" 
              className="hermes-btn" 
              style={{ flex: 1, padding: 6, fontSize: 11 }}
              onClick={() => setFormData(prev => ({ ...prev, customUrl: '', host: '10.0.2.2', port: '8787', protocol: 'http' }))}
            >
              <Smartphone size={12} style={{ marginRight: 4 }} /> 10.0.2.2 (AVD)
            </button>
          </div>

          {/* Protocol Toggle */}
          <div className="hermes-form-group">
            <label className="hermes-label">Protocol</label>
            <div style={{ display: 'flex', gap: 8 }}>
              <button
                type="button"
                className="hermes-btn"
                style={{
                  flex: 1,
                  padding: '8px 12px',
                  fontSize: '12px',
                  fontWeight: '700',
                  backgroundColor: formData.protocol === 'https' ? 'rgba(16, 185, 129, 0.2)' : 'rgba(255, 255, 255, 0.05)',
                  color: formData.protocol === 'https' ? '#34d399' : '#94a3b8',
                  border: `1px solid ${formData.protocol === 'https' ? '#10b981' : 'rgba(255, 255, 255, 0.1)'}`,
                  borderRadius: '8px',
                  cursor: 'pointer'
                }}
                onClick={() => setFormData(prev => ({ ...prev, protocol: 'https' }))}
              >
                🔒 HTTPS (Secure)
              </button>
              <button
                type="button"
                className="hermes-btn"
                style={{
                  flex: 1,
                  padding: '8px 12px',
                  fontSize: '12px',
                  fontWeight: '700',
                  backgroundColor: formData.protocol === 'http' ? 'rgba(56, 189, 248, 0.2)' : 'rgba(255, 255, 255, 0.05)',
                  color: formData.protocol === 'http' ? '#38bdf8' : '#94a3b8',
                  border: `1px solid ${formData.protocol === 'http' ? '#38bdf8' : 'rgba(255, 255, 255, 0.1)'}`,
                  borderRadius: '8px',
                  cursor: 'pointer'
                }}
                onClick={() => setFormData(prev => ({ ...prev, protocol: 'http' }))}
              >
                🌐 HTTP (Plain)
              </button>
            </div>
          </div>

          {/* Custom Full URL (Overrides Host & Port if set) */}
          <div className="hermes-form-group">
            <label className="hermes-label">Custom Full URL (Optional Override)</label>
            <input 
              type="text" 
              className="hermes-input"
              value={formData.customUrl || ''}
              onChange={e => setFormData(prev => ({ ...prev, customUrl: e.target.value }))}
              placeholder="e.g. https://hermes.example.com or https://vps.mydomain.com:8787"
            />
            <span style={{ fontSize: '11px', color: '#64748b', marginTop: '4px', display: 'block' }}>
              If set, this full URL overrides Host and Port below.
            </span>
          </div>

          <div style={{ display: 'flex', gap: 10 }}>
            <div className="hermes-form-group" style={{ flex: 2 }}>
              <label className="hermes-label">Host IP / Domain</label>
              <input 
                type="text" 
                className="hermes-input"
                value={formData.host || ''}
                onChange={e => setFormData(prev => ({ ...prev, host: e.target.value }))}
                placeholder="192.168.1.160 or mydomain.com"
                required={!formData.customUrl}
              />
            </div>

            <div className="hermes-form-group" style={{ flex: 1 }}>
              <label className="hermes-label">Port</label>
              <input 
                type="text" 
                className="hermes-input"
                value={formData.port || ''}
                onChange={e => setFormData(prev => ({ ...prev, port: e.target.value }))}
                placeholder="8787"
                required={!formData.customUrl}
              />
            </div>
          </div>

          <div className="hermes-form-group">
            <label className="hermes-label">Password (Optional / Auto-Auth)</label>
            <input 
              type="password" 
              className="hermes-input"
              value={formData.password || ''}
              onChange={e => setFormData(prev => ({ ...prev, password: e.target.value }))}
              placeholder="Leave empty if none"
            />
          </div>

          <div style={{ display: 'flex', justifyContent: 'flex-end', gap: 8, marginTop: 18 }}>
            <button type="button" className="hermes-btn" onClick={onClose}>
              Cancel
            </button>
            <button type="submit" className="hermes-btn primary">
              <Save size={12} style={{ marginRight: 4 }} /> Save & Connect
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
