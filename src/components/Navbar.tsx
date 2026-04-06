'use client';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
import logoImg from '@/images/Logo.png';

const SLACK_INVITE = "https://join.slack.com/t/finebaselabs/shared_invite/zt-3utpomw80-izKi4hgMRZW2fMiII2gkag";

export default function Navbar() {
  const pathname = usePathname();
  
  return (
    <nav className="navbar" style={{
      position: 'fixed',
      top: 0,
      width: '100%',
      zIndex: 1000,
      background: 'rgba(255, 255, 255, 0.85)',
      backdropFilter: 'blur(30px)',
      borderBottom: '1px solid rgba(0,0,0,0.03)',
      padding: '1.25rem 0'
    }}>
      <div className="container" style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
        <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', textDecoration: 'none' }}>
          <div style={{ position: 'relative', width: '54px', height: '54px' }}>
            <Image 
              src={logoImg} 
              alt="Finebase Logo" 
              fill 
              style={{ objectFit: 'contain' }}
              priority
            />
          </div>
          <span style={{
            fontSize: '1.25rem',
            fontFamily: 'var(--font-serif)',
            letterSpacing: '0.25em',
            textTransform: 'uppercase',
            fontWeight: '400',
            color: 'var(--foreground)'
          }}>
            FINEBASE <span style={{ color: 'var(--accent)', fontWeight: '300' }}>LABS</span>
          </span>
        </Link>

        <div style={{ display: 'flex', alignItems: 'center', gap: '4.5rem' }}>
          <div style={{ display: 'flex', gap: '3rem' }}>
            {['Home', 'Services', 'Lab'].map((item) => {
              const href = item === 'Home' ? '/' : (item === 'Services' ? '/#packages' : '#lab');
              const isActive = pathname === href;
              return (
                <Link 
                  key={item}
                  href={href} 
                  style={{
                    fontSize: '0.625rem',
                    textTransform: 'uppercase',
                    letterSpacing: '0.2em',
                    fontWeight: '600',
                    color: isActive ? 'var(--foreground)' : 'var(--muted-foreground)',
                    transition: 'all 0.3s ease',
                    textDecoration: 'none',
                    position: 'relative',
                    padding: '0.5rem 0'
                  }}
                >
                  {item}
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
                fontWeight: '600',
                padding: '0.625rem 1.75rem',
                borderRadius: '100px',
                display: 'flex',
                alignItems: 'center',
                gap: '0.75rem',
                background: 'rgba(74, 21, 75, 0.03)',
                borderColor: 'rgba(74, 21, 75, 0.15)',
                color: '#4A154B', 
                transition: 'all 0.3s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = '#4A154B';
                e.currentTarget.style.color = 'white';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'rgba(74, 21, 75, 0.03)';
                e.currentTarget.style.color = '#4A154B';
              }}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                <path d="M5.042 15.165a2.528 2.528 0 0 1-2.52 2.523A2.528 2.528 0 0 1 0 15.165a2.527 2.527 0 0 1 2.522-2.52h2.52v2.52zM6.313 15.165a2.527 2.527 0 0 1 2.521-2.52 2.527 2.527 0 0 1 2.521 2.52v6.313A2.528 2.528 0 0 1 8.834 24a2.528 2.528 0 0 1-2.521-2.522v-6.313zM8.834 5.042a2.528 2.528 0 0 1-2.521-2.52A2.528 2.528 0 0 1 8.834 0a2.527 2.527 0 0 1 2.521 2.522v2.52H8.834zM8.834 6.313a2.527 2.527 0 0 1 2.521 2.521 2.527 2.527 0 0 1-2.521 2.521H2.522A2.528 2.528 0 0 1 0 8.834a2.528 2.528 0 0 1 2.522-2.521h6.312zM18.958 8.834a2.528 2.528 0 0 1 2.522-2.521A2.528 2.528 0 0 1 24 8.834a2.527 2.527 0 0 1-2.52 2.52h-2.522v-2.52zM17.688 8.834a2.527 2.527 0 0 1-2.521 2.52 2.527 2.527 0 0 1-2.521-2.52V2.522A2.528 2.528 0 0 1 15.167 0a2.528 2.528 0 0 1 2.521 2.522v6.312zM15.167 18.958a2.528 2.528 0 0 1 2.521 2.521 2.528 2.528 0 0 1-2.521 2.521 2.527 2.527 0 0 1-2.522-2.522v-2.52h2.522zM15.167 17.688a2.527 2.527 0 0 1-2.522-2.521 2.527 2.527 0 0 1 2.522-2.521h6.311A2.528 2.528 0 0 1 24 15.167a2.528 2.528 0 0 1-2.522 2.521h-6.311z"/>
              </svg>
              Join Discussion
            </a>
            <Link href="/booking" className="btn btn-primary" style={{
              padding: '0.75rem 2.25rem',
              fontSize: '0.625rem',
              borderRadius: '100px',
              letterSpacing: '0.25em',
              display: 'flex',
              alignItems: 'center',
              gap: '0.75rem',
              background: '#0a0a0a',
              textDecoration: 'none'
            }}>
              Start a Project
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
