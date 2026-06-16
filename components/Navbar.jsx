'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useI18n } from '@/lib/i18n';

const langBtnBase = {
  background: 'transparent',
  border: 'none',
  padding: 0,
  cursor: 'pointer',
  color: 'inherit',
  font: 'inherit',
};

export default function Navbar() {
  const { lang, setLang, t } = useI18n();
  const pathname = usePathname();
  // Home has a dark hero behind the nav → white logo/text.
  // Every other page has a light (#f8faf8) background → use the dark logo/text.
  const isHome = pathname === '/';

  return (
    <>
      <nav
        className="_navbar g-row items-center justify-between"
        style={{ color: isHome ? undefined : '#1a1a1a' }}
      >
        <Link href="/" className="homepage-link" aria-label="iBnk">
          <Image
            src="/images/ibnk-logo-white.svg"
            alt="iBnk"
            width={180}
            height={72}
            priority
            style={{ height: '56px', width: 'auto', display: 'block', filter: isHome ? undefined : 'invert(1)' }}
          />
        </Link>

        <div className="lang-cta-wrapper flex items-center" style={{ gap: '24px' }}>
          <div className="lang-switch flex items-center" role="group" aria-label="Language">
            <button
              type="button"
              onClick={() => setLang('en')}
              aria-pressed={lang === 'en'}
              className="body -book"
              style={{ ...langBtnBase, opacity: lang === 'en' ? 1 : 0.5, fontWeight: lang === 'en' ? 600 : 400 }}
            >
              EN
            </button>
            <span style={{ opacity: 0.4, padding: '0 10px' }}>/</span>
            <button
              type="button"
              onClick={() => setLang('zh')}
              aria-pressed={lang === 'zh'}
              className="body -book"
              style={{ ...langBtnBase, opacity: lang === 'zh' ? 1 : 0.5, fontWeight: lang === 'zh' ? 600 : 400 }}
            >
              中文
            </button>
          </div>

          <Link
            href="/book-demo"
            aria-label={t('nav.bookdemo')}
            style={{
              backgroundColor: isHome ? 'rgba(255,255,255,0.1)' : '#ff751f',
              border: isHome ? '1px solid rgba(255,255,255,0.15)' : '1px solid #ff751f',
              backdropFilter: 'blur(20px)',
              WebkitBackdropFilter: 'blur(20px)',
              borderRadius: '5em',
              color: '#fff',
              textDecoration: 'none',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5em',
              padding: '0.6em 1em',
              cursor: 'pointer',
              fontSize: 14,
              fontWeight: 450,
              letterSpacing: '0.03em',
              lineHeight: 1.4,
              fontFamily: 'inherit',
              transition: 'background-color 0.2s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
            }}
            onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = isHome ? 'rgba(255,255,255,0.2)' : '#ef660c'; }}
            onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = isHome ? 'rgba(255,255,255,0.1)' : '#ff751f'; }}
          >
            <span>{t('nav.bookdemo')}</span>
          </Link>
        </div>
      </nav>
    </>
  );
}
