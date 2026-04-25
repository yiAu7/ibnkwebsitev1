import CtaMillion from '@/components/CtaMillion'

export const metadata = {
  title: 'iBnk – About Us',
  description:
    'iBnk is building the payment infrastructure for the AI era — cross-border payments, digital asset custody, and agentic payment rails for humans, businesses, and AI agents.',
};

export default function AboutPage() {
  return (
    <>
      <style
        dangerouslySetInnerHTML={{
          __html: `
            .about-section { padding: var(--120-64) 0; }
            .value-card { border-top: 2px solid #f73b20; padding-top: 24px; }
            .reg-row {
              display: flex;
              gap: 8px;
              align-items: flex-start;
              padding: 10px 0;
              border-bottom: 1px solid rgba(247,59,32,0.08);
              font-size: 14px;
            }
            .reg-row:last-child { border-bottom: none; }
          `,
        }}
      />

      {/* ===== HERO ===== */}
      <header className="_common-header" data-layout="full">
        <div className="background absolute inset-0" style={{ backgroundColor: '#f73b20' }}></div>
        <div className="g-row main-row color-white relative">
          <div className="g-col xxl-10 md-12 sm-14 xs-16 hero-heading-col">
            <h1 className="title-2 -medium">Building the payment infrastructure for the AI era</h1>
          </div>
          <div className="g-col xxl-5 xxl-offset-1 md-8 sm-14 xs-16 hero-subtitle-col">
            <p className="subhead-2 -medium">iBnk connects the financial rails of today — fiat banking networks — with the settlement infrastructure of tomorrow — blockchain and digital assets — into one compliant, intelligent payment platform.</p>
          </div>
        </div>
      </header>

      {/* ===== MISSION ===== */}
      <section className="about-section">
        <div className="g-row">
          <div className="g-col xxl-7 md-9 sm-14 xs-16">
            <span style={{ fontSize: '12px', textTransform: 'uppercase', letterSpacing: '0.1em', color: '#f73b20', opacity: 0.7 }} data-animate="fade-in">Our Mission</span>
            <h2 className="title-3 -medium mt-16" data-animate="fade-up">Money should move as fast as information</h2>
          </div>
          <div className="g-col xxl-7 xxl-offset-2 md-7 sm-16 xs-16" style={{ display: 'flex', alignItems: 'center' }}>
            <div data-animate="fade-up">
              <p className="body -book mt-32" style={{ opacity: 0.65, lineHeight: 1.8 }}>The global payment system is fragmented. Cross-border transfers are slow, expensive, and opaque. And as AI begins to act autonomously in the economy, the existing payment rails weren{"'"}t built to handle it.</p>
              <p className="body -book mt-24" style={{ opacity: 0.65, lineHeight: 1.8 }}>iBnk is building the infrastructure layer that fixes this — a dual-rail payment platform that routes transactions through whichever path is fastest, cheapest, and most compliant, whether that{"'"}s traditional banking or blockchain settlement.</p>
              <p className="body -book mt-24" style={{ opacity: 0.65, lineHeight: 1.8 }}>We believe that by 2030, AI agents will be responsible for trillions of dollars in economic activity. iBnk is building the payment infrastructure that makes that possible — safely, transparently, and in full compliance with global regulation.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== VALUES ===== */}
      <section className="about-section" style={{ background: '#fafafa', padding: 'var(--120-64) 0' }}>
        <div className="g-row">
          <div className="g-col xxl-16 sm-16 xs-16" style={{ marginBottom: 'var(--64-24)' }}>
            <span style={{ fontSize: '12px', textTransform: 'uppercase', letterSpacing: '0.1em', color: '#f73b20', opacity: 0.7 }} data-animate="fade-in">Our Principles</span>
            <h2 className="title-3 -medium mt-16" data-animate="fade-up">What drives us</h2>
          </div>
        </div>
        <div className="g-row" data-animate="fade-up" data-animate-stagger="">
          <div className="g-col xxl-4 md-5 sm-8 xs-16">
            <div className="value-card">
              <h3 className="subhead-1 -medium">Compliance first</h3>
              <p className="body -book mt-12" style={{ opacity: 0.65, lineHeight: 1.7 }}>Regulation isn{"'"}t a barrier — it{"'"}s the foundation. We built our AML/CFT framework before our product, because trust is the only currency that matters in financial services.</p>
            </div>
          </div>
          <div className="g-col xxl-4 md-5 sm-8 xs-16">
            <div className="value-card">
              <h3 className="subhead-1 -medium">Radical transparency</h3>
              <p className="body -book mt-12" style={{ opacity: 0.65, lineHeight: 1.7 }}>Every transaction should be traceable. Every fee should be clear. We hold ourselves to the same standard of transparency that we demand from the financial system.</p>
            </div>
          </div>
          <div className="g-col xxl-4 md-6 sm-8 xs-16">
            <div className="value-card">
              <h3 className="subhead-1 -medium">Built for the future</h3>
              <p className="body -book mt-12" style={{ opacity: 0.65, lineHeight: 1.7 }}>We{"'"}re not patching the old system. We{"'"}re building the infrastructure that AI-native commerce will run on — multi-rail, multi-jurisdiction, and built for autonomous agents.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== WHAT WE DO ===== */}
      <section className="about-section">
        <div className="g-row">
          <div className="g-col xxl-16 sm-16 xs-16" style={{ marginBottom: 'var(--64-24)' }}>
            <span style={{ fontSize: '12px', textTransform: 'uppercase', letterSpacing: '0.1em', color: '#f73b20', opacity: 0.7 }} data-animate="fade-in">The Platform</span>
            <h2 className="title-3 -medium mt-16" data-animate="fade-up">What iBnk does</h2>
          </div>
        </div>
        <div className="g-row" data-animate="fade-up" data-animate-stagger="">
          <div className="g-col xxl-5 md-5 sm-16 xs-16">
            <div style={{ background: '#f73b20', color: '#fff', borderRadius: 'clamp(16px, 11.242px + 100vw * 0.0122, 24px)', padding: 'clamp(24px, 16.863px + 100vw * 0.0183, 40px)', height: '100%' }}>
              <span style={{ fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.1em', opacity: 0.7 }}>For Individuals</span>
              <h3 className="title-5 -medium mt-12">Cross-border remittance</h3>
              <p className="body -book mt-16" style={{ opacity: 0.85, lineHeight: 1.7 }}>Personal multi-currency accounts. Send money across borders via fiat banking networks or blockchain settlement — whichever is faster and cheaper for your corridor.</p>
            </div>
          </div>
          <div className="g-col xxl-5 md-5 sm-16 xs-16">
            <div style={{ background: '#1a1a1a', color: '#fff', borderRadius: 'clamp(16px, 11.242px + 100vw * 0.0122, 24px)', padding: 'clamp(24px, 16.863px + 100vw * 0.0183, 40px)', height: '100%' }}>
              <span style={{ fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.1em', opacity: 0.5 }}>For Businesses</span>
              <h3 className="title-5 -medium mt-12">Embedded finance {"&"} API payments</h3>
              <p className="body -book mt-16" style={{ opacity: 0.7, lineHeight: 1.7 }}>Single API access to the full iBnk payment stack. Commercial accounts, FX settlement, stablecoin rails, and KYB-compliant onboarding for fintech partners and enterprises.</p>
            </div>
          </div>
          <div className="g-col xxl-6 md-6 sm-16 xs-16">
            <div style={{ border: '1.5px solid rgba(247,59,32,0.2)', borderRadius: 'clamp(16px, 11.242px + 100vw * 0.0122, 24px)', padding: 'clamp(24px, 16.863px + 100vw * 0.0183, 40px)', height: '100%' }}>
              <span style={{ fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.1em', color: '#f73b20', opacity: 0.7 }}>For AI Builders</span>
              <h3 className="title-5 -medium mt-12">Agentic payment infrastructure</h3>
              <p className="body -book mt-16" style={{ opacity: 0.65, lineHeight: 1.7 }}>The payment layer for autonomous AI systems. API-driven payment initiation with full transaction attribution, audit trails, and compliance controls built for agentic commerce at scale.</p>
              <div style={{ marginTop: '24px', display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '8px 14px', background: 'rgba(247,59,32,0.07)', borderRadius: '100px', fontSize: '13px' }}>
                <span style={{ width: '7px', height: '7px', borderRadius: '50%', background: '#f73b20', display: 'inline-block' }}></span>
                Agentic commerce: $190B–$385B by 2030
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== REGULATORY ===== */}
      <section className="about-section" style={{ background: '#f73b20', padding: 'var(--120-64) 0' }}>
        <div className="g-row">
          <div className="g-col xxl-16 sm-16 xs-16 color-white" style={{ marginBottom: 'var(--64-24)' }}>
            <span style={{ fontSize: '12px', textTransform: 'uppercase', letterSpacing: '0.1em', opacity: 0.7 }} data-animate="fade-in">Regulatory</span>
            <h2 className="title-3 -medium mt-16" data-animate="fade-up">Regulated in Canada and Australia</h2>
            <p className="subhead-2 -book mt-24" style={{ opacity: 0.8, maxWidth: '640px' }}>iBnk operates through two licensed entities, with registrations from FINTRAC (Canada) and AUSTRAC (Australia). We are expanding our regulatory footprint to cover additional jurisdictions.</p>
          </div>
        </div>
        <div className="g-row color-white" data-animate="fade-up" data-animate-stagger="">
          <div className="g-col xxl-7 md-8 sm-16 xs-16">
            <div style={{ background: 'rgba(255,255,255,0.1)', borderRadius: '20px', padding: '32px' }}>
              <span style={{ fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.1em', opacity: 0.6 }}>Canada</span>
              <h3 className="subhead-1 -medium mt-12">IBNK VAULT INC.</h3>
              <div style={{ marginTop: '20px', display: 'flex', flexDirection: 'column', gap: 0 }}>
                <div className="reg-row" style={{ borderColor: 'rgba(255,255,255,0.12)', color: '#fff' }}>
                  <span style={{ opacity: 0.5, flexShrink: 0 }}>Incorporation</span>
                  <span style={{ marginLeft: 'auto', opacity: 0.9, textAlign: 'right' }}>BC1571168 · British Columbia</span>
                </div>
                <div className="reg-row" style={{ borderColor: 'rgba(255,255,255,0.12)', color: '#fff' }}>
                  <span style={{ opacity: 0.5, flexShrink: 0 }}>FINTRAC MSB</span>
                  <span style={{ marginLeft: 'auto', opacity: 0.9, textAlign: 'right' }}>N3000001312</span>
                </div>
                <div className="reg-row" style={{ borderColor: 'rgba(255,255,255,0.12)', color: '#fff' }}>
                  <span style={{ opacity: 0.5, flexShrink: 0 }}>Services</span>
                  <span style={{ marginLeft: 'auto', opacity: 0.9, textAlign: 'right' }}>FX · Remittance · Virtual Currency · PSP</span>
                </div>
                <div className="reg-row" style={{ borderColor: 'rgba(255,255,255,0.12)', color: '#fff' }}>
                  <span style={{ opacity: 0.5, flexShrink: 0 }}>Registered Address</span>
                  <span style={{ marginLeft: 'auto', opacity: 0.9, textAlign: 'right' }}>200–7404 King George Blvd, Surrey, BC</span>
                </div>
                <div className="reg-row" style={{ color: '#fff' }}>
                  <span style={{ opacity: 0.5, flexShrink: 0 }}>Office</span>
                  <span style={{ marginLeft: 'auto', opacity: 0.9, textAlign: 'right' }}>6060 Silver Drive, Suite 300, Burnaby, BC</span>
                </div>
              </div>
            </div>
          </div>
          <div className="g-col xxl-7 md-8 sm-16 xs-16">
            <div style={{ background: 'rgba(255,255,255,0.1)', borderRadius: '20px', padding: '32px' }}>
              <span style={{ fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.1em', opacity: 0.6 }}>Australia</span>
              <h3 className="subhead-1 -medium mt-12">Inteelifusion Pty Ltd</h3>
              <div style={{ marginTop: '20px', display: 'flex', flexDirection: 'column', gap: 0 }}>
                <div className="reg-row" style={{ borderColor: 'rgba(255,255,255,0.12)', color: '#fff' }}>
                  <span style={{ opacity: 0.5, flexShrink: 0 }}>Address</span>
                  <span style={{ marginLeft: 'auto', opacity: 0.9, textAlign: 'right' }}>525 Collins Street, Melbourne</span>
                </div>
                <div className="reg-row" style={{ borderColor: 'rgba(255,255,255,0.12)', color: '#fff' }}>
                  <span style={{ opacity: 0.5, flexShrink: 0 }}>AUSTRAC DCE</span>
                  <span style={{ marginLeft: 'auto', opacity: 0.9, textAlign: 'right' }}>DCE100905510-001</span>
                </div>
                <div className="reg-row" style={{ borderColor: 'rgba(255,255,255,0.12)', color: '#fff' }}>
                  <span style={{ opacity: 0.5, flexShrink: 0 }}>AUSTRAC Remittance</span>
                  <span style={{ marginLeft: 'auto', opacity: 0.9, textAlign: 'right' }}>IND100905510-001</span>
                </div>
                <div className="reg-row" style={{ color: '#fff' }}>
                  <span style={{ opacity: 0.5, flexShrink: 0 }}>Services</span>
                  <span style={{ marginLeft: 'auto', opacity: 0.9, textAlign: 'right' }}>Digital Currency Exchange · Remittance</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== CONTACT ===== */}
      <section className="about-section" style={{ textAlign: 'center' }}>
        <div className="g-row">
          <div className="g-col xxl-16 sm-16 xs-16 flex flex-col items-center" style={{ gap: '32px' }}>
            <h2 className="title-3 -medium">Get in touch</h2>
            <p className="subhead-2 -book" style={{ opacity: 0.65, maxWidth: '480px' }}>Whether you{"'"}re a business, developer, or investor — we{"'"}d love to hear from you.</p>
            <div className="flex gap-24 flex-wrap justify-center">
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
                  <span data-split-text className="whitespace-nowrap"><span className="c">s</span><span className="c">u</span><span className="c">p</span><span className="c">p</span><span className="c">o</span><span className="c">r</span><span className="c">t</span><span className="c">@</span><span className="c">i</span><span className="c">b</span><span className="c">n</span><span className="c">k</span><span className="c">.</span><span className="c">x</span><span className="c">y</span><span className="c">z</span></span>
                  <span data-split-text className="clone whitespace-nowrap" aria-hidden="true"><span className="c">s</span><span className="c">u</span><span className="c">p</span><span className="c">p</span><span className="c">o</span><span className="c">r</span><span className="c">t</span><span className="c">@</span><span className="c">i</span><span className="c">b</span><span className="c">n</span><span className="c">k</span><span className="c">.</span><span className="c">x</span><span className="c">y</span><span className="c">z</span></span>
                </span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <CtaMillion />
    </>
  );
}
