import React from 'react';

export function DeveloperAnimation() {
  return (
    <div className="w-32 h-32 md:w-40 md:h-40">
      <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        <style>
          {`
            .code-line {
              opacity: 0;
              animation: fadeInOut 6s infinite;
            }
            .code-line-1 { animation-delay: 0s; }
            .code-line-2 { animation-delay: 1.5s; }
            .code-line-3 { animation-delay: 3s; }
            .code-line-4 { animation-delay: 4.5s; }
            
            @keyframes fadeInOut {
              0%, 100% { opacity: 0; transform: translateY(5px); }
              25%, 75% { opacity: 1; transform: translateY(0); }
            }

            .head-bob {
              animation: head-bob 4s ease-in-out infinite;
            }
            @keyframes head-bob {
              0%, 100% { transform: translateY(0); }
              50% { transform: translateY(-3px); }
            }
            
            .typing-hand-left {
                transform-origin: 75px 125px;
                animation: typing-left 1.2s ease-in-out infinite alternate;
            }
            @keyframes typing-left {
                from { transform: translateY(2px) rotate(-5deg); }
                to { transform: translateY(-2px) rotate(5deg); }
            }

            .typing-hand-right {
                transform-origin: 125px 125px;
                animation: typing-right 1.2s ease-in-out infinite alternate;
                animation-delay: 0.3s;
            }
            @keyframes typing-right {
                from { transform: translateY(2px) rotate(5deg); }
                to { transform: translateY(-2px) rotate(-5deg); }
            }
          `}
        </style>

        {/* Laptop base */}
        <path d="M40 150 l-5 15 h130 l-5 -15 Z" fill="hsl(var(--secondary))" />
        
        {/* Laptop screen */}
        <rect x="50" y="80" width="100" height="70" rx="5" fill="hsl(var(--card-foreground))" stroke="hsl(var(--border))" strokeWidth="2" />
        <rect x="55" y="85" width="90" height="60" fill="hsl(var(--background))" />
        
        {/* Code on screen */}
        <g fontSize="8" fontFamily="monospace" fill="hsl(var(--primary))">
          <text x="60" y="100" className="code-line code-line-1">&lt;div&gt;Hello&lt;/div&gt;</text>
          <text x="60" y="115" className="code-line code-line-2">const x = 10;</text>
          <text x="60" y="130" className="code-line code-line-3">console.log(x);</text>
          <text x="60" y="145" className="code-line code-line-4">... &lt;code /&gt;</text>
        </g>

        {/* Chair */}
        <path d="M 80 180 q 20 -10 40 0 v -30 q -20 10 -40 0 Z" fill="hsl(var(--muted))" />
        <rect x="98" y="180" width="4" height="15" fill="hsl(var(--muted))" />


        {/* Character */}
        <g transform="translate(0, 5)">
          {/* Body */}
          <path d="M85,150 C80,120 120,120 115,150 Z" fill="hsl(var(--primary))" />
          
          {/* Head */}
          <g className="head-bob">
            <circle cx="100" cy="95" r="20" fill="hsl(var(--muted-foreground))" />
            {/* Hair */}
            <path d="M85 90 q 15 -25 30 0" fill="hsl(var(--card-foreground))" />
            {/* Headphones */}
            <path d="M82 90 a 18 18 0 1 1 36 0" stroke="hsl(var(--accent))" strokeWidth="4" fill="none" />
            <rect x="79" y="90" width="6" height="10" rx="2" fill="hsl(var(--accent))"/>
            <rect x="115" y="90" width="6" height="10" rx="2" fill="hsl(var(--accent))"/>
          </g>
          
          {/* Arms & Hands */}
          <g className="typing-hand-left">
            <path d="M90 125 C 80 125, 75 120, 75 115" stroke="hsl(var(--muted-foreground))" strokeWidth="8" fill="none" strokeLinecap="round" />
          </g>
          <g className="typing-hand-right">
            <path d="M110 125 C 120 125, 125 120, 125 115" stroke="hsl(var(--muted-foreground))" strokeWidth="8" fill="none" strokeLinecap="round" />
          </g>
        </g>
      </svg>
    </div>
  );
}
