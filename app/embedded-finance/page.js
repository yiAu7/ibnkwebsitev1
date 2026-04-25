export const metadata = {
  title: 'iBnk – Embedded Finance & API Payments',
  description:
    'Embed cross-border payments, multi-currency accounts, FX settlement, and digital asset infrastructure into your product via a single API. Go live in days, not months.',
};

export default function EmbeddedFinancePage() {
  return (
    <>
      <style
        dangerouslySetInnerHTML={{
          __html: `
            .ef-section { padding: var(--120-64) 0; }
            .ef-segment-card {
              border-radius: clamp(16px, 11.242px + 100vw * 0.0122, 24px);
              padding: clamp(24px, 16.863px + 100vw * 0.0183, 40px);
              display: flex;
              flex-direction: column;
              gap: 16px;
              height: 100%;
            }
            .ef-segment-card.s1 { background: #f8f3f0; }
            .ef-segment-card.s2 { background: #f0f4f8; }
            .ef-segment-card.s3 { background: #1a1a1a; color: #fff; }
            .ef-segment-card.s4 { background: #f73b20; color: #fff; }
            .ef-feature-card {
              border: 1.5px solid rgba(247,59,32,0.15);
              border-radius: clamp(16px, 11.242px + 100vw * 0.0122, 24px);
              padding: clamp(24px, 16.863px + 100vw * 0.0183, 40px);
              height: 100%;
              transition: border-color 0.25s ease;
            }
            .ef-feature-card:hover { border-color: rgba(247,59,32,0.4); }
            .ef-step {
              border-top: 2px solid #f73b20;
              padding-top: 24px;
            }
          `,
        }}
      />

      {/* ===== HERO ===== */}
      <header className="_common-header" data-layout="full">
        <div className="background absolute inset-0" style={{ backgroundColor: '#f73b20' }}></div>
        <div className="g-row main-row color-white relative">
          <div className="g-col xxl-10 md-12 sm-14 xs-16 hero-heading-col">
            <span style={{ fontSize: '12px', textTransform: 'uppercase', letterSpacing: '0.1em', opacity: 0.7 }}>For Businesses & Developers</span>
            <h1 className="title-2 -medium mt-16">One API. Every payment rail.</h1>
          </div>
          <div className="g-col xxl-5 xxl-offset-1 md-8 sm-14 xs-16 hero-subtitle-col">
            <p className="subhead-2 -medium">Embed cross-border payments, multi-currency accounts, FX settlement, and digital asset infrastructure into your product — without building from scratch. Go live in days, not months.</p>
            <div className="flex flex-wrap gap-24 mt-32">
              <a href="mailto:support@ibnk.xyz" className="_button no-tap-highlight" data-button data-label="true" data-tone="neutral" data-variant="primary">
                <div data-button-background></div>
                <span className="label relative body -book">
                  <span data-split-text className="whitespace-nowrap"><span className="c">V</span><span className="c">i</span><span className="c">e</span><span className="c">w</span><span className="c -space"> </span><span className="c">A</span><span className="c">P</span><span className="c">I</span><span className="c -space"> </span><span className="c">D</span><span className="c">o</span><span className="c">c</span><span className="c">s</span></span>
                  <span data-split-text className="clone whitespace-nowrap" aria-hidden="true"><span className="c">V</span><span className="c">i</span><span className="c">e</span><span className="c">w</span><span className="c -space"> </span><span className="c">A</span><span className="c">P</span><span className="c">I</span><span className="c -space"> </span><span className="c">D</span><span className="c">o</span><span className="c">c</span><span className="c">s</span></span>
                </span>
              </a>
              <a href="https://cal.com/yi-zhang-avxwyp/15min" target="_blank" className="_button no-tap-highlight" data-button data-label="true" data-tone="neutral" data-variant="outline">
                <div data-button-background></div>
                <span className="label relative body -book">
                  <span data-split-text className="whitespace-nowrap"><span className="c">B</span><span className="c">o</span><span className="c">o</span><span className="c">k</span><span className="c -space"> </span><span className="c">a</span><span className="c -space"> </span><span className="c">D</span><span className="c">e</span><span className="c">m</span><span className="c">o</span></span>
                  <span data-split-text className="clone whitespace-nowrap" aria-hidden="true"><span className="c">B</span><span className="c">o</span><span className="c">o</span><span className="c">k</span><span className="c -space"> </span><span className="c">a</span><span className="c -space"> </span><span className="c">D</span><span className="c">e</span><span className="c">m</span><span className="c">o</span></span>
                </span>
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* ===== WHAT YOU CAN BUILD ===== */}
      <section className="ef-section">
        <div className="g-row">
          <div className="g-col xxl-16 sm-16 xs-16" style={{ marginBottom: 'var(--64-24)' }}>
            <span style={{ fontSize: '12px', textTransform: 'uppercase', letterSpacing: '0.1em', color: '#f73b20', opacity: 0.7 }} data-animate="fade-in">What You Can Build</span>
            <h2 className="title-3 -medium mt-16" data-animate="fade-up">The payment infrastructure your product needs</h2>
          </div>
        </div>
        <div className="g-row" data-animate="fade-up" data-animate-stagger="">
          <div className="g-col xxl-4 md-8 sm-16 xs-16">
            <div className="ef-segment-card s1">
              <span className="caption -medium uppercase" style={{ color: '#f73b20', letterSpacing: '0.1em' }}>Fintech Products</span>
              <h3 className="title-5 -medium" style={{ color: '#1a1a1a' }}>Multi-currency wallets & transfers</h3>
              <p className="body -book" style={{ color: '#1a1a1a', opacity: 0.7, lineHeight: 1.7 }}>Launch multi-currency wallets, cross-border transfer features, or FX conversion directly inside your app. iBnk handles compliance, banking relationships, and settlement.</p>
            </div>
          </div>
          <div className="g-col xxl-4 md-8 sm-16 xs-16">
            <div className="ef-segment-card s2">
              <span className="caption -medium uppercase" style={{ color: '#477EE9', letterSpacing: '0.1em' }}>Marketplace Payments</span>
              <h3 className="title-5 -medium" style={{ color: '#1a1a1a' }}>Global payouts & reconciliation</h3>
              <p className="body -book" style={{ color: '#1a1a1a', opacity: 0.7, lineHeight: 1.7 }}>Pay out sellers, contractors, and partners in 20+ currencies. Automate payouts, reconcile in real time, and stay compliant across jurisdictions.</p>
            </div>
          </div>
          <div className="g-col xxl-4 md-8 sm-16 xs-16">
            <div className="ef-segment-card s3">
              <span className="caption -medium uppercase" style={{ opacity: 0.5, letterSpacing: '0.1em' }}>Enterprise Treasury</span>
              <h3 className="title-5 -medium">Multi-currency corporate accounts</h3>
              <p className="body -book" style={{ opacity: 0.7, lineHeight: 1.7 }}>Manage multi-currency corporate accounts, automate FX hedging, and settle payables across fiat and digital asset rails — all from a single API.</p>
            </div>
          </div>
          <div className="g-col xxl-4 md-8 sm-16 xs-16">
            <div className="ef-segment-card s4">
              <span className="caption -medium uppercase" style={{ opacity: 0.7, letterSpacing: '0.1em' }}>Neobanks & Payment Apps</span>
              <h3 className="title-5 -medium">White-label infrastructure</h3>
              <p className="body -book" style={{ opacity: 0.85, lineHeight: 1.7 }}>White-label iBnk{"'"}s infrastructure. Offer your customers real-time cross-border transfers, stablecoin payments, and compliant digital asset services under your own brand.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== API CAPABILITIES ===== */}
      <section className="ef-section" style={{ background: '#fafafa', padding: 'var(--120-64) 0' }}>
        <div className="g-row">
          <div className="g-col xxl-16 sm-16 xs-16" style={{ marginBottom: 'var(--64-24)' }}>
            <span style={{ fontSize: '12px', textTransform: 'uppercase', letterSpacing: '0.1em', color: '#f73b20', opacity: 0.7 }} data-animate="fade-in">API Capabilities</span>
            <h2 className="title-3 -medium mt-16" data-animate="fade-up">Everything in one integration</h2>
          </div>
        </div>
        <div className="g-row" data-animate="fade-up" data-animate-stagger="">
          <div className="g-col xxl-5 md-5 sm-8 xs-16">
            <div className="ef-feature-card">
              <div style={{ width: 48, height: 48, background: '#f73b20', borderRadius: 12, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 20 }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><rect x="3" y="3" width="18" height="18" rx="2" stroke="#fff" strokeWidth="1.5" /><path d="M3 9h18M9 21V9" stroke="#fff" strokeWidth="1.5" /></svg>
              </div>
              <h3 className="subhead-2 -medium">Accounts</h3>
              <p className="body -book mt-8" style={{ opacity: 0.65, lineHeight: 1.7 }}>Create and manage multi-currency accounts for your users or your business.</p>
            </div>
          </div>
          <div className="g-col xxl-5 md-5 sm-8 xs-16">
            <div className="ef-feature-card">
              <div style={{ width: 48, height: 48, background: '#f73b20', borderRadius: 12, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 20 }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
              </div>
              <h3 className="subhead-2 -medium">Payments</h3>
              <p className="body -book mt-8" style={{ opacity: 0.65, lineHeight: 1.7 }}>Initiate cross-border transfers, domestic payments, and on-chain transactions via a unified payment API.</p>
            </div>
          </div>
          <div className="g-col xxl-5 md-6 sm-8 xs-16">
            <div className="ef-feature-card">
              <div style={{ width: 48, height: 48, background: '#f73b20', borderRadius: 12, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 20 }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M17 3L7 7l10 4" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M7 17l10-4L7 9" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M7 7v10M17 3v14" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" /></svg>
              </div>
              <h3 className="subhead-2 -medium">FX & Conversion</h3>
              <p className="body -book mt-8" style={{ opacity: 0.65, lineHeight: 1.7 }}>Access real-time FX rates and convert between currencies programmatically.</p>
            </div>
          </div>
          <div className="g-col xxl-5 md-5 sm-8 xs-16">
            <div className="ef-feature-card">
              <div style={{ width: 48, height: 48, background: '#f73b20', borderRadius: 12, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 20 }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><circle cx="12" cy="7" r="4" stroke="#fff" strokeWidth="1.5" /></svg>
              </div>
              <h3 className="subhead-2 -medium">KYC / KYB</h3>
              <p className="body -book mt-8" style={{ opacity: 0.65, lineHeight: 1.7 }}>iBnk{"'"}s onboarding API handles identity verification. Compliant with FINTRAC and AUSTRAC requirements.</p>
            </div>
          </div>
          <div className="g-col xxl-5 md-5 sm-8 xs-16">
            <div className="ef-feature-card">
              <div style={{ width: 48, height: 48, background: '#f73b20', borderRadius: 12, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 20 }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
              </div>
              <h3 className="subhead-2 -medium">Compliance</h3>
              <p className="body -book mt-8" style={{ opacity: 0.65, lineHeight: 1.7 }}>Every transaction screened against global sanctions lists. AML monitoring and Travel Rule reporting built in.</p>
            </div>
          </div>
          <div className="g-col xxl-5 md-6 sm-8 xs-16">
            <div className="ef-feature-card">
              <div style={{ width: 48, height: 48, background: '#f73b20', borderRadius: 12, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 20 }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
              </div>
              <h3 className="subhead-2 -medium">Webhooks & Reporting</h3>
              <p className="body -book mt-8" style={{ opacity: 0.65, lineHeight: 1.7 }}>Real-time webhooks for payment events. Full transaction history and reconciliation via API.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== PRICING MODEL ===== */}
      <section className="ef-section">
        <div className="g-row">
          <div className="g-col xxl-7 md-9 sm-14 xs-16">
            <span style={{ fontSize: '12px', textTransform: 'uppercase', letterSpacing: '0.1em', color: '#f73b20', opacity: 0.7 }} data-animate="fade-in">Pricing</span>
            <h2 className="title-3 -medium mt-16" data-animate="fade-up">Volume-based pricing that scales with you</h2>
          </div>
          <div className="g-col xxl-7 xxl-offset-2 md-7 sm-16 xs-16" style={{ display: 'flex', alignItems: 'center' }}>
            <div>
              <p className="body -book mt-32" style={{ opacity: 0.65, lineHeight: 1.8 }}>iBnk pricing is tailored to your business. We charge a transparent per-transaction fee with volume discounts — the more you process, the lower your rate. No setup fees. No monthly minimums for qualified partners. Custom pricing available for enterprise volumes.</p>
              <div className="mt-32">
                <a href="mailto:support@ibnk.xyz" className="_button no-tap-highlight" data-button data-label="true" data-tone="orange" data-variant="primary">
                  <div data-button-background></div>
                  <span className="label relative body -book">
                    <span data-split-text className="whitespace-nowrap"><span className="c">G</span><span className="c">e</span><span className="c">t</span><span className="c -space"> </span><span className="c">a</span><span className="c -space"> </span><span className="c">Q</span><span className="c">u</span><span className="c">o</span><span className="c">t</span><span className="c">e</span></span>
                    <span data-split-text className="clone whitespace-nowrap" aria-hidden="true"><span className="c">G</span><span className="c">e</span><span className="c">t</span><span className="c -space"> </span><span className="c">a</span><span className="c -space"> </span><span className="c">Q</span><span className="c">u</span><span className="c">o</span><span className="c">t</span><span className="c">e</span></span>
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== COMPLIANCE & LICENSING ===== */}
      <section className="ef-section" style={{ background: '#f73b20', padding: 'var(--120-64) 0' }}>
        <div className="g-row">
          <div className="g-col xxl-16 sm-16 xs-16 color-white" style={{ marginBottom: 'var(--64-24)' }}>
            <span style={{ fontSize: '12px', textTransform: 'uppercase', letterSpacing: '0.1em', opacity: 0.7 }}>Compliance & Licensing</span>
            <h2 className="title-3 -medium mt-16">We carry the regulatory weight so you don{"'"}t have to</h2>
          </div>
        </div>
        <div className="g-row color-white">
          <div className="g-col xxl-8 md-9 sm-16 xs-16">
            <p className="subhead-2 -book" style={{ opacity: 0.85, lineHeight: 1.8 }}>Building financial products requires licensing, compliance frameworks, and ongoing regulatory obligations — in every jurisdiction you operate. By integrating iBnk, your product benefits from our FINTRAC and AUSTRAC registrations, our AML/CFT program, and our multi-jurisdictional compliance infrastructure — without needing your own MSB license.</p>
          </div>
          <div className="g-col xxl-7 xxl-offset-1 md-7 sm-16 xs-16" style={{ display: 'flex', alignItems: 'flex-end' }}>
            <p className="body-small" style={{ opacity: 0.6, lineHeight: 1.7, borderTop: '1.5px solid rgba(255,255,255,0.2)', paddingTop: 24 }}>Partners are responsible for their own regulatory obligations in their jurisdiction. iBnk{"'"}s compliance coverage applies to transactions processed through iBnk{"'"}s infrastructure.</p>
          </div>
        </div>
      </section>

      {/* ===== HOW TO GET STARTED ===== */}
      <section className="ef-section" style={{ background: '#fafafa', padding: 'var(--120-64) 0' }}>
        <div className="g-row">
          <div className="g-col xxl-16 sm-16 xs-16" style={{ marginBottom: 'var(--64-24)' }}>
            <span style={{ fontSize: '12px', textTransform: 'uppercase', letterSpacing: '0.1em', color: '#f73b20', opacity: 0.7 }} data-animate="fade-in">Getting Started</span>
            <h2 className="title-3 -medium mt-16" data-animate="fade-up">From sandbox to production in days</h2>
          </div>
        </div>
        <div className="g-row" data-animate="fade-up" data-animate-stagger="">
          <div className="g-col xxl-5 md-5 sm-16 xs-16">
            <div className="ef-step">
              <span className="caption -medium" style={{ color: '#f73b20' }}>Step 1</span>
              <h3 className="subhead-1 -medium mt-8">Book a call</h3>
              <p className="body -book mt-12" style={{ opacity: 0.65, lineHeight: 1.7 }}>Tell us about your use case. We{"'"}ll confirm eligibility and walk you through the integration.</p>
            </div>
          </div>
          <div className="g-col xxl-5 md-5 sm-16 xs-16">
            <div className="ef-step">
              <span className="caption -medium" style={{ color: '#f73b20' }}>Step 2</span>
              <h3 className="subhead-1 -medium mt-8">Access sandbox</h3>
              <p className="body -book mt-12" style={{ opacity: 0.65, lineHeight: 1.7 }}>Get API credentials for our sandbox environment. Test every endpoint against real payment logic without moving real money.</p>
            </div>
          </div>
          <div className="g-col xxl-5 md-6 sm-16 xs-16">
            <div className="ef-step">
              <span className="caption -medium" style={{ color: '#f73b20' }}>Step 3</span>
              <h3 className="subhead-1 -medium mt-8">Go live</h3>
              <p className="body -book mt-12" style={{ opacity: 0.65, lineHeight: 1.7 }}>Complete a KYB review, sign a partner agreement, and switch to production. Your first live transaction can happen within a week.</p>
            </div>
          </div>
        </div>
        <div className="g-row mt-64-24">
          <div className="g-col xxl-16 sm-16 xs-16">
            <div className="flex flex-wrap gap-24">
              <a href="https://cal.com/yi-zhang-avxwyp/15min" target="_blank" className="_button no-tap-highlight" data-button data-label="true" data-tone="orange" data-variant="primary">
                <div data-button-background></div>
                <span className="label relative body -book">
                  <span data-split-text className="whitespace-nowrap"><span className="c">B</span><span className="c">o</span><span className="c">o</span><span className="c">k</span><span className="c -space"> </span><span className="c">a</span><span className="c -space"> </span><span className="c">D</span><span className="c">e</span><span className="c">m</span><span className="c">o</span></span>
                  <span data-split-text className="clone whitespace-nowrap" aria-hidden="true"><span className="c">B</span><span className="c">o</span><span className="c">o</span><span className="c">k</span><span className="c -space"> </span><span className="c">a</span><span className="c -space"> </span><span className="c">D</span><span className="c">e</span><span className="c">m</span><span className="c">o</span></span>
                </span>
              </a>
              <a href="mailto:support@ibnk.xyz" className="_button no-tap-highlight" data-button data-label="true" data-tone="neutral" data-variant="outline">
                <div data-button-background></div>
                <span className="label relative body -book">
                  <span data-split-text className="whitespace-nowrap"><span className="c">R</span><span className="c">e</span><span className="c">a</span><span className="c">d</span><span className="c -space"> </span><span className="c">t</span><span className="c">h</span><span className="c">e</span><span className="c -space"> </span><span className="c">D</span><span className="c">o</span><span className="c">c</span><span className="c">s</span></span>
                  <span data-split-text className="clone whitespace-nowrap" aria-hidden="true"><span className="c">R</span><span className="c">e</span><span className="c">a</span><span className="c">d</span><span className="c -space"> </span><span className="c">t</span><span className="c">h</span><span className="c">e</span><span className="c -space"> </span><span className="c">D</span><span className="c">o</span><span className="c">c</span><span className="c">s</span></span>
                </span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ===== FINAL CTA ===== */}
      <section className="ef-section color-white" style={{ background: '#1a1a1a', textAlign: 'center' }}>
        <div className="g-row">
          <div className="g-col xxl-16 sm-16 xs-16 flex flex-col items-center" style={{ gap: 32 }}>
            <h2 className="title-2 -medium">Ready to embed payments<br />into your product?</h2>
            <p className="subhead-2 -book" style={{ opacity: 0.6, maxWidth: 560 }}>Whether you{"'"}re building a fintech app, marketplace, or enterprise platform — iBnk gives you the infrastructure to move money globally.</p>
            <div className="flex gap-24 flex-wrap justify-center">
              <a href="https://cal.com/yi-zhang-avxwyp/15min" target="_blank" className="_button no-tap-highlight" data-button data-label="true" data-tone="neutral" data-variant="primary">
                <div data-button-background></div>
                <span className="label relative body -book">
                  <span data-split-text className="whitespace-nowrap"><span className="c">B</span><span className="c">o</span><span className="c">o</span><span className="c">k</span><span className="c -space"> </span><span className="c">a</span><span className="c -space"> </span><span className="c">D</span><span className="c">e</span><span className="c">m</span><span className="c">o</span></span>
                  <span data-split-text className="clone whitespace-nowrap" aria-hidden="true"><span className="c">B</span><span className="c">o</span><span className="c">o</span><span className="c">k</span><span className="c -space"> </span><span className="c">a</span><span className="c -space"> </span><span className="c">D</span><span className="c">e</span><span className="c">m</span><span className="c">o</span></span>
                </span>
              </a>
              <a href="mailto:support@ibnk.xyz" className="_button no-tap-highlight" data-button data-label="true" data-tone="neutral" data-variant="outline">
                <div data-button-background></div>
                <span className="label relative body -book">
                  <span data-split-text className="whitespace-nowrap"><span className="c">C</span><span className="c">o</span><span className="c">n</span><span className="c">t</span><span className="c">a</span><span className="c">c</span><span className="c">t</span><span className="c -space"> </span><span className="c">U</span><span className="c">s</span></span>
                  <span data-split-text className="clone whitespace-nowrap" aria-hidden="true"><span className="c">C</span><span className="c">o</span><span className="c">n</span><span className="c">t</span><span className="c">a</span><span className="c">c</span><span className="c">t</span><span className="c -space"> </span><span className="c">U</span><span className="c">s</span></span>
                </span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
