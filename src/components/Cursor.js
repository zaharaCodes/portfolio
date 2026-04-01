import React, { useEffect, useRef, useState } from 'react';

const Cursor = () => {
  const cursorRef = useRef(null);
  const cursorDotRef = useRef(null);
  const [particles, setParticles] = useState([]);
  const mousePos = useRef({ x: 0, y: 0 });
  const particleId = useRef(0);

  useEffect(() => {
    // Hide on mobile
    if (window.innerWidth < 768) return;

    const moveCursor = (e) => {
      const { clientX: x, clientY: y } = e;
      mousePos.current = { x, y };

      // Move main cursor
      if (cursorRef.current) {
        cursorRef.current.style.left = x + 'px';
        cursorRef.current.style.top = y + 'px';
      }

      // Move dot
      if (cursorDotRef.current) {
        cursorDotRef.current.style.left = x + 'px';
        cursorDotRef.current.style.top = y + 'px';
      }

      // Create star particle
      const id = particleId.current++;
      const colors = [
        '#60a5fa', '#34d399', '#a78bfa',
        '#f472b6', '#fbbf24', '#ffffff',
        '#67e8f9', '#c084fc'
      ];
      const color = colors[Math.floor(Math.random() * colors.length)];
      const size = Math.random() * 6 + 2;
      const angle = Math.random() * Math.PI * 2;
      const speed = Math.random() * 3 + 1;
      const vx = Math.cos(angle) * speed;
      const vy = Math.sin(angle) * speed;

      const newParticle = {
        id,
        x,
        y,
        vx,
        vy,
        color,
        size,
        opacity: 1,
        life: 1,
      };

      setParticles(prev => [...prev.slice(-30), newParticle]);
    };

    window.addEventListener('mousemove', moveCursor);
    return () => window.removeEventListener('mousemove', moveCursor);
  }, []);

  // Animate particles
  useEffect(() => {
    const interval = setInterval(() => {
      setParticles(prev =>
        prev
          .map(p => ({
            ...p,
            x: p.x + p.vx,
            y: p.y + p.vy,
            vy: p.vy + 0.1, // gravity
            life: p.life - 0.04,
            opacity: p.life,
            size: p.size * 0.96,
          }))
          .filter(p => p.life > 0)
      );
    }, 16);

    return () => clearInterval(interval);
  }, []);

  if (window.innerWidth < 768) return null;

  return (
    <>
      {/* Main Cursor Ring */}
      <div
        ref={cursorRef}
        className="fixed pointer-events-none z-[9999]"
        style={{
          transform: 'translate(-50%, -50%)',
          transition: 'left 0.08s ease, top 0.08s ease',
        }}
      >
        {/* Outer Ring */}
        <div
          style={{
            width: '36px',
            height: '36px',
            borderRadius: '50%',
            border: '2px solid rgba(96, 165, 250, 0.6)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 0 15px rgba(96, 165, 250, 0.3)',
            animation: 'cursorPulse 2s ease-in-out infinite',
          }}
        >
          {/* Inner Ring */}
          <div
            style={{
              width: '18px',
              height: '18px',
              borderRadius: '50%',
              border: '1px solid rgba(167, 139, 250, 0.5)',
              boxShadow: '0 0 8px rgba(167, 139, 250, 0.4)',
            }}
          />
        </div>
      </div>

      {/* Center Dot */}
      <div
        ref={cursorDotRef}
        className="fixed pointer-events-none z-[9999]"
        style={{
          width: '5px',
          height: '5px',
          borderRadius: '50%',
          background: 'white',
          transform: 'translate(-50%, -50%)',
          boxShadow: '0 0 6px white',
        }}
      />

      {/* Star Particles */}
      {particles.map(p => (
        <div
          key={p.id}
          className="fixed pointer-events-none z-[9998]"
          style={{
            left: p.x,
            top: p.y,
            width: p.size,
            height: p.size,
            borderRadius: '50%',
            background: p.color,
            opacity: p.opacity,
            transform: 'translate(-50%, -50%)',
            boxShadow: `0 0 ${p.size * 2}px ${p.color}`,
            transition: 'none',
          }}
        />
      ))}

      {/* CSS for cursor pulse */}
      <style>{`
        @keyframes cursorPulse {
          0%, 100% { transform: scale(1); opacity: 1; }
          50% { transform: scale(1.2); opacity: 0.7; }
        }
        * { cursor: none !important; }
        @media (max-width: 768px) {
          * { cursor: auto !important; }
        }
      `}</style>
    </>
  );
};

export default Cursor;