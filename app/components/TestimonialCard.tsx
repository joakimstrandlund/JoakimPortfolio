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
        threshold: 0.2, // Trigger when 20% of the element is visible
        rootMargin: '0px 0px -50px 0px', // Start animation slightly before element enters viewport
      }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={cardRef}
      className={`bg-primary/40 border border-stroke/30 p-8 sm:p-12 transition-all duration-700 ease-out ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
    >
      {/* Quote */}
      <blockquote className="font-grotesk text-headings text-lg sm:text-xl leading-relaxed mb-8 text-center">
        &quot;It&apos;s been a real pleasure working with Joakim. He&apos;s fast, pragmatic, and has a great instinct for delivering MVPs and PoCs that move
        things forward. At the same time, he builds on solid design principles and creates solutions that are easy to grow and iterate on. A dependable team
        player with a strong foundation—highly recommended.&quot;
      </blockquote>

      {/* Attribution */}
      <div className="flex items-center justify-center gap-4 pt-4 border-t border-stroke/30">
        <div className="w-12 h-12 bg-accent/20 border border-accent/30 flex items-center justify-center">
          <span className="text-accent font-grotesk font-semibold text-lg">ML</span>
        </div>
        <div className="text-left">
          <div className="font-grotesk font-semibold text-headings text-lg">Martin Lofti</div>
          <div className="text-body text-sm">
            CTO at <span className="text-accent font-medium">Treebula</span>
          </div>
        </div>
      </div>
    </div>
  );
}

