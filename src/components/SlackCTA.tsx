'use client';
import { motion } from 'framer-motion';

const SLACK_INVITE = "https://join.slack.com/t/finebaselabs/shared_invite/zt-3utpomw80-izKi4hgMRZW2fMiII2gkag";

export default function SlackCTA() {
  return (
    <section id="lab" className="section" style={{ background: '#09090b', color: 'white', borderTop: '1px solid #18181b', padding: '12rem 0' }}>
      <div className="container" style={{ textAlign: 'center' }}>
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          style={{ maxWidth: '700px', margin: '0 auto' }}
        >
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '1rem',
            padding: '0.75rem 1.5rem',
            background: 'rgba(255,255,255,0.03)',
            border: '1px solid rgba(255,255,255,0.05)',
            borderRadius: '50px',
            marginBottom: '4rem'
          }}>
            <div style={{ width: '8px', height: '8px', background: '#4A154B', borderRadius: '50%' }}></div>
            <span style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.2em', opacity: 0.6 }}>Our Research Community</span>
          </div>

          <h2 style={{ fontSize: 'max(3.5rem, 6vw)', marginBottom: '2.5rem', color: 'white' }}>Join the Lab <br /> <span style={{ fontStyle: 'italic', fontWeight: '300', opacity: 0.8 }}>Discussion</span>.</h2>
          <p style={{ fontSize: '1.25rem', color: '#a1a1aa', marginBottom: '4rem', lineHeight: '1.8' }}>
            We host a private Slack environment for our clients and research partners to discuss ongoing IT innovation, R&D strategies, and system architectures in real-time.
          </p>

          <a 
            href={SLACK_INVITE} 
            target="_blank" 
            rel="noopener noreferrer"
            className="btn btn-primary" 
            style={{ 
              padding: '1.5rem 5rem', 
              borderRadius: '4px', 
              background: '#4A154B', 
              color: 'white', 
              border: 'none',
              fontSize: '1rem',
              fontWeight: '600'
            }}
          >
            Enter Slack Community
          </a>
          
          <div style={{ marginTop: '4rem', display: 'flex', justifyContent: 'center', gap: '3rem', opacity: 0.4, fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
            <span>Real-time Chat</span>
            <span>Architecure Feeds</span>
            <span>R&D Updates</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
