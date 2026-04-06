'use client';
import Link from 'next/link';
import Image from 'next/image';
import logoImg from '@/images/Logo.png';

const SLACK_INVITE = "https://join.slack.com/t/finebaselabs/shared_invite/zt-3utpomw80-izKi4hgMRZW2fMiII2gkag";

export default function Footer() {
  return (
    <footer className="footer" style={{
      borderTop: '1px solid var(--border)',
      padding: '6rem 0',
      background: '#fafafa'
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
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              margin: 0
            }}>
              FINEBASE LABS
            </h3>
          </div>
          <p style={{ fontSize: '0.875rem', lineHeight: '1.6' }}>
            Advancing technical frontiers through strategic R&D and precision software engineering.
          </p>
        </div>
        
        <div>
          <h4 style={{ fontSize: '0.75rem', textTransform: 'uppercase', marginBottom: '1.5rem', letterSpacing: '0.2em' }}>Navigation</h4>
          <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            <li><Link href="/" style={{ fontSize: '0.875rem' }}>Home</Link></li>
            <li><Link href="/#packages" style={{ fontSize: '0.875rem' }}>Services</Link></li>
            <li><Link href="/#lab" style={{ fontSize: '0.875rem' }}>The Lab</Link></li>
            <li><Link href="/booking" style={{ fontSize: '0.875rem' }}>Inquire</Link></li>
          </ul>
        </div>
        
        <div>
          <h4 style={{ fontSize: '0.75rem', textTransform: 'uppercase', marginBottom: '1.5rem', letterSpacing: '0.2em' }}>Contact</h4>
          <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            <li style={{ fontSize: '0.875rem' }}>ops@finebase.studio</li>
            <li style={{ fontSize: '0.875rem' }}>San Francisco, CA</li>
          </ul>
        </div>
        
        <div>
          <h4 style={{ fontSize: '0.75rem', textTransform: 'uppercase', marginBottom: '1.5rem', letterSpacing: '0.2em' }}>Community</h4>
          <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            <li><a href={SLACK_INVITE} target="_blank" rel="noopener noreferrer" style={{ fontSize: '0.875rem' }}>Slack Discussion</a></li>
            <li style={{ fontSize: '0.875rem' }}>LinkedIn</li>
          </ul>
        </div>
      </div>
      
      <div className="container" style={{
        marginTop: '6rem',
        paddingTop: '2rem',
        borderTop: '1px solid #eee',
        fontSize: '0.75rem',
        color: '#999',
        textAlign: 'center'
      }}>
        © {new Date().getFullYear()} Finebase Labs. High-Performance R&D.
      </div>
    </footer>
  );
}
