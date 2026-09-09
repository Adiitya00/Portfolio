import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const Navbar: React.FC = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'experience', label: 'Experience' },
    { id: 'projects', label: 'Projects' },
    { id: 'skills', label: 'Skills' },
    { id: 'contact', label: 'Contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const scrollPosition = window.scrollY + 150;

      for (const item of navItems) {
        const el = document.getElementById(item.id);

        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;

          if (
            scrollPosition >= top &&
            scrollPosition < top + height
          ) {
            setActiveSection(item.id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);

    const el = document.getElementById(id);

    if (el) {
      el.scrollIntoView({
        behavior: 'smooth',
      });
    }
  };

  return (
    <>
      <header
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          zIndex: 999,

          padding: scrolled
            ? '15px 24px'
            : '24px 24px',

          background: scrolled
            ? 'rgba(3, 3, 5, 0.75)'
            : 'transparent',

          backdropFilter: scrolled
            ? 'blur(12px)'
            : 'none',

          borderBottom: scrolled
            ? '1px solid rgba(255, 255, 255, 0.05)'
            : '1px solid transparent',

          transition:
            'padding 0.3s ease, background-color 0.3s ease, border-color 0.3s ease',

          boxSizing: 'border-box',
        }}
      >
        <div
          style={{
            position: 'relative',
            maxWidth: '1400px',
            height: '25px',
            margin: '0 auto',

            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          {/* =========================
              LOGO
          ========================== */}
          <div
            onClick={() => scrollToSection('home')}
            className="hover-target navbar-logo"
            style={{
              position: 'absolute',
              left: '0',
              display: 'flex',
              alignItems: 'center',
              cursor: 'pointer',
              transform: 'translateX(130px)',
              whiteSpace: 'nowrap',
            }}
          >
            {/* Perfect square gradient-border logo */}
            <div
              style={{
                padding: '1.5px',
                borderRadius: '10px',
                background: 'linear-gradient(135deg, #00e5ff 0%, #8b5cf6 100%)',
                boxShadow: '0 0 16px rgba(0,229,255,0.25)',
                flexShrink: 0,
              }}
            >
              <div style={{
                width: '40px',
                height: '40px',
                borderRadius: '8.5px',
                background: '#030305',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
                <span style={{
                  fontFamily: 'var(--font-tech)',
                  fontSize: '0.9rem',
                  fontWeight: 700,
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  background: 'linear-gradient(90deg, #00e5ff 0%, #c4b5fd 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}>AK</span>
              </div>
            </div>
          </div>

          {/* =========================
              DESKTOP NAVIGATION
          ========================== */}
          <nav
            className="desktop-nav"
            style={{
              display: 'none',
              alignItems: 'flex-end',
              gap: '34px',
              transform: 'translateX(325px)',
            }}
          >
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="hover-target"
                style={{
                  position: 'relative',

                  background: 'none',
                  border: 'none',

                  fontFamily: 'var(--font-tech)',
                  fontSize: '0.95rem',
                  fontWeight: 300,

                  color:
                    activeSection === item.id
                      ? 'var(--accent-cyan)'
                      : 'var(--text-secondary)',

                  cursor: 'pointer',

                  padding: '7px 0',

                  transition:
                    'color 0.2s ease',

                  whiteSpace: 'nowrap',
                }}
              >
                {item.label}

                {activeSection === item.id && (
                  <motion.div
                    layoutId="activeIndicator"
                    style={{
                      position: 'absolute',
                      left: 0,
                      bottom: 0,

                      width: '100%',
                      height: '2px',

                      background:
                        'linear-gradient(90deg, var(--accent-cyan), var(--accent-violet))',

                      boxShadow:
                        '0 0 8px rgba(0, 229, 255, 0.45)',
                    }}
                    transition={{
                      type: 'spring',
                      stiffness: 380,
                      damping: 30,
                    }}
                  />
                )}
              </button>
            ))}
          </nav>

          {/* =========================
              MOBILE MENU BUTTON
          ========================== */}
          <button
            onClick={() =>
              setMobileMenuOpen(!mobileMenuOpen)
            }
            className="mobile-toggle hover-target"
            style={{
              position: 'absolute',
              right: 0,

              background: 'none',
              border: 'none',

              color: '#ffffff',

              cursor: 'pointer',

              display: 'block',

              padding: '5px',
            }}
          >
            {mobileMenuOpen ? (
              <X size={24} />
            ) : (
              <Menu size={24} />
            )}
          </button>
        </div>
      </header>

      {/* =========================
          MOBILE DRAWER
      ========================== */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{
              opacity: 0,
              y: -20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              y: -20,
            }}
            transition={{
              duration: 0.2,
            }}
            style={{
              position: 'fixed',
              top: 0,
              left: 0,

              width: '100%',

              background:
                'rgba(3, 3, 5, 0.95)',

              backdropFilter:
                'blur(20px)',

              borderBottom:
                '1px solid rgba(255, 255, 255, 0.08)',

              padding:
                '80px 24px 30px',

              zIndex: 998,

              display: 'flex',
              flexDirection: 'column',
              gap: '20px',

              boxSizing: 'border-box',
            }}
          >
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() =>
                  scrollToSection(item.id)
                }
                style={{
                  background: 'none',
                  border: 'none',

                  fontFamily:
                    'var(--font-tech)',

                  fontSize: '1.1rem',
                  fontWeight: 500,

                  color:
                    activeSection === item.id
                      ? 'var(--accent-cyan)'
                      : 'var(--text-secondary)',

                  cursor: 'pointer',

                  textAlign: 'left',

                  padding: '10px 0',
                }}
              >
                {item.label}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* =========================
          RESPONSIVE STYLES
      ========================== */}
      <style>{`
        @media (min-width: 768px) {
          .desktop-nav {
            display: flex !important;
          }

          .mobile-toggle {
            display: none !important;
          }
        }

        @media (max-width: 767px) {
          .navbar-logo {
            transform: translateX(0) !important;
          }
        }
      `}</style>
    </>
  );
};