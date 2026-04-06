'use client';
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Packages from "@/components/Packages";
import SlackCTA from "@/components/SlackCTA";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import Image from "next/image";

import aImg from "@/images/a.jpg";

export default function Home() {
  return (
    <main style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Navbar />
      <div style={{ flex: 1 }}>
        <Hero />
        <Packages />
        <SlackCTA />
        
        <section className="section" style={{ background: 'var(--background)', borderTop: '1px solid rgba(255,255,255,0.05)', padding: 'var(--section-padding) 0' }}>
          <div className="container">
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 360px), 1fr))',
              gap: 'clamp(3rem, 10vw, 6rem)',
              alignItems: 'center'
            }}>
              <div>
                <h2 className="h1-mobile" style={{ fontSize: '3.5rem', marginBottom: '2.5rem', color: 'white' }}>Strategic <br /> <span style={{ fontStyle: 'italic' }}>Precision</span>.</h2>
                <p style={{
                  fontSize: '1.25rem',
                  lineHeight: '1.8',
                  color: 'var(--muted-foreground)',
                  marginBottom: '2.5rem'
                }}>
                  At Finebase Labs, we believe that greatness is found in the details. 
                  Every line of code and every technical architecture is meticulously 
                  crafted to ensure your product resonates with performance and distinction.
                </p>
                <div style={{ padding: 'clamp(1.5rem, 4vw, 2.5rem)', background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.05)', borderRadius: '8px' }}>
                  <blockquote style={{ fontSize: '1.125rem', fontStyle: 'italic', color: 'var(--muted-foreground)', lineHeight: '1.6' }}>
                    "Technological innovation is not just about complexity, but about the elegant 
                    integration of systems that serve human needs."
                  </blockquote>
                  <cite style={{ display: 'block', marginTop: '1.5rem', fontSize: '0.875rem', fontWeight: '700', fontStyle: 'normal', color: 'white', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                    — Finebase Labs Philosophy
                  </cite>
                </div>
              </div>
              <div style={{ position: 'relative' }}>
                <motion.div 
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  style={{
                    aspectRatio: '1',
                    background: 'rgba(255,255,255,0.03)',
                    position: 'relative',
                    overflow: 'hidden',
                    borderRadius: '4px',
                    border: '1px solid rgba(255,255,255,0.1)'
                  }}
                >
                  <Image 
                    src={aImg} 
                    alt="R&D Laboratory" 
                    fill 
                    style={{ 
                       objectFit: 'cover',
                       filter: 'grayscale(100%) brightness(0.8)',
                       transition: 'all 0.6s cubic-bezier(0.16, 1, 0.3, 1)'
                    }}
                  />
                  <div style={{
                    position: 'absolute',
                    top: 'clamp(1rem, 4vw, 2rem)',
                    left: 'clamp(1rem, 4vw, 2rem)',
                    fontSize: '0.625rem',
                    letterSpacing: '0.3em',
                    textTransform: 'uppercase',
                    color: 'white',
                    background: 'rgba(0,0,0,0.5)',
                    padding: '0.5rem 1rem',
                    backdropFilter: 'blur(10px)',
                    zIndex: 1,
                    fontWeight: '700'
                  }}>
                    R&D Laboratory
                  </div>
                </motion.div>
                <div className="hide-mobile" style={{
                  position: 'absolute',
                  top: '-2rem',
                  right: '-2rem',
                  width: '10rem',
                  height: '10rem',
                  background: 'var(--accent)',
                  opacity: 0.05,
                  zIndex: -1
                }}></div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </main>
  );
}
