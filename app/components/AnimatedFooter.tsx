'use client';

import { Mail, Phone } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';

export default function AnimatedFooter() {
  const [footerScale, setFooterScale] = useState(0.6);
  const [footerBorderRadius, setFooterBorderRadius] = useState(4);
  const footerRef = useRef<HTMLElement>(null);

  const customColors = {
    accent: '#ff6b2c',
    accentHover: '#e55a1f',
  };

  // Scroll effect - scale up footer based on testimonial section position (original landing page logic)
  useEffect(() => {
    let rafId: number | null = null;

    const handleScroll = () => {
      if (rafId) {
        cancelAnimationFrame(rafId);
      }

      rafId = requestAnimationFrame(() => {
        // Try to find trigger sections in order of priority:
        // 1. Thanks for reading section (case study pages) - uses .thanks-section class
        // 2. Elements explicitly marked with data-footer-trigger
        // 3. Legacy Let's work together section (about page) - uses #lets-work-together ID
        // 4. Testimonial section (landing page) - uses #testimonial-section ID
        const thanksSection = document.querySelector('.thanks-section');
        const dataTriggerSection = document.querySelector('[data-footer-trigger]');
        const letsWorkSection = document.getElementById('lets-work-together');
        const testimonialElement = document.getElementById('testimonial-section');

        // Use the first available trigger section
        const triggerElement = thanksSection || dataTriggerSection || letsWorkSection || testimonialElement;

        if (triggerElement && footerRef.current) {
          const triggerRect = triggerElement.getBoundingClientRect();
          const windowHeight = window.innerHeight;
          const footerHeight = footerRef.current.offsetHeight || 600;

          // Calculate when trigger section enters viewport (original logic from landing-test)
          const triggerTop = triggerRect.top;
          const revealStart = windowHeight * 1.0; // Start revealing when trigger enters viewport

          let scale = 0.6;
          let borderRadius = 4;

          if (triggerTop >= revealStart) {
            // Trigger is above reveal point - footer stays small
            scale = 0.6;
            borderRadius = 4;
          } else if (triggerTop < revealStart && triggerTop > -footerHeight) {
            // Footer is being revealed - scale up only
            const progress = (revealStart - triggerTop) / (revealStart + footerHeight);
            const clampedProgress = Math.max(0, Math.min(1, progress));
            // Smoother easing
            const easedProgress = 1 - Math.pow(1 - clampedProgress, 2);

            // Scale up - more dramatic (from 60% to 100% = 40% increase)
            scale = 0.6 + easedProgress * 0.4; // From 0.6 to 1.0
            // Increase border radius as it scales up (from 4px to 24px)
            borderRadius = 4 + easedProgress * 20; // From 4px to 24px
          } else if (triggerTop <= -footerHeight) {
            // Footer is fully visible
            scale = 1.0;
            borderRadius = 24;
          }

          setFooterScale(scale);
          setFooterBorderRadius(borderRadius);
        } else if (footerRef.current) {
          // Fallback: if no trigger section, use footer's own position
          const footerRect = footerRef.current.getBoundingClientRect();
          const windowHeight = window.innerHeight;
          const footerHeight = footerRect.height || 600;
          const footerTop = footerRect.top;
          const revealStart = windowHeight * 0.8;

          let scale = 0.6;
          let borderRadius = 4;

          if (footerTop >= revealStart) {
            scale = 0.6;
            borderRadius = 4;
          } else if (footerTop < revealStart && footerTop > -footerHeight) {
            const progress = (revealStart - footerTop) / (revealStart + footerHeight);
            const clampedProgress = Math.max(0, Math.min(1, progress));
            const easedProgress = 1 - Math.pow(1 - clampedProgress, 2);
            scale = 0.6 + easedProgress * 0.4;
            borderRadius = 4 + easedProgress * 20; // From 4px to 24px
          } else if (footerTop <= -footerHeight) {
            scale = 1.0;
            borderRadius = 24;
          }

          setFooterScale(scale);
          setFooterBorderRadius(borderRadius);
        }
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial calculation
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (rafId) {
        cancelAnimationFrame(rafId);
      }
    };
  }, []);

  return (
    <>
      {/* Footer wrapper to ensure consistent background */}
      <div
        style={{
          position: 'relative',
          width: '100%',
          backgroundColor: '#FAFAFA',
          marginTop: '0',
          paddingTop: '0.5rem',
          paddingBottom: '0.5rem',
          paddingLeft: '0.5rem',
          paddingRight: '0.5rem',
          zIndex: 0,
          overflow: 'visible',
        }}
      >
        {/* Footer Section - matches landing-test footer exactly */}
        <section
          ref={footerRef}
          id="footer-new"
          className="pt-24 pb-20 relative overflow-hidden"
          style={{
            background: 'linear-gradient(to top, #58685B 0%, #627366 100%)',
            color: '#F3F8F4',
            transform: `scale(${footerScale})`,
            borderRadius: `${footerBorderRadius}px`,
            transformOrigin: 'center center',
            zIndex: 10,
            willChange: 'transform',
            width: '100%',
            marginLeft: 0,
            marginRight: 0,
            position: 'relative',
          }}
        >
          <div className="max-w-6xl mx-auto px-6 w-full">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-16">
              {/* Left Column - Bold CTA */}
              <div className="space-y-6">
                <h2 className="font-grotesk font-bold text-4xl sm:text-5xl lg:text-6xl leading-tight" style={{ color: '#FFFFFF' }}>
                  Looking for a UX/UI Designer?
                </h2>
                <p className="text-xl leading-relaxed" style={{ color: '#D8E0DA' }}>
                  I'm available for new projects, remote or on-site. Let's connect!
                </p>
                <div className="pt-4">
                  <a
                    href="mailto:joakimstrandlund@gmail.com"
                    className="text-base px-10 py-4 font-bold transition-all duration-300 hover:scale-105 relative overflow-hidden group"
                    style={{
                      background: `linear-gradient(180deg, ${customColors.accent} 0%, ${customColors.accentHover} 100%)`,
                      color: '#000000',
                      borderRadius: '1.5rem',
                      boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
                      border: 'none',
                      display: 'inline-flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      textDecoration: 'none',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = `linear-gradient(180deg, ${customColors.accentHover} 0%, #c84f1a 100%)`;
                      e.currentTarget.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.2)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = `linear-gradient(180deg, ${customColors.accent} 0%, ${customColors.accentHover} 100%)`;
                      e.currentTarget.style.boxShadow = '0 2px 8px rgba(0, 0, 0, 0.1)';
                    }}
                  >
                    <span className="relative z-10">Get in touch</span>
                  </a>
                </div>
              </div>

              {/* Right Column - Contact Info */}
              <div className="space-y-8">
                <div>
                  <div className="text-xs uppercase tracking-wide mb-4 font-semibold" style={{ color: '#D8E0DA' }}>
                    Contact
                  </div>
                  <div className="space-y-2">
                    <a
                      href="mailto:joakimstrandlund@gmail.com"
                      className="text-lg hover:text-accent transition-colors inline-flex items-center gap-3"
                      style={{ color: '#FFFFFF' }}
                    >
                      <Mail className="h-5 w-5" style={{ color: '#FFFFFF' }} />
                      joakimstrandlund@gmail.com
                    </a>
                    <div>
                      <a
                        href="tel:+46739788009"
                        className="text-lg hover:text-accent transition-colors inline-flex items-center gap-3"
                        style={{ color: '#FFFFFF' }}
                      >
                        <Phone className="h-5 w-5" style={{ color: '#FFFFFF' }} />
                        +46 73 97 88 009
                      </a>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="text-xs uppercase tracking-wide mb-4 font-semibold" style={{ color: '#D8E0DA' }}>
                    Connect
                  </div>
                  <div className="flex gap-6">
                    <a
                      href="https://www.linkedin.com/in/joakim-strandlund-14717817a/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-lg hover:text-accent transition-colors font-medium"
                      style={{ color: '#FFFFFF' }}
                    >
                      LinkedIn
                    </a>
                  </div>
                </div>
                <div>
                  <div className="text-xs uppercase tracking-wide mb-4 font-semibold" style={{ color: '#D8E0DA' }}>
                    Location
                  </div>
                  <div className="text-lg" style={{ color: '#FFFFFF' }}>
                    Stockholm, Sweden
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Bar */}
            <div className="pt-12 border-t flex flex-col sm:flex-row justify-between items-center gap-4" style={{ borderColor: 'rgba(243, 248, 244, 0.3)' }}>
              <div className="text-sm" style={{ color: '#D8E0DA' }}>
                © {new Date().getFullYear()} Joakim Strandlund
              </div>
              <div className="text-sm" style={{ color: '#D8E0DA' }}>
                Open to Remote Collaborations
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
