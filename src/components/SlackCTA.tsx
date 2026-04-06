'use client';
import { motion } from 'framer-motion';

import bImg from "@/images/b.jpg";
import Image from "next/image";

const SLACK_INVITE = "https://join.slack.com/t/finebaselabs/shared_invite/zt-3utpomw80-izKi4hgMRZW2fMiII2gkag";

export default function SlackCTA() {
  return (
    <section id="lab" className="section" style={{ background: '#09090b', color: 'white', position: 'relative', overflow: 'hidden', padding: '12rem 0' }}>
      {/* Abstract Background Element */}
      <div style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '1000px',
        height: '1000px',
        background: 'radial-gradient(circle, rgba(74, 21, 75, 0.08) 0%, rgba(0,0,0,0) 70%)',
        zIndex: 0,
        pointerEvents: 'none'
      }}></div>

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 400px), 1fr))',
          gap: 'clamp(3rem, 10vw, 8rem)',
          alignItems: 'center'
        }}>
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.75rem',
              padding: '0.625rem 1.25rem',
              background: 'rgba(255,255,255,0.03)',
              border: '1px solid rgba(255,255,255,0.05)',
              borderRadius: '50px',
              marginBottom: '2.5rem'
            }}>
              <div style={{ width: '8px', height: '8px', background: '#4A154B', borderRadius: '50%' }}></div>
              <span style={{ fontSize: '0.625rem', textTransform: 'uppercase', letterSpacing: '0.2em', opacity: 0.6, fontWeight: '700' }}>Collaboration Hub</span>
            </div>

            <h2 className="h1-mobile" style={{ fontSize: '4rem', marginBottom: '2.5rem', color: 'white', lineHeight: '1.1' }}>
              Discuss, Meet <br /> 
              <span style={{ fontStyle: 'italic', fontWeight: '300', opacity: 0.8 }}>& Innovate Together.</span>
            </h2>
            
            <p style={{ fontSize: 'clamp(1rem, 2.5vw, 1.25rem)', color: '#a1a1aa', marginBottom: '3rem', lineHeight: '1.8', maxWidth: '600px' }}>
              Joining our Slack community isn't just about chat. It's your direct line to the Finebase Lab team for **onsite strategy meetings**, project deep-dives, and real-time R&D brainstorming.
            </p>

            <div style={{ display: 'grid', gap: '2rem', marginBottom: '3.5rem' }}>
              <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'flex-start' }}>
                <div style={{ minWidth: '24px', height: '24px', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'rgba(255,255,255,0.05)', borderRadius: '4px' }}>
                  <span style={{ fontSize: '0.75rem', color: 'var(--accent)' }}>✓</span>
                </div>
                <div>
                  <h4 style={{ fontSize: '1.125rem', marginBottom: '0.5rem', color: 'white' }}>Instant Strategy Syncs</h4>
                  <p style={{ fontSize: '0.875rem', color: '#71717a', lineHeight: '1.5' }}>Request a technical meeting with our lead engineers in seconds.</p>
                </div>
              </div>
              <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'flex-start' }}>
                <div style={{ minWidth: '24px', height: '24px', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'rgba(255,255,255,0.05)', borderRadius: '4px' }}>
                  <span style={{ fontSize: '0.75rem', color: 'var(--accent)' }}>✓</span>
                </div>
                <div>
                  <h4 style={{ fontSize: '1.125rem', marginBottom: '0.5rem', color: 'white' }}>Real-time Code & R&D</h4>
                  <p style={{ fontSize: '0.875rem', color: '#71717a', lineHeight: '1.5' }}>Watch your product evolve with live feedback loops and lab updates.</p>
                </div>
              </div>
            </div>

            <a 
              href={SLACK_INVITE} 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn btn-primary" 
              style={{ 
                padding: '1.25rem 3.5rem', 
                borderRadius: '100px', 
                background: '#4A154B', 
                color: 'white', 
                borderColor: '#4A154B',
                fontSize: '0.8125rem',
                fontWeight: '700',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '1rem',
                boxShadow: '0 10px 40px rgba(74, 21, 75, 0.3)'
              }}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M5.042 15.165a2.528 2.528 0 0 1-2.52 2.523A2.528 2.528 0 0 1 0 15.165a2.527 2.527 0 0 1 2.522-2.52h2.52v2.52zM6.313 15.165a2.527 2.527 0 0 1 2.521-2.52 2.527 2.527 0 0 1 2.521 2.52v6.313A2.528 2.528 0 0 1 8.834 24a2.528 2.528 0 0 1-2.521-2.522v-6.313zM8.834 5.042a2.528 2.528 0 0 1-2.521-2.52A2.528 2.528 0 0 1 8.834 0a2.527 2.527 0 0 1 2.521 2.522v2.52H8.834zM8.834 6.313a2.527 2.527 0 0 1 2.521 2.521 2.527 2.527 0 0 1-2.521 2.521H2.522A2.528 2.528 0 0 1 0 8.834a2.528 2.528 0 0 1 2.522-2.521h6.312zM18.958 8.834a2.528 2.528 0 0 1 2.522-2.521A2.528 2.528 0 0 1 24 8.834a2.527 2.527 0 0 1-2.52 2.52h-2.522v-2.52zM17.688 8.834a2.527 2.527 0 0 1-2.521 2.52 2.527 2.527 0 0 1-2.521-2.52V2.522A2.528 2.528 0 0 1 15.167 0a2.528 2.528 0 0 1 2.521 2.522v6.312zM15.167 18.958a2.528 2.528 0 0 1 2.521 2.521 2.528 2.528 0 0 1-2.521 2.521 2.527 2.527 0 0 1-2.522-2.522v-2.52h2.522zM15.167 17.688a2.527 2.527 0 0 1-2.522-2.521 2.527 2.527 0 0 1 2.522-2.521h6.311A2.528 2.528 0 0 1 24 15.167a2.528 2.528 0 0 1-2.522 2.521h-6.311z"/>
              </svg>
              Enter Community Lab
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2 }}
            style={{ position: 'relative' }}
          >
            <div style={{
              width: '100%',
              aspectRatio: 'clamp(1, 4/3, 5/4)',
              background: 'rgba(255,255,255,0.02)',
              border: '1px solid rgba(255,255,255,0.05)',
              borderRadius: '24px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              backdropFilter: 'blur(10px)',
              overflow: 'hidden',
              position: 'relative'
            }}>
              <Image 
                src={bImg} 
                alt="Community Collaboration Hub" 
                fill 
                style={{ objectFit: 'cover', opacity: 0.8 }}
              />
              <div style={{ 
                position: 'absolute', 
                inset: 0, 
                background: 'linear-gradient(to bottom, transparent, rgba(9,9,11,0.8))' 
              }}></div>
            </div>
            {/* Callouts */}
            <div className="hide-mobile" style={{ position: 'absolute', top: '10%', right: '-5%', background: '#ff4b2b', padding: '0.75rem 1.25rem', borderRadius: '4px', fontSize: '0.75rem', fontWeight: '700' }}>LIVE R&D</div>
            <div className="hide-mobile" style={{ position: 'absolute', bottom: '15%', left: '-10%', background: 'var(--accent)', color: 'black', padding: '0.75rem 1.25rem', borderRadius: '4px', fontSize: '0.75rem', fontWeight: '700' }}>STRATEGY SYNC</div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
