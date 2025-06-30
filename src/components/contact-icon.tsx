import React from 'react';

export function ContactIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M2.5 18.5 C 5 17, 19 17, 21.5 18.5" />
      <path d="M4 18.5 L 4 10 C 4 9, 5 8, 6 8 L 13 8 C 14 8, 15 9, 15 10 L 15 18.5" />
      <path d="M3 18.5 L 16 18.5" />
      <circle cx="9.5" cy="10.5" r="0.5" fill="currentColor" strokeWidth="0" />
      <path d="M18 18.5 L 18 14" />
      <circle cx="18" cy="8.5" r="3" />
      <path d="M15.5 8.5 A 3 3 0 0 1 20.5 8.5" />
      <path d="M15.5 8.5 L 15.5 10.5" />
      <path d="M15.5 11.5 A 1 1 0 0 1 14 10" />
    </svg>
  );
}
