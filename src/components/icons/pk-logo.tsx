import { cn } from "@/lib/utils";

export function PKLogo({ className, ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 48 48"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("h-8 w-8", className)}
      {...props}
    >
      <defs>
        <linearGradient id="logoGradient" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#a855f7" />
          <stop offset="100%" stopColor="#6d28d9" />
        </linearGradient>
      </defs>
      <rect width="48" height="48" rx="8" fill="url(#logoGradient)" />
      <text
        x="50%"
        y="52%"
        dominantBaseline="middle"
        textAnchor="middle"
        fontSize="24"
        fontWeight="bold"
        fill="white"
        fontFamily="sans-serif"
      >
        PK
      </text>
    </svg>
  );
}
