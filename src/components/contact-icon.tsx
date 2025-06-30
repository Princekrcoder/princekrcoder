import React from 'react';

export function ContactIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="url(#contact-icon-gradient)"
      className={className}
    >
      <defs>
        <linearGradient id="contact-icon-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#25A3DC" />
          <stop offset="100%" stopColor="#52C7F4" />
        </linearGradient>
      </defs>
      <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
    </svg>
  );
}
