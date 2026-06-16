export const metadata = {
  title: 'iBnk – Terms of Use',
  description: 'Terms of Use for iBnk services.',
};

export default function TermsOfUsePage() {
  return (
    <main
      style={{
        maxWidth: 760,
        margin: '0 auto',
        padding: 'clamp(96px, 12vw, 160px) clamp(20px, 5vw, 40px) clamp(64px, 8vw, 120px)',
        color: '#1a1a1a',
      }}
    >
      <h1 style={{ fontSize: 'clamp(36px, 5vw, 56px)', fontWeight: 500, lineHeight: 1.1, margin: 0 }}>
        Terms of Use
      </h1>
      <p style={{ fontSize: 13, opacity: 0.55, marginTop: 10 }}>Last updated: April 26, 2026</p>

      <div style={{ marginTop: 40, fontSize: 15.5, lineHeight: 1.75, opacity: 0.85 }}>
        <Heading number="1.">Introduction</Heading>
        <p>
          <strong>iBnk</strong> is a global brand under which a group of licensed affiliated entities provides
          regulated cross-border payments services across <strong>Canada</strong>, <strong>Australia</strong>, and the{' '}
          <strong>United States</strong>. No single entity controls the others — each is independently licensed
          in its own region. Throughout these Terms, references to &ldquo;<strong>iBnk</strong>,&rdquo; &ldquo;we,&rdquo;
          &ldquo;our,&rdquo; or &ldquo;us&rdquo; mean the iBnk affiliate that provides the relevant service to you,
          together with the broader group operating under the iBnk brand.
        </p>
        <p style={{ marginTop: 14 }}>
          The platform provides a Universal Account that lets users hold and move multi-currency balances
          across traditional banking rails (SWIFT, SEPA, ACH, NPP, and others) and blockchain rails
          (stablecoin settlement secured by MPC wallet infrastructure), plus real-time foreign-exchange
          conversion and programmatic access for businesses and individuals.
        </p>
        <p style={{ marginTop: 14 }}>
          Named Virtual Accounts on the iBnk platform are provided through our partner bank,{' '}
          <a href="https://www.sgb.com" target="_blank" rel="noopener noreferrer" style={{ color: '#ff751f', textDecoration: 'underline' }}>
            Singapore Gulf Bank (SGB)
          </a>. Banking, custody, and settlement are operated by iBnk in cooperation with regulated banking and
          infrastructure partners.
        </p>

        <Heading number="2.">Eligibility &amp; Consent</Heading>
        <p>
          By using iBnk you represent that you have the legal authority to accept these Terms, that you are at
          least 18 years old, that you are not located in a jurisdiction prohibited by applicable sanctions
          regimes, that you are not subject to government sanctions, and that you agree to be bound by these
          Terms and our{' '}
          <a href="/privacy-policy" style={{ color: '#ff751f', textDecoration: 'underline' }}>Privacy Policy</a>. If
          you do not agree, you may not use the iBnk platform.
        </p>

        <Heading number="3.">Account Creation &amp; Your Responsibilities</Heading>
        <p>
          Creating an iBnk account requires you to provide truthful and accurate information and to complete
          identity verification (KYC) and, for businesses, business verification (KYB) checks. You are
          responsible for keeping your credentials secure, maintaining control of the email address and
          authentication methods linked to your account, and notifying us immediately at{' '}
          <a href="mailto:support@ibnk.xyz" style={{ color: '#ff751f', textDecoration: 'underline' }}>support@ibnk.xyz</a>{' '}
          if you suspect any unauthorised access. We reserve the right to suspend or close any account that
          breaches these Terms or applicable law.
        </p>

        <Heading number="4.">Custody &amp; Wallet Infrastructure</Heading>
        <p>
          Fiat balances held in your iBnk Universal Account are held at our partner banks, including Singapore
          Gulf Bank (SGB), in segregated client-money or equivalent arrangements as required by applicable
          regulation. Digital-asset balances and on-chain settlements are secured through MPC (multi-party
          computation) wallet infrastructure operated by iBnk together with regulated infrastructure providers.
        </p>
        <p style={{ marginTop: 14 }}>
          You are responsible for the accuracy of any wallet address, beneficiary detail, or transfer
          instruction you submit. iBnk is not liable for losses arising from incorrect instructions, blockchain
          network errors, smart-contract issues, gas-related failures, or events outside our reasonable
          control. On-chain transactions are typically irreversible.
        </p>

        <Heading number="5.">Fees</Heading>
        <p>
          We charge fees for certain services, including foreign-exchange conversion, on/off-ramp between fiat
          and stablecoins, certain cross-border transfers, and blockchain network gas fees (which are paid to
          the underlying network and not to iBnk). Fee schedules are published in your iBnk dashboard and may
          change with reasonable advance notice.
        </p>

        <Heading number="6.">Acceptable Use</Heading>
        <p>
          You agree not to use iBnk to: violate any law, regulation, or sanctions regime; infringe intellectual
          property rights; engage in money laundering, terrorist financing, fraud, or any other prohibited
          activity; distribute malware, spam, or malicious code; interfere with our services or other users;
          reverse engineer, scrape, or otherwise circumvent our technical controls; or create fake, automated,
          or misrepresented accounts. Violations may result in immediate account suspension, termination, and
          reporting to relevant authorities where legally required.
        </p>

        <Heading number="7.">User Content &amp; License</Heading>
        <p>
          You retain ownership of any content you submit to iBnk (such as feedback, messages, or support
          requests). By submitting content, you grant iBnk a non-exclusive licence to use, display, and process
          that content solely to operate and improve our services. You must not upload content that is
          unlawful, offensive, defamatory, or that infringes third-party rights.
        </p>

        <Heading number="8.">Third-Party Services</Heading>
        <p>
          iBnk relies on third-party banking, custody, infrastructure, and identity-verification providers,
          including but not limited to Singapore Gulf Bank (SGB) for Named Virtual Accounts, MPC wallet
          infrastructure providers, identity-verification vendors, and blockchain analytics providers. Your use
          of those services is also governed by the relevant provider&apos;s terms and policies. iBnk is not
          responsible for outages, errors, or policy changes by third-party providers, but we will use
          commercially reasonable efforts to maintain continuity of service.
        </p>

        <Heading number="9.">Disclaimers</Heading>
        <p>
          The iBnk services are provided on an &ldquo;<strong>as is</strong>&rdquo; and &ldquo;<strong>as available</strong>&rdquo;
          basis, without warranties of any kind, express or implied. We do not guarantee uninterrupted or
          error-free access, the accuracy of exchange rates at any specific moment, or the timing or success of
          any blockchain transaction. Holding and moving digital assets involves risk, including the risk of
          partial or total loss. Past performance does not indicate future results. Where applicable law does
          not permit certain disclaimers, those disclaimers apply only to the extent permitted.
        </p>

        <Heading number="10.">Limitation of Liability</Heading>
        <p>
          To the maximum extent permitted by law, iBnk and its affiliates will not be liable for indirect,
          incidental, consequential, special, or punitive damages; loss of profits, data, or assets; service
          interruptions or delays; user errors or negligence; blockchain network failures or congestion;
          failures of third-party providers; or regulatory or legal actions. Our aggregate liability for any
          claim arising out of or relating to these Terms or your use of iBnk is limited to the greater of
          (a) USD 100 or (b) the total fees you paid to iBnk in the twelve (12) months preceding the event
          giving rise to the claim.
        </p>

        <Heading number="11.">Dispute Resolution</Heading>
        <p>
          <strong>Governing law.</strong> These Terms are governed by the laws of the jurisdiction in which the
          iBnk affiliate that provides services to you is established and licensed. For example, users contracting
          with our Canadian affiliate are subject to the laws of the Province of British Columbia and the
          federal laws of Canada applicable therein; users contracting with our Australian or United States
          affiliates are subject to the laws of those affiliates&apos; respective jurisdictions.
        </p>
        <p style={{ marginTop: 14 }}>
          <strong>Informal resolution.</strong> Before initiating any formal proceedings, you agree to first
          contact us at{' '}
          <a href="mailto:support@ibnk.xyz" style={{ color: '#ff751f', textDecoration: 'underline' }}>support@ibnk.xyz</a>{' '}
          and attempt in good faith to resolve the matter informally.
        </p>
        <p style={{ marginTop: 14 }}>
          <strong>Jurisdiction.</strong> Disputes that cannot be resolved informally fall under the exclusive
          jurisdiction of the courts of the iBnk affiliate&apos;s jurisdiction, except where applicable
          consumer-protection law gives you the right to bring proceedings in your local jurisdiction.
        </p>

        <Heading number="12.">Intellectual Property</Heading>
        <p>
          iBnk and its affiliates and licensors own all platform content, software, trademarks, logos, and
          other intellectual property associated with the iBnk brand. You may not copy, modify, distribute, or
          create derivative works of any of the foregoing without our prior written permission.
          Copyright-infringement claims should be directed to{' '}
          <a href="mailto:support@ibnk.xyz" style={{ color: '#ff751f', textDecoration: 'underline' }}>support@ibnk.xyz</a>{' '}
          with sufficient detail to allow us to investigate.
        </p>

        <Heading number="13.">Termination</Heading>
        <p>
          We may suspend or terminate your access to iBnk for breach of these Terms, prohibited activity,
          fraudulent or unlawful behaviour, regulatory or risk-management reasons, or sustained inactivity.
          Upon termination, your right to use the platform ceases immediately. We will, where lawfully
          possible, return any remaining account balances to you using a reasonable settlement method.
        </p>

        <Heading number="14.">Changes to These Terms</Heading>
        <p>
          We may update these Terms from time to time. When we do, we will post the revised Terms on this page
          with a new &ldquo;Last updated&rdquo; date and, where appropriate, notify you by email or in-product. Your
          continued use of iBnk after changes take effect constitutes acceptance of the updated Terms.
        </p>

        <Heading number="15.">Severability</Heading>
        <p>
          If any provision of these Terms is held to be unenforceable, the remaining provisions will continue
          in full force and effect.
        </p>

        <Heading number="16.">Contact</Heading>
        <p>
          <strong>Email:</strong>{' '}
          <a href="mailto:support@ibnk.xyz" style={{ color: '#ff751f', textDecoration: 'underline' }}>support@ibnk.xyz</a>
          <br />
          <strong>Website:</strong>{' '}
          <a href="https://www.ibnk.xyz" target="_blank" rel="noopener noreferrer" style={{ color: '#ff751f', textDecoration: 'underline' }}>ibnk.xyz</a>
        </p>
        <p style={{ marginTop: 14 }}>
          <strong>Canadian affiliate</strong> &mdash; IBNK VAULT INC.
          <br />
          Incorporation No. BC1571168 &middot; FINTRAC MSB N3000001312
          <br />
          Registered office: 200&ndash;7404 King George Boulevard, Surrey, BC V3W 1N6, Canada
        </p>
        <p style={{ marginTop: 14, fontSize: 14, opacity: 0.7 }}>
          iBnk also operates through licensed affiliated entities in Australia and the United States. These
          entities operate independently in their respective jurisdictions under the iBnk global brand.
          Region-specific registration details are available on request.
        </p>

        <p style={{ marginTop: 28, fontSize: 14, opacity: 0.6 }}>
          Using iBnk&apos;s services confirms that you have read, understood, and agreed to be bound by these
          Terms and the Privacy Policy. If you do not agree, please discontinue using the services.
        </p>
      </div>
    </main>
  );
}

function Heading({ children, number }) {
  return (
    <h2 style={{ fontSize: 'clamp(18px, 2vw, 22px)', fontWeight: 600, marginTop: 36, marginBottom: 12, color: '#1a1a1a' }}>
      {number ? <span style={{ opacity: 0.5, marginRight: 8 }}>{number}</span> : null}
      {children}
    </h2>
  );
}
