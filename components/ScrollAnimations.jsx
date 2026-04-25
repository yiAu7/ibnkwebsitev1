'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

export default function ScrollAnimations() {
  const pathname = usePathname();

  useEffect(() => {
    // Run after a small delay to ensure DOM is rendered
    const timer = setTimeout(() => {
      const elements = document.querySelectorAll('[data-animate], [data-animate-stagger]');
      if (!elements.length) return;

      // First pass: immediately show elements already in viewport
      elements.forEach((el) => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.9 && rect.bottom > 0) {
          el.classList.add('anim-visible');
        }
      });

      // Second pass: observe elements not yet visible
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('anim-visible');
              observer.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.05, rootMargin: '0px 0px -5% 0px' }
      );

      elements.forEach((el) => {
        if (!el.classList.contains('anim-visible')) {
          observer.observe(el);
        }
      });

      return () => observer.disconnect();
    }, 150);

    return () => clearTimeout(timer);
  }, [pathname]); // Re-run on route change

  return null;
}
