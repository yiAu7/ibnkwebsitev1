export const metadata = {
  title: 'iBnk – Prohibited Activities',
  description: 'Activities, jurisdictions, and use cases that are not permitted on the iBnk platform.',
};

export default function ProhibitedActivitiesPage() {
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
        Prohibited Activities
      </h1>
      <p style={{ fontSize: 13, opacity: 0.55, marginTop: 10 }}>Effective date: April 26, 2026</p>

      <div style={{ marginTop: 40, fontSize: 15.5, lineHeight: 1.75, opacity: 0.85 }}>
        <p>
          <strong>iBnk</strong> is a global brand under which a group of licensed affiliated entities provides
          regulated payments services across <strong>Canada</strong>, <strong>Australia</strong>, and the{' '}
          <strong>United States</strong>, working with regulated banking partners — including Singapore Gulf
          Bank (SGB) for Named Virtual Accounts. The list below sets out the jurisdictions, business types,
          and transaction categories that are not permitted on the iBnk platform. It applies in addition to
          our{' '}
          <a href="/terms-of-use" style={{ color: '#ff751f', textDecoration: 'underline' }}>Terms of Use</a> and{' '}
          <a href="/privacy-policy" style={{ color: '#ff751f', textDecoration: 'underline' }}>Privacy Policy</a>,
          and may be updated as regulatory, partner, or risk requirements change.
        </p>

        <Heading number="I.">Account Eligibility</Heading>

        <SubHeading>A. Geographic Restrictions</SubHeading>
        <p>
          iBnk accounts cannot be opened by individuals or businesses resident, domiciled, or operating from
          the following jurisdictions:
        </p>
        <Bullets items={[
          'Belarus',
          'Crimea, Donetsk, and Luhansk regions of Ukraine',
          'Cuba',
          'Iran',
          'Mainland China',
          'Myanmar',
          'North Korea',
          'Russia',
          'Syria',
          'Venezuela',
        ]} />
        <p>
          Additional jurisdictions appearing on FATF, FINTRAC, AUSTRAC, or US Treasury watchlists may be
          subject to enhanced due diligence and reviewed on a case-by-case basis by iBnk and our banking
          partners.
        </p>

        <SubHeading>B. Prohibited Business Types</SubHeading>
        <p>The following business activities are not eligible for an iBnk account:</p>
        <Bullets items={[
          'Distribution or sale of illegal substances or controlled drugs without appropriate licensing',
          'Human trafficking, prostitution, or escort services',
          'Sale of counterfeit goods or unauthorised intellectual property',
          'Pyramid schemes, Ponzi schemes, or other deceptive financial structures',
          'Production or distribution of illegal digital content (including child sexual abuse material)',
          'Political campaign or candidate fundraising platforms operating outside applicable disclosure rules',
          'Production, sale, or distribution of weapons of mass destruction and related materials',
        ]} />

        <SubHeading>C. Restricted Business Types (Enhanced Review)</SubHeading>
        <p>
          The following business types may use iBnk only after additional licensing, ownership, and compliance
          documentation has been reviewed and approved:
        </p>
        <Bullets items={[
          'Money service businesses, payment processors, and remittance services',
          'Cryptocurrency exchanges, custodians, and other virtual asset service providers',
          'Charities, NGOs, and not-for-profit fundraising organisations',
          'Precious metals and high-value goods dealers',
          'Adult content platforms and creator economy services',
          'Licensed gambling, betting, and fantasy sports operators',
          'Lending and consumer-credit providers',
        ]} />

        <Heading number="II.">Transaction-Level Prohibitions</Heading>

        <SubHeading>A. Geographic Transaction Restrictions</SubHeading>
        <p>iBnk will not process transactions to or from the following jurisdictions:</p>
        <Bullets items={[
          'Cuba',
          'Iran',
          'North Korea',
          'Russia',
          'Syria',
          'Crimea, Donetsk, and Luhansk regions of Ukraine',
          'Venezuela (in respect of sanctioned entities and government bodies)',
        ]} />

        <SubHeading>B. Prohibited Transaction Categories</SubHeading>
        <p>Regardless of jurisdiction, iBnk does not permit transactions related to:</p>
        <Bullets items={[
          'Drug-related purchases (including marijuana, cannabis, and CBD where prohibited or unlicensed)',
          'Dark web marketplaces, ransomware payments, or cybercrime services',
          'Unlicensed online pharmacies',
          'Firearms, ammunition, or explosives outside lawful and licensed channels',
          'Hazardous, radioactive, or chemical materials without applicable regulatory clearance',
          'Escort or adult-services payments',
          'Unlicensed auction or marketplace platforms',
          'Unregulated payday loans or predatory lending',
          'Unauthorised brokerage or sale of personal data',
          'Endangered species, protected wildlife, or related products',
          'Pyramid or multi-level marketing structures',
          'Counterfeit goods',
          'Illegal or unregulated gambling and betting',
          'Adult content that violates applicable laws',
          'Unauthorised securities offerings or unregistered fundraising activities',
        ]} />

        <Heading number="III.">Sanctions Compliance</Heading>
        <p>
          iBnk and its banking partners are required to comply with sanctions programmes administered by:
        </p>
        <Bullets items={[
          'United Nations Security Council',
          'United States — Office of Foreign Assets Control (OFAC) and Financial Crimes Enforcement Network (FinCEN)',
          'Canada — Public Safety Canada, Department of Foreign Affairs (Special Economic Measures Act and Justice for Victims of Corrupt Foreign Officials Act listings), and the Office of the Superintendent of Financial Institutions (OSFI)',
          'Australia — Department of Foreign Affairs and Trade (DFAT) Consolidated List, administered alongside AUSTRAC supervisory expectations',
          'Singapore — Monetary Authority of Singapore (MAS)',
          'European Union — EU Council sanctions',
          'United Kingdom — Office of Financial Sanctions Implementation (OFSI)',
        ]} />
        <p>
          Transactions involving sanctioned individuals, entities, vessels, aircraft, or jurisdictions are
          prohibited and will be blocked or rejected. Where required, iBnk will report blocked transactions to
          the relevant authority.
        </p>

        <Heading number="IV.">Anti-Money Laundering &amp; Counter-Terrorism Financing</Heading>
        <p>
          iBnk maintains AML/CTF programmes designed to comply with the regimes that apply across our
          operations, including:
        </p>
        <Bullets items={[
          'Canada — Proceeds of Crime (Money Laundering) and Terrorist Financing Act (PCMLTFA), supervised by FINTRAC',
          'Australia — Anti-Money Laundering and Counter-Terrorism Financing Act 2006 (AML/CTF Act), supervised by AUSTRAC',
          'United States — Bank Secrecy Act (BSA) and USA PATRIOT Act, supervised by FinCEN',
        ]} />
        <p>The following activities are strictly prohibited:</p>
        <Bullets items={[
          'Structuring transactions to avoid reporting or threshold requirements',
          'Laundering proceeds from illegal or unlawful activity',
          'Financing terrorism or designated terrorist organisations',
          'Providing false, misleading, or fraudulent information during KYC, KYB, or ongoing due diligence',
          'Transacting on behalf of, or for the benefit of, sanctioned parties',
          'Operating as a nominee or front for an undisclosed beneficial owner',
        ]} />

        <Heading number="V.">Enforcement &amp; Violations</Heading>
        <p>
          iBnk may, at its sole discretion and where consistent with applicable law: suspend, freeze, or
          terminate accounts; block, hold, or reverse transactions; cooperate with our banking partners&apos;
          investigations; and report activity to the relevant supervisory authority — including FINTRAC
          (Canada), AUSTRAC (Australia), FinCEN (United States), or any other regulator or law-enforcement
          body where reporting is required. Where required by law, we may withhold the fact of any such
          action from the affected user.
        </p>

        <Heading number="VI.">Updates</Heading>
        <p>
          This list may be updated from time to time to reflect changes in regulation, sanctions, our risk
          policies, or our partners&apos; requirements. Updates take effect when posted to this page with a
          revised effective date.
        </p>

        <Heading number="VII.">Contact</Heading>
        <p>
          Questions about this list, eligibility, or to report suspected misuse of the iBnk platform:
        </p>
        <p style={{ marginTop: 14 }}>
          <strong>Email:</strong>{' '}
          <a href="mailto:support@ibnk.xyz" style={{ color: '#ff751f', textDecoration: 'underline' }}>support@ibnk.xyz</a>
        </p>
        <p style={{ marginTop: 14, fontSize: 14, opacity: 0.7 }}>
          iBnk services are provided by a group of licensed affiliated entities operating under the iBnk
          global brand in Canada, Australia, and the United States. No single entity controls the others;
          each is independently licensed in its own region. Region-specific registration details are
          available on request.
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

function SubHeading({ children }) {
  return (
    <h3 style={{ fontSize: 15, fontWeight: 600, marginTop: 20, marginBottom: 6, color: '#1a1a1a' }}>
      {children}
    </h3>
  );
}

function Bullets({ items }) {
  return (
    <ul style={{ paddingLeft: 22, marginTop: 12, marginBottom: 12 }}>
      {items.map((item) => (
        <li key={item} style={{ marginBottom: 6 }}>{item}</li>
      ))}
    </ul>
  );
}
