import CtaMillion from '@/components/CtaMillion'

export const metadata = {
  title: 'iBnk – Pricing',
  description:
    'iBnk pricing is tailored to your business. Talk to us to get a custom quote for cross-border payments, digital asset custody, and agentic payment infrastructure.',
};

export default function FeesPage() {
  return (
    <>
      <style
        dangerouslySetInnerHTML={{
          __html: `
            .pricing-card {
              border: 1.5px solid rgba(247,59,32,0.15);
              border-radius: clamp(20px, 14.069px + 100vw * 0.0153, 40px);
              padding: clamp(32px, 27.242px + 100vw * 0.0122, 56px);
              transition: border-color 0.3s;
            }
            .pricing-card:hover { border-color: rgba(247,59,32,0.35); }
            .pricing-card.featured {
              background: #f73b20;
              color: #fff;
              border-color: #f73b20;
            }
            .pricing-divider {
              height: 1.5px;
              background: rgba(247,59,32,0.12);
              margin: 32px 0;
            }
            .feature-row {
              display: flex;
              gap: 12px;
              align-items: flex-start;
              padding: 12px 0;
              border-bottom: 1px solid rgba(247,59,32,0.08);
            }
            .feature-row:last-child { border-bottom: none; }
            .check {
              width: 20px; height: 20px;
              background: #f73b20;
              border-radius: 50%;
              display: flex; align-items: center; justify-content: center;
              flex-shrink: 0;
              margin-top: 2px;
            }
            .check.white { background: rgba(255,255,255,0.25); }
            .faq-item {
              border-bottom: 1.5px solid rgba(247,59,32,0.12);
              padding: 24px 0;
            }
            .faq-item:first-child { border-top: 1.5px solid rgba(247,59,32,0.12); }
          `,
        }}
      />

      {/* ===== HERO ===== */}
      <header className="_common-header" data-layout="full">
        <div className="background absolute inset-0" style={{ backgroundColor: '#f73b20' }}></div>
        <div className="g-row main-row color-white relative">
          <div className="g-col xxl-10 md-12 sm-14 xs-16 hero-heading-col">
            <h1 className="title-2 -medium">Pricing built<br />for your business</h1>
          </div>
          <div className="g-col xxl-5 xxl-offset-1 md-8 sm-14 xs-16 hero-subtitle-col">
            <p className="subhead-2 -medium">iBnk pricing is tailored to your use case — whether you{"'"}re processing remittances, running business payments, or building agentic AI systems. Book a 15-minute call and we{"'"}ll put together a custom quote.</p>
          </div>
        </div>
      </header>

      {/* ===== PRICING TIERS ===== */}
      <section style={{ padding: 'var(--120-64) 0' }}>
        <div className="g-row">
          <div className="g-col xxl-16 sm-16 xs-16" style={{ marginBottom: 'var(--64-24)' }}>
            <h2 className="title-3 -medium" data-animate="fade-up">Three ways to use iBnk</h2>
            <p className="subhead-2 -book mt-16" style={{ opacity: 0.65, maxWidth: '600px' }}>All plans include full AML/CFT compliance infrastructure, KYC onboarding, and multi-rail smart routing. Pricing is volume-based — the more you process, the better the rate.</p>
          </div>
        </div>

        <div className="g-row" style={{ alignItems: 'stretch' }} data-animate="fade-up" data-animate-stagger="">

          {/* Individual */}
          <div className="g-col xxl-5 md-5 sm-16 xs-16">
            <div className="pricing-card" style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
              <span style={{ fontSize: '12px', textTransform: 'uppercase', letterSpacing: '0.1em', opacity: 0.5 }}>For Individuals</span>
              <h3 className="title-4 -medium mt-12">Remittance</h3>
              <p className="body -book mt-12" style={{ opacity: 0.65 }}>Cross-border transfers for individuals and diaspora communities. Send money home with transparent pricing.</p>
              <div className="pricing-divider"></div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
                <div className="feature-row">
                  <div className="check"><svg width="12" height="12" viewBox="0 0 12 12"><path d="M2 6l3 3 5-5" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg></div>
                  <span className="body-small">Personal multi-currency account</span>
                </div>
                <div className="feature-row">
                  <div className="check"><svg width="12" height="12" viewBox="0 0 12 12"><path d="M2 6l3 3 5-5" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg></div>
                  <span className="body-small">Cross-border fiat transfers</span>
                </div>
                <div className="feature-row">
                  <div className="check"><svg width="12" height="12" viewBox="0 0 12 12"><path d="M2 6l3 3 5-5" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg></div>
                  <span className="body-small">KYC-verified onboarding</span>
                </div>
                <div className="feature-row">
                  <div className="check"><svg width="12" height="12" viewBox="0 0 12 12"><path d="M2 6l3 3 5-5" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg></div>
                  <span className="body-small">Smart routing (best rate selection)</span>
                </div>
              </div>
              <div style={{ marginTop: 'auto', paddingTop: '32px' }}>
                <a href="https://cal.com/yi-zhang-avxwyp/15min" target="_blank" className="_button no-tap-highlight w-full" data-button data-label="true" data-tone="neutral" data-variant="outline" style={{ width: '100%', justifyContent: 'center' }}>
                  <div data-button-background></div>
                  <span className="label relative body -book">
                    <span data-split-text className="whitespace-nowrap"><span className="c">G</span><span className="c">e</span><span className="c">t</span><span className="c -space"> </span><span className="c">a</span><span className="c -space"> </span><span className="c">Q</span><span className="c">u</span><span className="c">o</span><span className="c">t</span><span className="c">e</span></span>
                    <span data-split-text className="clone whitespace-nowrap" aria-hidden="true"><span className="c">G</span><span className="c">e</span><span className="c">t</span><span className="c -space"> </span><span className="c">a</span><span className="c -space"> </span><span className="c">Q</span><span className="c">u</span><span className="c">o</span><span className="c">t</span><span className="c">e</span></span>
                  </span>
                </a>
              </div>
            </div>
          </div>

          {/* Business (Featured) */}
          <div className="g-col xxl-6 md-6 sm-16 xs-16">
            <div className="pricing-card featured" style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '4px' }}>
                <span style={{ fontSize: '12px', textTransform: 'uppercase', letterSpacing: '0.1em', opacity: 0.7 }}>For Businesses</span>
                <span style={{ fontSize: '11px', background: 'rgba(255,255,255,0.2)', borderRadius: '100px', padding: '2px 10px', letterSpacing: '0.05em' }}>Most Popular</span>
              </div>
              <h3 className="title-4 -medium mt-8">Business {"&"} API</h3>
              <p className="body -book mt-12" style={{ opacity: 0.8 }}>Embedded finance and API-driven payments for companies needing scale, multi-currency accounts, and FX settlement.</p>
              <div className="pricing-divider" style={{ background: 'rgba(255,255,255,0.2)' }}></div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
                <div className="feature-row" style={{ borderColor: 'rgba(255,255,255,0.12)' }}>
                  <div className="check white"><svg width="12" height="12" viewBox="0 0 12 12"><path d="M2 6l3 3 5-5" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg></div>
                  <span className="body-small">Everything in Remittance</span>
                </div>
                <div className="feature-row" style={{ borderColor: 'rgba(255,255,255,0.12)' }}>
                  <div className="check white"><svg width="12" height="12" viewBox="0 0 12 12"><path d="M2 6l3 3 5-5" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg></div>
                  <span className="body-small">Single API integration</span>
                </div>
                <div className="feature-row" style={{ borderColor: 'rgba(255,255,255,0.12)' }}>
                  <div className="check white"><svg width="12" height="12" viewBox="0 0 12 12"><path d="M2 6l3 3 5-5" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg></div>
                  <span className="body-small">Commercial accounts {"&"} pooled accounts</span>
                </div>
                <div className="feature-row" style={{ borderColor: 'rgba(255,255,255,0.12)' }}>
                  <div className="check white"><svg width="12" height="12" viewBox="0 0 12 12"><path d="M2 6l3 3 5-5" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg></div>
                  <span className="body-small">FX {"&"} stablecoin settlement</span>
                </div>
                <div className="feature-row" style={{ borderColor: 'rgba(255,255,255,0.12)' }}>
                  <div className="check white"><svg width="12" height="12" viewBox="0 0 12 12"><path d="M2 6l3 3 5-5" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg></div>
                  <span className="body-small">KYB onboarding {"&"} enhanced due diligence</span>
                </div>
                <div className="feature-row" style={{ borderColor: 'rgba(255,255,255,0.12)' }}>
                  <div className="check white"><svg width="12" height="12" viewBox="0 0 12 12"><path d="M2 6l3 3 5-5" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg></div>
                  <span className="body-small">Volume-based pricing</span>
                </div>
              </div>
              <div style={{ marginTop: 'auto', paddingTop: '32px' }}>
                <a href="https://cal.com/yi-zhang-avxwyp/15min" target="_blank" className="_button no-tap-highlight" data-button data-label="true" data-tone="neutral" data-variant="primary" style={{ width: '100%', justifyContent: 'center' }}>
                  <div data-button-background></div>
                  <span className="label relative body -book">
                    <span data-split-text className="whitespace-nowrap"><span className="c">B</span><span className="c">o</span><span className="c">o</span><span className="c">k</span><span className="c -space"> </span><span className="c">a</span><span className="c -space"> </span><span className="c">D</span><span className="c">e</span><span className="c">m</span><span className="c">o</span></span>
                    <span data-split-text className="clone whitespace-nowrap" aria-hidden="true"><span className="c">B</span><span className="c">o</span><span className="c">o</span><span className="c">k</span><span className="c -space"> </span><span className="c">a</span><span className="c -space"> </span><span className="c">D</span><span className="c">e</span><span className="c">m</span><span className="c">o</span></span>
                  </span>
                </a>
              </div>
            </div>
          </div>

          {/* Agentic */}
          <div className="g-col xxl-5 md-5 sm-16 xs-16">
            <div className="pricing-card color-white" style={{ height: '100%', display: 'flex', flexDirection: 'column', background: '#1a1a1a', color: '#fff', borderColor: '#1a1a1a' }}>
              <span style={{ fontSize: '12px', textTransform: 'uppercase', letterSpacing: '0.1em', opacity: 0.5 }}>For AI Builders</span>
              <h3 className="title-4 -medium mt-12">Agentic</h3>
              <p className="body -book mt-12" style={{ opacity: 0.65 }}>Payment infrastructure for AI agents. Programmatic payment initiation, multi-venue routing, and autonomous settlement with full compliance.</p>
              <div className="pricing-divider" style={{ background: 'rgba(255,255,255,0.1)' }}></div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
                <div className="feature-row" style={{ borderColor: 'rgba(255,255,255,0.08)' }}>
                  <div className="check"><svg width="12" height="12" viewBox="0 0 12 12"><path d="M2 6l3 3 5-5" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg></div>
                  <span className="body-small">Everything in Business</span>
                </div>
                <div className="feature-row" style={{ borderColor: 'rgba(255,255,255,0.08)' }}>
                  <div className="check"><svg width="12" height="12" viewBox="0 0 12 12"><path d="M2 6l3 3 5-5" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg></div>
                  <span className="body-small">Agentic payment initiation API</span>
                </div>
                <div className="feature-row" style={{ borderColor: 'rgba(255,255,255,0.08)' }}>
                  <div className="check"><svg width="12" height="12" viewBox="0 0 12 12"><path d="M2 6l3 3 5-5" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg></div>
                  <span className="body-small">Autonomous multi-rail routing</span>
                </div>
                <div className="feature-row" style={{ borderColor: 'rgba(255,255,255,0.08)' }}>
                  <div className="check"><svg width="12" height="12" viewBox="0 0 12 12"><path d="M2 6l3 3 5-5" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg></div>
                  <span className="body-small">Transaction attribution {"&"} audit trail</span>
                </div>
                <div className="feature-row" style={{ borderColor: 'rgba(255,255,255,0.08)' }}>
                  <div className="check"><svg width="12" height="12" viewBox="0 0 12 12"><path d="M2 6l3 3 5-5" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg></div>
                  <span className="body-small">Digital asset custody access</span>
                </div>
              </div>
              <div style={{ marginTop: 'auto', paddingTop: '32px' }}>
                <a href="https://cal.com/yi-zhang-avxwyp/15min" target="_blank" className="_button no-tap-highlight" data-button data-label="true" data-tone="neutral" data-variant="outline" style={{ width: '100%', justifyContent: 'center' }}>
                  <div data-button-background></div>
                  <span className="label relative body -book">
                    <span data-split-text className="whitespace-nowrap"><span className="c">T</span><span className="c">a</span><span className="c">l</span><span className="c">k</span><span className="c -space"> </span><span className="c">t</span><span className="c">o</span><span className="c -space"> </span><span className="c">U</span><span className="c">s</span></span>
                    <span data-split-text className="clone whitespace-nowrap" aria-hidden="true"><span className="c">T</span><span className="c">a</span><span className="c">l</span><span className="c">k</span><span className="c -space"> </span><span className="c">t</span><span className="c">o</span><span className="c -space"> </span><span className="c">U</span><span className="c">s</span></span>
                  </span>
                </a>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ===== WHY CUSTOM PRICING ===== */}
      <section style={{ padding: 'var(--120-64) 0', background: '#fafafa' }}>
        <div className="g-row">
          <div className="g-col xxl-8 md-10 sm-14 xs-16">
            <h2 className="title-3 -medium" data-animate="fade-up">Why custom pricing?</h2>
            <p className="body -book mt-24" style={{ opacity: 0.65, lineHeight: 1.7 }}>Payment infrastructure pricing isn{"'"}t one-size-fits-all. Your volume, corridors, currencies, and compliance needs are unique — so your pricing should be too.</p>
            <p className="body -book mt-16" style={{ opacity: 0.65, lineHeight: 1.7 }}>iBnk works with you to structure a pricing model based on your transaction volume, the payment rails you use, and the jurisdictions you operate in. Most enterprise clients see significant savings compared to traditional payment processors.</p>
          </div>
        </div>

        <div className="g-row mt-64-24" data-animate="fade-up" data-animate-stagger="">
          <div className="g-col xxl-4 md-5 sm-8 xs-16">
            <div style={{ borderTop: '2px solid #f73b20', paddingTop: '24px' }}>
              <h3 className="subhead-2 -medium">Volume discounts</h3>
              <p className="body -book mt-12" style={{ opacity: 0.65 }}>The more you process, the lower your per-transaction cost. Pricing scales with your business.</p>
            </div>
          </div>
          <div className="g-col xxl-4 md-5 sm-8 xs-16">
            <div style={{ borderTop: '2px solid #f73b20', paddingTop: '24px' }}>
              <h3 className="subhead-2 -medium">Rail-based pricing</h3>
              <p className="body -book mt-12" style={{ opacity: 0.65 }}>Fiat and digital asset rails are priced separately. Use what you need, pay for what you use.</p>
            </div>
          </div>
          <div className="g-col xxl-4 md-6 sm-8 xs-16">
            <div style={{ borderTop: '2px solid #f73b20', paddingTop: '24px' }}>
              <h3 className="subhead-2 -medium">Corridor pricing</h3>
              <p className="body -book mt-12" style={{ opacity: 0.65 }}>Different corridors have different costs. We price each route fairly based on the settlement infrastructure.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== FAQ ===== */}
      <section style={{ padding: 'var(--120-64) 0' }}>
        <div className="g-row">
          <div className="g-col xxl-16 sm-16 xs-16" style={{ marginBottom: '48px' }}>
            <h2 className="title-3 -medium" data-animate="fade-up">Frequently asked questions</h2>
          </div>
        </div>
        <div className="g-row">
          <div className="g-col xxl-10 md-12 sm-16 xs-16" data-animate="fade-up">
            <div className="faq-item">
              <h3 className="subhead-2 -medium">How quickly can I get a quote?</h3>
              <p className="body -book mt-12" style={{ opacity: 0.65 }}>Book a 15-minute call and we{"'"}ll have a custom proposal ready within 24 hours. For straightforward use cases, we can often quote on the call itself.</p>
            </div>
            <div className="faq-item">
              <h3 className="subhead-2 -medium">Are there any setup or onboarding fees?</h3>
              <p className="body -book mt-12" style={{ opacity: 0.65 }}>Onboarding costs vary by customer tier and compliance requirements. We{"'"}ll be transparent about any one-time costs during the proposal stage.</p>
            </div>
            <div className="faq-item">
              <h3 className="subhead-2 -medium">What currencies and corridors do you support?</h3>
              <p className="body -book mt-12" style={{ opacity: 0.65 }}>We support major fiat currencies across North America and Australia, with digital asset settlement available globally. Corridor coverage is expanding — contact us for specific corridor availability.</p>
            </div>
            <div className="faq-item">
              <h3 className="subhead-2 -medium">Is there a minimum volume requirement?</h3>
              <p className="body -book mt-12" style={{ opacity: 0.65 }}>For individual remittance there is no minimum. For Business and Agentic tiers, minimum volumes apply — we{"'"}ll discuss these during the onboarding call.</p>
            </div>
            <div className="faq-item">
              <h3 className="subhead-2 -medium">What{"'"}s included in the compliance infrastructure?</h3>
              <p className="body -book mt-12" style={{ opacity: 0.65 }}>All plans include AML/CFT transaction monitoring, KYC/KYB onboarding, sanctions screening (OFAC, UN, HMT, OSFI), and blockchain wallet screening for digital asset transactions. Compliance is built into the infrastructure — not an add-on.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section style={{ padding: 'var(--120-64) 0', background: '#f73b20', textAlign: 'center' }}>
        <div className="g-row">
          <div className="g-col xxl-16 sm-16 xs-16 flex flex-col items-center" style={{ gap: '32px' }}>
            <h2 className="title-3 -medium color-white">Ready to get started?</h2>
            <p className="subhead-2 -book" style={{ color: 'rgba(255,255,255,0.8)', maxWidth: '480px' }}>Book a 15-minute intro call. No commitment, no sales pitch — just a conversation about your payment needs.</p>
            <a href="https://cal.com/yi-zhang-avxwyp/15min" target="_blank" className="_button no-tap-highlight" data-button data-label="true" data-tone="neutral" data-variant="primary">
              <div data-button-background></div>
              <span className="label relative body -book">
                <span data-split-text className="whitespace-nowrap"><span className="c">B</span><span className="c">o</span><span className="c">o</span><span className="c">k</span><span className="c -space"> </span><span className="c">a</span><span className="c -space"> </span><span className="c">1</span><span className="c">5</span><span className="c">-</span><span className="c">M</span><span className="c">i</span><span className="c">n</span><span className="c -space"> </span><span className="c">C</span><span className="c">a</span><span className="c">l</span><span className="c">l</span></span>
                <span data-split-text className="clone whitespace-nowrap" aria-hidden="true"><span className="c">B</span><span className="c">o</span><span className="c">o</span><span className="c">k</span><span className="c -space"> </span><span className="c">a</span><span className="c -space"> </span><span className="c">1</span><span className="c">5</span><span className="c">-</span><span className="c">M</span><span className="c">i</span><span className="c">n</span><span className="c -space"> </span><span className="c">C</span><span className="c">a</span><span className="c">l</span><span className="c">l</span></span>
              </span>
            </a>
          </div>
        </div>
      </section>

      <CtaMillion />
    </>
  );
}
