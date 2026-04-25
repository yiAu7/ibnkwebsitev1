'use client';

import { useEffect } from 'react';

export default function PrivacyPolicyPage() {
  useEffect(() => {
    const links = document.querySelectorAll('._policy-sidebar a');
    const sections = [];
    links.forEach((link) => {
      const id = link.getAttribute('href').replace('#', '');
      const el = document.getElementById(id);
      if (el) sections.push({ id, el, link });
    });

    function onScroll() {
      const scrollY = window.scrollY + 200;
      let current = sections[0];
      for (let i = 0; i < sections.length; i++) {
        if (sections[i].el.offsetTop <= scrollY) {
          current = sections[i];
        }
      }
      links.forEach((l) => { l.removeAttribute('data-active'); });
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
            <h1 className="title-2 -medium">Privacy Policy</h1>
          </div>
          <div className="hero-description">
            <p className="subhead-2 -medium">Last updated: April 2026</p>
          </div>
        </div>
      </header>

      {/* ===== POLICY CONTENT ===== */}
      <section className="_policy-section">
        <div className="section-bg"></div>
        <div className="section-inner py-136-64">
          <div className="g-row">

            {/* Sidebar Navigation */}
            <div className="g-col xxl-3 md-3 sm-16 xs-16">
              <nav className="_policy-sidebar">
                <a href="#introduction" data-active="true">Introduction</a>
                <a href="#who-we-are">1. Who We Are</a>
                <a href="#data-collect">2. Data We Collect</a>
                <a href="#how-collected">3. How Data Is Collected</a>
                <a href="#how-we-use">4. How We Use Your Data</a>
                <a href="#sharing">5. Sharing Your Data</a>
                <a href="#international">6. International Transfers</a>
                <a href="#security">7. Data Security</a>
                <a href="#retention">8. Data Retention</a>
                <a href="#your-rights">9. Your Rights</a>
                <a href="#cookies">10. Cookies</a>
                <a href="#contact">11. Contact Us</a>
              </nav>
            </div>

            {/* Content */}
            <div className="g-col xxl-10 md-10 sm-16 xs-16">
              <div className="_policy-content">

                <h2 id="introduction">Introduction</h2>

                <p>Welcome to the Privacy Policy of iBnk.</p>

                <p>iBnk is operated by IBNK VAULT INC., a company incorporated in British Columbia, Canada (Incorporation No. BC1571168), registered with the Financial Transactions and Reports Analysis Centre of Canada (FINTRAC) as a Money Services Business (MSB), Registration No. N3000001312. In Australia, iBnk services are provided by Inteelifusion Pty Ltd, registered with AUSTRAC as a Digital Currency Exchange provider (DCE100905510-001) and Independent Remittance Dealer (IND100905510-001).</p>

                <p>We respect your privacy and are committed to protecting your personal data. This Privacy Policy explains how we collect, use, store, and protect information about you when you visit our website (ibnk.xyz) or use our services. It also explains your privacy rights and how the law protects you.</p>

                <p>Please read this policy carefully. If you have questions, contact us at <a href="mailto:support@ibnk.xyz">support@ibnk.xyz</a>.</p>

                <h2 id="who-we-are">1. Who We Are</h2>

                <h3>1.1 Data Controllers</h3>

                <p>The data controllers responsible for your personal data are:</p>

                <p><strong>IBNK VAULT INC.</strong><br />
                Registered address: 200-7404 King George Boulevard, Surrey, BC V3W 1N6, Canada<br />
                Office: 6060 Silver Drive, Suite 300, Burnaby, BC V5H 0H5, Canada<br />
                Email: <a href="mailto:support@ibnk.xyz">support@ibnk.xyz</a></p>

                <p><strong>Inteelifusion Pty Ltd</strong> (for Australian services)<br />
                525 Collins Street, Melbourne, Australia<br />
                Email: <a href="mailto:support@ibnk.xyz">support@ibnk.xyz</a></p>

                <h3>1.2 Scope</h3>

                <p>This policy applies when you: visit ibnk.xyz; enquire about or apply for our services; use our cross-border payment, digital asset custody, agentic payment, or embedded finance services; or communicate with us.</p>

                <p>This website is not intended for children under the age of 18, and we do not knowingly collect personal data relating to minors.</p>

                <h2 id="data-collect">2. Data We Collect</h2>

                <p>We may collect, use, store, and transfer different kinds of personal data about you, which we have grouped as follows:</p>

                <p><strong>Identity Data</strong> — full name, date of birth, government-issued identification numbers, passport or national ID details, and other Know Your Customer (KYC) information.</p>

                <p><strong>Contact Data</strong> — email address, telephone number, billing address, and country of residence.</p>

                <p><strong>Financial Data</strong> — bank account details, payment card details (where relevant), transaction history, wallet addresses, and source of funds information.</p>

                <p><strong>Technical Data</strong> — IP address, browser type and version, device identifiers, time zone, operating system, and other technology on the devices you use to access our website.</p>

                <p><strong>Usage Data</strong> — information about how you use our website and services, including pages visited, time spent, and referral sources.</p>

                <p><strong>Communications Data</strong> — preferences for receiving marketing from us, and records of correspondence.</p>

                <p><strong>Compliance Data</strong> — information required by anti-money laundering (AML), counter-terrorism financing (CTF), and sanctions screening obligations, including politically exposed person (PEP) status and adverse media.</p>

                <p>We do not collect sensitive personal data (such as health, religious beliefs, or biometric data) unless specifically required for regulatory compliance and with your explicit consent.</p>

                <h2 id="how-collected">3. How Data Is Collected</h2>

                <p>We collect your data through:</p>

                <p><strong>Direct interactions</strong> — when you fill in forms, correspond with us by email, book a demo, or apply for services.</p>

                <p><strong>Automated technologies</strong> — as you interact with our website, we may automatically collect Technical Data using cookies and similar tracking technologies. See our <a href="/cookie-policy">Cookie Policy</a> for details.</p>

                <p><strong>Third parties</strong> — we may receive data from identity verification providers, sanctions screening databases, credit reference agencies, payment processors, and public registers in connection with our regulatory compliance obligations.</p>

                <h2 id="how-we-use">4. How We Use Your Data</h2>

                <p>We will only use your personal data when the law allows us to. Most commonly, we use it:</p>

                <p><strong>To provide our services</strong> — processing payments, managing accounts, executing transfers, and facilitating digital asset transactions.</p>

                <p><strong>For regulatory compliance</strong> — fulfilling our obligations under FINTRAC, AUSTRAC, and applicable AML/CTF regulations, including identity verification, transaction monitoring, and suspicious activity reporting.</p>

                <p><strong>For legitimate business interests</strong> — improving our website and services, analysing usage, detecting fraud, and ensuring network and information security.</p>

                <p><strong>With your consent</strong> — sending marketing communications where you have opted in. You may withdraw consent at any time by contacting us at <a href="mailto:support@ibnk.xyz">support@ibnk.xyz</a>.</p>

                <p><strong>To perform a contract</strong> — where processing is necessary to fulfil obligations under our Terms and Conditions.</p>

                <h2 id="sharing">5. Sharing Your Data</h2>

                <p>We may share your personal data with:</p>

                <p><strong>Service providers</strong> — third-party vendors who perform services on our behalf, such as cloud infrastructure providers, identity verification services, payment processors, and compliance screening providers. These parties are bound by data processing agreements and may not use your data for their own purposes.</p>

                <p><strong>Regulatory and law enforcement authorities</strong> — FINTRAC, AUSTRAC, and other competent authorities where we are legally obliged to disclose information, including for AML/CTF reporting purposes.</p>

                <p><strong>Banking and financial partners</strong> — correspondent banks, digital asset exchanges, and liquidity providers involved in processing your transactions.</p>

                <p><strong>Professional advisers</strong> — lawyers, auditors, and insurers, under duties of confidentiality.</p>

                <p>We do not sell your personal data to third parties.</p>

                <h2 id="international">6. International Transfers</h2>

                <p>iBnk operates across multiple jurisdictions. Your data may be transferred to, and processed in, countries outside your country of residence, including Canada and Australia. Where such transfers occur, we implement appropriate safeguards in accordance with applicable data protection laws, which may include standard contractual clauses or reliance on adequacy decisions.</p>

                <p>If you would like further information about the specific mechanisms used when transferring your personal data internationally, please contact us at <a href="mailto:support@ibnk.xyz">support@ibnk.xyz</a>.</p>

                <h2 id="security">7. Data Security</h2>

                <p>We have implemented appropriate technical and organisational security measures to protect your personal data against accidental loss, unauthorised access, alteration, or disclosure. These include encryption in transit and at rest, access controls, and regular security reviews.</p>

                <p>However, no method of transmission over the internet or method of electronic storage is 100% secure. While we strive to protect your personal data, we cannot guarantee absolute security. You are responsible for keeping your account credentials confidential.</p>

                <h2 id="retention">8. Data Retention</h2>

                <p>We retain your personal data only for as long as necessary to fulfil the purposes we collected it for, including satisfying any legal, regulatory, accounting, or reporting requirements.</p>

                <p>Under Canadian and Australian AML regulations, we are required to retain transaction records and customer identification information for a minimum of five (5) years from the date of the transaction or the end of the business relationship. In practice, we may retain certain data for longer periods where required by applicable law or where necessary to establish, exercise, or defend legal claims.</p>

                <h2 id="your-rights">9. Your Rights</h2>

                <p>Depending on your jurisdiction, you may have the following rights regarding your personal data:</p>

                <p><strong>Access</strong> — the right to request a copy of the personal data we hold about you.</p>

                <p><strong>Correction</strong> — the right to request that we correct inaccurate or incomplete data.</p>

                <p><strong>Erasure</strong> — the right to request deletion of your personal data, subject to applicable legal and regulatory obligations.</p>

                <p><strong>Restriction</strong> — the right to request that we limit the processing of your data in certain circumstances.</p>

                <p><strong>Portability</strong> — the right to receive your data in a structured, commonly used, machine-readable format.</p>

                <p><strong>Objection</strong> — the right to object to processing based on legitimate interests or for direct marketing purposes.</p>

                <p><strong>Withdraw consent</strong> — where we rely on consent as the legal basis for processing, you may withdraw it at any time.</p>

                <p>To exercise any of these rights, please contact us at <a href="mailto:support@ibnk.xyz">support@ibnk.xyz</a>. We will respond to requests within the timeframe required by applicable law. Please note that some rights may be limited where we have overriding legal obligations, particularly our AML/CTF compliance duties.</p>

                <h2 id="cookies">10. Cookies</h2>

                <p>Our website uses cookies and similar tracking technologies. For full details of the cookies we use, why we use them, and how you can control them, please see our <a href="/cookie-policy">Cookie Policy</a>.</p>

                <h2 id="contact">11. Contact Us</h2>

                <p>If you have any questions, concerns, or complaints about this Privacy Policy or our data practices, please contact us:</p>

                <p><strong>Email:</strong> <a href="mailto:support@ibnk.xyz">support@ibnk.xyz</a><br />
                <strong>Postal address:</strong> IBNK VAULT INC., 6060 Silver Drive, Suite 300, Burnaby, BC V5H 0H5, Canada</p>

                <p>If you are not satisfied with our response, you may have the right to lodge a complaint with the relevant supervisory authority in your jurisdiction. In Canada, this is the Office of the Privacy Commissioner of Canada. In Australia, this is the Office of the Australian Information Commissioner.</p>

                <p>We may update this Privacy Policy from time to time. Any changes will be published on this page with an updated effective date. We encourage you to review this policy periodically.</p>

              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
