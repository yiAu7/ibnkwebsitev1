'use client';

import { useEffect } from 'react';

export default function TermsAndConditionsPage() {
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
            <h1 className="title-2 -medium">Terms and Conditions</h1>
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
                <a href="#definitions">1. Definitions</a>
                <a href="#eligibility">2. Eligibility</a>
                <a href="#services">3. Our Services</a>
                <a href="#account">4. Account Registration</a>
                <a href="#kyc">5. Identity Verification</a>
                <a href="#payments">6. Payments & Transfers</a>
                <a href="#digital-assets">7. Digital Assets</a>
                <a href="#fees">8. Fees</a>
                <a href="#prohibited">9. Prohibited Use</a>
                <a href="#intellectual-property">10. Intellectual Property</a>
                <a href="#liability">11. Liability</a>
                <a href="#termination">12. Termination</a>
                <a href="#governing-law">13. Governing Law</a>
                <a href="#contact">14. Contact</a>
              </nav>
            </div>

            {/* Content */}
            <div className="g-col xxl-10 md-10 sm-16 xs-16">
              <div className="_policy-content">

                <h2 id="introduction">Introduction</h2>

                <p>These Terms and Conditions (&quot;Terms&quot;) govern your access to and use of the iBnk website (ibnk.xyz) and the services offered by IBNK VAULT INC. and its affiliates (collectively, &quot;iBnk&quot;, &quot;we&quot;, &quot;us&quot;, or &quot;our&quot;). By accessing our website or using our services, you agree to be bound by these Terms. If you do not agree, please do not use our services.</p>

                <p>iBnk is operated by IBNK VAULT INC., incorporated in British Columbia, Canada (No. BC1571168), registered as a Money Services Business (MSB) with FINTRAC (No. N3000001312). In Australia, services are provided by Inteelifusion Pty Ltd, registered with AUSTRAC as a Digital Currency Exchange (DCE100905510-001) and Independent Remittance Dealer (IND100905510-001).</p>

                <p>These Terms should be read together with our <a href="/privacy-policy">Privacy Policy</a>, <a href="/cookie-policy">Cookie Policy</a>, and <a href="/aml-policy">AML Policy</a>.</p>

                <h2 id="definitions">1. Definitions</h2>

                <p><strong>&quot;Account&quot;</strong> means the account you register with iBnk to access our services.</p>
                <p><strong>&quot;Digital Assets&quot;</strong> means cryptocurrencies, stablecoins, tokenised assets, and other blockchain-based instruments supported by iBnk.</p>
                <p><strong>&quot;Fiat Currency&quot;</strong> means government-issued currency (e.g., CAD, AUD, USD).</p>
                <p><strong>&quot;Services&quot;</strong> means iBnk{"'"}s cross-border payment services, digital asset custody, agentic payment infrastructure, and embedded finance APIs.</p>
                <p><strong>&quot;Transaction&quot;</strong> means any payment, transfer, exchange, or other financial instruction submitted through the iBnk platform.</p>
                <p><strong>&quot;User&quot;</strong> means any individual, business, or automated system accessing iBnk services.</p>

                <h2 id="eligibility">2. Eligibility</h2>

                <p>To use iBnk services, you must:</p>

                <p>Be at least 18 years of age (or the age of majority in your jurisdiction); have the legal capacity to enter into binding contracts; not be a resident of a sanctioned jurisdiction or a person subject to sanctions administered by OFAC, the UN Security Council, or other relevant authorities; and comply with all applicable laws and regulations in your jurisdiction.</p>

                <p>By using our services, you represent and warrant that you meet these requirements. We reserve the right to refuse service to any person who does not satisfy our eligibility criteria or compliance requirements.</p>

                <h2 id="services">3. Our Services</h2>

                <p>iBnk provides a dual-rail financial infrastructure enabling the movement of value across fiat and digital asset networks. Our current service offering includes:</p>

                <p><strong>Cross-Border Payments</strong> — send and receive international payments via bank rails, stablecoin networks, or a combination, with intelligent routing to optimise cost and speed.</p>

                <p><strong>Digital Asset Custody</strong> — secure, segregated custody of digital assets. Client assets are held on a 1:1 basis and are never rehypothecated or lent out.</p>

                <p><strong>Agentic Payments</strong> — programmable payment capabilities designed for AI agents and automated systems, including API-native wallet infrastructure and real-time settlement.</p>

                <p><strong>Embedded Finance</strong> — APIs enabling businesses to integrate iBnk payment and custody capabilities into their own products and workflows.</p>

                <p>Services may vary by jurisdiction. Not all services are available in all regions. We reserve the right to modify, suspend, or discontinue any service at any time with reasonable notice.</p>

                <h2 id="account">4. Account Registration</h2>

                <p>To access iBnk services, you must register for an Account. When registering, you agree to provide accurate, current, and complete information and to keep your account information updated.</p>

                <p>You are responsible for maintaining the confidentiality of your login credentials and for all activity that occurs under your Account. If you suspect unauthorised access, you must notify us immediately at <a href="mailto:support@ibnk.xyz">support@ibnk.xyz</a>.</p>

                <p>We reserve the right to suspend or terminate Accounts that are found to be in breach of these Terms or our compliance policies.</p>

                <h2 id="kyc">5. Identity Verification (KYC/AML)</h2>

                <p>In compliance with applicable anti-money laundering (AML) and counter-terrorism financing (CTF) laws, iBnk is required to verify the identity of all customers before providing services. This process is known as Know Your Customer (KYC).</p>

                <p>You agree to provide all information and documentation we reasonably request for KYC purposes, which may include government-issued identification, proof of address, source of funds declarations, and corporate documentation for business customers.</p>

                <p>We reserve the right to decline, suspend, or terminate services if you fail to provide satisfactory KYC documentation or if we have reasonable grounds to believe a transaction may violate applicable AML/CTF laws. For further details, please see our <a href="/aml-policy">AML Policy</a>.</p>

                <h2 id="payments">6. Payments and Transfers</h2>

                <p>When you submit a Transaction, you authorise iBnk to execute the payment or transfer in accordance with your instructions. You are responsible for the accuracy of all instructions, including recipient details and amounts. iBnk is not liable for losses arising from incorrect instructions provided by you.</p>

                <p>iBnk will use reasonable efforts to process Transactions promptly. Processing times depend on network conditions, banking partner availability, and compliance screening. We do not guarantee specific processing times.</p>

                <p>We reserve the right to refuse, delay, or reverse a Transaction if we have reason to believe it may violate applicable law, our AML/CTF obligations, or these Terms.</p>

                <h2 id="digital-assets">7. Digital Assets</h2>

                <p>Digital assets are highly volatile and involve significant risk. The value of digital assets can fluctuate substantially in short periods. Past performance is not indicative of future results.</p>

                <p>iBnk does not provide investment advice. Nothing on our platform constitutes a recommendation to buy, sell, or hold any digital asset. You are solely responsible for your own investment decisions.</p>

                <p>Digital assets held in custody are maintained on a segregated, 1:1 basis. We do not lend, pledge, or rehypothecate client assets. However, digital asset transactions may be subject to blockchain network risks including congestion, forks, and protocol changes beyond our control.</p>

                <h2 id="fees">8. Fees</h2>

                <p>iBnk charges fees for certain services. Fee structures are agreed upon during the onboarding process and set out in your service agreement. To discuss pricing, please <a href="https://cal.com/yi-zhang-avxwyp/15min" target="_blank" rel="noopener noreferrer">book a call</a> or contact us at <a href="mailto:support@ibnk.xyz">support@ibnk.xyz</a>.</p>

                <p>We reserve the right to update our fees with reasonable prior notice. Continued use of our services following a fee change constitutes acceptance of the revised fees.</p>

                <h2 id="prohibited">9. Prohibited Use</h2>

                <p>You must not use iBnk services for any of the following purposes:</p>

                <p>Illegal activities, including money laundering, terrorist financing, fraud, tax evasion, or sanctions evasion; transactions involving prohibited goods or services under applicable law; any activity that violates the laws or regulations of your jurisdiction or the jurisdiction of the transaction recipient; circumventing our KYC/AML controls or providing false or misleading information to iBnk; or any use that could damage, disable, or impair our systems or interfere with other users{"'"} access to services.</p>

                <p>We actively monitor transactions for prohibited activity and are legally obligated to report suspicious activity to FINTRAC, AUSTRAC, and other relevant authorities. Violations may result in immediate account suspension, asset freezing, and referral to law enforcement.</p>

                <h2 id="intellectual-property">10. Intellectual Property</h2>

                <p>All content on ibnk.xyz, including text, graphics, logos, software, and APIs, is the property of IBNK VAULT INC. or its licensors and is protected by applicable intellectual property laws.</p>

                <p>You are granted a limited, non-exclusive, non-transferable licence to access and use our website and services for their intended purposes. You may not copy, modify, distribute, sell, or create derivative works from our content without our prior written consent.</p>

                <h2 id="liability">11. Limitation of Liability</h2>

                <p>To the maximum extent permitted by applicable law, iBnk and its directors, employees, and agents shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including loss of profits, data, or goodwill, arising from your use of our services.</p>

                <p>Our total liability for any claim arising under these Terms shall not exceed the fees paid by you to iBnk in the three (3) months preceding the claim.</p>

                <p>iBnk does not exclude liability for fraud, death or personal injury caused by negligence, or any liability that cannot be excluded under applicable law.</p>

                <p>We provide our services &quot;as is&quot; and make no warranties, express or implied, regarding the availability, accuracy, or fitness for a particular purpose of our services.</p>

                <h2 id="termination">12. Termination</h2>

                <p>You may close your Account at any time by contacting <a href="mailto:support@ibnk.xyz">support@ibnk.xyz</a>, subject to any pending Transactions being completed and any applicable regulatory hold periods.</p>

                <p>We may suspend or terminate your Account with immediate effect if you breach these Terms, fail to meet our compliance requirements, or if we are required to do so by law or regulatory instruction.</p>

                <p>Upon termination, we will return any remaining balance held on your behalf, subject to applicable regulatory requirements, fees, and deductions for amounts owed to iBnk.</p>

                <h2 id="governing-law">13. Governing Law and Disputes</h2>

                <p>These Terms are governed by and construed in accordance with the laws of British Columbia, Canada, without regard to its conflict of law principles.</p>

                <p>Any dispute arising from these Terms or your use of iBnk services shall first be subject to good-faith negotiation between the parties. If the dispute cannot be resolved within 30 days, it shall be submitted to binding arbitration in Vancouver, British Columbia, in accordance with the applicable arbitration rules, unless you are located in Australia, in which case Australian law and dispute resolution mechanisms may apply.</p>

                <p>Nothing in this clause prevents either party from seeking urgent injunctive relief from a court of competent jurisdiction.</p>

                <h2 id="contact">14. Contact</h2>

                <p>For questions, complaints, or concerns regarding these Terms, please contact us:</p>

                <p><strong>Email:</strong> <a href="mailto:support@ibnk.xyz">support@ibnk.xyz</a><br />
                <strong>Address:</strong> IBNK VAULT INC., 6060 Silver Drive, Suite 300, Burnaby, BC V5H 0H5, Canada</p>

                <p>We may update these Terms from time to time. Continued use of our services after any changes constitutes your acceptance of the revised Terms. We will notify you of material changes by posting a notice on our website or by email.</p>

              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
