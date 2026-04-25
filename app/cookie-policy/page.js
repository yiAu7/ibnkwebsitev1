'use client';

import { useEffect } from 'react';

export default function CookiePolicyPage() {
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
            <h1 className="title-2 -medium">Cookie Policy</h1>
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
                <a href="#what-are-cookies" data-active="true">What Are Cookies?</a>
                <a href="#how-we-use">How We Use Cookies</a>
                <a href="#types">Types of Cookies</a>
                <a href="#third-party">Third-Party Cookies</a>
                <a href="#managing">Managing Cookies</a>
                <a href="#contact">Contact</a>
              </nav>
            </div>

            {/* Content */}
            <div className="g-col xxl-10 md-10 sm-16 xs-16">
              <div className="_policy-content">

                <h2 id="what-are-cookies">What Are Cookies?</h2>

                <p>Cookies are small text files that are placed on your device (computer, smartphone, or tablet) when you visit a website. They are widely used to make websites work more efficiently and to provide information to website operators.</p>

                <p>iBnk uses cookies and similar technologies (such as web beacons and local storage) on its website, ibnk.xyz. This Cookie Policy explains what cookies we use, why we use them, and how you can control them.</p>

                <p>This policy should be read alongside our <a href="/privacy-policy">Privacy Policy</a>, which provides further detail on how we handle personal data.</p>

                <h2 id="how-we-use">How We Use Cookies</h2>

                <p>We use cookies to:</p>

                <p>Ensure our website functions correctly and securely; remember your preferences and settings; understand how visitors use our website so we can improve it; analyse traffic and usage patterns; and support our security and fraud prevention measures.</p>

                <p>We do not use cookies to serve targeted advertising, and we do not sell cookie-derived data to third parties.</p>

                <h2 id="types">Types of Cookies We Use</h2>

                <h3>Strictly Necessary Cookies</h3>

                <p>These cookies are essential for the website to function and cannot be switched off. They are usually set in response to actions you take, such as setting your cookie preferences. Without these cookies, core website functionality would not work. No personal data is collected through strictly necessary cookies beyond what is required for security and session integrity.</p>

                <h3>Performance and Analytics Cookies</h3>

                <p>These cookies help us understand how visitors interact with our website by collecting information about pages visited, time spent, and any errors encountered. All data collected is aggregated and anonymous. We use this information to improve the performance and user experience of our website.</p>

                <p>We may use analytics tools such as Google Analytics or similar services. These tools may set their own cookies. For more information on how Google Analytics processes data, visit <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">policies.google.com/privacy</a>.</p>

                <h3>Functional Cookies</h3>

                <p>These cookies allow us to remember your preferences (such as language or region) and provide a more personalised experience. They may be set by us or by third-party providers whose services we have added to our pages. If you disable these cookies, some or all of these features may not function properly.</p>

                <h3>Security Cookies</h3>

                <p>We use cookies to support our security measures, including fraud detection and prevention. These cookies help us identify suspicious activity and protect our website and users from unauthorised access.</p>

                <h2 id="third-party">Third-Party Cookies</h2>

                <p>Some pages on our website may include embedded content or links to third-party services (such as scheduling tools or analytics platforms). These third parties may place their own cookies on your device when you interact with their content. We do not control these third-party cookies and are not responsible for them. We encourage you to review the privacy and cookie policies of any third-party services you use.</p>

                <p>Third parties whose services may result in cookies on your device include: Google Analytics (website analytics); Cal.com (meeting scheduling); and LinkedIn (social sharing).</p>

                <h2 id="managing">Managing and Controlling Cookies</h2>

                <p>You have the right to decide whether to accept or reject cookies (other than strictly necessary cookies). You can exercise your preferences in the following ways:</p>

                <p><strong>Browser settings</strong> — most web browsers allow you to view, manage, and delete cookies through their settings. You can typically find these options in the &quot;Settings&quot;, &quot;Privacy&quot;, or &quot;Security&quot; section of your browser. Note that disabling cookies may affect the functionality of some parts of our website.</p>

                <p>For guidance on managing cookies in common browsers:</p>

                <p>Google Chrome: Settings &rarr; Privacy and Security &rarr; Cookies and other site data<br />
                Safari: Preferences &rarr; Privacy<br />
                Firefox: Options &rarr; Privacy & Security &rarr; Cookies and Site Data<br />
                Microsoft Edge: Settings &rarr; Cookies and site permissions</p>

                <p><strong>Opt-out tools</strong> — for analytics cookies, you can opt out of Google Analytics tracking at <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer">tools.google.com/dlpage/gaoptout</a>.</p>

                <p>Please note that if you delete or block cookies, you may need to re-apply your preferences on each visit to our website.</p>

                <h2 id="contact">Contact</h2>

                <p>If you have any questions about our use of cookies or this Cookie Policy, please contact us:</p>

                <p><strong>Email:</strong> <a href="mailto:support@ibnk.xyz">support@ibnk.xyz</a><br />
                <strong>Address:</strong> IBNK VAULT INC., 6060 Silver Drive, Suite 300, Burnaby, BC V5H 0H5, Canada</p>

                <p>We may update this Cookie Policy from time to time to reflect changes in our practices or applicable law. Any changes will be published on this page with an updated effective date.</p>

              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
