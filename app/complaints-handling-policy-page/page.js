export const metadata = {
  title: 'iBnk – Complaints Handling Policy',
  description: "Overview of iBnk's procedures for receiving and resolving customer complaints.",
};

export default function ComplaintsHandlingPolicyPageHub() {
  return (
    <>
      {/* ===== HERO SECTION ===== */}
      <header className="_policy-hero">
        <div className="g-row hero-content color-white">
          <div className="hero-heading">
            <h1 className="title-2 -medium">Complaints Handling Policy</h1>
          </div>
          <div className="hero-description">
            <p className="subhead-2 -medium">Overview of iBnk{"'"}s procedures for receiving and resolving customer complaints.</p>
          </div>
        </div>
      </header>

      {/* ===== LINK HUB ===== */}
      <section className="_link-hub-section">
        <div className="section-bg"></div>
        <div className="section-inner py-136-64">
          <div className="g-row">

            {/* Left: Intro text */}
            <div className="g-col xxl-7 md-8 sm-10 xs-14">
              <h2 className="subhead-2 -medium" style={{ color: '#1a1a1a' }}>The region you choose will effect the content of Complaints Handling Policy.</h2>
            </div>

            {/* Right: Navigation links */}
            <div className="g-col xxl-5 xxl-offset-4 md-6 md-offset-2 sm-14 sm-offset-1 xs-16 xs-offset-0">
              <ul className="_link-hub-list">
                <li>
                  <a href="/complaints-handling-policy" className="_link-hub-link">
                    <span>Complaints Handling Policy EU</span>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" clipRule="evenodd" d="M3.25 11.25L19.75 11.25L19.75 12.75L3.25 12.75L3.25 11.25Z" fill="currentColor"/>
                      <path fillRule="evenodd" clipRule="evenodd" d="M11.9393 19L18.9393 12L11.9393 5L13 3.93934L19.4697 10.409C20.3483 11.2877 20.3483 12.7123 19.4697 13.591L13 20.0607L11.9393 19Z" fill="currentColor"/>
                    </svg>
                  </a>
                </li>
              </ul>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
