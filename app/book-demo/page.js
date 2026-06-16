'use client';

import Link from 'next/link';
import { useState } from 'react';
import { useI18n } from '@/lib/i18n';

const SUBMIT_URL = 'https://formsubmit.co/ajax/yi@ibnk.xyz';

export default function BookDemoPage() {
  const { t } = useI18n();
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    company: '',
    website: '',
    role: '',
    country: '',
    useCase: '',
    hear: '',
  });
  const [status, setStatus] = useState('idle'); // idle | sending | sent | error

  const set = (key) => (e) => setForm((f) => ({ ...f, [key]: e.target.value }));

  const HEAR_OPTIONS = [
    { value: 'ai', label: t('demo.hear.ai') },
    { value: 'social', label: t('demo.hear.social') },
    { value: 'word', label: t('demo.hear.word') },
    { value: 'other', label: t('demo.hear.other') },
  ];

  async function onSubmit(e) {
    e.preventDefault();
    if (status === 'sending') return;
    setStatus('sending');
    try {
      const hearLabel = HEAR_OPTIONS.find((o) => o.value === form.hear)?.label || form.hear;
      const res = await fetch(SUBMIT_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          _subject: `iBnk Demo Request — ${form.firstName} ${form.lastName} (${form.company})`,
          'First name': form.firstName,
          'Last name': form.lastName,
          'Work email': form.email,
          Company: form.company,
          Website: form.website,
          Role: form.role,
          'Country / Region': form.country,
          'Use case': form.useCase,
          'How did you hear about us': hearLabel,
        }),
      });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      setStatus('sent');
    } catch {
      setStatus('error');
    }
  }

  const inputStyle = {
    width: '100%',
    padding: '11px 14px',
    border: '1px solid rgba(0,0,0,0.12)',
    borderRadius: 10,
    fontSize: 14,
    outline: 'none',
    background: '#f8faf8',
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

  const selectStyle = {
    ...inputStyle,
    appearance: 'none',
    backgroundImage:
      'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'12\' height=\'12\' viewBox=\'0 0 24 24\' fill=\'none\' stroke=\'%23000\' stroke-opacity=\'0.5\' stroke-width=\'2\'%3E%3Cpath d=\'M6 9l6 6 6-6\'/%3E%3C/svg%3E")',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'right 14px center',
    paddingRight: 36,
  };

  const optionalTag = <span style={{ opacity: 0.5 }}>{t('demo.optional')}</span>;
  const req = <span style={{ color: '#ff751f', marginLeft: 2 }}>*</span>;

  return (
    <main
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 'clamp(96px, 12vw, 160px) clamp(20px, 5vw, 40px) clamp(64px, 8vw, 120px)',
        background: '#f8faf8',
      }}
    >
      <div
        style={{
          width: '100%',
          maxWidth: 560,
          background: '#f8faf8',
          borderRadius: 22,
          padding: 'clamp(28px, 4vw, 44px)',
          boxShadow: '0 20px 60px rgba(0,0,0,0.06)',
          color: '#1a1a1a',
        }}
      >
        <img
          src="/images/ibnk-logo-white.svg"
          alt="iBnk"
          style={{ height: 32, width: 'auto', display: 'block', filter: 'invert(1)', marginBottom: 24 }}
        />

        {status === 'sent' ? (
          <div style={{ textAlign: 'center', padding: '12px 0' }}>
            <div
              style={{
                width: 56,
                height: 56,
                borderRadius: '50%',
                background: 'rgba(255,117,31,0.1)',
                color: '#ff751f',
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: 16,
              }}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M5 12l5 5L20 7" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <h1 style={{ fontSize: 22, fontWeight: 600, margin: 0 }}>{t('demo.success.title')}</h1>
            <p style={{ fontSize: 14, opacity: 0.6, marginTop: 10, lineHeight: 1.6 }}>{t('demo.success.desc')}</p>
            <Link
              href="/"
              style={{
                display: 'inline-block',
                marginTop: 22,
                padding: '11px 24px',
                borderRadius: 999,
                background: '#ff751f',
                color: '#fff',
                textDecoration: 'none',
                fontSize: 14,
                fontWeight: 500,
              }}
            >
              {t('demo.back')}
            </Link>
          </div>
        ) : (
          <>
            <h1 style={{ fontSize: 'clamp(24px, 3vw, 30px)', fontWeight: 600, lineHeight: 1.2, margin: 0 }}>
              {t('demo.title')}
            </h1>
            <p style={{ fontSize: 14, lineHeight: 1.6, opacity: 0.6, marginTop: 10, marginBottom: 0 }}>
              {t('demo.desc')}
            </p>

            <form onSubmit={onSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 14, marginTop: 24 }}>
              <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
                <div style={{ flex: '1 1 180px' }}>
                  <label htmlFor="bd-first" style={labelStyle}>{t('demo.firstName')}{req}</label>
                  <input id="bd-first" type="text" required value={form.firstName} onChange={set('firstName')} style={inputStyle} disabled={status === 'sending'} />
                </div>
                <div style={{ flex: '1 1 180px' }}>
                  <label htmlFor="bd-last" style={labelStyle}>{t('demo.lastName')}{req}</label>
                  <input id="bd-last" type="text" required value={form.lastName} onChange={set('lastName')} style={inputStyle} disabled={status === 'sending'} />
                </div>
              </div>

              <div>
                <label htmlFor="bd-email" style={labelStyle}>{t('demo.email')}{req}</label>
                <input id="bd-email" type="email" required value={form.email} onChange={set('email')} style={inputStyle} placeholder="you@company.com" disabled={status === 'sending'} />
              </div>

              <div>
                <label htmlFor="bd-company" style={labelStyle}>{t('demo.company')}{req}</label>
                <input id="bd-company" type="text" required value={form.company} onChange={set('company')} style={inputStyle} disabled={status === 'sending'} />
              </div>

              <div>
                <label htmlFor="bd-website" style={labelStyle}>{t('demo.website')} {optionalTag}</label>
                <input id="bd-website" type="url" value={form.website} onChange={set('website')} style={inputStyle} placeholder="https://" disabled={status === 'sending'} />
              </div>

              <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
                <div style={{ flex: '1 1 180px' }}>
                  <label htmlFor="bd-role" style={labelStyle}>{t('demo.role')}{req}</label>
                  <input id="bd-role" type="text" required value={form.role} onChange={set('role')} style={inputStyle} disabled={status === 'sending'} />
                </div>
                <div style={{ flex: '1 1 180px' }}>
                  <label htmlFor="bd-country" style={labelStyle}>{t('demo.country')}{req}</label>
                  <input id="bd-country" type="text" required value={form.country} onChange={set('country')} style={inputStyle} disabled={status === 'sending'} />
                </div>
              </div>

              <div>
                <label htmlFor="bd-usecase" style={labelStyle}>{t('demo.useCase')}{req}</label>
                <textarea id="bd-usecase" required value={form.useCase} onChange={set('useCase')} rows={3} style={{ ...inputStyle, resize: 'vertical', minHeight: 80 }} placeholder={t('demo.useCase.placeholder')} disabled={status === 'sending'} />
              </div>

              <div>
                <label htmlFor="bd-hear" style={labelStyle}>{t('demo.hear')}{req}</label>
                <select id="bd-hear" required value={form.hear} onChange={set('hear')} style={selectStyle} disabled={status === 'sending'}>
                  <option value="" disabled>{t('demo.hear.select')}</option>
                  {HEAR_OPTIONS.map((o) => (
                    <option key={o.value} value={o.value}>{o.label}</option>
                  ))}
                </select>
              </div>

              {status === 'error' && (
                <div style={{ fontSize: 13, color: '#c92510', background: 'rgba(255,117,31,0.06)', padding: '10px 12px', borderRadius: 8 }}>
                  {t('demo.error')}
                </div>
              )}

              <button
                type="submit"
                disabled={status === 'sending'}
                style={{
                  marginTop: 6,
                  padding: '13px 18px',
                  borderRadius: 999,
                  background: '#ff751f',
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
                {status === 'sending' ? t('demo.submitting') : t('demo.submit')}
              </button>
            </form>
          </>
        )}
      </div>
    </main>
  );
}
