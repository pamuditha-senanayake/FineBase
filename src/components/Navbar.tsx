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
      background: 'rgba(255, 255, 255, 0.9)',
      backdropFilter: 'blur(20px)',
      borderBottom: '1px solid rgba(0,0,0,0.05)',
      padding: '1rem 0'
    }}>
      <div className="container" style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
        <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <div style={{ position: 'relative', width: '40px', height: '40px' }}>
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
            letterSpacing: '0.15em',
            textTransform: 'uppercase',
            fontWeight: '500',
            color: 'var(--foreground)'
          }}>
            FINEBASE <span style={{ color: 'var(--accent)', fontWeight: '300' }}>LABS</span>
          </span>
        </Link>

        <div style={{ display: 'flex', alignItems: 'center', gap: '3.5rem' }}>
          <div style={{ display: 'flex', gap: '2.5rem' }}>
            {['Home', 'Services', 'Lab'].map((item) => {
              const href = item === 'Home' ? '/' : (item === 'Services' ? '/#packages' : '#lab');
              return (
                <Link 
                  key={item}
                  href={href} 
                  style={{
                    fontSize: '0.75rem',
                    textTransform: 'uppercase',
                    letterSpacing: '0.1em',
                    fontWeight: '600',
                    color: pathname === href ? 'var(--foreground)' : 'var(--muted-foreground)',
                    transition: 'color 0.2s ease'
                  }}
                >
                  {item}
                </Link>
              );
            })}
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <a 
              href={SLACK_INVITE} 
              target="_blank" 
              rel="noopener noreferrer"
              style={{
                fontSize: '0.75rem',
                textTransform: 'uppercase',
                letterSpacing: '0.05em',
                fontWeight: '600',
                color: '#4A154B', // Slack purple
                padding: '0.5rem 1rem',
                border: '1px solid #4A154B',
                borderRadius: '4px',
                transition: 'all 0.2s ease'
              }}
            >
              Join Slack
            </a>
            <Link href="/booking" className="btn btn-primary" style={{
              padding: '0.6rem 1.75rem',
              fontSize: '0.75rem',
              borderRadius: '4px'
            }}>
              Start a Project
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
