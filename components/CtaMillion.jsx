'use client';

import { useEffect, useRef } from 'react';

export default function CtaMillion() {
  const sectionRef = useRef(null);
  const topLayerRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    const topLayer = topLayerRef.current;
    if (!section || !topLayer) return;

    let ticking = false;

    function updateReveal() {
      const rect = section.getBoundingClientRect();
      const vh = window.innerHeight;
      let progress = 1 - (rect.bottom - vh * 0.3) / rect.height;
      progress = Math.max(0, Math.min(1, progress));

      if (progress <= 0) {
        topLayer.style.clipPath = 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)';
      } else {
        const tipY = 100 - progress * 70;
        const spread = progress * 60;
        topLayer.style.clipPath = `polygon(0% 0%, 100% 0%, 100% 100%, ${50 + spread}% 100%, 50% ${tipY}%, ${50 - spread}% 100%, 0% 100%)`;
      }
    }

    function onScroll() {
      if (!ticking) {
        requestAnimationFrame(() => {
          updateReveal();
          ticking = false;
        });
        ticking = true;
      }
    }

    window.addEventListener('scroll', onScroll, { passive: true });
    updateReveal();

    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  return (
    <section className="_extra-bold-hero grid-stack" id="extra-bold-hero" ref={sectionRef}>
      {/* Bottom layer: white bg, red text (revealed by triangle) */}
      <div className="extra-bold-layer flex flex-col items-center text-center py-216-140 color-orange background-white">
        <h2 className="title-1 -medium w-cols-12 sm-w-cols-14 xs-w-cols-16">The future of payments starts here.</h2>
        <p className="subhead-2 -medium w-cols-10 xs-w-cols-12 mt-64-24">It only takes a few minutes to get started.</p>
        <div className="flex gap-24 mt-64-48">
          <a href="https://cal.com/yi-zhang-avxwyp/15min" target="_blank" rel="noopener noreferrer" className="_button no-tap-highlight" data-button="" data-label="true" data-tone="orange" data-variant="primary">
            <div data-button-background=""></div>
            <span className="label relative body -book">
              <span data-split-text="" className="whitespace-nowrap"><span className="c">B</span><span className="c">o</span><span className="c">o</span><span className="c">k</span><span className="c -space"> </span><span className="c">a</span><span className="c -space"> </span><span className="c">D</span><span className="c">e</span><span className="c">m</span><span className="c">o</span></span>
              <span data-split-text="" className="clone whitespace-nowrap" aria-hidden="true"><span className="c">B</span><span className="c">o</span><span className="c">o</span><span className="c">k</span><span className="c -space"> </span><span className="c">a</span><span className="c -space"> </span><span className="c">D</span><span className="c">e</span><span className="c">m</span><span className="c">o</span></span>
            </span>
          </a>
          <a href="mailto:support@ibnk.xyz" className="_button no-tap-highlight" data-button="" data-label="true" data-tone="orange" data-variant="outline">
            <div data-button-background=""></div>
            <span className="label relative body -book">
              <span data-split-text="" className="whitespace-nowrap"><span className="c">C</span><span className="c">o</span><span className="c">n</span><span className="c">t</span><span className="c">a</span><span className="c">c</span><span className="c">t</span><span className="c -space"> </span><span className="c">U</span><span className="c">s</span></span>
              <span data-split-text="" className="clone whitespace-nowrap" aria-hidden="true"><span className="c">C</span><span className="c">o</span><span className="c">n</span><span className="c">t</span><span className="c">a</span><span className="c">c</span><span className="c">t</span><span className="c -space"> </span><span className="c">U</span><span className="c">s</span></span>
            </span>
          </a>
        </div>
      </div>

      {/* Top layer: red bg, white text (clip-path cuts triangle to reveal bottom) */}
      <div
        className="extra-bold-layer extra-bold-top flex flex-col items-center text-center py-216-140 color-white background-orange"
        id="extra-bold-top"
        ref={topLayerRef}
      >
        <h2 className="title-1 -medium w-cols-12 sm-w-cols-14 xs-w-cols-16">The future of payments starts here.</h2>
        <p className="subhead-2 -medium w-cols-10 xs-w-cols-12 mt-64-24">It only takes a few minutes to get started.</p>
        <div className="flex gap-24 mt-64-48">
          <a href="https://cal.com/yi-zhang-avxwyp/15min" target="_blank" rel="noopener noreferrer" className="_button no-tap-highlight" data-button="" data-label="true" data-tone="neutral" data-variant="primary">
            <div data-button-background=""></div>
            <span className="label relative body -book">
              <span data-split-text="" className="whitespace-nowrap"><span className="c">B</span><span className="c">o</span><span className="c">o</span><span className="c">k</span><span className="c -space"> </span><span className="c">a</span><span className="c -space"> </span><span className="c">D</span><span className="c">e</span><span className="c">m</span><span className="c">o</span></span>
              <span data-split-text="" className="clone whitespace-nowrap" aria-hidden="true"><span className="c">B</span><span className="c">o</span><span className="c">o</span><span className="c">k</span><span className="c -space"> </span><span className="c">a</span><span className="c -space"> </span><span className="c">D</span><span className="c">e</span><span className="c">m</span><span className="c">o</span></span>
            </span>
          </a>
          <a href="mailto:support@ibnk.xyz" className="_button no-tap-highlight" data-button="" data-label="true" data-tone="neutral" data-variant="outline">
            <div data-button-background=""></div>
            <span className="label relative body -book">
              <span data-split-text="" className="whitespace-nowrap"><span className="c">C</span><span className="c">o</span><span className="c">n</span><span className="c">t</span><span className="c">a</span><span className="c">c</span><span className="c">t</span><span className="c -space"> </span><span className="c">U</span><span className="c">s</span></span>
              <span data-split-text="" className="clone whitespace-nowrap" aria-hidden="true"><span className="c">C</span><span className="c">o</span><span className="c">n</span><span className="c">t</span><span className="c">a</span><span className="c">c</span><span className="c">t</span><span className="c -space"> </span><span className="c">U</span><span className="c">s</span></span>
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
