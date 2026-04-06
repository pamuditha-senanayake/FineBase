'use client';
import { useState, Suspense } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Calendar from '@/components/Calendar';
import { motion } from 'framer-motion';

function BookingContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const pkg = searchParams.get('package') || 'Essential';
  
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    date: '',
    time: ''
  });

  const handleDateSelect = (date: string, time: string) => {
    setFormData({ ...formData, date, time });
    setStep(2);
  };

  const handleFinalSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Redirect to payment with details
    const params = new URLSearchParams({
      ...formData,
      package: pkg
    });
    router.push(`/payment?${params.toString()}`);
  };

  return (
    <main style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', paddingTop: '10rem' }}>
      <Navbar />
      <div className="container" style={{ flex: 1, marginBottom: '10rem' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <div style={{ marginBottom: '4rem', textAlign: 'center' }}>
            <h1 style={{ fontSize: '3.5rem', marginBottom: '1rem' }}>Reserve Your <br /> <span style={{ fontStyle: 'italic' }}>Session</span>.</h1>
            <p style={{ color: 'var(--muted-foreground)' }}>Package: <span style={{ color: 'var(--foreground)', fontWeight: '600', textTransform: 'capitalize' }}>{pkg}</span></p>
          </div>

          {step === 1 ? (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Calendar onSelect={handleDateSelect} />
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              style={{ maxWidth: '500px', margin: '0 auto', background: 'white', padding: '4rem', border: '1px solid var(--border)' }}
            >
              <h2 style={{ fontSize: '1.75rem', marginBottom: '1rem' }}>Contact Details</h2>
              <p style={{ fontSize: '0.875rem', marginBottom: '2.5rem', color: 'var(--muted-foreground)' }}>
                Please provide your contact information to finalize the booking of your <b>{formData.date} at {formData.time}</b> session.
              </p>
              
              <form onSubmit={handleFinalSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  <label style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Full Name</label>
                  <input
                    required
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    style={{ padding: '1rem', border: '1px solid var(--border)', fontFamily: 'var(--font-sans)', outline: 'none' }}
                    placeholder="Enter your name"
                  />
                </div>
                
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  <label style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Email Address</label>
                  <input
                    required
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    style={{ padding: '1rem', border: '1px solid var(--border)', fontFamily: 'var(--font-sans)', outline: 'none' }}
                    placeholder="Enter your email"
                  />
                </div>

                <div style={{ display: 'flex', gap: '1rem', marginTop: '1rem' }}>
                  <button type="button" onClick={() => setStep(1)} style={{ flex: 1, padding: '1.25rem', border: '1px solid var(--border)', background: 'transparent', cursor: 'pointer', fontSize: '0.875rem' }}>
                    Back
                  </button>
                  <button type="submit" className="btn btn-primary" style={{ flex: 2, padding: '1.25rem' }}>
                    Continue to Payment
                  </button>
                </div>
              </form>
            </motion.div>
          )}
        </div>
      </div>
      <Footer />
    </main>
  );
}

export default function BookingPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <BookingContent />
    </Suspense>
  );
}
