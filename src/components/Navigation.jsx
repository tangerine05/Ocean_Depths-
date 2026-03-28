import React from 'react';

export default function Navigation({ activeSection }) {
  const sections = [
    { id: 'surface', label: '0m — Surface', icon: '☀️' },
    { id: 'twilight', label: '200m — Twilight', icon: '🌅' },
    { id: 'midnight', label: '1,000m — Midnight', icon: '🌙' },
    { id: 'abyssal', label: '4,000m — Abyssal', icon: '👁️' },
    { id: 'hadal', label: '6,000m+ — Hadal', icon: '⚫' },
  ];

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav
      aria-label="Section navigation"
      style={{
        position: 'fixed',
        left: '2rem',
        top: '50%',
        transform: 'translateY(-50%)',
        zIndex: 100,
        display: 'flex',
        flexDirection: 'column',
        gap: '1.5rem',
      }}
    >
      {sections.map(section => (
        <button
          key={section.id}
          onClick={() => scrollToSection(section.id)}
          data-hover
          style={{
            background: activeSection === section.id ? 'rgba(0, 245, 212, 0.2)' : 'transparent',
            border: activeSection === section.id ? '1px solid var(--bio-cyan)' : '1px solid rgba(0, 245, 212, 0.3)',
            color: activeSection === section.id ? 'var(--bio-cyan)' : 'rgba(0, 245, 212, 0.6)',
            padding: '0.6rem 1rem',
            cursor: 'none',
            fontFamily: 'var(--font-mono)',
            fontSize: '0.65rem',
            letterSpacing: '0.1em',
            borderRadius: '3px',
            transition: 'all 0.3s ease',
            boxShadow: activeSection === section.id ? '0 0 15px rgba(0, 245, 212, 0.2)' : 'none',
          }}
          onMouseEnter={e => {
            e.currentTarget.style.background = 'rgba(0, 245, 212, 0.15)';
            e.currentTarget.style.color = 'var(--bio-cyan)';
          }}
          onMouseLeave={e => {
            if (activeSection !== section.id) {
              e.currentTarget.style.background = 'transparent';
              e.currentTarget.style.color = 'rgba(0, 245, 212, 0.6)';
            }
          }}
        >
          {section.icon} {section.label}
        </button>
      ))}
    </nav>
  );
}
