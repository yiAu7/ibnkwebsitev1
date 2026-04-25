'use client';

import { createContext, useContext, useEffect, useState, useCallback } from 'react';

const dict = {
  en: {
    'nav.signup': 'Sign Up',

    'hero.title.prefix': 'Borderless money movement —',
    'hero.rotate.1': 'faster.',
    'hero.rotate.2': 'transparent.',
    'hero.rotate.3': 'unified.',
    'hero.subhead': 'Ultra-Low Cost FX: Bridging Bank and Blockchain Rails.',
    'hero.cta.book': 'Book a Demo',
    'hero.scroll': 'Scroll',

    'pillars.title': 'One Place,\nThree Wonders',
    'pillars.direct': 'Direct',
    'pillars.bridge': 'Bridge',
    'pillars.route': 'Route',

    'how.tag': 'How it works',
    'how.title': 'One engine. Two rails.',
    'how.subhead': 'Every payment is routed through bank or blockchain — whichever is faster and cheaper.',
    'how.bank.label': 'Bank Rail',
    'how.bank.title': 'Global banking networks',
    'how.bank.desc': 'Funds held at partner banks. Settled via SWIFT, SEPA, ACH and NPP.',
    'how.bank.li1': 'SWIFT, SEPA, ACH, NPP',
    'how.bank.li2': 'Segregated client accounts',
    'how.bank.li3': 'Multi-currency',
    'how.chain.label': 'Blockchain Rail',
    'how.chain.title': 'On-chain settlement',
    'how.chain.desc': 'Secured by MPC wallet infrastructure. Real-time on-chain settlement.',
    'how.chain.li1': 'MPC wallet',
    'how.chain.li2': 'Stablecoin settlement',
    'how.chain.li3': 'Real-time on-chain transfers',
    'how.chain.li4': 'KYT monitoring',

    'signup.title': 'Invite Code Required',
    'signup.desc': 'Enter your invite code to continue registration.',
    'signup.label': 'Invite Code',
    'signup.placeholder': 'Enter your code',
    'signup.verify': 'Verify',
    'signup.waitlist': 'No invite code? Join the waitlist',
  },
  zh: {
    'nav.signup': '注册',

    'hero.title.prefix': '跨境资金流动——',
    'hero.rotate.1': '更快。',
    'hero.rotate.2': '透明。',
    'hero.rotate.3': '一体化。',
    'hero.subhead': '极致低成本外汇:贯通银行与区块链双轨。',
    'hero.cta.book': '预约演示',
    'hero.scroll': '向下滚动',

    'pillars.title': '一站之内,\n三种体验',
    'pillars.direct': '直连',
    'pillars.bridge': '互通',
    'pillars.route': '智能路由',

    'how.tag': '工作原理',
    'how.title': '一套引擎,两条轨道。',
    'how.subhead': '每笔支付都会自动选择银行或区块链——哪条更快、更便宜就走哪条。',
    'how.bank.label': '银行通道',
    'how.bank.title': '全球银行网络',
    'how.bank.desc': '资金托管于合作银行,通过 SWIFT、SEPA、ACH、NPP 清算。',
    'how.bank.li1': 'SWIFT、SEPA、ACH、NPP',
    'how.bank.li2': '客户隔离账户',
    'how.bank.li3': '多币种支持',
    'how.chain.label': '区块链通道',
    'how.chain.title': '链上结算',
    'how.chain.desc': '由 MPC 钱包基础设施保障,实时链上清算。',
    'how.chain.li1': 'MPC 钱包',
    'how.chain.li2': '稳定币清算',
    'how.chain.li3': '实时链上转账',
    'how.chain.li4': 'KYT 链上监控',

    'signup.title': '需要邀请码',
    'signup.desc': '请输入你的邀请码以继续注册。',
    'signup.label': '邀请码',
    'signup.placeholder': '输入邀请码',
    'signup.verify': '验证',
    'signup.waitlist': '没有邀请码?加入候补名单',
  },
};

const I18nContext = createContext({ lang: 'en', setLang: () => {}, t: (k) => k });

export function I18nProvider({ children }) {
  const [lang, setLangState] = useState('en');

  useEffect(() => {
    const saved = typeof window !== 'undefined' ? window.localStorage.getItem('ibnk-lang') : null;
    if (saved === 'en' || saved === 'zh') setLangState(saved);
  }, []);

  useEffect(() => {
    if (typeof document !== 'undefined') document.documentElement.lang = lang === 'zh' ? 'zh' : 'en';
  }, [lang]);

  const setLang = useCallback((next) => {
    setLangState(next);
    if (typeof window !== 'undefined') window.localStorage.setItem('ibnk-lang', next);
  }, []);

  const t = useCallback((key) => (dict[lang] && dict[lang][key]) ?? dict.en[key] ?? key, [lang]);

  return (
    <I18nContext.Provider value={{ lang, setLang, t }}>{children}</I18nContext.Provider>
  );
}

export function useI18n() {
  return useContext(I18nContext);
}
