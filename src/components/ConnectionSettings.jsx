import React, { useState } from 'react';
import { X, Check, Save, Shield, Globe } from 'lucide-react';
import { saveConfig } from '../utils/serverBridge.js';

export function ConnectionSettings({ config, onClose, onSave }) {
  const [formData, setFormData] = useState({ ...config });

  const handleSubmit = (e) => {
    e.preventDefault();
    saveConfig(formData);
    onSave(formData);
    onClose();
  };

  const handleQuickLocal = () => {
    setFormData(prev => ({ ...prev, host: '127.0.0.1', port: '8787' }));
  };

  const handleQuickLAN = () => {
    setFormData(prev => ({ ...prev, host: '192.168.1.160', port: '8787' }));
  };

  return (
    <div className="hermes-modal-overlay" onClick={onClose}>
      <div className="hermes-modal-content" onClick={e => e.stopPropagation()}>
        <div className="hermes-modal-header">
          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <Globe size={18} color="#10b981" />
            <span style={{ fontSize: 15, fontWeight: 600, color: '#f8fafc' }}>
              Connection & Auth Settings
            </span>
          </div>
          <button className="hermes-btn" onClick={onClose} style={{ padding: 4 }}>
            <X size={16} />
          </button>
        </div>

        <form onSubmit={handleSubmit}>
          <div style={{ display: 'flex', gap: 8, marginBottom: 16 }}>
            <button 
              type="button" 
              className="hermes-btn" 
              onClick={handleQuickLocal}
              style={{ flex: 1, justifyContent: 'center' }}
            >
              Set Localhost (127.0.0.1)
            </button>
            <button 
              type="button" 
              className="hermes-btn" 
              onClick={handleQuickLAN}
              style={{ flex: 1, justifyContent: 'center' }}
            >
              Set Phone Wi-Fi (192.168.1.160)
            </button>
          </div>

          <div className="hermes-form-group">
            <label className="hermes-form-label">Server Host IP / Domain</label>
            <input 
              type="text" 
              className="hermes-input"
              value={formData.host}
              onChange={e => setFormData({ ...formData, host: e.target.value })}
              placeholder="127.0.0.1 or 192.168.1.160"
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
              placeholder="8787"
              required
            />
          </div>

          <div className="hermes-form-group">
            <label className="hermes-form-label">
              <span style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
                <Shield size={12} color="#10b981" /> Password Auth
              </span>
            </label>
            <input 
              type="password" 
              className="hermes-input"
              value={formData.password}
              onChange={e => setFormData({ ...formData, password: e.target.value })}
              placeholder="Enter your Hermes WebUI password"
            />
          </div>

          <div style={{ display: 'flex', justifyContent: 'flex-end', gap: 8, marginTop: 24 }}>
            <button type="button" className="hermes-btn" onClick={onClose}>
              Cancel
            </button>
            <button type="submit" className="hermes-btn primary">
              <Save size={13} />
              <span>Save & Connect</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
