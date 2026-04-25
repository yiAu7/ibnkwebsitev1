'use client';

import { useState, useEffect } from 'react';

export default function PrivacyPolicyJetonCardPage() {
  const [activeRegion, setActiveRegion] = useState('europe');

  useEffect(() => {
    const links = document.querySelectorAll('._content-sidebar a');
    if (!links.length) return;
    const sections = [];
    links.forEach((link) => {
      const id = link.getAttribute('href').replace('#', '');
      const el = document.getElementById(id);
      if (el) sections.push({ id, el, link });
    });

    function onScroll() {
      const scrollY = window.scrollY + 160;
      let current = sections[0];
      for (let i = 0; i < sections.length; i++) {
        if (sections[i].el.offsetTop <= scrollY) current = sections[i];
      }
      links.forEach((l) => { l.setAttribute('data-active', 'false'); });
      if (current) current.link.setAttribute('data-active', 'true');
    }

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, [activeRegion]);

  function switchRegion(region) {
    setActiveRegion(region);
  }

  return (
    <>
      {/* ===== HERO SECTION ===== */}
      <header className="_policy-hero">
        <div className="g-row hero-content color-white">
          <div className="hero-heading">
            <h1 className="title-2 -medium">Privacy policy</h1>
          </div>
          <div className="hero-description">
            <p className="subhead-2 -medium">Please review our privacy policy, to fully understand how we handle your interactions with this website.</p>
          </div>
        </div>
      </header>

      {/* ===== POLICY CONTENT ===== */}
      <section className="_policy-section">
        <div className="section-bg"></div>
        <div className="section-inner py-136-64">

          {/* Title + Region Filter */}
          <div className="g-row">
            <div className="g-col xxl-10 xxl-offset-3 sm-12 sm-offset-2 xs-14 xs-offset-1">
              <h2 className="title-3 -medium" style={{ color: '#1a1a1a' }}>iBnk Card</h2>

              <div className="_region-filter" style={{ marginTop: 'var(--48-8)', marginBottom: 'var(--96-48)' }}>
                <div>
                  <div className="subhead-1 -medium" style={{ color: '#1a1a1a' }}>Region</div>
                  <div style={{ fontSize: '16px', fontWeight: 450, letterSpacing: '0.03em', lineHeight: 1.5, color: '#360802', marginTop: 'var(--16-8)' }}>The region you choose will effect the content of Privacy Policy.</div>
                </div>
                <div className="_region-switcher">
                  <button data-active={activeRegion === 'europe' ? 'true' : 'false'} onClick={() => switchRegion('europe')}>Europe</button>
                  <button data-active={activeRegion === 'uk' ? 'true' : 'false'} onClick={() => switchRegion('uk')}>United Kingdom</button>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar + Content */}
          <div className="g-row" style={{ marginBottom: 'var(--120-64)' }}>

            {/* Left Sidebar Nav */}
            <div className="g-col xxl-3 md-0 sm-0 xs-0">
              <nav className="_content-sidebar">
                <a href="#jeton-privacy-policy" data-active="true">iBnk Privacy Policy</a>
                <a href="#info-collect">1. Information we collect fr...</a>
                <a href="#registration-info">1.1. Registration Information</a>
              </nav>
            </div>

            {/* Right Content */}
            <div className="g-col xxl-10 md-offset-3 sm-12 sm-offset-2 xs-14 xs-offset-1">

              {/* Europe Content */}
              <div id="region-europe" className="_policy-content" style={{ display: activeRegion === 'europe' ? '' : 'none' }}>
                <h2 id="jeton-privacy-policy">iBnk Privacy Policy</h2>

                <p>iBnk takes the privacy of its site visitors, users and customers very seriously and as such ensures that their personal information and confidential information are securely stored. This notice applies to the legal entities that provides iBnk services under iBnk name. This Privacy Policy aims to assist you in understanding what data we collect, why it is collected, and what iBnk does with your data. The information collected is utilised to understand our customer{"'"}s behaviour and eligibility for iBnk{"'"}s products and services, allowing us to provide a better service to our customers.</p>

                <p>From the moment you access iBnk Wallet, you agree to our Privacy Policy. It is your responsibility to read, understand, and agree to the terms set out in this document and consent to the use of your data as described. For any questions or concerns regarding our Privacy Policy, contact us via our live chat on <a href="https://www.jeton.com">www.jeton.com</a> and refrain from using our website in the meantime. Please be advised that your data shall be retained in strict conformity with the provisions set forth by the Laws of Georgia.</p>

                <h3 id="info-collect">1. Information we collect from you</h3>

                <p>We collect your personal information and Confidential Information to provide you with better and more useful services. When you register for your iBnk Wallet Account, you provide us with personal information, including but not limited to, your name, email, date of birth, credit/debit card and bank account information.</p>

                <h3 id="registration-info">1.1. Registration Information</h3>

                <p>We collect information when you create your iBnk Wallet account. Depending on how you want to use your account we may ask you to provide some or all of the following: Credit or Debit card number, bank account number, relevant expiration dates, phone number, date of birth, ID document number, photos of ID, Photo of the individual registering, video recording of the individual of registering, phone number, industry type, purpose of your Account, transaction information. Same documents may be asked from the individual representative of the registering legal entity. We may also request additional information as part of our verification and ongoing monitoring process.</p>
              </div>

              {/* UK Content */}
              <div id="region-uk" className="_policy-content" style={{ display: activeRegion === 'uk' ? '' : 'none' }}>
                <h2>iBnk Privacy Policy</h2>
                <p>United Kingdom version of the iBnk Card privacy policy.</p>
              </div>

            </div>
          </div>

        </div>
      </section>

      <style jsx>{`
        ._region-filter {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 16px;
          padding: var(--32-24) 0;
          border-bottom: 1px solid #360802;
        }
        @media only screen and (max-width: 743px) {
          ._region-filter { flex-direction: column; align-items: flex-start; gap: 24px; }
        }
        ._region-switcher {
          display: flex;
          align-items: center;
          gap: 4px;
          border: 1px solid rgba(247, 59, 32, 0.15);
          border-radius: 5em;
          padding: 4px;
          background-color: rgba(247, 59, 32, 0.05);
        }
        ._region-switcher button {
          font-size: 14px;
          font-weight: 500;
          letter-spacing: 0.03em;
          line-height: 1;
          color: #f73b20;
          padding: 8px 16px;
          border-radius: 5em;
          transition: background-color 0.2s, color 0.2s;
          cursor: pointer;
        }
        ._region-switcher button[data-active="true"] {
          background-color: #f73b20;
          color: #fff;
        }
        @media (hover: hover) and (pointer: fine) {
          ._region-switcher button:not([data-active="true"]):hover {
            background-color: rgba(247, 59, 32, 0.08);
          }
        }
        ._content-sidebar {
          position: sticky;
          top: 120px;
          align-self: flex-start;
        }
        ._content-sidebar a {
          display: block;
          font-size: 14px;
          font-weight: 450;
          letter-spacing: 0.03em;
          line-height: 1.4;
          color: #f73b20;
          opacity: 0.5;
          padding: 6px 12px;
          border-left: 2px solid transparent;
          transition: opacity 0.2s;
          text-decoration: none;
          max-width: 14.3em;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
        ._content-sidebar a[data-active="true"] {
          opacity: 1;
          border-left-color: #f73b20;
        }
        @media (hover: hover) and (pointer: fine) {
          ._content-sidebar a:hover { opacity: 0.8; }
        }
        @media only screen and (max-width: 1023px) {
          ._content-sidebar { display: none; }
        }
      `}</style>
    </>
  );
}
