import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from './CartContext';

export default function Header() {
  const { cartCount } = useCart();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header style={{
      position: 'fixed',
      top: 0,
      width: '100%',
      zIndex: 1000,
      background: 'rgba(14, 34, 53, 0.9)',
      backdropFilter: 'blur(16px)',
      borderBottom: '1px solid rgba(0, 196, 212, 0.1)'
    }}>
      <div className="container" style={{
        height: '80px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between'
      }}>
        <Link to="/" style={{ fontSize: '24px', fontWeight: 800, color: 'var(--color-accent)' }}>
          WPET
        </Link>

        {/* Desktop Nav */}
        <nav style={{ display: 'none' }} className="desktop-nav">
          <ul style={{ display: 'flex', gap: '32px', listStyle: 'none' }}>
            <li><Link to="/" className="nav-link">Início</Link></li>
            <li><Link to="/pos-cirurgicas" className="nav-link">Pós-Cirúrgicas</Link></li>
            <li><Link to="/ortopedicas" className="nav-link">Ortopédicas</Link></li>
            <li><Link to="/sobre" className="nav-link">Sobre</Link></li>
            <li><Link to="/contato" className="nav-link">Contato</Link></li>
          </ul>
        </nav>

        <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
          <Link to="/carrinho" style={{ position: 'relative' }}>
            <i className="fas fa-shopping-cart" style={{ fontSize: '20px' }}></i>
            {cartCount > 0 && (
              <span style={{
                position: 'absolute',
                top: '-8px',
                right: '-8px',
                background: 'var(--color-accent)',
                color: '#0E2235',
                fontSize: '10px',
                fontWeight: 700,
                width: '18px',
                height: '18px',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                {cartCount}
              </span>
            )}
          </Link>
          
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} style={{ background: 'none', color: 'var(--color-text)', fontSize: '24px' }} className="mobile-menu-btn">
            <i className={`fas ${isMenuOpen ? 'fa-times' : 'fa-bars'}`}></i>
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isMenuOpen && (
        <div style={{
          position: 'fixed',
          top: '80px',
          left: 0,
          width: '100%',
          height: 'calc(100vh - 80px)',
          background: 'var(--color-surface)',
          zIndex: 999,
          padding: '40px 20px',
          display: 'flex',
          flexDirection: 'column',
          gap: '24px'
        }} className="fade-slide-up">
          <Link to="/" onClick={() => setIsMenuOpen(false)} style={{ fontSize: '20px', fontWeight: 600 }}>Início</Link>
          <Link to="/pos-cirurgicas" onClick={() => setIsMenuOpen(false)} style={{ fontSize: '20px', fontWeight: 600 }}>Pós-Cirúrgicas</Link>
          <Link to="/ortopedicas" onClick={() => setIsMenuOpen(false)} style={{ fontSize: '20px', fontWeight: 600 }}>Ortopédicas</Link>
          <Link to="/sobre" onClick={() => setIsMenuOpen(false)} style={{ fontSize: '20px', fontWeight: 600 }}>Sobre</Link>
          <Link to="/contato" onClick={() => setIsMenuOpen(false)} style={{ fontSize: '20px', fontWeight: 600 }}>Contato</Link>
          <a href="https://wa.me/5524992618871" target="_blank" className="btn-whatsapp" style={{ justifyContent: 'center' }}>
            <i className="fab fa-whatsapp"></i> WhatsApp Business
          </a>
        </div>
      )}

      <style>{`
        @media (min-width: 1024px) {
          .desktop-nav { display: block !important; }
          .mobile-menu-btn { display: none !important; }
        }
        .nav-link:hover { color: var(--color-accent); }
      `}</style>
    </header>
  );
}
