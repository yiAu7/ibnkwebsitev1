'use client';

import { useEffect } from 'react';

export default function TermsEuropePage() {
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

                <h2 id="terms">Terms and Conditions (Europe)</h2>
                <p style={{ opacity: 0.5, marginBottom: 'var(--32-24)' }}>Last Update: 26th of January, 2026</p>

                <p>La Orange CY Limited operates under the tradename and domain {"'"}IBNK{"'"} (<a href="https://www.jeton.com">www.jeton.com</a>). La Orange CY Limited is incorporated in the Republic of Cyprus under the provisions of the Companies Law (Cap113) with registration number HE424897. La Orange CY Limited is authorised by the Central Bank of Cyprus under Electronic Money Law for distributing or redeeming electronic money (e-money), with License No: 115.1.3.66.</p>

                <p><strong>1.1.</strong> Please read these Terms & Conditions carefully, because they form the legal agreement between You and iBnk in relation to access and use of iBnk{"'"}s products and services.</p>

                <p><strong>1.2.</strong> The Terms & Conditions relating to any additional features, products and/or services, may require the acceptance of additional Terms & Conditions of use upon ordering or using such additional features, products, and/or services which will be communicated to You prior to Your use of those additional services.</p>

                <p><strong>1.3.</strong> These Terms & Conditions are strictly binding and exclusively applicable to customers who reside in EU member states, EEA states, with the exception of Malta.</p>

                <p><strong>1.4.</strong> We may also update this Terms and Conditions from time to time by publishing a new version on our website. You should check this page occasionally to ensure You are happy with any changes. If the changes are substantial, we may notify You of changes by email.</p>

                <p><strong>1.5.</strong> If You wish to jump to a particular section of the Terms & Conditions, please select the appropriate link below.</p>

                <p><strong>1.6.</strong> You acknowledge that you are of legal age over the age of 18 years old. You further acknowledge to have read, understood and accepted these Terms and Conditions, Complaints Procedure, Information Security Policy, Fees & Limits, Privacy Policy, AML Policy and any other Policy/ Legal Information and or relevant information that is contained within the iBnk{"'"}s website.</p>

                <p><strong>1.7.</strong> You acknowledge that La Orange CY Limited official language is the English language and the acceptance of this Terms and Conditions constitutes a binding legal agreement between You and La Orange CY Limited.</p>

                <h2 id="definitions">2. Definitions</h2>

                <p><strong>2.1. Business Account</strong> means an electronic money account opened with iBnk, intended for commercial use, with or without an International Banking Account Number.</p>

                <p><strong>2.2. Content</strong> means any and all copyrighted material trademarks, registered trademarks including but not limited to; text, images, audio, video, scripts, code, software, databases, HTML logos and any other form of information capable of being stored on a computer that appears on, or forms part of, the Website owned by La Orange CY Limited.</p>

                <p><strong>2.3. Customer Support team</strong> means iBnk{"'"}s customer service and management department. If You hold a Personal Account, You may contact the Customer Support team via the live chat feature at <a href="https://www.jeton.com">www.jeton.com</a> or by submitting a request through the contact form available at <a href="https://jetonhelp.zendesk.com/hc/en-gb">jetonhelp.zendesk.com</a>. If You hold a Business Account, which is now managed under iBnk Bank, please contact the Business Support team directly via team@jeton.com.</p>

                <p><strong>2.4. CBC</strong> means the Central Bank of Cyprus; further information on the CBC can be obtained on the CBC{"'"}s website at <a href="https://www.centralbank.cy/">centralbank.cy</a>.</p>

                <p><strong>2.5. Fees</strong> means any and all fees and charges levied by La Orange Limited for the use of its products and services through iBnk.</p>

                <p><strong>2.6. Financial Ombudsman</strong> means the official body in the Republic of Cyprus that settles escalated customer complaint claims. Further information can be found at <a href="https://www.financialombudsman.gov.cy">financialombudsman.gov.cy</a>.</p>

                <p><strong>2.7. iBnk</strong> means the iBnk brand and anything belonging to or associated with iBnk.com, owned and operated by La Orange CY Limited and/or La Orange Limited.</p>

                <p><strong>2.8. iBnk Account or Account</strong> means a Personal Account or Business Account that You have opened with iBnk, for purposes including but not limited to, sending, receiving and withdrawing funds, and making online purchases.</p>

                <p><strong>2.9. Know Your Customer (KYC)</strong> means the process by which iBnk verifies Your identity for providing its services.</p>

                <p><strong>2.10. La Orange Limited</strong> means La Orange Limited a limited liability company registered in England and Wales, Company Number 11535714, with its registered office address at The Shard Floor 24/25, 32 London Bridge Street, London, SE1 9SG, United Kingdom. LA Orange Limited is authorised by the Financial Conduct Authority under the Electronic Money Regulations 2011 for distributing or redeeming electronic money (e-money) and providing certain payment services on behalf of an e-money institution, with FCA registration number 902088. La Orange Limited is the shareholder of La Orange CY Limited.</p>

                <p><strong>2.11. Limits</strong> means any limits to which Your iBnk Account may be subject from time to time as set out in the dashboard of your iBnk Account and also available at <a href="https://www.jeton.com/fees-limits">jeton.com/fees-limits</a>.</p>

                <p><strong>2.12. Personal Account</strong> means an electronic money account opened with iBnk as agent of Financial House intended for non-commercial use.</p>

                <p><strong>2.13. Privacy Policy</strong> means iBnk{"'"}s privacy policy governing the processing and storing of Your personal data. Please read iBnk{"'"}s privacy policy accessible on the Website for details.</p>

                <p><strong>2.14. Sanctions</strong> means any financial or trade sanctions enforced by the United Nations Security Council, the European Union, the CY government, the UK Government, the US Government, (including, without limitation, the Office of Foreign Assets Control of the US Department of the Treasury or the US Department of State), or any other relevant sanctions authority.</p>

                <p><strong>2.15. Terms & Conditions</strong> means these Terms & Conditions and any document referred to herein and published on the Website (as amended from time to time).</p>

                <p><strong>2.16. We/Us/Our</strong> refers to iBnk.</p>

                <p><strong>2.17. Website</strong> means the iBnk website (<a href="https://www.jeton.com">www.jeton.com</a>) and any subdomains, or social accounts associated officially with iBnk. iBnk has mobile applications available on mobile platforms that allow You to use some of the iBnk services via mobile app and the term Website shall be read as including the mobile app. You must ensure that the mobile application You are using is published by iBnk. iBnk is not liable for the usage of other mobile apps not associated with iBnk.</p>

                <p><strong>2.18. You/Your</strong> means you, the natural or legal person in whose name the iBnk Account is opened and maintained. References to any law, statute, legislation, regulation or directive shall include any subsequent amendments.</p>

                <h2 id="general">3. General</h2>

                <p><strong>3.1.</strong> iBnk is an electronic money institution authorised and regulated by the CBC to issue and redeem e-money. iBnk is a trademark owned by La Orange Limited and is registered with the FCA as an agent of Financial House with firm reference number 902088. iBnk reserves the right to change these Terms & Conditions (including the Fees and Limits) unilaterally from time to time. In such cases, new Terms & Conditions will be notified to you 2 months prior to implementation. You will be notified about any such changes by text, by e-mail or by a notification when You access Your iBnk Account. You have the right to terminate your iBnk Account if the changes to the Terms & Conditions are unacceptable to you by notice to iBnk in accordance with section 12. Such changes to the Terms & Conditions will be effective 2 months after iBnk has sent notice to You unless You give notice to the Customer Support team to terminate Your Account prior to such changes coming into effect. Your continued use of Your Account will constitute acceptance of the amended Terms & Conditions.</p>

                <p><strong>3.2.</strong> By accepting these Terms & Conditions You agree that iBnk is entitled to suspend, restrict or terminate access to Your Account or services in accordance with applicable laws and regulations.</p>

              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
