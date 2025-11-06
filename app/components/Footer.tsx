'use client';

import Link from 'next/link';
import { Mail, Phone } from 'lucide-react';

export default function Footer() {
  const customColors = {
    accent: '#ff6b2c',
    accentHover: '#e55a1f',
  };

  return (
    <footer
      id="contact"
      className="pt-24 pb-20 relative overflow-hidden"
      style={{
        background: 'linear-gradient(to top, #58685B 0%, #627366 100%)',
        color: '#F3F8F4',
      }}
    >
      <div className="max-w-6xl mx-auto px-6 w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-16">
          {/* Left Column - Bold CTA */}
          <div className="space-y-6">
            <h2 className="font-grotesk font-bold text-4xl sm:text-5xl lg:text-6xl leading-tight" style={{ color: '#FFFFFF' }}>
              Let&apos;s work together
            </h2>
            <p className="text-xl leading-relaxed" style={{ color: '#D8E0DA' }}>
              Have a product idea or MVP to shape? I can help bring it to life.
            </p>
            <div className="pt-4">
              <a
                href="mailto:joakimstrandlund@gmail.com"
                className="text-base px-10 py-4 font-bold transition-all duration-300 hover:scale-105 relative overflow-hidden group inline-flex items-center justify-center"
                style={{
                  background: `linear-gradient(180deg, ${customColors.accent} 0%, ${customColors.accentHover} 100%)`,
                  color: '#000000',
                  borderRadius: '1.5rem',
                  boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
                  border: 'none',
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
              <div className="text-xs uppercase tracking-wide mb-4 font-semibold" style={{ color: '#FFFFFF' }}>
                Contact
              </div>
              <div className="space-y-2">
                <a
                  href="mailto:joakimstrandlund@gmail.com"
                  className="text-lg hover:text-accent transition-colors inline-flex items-center gap-3"
                  style={{ color: '#D8E0DA' }}
                >
                  <Mail className="h-5 w-5" style={{ color: '#D8E0DA' }} />
                  joakimstrandlund@gmail.com
                </a>
                <div>
                  <a
                    href="tel:+46739788009"
                    className="text-lg hover:text-accent transition-colors inline-flex items-center gap-3"
                    style={{ color: '#D8E0DA' }}
                  >
                    <Phone className="h-5 w-5" style={{ color: '#D8E0DA' }} />
                    +46 73 97 88 009
                  </a>
                </div>
              </div>
            </div>
            <div>
              <div className="text-xs uppercase tracking-wide mb-4 font-semibold" style={{ color: '#FFFFFF' }}>
                Connect
              </div>
              <div className="flex gap-6">
                <a
                  href="https://www.linkedin.com/in/joakim-strandlund-14717817a/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-lg hover:text-accent transition-colors font-medium"
                  style={{ color: '#D8E0DA' }}
                >
                  LinkedIn
                </a>
              </div>
            </div>
            <div>
              <div className="text-xs uppercase tracking-wide mb-4 font-semibold" style={{ color: '#FFFFFF' }}>
                Location
              </div>
              <div className="text-lg" style={{ color: '#D8E0DA' }}>
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
            Available for remote work
          </div>
        </div>
      </div>
    </footer>
  );
}
