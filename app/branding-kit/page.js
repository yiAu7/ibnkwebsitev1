'use client';

import { useState } from 'react';

const COLORS = [
  { name: 'iBnk Orange', hex: '#ff751f', note: 'Primary brand color', dark: true },
  { name: 'Ink', hex: '#1a1a1a', note: 'Primary text', dark: true },
  { name: 'Off-White', hex: '#f8faf8', note: 'Surface / background', dark: false, border: true },
];

export default function BrandingKitPage() {
  const [copied, setCopied] = useState(null);

  async function copy(hex) {
    try {
      await navigator.clipboard.writeText(hex);
      setCopied(hex);
      setTimeout(() => setCopied((c) => (c === hex ? null : c)), 1400);
    } catch {
      /* clipboard unavailable — ignore */
    }
  }

  const sectionTitle = {
    fontSize: 'clamp(20px, 2.4vw, 26px)',
    fontWeight: 600,
    margin: '0 0 4px',
  };
  const sectionDesc = { fontSize: 14.5, opacity: 0.6, margin: '0 0 24px', lineHeight: 1.6 };

  return (
    <main
      style={{
        maxWidth: 960,
        margin: '0 auto',
        padding: 'clamp(96px, 12vw, 160px) clamp(20px, 5vw, 40px) clamp(64px, 8vw, 120px)',
        color: '#1a1a1a',
      }}
    >
      {/* Header */}
      <h1 style={{ fontSize: 'clamp(36px, 5vw, 56px)', fontWeight: 500, lineHeight: 1.1, margin: 0 }}>
        Brand Kit
      </h1>
      <p style={{ fontSize: 16, lineHeight: 1.7, opacity: 0.7, marginTop: 16, maxWidth: 620 }}>
        Everything you need to represent iBnk correctly — logo, colors, and typography. Please keep our
        marks intact and follow the simple guidelines below. For anything not covered here, reach out to{' '}
        <a href="mailto:contact@ibnk.xyz" style={{ color: '#ff751f', textDecoration: 'underline' }}>
          contact@ibnk.xyz
        </a>
        .
      </p>

      {/* Logo */}
      <section style={{ marginTop: 'clamp(48px, 7vw, 80px)' }}>
        <h2 style={sectionTitle}>Logo</h2>
        <p style={sectionDesc}>
          Our primary wordmark. Use the light version on dark backgrounds and the dark version on light
          backgrounds. Always preserve clear space around the mark equal to the height of the “i”.
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 20 }}>
          {/* Dark tile — light logo */}
          <LogoTile bg="#1a1a1a" label="Logo — Light" src="/images/ibnk-logo-white.png" />
          {/* Light tile — dark logo */}
          <LogoTile bg="#f8faf8" label="Logo — Dark" src="/images/ibnk-logo-black.png" border />
        </div>

        <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginTop: 20 }}>
          <a href="/images/ibnk-logo-black.png" download="ibnk-logo-dark.png" style={downloadBtn}>
            <DownloadIcon /> Download Dark Logo
          </a>
          <a href="/images/ibnk-logo-white.png" download="ibnk-logo-light.png" style={downloadBtnOutline}>
            <DownloadIcon /> Download Light Logo
          </a>
        </div>
      </section>

      {/* Colors */}
      <section style={{ marginTop: 'clamp(48px, 7vw, 80px)' }}>
        <h2 style={sectionTitle}>Colors</h2>
        <p style={sectionDesc}>Click any swatch to copy its hex value.</p>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', gap: 16 }}>
          {COLORS.map((c) => (
            <button
              key={c.hex}
              type="button"
              onClick={() => copy(c.hex)}
              style={{
                textAlign: 'left',
                border: '1px solid rgba(0,0,0,0.08)',
                borderRadius: 14,
                overflow: 'hidden',
                background: '#fff',
                cursor: 'pointer',
                padding: 0,
                fontFamily: 'inherit',
                color: '#1a1a1a',
              }}
            >
              <div
                style={{
                  height: 96,
                  background: c.hex,
                  borderBottom: c.border ? '1px solid rgba(0,0,0,0.08)' : 'none',
                  display: 'flex',
                  alignItems: 'flex-end',
                  justifyContent: 'flex-end',
                  padding: 10,
                }}
              >
                <span
                  style={{
                    fontSize: 11,
                    fontWeight: 600,
                    padding: '3px 8px',
                    borderRadius: 999,
                    background: c.dark ? 'rgba(255,255,255,0.18)' : 'rgba(0,0,0,0.08)',
                    color: c.dark ? '#fff' : '#1a1a1a',
                  }}
                >
                  {copied === c.hex ? 'Copied!' : 'Copy'}
                </span>
              </div>
              <div style={{ padding: '12px 14px 14px' }}>
                <div style={{ fontSize: 14, fontWeight: 600 }}>{c.name}</div>
                <div style={{ fontSize: 13, opacity: 0.55, marginTop: 2 }}>{c.note}</div>
                <div style={{ fontSize: 13, fontFamily: 'ui-monospace, SFMono-Regular, Menlo, monospace', marginTop: 8, textTransform: 'uppercase' }}>
                  {c.hex}
                </div>
              </div>
            </button>
          ))}
        </div>
      </section>

      {/* Gradients */}
      <section style={{ marginTop: 'clamp(48px, 7vw, 80px)' }}>
        <h2 style={sectionTitle}>Gradients</h2>
        <p style={sectionDesc}>
          Our signature coral-to-orange aura. Use it as a backdrop for hero sections, covers, and social
          assets — on a near-black or off-white canvas. Keep the glow soft and uncropped; never overlay dense
          text directly on the brightest area.
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 20 }}>
          <GradientTile
            src="/images/brand-gradient-dark.jpg"
            label="Aura — Dark"
            note="On near-black #060606"
          />
          <GradientTile
            src="/images/brand-gradient-light.jpg"
            label="Aura — Light"
            note="On off-white #f8faf8"
            border
          />
        </div>

        <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginTop: 20 }}>
          <a href="/images/brand-gradient-dark.jpg" download="ibnk-aura-dark.jpg" style={downloadBtn}>
            <DownloadIcon /> Download Dark Aura
          </a>
          <a href="/images/brand-gradient-light.jpg" download="ibnk-aura-light.jpg" style={downloadBtnOutline}>
            <DownloadIcon /> Download Light Aura
          </a>
        </div>
      </section>

      {/* Typography */}
      <section style={{ marginTop: 'clamp(48px, 7vw, 80px)' }}>
        <h2 style={sectionTitle}>Typography</h2>
        <p style={sectionDesc}>
          iBnk uses <strong>Sequel Sans</strong> across all brand surfaces, in Book, Medium, and Semibold
          weights.
        </p>
        <div
          style={{
            border: '1px solid rgba(0,0,0,0.08)',
            borderRadius: 14,
            padding: 'clamp(24px, 4vw, 40px)',
            background: '#fff',
          }}
        >
          <div style={{ fontSize: 'clamp(40px, 7vw, 72px)', fontWeight: 600, lineHeight: 1.05 }}>Aa</div>
          <div style={{ fontSize: 18, letterSpacing: '0.01em', marginTop: 16, opacity: 0.85 }}>
            ABCDEFGHIJKLMNOPQRSTUVWXYZ
          </div>
          <div style={{ fontSize: 18, letterSpacing: '0.01em', marginTop: 6, opacity: 0.85 }}>
            abcdefghijklmnopqrstuvwxyz 0123456789
          </div>
          <div style={{ display: 'flex', gap: 28, flexWrap: 'wrap', marginTop: 24, fontSize: 15 }}>
            <span style={{ fontWeight: 400 }}>Book</span>
            <span style={{ fontWeight: 500 }}>Medium</span>
            <span style={{ fontWeight: 600 }}>Semibold</span>
          </div>
        </div>
      </section>

      {/* Guidelines */}
      <section style={{ marginTop: 'clamp(48px, 7vw, 80px)' }}>
        <h2 style={sectionTitle}>Usage guidelines</h2>
        <p style={sectionDesc}>A few simple rules to keep the brand consistent.</p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 16 }}>
          <GuideCard tone="do" items={[
            'Use the logo with adequate clear space',
            'Use approved brand colors',
            'Keep the wordmark legible on simple backgrounds',
          ]} />
          <GuideCard tone="dont" items={[
            'Don’t stretch, rotate, or recolor the logo',
            'Don’t add effects, shadows, or outlines',
            'Don’t place the logo on busy or low-contrast backgrounds',
          ]} />
        </div>
      </section>

      {/* Press contact */}
      <section style={{ marginTop: 'clamp(48px, 7vw, 80px)' }}>
        <div
          style={{
            border: '1px solid rgba(255,117,31,0.25)',
            background: 'rgba(255,117,31,0.05)',
            borderRadius: 16,
            padding: 'clamp(24px, 4vw, 36px)',
          }}
        >
          <h2 style={{ ...sectionTitle, marginBottom: 8 }}>Press &amp; partnerships</h2>
          <p style={{ fontSize: 15, lineHeight: 1.7, opacity: 0.8, margin: 0 }}>
            Need additional assets, logos in other formats, or have a media request? Email{' '}
            <a href="mailto:contact@ibnk.xyz" style={{ color: '#ff751f', textDecoration: 'underline', fontWeight: 600 }}>
              contact@ibnk.xyz
            </a>{' '}
            and we’ll get back to you.
          </p>
        </div>
      </section>
    </main>
  );
}

