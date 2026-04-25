'use client';

import { useState } from 'react';
import { useI18n } from '@/lib/i18n';

export default function SignupPage() {
  const { t } = useI18n();
  const [code, setCode] = useState('');
  const [status, setStatus] = useState(null);

  function onSubmit(e) {
    e.preventDefault();
    if (!code.trim()) return;
    setStatus('checking');
    setTimeout(() => setStatus('invalid'), 600);
  }

  return (
    <main
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '120px 24px 64px',
        background: '#f73b20',
        color: '#fff',
      }}
    >
      <div
        style={{
          width: '100%',
          maxWidth: 480,
          background: 'rgba(255,255,255,0.06)',
          border: '1px solid rgba(255,255,255,0.16)',
          borderRadius: 24,
          padding: '48px 40px',
          backdropFilter: 'blur(8px)',
          WebkitBackdropFilter: 'blur(8px)',
        }}
      >
        <h1 className="title-4 -medium" style={{ marginBottom: 12 }}>{t('signup.title')}</h1>
        <p className="body -book" style={{ opacity: 0.8, marginBottom: 32 }}>{t('signup.desc')}</p>

        <form onSubmit={onSubmit} noValidate>
          <label
            htmlFor="invite-code"
            className="caption -medium uppercase"
            style={{ display: 'block', letterSpacing: '0.1em', opacity: 0.7, marginBottom: 8 }}
          >
            {t('signup.label')}
          </label>
          <input
            id="invite-code"
            type="text"
            value={code}
            onChange={(e) => { setCode(e.target.value); setStatus(null); }}
            placeholder={t('signup.placeholder')}
            autoComplete="off"
            spellCheck={false}
            required
            style={{
              width: '100%',
              padding: '16px 18px',
              borderRadius: 12,
              border: '1px solid rgba(255,255,255,0.25)',
              background: 'rgba(0,0,0,0.15)',
              color: '#fff',
              fontSize: 16,
              outline: 'none',
              marginBottom: status === 'invalid' ? 12 : 24,
            }}
          />

          {status === 'invalid' && (
            <p className="caption" style={{ color: '#ffd9d2', marginBottom: 16 }}>
              Invalid invite code. Please try again.
            </p>
          )}

          <button
            type="submit"
            disabled={status === 'checking' || !code.trim()}
            style={{
              width: '100%',
              padding: '16px 20px',
              borderRadius: 999,
              border: 'none',
              background: '#fff',
              color: '#1a1a1a',
              fontSize: 16,
              fontWeight: 600,
              cursor: status === 'checking' || !code.trim() ? 'not-allowed' : 'pointer',
              opacity: !code.trim() ? 0.6 : 1,
              transition: 'opacity 0.2s ease',
            }}
          >
            {status === 'checking' ? '…' : t('signup.verify')}
          </button>
        </form>

        <div style={{ marginTop: 24, textAlign: 'center' }}>
          <a
            href="mailto:support@ibnk.xyz?subject=Waitlist"
            className="body-small"
            style={{ color: '#fff', textDecoration: 'underline', opacity: 0.85 }}
          >
            {t('signup.waitlist')}
          </a>
        </div>
      </div>
    </main>
  );
}
