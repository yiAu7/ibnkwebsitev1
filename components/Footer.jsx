'use client';

import Image from 'next/image';
import TextPressure from './TextPressure';

export default function Footer() {
  return (
    <footer
      className="_footer g-row-full color-orange -book"
      style={{ paddingTop: 'var(--80-32)', paddingBottom: 'var(--32-16)' }}
    >
      {/* Animated iBnk wordmark — reacts to mouse */}
      <div
        className="g-row-full"
        style={{ height: 'clamp(120px, 20vw, 280px)', marginBottom: 'var(--48-24)' }}
      >
        <TextPressure
          text="iBnk"
          flex
          width
          weight
          italic={false}
          alpha={false}
          stroke={false}
          scale
          textColor="#f73b20"
          minFontSize={80}
          textTransform="none"
        />
      </div>

      <div className="g-row-full flex flex-wrap items-center justify-between" style={{ gap: 24 }}>
        {/* Logo */}
        <Image
          src="/images/ibnk-logo-white.svg"
          alt="iBnk"
          width={300}
          height={120}
          style={{ height: '36px', width: 'auto', display: 'block' }}
        />

        {/* Links */}
        <div className="flex flex-wrap items-center" style={{ gap: 28, fontSize: 14 }}>
          <a href="/terms-of-use" className="footer-link">Terms of Use</a>
          <a href="/privacy-policy" className="footer-link">Privacy Policy</a>
          <a href="/prohibited-activities" className="footer-link">Prohibited Activities</a>
          <a href="https://www.ibnk.xyz/branding-kit" target="_blank" rel="noopener noreferrer" className="footer-link">Branding Kit</a>
          <a href="https://www.linkedin.com/company/ibnk-vault-llc/" target="_blank" rel="noopener noreferrer" className="footer-link">LinkedIn</a>
          <a href="https://x.com/ibnkvault" target="_blank" rel="noopener noreferrer" className="footer-link">X</a>
        </div>
      </div>

      <div
        className="g-row-full opacity-10 background-orange"
        style={{ height: 1, marginTop: 'var(--32-24)', marginBottom: 'var(--24-16)' }}
      ></div>

      <div
        className="g-row-full flex flex-wrap justify-between items-center caption opacity-60"
        style={{ gap: 12, fontSize: 12 }}
      >
        <span>&copy; 2026 iBnk</span>
        <span>FINTRAC&nbsp;·&nbsp;N3000001312&nbsp;&nbsp;|&nbsp;&nbsp;AUSTRAC&nbsp;·&nbsp;VASP100905510-001&nbsp;·&nbsp;IND100905510-001 (Remittance)</span>
      </div>
    </footer>
  );
}
