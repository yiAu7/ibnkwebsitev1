'use client';

import Link from 'next/link';
import Image from 'next/image';
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

  return (
    <nav className="_navbar g-row items-center justify-between">
      <Link href="/" className="homepage-link" aria-label="iBnk">
        <Image
          src="/images/ibnk-logo-white.svg"
          alt="iBnk"
          width={180}
          height={72}
          priority
          style={{ height: '56px', width: 'auto', display: 'block' }}
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
          href="/signup"
          className="_button no-tap-highlight"
          data-button=""
          data-label="true"
          data-tone="neutral"
          data-variant="primary"
          style={{ borderRadius: 999, height: 40, padding: '0 20px' }}
        >
          <div data-button-background="" style={{ borderRadius: 999 }}></div>
          <span className="label relative body -book">{t('nav.signup')}</span>
        </Link>
      </div>
    </nav>
  );
}
