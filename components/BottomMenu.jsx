'use client';

import { useState, useEffect, useCallback } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import SupportChat from './SupportChat';

export default function BottomMenu() {
  const pathname = usePathname();
  const [expandedMenu, setExpandedMenu] = useState(null);
  const [chatOpen, setChatOpen] = useState(false);

  const toggleMenu = useCallback((menuName) => {
    setExpandedMenu((prev) => (prev === menuName ? null : menuName));
  }, []);

  // Close menus when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (!e.target.closest('._menu')) {
        setExpandedMenu(null);
      }
    };
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);

  return (
    <>
      {/* Bottom Floating Menu — hidden for now */}
      <nav className="_menu" data-variant="drawers" style={{ display: 'none' }}>
        <ul className="menu-bar gap-2">
          {/* Home */}
          <li>
            <Link href="/" className={`_menu-button body-small -book${pathname === '/' ? ' active' : ''}`} data-menu-path="/">
              <div className="background"></div>
              <span className="_icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" clipRule="evenodd" d="M5.25 8.00001H6.75V19.5H17.25V8.00001H18.75V18.75C18.75 19.9926 17.7426 21 16.5 21H7.5C6.25736 21 5.25 19.9926 5.25 18.75L5.25 8.00001Z" fill="currentColor" />
                  <path fillRule="evenodd" clipRule="evenodd" d="M10.7166 3.72814C11.4883 3.19225 12.5117 3.19225 13.2834 3.72814L22.0438 9.81177L21.1882 11.0438L12 4.66312L2.81177 11.0438L1.95618 9.81177L10.7166 3.72814Z" fill="currentColor" />
                </svg>
              </span>
            </Link>
          </li>

          {/* Personal */}
          <li style={{ position: 'relative' }}>
            <button
              className="_menu-button body-small -book"
              data-action="expand"
              aria-expanded={expandedMenu === 'personal' ? 'true' : 'false'}
              onClick={() => toggleMenu('personal')}
            >
              <div className="background"></div>
              <span>Personal</span>
              <span className="_icon -sm">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" clipRule="evenodd" d="M8 8.93934L4.53033 5.46967L3.46967 6.53033L6.58578 9.64645C7.36683 10.4275 8.63316 10.4275 9.41421 9.64645L12.5303 6.53033L11.4697 5.46967L8 8.93934Z" fill="currentColor" />
                </svg>
              </span>
            </button>
            <div className="_menu-drawer">
              <div className="slot">
                <a href="#cross-border" className="link"><span className="dot"></span><span>Cross-Border Payments</span></a>
                <a href="mailto:support@ibnk.xyz?subject=iBnk%20Card" className="link"><span className="dot"></span><span>iBnk Card</span></a>
                <a href="mailto:support@ibnk.xyz?subject=Fees" className="link"><span className="dot"></span><span>Fees</span></a>
              </div>
            </div>
          </li>

          {/* Business */}
          <li>
            <button
              className="_menu-button body-small -book"
              data-action="expand"
              aria-expanded={expandedMenu === 'business' ? 'true' : 'false'}
              onClick={() => toggleMenu('business')}
            >
              <div className="background"></div>
              <span>Business</span>
              <span className="_icon -sm">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" clipRule="evenodd" d="M8 8.93934L4.53033 5.46967L3.46967 6.53033L6.58578 9.64645C7.36683 10.4275 8.63316 10.4275 9.41421 9.64645L12.5303 6.53033L11.4697 5.46967L8 8.93934Z" fill="currentColor" />
                </svg>
              </span>
            </button>
            <div className="_menu-drawer">
              <div className="slot">
                <a href="mailto:support@ibnk.xyz?subject=Embedded%20Finance" className="link"><span className="dot"></span><span>Embedded Finance</span></a>
                <a href="#agentic" className="link"><span className="dot"></span><span>Agentic Payments</span></a>
              </div>
            </div>
          </li>

          {/* Company */}
          <li style={{ position: 'relative' }}>
            <button
              className="_menu-button body-small -book"
              data-action="expand"
              aria-expanded={expandedMenu === 'company' ? 'true' : 'false'}
              onClick={() => toggleMenu('company')}
            >
              <div className="background"></div>
              <span>Company</span>
              <span className="_icon -sm">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" clipRule="evenodd" d="M8 8.93934L4.53033 5.46967L3.46967 6.53033L6.58578 9.64645C7.36683 10.4275 8.63316 10.4275 9.41421 9.64645L12.5303 6.53033L11.4697 5.46967L8 8.93934Z" fill="currentColor" />
                </svg>
              </span>
            </button>
            <div className="_menu-drawer">
              <div className="slot">
                <a href="mailto:support@ibnk.xyz?subject=About%20iBnk" className="link"><span className="dot"></span><span>About</span></a>
              </div>
            </div>
          </li>
        </ul>
      </nav>

      {/* Support Button */}
      <button
        className="_support-btn"
        aria-label="Support"
        onClick={() => setChatOpen((v) => !v)}
      >
        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M21 11.5C21.0034 12.8199 20.6951 14.1219 20.1 15.3C19.3944 16.7118 18.3098 17.8992 16.9674 18.7293C15.6251 19.5594 14.0782 19.9994 12.5 20C11.1801 20.0035 9.87812 19.6951 8.7 19.1L3 21L4.9 15.3C4.30493 14.1219 3.99656 12.8199 4 11.5C4.00061 9.92179 4.44061 8.37488 5.27072 7.03258C6.10083 5.69028 7.28825 4.6056 8.7 3.90003C9.87812 3.30496 11.1801 2.99659 12.5 3.00003H13C15.0843 3.11502 17.053 3.99479 18.5291 5.47089C20.0052 6.94699 20.885 8.91568 21 11V11.5Z" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        <span>Support</span>
      </button>

      <SupportChat open={chatOpen} onClose={() => setChatOpen(false)} />
    </>
  );
}
