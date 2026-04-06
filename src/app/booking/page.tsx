'use client';
import { useState, Suspense, useRef, useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Calendar from '@/components/Calendar';
import PaymentStep from '@/components/PaymentStep';
import BookingStep from '@/components/BookingStep';
import { submitBooking } from '@/app/actions';
import { motion } from 'framer-motion';

const SERVICE_CATEGORIES = [
  {
    id: 'web',
    title: 'Web Platforms',
    tiers: [
      { name: 'Simple', price: '$150.00', numPrefix: '150' },
      { name: 'Core', price: '$1,500.00', numPrefix: '1500' },
      { name: 'Professional', price: '$5,000.00', numPrefix: '5000' },
      { name: 'Enterprise', price: '$15,000.00', numPrefix: '15000' }
    ]
  },
  {
    id: 'mobile',
    title: 'Mobile Apps',
    tiers: [
      { name: 'Simple', price: '$250.00', numPrefix: '250' },
      { name: 'Core', price: '$4,500.00', numPrefix: '4500' },
      { name: 'Professional', price: '$9,500.00', numPrefix: '9500' },
      { name: 'Enterprise', price: '$15,000.00', numPrefix: '15000' }
    ]
  },
  {
    id: 'lab',
    title: 'R&D Consulting',
    tiers: [
      { name: 'Simple', price: '$100.00', numPrefix: '100' },
      { name: 'Core', price: '$1,500.00', numPrefix: '1500' },
      { name: 'Professional', price: '$5,000.00', numPrefix: '5000' },
      { name: 'Enterprise', price: 'Contact Lab', numPrefix: '25000' }
    ]
  }
];

function BookingContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const initialService = searchParams.get('service') || ''; // category-tier format
  
  const [step, setStep] = useState(initialService ? 1 : 0);
  const [activeCategoryId, setActiveCategoryId] = useState(initialService.split('-')[0] || 'web');
  const [activeTierName, setActiveTierName] = useState(initialService.split('-')[1] || '');
  
  const [isProcessing, setIsProcessing] = useState(false);
  const [isComplete, setIsComplete] = useState(false);
  const [txnDetails, setTxnDetails] = useState<{ id?: string, receiptSent?: boolean }>({});
  
  const step0Ref = useRef<HTMLDivElement>(null);
  const step2Ref = useRef<HTMLDivElement>(null);
  const step3Ref = useRef<HTMLDivElement>(null);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    date: '',
    time: '',
    package: initialService
  });

  // Derived data
  const currentCategory = SERVICE_CATEGORIES.find(c => c.id === activeCategoryId)!;
  const currentTier = currentCategory.tiers.find(t => t.name.toLowerCase() === activeTierName.toLowerCase());

  // Auto-scroll logic
  useEffect(() => {
    if (step === 0 && step0Ref.current) {
      step0Ref.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
    } else if (step === 2 && step2Ref.current) {
      step2Ref.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
    } else if (step === 3 && step3Ref.current) {
      step3Ref.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  }, [step]);

  const handleDateSelect = (date: string, time: string) => {
    setFormData({ ...formData, date, time });
    setStep(2);
  };

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStep(3);
  };

  const handlePaymentComplete = async (cardData: any) => {
    setIsProcessing(true);
    
    const serverFormData = new FormData();
    Object.entries(formData).forEach(([key, value]) => serverFormData.append(key, value));
    serverFormData.append('payment_status', 'SUCCESS_MOCK');
    
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    const result = await submitBooking(serverFormData);
    if (result.success) {
      setTxnDetails({ id: result.transactionId, receiptSent: result.receiptSent });
      setIsComplete(true);
      setIsProcessing(false);
    }
  };

  if (isComplete) {
    return (
      <main style={{ height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'var(--background)' }}>
        <motion.div
           initial={{ opacity: 0, scale: 0.9 }}
           animate={{ opacity: 1, scale: 1 }}
           style={{ textAlign: 'center', maxWidth: '500px', padding: '0 2rem' }}
        >
          <div style={{ 
            width: '80px', 
            height: '80px', 
            borderRadius: '50%', 
            background: 'rgba(255, 255, 255, 0.02)', 
            margin: '0 auto 2.5rem', 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center', 
            border: '1px solid rgba(255, 255, 255, 0.1)' 
          }}>
            <span style={{ fontSize: '2rem', color: 'var(--accent)' }}>✓</span>
          </div>
          
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.75rem',
            padding: '0.5rem 1rem',
            background: 'rgba(34, 197, 94, 0.1)',
            border: '1px solid rgba(34, 197, 94, 0.2)',
            borderRadius: '100px',
            color: '#4ade80',
            fontSize: '0.625rem',
            fontWeight: '700',
            textTransform: 'uppercase',
            letterSpacing: '0.1em',
            marginBottom: '2rem'
          }}>
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><polyline points="20 6 9 17 4 12"></polyline></svg>
            Automated Receipt Sent
          </div>

          <h1 className="h1-mobile" style={{ fontSize: '3.5rem', marginBottom: '1.5rem', lineHeight: '1.1', color: 'white' }}>Reservation <br /> <span style={{ fontStyle: 'italic' }}>Simulated Success</span>.</h1>
          <p style={{ color: 'var(--muted-foreground)', marginBottom: '3.5rem', fontSize: '1rem', lineHeight: '1.6' }}>
            Your sandbox transaction has been successful. A formal digital receipt and onboarding kit have been "sent" to <b>{formData.email}</b>. 
            Your transaction ID for reference is <b style={{ color: 'white' }}>{txnDetails.id}</b>.
          </p>
          <button onClick={() => router.push('/')} className="btn btn-primary" style={{ padding: '1.125rem 4rem', borderRadius: '100px' }}>
            Return Home
          </button>
        </motion.div>
      </main>
    );
  }

  return (
    <main style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', paddingTop: 'clamp(6rem, 15vh, 10rem)', background: 'var(--background)' }}>
      <Navbar />
      <div className="container" style={{ flex: 1, marginBottom: 'clamp(5rem, 15vh, 15rem)' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <header style={{ marginBottom: 'clamp(3rem, 10vw, 6rem)', textAlign: 'left' }}>
            <h1 className="h1-mobile" style={{ fontSize: '4.5rem', marginBottom: '1.5rem', lineHeight: '1', color: 'white' }}>Project <br /> <span style={{ fontStyle: 'italic' }}>Initiation</span>.</h1>
            <p style={{ maxWidth: '500px', color: 'var(--muted-foreground)' }}>
              Complete the following stages to secure your placement in the Finebase R&D Lab.
            </p>
          </header>

          <div style={{ display: 'flex', flexDirection: 'column' }}>
            {/* Step 00: Project Scope */}
            <div ref={step0Ref}>
              <BookingStep
                number="00"
                title="Project Scope"
                subtitle="Specify the category and tier of your project for accurate lab allocation."
                isActive={step === 0}
                isCompleted={!!activeTierName && step > 0}
                onEdit={() => setStep(0)}
                summary={
                  <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap' }}>
                    <div>
                      <span style={{ fontSize: '0.625rem', textTransform: 'uppercase', opacity: 0.5, display: 'block' }}>Category</span>
                      <span style={{ fontWeight: '600', color: 'white' }}>{currentCategory.title}</span>
                    </div>
                    <div>
                      <span style={{ fontSize: '0.625rem', textTransform: 'uppercase', opacity: 0.5, display: 'block' }}>Tier</span>
                      <span style={{ fontWeight: '600', color: 'white' }}>{activeTierName || 'Not Selected'}</span>
                    </div>
                  </div>
                }
              >
                <div style={{ background: 'rgba(255, 255, 255, 0.02)', border: '1px solid rgba(255, 255, 255, 0.05)', padding: 'clamp(1.5rem, 5vw, 3rem)', borderRadius: '8px' }}>
                  <div style={{ display: 'flex', gap: '0.75rem', marginBottom: '3rem', flexWrap: 'wrap' }}>
                    {SERVICE_CATEGORIES.map(cat => (
                      <button 
                        key={cat.id}
                        onClick={() => {
                          setActiveCategoryId(cat.id);
                          setActiveTierName(''); // Reset tier when category changes
                        }}
                        style={{
                          padding: '0.75rem 1.5rem',
                          borderRadius: '100px',
                          border: activeCategoryId === cat.id ? '1px solid var(--accent)' : '1px solid rgba(255, 255, 255, 0.1)',
                          background: activeCategoryId === cat.id ? 'var(--accent)' : 'transparent',
                          color: activeCategoryId === cat.id ? 'black' : 'white',
                          fontSize: '0.625rem',
                          textTransform: 'uppercase',
                          letterSpacing: '0.1em',
                          fontWeight: '700',
                          cursor: 'pointer'
                        }}
                      >
                        {cat.title}
                      </button>
                    ))}
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 250px), 1fr))', gap: '1.5rem' }}>
                    {currentCategory.tiers.map(tier => (
                      <button
                        key={tier.name}
                        onClick={() => {
                          setActiveTierName(tier.name);
                          setFormData({ ...formData, package: `${activeCategoryId}-${tier.name.toLowerCase()}` });
                          setStep(1); // Move to schedule
                        }}
                        style={{
                          textAlign: 'left',
                          padding: '1.75rem',
                          border: activeTierName === tier.name ? '1px solid var(--accent)' : '1px solid rgba(255, 255, 255, 0.05)',
                          background: activeTierName === tier.name ? 'rgba(212, 175, 55, 0.1)' : 'rgba(255, 255, 255, 0.02)',
                          borderRadius: '8px',
                          cursor: 'pointer',
                          transition: 'all 0.2s ease'
                        }}
                      >
                        <span style={{ fontSize: '0.625rem', textTransform: 'uppercase', color: 'var(--muted-foreground)', display: 'block', marginBottom: '0.5rem' }}>{tier.name}</span>
                        <div style={{ fontSize: '1.25rem', fontWeight: '500', color: 'white' }}>{tier.price}</div>
                        <div style={{ marginTop: '1rem', fontSize: '0.75rem', color: 'var(--accent)' }}>Select Tier →</div>
                      </button>
                    ))}
                  </div>
                </div>
              </BookingStep>
            </div>

            {/* Step 1: Calendar */}
            <BookingStep
              number="01"
              title="Select Schedule"
              subtitle="Choose a preferred time for our technical discovery session."
              isActive={step === 1}
              isCompleted={step > 1}
              onEdit={() => setStep(1)}
              summary={
                <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap' }}>
                  <div>
                    <span style={{ fontSize: '0.625rem', textTransform: 'uppercase', opacity: 0.5, display: 'block' }}>Date</span>
                    <span style={{ fontWeight: '600', color: 'white' }}>{formData.date}</span>
                  </div>
                  <div>
                    <span style={{ fontSize: '0.625rem', textTransform: 'uppercase', opacity: 0.5, display: 'block' }}>Time</span>
                    <span style={{ fontWeight: '600', color: 'white' }}>{formData.time}</span>
                  </div>
                </div>
              }
            >
              <Calendar onSelect={handleDateSelect} />
            </BookingStep>

            {/* Step 2: Contact */}
            <div ref={step2Ref}>
              <BookingStep
                number="02"
                title="Client Details"
                subtitle="Provide your primary contact information for the project."
                isActive={step === 2}
                isCompleted={step > 2}
                onEdit={() => setStep(2)}
                summary={
                  <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap' }}>
                    <div>
                      <span style={{ fontSize: '0.625rem', textTransform: 'uppercase', opacity: 0.5, display: 'block' }}>Name</span>
                      <span style={{ fontWeight: '600', color: 'white' }}>{formData.name}</span>
                    </div>
                    <div>
                      <span style={{ fontSize: '0.625rem', textTransform: 'uppercase', opacity: 0.5, display: 'block' }}>Email</span>
                      <span style={{ fontWeight: '600', color: 'white' }}>{formData.email}</span>
                    </div>
                  </div>
                }
              >
                <form style={{ 
                  maxWidth: '500px', 
                  display: 'flex', 
                  flexDirection: 'column', 
                  gap: '2.5rem', 
                  background: 'rgba(255, 255, 255, 0.02)', 
                  padding: 'clamp(1.5rem, 5vw, 3rem)', 
                  border: '1px solid rgba(255, 255, 255, 0.05)',
                  borderRadius: '12px'
                }}>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                    <label style={{ fontSize: '0.625rem', textTransform: 'uppercase', letterSpacing: '0.15em', opacity: 0.5 }}>Full Name</label>
                    <input
                      required
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      style={{ 
                        padding: '1.125rem', 
                        background: 'rgba(255,255,255,0.03)', 
                        border: '1px solid rgba(255,255,255,0.1)', 
                        borderRadius: '4px', 
                        outline: 'none',
                        color: 'white',
                        fontSize: '1rem'
                      }}
                      placeholder="John Doe"
                    />
                  </div>
                  
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                    <label style={{ fontSize: '0.625rem', textTransform: 'uppercase', letterSpacing: '0.15em', opacity: 0.5 }}>Email Address</label>
                    <input
                      required
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      onBlur={() => {
                        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                        if (formData.name.length > 2 && emailRegex.test(formData.email)) {
                          setStep(3);
                        }
                      }}
                      style={{ 
                        padding: '1.125rem', 
                        background: 'rgba(255,255,255,0.03)', 
                        border: '1px solid rgba(255,255,255,0.1)', 
                        borderRadius: '4px', 
                        outline: 'none',
                        color: 'white',
                        fontSize: '1rem'
                      }}
                      placeholder="john@example.com"
                    />
                  </div>
                  
                  <div style={{ fontSize: '0.625rem', color: 'var(--muted-foreground)', fontStyle: 'italic', lineHeight: '1.5' }}>
                    * Funnel will auto-proceed once contact details are verified.
                  </div>
                </form>
              </BookingStep>
            </div>

            {/* Step 3: Payment */}
            <div ref={step3Ref}>
              <BookingStep
                number="03"
                title="Secure Placement"
                subtitle="Complete your transaction via Payoneer to finalize the booking."
                isActive={step === 3}
                isCompleted={false}
                isLast
              >
                <PaymentStep 
                  onComplete={handlePaymentComplete} 
                  total={currentTier?.price || '$1,500.00'} 
                  isProcessing={isProcessing}
                />
              </BookingStep>
            </div>
          </div>
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
