'use client';
import { motion, AnimatePresence } from 'framer-motion';
import { ReactNode } from 'react';

interface BookingStepProps {
  number: string;
  title: string;
  subtitle?: string;
  isActive: boolean;
  isCompleted: boolean;
  isLast?: boolean;
  children: ReactNode;
  summary?: ReactNode;
  onEdit?: () => void;
}

export default function BookingStep({
  number,
  title,
  subtitle,
  isActive,
  isCompleted,
  isLast,
  children,
  summary,
  onEdit
}: BookingStepProps) {
  return (
    <div style={{ position: 'relative', paddingBottom: isLast ? 0 : '4rem' }}>
      {/* Progress Line */}
      {!isLast && (
        <div 
          style={{ 
            position: 'absolute', 
            left: '1.25rem', 
            top: '2.5rem', 
            bottom: '1rem', 
            width: '1px', 
            background: isCompleted ? 'var(--accent)' : 'var(--border)',
            opacity: isActive || isCompleted ? 1 : 0.3,
            transition: 'all 0.6s ease'
          }} 
        />
      )}

      <div style={{ display: 'flex', gap: '2.5rem' }}>
        {/* Step Indicator */}
        <div style={{ position: 'relative', zIndex: 10 }}>
          <motion.div
            animate={{
              background: isCompleted ? 'var(--accent)' : (isActive ? 'var(--foreground)' : 'transparent'),
              borderColor: (isActive || isCompleted) ? (isCompleted ? 'var(--accent)' : 'var(--foreground)') : 'var(--border)',
              color: (isActive || isCompleted) ? 'var(--background)' : 'var(--muted-foreground)'
            }}
            style={{
              width: '2.5rem',
              height: '2.5rem',
              borderRadius: '50%',
              border: '1px solid',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '0.75rem',
              fontWeight: '600',
              transition: 'all 0.4s ease'
            }}
          >
            {isCompleted ? '✓' : number}
          </motion.div>
        </div>

        {/* Content Area */}
        <div style={{ flex: 1, opacity: isActive || isCompleted ? 1 : 0.3, transition: 'opacity 0.4s ease' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1.5rem' }}>
            <div>
              <h3 style={{ fontSize: '1.5rem', color: 'var(--foreground)', marginBottom: '0.25rem' }}>{title}</h3>
              {subtitle && <p style={{ fontSize: '0.875rem', color: 'var(--muted-foreground)' }}>{subtitle}</p>}
            </div>
            {isCompleted && onEdit && (
              <button 
                onClick={onEdit}
                style={{ 
                  background: 'none', 
                  border: 'none', 
                  color: 'var(--accent)', 
                  fontSize: '0.75rem', 
                  textTransform: 'uppercase', 
                  letterSpacing: '0.1em', 
                  cursor: 'pointer',
                  fontWeight: '600'
                }}
              >
                Edit
              </button>
            )}
          </div>

          <AnimatePresence mode="wait">
            {isActive ? (
              <motion.div
                key="active"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                style={{ overflow: 'hidden' }}
              >
                <div style={{ paddingTop: '1rem' }}>
                  {children}
                </div>
              </motion.div>
            ) : isCompleted ? (
              <motion.div
                key="summary"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                style={{ background: 'var(--muted)', padding: '1.5rem', borderRadius: '4px', borderLeft: '2px solid var(--accent)' }}
              >
                {summary}
              </motion.div>
            ) : null}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
