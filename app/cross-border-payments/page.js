export const metadata = {
  title: 'iBnk – Cross-Border Payments',
  description:
    'Send money home without the hidden fees. iBnk routes your transfer across fiat banking networks and blockchain rails — automatically choosing the fastest, cheapest path for your corridor.',
};

export default function CrossBorderPaymentsPage() {
  return (
    <>
      <style
        dangerouslySetInnerHTML={{
          __html: `
            .cbp-section { padding: var(--120-64) 0; }
            .cbp-step-number {
              width: 48px;
              height: 48px;
              border-radius: 50%;
              background: #f73b20;
              color: #fff;
              display: flex;
              align-items: center;
              justify-content: center;
              font-size: 18px;
              font-weight: 600;
              flex-shrink: 0;
            }
            .cbp-feature-card {
              border: 1.5px solid rgba(0,0,0,0.1);
              border-radius: 20px;
              padding: 32px;
              height: 100%;
              transition: border-color 0.2s ease;
            }
            .cbp-feature-card:hover {
              border-color: rgba(247,59,32,0.4);
            }
            .cbp-network-table {
              width: 100%;
              border-collapse: collapse;
            }
            .cbp-network-table th {
              text-align: left;
              padding: 14px 16px;
              border-bottom: 2px solid rgba(0,0,0,0.1);
              font-size: 13px;
              text-transform: uppercase;
              letter-spacing: 0.06em;
              opacity: 0.5;
              font-weight: 500;
            }
            .cbp-network-table td {
              padding: 16px;
              border-bottom: 1px solid rgba(0,0,0,0.06);
            }
            .cbp-network-table tr:last-child td {
              border-bottom: none;
            }
            .cbp-step-card {
              display: flex;
              gap: 24px;
              align-items: flex-start;
            }
            @media (max-width: 640px) {
              .cbp-step-card { gap: 16px; }
            }
          `,
        }}
      />

      {/* ===== HERO ===== */}
      <header className="_common-header" data-layout="full">
        <div className="background absolute inset-0" style={{ backgroundColor: '#f73b20' }}></div>
        <div className="g-row main-row color-white relative">
          <div className="g-col xxl-10 md-12 sm-14 xs-16 hero-heading-col">
            <span style={{ fontSize: '12px', textTransform: 'uppercase', letterSpacing: '0.1em', opacity: 0.7 }}>For Individuals & Diaspora</span>
            <h1 className="title-2 -medium mt-16">Send money home. Without the hidden fees.</h1>
          </div>
          <div className="g-col xxl-5 xxl-offset-1 md-8 sm-14 xs-16 hero-subtitle-col">
            <p className="subhead-2 -medium">iBnk routes your transfer across fiat banking networks and blockchain rails — automatically choosing the fastest, cheapest path for your corridor. Transparent fees. Real exchange rates.</p>
            <div className="flex flex-wrap gap-24 mt-32">
              <a href="mailto:support@ibnk.xyz" className="_button no-tap-highlight" data-button data-label="true" data-tone="neutral" data-variant="primary">
                <div data-button-background></div>
                <span className="label relative body -book">
                  <span data-split-text className="whitespace-nowrap"><span className="c">O</span><span className="c">p</span><span className="c">e</span><span className="c">n</span><span className="c -space"> </span><span className="c">a</span><span className="c">n</span><span className="c -space"> </span><span className="c">A</span><span className="c">c</span><span className="c">c</span><span className="c">o</span><span className="c">u</span><span className="c">n</span><span className="c">t</span></span>
                  <span data-split-text className="clone whitespace-nowrap" aria-hidden="true"><span className="c">O</span><span className="c">p</span><span className="c">e</span><span className="c">n</span><span className="c -space"> </span><span className="c">a</span><span className="c">n</span><span className="c -space"> </span><span className="c">A</span><span className="c">c</span><span className="c">c</span><span className="c">o</span><span className="c">u</span><span className="c">n</span><span className="c">t</span></span>
                </span>
              </a>
              <a href="/fees" className="_button no-tap-highlight" data-button data-label="true" data-tone="neutral" data-variant="outline">
                <div data-button-background></div>
                <span className="label relative body -book">
                  <span data-split-text className="whitespace-nowrap"><span className="c">S</span><span className="c">e</span><span className="c">e</span><span className="c -space"> </span><span className="c">P</span><span className="c">r</span><span className="c">i</span><span className="c">c</span><span className="c">i</span><span className="c">n</span><span className="c">g</span></span>
                  <span data-split-text className="clone whitespace-nowrap" aria-hidden="true"><span className="c">S</span><span className="c">e</span><span className="c">e</span><span className="c -space"> </span><span className="c">P</span><span className="c">r</span><span className="c">i</span><span className="c">c</span><span className="c">i</span><span className="c">n</span><span className="c">g</span></span>
                </span>
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* ===== THE PROBLEM WE SOLVE ===== */}
      <section className="cbp-section">
        <div className="g-row">
          <div className="g-col xxl-7 md-9 sm-14 xs-16">
            <span style={{ fontSize: '12px', textTransform: 'uppercase', letterSpacing: '0.1em', color: '#f73b20', opacity: 0.7 }} data-animate="fade-in">The Problem We Solve</span>
            <h2 className="title-3 -medium mt-16" data-animate="fade-up">The global remittance system is broken</h2>
          </div>
          <div className="g-col xxl-7 xxl-offset-2 md-7 sm-16 xs-16" style={{ display: 'flex', alignItems: 'center' }}>
            <div>
              <p className="body -book mt-32" style={{ opacity: 0.65, lineHeight: 1.8 }}>Traditional money transfers charge an average of 6.2% per transaction. Transfers take 2–5 business days. Recipients often can{"'"}t track where their money is.</p>
              <p className="body -book mt-24" style={{ opacity: 0.65, lineHeight: 1.8 }}>iBnk was built to fix this. We use a dual-rail payment engine — fiat banking networks for stability, blockchain settlement for speed — to get your money where it needs to go, faster and cheaper.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== HOW IT WORKS ===== */}
      <section className="cbp-section" style={{ background: '#fafafa' }}>
        <div className="g-row">
          <div className="g-col xxl-16 sm-16 xs-16" style={{ marginBottom: 'var(--64-24)' }}>
            <span style={{ fontSize: '12px', textTransform: 'uppercase', letterSpacing: '0.1em', color: '#f73b20', opacity: 0.7 }} data-animate="fade-in">How It Works</span>
            <h2 className="title-3 -medium mt-16" data-animate="fade-up">Three steps to send money anywhere</h2>
          </div>
        </div>
        <div className="g-row" data-animate="fade-up" data-animate-stagger="">
          <div className="g-col xxl-5 md-5 sm-16 xs-16">
            <div className="cbp-step-card">
              <div className="cbp-step-number">1</div>
              <div>
                <h3 className="subhead-1 -medium">Create your account</h3>
                <p className="body -book mt-12" style={{ opacity: 0.65, lineHeight: 1.7 }}>Sign up and complete KYC verification in minutes. We verify your identity once — then you{"'"}re ready to send.</p>
              </div>
            </div>
          </div>
          <div className="g-col xxl-5 md-5 sm-16 xs-16">
            <div className="cbp-step-card">
              <div className="cbp-step-number">2</div>
              <div>
                <h3 className="subhead-1 -medium">Enter transfer details</h3>
                <p className="body -book mt-12" style={{ opacity: 0.65, lineHeight: 1.7 }}>Choose your destination, amount, and currency. iBnk shows you the exact exchange rate and fee upfront — no surprises at checkout.</p>
              </div>
            </div>
          </div>
          <div className="g-col xxl-5 md-5 sm-16 xs-16">
            <div className="cbp-step-card">
              <div className="cbp-step-number">3</div>
              <div>
                <h3 className="subhead-1 -medium">We handle the rest</h3>
                <p className="body -book mt-12" style={{ opacity: 0.65, lineHeight: 1.7 }}>iBnk{"'"}s routing engine selects the optimal path — fiat banking or blockchain — and delivers funds to your recipient{"'"}s account or wallet.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== KEY FEATURES ===== */}
      <section className="cbp-section">
        <div className="g-row">
          <div className="g-col xxl-16 sm-16 xs-16" style={{ marginBottom: 'var(--64-24)' }}>
            <span style={{ fontSize: '12px', textTransform: 'uppercase', letterSpacing: '0.1em', color: '#f73b20', opacity: 0.7 }} data-animate="fade-in">Key Features</span>
            <h2 className="title-3 -medium mt-16" data-animate="fade-up">Everything you need for cross-border transfers</h2>
          </div>
        </div>
        <div className="g-row" data-animate="fade-up" data-animate-stagger="">
          <div className="g-col xxl-5 md-5 sm-8 xs-16">
            <div className="cbp-feature-card">
              <h3 className="subhead-1 -medium">Real exchange rates</h3>
              <p className="body -book mt-12" style={{ opacity: 0.65, lineHeight: 1.7 }}>We use mid-market exchange rates with a transparent conversion fee. What you see is what gets sent.</p>
            </div>
          </div>
          <div className="g-col xxl-5 md-5 sm-8 xs-16">
            <div className="cbp-feature-card">
              <h3 className="subhead-1 -medium">Dual-rail delivery</h3>
              <p className="body -book mt-12" style={{ opacity: 0.65, lineHeight: 1.7 }}>Your transfer can settle via SWIFT, SEPA, ACH, NPP, or directly on-chain — whichever is fastest for your corridor.</p>
            </div>
          </div>
          <div className="g-col xxl-5 md-5 sm-8 xs-16">
            <div className="cbp-feature-card">
              <h3 className="subhead-1 -medium">Personal multi-currency account</h3>
              <p className="body -book mt-12" style={{ opacity: 0.65, lineHeight: 1.7 }}>Hold balances in multiple currencies. Convert between them at real rates. Send directly from your iBnk account.</p>
            </div>
          </div>
          <div className="g-col xxl-5 md-5 sm-8 xs-16">
            <div className="cbp-feature-card">
              <h3 className="subhead-1 -medium">Full KYC onboarding</h3>
              <p className="body -book mt-12" style={{ opacity: 0.65, lineHeight: 1.7 }}>Your account is verified once. Every transfer benefits from iBnk{"'"}s built-in AML and sanctions screening — so your money moves safely.</p>
            </div>
          </div>
          <div className="g-col xxl-5 md-5 sm-8 xs-16">
            <div className="cbp-feature-card">
              <h3 className="subhead-1 -medium">Transfer tracking</h3>
              <p className="body -book mt-12" style={{ opacity: 0.65, lineHeight: 1.7 }}>Track every transfer in real time. From initiation to delivery, you and your recipient always know the status.</p>
            </div>
          </div>
          <div className="g-col xxl-5 md-5 sm-8 xs-16">
            <div className="cbp-feature-card">
              <h3 className="subhead-1 -medium">Supported corridors</h3>
              <p className="body -book mt-12" style={{ opacity: 0.65, lineHeight: 1.7 }}>We currently support transfers across Canada, Australia, and key Asia-Pacific corridors. Coverage is expanding.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== SUPPORTED NETWORKS ===== */}
      <section className="cbp-section" style={{ background: '#fafafa' }}>
        <div className="g-row">
          <div className="g-col xxl-16 sm-16 xs-16" style={{ marginBottom: 'var(--64-24)' }}>
            <span style={{ fontSize: '12px', textTransform: 'uppercase', letterSpacing: '0.1em', color: '#f73b20', opacity: 0.7 }} data-animate="fade-in">Supported Networks</span>
            <h2 className="title-3 -medium mt-16" data-animate="fade-up">Your money travels on the best available network</h2>
          </div>
        </div>
        <div className="g-row">
          <div className="g-col xxl-12 md-14 sm-16 xs-16" data-animate="fade-up">
            <div style={{ background: '#fff', borderRadius: '20px', border: '1.5px solid rgba(0,0,0,0.1)', overflow: 'hidden' }}>
              <table className="cbp-network-table">
                <thead>
                  <tr>
                    <th>Network</th>
                    <th>Region</th>
                    <th>Settlement Time</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="body -medium">SWIFT</td>
                    <td className="body-small -book" style={{ opacity: 0.65 }}>Global</td>
                    <td className="body-small -book" style={{ opacity: 0.65 }}>1–3 business days</td>
                  </tr>
                  <tr>
                    <td className="body -medium">SEPA</td>
                    <td className="body-small -book" style={{ opacity: 0.65 }}>Europe</td>
                    <td className="body-small -book" style={{ opacity: 0.65 }}>Same / next business day</td>
                  </tr>
                  <tr>
                    <td className="body -medium">ACH</td>
                    <td className="body-small -book" style={{ opacity: 0.65 }}>North America</td>
                    <td className="body-small -book" style={{ opacity: 0.65 }}>1–2 business days</td>
                  </tr>
                  <tr>
                    <td className="body -medium">NPP</td>
                    <td className="body-small -book" style={{ opacity: 0.65 }}>Australia</td>
                    <td className="body-small -book" style={{ opacity: 0.65 }}>Real-time</td>
                  </tr>
                  <tr>
                    <td className="body -medium">Blockchain</td>
                    <td className="body-small -book" style={{ opacity: 0.65 }}>Global</td>
                    <td className="body-small -book" style={{ opacity: 0.65 }}>Minutes</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* ===== COMPLIANCE & SAFETY ===== */}
      <section className="cbp-section" style={{ background: '#f73b20', padding: 'var(--120-64) 0' }}>
        <div className="g-row">
          <div className="g-col xxl-10 md-12 sm-14 xs-16 color-white">
            <span style={{ fontSize: '12px', textTransform: 'uppercase', letterSpacing: '0.1em', opacity: 0.7 }} data-animate="fade-in">Compliance & Safety</span>
            <h2 className="title-3 -medium mt-16" data-animate="fade-up">Regulated where you send and receive</h2>
            <p className="subhead-2 -book mt-24" style={{ opacity: 0.8, maxWidth: '640px' }}>iBnk is registered with FINTRAC in Canada and AUSTRAC in Australia as a licensed Money Services Business and Digital Currency Exchange provider. Every transfer is screened against OFAC, UN, and domestic sanctions lists. We are Travel Rule compliant across all supported corridors.</p>
          </div>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="cbp-section color-white" style={{ background: '#1a1a1a', padding: 'var(--120-64) 0', textAlign: 'center' }}>
        <div className="g-row">
          <div className="g-col xxl-16 sm-16 xs-16 flex flex-col items-center" style={{ gap: '32px' }}>
            <h2 className="title-3 -medium">Start sending in minutes</h2>
            <p className="subhead-2 -book" style={{ opacity: 0.65, maxWidth: '480px' }}>Create your account, complete verification, and make your first transfer today.</p>
            <div className="flex gap-24 flex-wrap justify-center">
              <a href="mailto:support@ibnk.xyz" className="_button no-tap-highlight" data-button data-label="true" data-tone="orange" data-variant="primary">
                <div data-button-background></div>
                <span className="label relative body -book">
                  <span data-split-text className="whitespace-nowrap"><span className="c">C</span><span className="c">r</span><span className="c">e</span><span className="c">a</span><span className="c">t</span><span className="c">e</span><span className="c -space"> </span><span className="c">A</span><span className="c">c</span><span className="c">c</span><span className="c">o</span><span className="c">u</span><span className="c">n</span><span className="c">t</span></span>
                  <span data-split-text className="clone whitespace-nowrap" aria-hidden="true"><span className="c">C</span><span className="c">r</span><span className="c">e</span><span className="c">a</span><span className="c">t</span><span className="c">e</span><span className="c -space"> </span><span className="c">A</span><span className="c">c</span><span className="c">c</span><span className="c">o</span><span className="c">u</span><span className="c">n</span><span className="c">t</span></span>
                </span>
              </a>
              <a href="mailto:support@ibnk.xyz" className="_button no-tap-highlight" data-button data-label="true" data-tone="neutral" data-variant="outline">
                <div data-button-background></div>
                <span className="label relative body -book">
                  <span data-split-text className="whitespace-nowrap"><span className="c">T</span><span className="c">a</span><span className="c">l</span><span className="c">k</span><span className="c -space"> </span><span className="c">t</span><span className="c">o</span><span className="c -space"> </span><span className="c">U</span><span className="c">s</span></span>
                  <span data-split-text className="clone whitespace-nowrap" aria-hidden="true"><span className="c">T</span><span className="c">a</span><span className="c">l</span><span className="c">k</span><span className="c -space"> </span><span className="c">t</span><span className="c">o</span><span className="c -space"> </span><span className="c">U</span><span className="c">s</span></span>
                </span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
