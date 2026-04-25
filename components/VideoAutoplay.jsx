'use client';

import { useEffect } from 'react';

export default function VideoAutoplay() {
  useEffect(() => {
    const videos = document.querySelectorAll(
      'video._video-asset, ._common-header video, ._mobile-app-hero video, ._jeton-card-overview video'
    );

    videos.forEach((video) => {
      video.play()
        .then(() => video.classList.add('loaded'))
        .catch(() => video.classList.add('loaded'));
      video.addEventListener('canplay', function handler() {
        video.classList.add('loaded');
        video.removeEventListener('canplay', handler);
      });
    });
  }, []);

  return null;
}
