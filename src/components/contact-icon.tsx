import React from 'react';

export function ContactIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
    >
      <path d="M21.92,2.65,3.44,19.92,9.85,13l3.54,3.54Z" />
      <g opacity="0.7">
        <path d="M9.85,13,3.44,19.92l-.94,2.5,2.5-.94,5.43-5.43Z" />
        <path d="M5.41,20.36a1.47,1.47,0,1,0,2.08,0,1.47,1.47,0,0,0-2.08,0Z" />
        <path d="M2.46,23.33a1,1,0,1,0,1.41,0,1,1,0,0,0-1.41,0Z" />
      </g>
    </svg>
  );
}
