import React, { useEffect, useState, useRef, useCallback } from 'react';
import CustomCursor from './components/CustomCursor';
import LoadingScreen from './components/LoadingScreen';
import Navigation from './components/Navigation';
import DepthHUD from './components/DepthHUD';
import HeroSection from './components/HeroSection';
import TwilightSection from './components/TwilightSection';
import MidnightSection from './components/MidnightSection';
import AbyssalSection from './components/AbyssalSection';
import HadalSection from './components/HadalSection';

export default function App() {
  const [loading, setLoading] = useState(true);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeSection, setActiveSection] = useState('surface');
  const [isMobile, setIsMobile] = useState(false);
  const ticking = useRef(false);

  // Detect mobile
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  // Scroll handler
  const handleScroll = useCallback(() => {
    if (!ticking.current) {
      requestAnimationFrame(() => {
        const scrollTop = window.scrollY;
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        const progress = Math.min(1, Math.max(0, scrollTop / docHeight));
        setScrollProgress(progress);

        // Determine active section
        const sections = ['surface', 'twilight', 'midnight', 'abyssal', 'hadal'];
        let current = 'surface';
        for (const id of sections) {
          const el = document.getElementById(id);
          if (el) {
            const rect = el.getBoundingClientRect();
            if (rect.top <= window.innerHeight * 0.5) current = id;
          }
        }
        setActiveSection(current);

        ticking.current = false;
      });
      ticking.current = true;
    }
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  // Parallax scroll effect on hero
  useEffect(() => {
    const hero = document.getElementById('surface');
    if (!hero) return;
    const onScroll = () => {
      const y = window.scrollY;
      hero.style.backgroundPositionY = `${y * 0.4}px`;
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [loading]);

  // Scroll reveal for elements
  useEffect(() => {
    if (loading) return;
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
          }
        });
      },
      { threshold: 0.15, rootMargin: '0px 0px -50px 0px' }
    );

    document.querySelectorAll('[data-reveal]').forEach(el => {
      el.style.opacity = '0';
      el.style.transform = 'translateY(30px)';
      el.style.transition = 'opacity 0.8s ease, transform 0.8s cubic-bezier(0.16,1,0.3,1)';
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, [loading]);

  return (
    <>
      {/* Skip to main content for accessibility */}
      <a
        href="#surface"
        className="sr-only"
        style={{
          position: 'fixed',
          top: '1rem',
          left: '1rem',
          zIndex: 999999,
          background: 'var(--bio-cyan)',
          color: '#000',
          padding: '0.5rem 1rem',
          fontFamily: 'var(--font-mono)',
          fontSize: '0.7rem',
          textDecoration: 'none',
        }}
        onFocus={e => e.target.classList.remove('sr-only')}
        onBlur={e => e.target.classList.add('sr-only')}
      >
        Skip to content
      </a>

      {loading && <LoadingScreen onComplete={() => setLoading(false)} />}

      {!isMobile && <CustomCursor />}

      {!loading && (
        <>
          <Navigation activeSection={activeSection} />
          <DepthHUD scrollProgress={scrollProgress} />
        </>
      )}

      <main id="main-content">
        <HeroSection />
        <TwilightSection />
        <MidnightSection scrollProgress={scrollProgress} />
        <AbyssalSection />
        <HadalSection />
      </main>

      {/* Global animation keyframes */}
      <style>{`
        * { -webkit-font-smoothing: antialiased; -moz-osx-font-smoothing: grayscale; }

        /* Responsive nav hiding */
        @media (max-width: 768px) {
          nav[aria-label="Section navigation"] { display: none; }
        }
        @media (max-width: 900px) {
          div[style*="position: fixed"][style*="right"] { display: none; }
        }

        /* Smooth section transitions */
        section {
          transition: background 0.5s ease;
        }
      `}</style>
    </>
  );
}
