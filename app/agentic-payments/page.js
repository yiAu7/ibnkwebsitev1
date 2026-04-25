export const metadata = {
  title: 'iBnk – Agentic Payments',
  description:
    'The payment layer the AI era has been waiting for. iBnk is building the payment infrastructure for autonomous agents — compliant, programmable, and built for scale.',
};

export default function AgenticPaymentsPage() {
  return (
    <>
      <style
        dangerouslySetInnerHTML={{
          __html: `
            .ap-section { padding: var(--120-64) 0; }
            .ibnk-feature-card {
              border: 1.5px solid rgba(0,0,0,0.1);
              border-radius: 20px;
              padding: 32px;
              height: 100%;
              transition: border-color 0.2s ease;
            }
            .ibnk-feature-card:hover {
              border-color: rgba(247,59,32,0.4);
            }
            .segment-card {
              border-radius: 20px;
              padding: 32px;
              display: flex;
              flex-direction: column;
              gap: 16px;
              height: 100%;
            }
            .ibnk-pill {
              display: inline-flex;
              align-items: center;
              gap: 10px;
              background: rgba(0,0,0,0.04);
              border-radius: 100px;
              padding: 10px 20px;
              font-size: 14px;
            }
            .ibnk-pill .dot {
              width: 8px;
              height: 8px;
              border-radius: 50%;
              background: #f73b20;
              flex-shrink: 0;
            }
            .ap-compliance-list {
              display: flex;
              flex-direction: column;
              gap: 12px;
              margin-top: 24px;
            }
            .ap-compliance-list li {
              display: flex;
              gap: 10px;
              align-items: flex-start;
            }
          `,
        }}
      />

      {/* ===== HERO ===== */}
      <header className="_common-header" data-layout="full">
        <div className="background absolute inset-0" style={{ backgroundColor: '#1a1a1a' }}></div>
        <div className="g-row main-row color-white relative">
          <div className="g-col xxl-10 md-12 sm-14 xs-16 hero-heading-col">
            <span style={{ fontSize: '12px', textTransform: 'uppercase', letterSpacing: '0.1em', opacity: 0.7 }}>For AI Builders</span>
            <h1 className="title-2 -medium mt-16">The payment layer the AI era has been waiting for</h1>
          </div>
          <div className="g-col xxl-5 xxl-offset-1 md-8 sm-14 xs-16 hero-subtitle-col">
            <p className="subhead-2 -medium">AI agents are already making decisions worth billions of dollars. The problem is, they can{"'"}t pay for anything. iBnk is building the payment infrastructure for autonomous agents — compliant, programmable, and built for scale.</p>
            <div className="flex flex-wrap gap-24 mt-32">
              <a href="mailto:support@ibnk.xyz" className="_button no-tap-highlight" data-button data-label="true" data-tone="orange" data-variant="primary">
                <div data-button-background></div>
                <span className="label relative body -book">
                  <span data-split-text className="whitespace-nowrap"><span className="c">T</span><span className="c">a</span><span className="c">l</span><span className="c">k</span><span className="c -space"> </span><span className="c">t</span><span className="c">o</span><span className="c -space"> </span><span className="c">U</span><span className="c">s</span></span>
                  <span data-split-text className="clone whitespace-nowrap" aria-hidden="true"><span className="c">T</span><span className="c">a</span><span className="c">l</span><span className="c">k</span><span className="c -space"> </span><span className="c">t</span><span className="c">o</span><span className="c -space"> </span><span className="c">U</span><span className="c">s</span></span>
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
            <div className="mt-32">
              <div className="ibnk-pill" style={{ background: 'rgba(247,59,32,0.15)', color: '#fff' }}><span className="dot"></span><span style={{ fontSize: 12 }}>Agentic commerce projected at $190B–$385B by 2030 (McKinsey, 2024)</span></div>
            </div>
          </div>
        </div>
      </header>

      {/* ===== THE PROBLEM ===== */}
      <section className="ap-section">
        <div className="g-row">
          <div className="g-col xxl-7 md-9 sm-14 xs-16">
            <span style={{ fontSize: '12px', textTransform: 'uppercase', letterSpacing: '0.1em', color: '#f73b20', opacity: 0.7 }} data-animate="fade-in">The Problem</span>
            <h2 className="title-3 -medium mt-16" data-animate="fade-up">Existing payment rails weren{"'"}t built for agents</h2>
          </div>
          <div className="g-col xxl-7 xxl-offset-2 md-7 sm-16 xs-16" style={{ display: 'flex', alignItems: 'center' }}>
            <div>
              <p className="body -book mt-32" style={{ opacity: 0.65, lineHeight: 1.8 }}>Today{"'"}s payment infrastructure assumes a human is in the loop. Payments require human authentication, manual approval, and step-by-step interaction with banking interfaces.</p>
              <p className="body -book mt-24" style={{ opacity: 0.65, lineHeight: 1.8 }}>As AI agents become capable of autonomous economic activity — purchasing services, paying contractors, managing subscriptions, routing funds — they hit a wall. There{"'"}s no compliant, programmable way to move money at agent speed.</p>
              <p className="body -book mt-24" style={{ opacity: 0.65, lineHeight: 1.8 }}>iBnk is built to change that.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== WHAT AGENTIC PAYMENTS ARE ===== */}
      <section className="ap-section" style={{ background: '#fafafa' }}>
        <div className="g-row">
          <div className="g-col xxl-7 md-9 sm-14 xs-16">
            <span style={{ fontSize: '12px', textTransform: 'uppercase', letterSpacing: '0.1em', color: '#f73b20', opacity: 0.7 }}>What Agentic Payments Are</span>
            <h2 className="title-3 -medium mt-16">Payments that move at the speed of reasoning</h2>
          </div>
          <div className="g-col xxl-7 xxl-offset-2 md-7 sm-16 xs-16" style={{ display: 'flex', alignItems: 'center' }}>
            <div>
              <p className="body -book mt-32" style={{ opacity: 0.65, lineHeight: 1.8 }}>An agentic payment is a financial transaction initiated, routed, and settled by an AI system — without a human approving each step.</p>
              <p className="body -book mt-24" style={{ opacity: 0.65, lineHeight: 1.8 }}>iBnk provides the infrastructure layer that makes this possible: API-driven payment initiation, smart rail selection, full transaction attribution, and compliance controls that keep every payment auditable and within regulatory bounds.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== KEY CAPABILITIES ===== */}
      <section className="ap-section">
        <div className="g-row">
          <div className="g-col xxl-16 sm-16 xs-16" style={{ marginBottom: 'var(--64-24)' }}>
            <span style={{ fontSize: '12px', textTransform: 'uppercase', letterSpacing: '0.1em', color: '#f73b20', opacity: 0.7 }} data-animate="fade-in">Key Capabilities</span>
            <h2 className="title-3 -medium mt-16" data-animate="fade-up">Built for how agents actually operate</h2>
          </div>
        </div>
        <div className="g-row" data-animate="fade-up" data-animate-stagger="">
          <div className="g-col xxl-5 md-5 sm-8 xs-16">
            <div className="ibnk-feature-card">
              <h3 className="subhead-1 -medium">API-driven payment initiation</h3>
              <p className="body -book mt-12" style={{ opacity: 0.65, lineHeight: 1.7 }}>Your agent calls the API. iBnk handles the rest — routing, FX, settlement, and compliance. No human approval required for pre-authorized payment flows.</p>
            </div>
          </div>
          <div className="g-col xxl-5 md-5 sm-8 xs-16">
            <div className="ibnk-feature-card">
              <h3 className="subhead-1 -medium">Programmable spending controls</h3>
              <p className="body -book mt-12" style={{ opacity: 0.65, lineHeight: 1.7 }}>Define limits, allowed recipients, currencies, and corridors at the agent level. Every payment is bounded by rules you set.</p>
            </div>
          </div>
          <div className="g-col xxl-5 md-5 sm-8 xs-16">
            <div className="ibnk-feature-card">
              <h3 className="subhead-1 -medium">Full transaction attribution</h3>
              <p className="body -book mt-12" style={{ opacity: 0.65, lineHeight: 1.7 }}>Every payment tagged with agent ID, task context, and session metadata. Full audit trail from instruction to settlement.</p>
            </div>
          </div>
          <div className="g-col xxl-5 md-5 sm-8 xs-16">
            <div className="ibnk-feature-card">
              <h3 className="subhead-1 -medium">Multi-rail settlement</h3>
              <p className="body -book mt-12" style={{ opacity: 0.65, lineHeight: 1.7 }}>Agents choose between fiat banking rails (SWIFT, SEPA, ACH, NPP) and blockchain settlement based on speed and cost.</p>
            </div>
          </div>
          <div className="g-col xxl-5 md-5 sm-8 xs-16">
            <div className="ibnk-feature-card">
              <h3 className="subhead-1 -medium">Compliance at infrastructure level</h3>
              <p className="body -book mt-12" style={{ opacity: 0.65, lineHeight: 1.7 }}>AML screening, sanctions checks, and Travel Rule reporting built into every agentic payment — not left to the application layer.</p>
            </div>
          </div>
          <div className="g-col xxl-5 md-5 sm-8 xs-16">
            <div className="ibnk-feature-card">
              <h3 className="subhead-1 -medium">Real-time reconciliation</h3>
              <p className="body -book mt-12" style={{ opacity: 0.65, lineHeight: 1.7 }}>Every payment generates a structured event. Webhooks in real time — cost tracking, reconciliation, and reporting happen automatically.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== USE CASES ===== */}
      <section className="ap-section" style={{ background: '#fafafa' }}>
        <div className="g-row">
          <div className="g-col xxl-16 sm-16 xs-16" style={{ marginBottom: 'var(--64-24)' }}>
            <span style={{ fontSize: '12px', textTransform: 'uppercase', letterSpacing: '0.1em', color: '#f73b20', opacity: 0.7 }} data-animate="fade-in">Use Cases</span>
            <h2 className="title-3 -medium mt-16" data-animate="fade-up">What agents will pay for</h2>
          </div>
        </div>
        <div className="g-row" data-animate="fade-up" data-animate-stagger="">
          <div className="g-col xxl-5 md-5 sm-8 xs-16">
            <div className="segment-card" style={{ background: '#f8f3f0' }}>
              <span className="caption -medium uppercase" style={{ color: '#f73b20', letterSpacing: '0.1em' }}>Procurement</span>
              <h3 className="title-5 -medium" style={{ color: '#1a1a1a' }}>Autonomous procurement</h3>
              <p className="body -book" style={{ color: '#1a1a1a', opacity: 0.7 }}>An AI agent identifies the best vendor, negotiates terms, and pays for the service — within pre-defined budget and compliance rules.</p>
            </div>
          </div>
          <div className="g-col xxl-5 md-5 sm-8 xs-16">
            <div className="segment-card" style={{ background: '#f0f4f8' }}>
              <span className="caption -medium uppercase" style={{ color: '#477EE9', letterSpacing: '0.1em' }}>Machine-to-Machine</span>
              <h3 className="title-5 -medium" style={{ color: '#1a1a1a' }}>AI-to-AI payments</h3>
              <p className="body -book" style={{ color: '#1a1a1a', opacity: 0.7 }}>Agent A completes a task for Agent B and receives micropayment settlement on-chain. Machine-to-machine value transfer with no human intermediary.</p>
            </div>
          </div>
          <div className="g-col xxl-5 md-5 sm-8 xs-16">
            <div className="segment-card" style={{ background: '#f8f3f0' }}>
              <span className="caption -medium uppercase" style={{ color: '#f73b20', letterSpacing: '0.1em' }}>Payouts</span>
              <h3 className="title-5 -medium" style={{ color: '#1a1a1a' }}>Automated contractor payouts</h3>
              <p className="body -book" style={{ color: '#1a1a1a', opacity: 0.7 }}>An AI orchestration system approves deliverables and triggers cross-border payouts to human contractors in their local currency — automatically.</p>
            </div>
          </div>
        </div>
        <div className="g-row" style={{ marginTop: 'var(--24-16)' }}>
          <div className="g-col xxl-5 md-5 sm-8 xs-16">
            <div className="segment-card" style={{ background: '#f0f4f8' }}>
              <span className="caption -medium uppercase" style={{ color: '#477EE9', letterSpacing: '0.1em' }}>Billing</span>
              <h3 className="title-5 -medium" style={{ color: '#1a1a1a' }}>Subscription & usage billing</h3>
              <p className="body -book" style={{ color: '#1a1a1a', opacity: 0.7 }}>AI workloads pay per API call, per compute unit, or per task completion. Metered billing settled in real time across stablecoin and fiat rails.</p>
            </div>
          </div>
          <div className="g-col xxl-10 md-10 sm-8 xs-16">
            <div className="segment-card" style={{ background: '#1a1a1a', color: '#fff' }}>
              <span className="caption -medium uppercase" style={{ color: '#f73b20', letterSpacing: '0.1em' }}>Treasury</span>
              <h3 className="title-5 -medium">Treasury management</h3>
              <p className="body -book" style={{ opacity: 0.7 }}>An AI treasury agent monitors multi-currency balances, rebalances between fiat and digital assets, and executes FX conversions — within pre-authorized parameters.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== COMPLIANCE FOR AGENTIC PAYMENTS ===== */}
      <section className="ap-section" style={{ background: '#f73b20', padding: 'var(--120-64) 0' }}>
        <div className="g-row">
          <div className="g-col xxl-7 md-9 sm-14 xs-16 color-white">
            <span style={{ fontSize: '12px', textTransform: 'uppercase', letterSpacing: '0.1em', opacity: 0.7 }} data-animate="fade-in">Compliance</span>
            <h2 className="title-3 -medium mt-16" data-animate="fade-up">Regulated infrastructure for autonomous systems</h2>
          </div>
          <div className="g-col xxl-7 xxl-offset-2 md-7 sm-16 xs-16 color-white" style={{ display: 'flex', alignItems: 'center' }}>
            <div>
              <p className="body -book mt-32" style={{ opacity: 0.85, lineHeight: 1.8 }}>Agentic payments don{"'"}t exist outside financial regulation — they{"'"}re subject to the same AML, KYC, and sanctions requirements as any other payment.</p>
              <p className="body -book mt-24" style={{ opacity: 0.85, lineHeight: 1.8 }}>iBnk{"'"}s compliance framework is designed to work at agent speed:</p>
              <ul className="ap-compliance-list">
                <li className="body -book" style={{ opacity: 0.85 }}><span>&rarr;</span> Every payment screened in milliseconds against global sanctions lists</li>
                <li className="body -book" style={{ opacity: 0.85 }}><span>&rarr;</span> Transaction monitoring flags anomalous patterns automatically</li>
                <li className="body -book" style={{ opacity: 0.85 }}><span>&rarr;</span> Full Travel Rule compliance across all supported corridors</li>
                <li className="body -book" style={{ opacity: 0.85 }}><span>&rarr;</span> Blockchain analytics on every on-chain settlement</li>
              </ul>
              <p className="subhead-2 -medium mt-32" style={{ opacity: 0.9 }}>Your agent moves fast. It also moves clean.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== FINAL CTA ===== */}
      <section className="ap-section color-white" style={{ background: '#1a1a1a', padding: 'var(--120-64) 0', textAlign: 'center' }}>
        <div className="g-row">
          <div className="g-col xxl-16 sm-16 xs-16 flex flex-col items-center" style={{ gap: '32px' }}>
            <h2 className="title-3 -medium">Build the economic layer for your AI</h2>
            <p className="subhead-2 -book" style={{ opacity: 0.65, maxWidth: '560px' }}>If you{"'"}re building autonomous agents, multi-agent systems, or AI-native financial products — iBnk is the payment infrastructure you{"'"}ve been waiting for.</p>
            <div className="flex gap-24 flex-wrap justify-center">
              <a href="mailto:support@ibnk.xyz" className="_button no-tap-highlight" data-button data-label="true" data-tone="orange" data-variant="primary">
                <div data-button-background></div>
                <span className="label relative body -book">
                  <span data-split-text className="whitespace-nowrap"><span className="c">T</span><span className="c">a</span><span className="c">l</span><span className="c">k</span><span className="c -space"> </span><span className="c">t</span><span className="c">o</span><span className="c -space"> </span><span className="c">O</span><span className="c">u</span><span className="c">r</span><span className="c -space"> </span><span className="c">T</span><span className="c">e</span><span className="c">a</span><span className="c">m</span></span>
                  <span data-split-text className="clone whitespace-nowrap" aria-hidden="true"><span className="c">T</span><span className="c">a</span><span className="c">l</span><span className="c">k</span><span className="c -space"> </span><span className="c">t</span><span className="c">o</span><span className="c -space"> </span><span className="c">O</span><span className="c">u</span><span className="c">r</span><span className="c -space"> </span><span className="c">T</span><span className="c">e</span><span className="c">a</span><span className="c">m</span></span>
                </span>
              </a>
              <a href="https://cal.com/yi-zhang-avxwyp/15min" className="_button no-tap-highlight" data-button data-label="true" data-tone="neutral" data-variant="outline">
                <div data-button-background></div>
                <span className="label relative body -book">
                  <span data-split-text className="whitespace-nowrap"><span className="c">B</span><span className="c">o</span><span className="c">o</span><span className="c">k</span><span className="c -space"> </span><span className="c">a</span><span className="c -space"> </span><span className="c">D</span><span className="c">e</span><span className="c">m</span><span className="c">o</span></span>
                  <span data-split-text className="clone whitespace-nowrap" aria-hidden="true"><span className="c">B</span><span className="c">o</span><span className="c">o</span><span className="c">k</span><span className="c -space"> </span><span className="c">a</span><span className="c -space"> </span><span className="c">D</span><span className="c">e</span><span className="c">m</span><span className="c">o</span></span>
                </span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
