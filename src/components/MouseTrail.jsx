import React, { useEffect } from 'react';

const MouseTrail = () => {
  useEffect(() => {
    const coords = { x: 0, y: 0 };
    const numDots = 20; // Number of dots
    const dots = [];
    const trail = document.createElement('div');
    trail.className = 'fixed top-0 left-0 pointer-events-none z-[9998]';

    // Create dots
    for (let i = 0; i < numDots; i++) {
      const dot = document.createElement('div');
      dot.className = 'circle w-4 h-4 bg-black rounded-full absolute';
      trail.appendChild(dot);
      dots.push(dot);
    }

    document.body.appendChild(trail);


    dots.forEach(function (circle) {
      circle.x = 0;
      circle.y = 0;
      circle.style.backgroundColor = '#674188';
    });

    window.addEventListener("mousemove", function(e) {
      coords.x = e.clientX;
      coords.y = e.clientY;
    });

    function animateCircles() {
      let x = coords.x;
      let y = coords.y;

      dots.forEach(function (circle, index) {
        circle.style.left = `${x - 16}px`;
        circle.style.top = `${y - 16}px`;
        
        circle.style.scale = (dots.length - index) / dots.length;
        
        circle.x = x;
        circle.y = y;

        const nextCircle = dots[index + 1] || dots[0];
        x += (nextCircle.x - x) * 0.3;
        y += (nextCircle.y - y) * 0.3;
      });

      requestAnimationFrame(animateCircles);
    }

    animateCircles();

    // Clean up on component unmount
    return () => {
      document.body.removeChild(trail);
    };
  }, []);

  return null;
};

export default MouseTrail;
