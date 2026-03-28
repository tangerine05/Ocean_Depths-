import React, { useEffect, useState } from 'react';

const Fish = ({ type = 'small', x = Math.random() * 80, y = Math.random() * 60, speed = 4 }) => {
  const fishSpecs = {
    small: { width: 25, height: 12, color: '#2a8aad' },
    medium: { width: 40, height: 18, color: '#1a6a8d' },
    large: { width: 55, height: 22, color: '#0f4a6d' },
    anglerfish: { width: 35, height: 20, color: '#0a1f3a' },
  };

  const spec = fishSpecs[type] || fishSpecs.small;
  const direction = Math.random() > 0.5 ? 1 : -1;

  const renderFish = () => {
    switch(type) {
      case 'anglerfish':
        return (
          <svg width={spec.width} height={spec.height} viewBox="0 0 35 20" xmlns="http://www.w3.org/2000/svg">
            {/* Anglerfish - bioluminescent lure */}
            <circle cx="28" cy="3" r="2.5" fill="#00f5d4" opacity="0.9" />
            <line x1="28" y1="3" x2="32" y2="2" stroke="#00f5d4" strokeWidth="1.5" opacity="0.7" />
            
            {/* Body */}
            <path d="M 5 10 Q 15 5 25 10 Q 15 15 5 10 Z" fill={spec.color} />
            <circle cx="8" cy="8" r="1.5" fill="#00d4ff" opacity="0.6" />
            
            {/* Spines */}
            <line x1="12" y1="5" x2="12" y2="2" stroke="#1a3a4a" strokeWidth="0.8" />
            <line x1="18" y1="4" x2="18" y2="1" stroke="#1a3a4a" strokeWidth="0.8" />
            
            {/* Tail */}
            <path d="M 25 10 L 35 8 L 33 10 L 35 12 Z" fill="#1a3a4a" opacity="0.8" />
          </svg>
        );
      
      case 'medium':
        return (
          <svg width={spec.width} height={spec.height} viewBox="0 0 40 18" xmlns="http://www.w3.org/2000/svg">
            {/* Body */}
            <path d="M 5 9 Q 15 4 25 9 Q 15 14 5 9 Z" fill={spec.color} stroke="#2a9acd" strokeWidth="1" />
            {/* Stripes */}
            <line x1="10" y1="7" x2="10" y2="11" stroke="rgba(0,212,255,0.4)" strokeWidth="0.5" />
            <line x1="15" y1="6" x2="15" y2="12" stroke="rgba(0,212,255,0.3)" strokeWidth="0.5" />
            {/* Eye */}
            <circle cx="7" cy="8" r="1.5" fill="#00f5d4" />
            {/* Fins */}
            <path d="M 12 4 L 14 2 L 13 4 Z" fill="#1a3a4a" opacity="0.7" />
            {/* Tail */}
            <path d="M 25 9 L 40 6 L 38 9 L 40 12 Z" fill="#1a3a4a" opacity="0.8" />
          </svg>
        );
      
      default: // small
        return (
          <svg width={spec.width} height={spec.height} viewBox="0 0 25 12" xmlns="http://www.w3.org/2000/svg">
            {/* Body */}
            <ellipse cx="10" cy="6" rx="8" ry="4" fill={spec.color} stroke="#2a9acd" strokeWidth="0.5" />
            {/* Eye */}
            <circle cx="5" cy="5" r="1" fill="#00f5d4" />
            {/* Tail */}
            <path d="M 18 6 L 25 4 L 23 6 L 25 8 Z" fill="#1a3a4a" opacity="0.7" />
            {/* Fin */}
            <path d="M 10 2 L 12 0 L 11 2 Z" fill="#1a3a4a" opacity="0.6" />
          </svg>
        );
    }
  };

  return (
    <div
      style={{
        position: 'absolute',
        left: `${x}%`,
        top: `${y}%`,
        pointerEvents: 'none',
        animation: `fishSwim ${speed + 2}s linear infinite`,
        opacity: 0.6 + Math.random() * 0.3,
        filter: `drop-shadow(0 0 ${3 + Math.random() * 3}px rgba(0,200,255,0.2))`,
        transform: `scaleX(${direction})`,
      }}
    >
      {renderFish()}
      <style>{`
        @keyframes fishSwim {
          0% {
            left: ${x}%;
            transform: translateY(0) scaleX(${direction});
          }
          50% {
            transform: translateY(-8px) scaleX(${direction});
          }
          100% {
            left: ${(x + 80 * direction) % 100}%;
            transform: translateY(0) scaleX(${direction});
          }
        }
      `}</style>
    </div>
  );
};

export default function FishSchool({ count = 5, depth = 0, typeMix = ['small', 'medium'] }) {
  const [fish, setFish] = useState([]);

  useEffect(() => {
    const newFish = Array.from({ length: count }, (_, i) => ({
      id: i,
      type: typeMix[Math.floor(Math.random() * typeMix.length)],
      x: Math.random() * 100,
      y: Math.random() * 60 + depth,
      speed: 3 + Math.random() * 5,
    }));
    setFish(newFish);
  }, [count, depth, typeMix.join(',')]);

  return (
    <>
      {fish.map(f => (
        <Fish
          key={f.id}
          type={f.type}
          x={f.x}
          y={f.y}
          speed={f.speed}
        />
      ))}
    </>
  );
}
