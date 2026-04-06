'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';

const SERVICE_CATEGORIES = [
  {
    id: 'web',
    title: 'Web Platforms',
    description: 'High-performance Next.js and React architectures for scalable digital products.',
    tiers: [
      { name: 'Simple', price: 'From $150', features: ['Bug Fixes & Patches', 'Speed Optimization', 'SEO Audit', 'Small Feature Additions'] },
      { name: 'Core', price: 'From $2,500', features: ['Premium Landing Page', 'Custom UI Design', 'Basic Auth & CMS', 'Contact Logic'] },
      { name: 'Professional', price: 'From $6,500', features: ['Full SaaS Platform', 'Stripe Integration', 'Complex Database Architecture', 'Advanced Auth'] },
      { name: 'Enterprise', price: 'From $15,000', features: ['Multi-tenant Systems', 'Custom IP Development', 'High-Scale Orchestration', '24/7 Priority Lab Support'] }
    ]
  },
  {
    id: 'mobile',
    title: 'Mobile Apps',
    description: 'Seamless cross-platform development using Flutter or React Native.',
    tiers: [
      { name: 'Simple', price: 'From $250', features: ['UI/UX Adjustments', 'API Integration fix', 'App Store Metadata', 'Version Updates'] },
      { name: 'Core', price: 'From $4,500', features: ['Essentials App (5-8 screens)', 'Firebase/Cloud Sync', 'Push Notifications', 'Auth System'] },
      { name: 'Professional', price: 'From $9,500', features: ['Real-time Features', 'Advanced Animations', 'Custom API Suite', 'Complex Workflows'] },
      { name: 'Enterprise', price: 'Custom Quote', features: ['Modular Architecture', 'Offline Perfection', 'High-Security Compliance', 'Dedicated Dev Team'] }
    ]
  },
  {
    id: 'lab',
    title: 'R&D Consulting',
    description: 'Strategic technical guidance and research and development for emerging tech.',
    tiers: [
      { name: 'Simple', price: 'From $100', features: ['Quarter-hour Advisory', 'Code Review Snippet', 'Tech Stack Validation', 'Quick Feasibility Check'] },
      { name: 'Core', price: 'From $1,500', features: ['Full Tech Roadmap', 'Architecture Blueprint', 'Security Audit', 'PoC Prototype'] },
      { name: 'Professional', price: 'From $5,000', features: ['Deep R&D Exploration', 'Whitepaper Technicals', 'Complex Integration R&D', 'IP Strategy'] },
      { name: 'Enterprise', price: 'Monthly Retainer', features: ['Internal Lab Setup', 'CTO-as-a-Service', 'Patent Support', 'Full R&D Team Allocation'] }
    ]
  }
];

export default function Packages() {
  const [activeTab, setActiveTab] = useState('web');
  const currentCategory = SERVICE_CATEGORIES.find(c => c.id === activeTab)!;

  return (
    <section id="packages" className="section" style={{ background: 'var(--background)', padding: '12rem 0' }}>
      <div className="container">
        <div style={{ marginBottom: '6rem', textAlign: 'center', maxWidth: '800px', margin: '0 auto 6rem' }}>
          <h2 style={{ fontSize: '3.5rem', marginBottom: '2rem', color: 'white' }}>Unified <br /> <span style={{ fontStyle: 'italic' }}>Service Tiers</span>.</h2>
          <p style={{ fontSize: '1.25rem', color: 'var(--muted-foreground)', lineHeight: '1.8' }}>
            We've simplified our engagement model. Select your project category and choose a tier that matches your scope. 
            All pricing is initial—final terms and payment plans are finalized in your strategy meeting.
          </p>
        </div>

        {/* Category Selector */}
        <div style={{ 
          display: 'flex', 
          justifyContent: 'center', 
          gap: '1rem', 
          marginBottom: '6rem',
          flexWrap: 'wrap'
        }}>
          {SERVICE_CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveTab(cat.id)}
              style={{
                padding: '0.75rem 2.5rem',
                borderRadius: '100px',
                border: activeTab === cat.id ? '1px solid var(--accent)' : '1px solid rgba(255,255,255,0.1)',
                background: activeTab === cat.id ? 'var(--accent)' : 'transparent',
                color: activeTab === cat.id ? 'black' : 'white',
                fontSize: '0.625rem',
                textTransform: 'uppercase',
                letterSpacing: '0.2em',
                fontWeight: '700',
                cursor: 'pointer',
                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)'
              }}
            >
              {cat.title}
            </button>
          ))}
        </div>
        
        {/* Tiers Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '2.5rem'
            }}
          >
            {currentCategory.tiers.map((tier, idx) => (
              <div
                key={idx}
                style={{
                  background: 'rgba(255, 255, 255, 0.02)',
                  padding: '3rem',
                  border: '1px solid rgba(255, 255, 255, 0.05)',
                  borderRadius: '12px',
                  display: 'flex',
                  flexDirection: 'column'
                }}
              >
                <div style={{ marginBottom: '2.5rem' }}>
                  <span style={{ 
                    fontSize: '0.625rem', 
                    textTransform: 'uppercase', 
                    letterSpacing: '0.15em', 
                    color: 'var(--muted-foreground)',
                    display: 'block',
                    marginBottom: '0.5rem'
                  }}>
                    {tier.name}
                  </span>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
                    <h3 style={{ fontSize: '1.75rem', color: 'white' }}>{tier.price}</h3>
                  </div>
                </div>

                <ul style={{ listStyle: 'none', padding: 0, marginBottom: '3rem', flex: 1 }}>
                  {tier.features.map((feat, fIdx) => (
                    <li key={fIdx} style={{
                      fontSize: '0.8125rem',
                      marginBottom: '1rem',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.875rem',
                      color: 'rgba(255, 255, 255, 0.5)'
                    }}>
                      <span style={{ width: '6px', height: '1px', background: 'var(--accent)' }}></span>
                      {feat}
                    </li>
                  ))}
                </ul>
                
                <Link 
                  href={`/booking?service=${currentCategory.id}-${tier.name.toLowerCase()}`} 
                  className="btn" 
                  style={{ 
                    width: '100%', 
                    fontSize: '0.625rem', 
                    padding: '1rem', 
                    borderRadius: '4px',
                    borderColor: 'var(--accent)',
                    color: 'var(--accent)'
                  }}
                >
                  Initiate Project
                </Link>
              </div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Negotiation Banner */}
        <div style={{ 
          marginTop: '6rem', 
          padding: '3rem', 
          background: 'rgba(255, 255, 255, 0.02)', 
          border: '1px solid rgba(255, 255, 255, 0.05)', 
          borderRadius: '12px',
          textAlign: 'center'
        }}>
          <h4 style={{ fontSize: '1.25rem', marginBottom: '1rem', fontFamily: 'var(--font-serif)', color: 'white' }}>Tailored Terms & Payment Plans</h4>
          <p style={{ fontSize: '0.95rem', maxWidth: '600px', margin: '0 auto', color: 'var(--muted-foreground)' }}>
            We believe in high-impact collaboration regardless of immediate budget constraints. 
            Flexible payment plans and price negotiations are available and encouraged during our technical strategy sessions.
          </p>
        </div>
      </div>
    </section>
  );
}
