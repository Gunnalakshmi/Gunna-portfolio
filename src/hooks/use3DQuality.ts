import { useState, useEffect } from 'react';

export type QualityLevel = 'high' | 'performance' | 'off';

export function use3DQuality() {
  const [quality, setQuality] = useState<QualityLevel>('high');
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const [hasWebGL, setHasWebGL] = useState<boolean>(true);

  useEffect(() => {
    // Detect mobile device or low hardware concurrency
    const checkCapabilities = () => {
      const mobileCheck = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) || window.innerWidth < 768;
      setIsMobile(mobileCheck);

      // Check WebGL availability
      try {
        const canvas = document.createElement('canvas');
        const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
        if (!gl) {
          setHasWebGL(false);
          setQuality('off');
          return;
        }
      } catch {
        setHasWebGL(false);
        setQuality('off');
        return;
      }

      // Check reduced motion preference
      const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      if (prefersReducedMotion) {
        setQuality('off');
        return;
      }

      if (mobileCheck) {
        setQuality('performance');
      } else {
        setQuality('high');
      }
    };

    checkCapabilities();
    window.addEventListener('resize', checkCapabilities);
    return () => window.removeEventListener('resize', checkCapabilities);
  }, []);

  const cycleQuality = () => {
    setQuality((prev) => {
      if (prev === 'high') return 'performance';
      if (prev === 'performance') return 'off';
      return 'high';
    });
  };

  return {
    quality,
    setQuality,
    cycleQuality,
    isMobile,
    hasWebGL,
  };
}
