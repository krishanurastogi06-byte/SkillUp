import { useEffect } from 'react';
import { gsap } from 'gsap';

const useGsapFadeIn = (ref, delay = 0, y = 20) => {
  useEffect(() => {
    if (!ref.current) return;
    gsap.fromTo(
      ref.current,
      { autoAlpha: 0, y: y },
      { autoAlpha: 1, y: 0, duration: 1, delay: delay, ease: 'power3.out' }
    );
  }, [ref, delay, y]);
};

export default useGsapFadeIn;
