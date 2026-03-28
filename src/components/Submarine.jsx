import React, { useState, useEffect } from 'react';

export default function Submarine({ position = 'left', depth = 0 }) {
  const [isMoving, setIsMoving] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsMoving(prev => !prev);
    }, 8000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div style={{
      position: 'absolute',
      left: position === 'left' ? '5%' : 'auto',
      right: position === 'right' ? '5%' : 'auto',
      top: `${40 + depth}%`,
      zIndex: 5,
      pointerEvents: 'none',
      opacity: 0.7 + depth * 0.05,
      filter: `drop-shadow(0 0 ${15 + depth * 2}px rgba(100,200,255,${0.3 + depth * 0.1}))`,
    }}>
      <svg 
        width={80 + depth * 10} 
        height={60 + depth * 8} 
        viewBox="0 0 80 60" 
        xmlns="http://www.w3.org/2000/svg"
        style={{
          animation: `submarineFloat ${3 + depth * 0.5}s ease-in-out infinite`,
          transform: position === 'right' ? 'scaleX(-1)' : 'scaleX(1)',
        }}
      >
        {/* Main hull */}
        <ellipse cx="40" cy="30" rx="35" ry="20" fill="#1a2f4a" stroke="#00d4ff" strokeWidth="1" opacity="0.9" />
        
        {/* Hull window */}
        <circle cx="35" cy="28" r="8" fill="#0a4a7a" stroke="#00d4ff" strokeWidth="1" />
        <circle cx="35" cy="28" r="6" fill="rgba(100,200,255,0.3)" />
        
        {/* Body detail */}
        <rect x="15" y="35" width="50" height="12" rx="3" fill="#0f2a45" opacity="0.7" />
        
        {/* Propeller */}
        <g transform="translate(70, 30)">
          <rect x="-2" y="-8" width="4" height="16" fill="#0f2a45" opacity="0.8" />
          <circle cx="0" cy="0" r="3" fill="#00d4ff" opacity="0.6" />
        </g>
        
        {/* Side fins */}
        <path d="M 20 35 L 15 45 L 20 43 Z" fill="#0f2a45" opacity="0.7" />
        <path d="M 60 35 L 65 45 L 60 43 Z" fill="#0f2a45" opacity="0.7" />
        
        {/* Lights on hull */}
        <circle cx="45" cy="26" r="2" fill="#00f5d4" opacity="0.8" />
        <circle cx="50" cy="28" r="2" fill="#00f5d4" opacity="0.6" />
      </svg>

      <style>{`
        @keyframes submarineFloat {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
      `}</style>
    </div>
  );
}
