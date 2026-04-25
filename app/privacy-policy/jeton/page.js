'use client';

import { useEffect } from 'react';

export default function PrivacyPolicyJetonPage() {
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
          <div className="g-row">

            {/* Back link + Sidebar Navigation */}
            <div className="g-col xxl-3 md-3 sm-16 xs-16">
              <a href="/privacy-policy" className="_policy-back">
                <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" clipRule="evenodd" d="M10.0607 3L3.06066 10L10.0607 17L9 18.0607L2.53033 11.591C1.65165 10.7123 1.65165 9.28769 2.53033 8.40901L9 1.93934L10.0607 3Z" fill="currentColor" transform="translate(0,-4)"/>
                </svg>
                Back to Privacy Policy
              </a>
              <nav className="_policy-sidebar">
                <a href="#introduction" data-active="true">Introduction</a>
                <a href="#important-info">1. Important information...</a>
                <a href="#data-collect">2. Data We Collect About...</a>
                <a href="#data-collected">3. How Is Your Personal D...</a>
                <a href="#data-use">4. How We Use Your Perso...</a>
                <a href="#disclosures">5. Disclosures of Your Per...</a>
                <a href="#international">6. International Transfers</a>
                <a href="#security">7. Data Security</a>
                <a href="#retention">8. Data Retention</a>
                <a href="#legal-rights">9. Your Legal Rights</a>
                <a href="#merchant">10. Merchant Information...</a>
                <a href="#glossary">11. Glossary Lawful Basis</a>
              </nav>
            </div>

            {/* Content */}
            <div className="g-col xxl-10 md-10 sm-16 xs-16">
              <div className="_policy-content">

                <h2 id="introduction">Introduction</h2>

                <p>Welcome to the privacy policy of LA Orange CY Limited.</p>

                <p>LA Orange Limited, trading as iBnk, is authorised by the Financial Conduct Authority under the Electronic Money Regulations 2011 for distributing or redeeming electronic money (e-money) and providing certain payment services on behalf of an e-money institution, with FCA registration number 902088. LA Orange Limited is registered in England and Wales, Company Number 11535714, with its registered office address at The Shard Floor 24/25, 32 London Bridge Street, London, SE1 9SG, United Kingdom.</p>

                <p>LA Orange CY Limited, trading as iBnk, is authorised by the Central Bank of Cyprus under the Electronic Money Law of 2012 and 2018 (Law 81(I)/2012) for distributing or redeeming electronic money (e-money), with Licence No: 115.1.3.66. LA Orange CY Limited has been incorporated in the Republic of Cyprus under the provisions of the Companies Law (Cap 113) with registration number HE 424807, with its registered office address at Gladstonos, 116 M. Kyprianou House, 3&4th Floor, 3032, Limassol, Cyprus.</p>

                <p>iBnk respects your privacy and is committed to protecting your personal data. This privacy policy will inform you as to how we look after your personal data when you visit our website (regardless of where you visit it from) and tell you about your privacy rights and how the law protects you. This privacy policy supplements our Terms & Conditions, please refer to them for any defined terms referred to in this privacy policy not defined in this policy.</p>

                <p>This privacy policy applies to your personal information when you (or the business entity you represent) access our website or apply for use of our products and services and when you use our products and services. If you choose not to give Us Your personal information, it may delay or prevent us from meeting our obligations. We may be unable or prohibited to provide services to you (or the business entity you represent). Further, We may terminate provision of services to you (or the business entity you represent).</p>

                <p>This privacy policy is provided in a layered format so you can click through to the specific areas set out below. Please also use the Glossary to understand the meaning of some of the terms used in this privacy policy.</p>

                <h2 id="important-info">1. Important information and who we are</h2>

                <h3>1.1 Purpose of this privacy policy</h3>

                <p>This privacy policy aims to give you information on how iBnk collects and processes your personal data through your use of this website, including any data you may provide through this website when you sign up to use iBnk{"'"}s products and services. This website is not intended for children and we do not knowingly collect data relating to children.</p>

                <p>It is important that you read this privacy policy together with any other privacy policy or fair processing policy we may provide on specific occasions when we are collecting or processing personal data about you so that you are fully aware of how and why we are using your data.</p>

                <p>This privacy policy supplements other notices and privacy policies and is not intended to override them.</p>

                <h3>1.2 Controller</h3>

                <p>iBnk is made up of different legal entities, details of which can be found here: <a href="https://www.jeton.com">www.jeton.com</a></p>

                <p>This privacy policy is issued on behalf of the iBnk Group so when we mention &quot;iBnk&quot;, &quot;we&quot;, &quot;us&quot; or &quot;our&quot; in this privacy policy, we are referring to the relevant company in the iBnk Group responsible for processing your data. We will let you know which entity will be the controller for your data when you purchase a product or service with us. iBnk is the controller and responsible for this website.</p>

                <p>We have appointed a team who is responsible for overseeing questions in relation to this privacy policy. If you have any questions about this privacy policy, including any requests to exercise your legal rights, please contact the team using the details set out below.</p>

                <p>Contact details: <a href="mailto:dpo@jeton.com">dpo@jeton.com</a></p>

                <p>If you have any questions about this privacy policy or our privacy practices, please contact our relevant team.</p>

                <h3>1.3 Changes to the privacy policy and your duty to inform us of changes</h3>

                <p>We keep our privacy policy under regular review. This version was last updated in April 2024.</p>

                <p>It is important that the personal data we hold about you is accurate and current. Please keep us informed if your personal data changes during your relationship with us.</p>

                <h3>1.4 Third-party links</h3>

                <p>This website may include links to third-party websites, plug-ins and applications. Clicking on those links or enabling those connections may allow third parties to collect or share data about you. We do not control these third-party websites and are not responsible for their privacy statements nor their operations. When you leave our website, we encourage you to read the privacy policy of every website you visit.</p>

                <h2 id="data-collect">2. Data We Collect About You</h2>

                <p>Personal data, or personal information, means any information about an individual from which that person can be identified. It does not include data where the identity has been removed (anonymous data).</p>

                <p>We may collect, use, store and transfer different kinds of personal data about you which we have grouped together as follows:</p>

                <ul>
                  <li><strong>Identity Data</strong> includes first name, last name, username or similar identifier, marital status, title, date of birth and gender, ID document number, Photo of individual registering, industry type, purpose of Account</li>
                  <li><strong>Contact Data</strong> includes email address and telephone</li>
                  <li><strong>Financial Data</strong> includes bank account and payment card details and payment methods issued by third party institutions linked to iBnk</li>
                  <li><strong>Transaction Data</strong> includes date, time, amount, devices associated with the transaction, IP address of sender and receiver, senders name and registration information, receiver{"'"}s name and registration information, messages sent or received with the payment, device information used to facilitate the payment and the payment instrument</li>
                  <li><strong>Technical Data</strong> includes internet protocol (IP) address, your login data, browser type and version, time zone setting and location, browser plug-in types and versions, operating system and platform, and other technology on the devices you use to access this</li>
                  <li><strong>Profile Data</strong> includes your username and password, purchases or orders made by you, your interests, preferences, information about your behavior, feedback and survey</li>
                  <li><strong>Usage Data</strong> includes information about how you use our website, products and services</li>
                  <li><strong>Marketing and Communications Data</strong> includes your preferences in receiving marketing from us and our third parties and your communication</li>
                </ul>

                <p>We also collect, use and share Aggregated Data such as statistical or demographic data for any purpose. Aggregated Data could be derived from your personal data but is not considered personal data in law as this data will not directly or indirectly reveal your identity. For example, we may aggregate your Usage Data to calculate the percentage of users accessing a specific website feature. However, if we combine or connect Aggregated Data with your personal data so that it can directly or indirectly identify you, we treat the combined data as personal data which will be used in accordance with this privacy policy.</p>

                <p>We do not collect any Special Categories of Personal Data about you (this includes details about your race or ethnicity, religious or philosophical beliefs, sex life, sexual orientation, political opinions, trade union membership, information about your health, and genetic and biometric data). Nor do we collect any information about criminal convictions and offences.</p>

                <h3>2.1 If you fail to provide personal data</h3>

                <p>Where we need to collect personal data by law, or under the Terms & Conditions, and you fail to provide that data when requested, we may not be able to perform the contract we have or are trying to enter into with you (for example, to provide you with our products and services). In this case, we may have to cancel a product or service you have with us but we will notify you if this is the case at the time.</p>

                <h2 id="data-collected">3. How Is Your Personal Data Collected?</h2>

                <p>We use different methods to collect data from and about you including through:</p>

                <ul>
                  <li><strong>Direct interactions.</strong> You may give us your Identity, Contact and Financial Data by filling in forms or by corresponding with us by phone, email or otherwise. This includes personal data you provide when you apply for our products or services; create an account on our website; subscribe to our service or publications; request marketing to be sent to you; enter a competition, promotion or survey; or give us feedback or contact us.</li>
                  <li><strong>Automated technologies or interactions.</strong> As you interact with our website, we will automatically collect Technical Data about your equipment, browsing actions and patterns. We collect this personal data by using cookies, server logs and other similar technologies. We may also receive Technical Data about you if you visit other websites employing our cookies. Please see our <a href="/cookie-policy">cookie policy</a> for further details.</li>
                  <li><strong>Third parties or publicly available sources.</strong> We will receive personal data about you from various third parties and public sources as set out below:</li>
                </ul>

                <p>Technical Data from the following parties:</p>

                <ul>
                  <li>analytics providers such as Google based outside the EU;</li>
                  <li>advertising networks inside or outside the EU; and</li>
                  <li>search information providers inside or outside the EU</li>
                  <li>Contact, financial and transaction data from providers of technical and payment services based inside or outside the EU</li>
                  <li>Identity and contact data from data brokers or aggregators based inside or outside the EU</li>
                  <li>Identity and contact data from publicly available sources such as business registers and the electoral register based in your region</li>
                </ul>

                <h2 id="data-use">4. How We Use Your Personal Data?</h2>

                <p>We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:</p>

                <ul>
                  <li>Where it is necessary for our legitimate interests (or those of a third party) in order not override those interests</li>
                  <li>Where we need to comply with a legal obligation such as providing information in response to a warrant, court order, or as otherwise required by law</li>
                </ul>

                <p>See below to find out more about the types of lawful basis that we will rely on to process your personal data.</p>

                <p>Generally, we do not rely on consent as a legal basis for processing your personal data although we will get your consent before sending third party direct marketing communications to you via email or text message. You have the right to withdraw consent to marketing at any time by contacting us.</p>

                <h3>4.1 Purposes for which we will use your personal data</h3>

                <p>We have set out below, in a table format, a description of all the ways we plan to use your personal data, and which of the legal bases we rely on to do so. We have also identified what our legitimate interests are where appropriate.</p>

                <p>Note that we may process your personal data for more than one lawful ground depending on the specific purpose for which we are using your data. Please, contact us if you need details about the specific legal ground we are relying on to process your personal data where more than one ground has been set out in the table below.</p>

                <table className="_cookie-table">
                  <thead>
                    <tr>
                      <th style={{ width: '33%' }}>Purpose/Activity</th>
                      <th style={{ width: '33%' }}>Type of data</th>
                      <th style={{ width: '34%' }}>Lawful basis for processing including basis of legitimate interest</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>To register you as a new customer and to ensure your continued eligibility as a customer.</td>
                      <td>a. Identity<br />b. Contact</td>
                      <td>Performance of a contract with you</td>
                    </tr>
                    <tr>
                      <td>To process and provide services including: Manage payments, fees and charges. Collect and recover money owed to us.</td>
                      <td>a. Identity<br />b. Contact<br />c. Financial<br />d. Transaction<br />e. Marketing and Communications</td>
                      <td>a. Performance of a contract with you<br />b. Necessary for our legitimate interests (to recover debts due to us)</td>
                    </tr>
                    <tr>
                      <td>To manage our relationship with you which will include: a. Notifying you about changes to our terms or privacy policy b. Asking you to leave a review or take a survey</td>
                      <td>a. Identity<br />b. Contact<br />c. Profile<br />d. Marketing and Communications</td>
                      <td>a. Performance of a contract with you<br />b. Necessary to comply with a legal obligation<br />c. Necessary for our legitimate interests (to keep our records updated and to study how customers use our products/services)</td>
                    </tr>
                    <tr>
                      <td>To enable you to partake in a prize draw, competition or complete a survey</td>
                      <td>a. Identity<br />b. Contact<br />c. Profile<br />d. Usage<br />e. Marketing and Communications</td>
                      <td>a. Performance of a contract with you<br />b. Necessary for our legitimate interests (to study how customers use our products/services, to develop them and grow our business)</td>
                    </tr>
                    <tr>
                      <td>To administer and protect our business and this website (including troubleshooting, data analysis, testing, system maintenance, customer support, reporting and hosting of data and improvements to the website and services)</td>
                      <td>a. Identity<br />b. Contact<br />c. Technical</td>
                      <td>a. Necessary for our legitimate interests (for running our business, provision of administration and IT services, network security, to prevent fraud and in the context of a business reorganisation or group restructuring exercise)<br />b. Necessary to comply with a legal obligation</td>
                    </tr>
                    <tr>
                      <td>To deliver relevant website content and advertisements to you and measure or understand the effectiveness of the advertising we serve to you</td>
                      <td>a. Identity<br />b. Contact<br />c. Profile<br />d. Usage<br />e. Marketing and Communications<br />f. Technical</td>
                      <td>Necessary for our legitimate interests (to study how customers use our products/services, to develop them, to grow our business and to inform our marketing strategy)</td>
                    </tr>
                    <tr>
                      <td>To use data analytics to improve our website, products/services, marketing, customer relationships and experiences</td>
                      <td>a. Technical<br />b. Usage</td>
                      <td>Necessary for our legitimate interests (to define types of customers for our products and services, to keep our website updated and relevant, to develop our business and to inform our marketing strategy)</td>
                    </tr>
                    <tr>
                      <td>To make suggestions and recommendations to you about products or services that may be of interest to you</td>
                      <td>a. Identity<br />b. Contact<br />c. Technical<br />d. Usage<br />e. Profile<br />f. Marketing and Communications</td>
                      <td>Necessary for our legitimate interests (to develop our products/services and grow our business)</td>
                    </tr>
                  </tbody>
                </table>

                <h3>4.2 Marketing</h3>

                <p>We strive to provide you with choices regarding certain personal data uses, particularly around marketing and advertising. We have established the following personal data control mechanisms:</p>

                <h3>4.2.1 Promotional offers from us</h3>

                <p>We may use your Identity, Contact, Technical, Usage and Profile Data to form a view on what we think you may want or need, or what may be of interest to you. This is how we decide which products, services and offers may be relevant for you (we call this marketing).</p>

                <p>You will receive marketing communications from us if you have requested information from us or purchased goods or services from us and you have not opted out of receiving that marketing.</p>

                <h3>4.2.2 Third-party marketing</h3>

                <p>We will get your express opt-in consent before we share your personal data with any third party for marketing purposes.</p>

                <h3>4.2.3 Opting out</h3>

                <p>You can ask us or third parties to stop sending you marketing messages at any time by logging into the website and checking or unchecking relevant boxes to adjust your marketing preferences or by following the opt-out links on any marketing message sent to you or by contacting us at any time.</p>

                <p>Where you opt out of receiving these marketing messages, this will not apply to personal data provided to us as a result of use of Your Account including transactions.</p>

                <h3>4.2.4 Change of purpose</h3>

                <p>We will only use your personal data for the purposes for which we collected it, unless we reasonably consider that we need to use it for another reason and that reason is compatible with the original purpose. If you wish to get an explanation as to how the processing for the new purpose is compatible with the original purpose, please contact us.</p>

                <p>If we need to use your personal data for an unrelated purpose, we will notify you and we will explain the legal basis which allows us to do so.</p>

                <p>Please note that we may process your personal data without your knowledge or consent, in compliance with the above rules, where this is required or permitted by law.</p>

                <h2 id="disclosures">5. Disclosures of Your Personal Data</h2>

                <p>We may share your information with trusted third parties when:</p>

                <ul>
                  <li>providing you with special features (services) upon your request (including J-Business)</li>
                  <li>responding to a subpoena, warrant, court order, or as otherwise required to by law</li>
                  <li>conducting or co-operating in investigations of fraud or other illegal activity where we believe it is reasonable and appropriate to do so;</li>
                  <li>Interacting with our approved business service partners who are held to contractual and legal regulations as to how they are permitted to handle your data; and,</li>
                  <li>Gathering your IP address, browser type, access times to improve our site</li>
                </ul>

                <p>We may share your personal data with the parties set out below for the purposes set out in the table Purposes for which we will use your personal data above.</p>

                <ul>
                  <li>Internal Third Parties as set out in the Glossary.</li>
                  <li>External Third Parties as set out in the Glossary.</li>
                  <li>Third parties to whom we may choose to sell, transfer or merge parts of our business or our assets. Alternatively, we may seek to acquire other businesses or merge with them. If a change happens to our business, then the new owners may use your personal data in the same way as set out in this privacy policy.</li>
                </ul>

                <p>We require all third parties to respect the security of your personal data and to treat it in accordance with the law. We do not allow our third-party service providers to use your personal data for their own purposes and only permit them to process your personal data for specified purposes and in accordance with our instructions.</p>

                <h2 id="international">6. International Transfers</h2>

                <p>We share your personal data within the iBnk Group. This will involve transferring your data outside the EU wherever members of the Group are located.</p>

                <p>Many of our external third parties are based outside the EU so their processing of your personal data will involve a transfer of data outside the EU.</p>

                <p>Whenever we transfer your personal data out of the EU, we ensure a similar degree of protection is afforded to it by ensuring at least one of the following safeguards is implemented:</p>

                <ul>
                  <li>We will transfer your personal data only to countries that offer an adequate level of protection for personal data, ensuring that your information remains safeguarded during the transfer, as required by law.</li>
                  <li>Where we use certain service providers, we may use specific contracts approved for use in the EU which give personal data the same protection it has in the EU law and or UK.</li>
                </ul>

                <p>Please contact us if you want further information on the specific mechanism used by us when transferring your personal data out of the EU.</p>

                <p>We may be obligated to disclose any personal data to any relevant competent authority as may be required under the Law from time to time in any of the following situations:</p>

                <ul>
                  <li>To protect the Company{"'"}s rights and/or comply with any court order or judicial proceedings.</li>
                  <li>To avoid any potential fraud</li>
                  <li>To conform with the Law or Comply with legal proceedings</li>
                  <li>To protect and defend the rights or property of the Company{"'"}s website(s)</li>
                  <li>To act in urgent cases to protect the personal safety of users of the company, its website or the public</li>
                </ul>

                <h2 id="security">7. Data Security</h2>

                <p>We have put in place appropriate security measures to prevent your personal data from being accidentally lost, used or accessed in an unauthorised way, altered or disclosed. In addition, we limit access to your personal data to those employees, agents, contractors and other third parties who have a business need to know. They will only process your personal data on our instructions, and they are subject to a duty of confidentiality.</p>

                <p>We have put in place procedures to deal with any suspected personal data breach and will notify you and any applicable regulator of a breach where we are legally required to do so.</p>

                <h2 id="retention">8. Data Retention</h2>

                <h3>8.1 How long will you use my personal data for?</h3>

                <p>We will only retain your personal data for as long as reasonably necessary to fulfil the purposes we collected it for, including for the purposes of satisfying any legal, regulatory, tax, accounting or reporting requirements. We may retain your personal data for a longer period in the event of a complaint or if we reasonably believe there is a prospect of litigation in respect to our relationship with you.</p>

                <p>To determine the appropriate retention period for personal data, we consider the amount, nature and sensitivity of the personal data, the potential risk of harm from unauthorised use or disclosure of your personal data, the purposes for which we process your personal data and whether we can achieve those purposes through other means, and the applicable legal, regulatory, tax, accounting or other requirements.</p>

                <p>By law we have to keep basic information about our customers (including contact, identity, financial and transaction data) for ten years after they cease being customers.</p>

                <p>In some circumstances you can ask us to delete your data: see your Legal rights below for further information.</p>

                <p>In some circumstances we will anonymise your personal data (so that it can no longer be associated with you) for research or statistical purposes, in which case we may use this information indefinitely without further notice to you.</p>

                <h2 id="legal-rights">9. Your Legal Rights</h2>

                <p>Under certain circumstances, you have rights under data protection laws in relation to your personal data. Please contact us at <a href="mailto:dpo@jeton.com">dpo@jeton.com</a> in order to find out more about these rights, which are given below:</p>

                <ul>
                  <li>Request access to your personal data</li>
                  <li>Request correction of your personal data</li>
                  <li>Request erasure of your personal data</li>
                  <li>Object to processing of your personal data</li>
                  <li>Request restriction of processing your personal data</li>
                  <li>Request transfer of your personal data</li>
                  <li>Right to withdraw consent</li>
                </ul>

                <h3>9.1 No fee usually required</h3>

                <p>You will not have to pay a fee to access your personal data (or to exercise any of the other rights). However, we may charge a reasonable fee if your request is clearly unfounded, repetitive or excessive. Alternatively, we could refuse to comply with your request in these circumstances.</p>

                <h3>9.2 What we may need from you</h3>

                <p>We may need to request specific information from you to help us confirm your identity and ensure your right to access your personal data (or to exercise any of your other rights). This is a security measure to ensure that personal data is not disclosed to any person who has no right to receive it. We may also contact you to ask you for further information in relation to your request to speed up our response.</p>

                <h3>9.3 Time limit to respond</h3>

                <p>We try to respond to all legitimate requests within one month. Occasionally it could take us longer than a month if your request is particularly complex or you have made a number of requests. In this case, we will notify you and keep you updated.</p>

                <h2 id="merchant">10. Merchant Information and Confidentiality</h2>

                <p>We gather, use and may disclose data on our merchant accounts. When a merchant registers for a iBnk App Account, they are required to provide information about their business in order to perform relevant credit and risk assessments. This includes collecting information about merchant{"'"}s key controllers, the directors, partners, and shareholders and confidential information. iBnk shall use your Confidential Information only for the purposes of the evaluation set out in the Terms and Conditions and privacy policy and not for any other commercial or operational purpose, nor in connection with any similar project undertaken by it, nor in any manner detrimental to you, its affiliates or their respective representatives. In addition to these specific obligations, iBnk shall protect and safeguard your confidential information with at least the same degree of care with which it protects and safeguards its own confidential information.</p>

                <p>By accepting the Terms and Conditions and privacy policy, you also agree that you shall not use or disclose iBnk{"'"}s Confidential Information other than the way iBnk uses or discloses Your Confidential Information.</p>

                <p>This information is used to verify our merchants and their key controllers. This includes verifying certain data provided by our merchants and reviewing their eligibility to use our product and services. Third party partners may be used to validate the information provided by you at account registration.</p>

                <p>iBnk reserves the right to periodically review merchant accounts. This may involve the request of a credit reference from a credit or fraud agency on any merchant account. As part of this review iBnk reserves the right to close an account based on the information found.</p>

                <p>For different merchant accounts, we may collect information about a merchant{"'"}s business and online profile in order to review a merchant{"'"}s size, customer base, and expected transactional activity.</p>

                <h2 id="glossary">11. Glossary Lawful Basis</h2>

                <p><strong>Legitimate Interest</strong> means the interest of our business in conducting and managing our business to enable us to give you the best service/product and the best and most secure experience. We make sure we consider and balance any potential impact on you (both positive and negative) and your rights before we process your personal data for our legitimate interests. We do not use your personal data for activities where our interests are overridden by the impact on you (unless we have your consent or are otherwise required or permitted to by law). You can obtain further information about how we assess our legitimate interests against any potential impact on you in respect of specific activities by contacting us.</p>

                <p><strong>Performance of Contract</strong> means processing your data where it is necessary for the performance of a contract to which you are a party or to take steps at your request before entering into such a contract. Comply with a legal obligation means processing your personal data where it is necessary for compliance with a legal obligation that we are subject to.</p>

                <h3>11.1 Third Parties</h3>

                <h3>11.1.1 External Third Parties</h3>

                <ul>
                  <li>Service and technology providers acting as processors based in or outside EEA who provide IT and system administration services.</li>
                  <li>Professional advisers acting as processors or joint controllers including lawyers, bankers, auditors and insurers based in third countries who provide consultancy, banking, legal, insurance and accounting services.</li>
                  <li>Regulators and other authorities acting as processors or joint controllers based in or outside of EEA who require reporting of processing activities in certain circumstances.</li>
                </ul>

                <h3>11.2 Your Legal Rights</h3>

                <p>You have the right to:</p>

                <p><strong>Request access</strong> to your personal data (commonly known as a &quot;data subject access request&quot;). This enables you to receive a copy of the personal data we hold about you and to check that we are lawfully processing it.</p>

                <p><strong>Request correction</strong> of the personal data that we hold about you. This enables you to have any incomplete or inaccurate data we hold about you corrected, though we may need to verify the accuracy of the new data you provide to us.</p>

                <p><strong>Request erasure</strong> of your personal data. This enables you to ask us to delete or remove personal data where there is no good reason for us continuing to process it. You also have the right to ask us to delete or remove your personal data where you have successfully exercised your right to object to processing (see below), where we may have processed your information unlawfully or where we are required to erase your personal data to comply with local law. Note, however, that we may not always be able to comply with your request of erasure for specific legal reasons which will be notified to you, if applicable, at the time of your request.</p>

                <p><strong>Object to processing</strong> of your personal data where we are relying on a legitimate interest (or those of a third party) and there is something about your particular situation which makes you want to object to processing on this ground as you feel it impacts on your fundamental rights and freedoms. You also have the right to object where we are processing your personal data for direct marketing purposes. In some cases, we may demonstrate that we have compelling legitimate grounds to process your information which override your rights and freedoms.</p>

                <p><strong>Request restriction of processing</strong> of your personal data. This enables you to ask us to suspend the processing of your personal data in the following scenarios:</p>

                <ul>
                  <li>If you want us to establish the data{"'"}s accuracy.</li>
                  <li>Where our use of the data is unlawful, but you do not want us to erase it.</li>
                  <li>Where you need us to hold the data even if we no longer require it as you need it to establish, exercise or defend legal rights.</li>
                  <li>You have objected to our use of your data, but we need to verify whether we have overriding legitimate grounds to use your data.</li>
                </ul>

                <p><strong>Request the transfer</strong> of your personal data to you or to a third party. We will provide to you, or a third party you have chosen, your personal data in a structured, commonly used, machine-readable format. Note that this right only applies to automated information which you initially provided consent for us to use or where we used the information to perform a contract with you.</p>

                <p><strong>Withdraw consent at any time</strong> where we are relying on consent to process your personal data. However, this will not affect the lawfulness of any processing carried out before you withdraw your consent. If you withdraw your consent, we may not be able to provide certain products or services to you. We will advise you if this is the case at the time you withdraw your consent.</p>

                <h3>11.3 Changes to this privacy statement</h3>

                <p>We may update this Privacy Statement from time to time by publishing a new version on our website. You should check this page occasionally to ensure You are happy with any changes. If the changes are substantial, we may notify you of changes by email.</p>

                <h3>11.4 Contact information</h3>

                <p>Further information and/or queries and/or requests regarding the processing of Your personal data and any of Your rights with respect to Your personal data can be requested by contacting us in writing as follows:</p>

                <p>By email: <a href="mailto:dpo@jeton.com">dpo@jeton.com</a></p>

                <p>By phone: +35725588665</p>

                <p>By post: Vashiotis Seafront Offices 3107, 28 October Ave 364, Office no: 402, Limassol, Cyprus</p>

              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
