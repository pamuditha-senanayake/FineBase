'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';

const SERVICE_CATEGORIES = [
  {
    title: 'Web Platforms',
    description: 'High-performance Next.js and React architectures for scalable digital products.',
    options: [
      { name: 'Core MVP', price: 'From $3,500', features: ['Optimized Landing Page', 'Authentication', 'Database Integration'] },
      { name: 'SaaS Platform', price: 'From $8,500', features: ['Multi-tenant System', 'Stripe/Billing', 'Custom UI Kit'] }
    ]
  },
  {
    title: 'Mobile Apps',
    description: 'Seamless cross-platform development using Flutter or React Native.',
    options: [
      { name: 'Essentials App', price: 'From $5,000', features: ['Custom UI/UX Design', 'Cloud Syncing', 'App Store Submission'] },
      { name: 'Enterprise App', price: 'From $12,500', features: ['Real-time Features', 'Advanced Backend', 'Custom API'] }
    ]
  },
  {
    title: 'R&D Consulting',
    description: 'Strategic technical guidance and research and development for emerging tech.',
    options: [
      { name: 'Strategy Session', price: '$250 / Hr', features: ['Tech Architecture Review', 'Product Roadmap', 'Feasibility Study'] },
      { name: 'Full R&D Lab', price: 'Monthly Retainer', features: ['Dedicated Engineering Team', 'Prototype Lab Access', 'IP Protection'] }
    ]
  },
  {
    title: 'Custom Dev',
    description: 'Bespoke software solutions tailored to complex business requirements.',
    options: [
      { name: 'Custom Module', price: 'From $2,000', features: ['Legacy System Integration', 'Specialized Backend', 'Performance Audit'] },
      { name: 'Full Ecosystem', price: 'Custom Quote', features: ['End-to-End Orchestration', 'Microservices', '24/7 Priority Support'] }
    ]
  }
];

export default function Packages() {
  return (
    <section id="packages" className="section" style={{ background: '#fafafa', padding: '12rem 0' }}>
      <div className="container">
        <div style={{ marginBottom: '8rem', textAlign: 'center', maxWidth: '800px', margin: '0 auto 8rem' }}>
          <h2 style={{ fontSize: '3.5rem', marginBottom: '2rem' }}>Comprehensive <br /> <span style={{ fontStyle: 'italic' }}>Lab Services</span>.</h2>
          <p style={{ fontSize: '1.25rem', color: 'var(--muted-foreground)', lineHeight: '1.8' }}>
            We provide specialized technical solutions with transparent pricing across four core domains. 
            All projects include a dedicated Slack channel for real-time collaboration.
          </p>
        </div>
        
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
          gap: '4rem'
        }}>
          {SERVICE_CATEGORIES.map((category, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              style={{
                background: 'white',
                padding: '4rem',
                border: '1px solid var(--border)',
                borderRadius: '8px',
                position: 'relative'
              }}
            >
              <h3 style={{ fontSize: '2rem', marginBottom: '1rem', color: 'var(--foreground)' }}>{category.title}</h3>
              <p style={{ fontSize: '0.95rem', color: 'var(--muted-foreground)', marginBottom: '3rem', lineHeight: '1.6' }}>{category.description}</p>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
                {category.options.map((opt, oIdx) => (
                  <div key={oIdx} style={{
                    padding: '2rem',
                    background: '#fcfcfc',
                    border: '1px solid #f0f0f0',
                    borderRadius: '4px'
                  }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
                      <span style={{ fontWeight: '600', fontSize: '1.125rem' }}>{opt.name}</span>
                      <span style={{ color: 'var(--accent)', fontWeight: '700', fontSize: '1rem' }}>{opt.price}</span>
                    </div>
                    
                    <ul style={{ listStyle: 'none', padding: 0, marginBottom: '2rem' }}>
                      {opt.features.map((feat, fIdx) => (
                        <li key={fIdx} style={{
                          fontSize: '0.8125rem',
                          marginBottom: '0.75rem',
                          display: 'flex',
                          alignItems: 'center',
                          gap: '0.75rem',
                          color: '#555'
                        }}>
                          <span style={{ width: '4px', height: '1px', background: 'var(--accent)' }}></span>
                          {feat}
                        </li>
                      ))}
                    </ul>
                    
                    <Link href={`/booking?service=${opt.name.toLowerCase()}`} className="btn" style={{ width: '100%', fontSize: '0.75rem', padding: '0.75rem' }}>
                      Inquire Details
                    </Link>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
