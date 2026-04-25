'use client';

import { useEffect } from 'react';

export default function TermsUKPage() {
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

                <h2 id="terms">Terms and Conditions (UK)</h2>

                <p><strong>1.1.</strong> Please read these Terms & Conditions carefully, because they form the legal agreement between You and iBnk in relation to access and use of iBnk{"'"}s products and services.</p>

                <p><strong>1.2.</strong> The Terms & Conditions relating to any additional features, products and/or services, may require the acceptance of additional Terms & Conditions of use upon ordering or using such additional features, products, and/or services which will be communicated to You prior to Your use of those additional services.</p>

                <p><strong>1.3.</strong> These Terms & Conditions are strictly binding and exclusively applicable to customers who reside within the United Kingdom.</p>

                <p><strong>1.4.</strong> If You wish to jump to a particular section of the Terms & Conditions, please select the appropriate link below.</p>

                <h2 id="definitions">2. Definitions</h2>

                <p><strong>Business Account</strong> means an electronic money account opened with iBnk, intended for commercial use, with or without an International Banking Account Number.</p>

                <p><strong>Content</strong> means any and all copyrighted material trademarks, registered trademarks including but not limited to; text, images, audio, video, scripts, code, software, databases, HTML logos and any other form of information capable of being stored on a computer that appears on, or forms part of, the Website owned by La Orange Limited.</p>

                <p><strong>Customer Support team</strong> means iBnk{"'"}s customer service and management department. If You hold a Personal Account, You may contact the Customer Support team via the live chat feature at <a href="https://www.jeton.com">www.jeton.com</a> or by submitting a request through the contact form available at <a href="https://jetonhelp.zendesk.com/hc/en-gb">jetonhelp.zendesk.com</a>.</p>

                <p><strong>FCA</strong> means the Financial Conduct Authority; further information on the FCA can be obtained on the FCA{"'"}s website at <a href="https://www.fca.org.uk">www.fca.org.uk</a>.</p>

                <p><strong>Fees</strong> means any and all fees and charges levied by La Orange Limited for the use of its products and services through iBnk.</p>

                <p><strong>Financial House</strong> means Financial House Limited, authorised and regulated by the Financial Conduct Authority as an Electronic Money Institution under Firm Reference Number 902039, located at 6 Bevis Marks Building, 1st Floor, Bury Court, London EC3A 7HL, United Kingdom.</p>

                <p><strong>Financial Ombudsman</strong> means the official body in the United Kingdom that settles escalated customer complaint claims. Further information can be found at <a href="https://www.financial-ombudsman.org.uk">www.financial-ombudsman.org.uk</a>.</p>

                <p><strong>iBnk Account or Account</strong> means a Personal Account or Business Account that You have opened with iBnk, for purposes including but not limited to, sending, receiving and withdrawing funds, and making online purchases.</p>

                <p><strong>Know Your Customer (KYC)</strong> means the process by which iBnk verifies Your identity for providing its services.</p>

                <p><strong>Limits</strong> means any limits to which Your iBnk Account may be subject from time to time as set out in the dashboard of your iBnk Account.</p>

                <p><strong>Personal Account</strong> means an electronic money account opened with iBnk as agent of Financial House intended for non-commercial use.</p>

                <p><strong>Privacy Policy</strong> means iBnk{"'"}s privacy policy governing the processing and storing of Your personal data. Please read iBnk{"'"}s privacy policy accessible on the Website for details.</p>

                <p><strong>Sanctions</strong> means any financial or trade sanctions enforced by the United Nations Security Council, the European Union, the UK Government, the US Government, (including, without limitation, the Office of Foreign Assets Control of the US Department of the Treasury or the US Department of State), or any other relevant sanctions authority.</p>

                <p><strong>Vulnerable Customers</strong> means those unable to make informed decisions due to language barriers, hearing difficulties, mental health issues, age, financial struggles, product misunderstanding, or addictions.</p>

                <p><strong>APP Fraud</strong> means fraudster-directed money transfers as defined by UK Payment Systems Regulator.</p>

                <p><strong>PSR</strong> means the UK Payment Systems Regulator.</p>

                <p><strong>Website</strong> means the iBnk website (<a href="https://www.jeton.com">www.jeton.com</a>) and any subdomains, or social accounts associated officially with iBnk. iBnk has mobile applications available on mobile platforms that allow You to use some of the iBnk services via mobile app and the term Website shall be read as including the mobile app.</p>

                <h2 id="general">3. General</h2>

                <p><strong>3.1.</strong> iBnk is a trademark owned by La Orange Limited and is registered with the FCA as an agent of Financial House with firm reference number 902088. iBnk reserves the right to change these Terms & Conditions (including the Fees and Limits) unilaterally from time to time. In such cases, new Terms & Conditions will be notified to you 2 months prior to implementation. You will be notified about any such changes by text, by e-mail or by a notification when You access Your iBnk Account. You have the right to terminate your iBnk Account if the changes to the Terms & Conditions are unacceptable to you by notice to iBnk in accordance with section 12. Such changes to the Terms & Conditions will be effective 2 months after iBnk has sent notice to You unless You give notice to the Customer Support team to terminate Your Account prior to such changes coming into effect. Your continued use of Your Account will constitute acceptance of the amended Terms & Conditions.</p>

                <p><strong>3.2.</strong> By accepting these Terms & Conditions You agree that iBnk is entitled to suspend, restrict or terminate access to Your Account or services in accordance with applicable laws and regulations.</p>

              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
