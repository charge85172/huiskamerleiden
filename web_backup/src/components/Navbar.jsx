import React, { useState, useEffect } from 'react';
import { Menu, X, Home } from 'lucide-react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav style={{
      position: 'fixed',
      top: 0,
      width: '100%',
      zIndex: 1000,
      transition: 'all 0.3s ease',
      padding: scrolled ? '1rem 0' : '1.5rem 0',
      background: scrolled ? 'rgba(15, 12, 41, 0.8)' : 'transparent',
      backdropFilter: scrolled ? 'blur(10px)' : 'none',
      borderBottom: scrolled ? '1px solid rgba(255, 255, 255, 0.1)' : 'none'
    }}>
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <a href="#" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: 800, fontSize: '1.25rem' }}>
          <Home size={28} color="var(--color-accent-pink)" />
          <span>De Leidse <span className="text-gradient">Huiskamer</span></span>
        </a>

        {/* Desktop Menu */}
        <div style={{ display: 'flex', gap: '2rem', alignItems: 'center' }} className="desktop-nav">
          <a href="#waarom" style={{ fontWeight: 500, transition: 'color 0.2s' }}>Waarom langs?</a>
          <a href="#huiskamer" style={{ fontWeight: 500, transition: 'color 0.2s' }}>Over Ons</a>
          <a href="#doel" style={{ fontWeight: 500, transition: 'color 0.2s' }}>Ons Doel</a>
          <a href="#info" style={{ fontWeight: 500, transition: 'color 0.2s' }}>Wat doen we</a>
          <a href="#langskomen" className="btn btn-primary">Kom Langs</a>
        </div>

        {/* Mobile menu toggle could be implemented here */}
      </div>
      <style>{`
        @media (max-width: 768px) {
          .desktop-nav {
            display: none !important;
          }
        }
      `}</style>
    </nav>
  );
};

export default Navbar;
