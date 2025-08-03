import React, { useEffect } from 'react';
import gsap from 'gsap';

const CustomCursor = () => {
  useEffect(() => {
    const dot = document.querySelector('.cursor-dot');
    const ring = document.querySelector('.cursor-ring');

    const moveCursor = (e) => {
      const { clientX, clientY } = e;

      // Instant dot
      gsap.set(dot, {
        x: clientX,
        y: clientY,
      });

      // Delayed ring (300ms)
      gsap.to(ring, {
        x: clientX,
        y: clientY,
        duration: 0.6,
        ease: 'power3.out',
      });
    };

    window.addEventListener('mousemove', moveCursor);
    return () => window.removeEventListener('mousemove', moveCursor);
  }, []);

  return (
    <>
      <div className="cursor-dot fixed top-0 left-0 w-2.5 h-2.5 bg-yellow-400 rounded-full pointer-events-none z-[9999] mix-blend-difference transform -translate-x-1/2 -translate-y-1/2" />

      <div className="cursor-ring fixed -top-[1px] -left-[1px] w-7 h-7 border border-yellow-300 rounded-full pointer-events-none z-[9998] mix-blend-difference transform -translate-x-1/2 -translate-y-1/2" />
    </>
  );
};

export default CustomCursor;
