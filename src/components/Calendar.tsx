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
    <div style={{ background: 'white', padding: '3rem', border: '1px solid var(--border)' }}>
      <h3 style={{ fontSize: '1.5rem', marginBottom: '2rem' }}>Select a Date</h3>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(100px, 1fr))', gap: '1rem', marginBottom: '3rem' }}>
        {dates.map((date) => (
          <button
            key={date}
            onClick={() => setSelectedDate(date)}
            style={{
              padding: '1rem 0.5rem',
              border: selectedDate === date ? '1.5px solid var(--accent)' : '1px solid var(--border)',
              background: 'transparent',
              cursor: 'pointer',
              fontSize: '0.75rem',
              textAlign: 'center',
              transition: 'all 0.2s ease',
              color: selectedDate === date ? 'var(--accent)' : 'var(--foreground)'
            }}
          >
            {date}
          </button>
        ))}
      </div>

      <h3 style={{ fontSize: '1.5rem', marginBottom: '2rem' }}>Available Time Slots</h3>
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
              padding: '1rem',
              border: selectedTime === time ? '1.5px solid var(--accent)' : '1px solid var(--border)',
              background: 'transparent',
              cursor: selectedDate ? 'pointer' : 'not-allowed',
              opacity: selectedDate ? 1 : 0.4,
              fontSize: '0.875rem',
              transition: 'all 0.2s ease',
              color: selectedTime === time ? 'var(--accent)' : 'var(--foreground)'
            }}
          >
            {time}
          </button>
        ))}
      </div>
    </div>
  );
}