function LogoTile({ bg, label, src, border }) {
  return (
    <div>
      <div
        style={{
          background: bg,
          border: border ? '1px solid rgba(0,0,0,0.08)' : 'none',
          borderRadius: 14,
          height: 160,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: 24,
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={src}
          alt="iBnk logo"
          style={{ height: 40, width: 'auto' }}
        />
      </div>
      <div style={{ fontSize: 13, opacity: 0.6, marginTop: 10 }}>{label}</div>
    </div>
  );
}

function DownloadIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      style={{ flexShrink: 0 }}
    >
      <path d="M12 3v12M7 10l5 5 5-5M5 21h14" />
    </svg>
  );
}

function GradientTile({ src, label, note, border }) {
  return (
    <div>
      <div
        style={{
          position: 'relative',
          borderRadius: 14,
          overflow: 'hidden',
          aspectRatio: '4 / 3',
          border: border ? '1px solid rgba(0,0,0,0.08)' : 'none',
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={src}
          alt={`iBnk gradient — ${label}`}
          style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
        />
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', gap: 12, marginTop: 10 }}>
        <span style={{ fontSize: 13.5, fontWeight: 600 }}>{label}</span>
        <span style={{ fontSize: 12.5, opacity: 0.55 }}>{note}</span>
      </div>
    </div>
  );
}

function GuideCard({ tone, items }) {
  const isDo = tone === 'do';
  const accent = isDo ? '#1f9d55' : '#d64545';
  return (
    <div
      style={{
        border: '1px solid rgba(0,0,0,0.08)',
        borderRadius: 14,
        padding: '20px 22px',
        background: '#fff',
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 14 }}>
        <span
          style={{
            width: 22,
            height: 22,
            borderRadius: '50%',
            background: accent,
            color: '#fff',
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: 13,
            fontWeight: 700,
          }}
        >
          {isDo ? '✓' : '✕'}
        </span>
        <span style={{ fontSize: 15, fontWeight: 600 }}>{isDo ? 'Do' : "Don't"}</span>
      </div>
      <ul style={{ margin: 0, paddingLeft: 18, fontSize: 14.5, lineHeight: 1.7, opacity: 0.82 }}>
        {items.map((it) => (
          <li key={it} style={{ marginBottom: 6 }}>{it}</li>
        ))}
      </ul>
    </div>
  );
}

const downloadBtn = {
  display: 'inline-flex',
  alignItems: 'center',
  gap: 8,
  padding: '11px 20px',
  borderRadius: 999,
  background: '#ff751f',
  color: '#fff',
  textDecoration: 'none',
  fontSize: 14,
  fontWeight: 500,
};

const downloadBtnOutline = {
  ...downloadBtn,
  background: 'transparent',
  color: '#1a1a1a',
  border: '1px solid rgba(0,0,0,0.18)',
};
