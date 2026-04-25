'use client';

import { useEffect } from 'react';

export default function TermsJetonCardPage() {
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
                <a href="#jeton-card-terms" data-active="true">iBnk Card Account Terms</a>
                <a href="#what-is">1. What is a iBnk Card?</a>
                <a href="#who-can-apply">2. Who can apply?</a>
                <a href="#get-started">3. How do I get started?</a>
                <a href="#change-pin">4. Changing your PIN</a>
                <a href="#add-funds">5. Adding funds</a>
                <a href="#transactions">6. Transactions</a>
              </nav>
            </div>

            {/* Content */}
            <div className="g-col xxl-10 md-10 sm-16 xs-16">
              <div className="_policy-content">

                <h2 id="jeton-card-terms">iBnk Card Account Terms & Conditions</h2>

                <p>The iBnk Card account and the Mastercard or Visa debit card are e-money services provided by FINANCIAL HOUSE LIMITED (FH). Financial House Limited is authorised and regulated by the Financial Conduct Authority as an Electronic Money Institution under Firm Reference Number 902039.</p>

                <h3>Definitions</h3>

                <p><strong>Account Portal</strong> means the online portal where you can manage your iBnk Card account.</p>

                <p><strong>App</strong> means the iBnk mobile application.</p>

                <p><strong>Business Day</strong> means a day other than Saturday, Sunday, or public holiday in England.</p>

                <p><strong>Customer Services</strong> means the iBnk customer support team.</p>

                <p><strong>iBnk Card</strong> means the Mastercard or Visa debit card issued in connection with your iBnk Card account.</p>

                <p><strong>Financial House Limited (FH)</strong> means Financial House Limited, authorised and regulated by the Financial Conduct Authority as an Electronic Money Institution under Firm Reference Number 902039.</p>

                <p><strong>You</strong> means the person who has applied for and been issued a iBnk Card account.</p>

                <p><strong>We/Us/Our</strong> means Financial House Limited.</p>

                <h3 id="what-is">1. What is a iBnk Card account and card?</h3>

                <p>A iBnk Card account is an electronic money account. The iBnk Card is a Mastercard or Visa debit card linked to your iBnk Card account that allows you to make payments and withdraw cash. Your iBnk Card account is not a bank account. Your funds are held as electronic money and are not covered by the Financial Services Compensation Scheme (FSCS). However, your funds are safeguarded in accordance with the Electronic Money Regulations 2011.</p>

                <h3 id="who-can-apply">2. Who can apply for a iBnk Card account and card?</h3>

                <p>To apply for a iBnk Card account and card, you must be at least 18 years of age and reside in the European Economic Area (EEA). You must provide valid identification and pass our verification checks. We reserve the right to refuse any application at our discretion.</p>

                <h3 id="get-started">3. How do I get started?</h3>

                <p>To get started, you need to create a iBnk account and complete the identity verification process. Once verified, you can apply for a iBnk Card through your account dashboard or the iBnk App. Your card will be delivered to your registered address. You will need to activate your card before use.</p>

                <h3 id="change-pin">4. What if I want to change my Personal Identification Number (PIN)?</h3>

                <p>You can change your PIN at any time through the iBnk App or Account Portal. You can also change your PIN at any ATM that supports PIN change functionality. For security reasons, we recommend changing your PIN regularly and never sharing it with anyone.</p>

                <h3 id="add-funds">5. How do I add funds to the iBnk Card account?</h3>

                <p>You can add funds to your iBnk Card account through various methods including bank transfer, card payment, or transfer from your iBnk Wallet. Funds are typically available within minutes, though some methods may take up to 3 business days. Fees may apply depending on the funding method used.</p>

                <h3 id="transactions">6. What transactions can I make?</h3>

                <p>With your iBnk Card, you can make purchases at any merchant that accepts Mastercard or Visa (depending on your card type), withdraw cash from ATMs worldwide, make online payments, and perform SEPA transactions. You can also transfer funds to another iBnk Card account holder. All transactions are subject to available balance and applicable limits.</p>

              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
