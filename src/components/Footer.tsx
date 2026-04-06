'use client';
import Link from 'next/link';
import Image from 'next/image';
import logoImg from '@/images/Logo.png';

const SLACK_INVITE = "https://join.slack.com/t/finebaselabs/shared_invite/zt-3utpomw80-izKi4hgMRZW2fMiII2gkag";

export default function Footer() {
  return (
    <footer className="footer" style={{
      borderTop: '1px solid rgba(255, 255, 255, 0.05)',
      padding: '8rem 0',
      background: 'var(--background)'
    }}>
      <div className="container" style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
        gap: '4rem'
      }}>
        <div style={{ maxWidth: '300px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem' }}>
            <Image src={logoImg} alt="Finebase Logo" width={24} height={24} />
            <h3 style={{
              fontSize: '1rem',
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              fontWeight: '600',
              color: 'white',
              margin: 0
            }}>
              FINEBASE LABS
            </h3>
          </div>
          <p style={{ fontSize: '0.875rem', lineHeight: '1.8', color: 'var(--muted-foreground)' }}>
            Advancing technical frontiers through strategic R&D and precision software engineering.
          </p>
        </div>
        
        <div>
          <h4 style={{ fontSize: '0.625rem', textTransform: 'uppercase', marginBottom: '2rem', letterSpacing: '0.2em', color: 'rgba(255, 255, 255, 0.4)' }}>Navigation</h4>
          <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <li><Link href="/" style={{ fontSize: '0.8125rem', color: 'white', textDecoration: 'none', transition: 'color 0.2s ease' }}>Home</Link></li>
            <li><Link href="/#packages" style={{ fontSize: '0.8125rem', color: 'white', textDecoration: 'none', transition: 'color 0.2s ease' }}>Services</Link></li>
            <li><Link href="/#lab" style={{ fontSize: '0.8125rem', color: 'white', textDecoration: 'none', transition: 'color 0.2s ease' }}>The Lab</Link></li>
            <li><Link href="/booking" style={{ fontSize: '0.8125rem', color: 'white', textDecoration: 'none', transition: 'color 0.2s ease' }}>Inquire</Link></li>
          </ul>
        </div>
        
        <div>
          <h4 style={{ fontSize: '0.625rem', textTransform: 'uppercase', marginBottom: '2rem', letterSpacing: '0.2em', color: 'rgba(255, 255, 255, 0.4)' }}>Contact</h4>
          <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <li style={{ fontSize: '0.8125rem', color: 'white' }}>ops@finebase.studio</li>
            <li style={{ fontSize: '0.8125rem', color: 'white' }}>San Francisco, CA</li>
          </ul>
        </div>
        
        <div>
          <h4 style={{ fontSize: '0.625rem', textTransform: 'uppercase', marginBottom: '2rem', letterSpacing: '0.2em', color: 'rgba(255, 255, 255, 0.4)' }}>Community</h4>
          <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <li><a href={SLACK_INVITE} target="_blank" rel="noopener noreferrer" style={{ fontSize: '0.8125rem', color: 'white', textDecoration: 'none' }}>Slack Discussion</a></li>
            <li style={{ fontSize: '0.8125rem', color: 'white' }}>LinkedIn</li>
          </ul>
        </div>
      </div>
      
      <div className="container" style={{
        marginTop: '8rem',
        paddingTop: '3rem',
        borderTop: '1px solid rgba(255, 255, 255, 0.05)',
        fontSize: '0.625rem',
        color: 'rgba(255, 255, 255, 0.3)',
        textAlign: 'center',
        letterSpacing: '0.1em',
        textTransform: 'uppercase'
      }}>
        © {new Date().getFullYear()} Finebase Labs. High-Performance R&D.
      </div>
    </footer>
  );
}
