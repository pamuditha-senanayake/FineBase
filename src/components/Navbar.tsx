import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import logoImg from '@/images/Logo.png';

const SLACK_INVITE = "https://join.slack.com/t/finebaselabs/shared_invite/zt-3utpomw80-izKi4hgMRZW2fMiII2gkag";

export default function Navbar() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Close menu on route change
  useEffect(() => setIsMenuOpen(false), [pathname]);

  // Prevent scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = 'unset';
  }, [isMenuOpen]);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/#packages' },
    { name: 'Lab', href: '#lab' }
  ];
  
  return (
    <>
      <nav className="navbar" style={{
        position: 'fixed',
        top: 0,
        width: '100%',
        zIndex: 1000,
        background: 'rgba(9, 9, 11, 0.8)',
        backdropFilter: 'blur(30px)',
        borderBottom: '1px solid rgba(255, 255, 255, 0.05)',
        padding: '1rem 0'
      }}>
        <div className="container" style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}>
          <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: '1rem', textDecoration: 'none' }}>
            <div style={{ position: 'relative', width: '42px', height: '42px' }}>
              <Image 
                src={logoImg} 
                alt="Finebase Logo" 
                fill 
                style={{ objectFit: 'contain' }}
                priority
              />
            </div>
            <span style={{
              fontSize: '1rem',
              fontFamily: 'var(--font-serif)',
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              fontWeight: '400',
              color: 'white'
            }}>
              FINEBASE <span className="hide-mobile" style={{ color: 'var(--accent)', fontWeight: '300' }}>LABS</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hide-mobile" style={{ display: 'flex', alignItems: 'center', gap: '4.5rem' }}>
            <div style={{ display: 'flex', gap: '3rem' }}>
              {navLinks.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <Link 
                    key={item.name}
                    href={item.href} 
                    style={{
                      fontSize: '0.625rem',
                      textTransform: 'uppercase',
                      letterSpacing: '0.2em',
                      fontWeight: '700',
                      color: isActive ? 'var(--accent)' : 'rgba(255, 255, 255, 0.5)',
                      transition: 'all 0.3s ease',
                      textDecoration: 'none',
                      position: 'relative',
                      padding: '0.5rem 0'
                    }}
                  >
                    {item.name}
                    {isActive && (
                      <motion.div 
                        layoutId="nav-dot"
                        style={{
                          position: 'absolute',
                          bottom: 0,
                          left: '50%',
                          transform: 'translateX(-50%)',
                          width: '3px',
                          height: '3px',
                          borderRadius: '50%',
                          background: 'var(--accent)'
                        }}
                      />
                    )}
                  </Link>
                );
              })}
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '2.5rem' }}>
              <a 
                href={SLACK_INVITE} 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn"
                style={{
                  fontSize: '0.625rem',
                  textTransform: 'uppercase',
                  letterSpacing: '0.15em',
                  fontWeight: '700',
                  padding: '0.625rem 1.75rem',
                  borderRadius: '100px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.75rem',
                  background: 'rgba(255, 255, 255, 0.03)',
                  borderColor: 'rgba(255, 255, 255, 0.1)',
                  color: 'white', 
                  transition: 'all 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = '#4A154B';
                  e.currentTarget.style.borderColor = '#4A154B';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'rgba(255, 255, 255, 0.03)';
                  e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)';
                }}
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M5.042 15.165a2.528 2.528 0 0 1-2.52 2.523A2.528 2.528 0 0 1 0 15.165a2.527 2.527 0 0 1 2.522-2.52h2.52v2.52zM6.313 15.165a2.527 2.527 0 0 1 2.521-2.52 2.527 2.527 0 0 1 2.521 2.52v6.313A2.528 2.528 0 0 1 8.834 24a2.528 2.528 0 0 1-2.521-2.522v-6.313zM8.834 5.042a2.528 2.528 0 0 1-2.521-2.52A2.528 2.528 0 0 1 8.834 0a2.527 2.527 0 0 1 2.521 2.522v2.52H8.834zM8.834 6.313a2.527 2.527 0 0 1 2.521 2.521 2.527 2.527 0 0 1-2.521 2.521H2.522A2.528 2.528 0 0 1 0 8.834a2.528 2.528 0 0 1 2.522-2.521h6.312zM18.958 8.834a2.528 2.528 0 0 1 2.522-2.521A2.528 2.528 0 0 1 24 8.834a2.527 2.527 0 0 1-2.52 2.52h-2.522v-2.52zM17.688 8.834a2.527 2.527 0 0 1-2.521 2.52 2.527 2.527 0 0 1-2.521-2.52V2.522A2.528 2.528 0 0 1 15.167 0a2.528 2.528 0 0 1 2.521 2.522v6.312zM15.167 18.958a2.528 2.528 0 0 1 2.521 2.521 2.528 2.528 0 0 1-2.521 2.521 2.527 2.527 0 0 1-2.522-2.522v-2.52h2.522zM15.167 17.688a2.527 2.527 0 0 1-2.522-2.521 2.527 2.527 0 0 1 2.522-2.521h6.311A2.528 2.528 0 0 1 24 15.167a2.528 2.528 0 0 1-2.522 2.521h-6.311z"/>
                </svg>
                Join Discussion
              </a>
              <Link href="/booking" className="btn btn-primary" style={{
                padding: '0.75rem 2rem',
                fontSize: '0.625rem',
                borderRadius: '100px',
                letterSpacing: '0.2em',
                background: 'var(--foreground)',
                color: 'var(--background)',
                textDecoration: 'none'
              }}>
                Start a Project
              </Link>
            </div>
          </div>

          {/* Mobile Toggle */}
          <button 
            className="show-mobile"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            style={{ 
              background: 'none', 
              border: 'none', 
              color: 'white', 
              cursor: 'pointer',
              padding: '0.5rem',
              zIndex: 1100 
            }}
          >
            <div style={{ width: '24px', height: '24px', position: 'relative' }}>
              <motion.span
                animate={isMenuOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
                style={{ display: 'block', width: '100%', height: '1.5px', background: 'white', position: 'absolute', top: '4px' }}
              />
              <motion.span
                animate={isMenuOpen ? { opacity: 0 } : { opacity: 1 }}
                style={{ display: 'block', width: '100%', height: '1.5px', background: 'white', position: 'absolute', top: '11px' }}
              />
              <motion.span
                animate={isMenuOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
                style={{ display: 'block', width: '100%', height: '1.5px', background: 'white', position: 'absolute', bottom: '5px' }}
              />
            </div>
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              width: '100%',
              height: '100vh',
              background: 'rgba(9, 9, 11, 0.98)',
              backdropFilter: 'blur(30px)',
              zIndex: 1050,
              display: 'flex',
              flexDirection: 'column',
              padding: '8rem 2rem'
            }}
          >
            <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
              {navLinks.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  style={{
                    fontSize: '2.5rem',
                    fontFamily: 'var(--font-serif)',
                    color: pathname === item.href ? 'var(--accent)' : 'white',
                    textDecoration: 'none'
                  }}
                >
                  {item.name}.
                </Link>
              ))}
            </div>

            <div style={{ marginTop: 'auto', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <Link
                href="/booking"
                className="btn btn-primary"
                style={{ width: '100%', padding: '1.5rem', borderRadius: '100px' }}
              >
                Start a Project
              </Link>
              <a
                href={SLACK_INVITE}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  textAlign: 'center',
                  fontSize: '0.75rem',
                  textTransform: 'uppercase',
                  letterSpacing: '0.1em',
                  color: 'rgba(255,255,255,0.5)',
                  textDecoration: 'none'
                }}
              >
                Join Slack Community
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
