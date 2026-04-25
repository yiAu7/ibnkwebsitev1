import Link from 'next/link'
import CtaMillion from '@/components/CtaMillion'

export const metadata = {
  title: 'iBnk – Newsroom',
  description: 'Stay updated with iBnk News! Keep your finger on the pulse of industry news, partnerships, and everything iBnk!',
}

export default function NewsroomPage() {
  return (
    <>
      {/* ===== HERO SECTION ===== */}
      <header className="_newsroom-hero">
        <div className="g-row hero-content color-white">
          {/* Heading */}
          <div className="hero-heading">
            <h1 className="title-2 -medium">Newsroom</h1>
          </div>

          {/* Description */}
          <div className="hero-description">
            <p className="subhead-2 -medium">Stay updated with iBnk News! Keep your finger on the pulse of industry news, partnerships, and everything iBnk!</p>
          </div>
        </div>

        {/* Scroll Hint */}
        <button className="_scroll-hint caption">
          <div className="hint-inner">
            <span className="_coin-drop">
              <span></span><span></span><span></span><span></span><span></span><span></span>
            </span>
            <span>Scroll</span>
          </div>
        </button>
      </header>

      {/* ===== LATEST ARTICLES ===== */}
      <section className="_articles-section">
        <div className="section-bg"></div>
        <div className="section-inner py-136-64">
          <div className="g-row">
            <div className="g-col" style={{ flex: '0 0 100%', maxWidth: '100%' }}>

              {/* Section Header */}
              <div className="section-header">
                <h2 className="title-4 -medium color-black">Latest Articles</h2>
              </div>

              {/* Articles Grid */}
              <div className="_articles-grid">

                {/* Card 1 */}
                <Link href="/newsroom/the-waiting-game-jeton-whu" className="_article-card">
                  <div className="card-image">
                    <span className="card-tag">News</span>
                    <img src="https://www.jeton.com/_ipx/q_90&w_850/cms/2e5ccb4907093e2edd88b5f9cb7dee5c3071743d-1700x1133.jpg"
                         alt="The Waiting Game by iBnk and West Ham United FC" loading="lazy" />
                  </div>
                  <div className="card-body">
                    <h3 className="card-title">&quot;The Waiting Game&quot; by iBnk and West Ham United FC</h3>
                    <time className="card-date">May 19, 2025</time>
                  </div>
                </Link>

                {/* Card 2 */}
                <a href="#" className="_article-card">
                  <div className="card-image">
                    <span className="card-tag">News</span>
                    <img src="https://www.jeton.com/_ipx/q_90&w_850/cms/1eff82f3f77be1abecc27f22cbe7c3aefdb02a74-1920x1080.png"
                         alt="Campaign Terms and Conditions – First Deposit Bonus Offer" loading="lazy" />
                  </div>
                  <div className="card-body">
                    <h3 className="card-title">Campaign Terms and Conditions – First Deposit Bonus Offer</h3>
                    <time className="card-date">Mar 11, 2026</time>
                  </div>
                </a>

                {/* Card 3 */}
                <a href="#" className="_article-card">
                  <div className="card-image">
                    <span className="card-tag">News</span>
                    <img src="https://www.jeton.com/_ipx/q_90&w_850/cms/5d0a0062dd93fde14da092fd97d094170a0a9612-5579x3719.jpg"
                         alt="West Ham United strengthen iBnk partnership" loading="lazy" />
                  </div>
                  <div className="card-body">
                    <h3 className="card-title">West Ham United strengthen iBnk partnership with multi-year extension</h3>
                    <time className="card-date">Jul 09, 2025</time>
                  </div>
                </a>

                {/* Card 4 */}
                <a href="#" className="_article-card">
                  <div className="card-image">
                    <span className="card-tag">News</span>
                    <img src="https://www.jeton.com/_ipx/q_90&w_850/cms/6cd4b910866f6cf07a30cbdafa9ca0e872cc8f31-2031x1073.png"
                         alt="iBnk Attends the 22nd NextGen Payments & RegTech Forum" loading="lazy" />
                  </div>
                  <div className="card-body">
                    <h3 className="card-title">iBnk Attends the 22nd NextGen Payments & RegTech Forum in Limassol</h3>
                    <time className="card-date">Mar 04, 2025</time>
                  </div>
                </a>

                {/* Card 5 */}
                <a href="#" className="_article-card">
                  <div className="card-image">
                    <span className="card-tag">News</span>
                    <img src="https://www.jeton.com/_ipx/q_90&w_850/cms/28967e3718d7fa40ea7e0b16d317f73674fb4e94-8434x5622.jpg"
                         alt="Kou Itakura becomes iBnk Brand Ambassador" loading="lazy" />
                  </div>
                  <div className="card-body">
                    <h3 className="card-title">Japanese Football Player Kou Itakura becomes iBnk&apos;s Brand Ambassador</h3>
                    <time className="card-date">Jul 25, 2024</time>
                  </div>
                </a>

                {/* Card 6 */}
                <a href="#" className="_article-card">
                  <div className="card-image">
                    <span className="card-tag">News</span>
                    <img src="https://www.jeton.com/_ipx/q_90&w_850/cms/b9a4588246d5d8a52f244bef8daaf8cf25372bd0-1200x627.png"
                         alt="iBnk Card Limited Time Offer" loading="lazy" />
                  </div>
                  <div className="card-body">
                    <h3 className="card-title">iBnk introduces a limited-time 94% discount on card fees</h3>
                    <time className="card-date">Feb 06, 2026</time>
                  </div>
                </a>

                {/* Card 7 */}
                <a href="#" className="_article-card">
                  <div className="card-image">
                    <span className="card-tag">News</span>
                    <img src="https://www.jeton.com/_ipx/q_90&w_850/cms/46cfbdde45523b0f71e50f3e683a046bee18ba61-1200x628.png"
                         alt="Alexis Mac Allister iBnk Brand Ambassador" loading="lazy" />
                  </div>
                  <div className="card-body">
                    <h3 className="card-title">Alexis Mac Allister Announces as iBnk&apos;s Latest Brand</h3>
                    <time className="card-date">Jul 25, 2024</time>
                  </div>
                </a>

                {/* Card 8 */}
                <a href="#" className="_article-card">
                  <div className="card-image">
                    <span className="card-tag">News</span>
                    <img src="https://www.jeton.com/_ipx/q_90&w_850/cms/0a8ec1f7f5ae171da42f2beedb2534caa6772e44-3840x2160.jpg"
                         alt="iBnk recognized by Financial Times" loading="lazy" />
                  </div>
                  <div className="card-body">
                    <h3 className="card-title">iBnk has been recognized by the Financial Times as one of Europe&apos;s 1,000 fastest-growing companies</h3>
                    <time className="card-date">Jul 25, 2024</time>
                  </div>
                </a>

                {/* Card 9 */}
                <a href="#" className="_article-card">
                  <div className="card-image">
                    <span className="card-tag">News</span>
                    <img src="https://www.jeton.com/_ipx/q_90&w_850/cms/caa74fcc56360ff2291a027b36215c90b05e3a55-2031x1073.png"
                         alt="iBnk Joins ACEMPI" loading="lazy" />
                  </div>
                  <div className="card-body">
                    <h3 className="card-title">iBnk Joins ACEMPI</h3>
                    <time className="card-date">Jan 13, 2026</time>
                  </div>
                </a>

                {/* Card 10 */}
                <a href="#" className="_article-card">
                  <div className="card-image">
                    <span className="card-tag">News</span>
                    <img src="https://www.jeton.com/_ipx/q_90&w_850/cms/c971dbb18a3f49d9090a4fdaec8d5f20e9543ef9-1200x627.png"
                         alt="iBnk Wins Two Gold Awards" loading="lazy" />
                  </div>
                  <div className="card-body">
                    <h3 className="card-title">iBnk Wins Two Gold Awards for Website and Digital Design</h3>
                    <time className="card-date">May 19, 2025</time>
                  </div>
                </a>

                {/* Card 11 */}
                <a href="#" className="_article-card">
                  <div className="card-image">
                    <span className="card-tag">News</span>
                    <img src="https://www.jeton.com/_ipx/q_90&w_850/cms/00924c7ddccae8362372528ff65f27b72abc840b-1200x627.png"
                         alt="iBnk Card Limited Offer Terms" loading="lazy" />
                  </div>
                  <div className="card-body">
                    <h3 className="card-title">Campaign Terms & Conditions – iBnk Card Limited Offer</h3>
                    <time className="card-date">Jan 27, 2026</time>
                  </div>
                </a>

                {/* Card 12 */}
                <a href="#" className="_article-card">
                  <div className="card-image">
                    <span className="card-tag">News</span>
                    <img src="https://www.jeton.com/_ipx/q_90&w_850/cms/25c874b7e069a57ace376414d0af563f3b3073cb-2501x1308.png"
                         alt="iBnk Ranks #374 on Financial Times List" loading="lazy" />
                  </div>
                  <div className="card-body">
                    <h3 className="card-title">iBnk Ranks #374 on Financial Times List of Europe&apos;s 1,000 Fastest-Growing Companies</h3>
                    <time className="card-date">Mar 04, 2025</time>
                  </div>
                </a>

                {/* Card 13 */}
                <a href="#" className="_article-card">
                  <div className="card-image">
                    <span className="card-tag">News</span>
                    <img src="https://www.jeton.com/_ipx/q_90&w_850/cms/26c041b2024d9ac8af748d1e07cc7a85a885a2fe-1200x628.png"
                         alt="iBnk Joins the Euro Banking Association" loading="lazy" />
                  </div>
                  <div className="card-body">
                    <h3 className="card-title">iBnk Joins the Euro Banking Association</h3>
                    <time className="card-date">Mar 04, 2025</time>
                  </div>
                </a>

                {/* Card 14 */}
                <a href="#" className="_article-card">
                  <div className="card-image">
                    <span className="card-tag">News</span>
                    <img src="https://www.jeton.com/_ipx/q_90&w_850/cms/65d476caac5ef7c2d68b6762c9557a7420a1557e-1200x627.png"
                         alt="Kou Itakura Signed Ajax Shirt Giveaway" loading="lazy" />
                  </div>
                  <div className="card-body">
                    <h3 className="card-title">Kou Itakura Signed Ajax Shirt Giveaway EU users</h3>
                    <time className="card-date">Feb 19, 2026</time>
                  </div>
                </a>

              </div>
              {/* /.articles-grid */}

            </div>
          </div>
        </div>
      </section>

      <CtaMillion />
    </>
  )
}
