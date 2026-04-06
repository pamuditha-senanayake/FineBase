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
        background: 'white', 
        border: '1px solid var(--border)', 
        borderRadius: '12px', 
        overflow: 'hidden', 
        boxShadow: '0 20px 50px rgba(0,0,0,0.05)'
      }}
    >
      {/* Sandbox Header */}
      <div style={{ 
        padding: '1rem 2rem', 
        background: '#f8fafc', 
        borderBottom: '1px solid #e2e8f0', 
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'center' 
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          <div style={{ width: '8px', height: '8px', background: '#22c55e', borderRadius: '50%' }}></div>
          <span style={{ fontSize: '0.625rem', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.1em', color: '#64748b' }}>
            Sandbox Environment Active
          </span>
        </div>
        <div style={{ fontSize: '0.625rem', color: '#94a3b8' }}>Test Mode Enabled</div>
      </div>

      <div style={{ padding: '3rem' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '3.5rem' }}>
          <div>
            <label style={{ fontSize: '0.625rem', textTransform: 'uppercase', color: '#94a3b8', letterSpacing: '0.1em', display: 'block', marginBottom: '0.5rem' }}>Secure Deposit</label>
            <div style={{ fontSize: '2.5rem', fontWeight: '400', fontFamily: 'var(--font-serif)', color: 'var(--foreground)' }}>{total}</div>
          </div>
          <div style={{ textAlign: 'right' }}>
            <span style={{ fontSize: '0.625rem', textTransform: 'uppercase', color: '#94a3b8', letterSpacing: '0.1em', display: 'block', marginBottom: '0.5rem' }}>Provider</span>
            <div style={{ fontWeight: '700', fontSize: '0.875rem', color: '#2B2E4A' }}>Payoneer Gateway</div>
          </div>
        </div>
        
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            <label style={{ fontSize: '0.625rem', textTransform: 'uppercase', letterSpacing: '0.1em', fontWeight: '600', color: '#64748b' }}>Card Number</label>
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
                  border: '1px solid #e2e8f0', 
                  borderRadius: '8px', 
                  outline: 'none',
                  fontSize: '1rem',
                  fontFamily: 'monospace',
                  letterSpacing: '0.1em'
                }}
              />
              <div style={{ position: 'absolute', right: '1.25rem', top: '50%', transform: 'translateY(-50%)', opacity: 0.3 }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="1" y="4" width="22" height="16" rx="2" ry="2"></rect><line x1="1" y1="10" x2="23" y2="10"></line></svg>
              </div>
            </div>
          </div>
          
          <div style={{ display: 'flex', gap: '1.5rem' }}>
            <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              <label style={{ fontSize: '0.625rem', textTransform: 'uppercase', letterSpacing: '0.1em', fontWeight: '600', color: '#64748b' }}>Expiry</label>
              <input
                required
                type="text"
                placeholder="MM / YY"
                value={formData.expiry}
                onChange={(e) => setFormData({ ...formData, expiry: e.target.value })}
                style={{ width: '100%', padding: '1.25rem', border: '1px solid #e2e8f0', borderRadius: '8px', outline: 'none' }}
              />
            </div>
            <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              <label style={{ fontSize: '0.625rem', textTransform: 'uppercase', letterSpacing: '0.1em', fontWeight: '600', color: '#64748b' }}>CVC</label>
              <input
                required
                type="text"
                placeholder="123"
                value={formData.cvv}
                onChange={(e) => setFormData({ ...formData, cvv: e.target.value })}
                style={{ width: '100%', padding: '1.25rem', border: '1px solid #e2e8f0', borderRadius: '8px', outline: 'none' }}
              />
            </div>
          </div>

          <div style={{ background: '#f8fafc', padding: '1.5rem', borderRadius: '8px', border: '1px dashed #e2e8f0' }}>
            <p style={{ fontSize: '0.75rem', color: '#64748b', lineHeight: '1.5' }}>
              <b>Note:</b> You are in a secure sandbox. No real funds will be deducted. A formal transaction receipt will be simulated and "sent" to your provided email upon completion.
            </p>
          </div>
          
          <button
            type="submit"
            disabled={isProcessing}
            style={{
              marginTop: '1rem',
              padding: '1.25rem',
              background: '#0f172a',
              color: 'white',
              border: 'none',
              borderRadius: '100px',
              cursor: isProcessing ? 'not-allowed' : 'pointer',
              fontWeight: '600',
              fontSize: '0.875rem',
              letterSpacing: '0.05em',
              transition: 'all 0.3s ease',
              opacity: isProcessing ? 0.7 : 1,
              boxShadow: '0 10px 20px rgba(0,0,0,0.1)'
            }}
          >
            {isProcessing ? 'Simulating Transaction...' : 'Confirm Sandbox Deposit'}
          </button>
        </form>
        
        <div style={{ marginTop: '2.5rem', textAlign: 'center', display: 'flex', justifyContent: 'center', gap: '2rem', opacity: 0.3 }}>
          <span style={{ fontSize: '0.625rem', fontWeight: '700' }}>PCI-DSS COMPLIANT</span>
          <span style={{ fontSize: '0.625rem', fontWeight: '700' }}>256-BIT ENCRYPTION</span>
        </div>
      </div>
    </motion.div>
  );
}
