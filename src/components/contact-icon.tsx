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
      <path d="M3 14V5a2 2 0 0 1 2-2h11a2 2 0 0 1 2 2v9" />
      <path d="M2 18h18" />
      <circle cx="9" cy="9" r="2" />
      <path d="M6 14a3 3 0 0 1 6 0" />
      <path d="M16 4h4a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2h-2l-2 2V11h-2a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2z" />
    </svg>
  );
}
