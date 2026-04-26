export const metadata = {
  title: 'iBnk – Privacy Policy',
  description: 'How iBnk collects, uses, and protects your information.',
};

export default function PrivacyPolicyPage() {
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
        Privacy Policy
      </h1>
      <p style={{ fontSize: 13, opacity: 0.55, marginTop: 10 }}>Effective date: April 26, 2026</p>

      <div style={{ marginTop: 40, fontSize: 15.5, lineHeight: 1.75, opacity: 0.85 }}>
        <p>
          This Privacy Policy explains what information <strong>iBnk</strong> (collectively, &ldquo;we,&rdquo; &ldquo;our,&rdquo;
          or &ldquo;us&rdquo;) collects, how we use it, and the choices you have regarding your personal
          information. iBnk is a global brand under which a group of licensed affiliated entities operates
          regulated payments services across <strong>Canada</strong>, <strong>Australia</strong>, and the{' '}
          <strong>United States</strong>. The iBnk affiliate that provides services to you in your region
          acts as the data controller of your personal information. By accessing the iBnk website or using
          any iBnk services, you consent to the practices described below. We may amend this policy from time
          to time, and any updates will be posted to this page with a new effective date.
        </p>

        <Heading>Information We Collect</Heading>

        <SubHeading>Personal information you provide</SubHeading>
        <p>
          When you create an account or apply for our services, we collect identifying details including your
          name, email address, phone number, date of birth, government-issued identification, and residential
          address — as required for onboarding, verification, and ongoing compliance with KYC and AML
          obligations.
        </p>

        <SubHeading>Business information</SubHeading>
        <p>
          For business users, we collect company name, registered address, incorporation documents,
          jurisdiction, tax identification numbers, business registration numbers, ultimate beneficial owner
          information, and any wallet addresses or bank account details associated with the entity.
        </p>

        <SubHeading>Automatically collected information</SubHeading>
        <p>
          When you visit our site or use our services, we automatically capture browser type, device and
          operating system information, IP address, approximate location, wallet addresses you connect, on-chain
          transaction data, and interaction metrics such as page views and clicks via analytics tools.
        </p>

        <SubHeading>Transactional data</SubHeading>
        <p>
          We process transaction amounts, types, dates, times, originating and destination wallet addresses,
          on-chain records, counterparty and merchant information, bank account details used for fiat on/off-ramp,
          and payment histories.
        </p>

        <SubHeading>Cookies and similar technologies</SubHeading>
        <p>
          We use session cookies to keep you signed in, preference cookies to remember your settings, and
          security cookies to detect and prevent fraud. You can configure your browser to refuse cookies, but
          some parts of the site may not function as intended.
        </p>

        <SubHeading>Information from third parties</SubHeading>
        <p>
          We may supplement what you provide with data from credit bureaus, identity verification and fraud
          detection services, sanctions and PEP screening vendors, blockchain analytics providers, and our
          banking and payment partners — to the extent permitted by applicable law.
        </p>

        <Heading>How We Use Information</Heading>
        <p>
          We use the information we collect to: assess your eligibility for our services; create and maintain
          your account; process and settle transactions; provide customer support; improve and develop the
          iBnk product; send service-related communications and, where you have consented, marketing
          communications; comply with our legal and regulatory obligations including KYC, AML, sanctions, and
          Travel Rule requirements; detect, investigate, and prevent fraudulent or unauthorised activity; and
          enforce our Terms of Use.
        </p>

        <Heading>Sharing Information</Heading>
        <p>
          We share personal information with: service providers who help us operate the platform (cloud
          hosting, analytics, customer support tools, communications); banking, custody, and card-issuing
          partners; KYC, AML, and sanctions verification providers; blockchain networks and on-chain analytics
          partners; affiliates within the iBnk corporate group; regulators, law enforcement, courts, and other
          government authorities where legally required; and counterparties to a corporate transaction such as
          a merger, acquisition, or financing.
        </p>

        <Heading>Aggregated or De-identified Information</Heading>
        <p>
          We may share aggregated or de-identified information that cannot reasonably be linked to an
          identifiable individual without restriction.
        </p>

        <Heading>Safeguarding Information</Heading>
        <p>
          We maintain administrative, technical, and physical safeguards designed to protect personal
          information. No method of transmission or storage, however, is fully secure. You are responsible for
          keeping your account credentials confidential and must notify us immediately at
          {' '}<a href="mailto:support@ibnk.xyz" style={{ color: '#f73b20', textDecoration: 'underline' }}>support@ibnk.xyz</a>
          {' '}if you suspect any unauthorised access.
        </p>

        <Heading>Retention</Heading>
        <p>
          We retain personal information for as long as necessary to provide our services, fulfil the purposes
          described in this policy, resolve disputes, enforce our agreements, and comply with our legal,
          accounting, and regulatory obligations — including the customer-due-diligence and transaction-record
          retention requirements imposed on us under FINTRAC (Canada), AUSTRAC (Australia), and FinCEN
          (United States), which generally require records to be kept for at least five to seven years
          following the end of the customer relationship.
        </p>

        <Heading>Children</Heading>
        <p>
          Our services are not directed to anyone under 18 years of age, and we do not knowingly collect
          personal information from children. If you believe a child has provided information to us, please
          contact us and we will delete it.
        </p>

        <Heading>Your Account and Choices</Heading>
        <p>
          You can access, update, or request deletion of your account information by contacting
          {' '}<a href="mailto:support@ibnk.xyz" style={{ color: '#f73b20', textDecoration: 'underline' }}>support@ibnk.xyz</a>.
          {' '}We will retain information that we are legally required to keep, that is necessary for fraud
          prevention, or that relates to ongoing disputes. On-chain transactions written to a public blockchain
          are permanently recorded by the network and cannot be deleted by us.
        </p>

        <Heading>Regional Operations</Heading>
        <p>
          iBnk services are operated by a group of licensed affiliated entities under the iBnk global brand,
          including IBNK VAULT INC. in Canada and corresponding entities in Australia and the United States.
          No single entity controls the others; each is the responsible party for the region in which it is
          licensed. Where a regional affiliate is the operating entity for a service you use, it acts as the
          data controller under this same policy. Region-specific registration details are available on
          request.
        </p>

        <Heading>International Data Transfers</Heading>
        <p>
          iBnk operates across Canada, Australia, and the United States, and works with service providers in
          additional jurisdictions. Your information may therefore be transferred to and processed in
          countries other than your own. Where required, we put appropriate safeguards in place — including
          standard contractual clauses or equivalent measures — to protect your information consistent with
          applicable law.
        </p>

        <Heading>Do Not Track</Heading>
        <p>
          Our site does not currently respond to Do Not Track signals from web browsers.
        </p>

        <Heading>Your Rights — Canada (PIPEDA)</Heading>
        <p>
          If you are located in Canada, you have the right to access the personal information we hold about
          you, request that we correct inaccuracies, and withdraw consent (subject to legal or contractual
          restrictions). Complaints can be directed to the Office of the Privacy Commissioner of Canada at
          {' '}<a href="https://www.priv.gc.ca" target="_blank" rel="noopener noreferrer" style={{ color: '#f73b20', textDecoration: 'underline' }}>priv.gc.ca</a>.
        </p>

        <Heading>Your Rights — Australia (Privacy Act 1988)</Heading>
        <p>
          If you are located in Australia, you have rights under the Privacy Act 1988 (Cth) and the Australian
          Privacy Principles, including the right to access and correct your personal information, request a
          complaint review, and ask how your information has been used or disclosed. Complaints regarding our
          handling of your information can be directed to the Office of the Australian Information
          Commissioner at
          {' '}<a href="https://www.oaic.gov.au" target="_blank" rel="noopener noreferrer" style={{ color: '#f73b20', textDecoration: 'underline' }}>oaic.gov.au</a>.
        </p>

        <Heading>Your Rights — United States</Heading>
        <p>
          Residents of US states with applicable privacy laws — including California (CCPA / CPRA), Virginia,
          Colorado, Connecticut, and Utah — may have rights to know, access, correct, delete, and request
          portability of their personal information, as well as to opt out of certain &ldquo;sales&rdquo; or
          &ldquo;sharing&rdquo; of personal information. iBnk does not sell personal information. To exercise these
          rights, contact us at{' '}
          <a href="mailto:support@ibnk.xyz" style={{ color: '#f73b20', textDecoration: 'underline' }}>support@ibnk.xyz</a>.
          Anti-money-laundering record-keeping obligations under the US Bank Secrecy Act may limit deletion
          requests.
        </p>

        <Heading>Your Rights — EU/UK (GDPR)</Heading>
        <p>If you are located in the European Economic Area or the United Kingdom, you have the right to:</p>
        <ul style={{ paddingLeft: 22, marginTop: 12 }}>
          <li style={{ marginBottom: 6 }}>access the personal data we hold about you;</li>
          <li style={{ marginBottom: 6 }}>request correction of inaccurate or incomplete data;</li>
          <li style={{ marginBottom: 6 }}>request deletion of your personal data, subject to our legal obligations;</li>
          <li style={{ marginBottom: 6 }}>restrict or object to certain processing;</li>
          <li style={{ marginBottom: 6 }}>data portability;</li>
          <li style={{ marginBottom: 6 }}>withdraw consent at any time, where processing is based on consent.</li>
        </ul>
        <p style={{ marginTop: 14 }}>
          Our legal bases for processing include performance of a contract, compliance with legal obligations,
          legitimate interests in operating and securing our services, and your consent where applicable.
          Complaints can be lodged with your local data protection authority — for the UK, the Information
          Commissioner&apos;s Office at
          {' '}<a href="https://ico.org.uk" target="_blank" rel="noopener noreferrer" style={{ color: '#f73b20', textDecoration: 'underline' }}>ico.org.uk</a>.
        </p>

        <Heading>Contact Us</Heading>
        <p>
          For privacy questions, data subject requests, or complaints, contact us at:
        </p>
        <p style={{ marginTop: 14 }}>
          <strong>Email:</strong>{' '}
          <a href="mailto:support@ibnk.xyz" style={{ color: '#f73b20', textDecoration: 'underline' }}>support@ibnk.xyz</a>
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
      </div>
    </main>
  );
}

function Heading({ children }) {
  return (
    <h2 style={{ fontSize: 'clamp(18px, 2vw, 22px)', fontWeight: 600, marginTop: 36, marginBottom: 12, color: '#1a1a1a', opacity: 1 }}>
      {children}
    </h2>
  );
}

function SubHeading({ children }) {
  return (
    <h3 style={{ fontSize: 15, fontWeight: 600, marginTop: 20, marginBottom: 6, color: '#1a1a1a', opacity: 1 }}>
      {children}
    </h3>
  );
}
