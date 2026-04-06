'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';

const SLACK_INVITE = "https://join.slack.com/t/finebaselabs/shared_invite/zt-3utpomw80-izKi4hgMRZW2fMiII2gkag";

export default function Hero() {
  return (
    <section className="section" style={{
      paddingTop: '20rem',
      paddingBottom: '14rem',
      background: 'var(--background)',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Background Vibrant Glow */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        background: 'var(--vibrant-aura)',
        zIndex: 0
      }}></div>

      <div className="container" style={{ textAlign: 'center', position: 'relative', zIndex: 1 }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          style={{ maxWidth: '1000px', margin: '0 auto' }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '1rem',
              padding: '0.625rem 1.25rem',
              background: 'rgba(212, 175, 55, 0.05)',
              border: '1px solid rgba(212, 175, 55, 0.1)',
              borderRadius: '100px',
              marginBottom: '3rem'
            }}
          >
            <div style={{ width: '6px', height: '6px', background: 'var(--accent)', borderRadius: '50%' }}></div>
            <span style={{
              fontSize: '0.625rem',
              textTransform: 'uppercase',
              letterSpacing: '0.3em',
              color: 'var(--accent)',
              fontWeight: '700'
            }}>
              Finebase Labs & Consulting
            </span>
          </motion.div>

          <h1 style={{
            fontSize: 'max(5rem, 8vw)',
            marginBottom: '3rem',
            lineHeight: '1',
            color: 'var(--foreground)',
            fontFamily: 'var(--font-serif)',
            fontWeight: '400',
            letterSpacing: '-0.03em'
          }}>
            Advanced R&D. <br />
            Architectural <span style={{ fontStyle: 'italic', fontWeight: '300', opacity: 0.9 }}>Distinction</span>.
          </h1>
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
            style={{
              fontSize: '1.375rem',
              color: 'var(--muted-foreground)',
              marginBottom: '5rem',
              maxWidth: '700px',
              margin: '0 auto 5rem',
              lineHeight: '1.8'
            }}
          >
            Empowering tech-driven enterprises through elite software engineering, 
            strategic technical R&D, and bespoke architectural orchestrations.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            style={{ display: 'flex', gap: '2rem', justifyContent: 'center', alignItems: 'center' }}
          >
            <Link href="/booking" className="btn btn-primary" style={{ padding: '1.5rem 4rem', borderRadius: '100px' }}>
              Launch Your Project
            </Link>
            <a 
              href={SLACK_INVITE} 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn" 
              style={{ padding: '1.5rem 4rem', borderRadius: '100px', border: '1px solid var(--border)' }}
            >
              Discuss in Lab
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
