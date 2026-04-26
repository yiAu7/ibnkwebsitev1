'use client';

import { useEffect, useState } from 'react';

const SUBMIT_URL = 'https://formsubmit.co/ajax/ivy@ibnk.xyz';

const INTERESTS = [
  'Personal account',
  'Business account',
  'Building AI agents',
  'Other',
];

export default function WhitelistModal({ open, onClose }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [company, setCompany] = useState('');
  const [interest, setInterest] = useState(INTERESTS[0]);
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState('idle'); // idle | sending | sent | error

  useEffect(() => {
    if (!open) return;
    const onKey = (e) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = prev;
    };
  }, [open, onClose]);

  // Reset form when modal closes after success
  useEffect(() => {
    if (!open && status === 'sent') {
      const t = setTimeout(() => {
        setName(''); setEmail(''); setCompany(''); setInterest(INTERESTS[0]); setMessage('');
        setStatus('idle');
      }, 400);
      return () => clearTimeout(t);
    }
  }, [open, status]);

  async function onSubmit(e) {
    e.preventDefault();
    if (status === 'sending') return;
    setStatus('sending');
    try {
      const res = await fetch(SUBMIT_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          _subject: `iBnk Whitelist — ${name || email}`,
          name,
          email,
          company,
          interest,
          message,
        }),
      });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      setStatus('sent');
    } catch {
      setStatus('error');
    }
  }

  if (!open) return null;

  const inputStyle = {
    width: '100%',
    padding: '11px 14px',
    border: '1px solid rgba(0,0,0,0.12)',
    borderRadius: 10,
    fontSize: 14,
    outline: 'none',
    background: '#fff',
    color: '#1a1a1a',
    fontFamily: 'inherit',
  };

  const labelStyle = {
    display: 'block',
    fontSize: 12,
    fontWeight: 500,
    color: '#1a1a1a',
    opacity: 0.65,
    marginBottom: 6,
    letterSpacing: '0.02em',
  };

  return (
    <div
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label="Join the iBnk whitelist"
      style={{
        position: 'fixed',
        inset: 0,
        background: 'rgba(0,0,0,0.55)',
        zIndex: 10000,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 16,
        backdropFilter: 'blur(6px)',
        WebkitBackdropFilter: 'blur(6px)',
      }}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          background: '#fff',
          borderRadius: 22,
          width: '100%',
          maxWidth: 480,
          maxHeight: '90vh',
          overflow: 'auto',
          position: 'relative',
          boxShadow: '0 30px 80px rgba(0,0,0,0.3)',
          color: '#1a1a1a',
        }}
      >
        <button
          onClick={onClose}
          aria-label="Close"
          style={{
            position: 'absolute',
            top: 14,
            right: 14,
            background: 'rgba(0,0,0,0.04)',
            border: 'none',
            width: 34,
            height: 34,
            borderRadius: '50%',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#1a1a1a',
            zIndex: 2,
          }}
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
            <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </button>

        <div style={{ padding: '36px 32px 28px' }}>
          <img
            src="/images/ibnk-logo-white.svg"
            alt="iBnk"
            style={{
              height: 32,
              width: 'auto',
              display: 'block',
              filter: 'invert(1)',
              marginBottom: 18,
            }}
          />
          <h2 style={{ fontSize: 22, fontWeight: 600, lineHeight: 1.25, margin: 0 }}>
            Join the iBnk whitelist
          </h2>
          <p style={{ fontSize: 14, lineHeight: 1.55, opacity: 0.6, marginTop: 8, marginBottom: 0 }}>
            We&apos;re onboarding early users in batches. Drop your details and we&apos;ll be in touch.
          </p>
        </div>

        {status === 'sent' ? (
          <div style={{ padding: '0 32px 36px', textAlign: 'center' }}>
            <div style={{
              width: 56, height: 56, borderRadius: '50%',
              background: 'rgba(247,59,32,0.1)', color: '#f73b20',
              display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
              marginBottom: 14,
            }}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M5 12l5 5L20 7" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <h3 style={{ fontSize: 18, fontWeight: 600, margin: 0 }}>You&apos;re on the list.</h3>
            <p style={{ fontSize: 14, opacity: 0.6, marginTop: 8, lineHeight: 1.55 }}>
              Thanks — Ivy will reach out as soon as you&apos;re cleared in.
            </p>
            <button
              onClick={onClose}
              style={{
                marginTop: 20, padding: '10px 24px', borderRadius: 999,
                background: '#f73b20', color: '#fff', border: 'none',
                fontSize: 14, fontWeight: 500, cursor: 'pointer', fontFamily: 'inherit',
              }}
            >
              Close
            </button>
          </div>
        ) : (
          <form onSubmit={onSubmit} style={{ padding: '0 32px 32px', display: 'flex', flexDirection: 'column', gap: 14 }}>
            <div>
              <label htmlFor="wl-name" style={labelStyle}>Full name</label>
              <input
                id="wl-name"
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                style={inputStyle}
                placeholder="Jane Doe"
                disabled={status === 'sending'}
              />
            </div>

            <div>
              <label htmlFor="wl-email" style={labelStyle}>Email</label>
              <input
                id="wl-email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                style={inputStyle}
                placeholder="you@company.com"
                disabled={status === 'sending'}
              />
            </div>

            <div>
              <label htmlFor="wl-company" style={labelStyle}>Company <span style={{ opacity: 0.5 }}>(optional)</span></label>
              <input
                id="wl-company"
                type="text"
                value={company}
                onChange={(e) => setCompany(e.target.value)}
                style={inputStyle}
                placeholder="Acme Corp"
                disabled={status === 'sending'}
              />
            </div>

            <div>
              <label htmlFor="wl-interest" style={labelStyle}>I&apos;m interested in</label>
              <select
                id="wl-interest"
                value={interest}
                onChange={(e) => setInterest(e.target.value)}
                style={{ ...inputStyle, appearance: 'none', backgroundImage: 'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'12\' height=\'12\' viewBox=\'0 0 24 24\' fill=\'none\' stroke=\'%23000\' stroke-opacity=\'0.5\' stroke-width=\'2\'%3E%3Cpath d=\'M6 9l6 6 6-6\'/%3E%3C/svg%3E")', backgroundRepeat: 'no-repeat', backgroundPosition: 'right 14px center', paddingRight: 36 }}
                disabled={status === 'sending'}
              >
                {INTERESTS.map((opt) => (
                  <option key={opt} value={opt}>{opt}</option>
                ))}
              </select>
            </div>

            <div>
              <label htmlFor="wl-message" style={labelStyle}>Anything else? <span style={{ opacity: 0.5 }}>(optional)</span></label>
              <textarea
                id="wl-message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                rows={3}
                style={{ ...inputStyle, resize: 'vertical', minHeight: 70 }}
                placeholder="Tell us a bit about your use case…"
                disabled={status === 'sending'}
              />
            </div>

            {status === 'error' && (
              <div style={{ fontSize: 13, color: '#c92510', background: 'rgba(247,59,32,0.06)', padding: '10px 12px', borderRadius: 8 }}>
                Something went wrong. Please try again, or email <a href="mailto:ivy@ibnk.xyz" style={{ color: '#c92510', textDecoration: 'underline' }}>ivy@ibnk.xyz</a> directly.
              </div>
            )}

            <button
              type="submit"
              disabled={status === 'sending'}
              style={{
                marginTop: 6,
                padding: '13px 18px',
                borderRadius: 999,
                background: '#f73b20',
                color: '#fff',
                border: 'none',
                fontSize: 15,
                fontWeight: 500,
                cursor: status === 'sending' ? 'wait' : 'pointer',
                opacity: status === 'sending' ? 0.7 : 1,
                fontFamily: 'inherit',
                transition: 'opacity 0.2s',
              }}
            >
              {status === 'sending' ? 'Submitting…' : 'Join Whitelist'}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
