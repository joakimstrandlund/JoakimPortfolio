'use client';

import { useEffect, useRef, useState } from 'react';

export default function TestimonialCard() {
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // Only animate once
        }
      },
      {
        threshold: 0.2,
        rootMargin: '0px 0px -50px 0px',
      }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={cardRef} className="relative" style={{ overflow: 'visible' }}>
      {/* Quote block with centered text and subtle quotation mark */}
      <div className="relative" style={{ overflow: 'visible' }}>
        {/* Quote text - centered, refined typography */}
        <blockquote
          className={`relative z-10 font-grotesk font-medium text-heading text-center transition-all duration-700 ease-out ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
          style={{
            fontSize: '1.75rem', // Increased to 28px for better visibility
            lineHeight: '1.45',
            maxWidth: '760px', // Increased from 680px
            margin: '0 auto',
            transitionDelay: isVisible ? '200ms' : '0ms',
          }}
        >
          &ldquo;It&apos;s been a real pleasure working with Joakim. He&apos;s fast, pragmatic, and has a great instinct for delivering MVPs and PoCs that move things
          forward. At the same time, he builds on <span style={{ color: '#ff6b2c' }}>solid design principles</span> and creates solutions that are easy to grow
          and iterate on. A dependable team player with a <span style={{ color: '#ff6b2c' }}>strong foundation</span>—highly recommended.&rdquo;
        </blockquote>
      </div>

      {/* Author info - centered, clean typography */}
      <div
        className={`text-center transition-all duration-700 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        style={{
          marginTop: '2.5rem',
          transitionDelay: isVisible ? '400ms' : '0ms',
        }}
      >
        <div className="font-grotesk font-bold text-base mb-1" style={{ color: '#000000' }}>
          Mattin Lotfi
        </div>
        <div className="text-sm font-medium" style={{ color: '#6b6b6b' }}>
          CTO at <span style={{ color: '#C84F1A' }}>Treebula</span>
        </div>
      </div>
    </div>
  );
}
