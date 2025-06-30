import React from 'react';

export function ContactIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      {/* Desk */}
      <path d="M2.5 18c3-1.5 15-1.5 18 0" />

      {/* Laptop */}
      <path d="M3.5 18V9.5C3.5 8.67 4.17 8 5 8h7c.83 0 1.5.67 1.5 1.5V18" />
      <circle cx="8.5" cy="11" r=".5" fill="currentColor" strokeWidth="0" />

      {/* Person and headset */}
      <path d="M15 18v-4.5a2.5 2.5 0 0 1 2.5-2.5h1" />
      <path d="M17.5 11a4 4 0 0 1 4-4h0a3 3 0 0 1 3 3v2.5" />
      <path d="M17.5 14.5a1 1 0 0 1-1-1v-2" />
    </svg>
  );
}
