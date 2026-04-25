'use client';

import { useEffect } from 'react';

export default function ComplaintsHandlingPolicyPage() {
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
            <h1 className="title-2 -medium">Complaints Handling Policy</h1>
          </div>
          <div className="hero-description">
            <p className="subhead-2 -medium">Overview of iBnk{"'"}s procedures for receiving and resolving customer complaints.</p>
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
              <a href="/complaints-handling-policy-page" className="_policy-back">
                <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" clipRule="evenodd" d="M10.0607 3L3.06066 10L10.0607 17L9 18.0607L2.53033 11.591C1.65165 10.7123 1.65165 9.28769 2.53033 8.40901L9 1.93934L10.0607 3Z" fill="currentColor" transform="translate(0,-4)"/>
                </svg>
                Back to Region Selection
              </a>
              <nav className="_policy-sidebar">
                <a href="#introduction" data-active="true">1. Introduction</a>
                <a href="#definition">2. Definition</a>
                <a href="#submitting">3. Submitting a Complaint</a>
                <a href="#why-collect">4. Why we collect your info</a>
                <a href="#investigation">5. Investigation and Response</a>
                <a href="#record-keeping">6. Record Keeping</a>
              </nav>
            </div>

            {/* Content */}
            <div className="g-col xxl-10 md-10 sm-16 xs-16">
              <div className="_policy-content">

                <h2>Complaints Handling Policy EU</h2>

                <p><strong>LA ORANGE CY LIMITED</strong><br />Complaints Handling Policy<br />January 2026</p>

                <h3 id="introduction">1. Introduction</h3>

                <p>This Policy applies to La Orange CY Ltd, an Electronic Money Institution authorized and regulated by the Central Bank of Cyprus under license number 115.1.3.66. La Orange CY Ltd operates under the trade name and domain IBNK.</p>

                <h3 id="definition">2. Definition of a Complaint and Complainant</h3>

                <p>A complaint is an expression of dissatisfaction made by a customer of the Company in relation to the Company{"'"}s products, services, staff behaviour, or the complaint-handling process itself.</p>

                <p>A complainant is any customer or authorised representative who submits a complaint to the Company.</p>

                <h3 id="submitting">3. Submitting a Complaint or Inquiry</h3>

                <p>If you are an existing iBnk customer, we recommend contacting Customer Support or your Account Manager in the first instance, as many issues can be resolved quickly and informally.</p>

                <p>If your issue remains unresolved, you may submit a formal complaint in writing by completing the Complaint Form.</p>

                <p><strong>Complaints must include:</strong></p>
                <ul>
                  <li>Full Name</li>
                  <li>Contact Details (telephone number and email)</li>
                  <li>Account Number and/or Card Account and Card number</li>
                  <li>Details of complaint, including date of incident, information on affected transactions (if applicable) and desired outcome</li>
                  <li>Supporting evidence (e.g. screenshots, communications etc. if applicable)</li>
                </ul>

                <p>All complaints must be submitted in English, in a clear and comprehensible manner. Please ensure that all information provided is accurate, complete, and up to date.</p>

                <p>The Company reserves the right to reject complaints containing false or misleading information, or where material information or evidence has been deliberately withheld.</p>

                <p>If a customer prefers or requires another person or organization (representative) to submit a complaint on their behalf, a power of attorney or any other valid document authorizing the representative to act on the customer{"'"}s behalf may be requested. Anyone may represent a customer wishing to make a complaint with their consent (e.g. advocate, family member, legal or community representative, member of Parliament, another organization).</p>

                <h3 id="why-collect">4. Why we collect your information</h3>

                <p>To ensure the integrity and effectiveness of our complaints-handling process, we are required to verify the identity of the individual submitting the complaint. This helps prevent fraudulent or incorrect submissions and ensures that the complaint is accurately linked to the relevant account, transaction, or service.</p>

                <p>Identification details are processed solely for complaint verification purposes and in support of our legitimate interests, including fraud prevention and operational accuracy.</p>

                <p>Email addresses and/or telephone numbers are collected for communication purposes only.</p>

                <p>All information is stored securely and retained only for as long as necessary to investigate, resolve, and record the complaint.</p>

                <p>Your information is never used for purposes unrelated to complaint handling.</p>

                <h3 id="investigation">5. Investigation and Response</h3>

                <p>Upon receipt of a complaint, the Company will conduct a thorough and impartial investigation.</p>

                <p>The Company aims to issue a final response within two (2) months from the date the complaint is received.</p>

                <p>If additional time is required due to the complexity of the case, the complainant will be informed of the status of the investigation and provided with a revised timeframe.</p>

                <p><strong>Final response will include:</strong></p>
                <ul>
                  <li>A clear explanation of the Company{"'"}s position</li>
                  <li>Details of any remedial or corrective measures, where applicable</li>
                </ul>

                <p>If the Company is unable to contact the complainant, or if the complainant fails to provide requested information within a reasonable timeframe, the complaint may be considered closed three (3) months after submission.</p>

                <h3>5.1. Client Cooperation</h3>

                <p>Customers are requested to provide all relevant documentation (e.g. emails, chat transcripts, statements) as promptly as possible.</p>

                <p>In certain cases, a Company representative may contact the customer by telephone to clarify information or request additional details.</p>

                <h3 id="record-keeping">6. Record Keeping</h3>

                <p>The Company maintains comprehensive records of all complaints, including related correspondence, documentation, investigations, and outcomes.</p>

                <p>Complaint records are retained for a minimum of five (5) years, or up to seven (7) years where required by the Central Bank of Cyprus or another competent authority.</p>

                <p>The Compliance Function is responsible for maintaining and safeguarding all complaint-related records and ensuring their availability to competent authorities upon request.</p>

                <p>The Management Body regularly reviews complaints to identify recurring issues and to ensure appropriate corrective and preventive measures are implemented.</p>

              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
