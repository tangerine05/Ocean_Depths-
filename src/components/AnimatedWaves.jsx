import React from 'react';

export default function AnimatedWaves() {
  return (
    <div style={{
      position: 'absolute',
      bottom: 0,
      left: 0,
      right: 0,
      height: 160,
      pointerEvents: 'none',
      overflow: 'hidden',
    }}>
      {/* Multi-layered animated waves */}
      <svg 
        viewBox="0 0 1440 200" 
        preserveAspectRatio="none" 
        style={{ 
          width: '100%', 
          height: '100%',
          position: 'absolute',
          bottom: 0,
        }}
      >
        {/* Wave Layer 1 - Bright foreground */}
        <path
          d="M0,100 Q180,60 360,100 T720,100 T1080,100 T1440,100 L1440,200 L0,200 Z"
          fill="#0d5a7d"
          opacity="0.95"
          style={{ animation: 'wave1 8s ease-in-out infinite' }}
        />
        
        {/* Wave Layer 2 - Mid layer */}
        <path
          d="M0,120 Q240,70 480,120 T960,120 T1440,120 L1440,200 L0,200 Z"
          fill="#051a35"
          opacity="0.7"
          style={{ animation: 'wave2 10s ease-in-out 1s infinite reverse' }}
        />
        
        {/* Wave Layer 3 - Deep layer */}
        <path
          d="M0,140 Q200,100 400,140 T800,140 T1200,140 T1440,140 L1440,200 L0,200 Z"
          fill="#0a0f1f"
          opacity="0.5"
          style={{ animation: 'wave3 12s ease-in-out 2s infinite' }}
        />
        
        {/* Bright wave highlights */}
        <path
          d="M0,105 Q160,85 320,105 T640,105 T960,105 T1280,105 T1440,105 L1440,115 L0,115 Z"
          fill="rgba(100,200,255,0.4)"
          style={{ animation: 'wave4 6s ease-in-out infinite' }}
        />
      </svg>

      <style>{`
        @keyframes wave1 {
          0% {
            d: path('M0,100 Q180,60 360,100 T720,100 T1080,100 T1440,100 L1440,200 L0,200 Z');
          }
          50% {
            d: path('M0,100 Q180,50 360,100 T720,100 T1080,100 T1440,100 L1440,200 L0,200 Z');
          }
          100% {
            d: path('M0,100 Q180,60 360,100 T720,100 T1080,100 T1440,100 L1440,200 L0,200 Z');
          }
        }
        
        @keyframes wave2 {
          0% {
            d: path('M0,120 Q240,70 480,120 T960,120 T1440,120 L1440,200 L0,200 Z');
          }
          50% {
            d: path('M0,120 Q240,90 480,120 T960,120 T1440,120 L1440,200 L0,200 Z');
          }
          100% {
            d: path('M0,120 Q240,70 480,120 T960,120 T1440,120 L1440,200 L0,200 Z');
          }
        }
        
        @keyframes wave3 {
          0% {
            d: path('M0,140 Q200,100 400,140 T800,140 T1200,140 T1440,140 L1440,200 L0,200 Z');
          }
          50% {
            d: path('M0,140 Q200,110 400,140 T800,140 T1200,140 T1440,140 L1440,200 L0,200 Z');
          }
          100% {
            d: path('M0,140 Q200,100 400,140 T800,140 T1200,140 T1440,140 L1440,200 L0,200 Z');
          }
        }
        
        @keyframes wave4 {
          0%, 100% {
            opacity: 0.2;
            transform: translateX(0);
          }
          50% {
            opacity: 0.6;
            transform: translateX(30px);
          }
        }
      `}</style>
    </div>
  );
}
