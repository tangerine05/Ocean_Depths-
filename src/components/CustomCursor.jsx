import React, { useState, useEffect, useRef } from 'react';

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const cursorRef = useRef(null);
  const dotRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseEnter = (e) => {
      if (e.target.hasAttribute('data-hover') || e.target.tagName === 'BUTTON' || e.target.tagName === 'A') {
        setIsHovering(true);
      }
    };

    const handleMouseLeave = () => {
      setIsHovering(false);
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseenter', handleMouseEnter, true);
    document.addEventListener('mouseleave', handleMouseLeave, true);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseenter', handleMouseEnter, true);
      document.removeEventListener('mouseleave', handleMouseLeave, true);
    };
  }, []);

  return (
    <>
      {/* Outer ring cursor */}
      <div
        ref={cursorRef}
        style={{
          position: 'fixed',
          left: `${position.x}px`,
          top: `${position.y}px`,
          width: isHovering ? '40px' : '30px',
          height: isHovering ? '40px' : '30px',
          border: isHovering ? '2px solid var(--bio-cyan)' : '1.5px solid rgba(0, 245, 212, 0.5)',
          borderRadius: '50%',
          pointerEvents: 'none',
          transform: 'translate(-50%, -50%)',
          zIndex: 999999,
          transition: 'all 0.2s ease-out',
          boxShadow: isHovering ? '0 0 20px rgba(0, 245, 212, 0.4)' : 'none',
        }}
      />
      {/* Inner dot */}
      <div
        ref={dotRef}
        style={{
          position: 'fixed',
          left: `${position.x}px`,
          top: `${position.y}px`,
          width: isHovering ? '8px' : '4px',
          height: isHovering ? '8px' : '4px',
          backgroundColor: 'var(--bio-cyan)',
          borderRadius: '50%',
          pointerEvents: 'none',
          transform: 'translate(-50%, -50%)',
          zIndex: 1000000,
          transition: 'all 0.2s ease-out',
          boxShadow: isHovering ? '0 0 10px var(--bio-cyan)' : 'none',
        }}
      />
    </>
  );
}
