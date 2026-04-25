import Link from 'next/link'
import CtaMillion from '@/components/CtaMillion'

export const metadata = {
  title: 'iBnk – "The Waiting Game" by iBnk and West Ham United FC',
  description: 'iBnk and West Ham United FC Release \'The Waiting Game\', A New Brand Video Starring West Ham United Players.',
}

export default function TheWaitingGamePage() {
  return (
    <>
      {/* ===== ARTICLE HEADER ===== */}
      <header className="_article-header">
        <div className="g-row">
          {/* Left: Back link */}
          <div className="g-col xxl-3 md-3 sm-16 xs-16">
            <div className="header-left">
              <Link href="/newsroom" className="back-link">Back to Newsroom</Link>
            </div>
          </div>

          {/* Right: Article meta */}
          <div className="g-col xxl-8 md-9 sm-16 xs-16">
            <span className="article-tag">News</span>
            <h1 className="article-title">&quot;The Waiting Game&quot; by iBnk and West Ham United FC</h1>
            <p className="article-meta">May 19, 2025 · 2 min read</p>
          </div>
        </div>
      </header>

      {/* ===== ARTICLE BODY ===== */}
      <section className="_article-body">
        <div className="g-row">
          {/* Spacer for left column */}
          <div className="g-col xxl-3 md-3 sm-0 xs-0"></div>

          {/* Content */}
          <div className="g-col xxl-8 md-9 sm-16 xs-16">

            {/* Lead */}
            <p className="article-lead">iBnk and West Ham United FC Release &quot;The Waiting Game&quot;, A New Brand Video Starring West Ham United Players</p>

            {/* Hero Image */}
            <img src="https://www.jeton.com/_ipx/q_90&w_1700/cms/0e77c95be9250590f9e336b69399f01a0f812f6f-1500x500.png"
                 alt="The Waiting Game - iBnk x West Ham United"
                 style={{ width: '100%', height: 'auto', borderRadius: 'var(--12-8)' }} />

            {/* Article Content */}
            <div className="article-content" style={{ marginTop: 'var(--48-32)' }}>
              <p>No one likes waiting. Not even the pros. iBnk has teamed up with <strong>West Ham United FC</strong> to launch <strong>&quot;The Waiting Game&quot;</strong> a playful new brand video starring West Ham United stars <strong>Niklas Fullkrug</strong>, <strong>Tomas Soucek</strong>, and <strong>Maximilian Kilman</strong>. The short film follows the three footballers as they attempt to handle one thing they can&apos;t dribble past: <strong>waiting</strong>.</p>

              <p>The video showcases how iBnk enables faster, better, and easier payments, allowing you to spend less time waiting and more time doing what you love. The story drops the players into everyday moments where the clock seems to slow to a crawl. Queues. Delays. Those tiny pauses that feel twice as long when you have places to be. Watching these three handle something they can&apos;t outpace brings a bit of humour to a universal truth: waiting is boring. That is where iBnk steps in. The film highlights how iBnk speeds up payments, allowing you to get on with your day. <strong>Faster</strong>, <strong>smoother</strong>, <strong>easier</strong>. Less waiting and more living.</p>

              <p><strong>Why wait?</strong><br />
              Watch the <a href="https://www.youtube.com/watch?v=y1Xk3OROzEM&ab_channel=Jeton" target="_blank">video</a> now and get started with iBnk today.</p>

              <p><a href="https://onelink.to/fpezbr" target="_blank">Download</a> now.</p>

              <p><strong>About iBnk & <a href="https://www.whufc.com/" target="_blank">West Ham United</a></strong></p>

              <p>iBnk is in an ongoing partnership with Premier League side West Ham United FC. The collaboration encompasses joint marketing activities, brand visibility at and around the London Stadium, the Club&apos;s LED pitch-side advertising system, digital channels, and player appearance content. It reflects a shared focus on innovation, experience, and strong connections with fans and customers.</p>
            </div>

            {/* Disclaimer */}
            <div className="_article-disclaimer">
              <h2>Disclaimer</h2>

              <p>iBnk is a trading name of LA Orange Limited. LA Orange Limited is authorised by the Financial Conduct Authority under the Electronic Money Regulations 2011 for distributing or redeeming electronic money (e-money) and providing certain payment services on behalf of an e-money institution, with FCA registration number 902088. LA Orange Limited is registered in England and Wales, Company Number 11535714, with its registered office address at The Shard Floor 24/25, 32 London Bridge Street, London, SE1 9SG, United Kingdom. LA Orange Limited is registered with The United Kingdom Information Commissioner&apos;s Office with ICO registration number ZA798368.</p>

              <p>iBnk is a trading name of LA Orange CY Limited. LA Orange CY Limited is authorised by the Central Bank of Cyprus under the Electronic Moneys Law of 2012 and 2018 (Law 81(I)/2012) for distributing or redeeming electronic money (e-money), with Licence No: 115.1.3.66. LA Orange CY Limited has been incorporated in the Republic of Cyprus under the provisions of the Companies Law (Cap 113) with registration number HE 424807, with its registered office address at 116 Gladstonos, M. Kyprianou House, 3rd and 4th Floor, 3032, Limassol, Cyprus.</p>

              <p>iBnk Bank Limited is licensed and authorised by the Financial Services Unit, Ministry of Finance of the Commonwealth of Dominica, licensed as a banking institution under the Offshore Banking Act, fully authorised to provide services to clients worldwide, except for Commonwealth of Dominica citizens and residents, under the prudential supervision of the Financial Services Unit. iBnk Bank Limited is registered in the Commonwealth of Dominica, Company Number 2022/C0175, with its registered address at 40 Kennedy Avenue, Roseau, Commonwealth of Dominica.</p>
            </div>

          </div>
        </div>
      </section>

      <CtaMillion />
    </>
  )
}
