'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';

const SLACK_INVITE = "https://join.slack.com/t/finebaselabs/shared_invite/zt-3utpomw80-izKi4hgMRZW2fMiII2gkag";

export default function Hero() {
  return (
    <section className="section" style={{
      paddingTop: '16rem',
      paddingBottom: '12rem',
      background: 'white',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Background Subtle Gradient */}
      <div style={{
        position: 'absolute',
        top: '10%',
        left: '50%',
        transform: 'translateX(-50%)',
        width: '80vw',
        height: '80vh',
        background: 'radial-gradient(circle, rgba(212, 175, 55, 0.03) 0%, transparent 70%)',
        zIndex: 0
      }}></div>

      <div className="container" style={{ textAlign: 'center', position: 'relative', zIndex: 1 }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          style={{ maxWidth: '900px', margin: '0 auto' }}
        >
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            style={{
              fontSize: '0.75rem',
              textTransform: 'uppercase',
              letterSpacing: '0.4em',
              color: 'var(--accent)',
              fontWeight: '600',
              display: 'block',
              marginBottom: '2rem'
            }}
          >
            Finebase Labs & Consulting
          </motion.span>

          <h1 style={{
            fontSize: 'max(4.5rem, 7vw)',
            marginBottom: '2.5rem',
            lineHeight: '1.05',
            color: 'var(--foreground)',
            fontFamily: 'var(--font-serif)',
            fontWeight: '400'
          }}>
            Advanced R&D. <br />
            Next-Gen <span style={{ fontStyle: 'italic', fontWeight: '300' }}>Solutions</span>.
          </h1>
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            style={{
              fontSize: '1.25rem',
              color: 'var(--muted-foreground)',
              marginBottom: '4rem',
              maxWidth: '650px',
              margin: '0 auto 4rem',
              lineHeight: '1.8'
            }}
          >
            Empowering tech-driven enterprises through elite software engineering, 
            strategic R&D consulting, and bespoke product development.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center', alignItems: 'center' }}
          >
            <Link href="/booking" className="btn btn-primary" style={{ padding: '1.25rem 3.5rem', borderRadius: '4px' }}>
              Launch Your Project
            </Link>
            <a 
              href={SLACK_INVITE} 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn" 
              style={{ padding: '1.25rem 3.5rem', borderRadius: '4px', border: '1px solid var(--border)' }}
            >
              Discuss in Lab
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
