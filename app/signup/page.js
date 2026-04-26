'use client';

import { useState } from 'react';
import { useI18n } from '@/lib/i18n';
import WhitelistModal from '@/components/WhitelistModal';

export default function SignupPage() {
  const { t } = useI18n();
  const [code, setCode] = useState('');
  const [status, setStatus] = useState('idle'); // idle | checking | invalid
  const [whitelistOpen, setWhitelistOpen] = useState(false);

  function onSubmit(e) {
    e.preventDefault();
    if (!code.trim()) return;
    setStatus('checking');
    // No backend yet — every code is treated as invalid for now
    setTimeout(() => setStatus('invalid'), 700);
  }

  return (
    <main
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 'clamp(96px, 12vw, 160px) clamp(20px, 5vw, 40px) clamp(64px, 8vw, 120px)',
        background: '#fafafa',
      }}
    >
      <div
        style={{
          width: '100%',
          maxWidth: 460,
          background: '#fff',
          borderRadius: 22,
          padding: 'clamp(28px, 4vw, 44px)',
          boxShadow: '0 20px 60px rgba(0,0,0,0.06)',
          color: '#1a1a1a',
        }}
      >
        <img
          src="/images/ibnk-logo-white.svg"
          alt="iBnk"
          style={{
            height: 32,
            width: 'auto',
            display: 'block',
            filter: 'invert(1)',
            marginBottom: 24,
          }}
        />

        <h1 style={{ fontSize: 'clamp(24px, 3vw, 30px)', fontWeight: 600, lineHeight: 1.2, margin: 0 }}>
          {t('signup.title')}
        </h1>
        <p style={{ fontSize: 14, lineHeight: 1.6, opacity: 0.6, marginTop: 10, marginBottom: 0 }}>
          {t('signup.desc')}
        </p>

        <form onSubmit={onSubmit} style={{ marginTop: 28 }}>
          <label htmlFor="invite-code" style={{
            display: 'block',
            fontSize: 12,
            fontWeight: 500,
            opacity: 0.6,
            letterSpacing: '0.04em',
            textTransform: 'uppercase',
            marginBottom: 8,
          }}>
            {t('signup.label')}
          </label>
          <input
            id="invite-code"
            type="text"
            value={code}
            onChange={(e) => { setCode(e.target.value); if (status === 'invalid') setStatus('idle'); }}
            placeholder={t('signup.placeholder')}
            disabled={status === 'checking'}
            autoComplete="off"
            style={{
              width: '100%',
              padding: '14px 16px',
              border: status === 'invalid' ? '1px solid #f73b20' : '1px solid rgba(0,0,0,0.12)',
              borderRadius: 12,
              fontSize: 15,
              outline: 'none',
              fontFamily: 'inherit',
              letterSpacing: '0.06em',
              textTransform: 'uppercase',
            }}
          />

          {status === 'invalid' && (
            <p style={{ fontSize: 13, color: '#c92510', marginTop: 8, lineHeight: 1.5 }}>
              We couldn&apos;t recognize that code. Double-check with whoever invited you, or join the waitlist below.
            </p>
          )}

          <button
            type="submit"
            disabled={!code.trim() || status === 'checking'}
            style={{
              marginTop: 18,
              width: '100%',
              padding: '14px 18px',
              borderRadius: 999,
              background: '#f73b20',
              color: '#fff',
              border: 'none',
              fontSize: 15,
              fontWeight: 500,
              cursor: code.trim() && status !== 'checking' ? 'pointer' : 'not-allowed',
              opacity: code.trim() && status !== 'checking' ? 1 : 0.5,
              fontFamily: 'inherit',
              transition: 'opacity 0.2s, background 0.2s',
            }}
          >
            {status === 'checking' ? '…' : t('signup.verify')}
          </button>
        </form>

        <div style={{
          marginTop: 24,
          paddingTop: 20,
          borderTop: '1px solid rgba(0,0,0,0.08)',
          textAlign: 'center',
        }}>
          <button
            type="button"
            onClick={() => setWhitelistOpen(true)}
            style={{
              background: 'none',
              border: 'none',
              padding: 0,
              fontSize: 14,
              color: '#f73b20',
              fontWeight: 500,
              cursor: 'pointer',
              fontFamily: 'inherit',
              textDecoration: 'underline',
              textUnderlineOffset: 3,
            }}
          >
            {t('signup.waitlist')}
          </button>
        </div>
      </div>

      <WhitelistModal open={whitelistOpen} onClose={() => setWhitelistOpen(false)} />
    </main>
  );
}
