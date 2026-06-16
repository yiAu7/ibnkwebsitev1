'use client';

import { createContext, useContext, useEffect, useState, useCallback } from 'react';

const dict = {
  en: {
    'nav.signup': 'Join Whitelist',
    'nav.bookdemo': 'Book Demo',

    'demo.title': 'Book a demo',
    'demo.desc': "Tell us a bit about you and we'll set up a personalized walkthrough.",
    'demo.firstName': 'First name',
    'demo.lastName': 'Last name',
    'demo.email': 'Work email',
    'demo.company': 'Company name',
    'demo.website': 'Company website',
    'demo.optional': '(optional)',
    'demo.role': 'Your role',
    'demo.country': 'Country / Region',
    'demo.useCase': 'Describe Your Use Case',
    'demo.useCase.placeholder': 'Tell us about your use case…',
    'demo.hear': 'How did you hear about us?',
    'demo.hear.select': 'Please select…',
    'demo.hear.ai': 'AI search / GPT',
    'demo.hear.social': 'Social media (LinkedIn / X)',
    'demo.hear.word': 'Word of mouth',
    'demo.hear.other': 'Other',
    'demo.submit': 'Request demo',
    'demo.submitting': 'Submitting…',
    'demo.back': 'Back to home',
    'demo.success.title': 'Thanks — request received.',
    'demo.success.desc': 'Our team will reach out shortly to schedule your demo.',
    'demo.error': 'Something went wrong. Please try again, or email ivy@ibnk.xyz directly.',

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
    'how.title': 'Engineered for global scale from day one.',
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
    'nav.signup': '加入白名单',
    'nav.bookdemo': '预约演示',

    'demo.title': '预约演示',
    'demo.desc': '简单填写一下你的信息,我们会为你安排一对一的产品演示。',
    'demo.firstName': '名字',
    'demo.lastName': '姓氏',
    'demo.email': '工作邮箱',
    'demo.company': '公司名称',
    'demo.website': '公司网站',
    'demo.optional': '(选填)',
    'demo.role': '你的职位',
    'demo.country': '国家 / 地区',
    'demo.useCase': '描述你的使用场景',
    'demo.useCase.placeholder': '请简单描述你的使用场景…',
    'demo.hear': '你是如何了解到我们的?',
    'demo.hear.select': '请选择…',
    'demo.hear.ai': 'AI 搜索 / GPT',
    'demo.hear.social': '社交媒体(LinkedIn / X)',
    'demo.hear.word': '朋友推荐',
    'demo.hear.other': '其他',
    'demo.submit': '提交预约',
    'demo.submitting': '提交中…',
    'demo.back': '返回首页',
    'demo.success.title': '感谢提交,我们已收到你的预约。',
    'demo.success.desc': '我们的团队会尽快联系你,安排演示时间。',
    'demo.error': '提交出现问题,请重试,或直接发送邮件至 ivy@ibnk.xyz。',

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
    'how.title': '从第一天起,便为全球规模而生。',
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
