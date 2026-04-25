'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const AccordionIcon = () => (
  <span className="_icon shrink-0">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 4V20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square" style={{ transformOrigin: '12px 12px' }}></path>
      <path d="M20 12L4 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square" style={{ transformOrigin: '12px 12px' }}></path>
    </svg>
  </span>
);

export default function Footer() {
  useEffect(() => {
    const accordions = document.querySelectorAll('._footer ._accordion > button');

    accordions.forEach((btn) => {
      const content = btn.nextElementSibling;
      if (!content) return;

      // Initial state: collapse on mobile
      if (btn.getAttribute('aria-expanded') !== 'true') {
        content.style.height = '0';
        content.style.overflow = 'hidden';
        content.style.transition = 'height 0.3s ease';
      }

      btn.addEventListener('click', function handler() {
        const expanded = btn.getAttribute('aria-expanded') === 'true';
        if (expanded) {
          content.style.height = content.scrollHeight + 'px';
          content.offsetHeight; // force reflow
          content.style.height = '0';
          btn.setAttribute('aria-expanded', 'false');
        } else {
          btn.setAttribute('aria-expanded', 'true');
          content.style.height = content.scrollHeight + 'px';
          content.addEventListener('transitionend', function te() {
            if (btn.getAttribute('aria-expanded') === 'true') {
              content.style.height = 'auto';
            }
            content.removeEventListener('transitionend', te);
          });
        }
      });
    });

    function checkAccordions() {
      const isDesktop = window.innerWidth > 1023;
      accordions.forEach((btn) => {
        const content = btn.nextElementSibling;
        if (content) {
          if (isDesktop) {
            content.style.height = 'auto';
            content.style.overflow = 'visible';
          } else if (btn.getAttribute('aria-expanded') !== 'true') {
            content.style.height = '0';
            content.style.overflow = 'hidden';
          }
        }
      });
    }
    checkAccordions();
    window.addEventListener('resize', checkAccordions);

    return () => {
      window.removeEventListener('resize', checkAccordions);
    };
  }, []);

  return (
    <footer className="_footer g-row-full color-orange -book">
      <ul className="links mt-80-32 g-row-full body color-orange">
        {/* Get Started */}
        <li>
          <div className="_accordion" data-motion="false">
            <button className="w-full" aria-expanded="false">
              <div className="link-group-header opacity-50 w-full flex items-center justify-between">
                <span>Get Started</span>
                <AccordionIcon />
              </div>
            </button>
            <div className="accordion-content">
              <ul>
                <li><a href="https://cal.com/yi-zhang-avxwyp/15min" target="_blank" rel="noopener noreferrer" className="footer-link">Book a Demo</a></li>
                <li><a href="mailto:support@ibnk.xyz" className="footer-link">Contact Us</a></li>
              </ul>
            </div>
          </div>
        </li>

        {/* Products */}
        <li>
          <div className="_accordion" data-motion="false">
            <button className="w-full" aria-expanded="false">
              <div className="link-group-header opacity-50 w-full flex items-center justify-between">
                <span>Products</span>
                <AccordionIcon />
              </div>
            </button>
            <div className="accordion-content">
              <ul>
                <li><Link href="/cross-border-payments" className="footer-link">Cross-Border Payments</Link></li>
                <li><Link href="/agentic-payments" className="footer-link">Agentic Payments</Link></li>
                <li><Link href="/embedded-finance" className="footer-link">Embedded Finance</Link></li>
                <li><Link href="/fees" className="footer-link">Pricing</Link></li>
              </ul>
            </div>
          </div>
        </li>

        {/* Company */}
        <li>
          <div className="_accordion" data-motion="false">
            <button className="w-full" aria-expanded="false">
              <div className="link-group-header opacity-50 w-full flex items-center justify-between">
                <span>Company</span>
                <AccordionIcon />
              </div>
            </button>
            <div className="accordion-content">
              <ul>
                <li><Link href="/about" className="footer-link">About iBnk</Link></li>
                <li><a href="https://www.linkedin.com/company/ibnk-vault-llc/" target="_blank" rel="noopener noreferrer" className="footer-link">LinkedIn</a></li>
                <li><a href="https://x.com/ibnkvault" target="_blank" rel="noopener noreferrer" className="footer-link">X (Twitter)</a></li>
              </ul>
            </div>
          </div>
        </li>

        {/* Legal */}
        <li>
          <div className="_accordion" data-motion="false">
            <button className="w-full" aria-expanded="false">
              <div className="link-group-header opacity-50 w-full flex items-center justify-between">
                <span>Legal</span>
                <AccordionIcon />
              </div>
            </button>
            <div className="accordion-content">
              <ul>
                <li><Link href="/privacy-policy" className="footer-link">Privacy Policy</Link></li>
                <li><Link href="/terms-and-conditions" className="footer-link">Terms and Conditions</Link></li>
                <li><Link href="/cookie-policy" className="footer-link">Cookie Policy</Link></li>
                <li><Link href="/aml-policy" className="footer-link">AML Policy</Link></li>
              </ul>
            </div>
          </div>
        </li>

        {/* Help */}
        <li>
          <div className="_accordion" data-motion="false">
            <button className="w-full" aria-expanded="false">
              <div className="link-group-header opacity-50 w-full flex items-center justify-between">
                <span>Help</span>
                <AccordionIcon />
              </div>
            </button>
            <div className="accordion-content">
              <ul>
                <li><a href="mailto:support@ibnk.xyz" className="footer-link">Support</a></li>
                <li><a href="https://cal.com/yi-zhang-avxwyp/15min" target="_blank" rel="noopener noreferrer" className="footer-link">Book a Meeting</a></li>
              </ul>
            </div>
          </div>
        </li>
      </ul>

      <div className="externals mt-80-32 g-row-full flex flex-wrap gap-24 justify-between items-center">
        {/* Regulatory Badges */}
        <div className="flex gap-24 items-center">
          <div style={{ border: '1.5px solid rgba(247,59,32,0.3)', borderRadius: '8px', padding: '8px 16px', display: 'flex', flexDirection: 'column', gap: '2px' }}>
            <span className="caption opacity-50">Canada MSB</span>
            <span className="body-small -medium">FINTRAC &middot; N3000001312</span>
          </div>
          <div style={{ border: '1.5px solid rgba(247,59,32,0.3)', borderRadius: '8px', padding: '8px 16px', display: 'flex', flexDirection: 'column', gap: '2px' }}>
            <span className="caption opacity-50">Australia AUSTRAC</span>
            <span className="body-small -medium">DCE &amp; Remittance Registered</span>
          </div>
        </div>

        {/* Social Links */}
        <div className="socials flex">
          <a href="https://www.linkedin.com/company/ibnk-vault-llc/" target="_blank" rel="noopener noreferrer" className="_circle-button" aria-label="LinkedIn">
            <div className="bg absolute inset-0"></div>
            <span className="_icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                <circle cx="4" cy="4" r="2" stroke="currentColor" strokeWidth="1.5" />
              </svg>
            </span>
          </a>
          <a href="https://x.com/ibnkvault" target="_blank" rel="noopener noreferrer" className="_circle-button" aria-label="X (Twitter)">
            <div className="bg absolute inset-0"></div>
            <span className="_icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3.04 4l6.95 9.29L3 20.85h1.57l5.72-5.01 4.95 5.01H21l-6.34-9.82 6.51-6.03h-1.57l-5.66 5.25L9.4 4H3.04zm2.31 1.16h2.46l10.87 14.53h-2.46L5.36 5.16z" fill="currentColor" />
              </svg>
            </span>
          </a>
        </div>
      </div>

      <div className="divider mt-24-16 g-row-full opacity-10 background-orange"></div>

      <div className="mt-24-16 g-row-full flex justify-between items-center">
        <span className="footer-link body -book">en</span>
        <span className="footer-link">&copy; 2026 iBnk</span>
      </div>

      <div className="wordmark relative mt-32 g-row-full">
        <Image src="/images/ibnk-logo-white.svg" alt="iBnk" width={300} height={120} style={{ height: '64px', width: 'auto', display: 'block' }} />
      </div>

      <p className="mt-96-32 opacity-50 color-orange caption whitespace-pre-line">{`\u00A9 2026 iBnk. ibnk.xyz is owned and operated by IBNK VAULT INC., a company incorporated in British Columbia, Canada (Incorporation No. BC1571168). Registered address: 200\u20137404 King George Boulevard, Surrey, BC V3W 1N6, Canada. Office: 6060 Silver Drive, Suite 300, Burnaby, BC V5H 0H5, Canada.

IBNK VAULT INC. is registered as a Money Services Business (MSB) with the Financial Transactions and Reports Analysis Centre of Canada (FINTRAC), Registration No. N3000001312, authorised to provide Foreign Exchange, Money Transferring, Virtual Currency, and Payment Service Provider (PSP) services.

iBnk services in Australia are provided by Inteelifusion Pty Ltd (ABN pending), 525 Collins Street, Melbourne, Australia, registered with AUSTRAC as a Digital Currency Exchange provider (DCE100905510-001) and Independent Remittance Dealer (IND100905510-001).

iBnk does not provide financial advice. Digital asset services involve risk. Please read our Terms and Conditions and Risk Disclosure before using our services.`}</p>
    </footer>
  );
}
