'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';

export default function PaymentStep({ onComplete, total, isProcessing }: { 
  onComplete: (cardData: any) => void;
  total: string;
  isProcessing: boolean;
}) {
  const [formData, setFormData] = useState({
    cardNum: '',
    expiry: '',
    cvv: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onComplete(formData);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      style={{ 
        width: '100%', 
        background: 'rgba(255, 255, 255, 0.01)', 
        border: '1px solid rgba(255, 255, 255, 0.05)', 
        borderRadius: '12px', 
        overflow: 'hidden', 
      }}
    >
      {/* Sandbox Header */}
      <div style={{ 
        padding: '1.25rem 2rem', 
        background: 'rgba(255, 255, 255, 0.03)', 
        borderBottom: '1px solid rgba(255, 255, 255, 0.05)', 
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'center' 
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          <div style={{ width: '8px', height: '8px', background: '#22c55e', borderRadius: '50%' }}></div>
          <span style={{ fontSize: '0.625rem', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.15em', color: 'rgba(255,255,255,0.5)' }}>
            Sandbox Environment Active
          </span>
        </div>
        <div style={{ fontSize: '0.625rem', color: 'rgba(255,255,255,0.3)', letterSpacing: '0.05em' }}>TEST MODE</div>
      </div>

      <div style={{ padding: '3.5rem' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '4rem' }}>
          <div>
            <label style={{ fontSize: '0.625rem', textTransform: 'uppercase', color: 'rgba(255,255,255,0.4)', letterSpacing: '0.15em', display: 'block', marginBottom: '0.75rem' }}>Secure Deposit</label>
            <div style={{ fontSize: '2.75rem', fontWeight: '400', fontFamily: 'var(--font-serif)', color: 'white' }}>{total}</div>
          </div>
          <div style={{ textAlign: 'right' }}>
            <span style={{ fontSize: '0.625rem', textTransform: 'uppercase', color: 'rgba(255,255,255,0.4)', letterSpacing: '0.15em', display: 'block', marginBottom: '0.75rem' }}>Provider</span>
            <div style={{ fontWeight: '700', fontSize: '0.875rem', color: 'white', letterSpacing: '0.05em' }}>PAYONEER GATEWAY</div>
          </div>
        </div>
        
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.875rem' }}>
            <label style={{ fontSize: '0.625rem', textTransform: 'uppercase', letterSpacing: '0.15em', fontWeight: '600', color: 'rgba(255,255,255,0.5)' }}>Card Number</label>
            <div style={{ position: 'relative' }}>
              <input
                required
                type="text"
                placeholder="4242 4242 4242 4242"
                value={formData.cardNum}
                onChange={(e) => setFormData({ ...formData, cardNum: e.target.value })}
                style={{ 
                  width: '100%', 
                  padding: '1.25rem', 
                  background: 'rgba(255,255,255,0.03)', 
                  border: '1px solid rgba(255,255,255,0.1)', 
                  borderRadius: '8px', 
                  outline: 'none',
                  fontSize: '1rem',
                  fontFamily: 'monospace',
                  letterSpacing: '0.15em',
                  color: 'white'
                }}
              />
              <div style={{ position: 'absolute', right: '1.25rem', top: '50%', transform: 'translateY(-50%)', color: 'rgba(255,255,255,0.2)' }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="1" y="4" width="22" height="16" rx="2" ry="2"></rect><line x1="1" y1="10" x2="23" y2="10"></line></svg>
              </div>
            </div>
          </div>
          
          <div style={{ display: 'flex', gap: '1.5rem' }}>
            <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '0.875rem' }}>
              <label style={{ fontSize: '0.625rem', textTransform: 'uppercase', letterSpacing: '0.15em', fontWeight: '600', color: 'rgba(255,255,255,0.5)' }}>Expiry</label>
              <input
                required
                type="text"
                placeholder="MM / YY"
                value={formData.expiry}
                onChange={(e) => setFormData({ ...formData, expiry: e.target.value })}
                style={{ 
                  width: '100%', 
                  padding: '1.25rem', 
                  background: 'rgba(255,255,255,0.03)', 
                  border: '1px solid rgba(255,255,255,0.1)', 
                  borderRadius: '8px', 
                  outline: 'none',
                  color: 'white'
                }}
              />
            </div>
            <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '0.875rem' }}>
              <label style={{ fontSize: '0.625rem', textTransform: 'uppercase', letterSpacing: '0.15em', fontWeight: '600', color: 'rgba(255,255,255,0.5)' }}>CVC</label>
              <input
                required
                type="text"
                placeholder="123"
                value={formData.cvv}
                onChange={(e) => setFormData({ ...formData, cvv: e.target.value })}
                style={{ 
                  width: '100%', 
                  padding: '1.25rem', 
                  background: 'rgba(255,255,255,0.03)', 
                  border: '1px solid rgba(255,255,255,0.1)', 
                  borderRadius: '8px', 
                  outline: 'none',
                  color: 'white'
                }}
              />
            </div>
          </div>

          <div style={{ background: 'rgba(255,255,255,0.02)', padding: '1.75rem', borderRadius: '8px', border: '1px dashed rgba(255,255,255,0.1)' }}>
            <p style={{ fontSize: '0.8125rem', color: 'rgba(255,255,255,0.4)', lineHeight: '1.6' }}>
              <b style={{ color: 'rgba(255,255,255,0.6)' }}>Note:</b> You are in a secure sandbox. No real funds will be deducted. A formal transaction receipt will be simulated and "sent" to your provided email upon completion.
            </p>
          </div>
          
          <button
            type="submit"
            disabled={isProcessing}
            style={{
              marginTop: '1rem',
              padding: '1.25rem',
              background: 'var(--foreground)',
              color: 'var(--background)',
              border: 'none',
              borderRadius: '100px',
              cursor: isProcessing ? 'not-allowed' : 'pointer',
              fontWeight: '700',
              fontSize: '0.875rem',
              textTransform: 'uppercase',
              letterSpacing: '0.125em',
              transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
              opacity: isProcessing ? 0.7 : 1,
            }}
          >
            {isProcessing ? 'Simulating Transaction...' : 'Confirm Sandbox Deposit'}
          </button>
        </form>
        
        <div style={{ marginTop: '3rem', textAlign: 'center', display: 'flex', justifyContent: 'center', gap: '3rem', opacity: 0.2 }}>
          <span style={{ fontSize: '0.625rem', fontWeight: '700', letterSpacing: '0.1em' }}>PCI-DSS COMPLIANT</span>
          <span style={{ fontSize: '0.625rem', fontWeight: '700', letterSpacing: '0.1em' }}>256-BIT ENCRYPTION</span>
        </div>
      </div>
    </motion.div>
  );
}
