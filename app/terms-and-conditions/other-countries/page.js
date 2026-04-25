'use client';

import { useEffect } from 'react';

export default function TermsOtherCountriesPage() {
  useEffect(() => {
    const links = document.querySelectorAll('._policy-sidebar a');
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
  }, []);

  return (
    <>
      {/* ===== HERO SECTION ===== */}
      <header className="_policy-hero">
        <div className="g-row hero-content color-white">
          <div className="hero-heading">
            <h1 className="title-2 -medium">Terms and Conditions</h1>
          </div>
          <div className="hero-description">
            <p className="subhead-2 -medium">Please review our terms and conditions, to fully understand how we handle your interactions with this website.</p>
          </div>
        </div>
      </header>

      {/* ===== POLICY CONTENT ===== */}
      <section className="_policy-section">
        <div className="section-bg"></div>
        <div className="section-inner py-136-64">
          <div className="g-row">

            {/* Back link + Sidebar */}
            <div className="g-col xxl-3 md-3 sm-16 xs-16">
              <a href="/terms-and-conditions" className="_policy-back">
                <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" clipRule="evenodd" d="M10.0607 3L3.06066 10L10.0607 17L9 18.0607L2.53033 11.591C1.65165 10.7123 1.65165 9.28769 2.53033 8.40901L9 1.93934L10.0607 3Z" fill="currentColor" transform="translate(0,-4)"/>
                </svg>
                Back to Region Selection
              </a>
              <nav className="_policy-sidebar">
                <a href="#terms" data-active="true">1. Terms & Conditions</a>
                <a href="#definitions">2. Definitions</a>
                <a href="#general">3. General</a>
              </nav>
            </div>

            {/* Content */}
            <div className="g-col xxl-10 md-10 sm-16 xs-16">
              <div className="_policy-content">

                <h2 id="terms">Terms and Conditions (Other Countries)</h2>

                <p><strong>1.1.</strong> Please read these Terms & Conditions carefully, because they form the legal agreement between You and iBnk in relation to access and use of iBnk{"'"}s products and services.</p>

                <p><strong>1.2.</strong> The Terms & Conditions relating to any additional features, products and/or services, may require the acceptance of additional Terms & Conditions of use upon ordering or using such additional features, products, and/or services which will be communicated to You prior to Your use of those additional services.</p>

                <p><strong>1.3.</strong> These Terms & Conditions are applicable to customers worldwide except those residing in EU member states, EEA states, the United Kingdom, and Switzerland, though Malta is included.</p>

                <p><strong>1.4.</strong> If You wish to jump to a particular section of the Terms & Conditions, please select the appropriate link below.</p>

                <h2 id="definitions">2. Definitions</h2>

                <p><strong>Business Account</strong> means an electronic money account opened with iBnk, intended for commercial/business use, with or without an International Banking Account Number (IBAN).</p>

                <p><strong>Content</strong> means any and all copyrighted material trademarks, registered trademarks including but not limited to; text, images, audio, video, scripts, code, software, databases, HTML logos and any other form of information capable of being stored on a computer that appears on, or forms part of, the Website.</p>

                <p><strong>Customer Support team</strong> means iBnk{"'"}s customer service and management department. If You hold a Personal Account, You may contact the Customer Support team via the live chat feature at <a href="https://www.jeton.com">www.jeton.com</a> or by submitting a request through the contact form available at <a href="https://jetonhelp.zendesk.com/hc/en-gb">jetonhelp.zendesk.com</a>. If You hold a Business Account, please contact the Business Support team directly via connect@jetonbank.com.</p>

                <p><strong>Cryptocurrencies</strong> means any digital currencies available through your iBnk Account.</p>

                <p><strong>Escrow Agent</strong> means iBnk as a licensed escrow agent in the Commonwealth of Dominica.</p>

                <p><strong>Escrow Account</strong> means a segregated account for holding funds per agreements.</p>

                <p><strong>Escrow Agreement</strong> means a written agreement outlining escrow terms between parties.</p>

                <p><strong>Fees</strong> means any and all fees and charges levied by iBnk for the use of its products and services.</p>

                <p><strong>iBnk</strong> means the iBnk brand operated by iBnk Bank Limited, La Orange BG Limited, and La Orange Limited.</p>

                <p><strong>iBnk Account or Account</strong> means a Personal Account or Business Account that You have opened with iBnk, for purposes including but not limited to, sending, receiving and withdrawing funds, and making online purchases.</p>

                <p><strong>Know Your Customer (KYC)</strong> means the process by which iBnk verifies Your identity for providing its services.</p>

                <p><strong>Limits</strong> means any limits to which Your iBnk Account may be subject from time to time as set out in the dashboard of your iBnk Account.</p>

                <p><strong>Parties</strong> means participants in an escrow arrangement.</p>

                <p><strong>Personal Account</strong> means an electronic money account opened with iBnk intended for non-commercial use.</p>

                <p><strong>Privacy Policy</strong> means iBnk{"'"}s privacy policy governing the processing and storing of Your personal data.</p>

                <p><strong>Sanctions</strong> means any financial or trade sanctions enforced by the United Nations Security Council, the European Union, the UK Government, the US Government, or any other relevant sanctions authority.</p>

                <p><strong>Service Provider</strong> means a licensed crypto trading/custody provider.</p>

                <p><strong>Territory</strong> means worldwide, subject to acceptance and availability.</p>

                <p><strong>Website</strong> means the iBnk website (<a href="https://www.jeton.com">www.jeton.com</a>) and any subdomains, or social accounts associated officially with iBnk, including mobile applications.</p>

                <h2 id="general">3. General</h2>

                <p><strong>3.1.</strong> iBnk reserves the right to change these Terms & Conditions (including the Fees and Limits) unilaterally from time to time. In such cases, new Terms & Conditions will be notified to you 2 months prior to implementation. You will be notified about any such changes by text, by e-mail or by a notification when You access Your iBnk Account. You have the right to terminate your iBnk Account if the changes to the Terms & Conditions are unacceptable to you.</p>

                <p><strong>3.2.</strong> New consent may be required for updated Terms & Conditions. Non-agreement means ceasing service use immediately; continued use without consent may result in account termination.</p>

                <p><strong>3.4.</strong> Not all services are available globally. iBnk reserves discretion to limit services by geography. Registration from unlisted countries is prohibited.</p>

              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
