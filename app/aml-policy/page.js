'use client';

import { useEffect } from 'react';

export default function AmlPolicyPage() {
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
            <h1 className="title-2 -medium">AML Policy</h1>
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
                <a href="#regulatory-framework">1. Regulatory Framework</a>
                <a href="#scope">2. Scope</a>
                <a href="#kyc-cdd">3. Customer Due Diligence</a>
                <a href="#edd">4. Enhanced Due Diligence</a>
                <a href="#transaction-monitoring">5. Transaction Monitoring</a>
                <a href="#sanctions">6. Sanctions Screening</a>
                <a href="#reporting">7. Suspicious Activity</a>
                <a href="#record-keeping">8. Record Keeping</a>
                <a href="#training">9. Staff Training</a>
                <a href="#governance">10. Governance</a>
                <a href="#contact">11. Contact</a>
              </nav>
            </div>

            {/* Content */}
            <div className="g-col xxl-10 md-10 sm-16 xs-16">
              <div className="_policy-content">

                <h2 id="introduction">Introduction</h2>

                <p>iBnk is committed to the highest standards of Anti-Money Laundering (AML) and Counter-Terrorism Financing (CTF) compliance. This policy sets out the framework through which iBnk identifies, assesses, and manages the risk of money laundering, terrorist financing, and other financial crime within its operations.</p>

                <p>iBnk is operated by IBNK VAULT INC., incorporated in British Columbia, Canada, registered as a Money Services Business (MSB) with the Financial Transactions and Reports Analysis Centre of Canada (FINTRAC), Registration No. N3000001312. In Australia, iBnk services are provided by Inteelifusion Pty Ltd, registered with AUSTRAC as a Digital Currency Exchange (DCE100905510-001) and Independent Remittance Dealer (IND100905510-001).</p>

                <p>This AML Policy applies to all employees, contractors, agents, and service providers acting on behalf of iBnk, and to all customers and counterparties using iBnk services.</p>

                <h2 id="regulatory-framework">1. Regulatory Framework</h2>

                <p>iBnk operates within the following regulatory frameworks:</p>

                <p><strong>Canada</strong> — The Proceeds of Crime (Money Laundering) and Terrorist Financing Act (PCMLTFA) and associated regulations, administered by FINTRAC. As a registered MSB authorised to provide foreign exchange dealing, money transferring, virtual currency services, and payment service provider services, iBnk is subject to full MSB compliance obligations under the PCMLTFA.</p>

                <p><strong>Australia</strong> — The Anti-Money Laundering and Counter-Terrorism Financing Act 2006 (AML/CTF Act) and associated rules, administered by AUSTRAC. Inteelifusion Pty Ltd is registered as both a Digital Currency Exchange (DCE) provider and an Independent Remittance Dealer (IRD), and is subject to corresponding compliance obligations.</p>

                <p>Where iBnk operates in or facilitates transactions involving other jurisdictions, we apply the AML/CTF requirements of those jurisdictions to the extent applicable, and maintain a risk-based approach consistent with FATF (Financial Action Task Force) recommendations.</p>

                <h2 id="scope">2. Scope and Risk Appetite</h2>

                <p>iBnk adopts a risk-based approach to AML/CTF compliance. We conduct an enterprise-wide risk assessment that considers:</p>

                <p>The nature of our products and services (including cross-border payments, digital asset custody, and agentic/programmatic transactions); the customer segments we serve (individuals, businesses, and AI-driven automated systems); the geographic footprint of our operations and counterparties; and the delivery channels through which services are provided (API-first, digital-native).</p>

                <p>Based on this assessment, we apply proportionate controls calibrated to the level of risk presented by each customer, product, and transaction.</p>

                <h2 id="kyc-cdd">3. Customer Due Diligence (KYC/CDD)</h2>

                <h3>3.1 Customer Identification</h3>

                <p>Before establishing a business relationship or executing a transaction above applicable thresholds, iBnk identifies and verifies the identity of all customers. For individuals, this includes collection and verification of: full legal name; date of birth; government-issued photo identification; residential address; and, where required, source of funds.</p>

                <p>For corporate and institutional customers, due diligence extends to: legal entity name, jurisdiction, and registration number; certificate of incorporation and constitutional documents; identification of directors, officers, and beneficial owners (those owning 25% or more); and confirmation of the business{"'"}s nature and purpose.</p>

                <h3>3.2 Beneficial Ownership</h3>

                <p>iBnk identifies and verifies the beneficial owners of all legal entities seeking to use our services. Where beneficial ownership structures are complex or involve multiple layers, we apply enhanced scrutiny and may require additional documentation.</p>

                <h3>3.3 Ongoing Monitoring</h3>

                <p>Customer due diligence is not a one-time event. iBnk conducts periodic reviews of customer information and transaction patterns to ensure that records remain current and that the customer{"'"}s profile remains consistent with their stated purpose and expected activity.</p>

                <h2 id="edd">4. Enhanced Due Diligence (EDD)</h2>

                <p>iBnk applies Enhanced Due Diligence to higher-risk customers and relationships, including:</p>

                <p><strong>Politically Exposed Persons (PEPs)</strong> — individuals who hold or have held prominent public functions, and their immediate family members and close associates. PEPs are subject to senior management approval and enhanced ongoing monitoring.</p>

                <p><strong>High-risk jurisdictions</strong> — customers or transactions involving countries identified by FATF as high-risk, or subject to geographic sanctions. iBnk maintains a regularly updated list of restricted jurisdictions.</p>

                <p><strong>High-value or complex transactions</strong> — transactions that are unusually large, have no apparent economic purpose, or involve complex structures with no clear legitimate explanation.</p>

                <p><strong>Virtual asset transactions</strong> — given the pseudonymous nature of blockchain transactions, iBnk applies enhanced monitoring to virtual asset activities, including blockchain analytics and counterparty screening.</p>

                <h2 id="transaction-monitoring">5. Transaction Monitoring</h2>

                <p>iBnk maintains a transaction monitoring programme designed to detect patterns or behaviours indicative of money laundering, terrorist financing, or other financial crime. This programme includes:</p>

                <p>Automated rule-based alerts for transactions that exceed defined thresholds or exhibit suspicious patterns; risk scoring of transactions and customers based on multiple parameters; manual review of flagged transactions by qualified compliance staff; and regular review and tuning of monitoring rules to address emerging typologies.</p>

                <p>For digital asset transactions, iBnk employs blockchain analytics to assess the source and destination of funds, identify exposure to high-risk wallet addresses, and comply with the FATF Travel Rule where applicable.</p>

                <h2 id="sanctions">6. Sanctions Screening</h2>

                <p>iBnk screens all customers, counterparties, and transactions against applicable sanctions lists, including those administered by OFAC (US Treasury), the United Nations Security Council, the Government of Canada (under the Special Economic Measures Act and the Justice for Victims of Corrupt Foreign Officials Act), and the Australian Department of Foreign Affairs and Trade.</p>

                <p>Screening is conducted at onboarding and on an ongoing basis. Any match or potential match is escalated for immediate review. Transactions involving sanctioned persons or entities are blocked and reported to the relevant authorities.</p>

                <h2 id="reporting">7. Suspicious Transaction Reporting</h2>

                <p>iBnk is legally required to report suspicious transactions and attempted transactions to the relevant financial intelligence unit:</p>

                <p>In Canada, iBnk files Suspicious Transaction Reports (STRs) with FINTRAC where there are reasonable grounds to suspect that a transaction is related to money laundering or terrorist financing.</p>

                <p>In Australia, iBnk submits Suspicious Matter Reports (SMRs) to AUSTRAC under equivalent obligations.</p>

                <p>iBnk does not inform customers that they are the subject of a suspicious activity report (&quot;tipping off&quot;). Compliance staff involved in preparing reports are protected from retaliation.</p>

                <h2 id="record-keeping">8. Record Keeping</h2>

                <p>iBnk maintains comprehensive records of all customer identification, due diligence, transaction data, monitoring alerts, and compliance decisions. Under Canadian and Australian AML regulations, records are retained for a minimum of five (5) years from the date of the transaction or the end of the business relationship, whichever is longer.</p>

                <p>Records are stored securely and are available for production to FINTRAC, AUSTRAC, or other competent authorities upon lawful request.</p>

                <h2 id="training">9. Staff Training</h2>

                <p>All iBnk employees and relevant contractors receive AML/CTF training appropriate to their role. Training covers applicable laws and regulations, recognition of suspicious activity, customer due diligence procedures, and reporting obligations. Training records are maintained and refreshed on at least an annual basis.</p>

                <h2 id="governance">10. Governance and Accountability</h2>

                <p>iBnk has appointed a designated Chief Compliance Officer (CCO) who is responsible for overseeing the implementation and effectiveness of this AML Policy. The CCO has direct reporting lines to senior management and the board of directors, and is the primary point of contact with FINTRAC, AUSTRAC, and other regulatory bodies.</p>

                <p>This AML Policy is reviewed and updated at least annually, or sooner in response to material changes in regulation, business activities, or risk environment. Updates are approved by senior management.</p>

                <p>Any employee who becomes aware of a potential breach of this policy or suspects financial crime must report it to the compliance team immediately at <a href="mailto:support@ibnk.xyz">support@ibnk.xyz</a>.</p>

                <h2 id="contact">11. Contact</h2>

                <p>For questions about this AML Policy or to report concerns, please contact:</p>

                <p><strong>Email:</strong> <a href="mailto:support@ibnk.xyz">support@ibnk.xyz</a><br />
                <strong>Address:</strong> IBNK VAULT INC., 6060 Silver Drive, Suite 300, Burnaby, BC V5H 0H5, Canada</p>

              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
