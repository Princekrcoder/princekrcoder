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
            
            .typing-hand {
                transform-origin: 80% 80%;
                animation: typing 0.8s ease-in-out infinite alternate;
            }
            @keyframes typing {
                from { transform: rotate(-5deg); }
                to { transform: rotate(5deg); }
            }

          `}
        </style>

        {/* Laptop */}
        <path d="M40 150 l-5 15 h130 l-5 -15 Z" fill="hsl(var(--secondary))" />
        <rect x="50" y="80" width="100" height="70" rx="5" fill="hsl(var(--card-foreground))" stroke="hsl(var(--border))" strokeWidth="2" />
        <rect x="55" y="85" width="90" height="60" fill="hsl(var(--background))" />
        
        {/* Code on screen */}
        <g fontSize="8" fontFamily="monospace" fill="hsl(var(--primary))">
          <text x="60" y="100" className="code-line code-line-1">&lt;div&gt;Hello&lt;/div&gt;</text>
          <text x="60" y="115" className="code-line code-line-2">const x = 10;</text>
          <text x="60" y="130" className="code-line code-line-3">console.log(x);</text>
          <text x="60" y="145" className="code-line code-line-4">... &lt;code /&gt;</text>
        </g>
        
        {/* Person */}
        <g transform="translate(0, 10)">
            {/* Body */}
            <circle cx="100" cy="140" r="30" fill="hsl(var(--primary))" />
            
            {/* Head */}
            <g className="head-bob">
                <circle cx="100" cy="80" r="22" fill="hsl(var(--muted-foreground))" />
            </g>
            
            {/* Hand */}
            <circle className="typing-hand" cx="130" cy="130" r="8" fill="hsl(var(--muted-foreground))" />
        </g>

      </svg>
    </div>
  );
}
