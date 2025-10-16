'use client';

interface PersonalSymbolProps {
  type: 'flower' | 'smiley' | 'star' | 'heart' | 'dots';
  size?: number;
  className?: string;
}

export default function PersonalSymbol({ type, size = 24, className = '' }: PersonalSymbolProps) {
  const symbols = {
    flower: (
      <g>
        <circle cx="200" cy="200" r="8" fill="#ff6b2c" />
        <circle cx="200" cy="180" r="6" fill="#ff6b2c" opacity="0.8" />
        <circle cx="220" cy="200" r="6" fill="#ff6b2c" opacity="0.8" />
        <circle cx="200" cy="220" r="6" fill="#ff6b2c" opacity="0.8" />
        <circle cx="180" cy="200" r="6" fill="#ff6b2c" opacity="0.8" />
        <circle cx="190" cy="185" r="5" fill="#ff6b2c" opacity="0.6" />
        <circle cx="210" cy="185" r="5" fill="#ff6b2c" opacity="0.6" />
        <circle cx="190" cy="215" r="5" fill="#ff6b2c" opacity="0.6" />
        <circle cx="210" cy="215" r="5" fill="#ff6b2c" opacity="0.6" />
      </g>
    ),
    smiley: (
      <g>
        <circle cx="200" cy="200" r="40" fill="#ff6b2c" />
        <circle cx="185" cy="185" r="4" fill="#121212" />
        <circle cx="215" cy="185" r="4" fill="#121212" />
        <path d="M 175 210 Q 200 230 225 210" stroke="#121212" strokeWidth="3" fill="none" strokeLinecap="round" />
      </g>
    ),
    star: (
      <g>
        <path d="M 200 160 L 210 200 L 250 200 L 220 225 L 230 265 L 200 240 L 170 265 L 180 225 L 150 200 L 190 200 Z" fill="#ff6b2c" />
      </g>
    ),
    heart: (
      <g>
        <path d="M 200 220 C 200 200, 180 180, 160 200 C 160 180, 180 160, 200 180 C 220 160, 240 180, 240 200 C 220 180, 200 200, 200 220 Z" fill="#ff6b2c" />
      </g>
    ),
    dots: (
      <g>
        <circle cx="200" cy="200" r="6" fill="#ff6b2c" />
        <circle cx="180" cy="180" r="4" fill="#ff6b2c" opacity="0.7" />
        <circle cx="220" cy="180" r="4" fill="#ff6b2c" opacity="0.7" />
        <circle cx="180" cy="220" r="4" fill="#ff6b2c" opacity="0.7" />
        <circle cx="220" cy="220" r="4" fill="#ff6b2c" opacity="0.7" />
      </g>
    ),
  };

  return (
    <svg width={size} height={size} viewBox="0 0 400 400" className={className}>
      {symbols[type]}
    </svg>
  );
}
