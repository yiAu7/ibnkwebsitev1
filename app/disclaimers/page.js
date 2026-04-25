export const metadata = {
  title: 'iBnk – Disclaimers',
  description: 'Please review our disclaimers, to fully understand how we handle your interactions with this website.',
};

export default function DisclaimersPage() {
  return (
    <>
      {/* ===== HERO SECTION ===== */}
      <header className="_policy-hero">
        <div className="g-row hero-content color-white">
          <div className="hero-heading">
            <h1 className="title-2 -medium">Disclaimers</h1>
          </div>
          <div className="hero-description">
            <p className="subhead-2 -medium">Please review our disclaimers, to fully understand how we handle your interactions with this website.</p>
          </div>
        </div>
      </header>

      {/* ===== POLICY CONTENT ===== */}
      <section className="_policy-section">
        <div className="section-bg"></div>
        <div className="section-inner py-136-64">
          <div className="g-row">

            <div className="g-col xxl-10 xxl-offset-3 md-12 md-offset-2 sm-14 sm-offset-1 xs-16 xs-offset-0">
              <div className="_policy-content">

                <h2>Disclaimers</h2>

                <p>iBnk is a trademark globally recognisable and available in the UK, EU and the rest of the world. The usage of our financial services is subject to local laws and regulations. Terms and Conditions apply.</p>

                <p>iBnk Bank Limited is licensed and authorised by the Financial Services Unit, Ministry of Finance of the Commonwealth of Dominica, licensed as a banking institution under the International Banking Act, fully authorised to provide services to clients worldwide, under the prudential supervision of the Financial Services Unit. iBnk Bank Limited is registered in the Commonwealth of Dominica, Company Number 2022/C0175, with its registered address at 1st Floor, 43 Great George Street, Roseau, Commonwealth of Dominica, Post Code: 00109-8000. - LEI Code: 894500XGIX3R4HCIOC29.</p>

                <p>LA Orange Limited, trading as iBnk, is authorised by the Financial Conduct Authority under the Electronic Money Regulations 2011 for distributing or redeeming electronic money (e-money) and providing certain payment services on behalf of an e-money institution, with FCA registration number 902088. Company Name: LA ORANGE LIMITED, LEI code: 8945009645M8PD0AD211, BIC Value: ORAGGB22 (Swift Code). LA Orange Limited is registered in England and Wales, Company Number 11535714, with its registered office address at The Shard Floor 24/25, 32 London Bridge Street, London, SE1 9SG, United Kingdom.</p>

                <p>LA Orange CY Limited, trading as iBnk, is authorised by the Central Bank of Cyprus under the Electronic Money Law of 2012 and 2018 (Law 81(I)/2012) for distributing or redeeming electronic money (e-money), with Licence No: 115.1.3.66. LA Orange CY Limited has been incorporated in the Republic of Cyprus under the provisions of the Companies Law (Cap 113) with registration number HE 424807, with its registered office address at Gladstonos, 116 M. Kyprianou House, 3&4th Floor, 3032, Limassol, Cyprus.</p>

                <p>The iBnk Card Account and Card are issued by Financial House Limited, which is authorised and regulated by the Financial Conduct Authority as an Electronic Money Institution under Firm Reference Number 902039.</p>

              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
