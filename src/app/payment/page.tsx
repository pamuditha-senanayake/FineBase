'use client';
import { useState, Suspense } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { submitBooking } from '@/app/actions';
import { motion } from 'framer-motion';

function PaymentContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [isProcessing, setIsProcessing] = useState(false);
  const [isComplete, setIsComplete] = useState(false);

  const bookingData = {
    name: searchParams.get('name') || '',
    email: searchParams.get('email') || '',
    date: searchParams.get('date') || '',
    time: searchParams.get('time') || '',
    package: searchParams.get('package') || ''
  };

  const handlePayoneerSIM = async () => {
    setIsProcessing(true);
    
    // Create FormData for the server action
    const formData = new FormData();
    Object.entries(bookingData).forEach(([key, value]) => formData.append(key, value));
    
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    const result = await submitBooking(formData);
    if (result.success) {
      setIsComplete(true);
      setIsProcessing(false);
    }
  };

  if (isComplete) {
    return (
      <main style={{ height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'white' }}>
        <motion.div
           initial={{ opacity: 0, scale: 0.9 }}
           animate={{ opacity: 1, scale: 1 }}
           style={{ textAlign: 'center', maxWidth: '400px' }}
        >
          <div style={{ width: '80px', height: '80px', borderRadius: '50%', background: '#f4f4f5', margin: '0 auto 2rem', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid var(--accent)' }}>
            <span style={{ fontSize: '2rem', color: 'var(--accent)' }}>✓</span>
          </div>
          <h1 style={{ fontSize: '2.5rem', marginBottom: '1.5rem' }}>Reservation <br /> <span style={{ fontStyle: 'italic' }}>Confirmed</span>.</h1>
          <p style={{ color: 'var(--muted-foreground)', marginBottom: '3rem' }}>
            A confirmation has been sent to <b>{bookingData.email}</b>. We look forward to our session on {bookingData.date}.
          </p>
          <button onClick={() => router.push('/')} className="btn btn-primary" style={{ padding: '1rem 3rem' }}>
            Return Home
          </button>
        </motion.div>
      </main>
    );
  }

  return (
    <main style={{ minHeight: '100vh', background: '#f4f4f5', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '2rem' }}>
      <div style={{ maxWidth: '450px', width: '100%', background: 'white', border: '1px solid var(--border)', overflow: 'hidden' }}>
        <div style={{ padding: '2rem', background: '#2B2E4A', color: 'white', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <h2 style={{ fontSize: '1.25rem', fontFamily: 'var(--font-sans)', fontWeight: '600' }}>Payoneer Checkout</h2>
          <div style={{ fontSize: '0.75rem', padding: '4px 12px', background: 'rgba(255,255,255,0.1)', borderRadius: '20px' }}>Secure Portal</div>
        </div>
        
        <div style={{ padding: '3rem' }}>
          <div style={{ marginBottom: '3rem' }}>
            <label style={{ fontSize: '0.625rem', textTransform: 'uppercase', color: '#999', letterSpacing: '0.1em' }}>Total Amount</label>
            <div style={{ fontSize: '2.5rem', fontWeight: '400', fontFamily: 'var(--font-serif)', marginTop: '0.5rem' }}>$1,500.00</div>
          </div>
          
          <div style={{ borderTop: '1px solid #efefef', paddingTop: '2.5rem', display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.875rem' }}>
              <span style={{ color: '#666' }}>Service Name</span>
              <span style={{ fontWeight: '500', textTransform: 'capitalize' }}>{bookingData.package} Consulting</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.875rem' }}>
              <span style={{ color: '#666' }}>Account</span>
              <span style={{ fontWeight: '500' }}>{bookingData.email}</span>
            </div>
            
            <button
              onClick={handlePayoneerSIM}
              disabled={isProcessing}
              style={{
                marginTop: '1rem',
                padding: '1.25rem',
                background: '#ff4b2b',
                color: 'white',
                border: 'none',
                cursor: isProcessing ? 'not-allowed' : 'pointer',
                fontWeight: '600',
                fontSize: '1rem',
                transition: 'background 0.3s ease',
                opacity: isProcessing ? 0.7 : 1
              }}
            >
              {isProcessing ? 'Processing Transaction...' : 'Complete Payment with Payoneer'}
            </button>
          </div>
          
          <div style={{ marginTop: '2.5rem', textAlign: 'center', fontSize: '0.75rem', color: '#999' }}>
            Protected by Payoneer Payment Security.
          </div>
        </div>
      </div>
    </main>
  );
}

export default function PaymentPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <PaymentContent />
    </Suspense>
  );
}
