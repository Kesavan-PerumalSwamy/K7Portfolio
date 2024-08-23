import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

const Ball = () => {
  const ballRef = useRef(null);
  const pos = useRef({ x: window.innerWidth / 2, y: window.innerHeight / 2 });
  const mouse = useRef({ x: pos.current.x, y: pos.current.y });
  const speed = 0.08;

  useEffect(() => {
    const ball = ballRef.current;
    gsap.set(ball, { xPercent: -50, yPercent: -50 });

    const xSet = gsap.quickSetter(ball, 'x', 'px');
    const ySet = gsap.quickSetter(ball, 'y', 'px');

    const handleMouseMove = (e) => {
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;
    };

    window.addEventListener('mousemove', handleMouseMove);

    gsap.ticker.add(() => {
      const dt = 1.0 - Math.pow(1.0 - speed, gsap.ticker.deltaRatio());
      pos.current.x += (mouse.current.x - pos.current.x) * dt;
      pos.current.y += (mouse.current.y - pos.current.y) * dt;
      xSet(pos.current.x);
      ySet(pos.current.y);
    });

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div
      ref={ballRef}
      className="ball"
      style={{
        position: 'fixed',
        top: '0',
        left: '0',
        width: '60px',
        height: '60px',
        borderRadius: '50%',
        backgroundColor: '#FF7F3E', 
        pointerEvents: 'none',
        zIndex: '10000',
        mixBlendMode: 'darken',
        display: 'none', 
      }}
    />
  );
};

export default Ball;
