'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';

const DAYS = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'];
const TIMES = ['09:00 AM', '10:30 AM', '01:00 PM', '02:30 PM', '04:00 PM'];

export default function Calendar({ onSelect }: { onSelect: (date: string, time: string) => void }) {
  const [selectedDate, setSelectedDate] = useState<string | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);

  const dates = Array.from({ length: 14 }, (_, i) => {
    const d = new Date();
    d.setDate(d.getDate() + i + 1);
    // Skip weekends
    if (d.getDay() === 0 || d.getDay() === 6) return null;
    return d.toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' });
  }).filter(Boolean) as string[];

  const handleComplete = () => {
    if (selectedDate && selectedTime) {
      onSelect(selectedDate, selectedTime);
    }
  };

  return (
    <div style={{ 
      background: 'rgba(255, 255, 255, 0.02)', 
      padding: '3.5rem', 
      border: '1px solid rgba(255, 255, 255, 0.05)',
      borderRadius: '12px'
    }}>
      <h3 style={{ fontSize: '1.25rem', marginBottom: '2.5rem', color: 'white', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Select a Date</h3>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(100px, 1fr))', gap: '1rem', marginBottom: '4rem' }}>
        {dates.map((date) => (
          <button
            key={date}
            onClick={() => setSelectedDate(date)}
            style={{
              padding: '1.25rem 0.5rem',
              border: selectedDate === date ? '1px solid var(--accent)' : '1px solid rgba(255, 255, 255, 0.1)',
              background: selectedDate === date ? 'rgba(212, 175, 55, 0.1)' : 'rgba(255, 255, 255, 0.03)',
              cursor: 'pointer',
              fontSize: '0.625rem',
              fontWeight: '700',
              textAlign: 'center',
              textTransform: 'uppercase',
              letterSpacing: '0.1em',
              transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
              color: selectedDate === date ? 'var(--accent)' : 'rgba(255, 255, 255, 0.5)'
            }}
          >
            {date}
          </button>
        ))}
      </div>

      <h3 style={{ fontSize: '1.25rem', marginBottom: '2.5rem', color: 'white', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Available Time Slots</h3>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(120px, 1fr))', gap: '1rem' }}>
        {TIMES.map((time) => (
          <button
            key={time}
            onClick={() => {
              setSelectedTime(time);
              if (selectedDate) onSelect(selectedDate, time);
            }}
            disabled={!selectedDate}
            style={{
              padding: '1.25rem',
              border: selectedTime === time ? '1px solid var(--accent)' : '1px solid rgba(255, 255, 255, 0.1)',
              background: selectedTime === time ? 'rgba(212, 175, 55, 0.1)' : (selectedDate ? 'rgba(255, 255, 255, 0.03)' : 'transparent'),
              cursor: selectedDate ? 'pointer' : 'not-allowed',
              opacity: selectedDate ? 1 : 0.2,
              fontSize: '0.75rem',
              fontWeight: '600',
              textTransform: 'uppercase',
              letterSpacing: '0.1em',
              transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
              color: selectedTime === time ? 'var(--accent)' : 'rgba(255, 255, 255, 0.5)'
            }}
          >
            {time}
          </button>
        ))}
      </div>
    </div>
  );
}
