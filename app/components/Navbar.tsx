'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  // Prevent background scroll when menu is open
  useEffect(() => {
    if (open) {
      const scrollY = window.scrollY;
      const originalHtmlOverflow = document.documentElement.style.overflow;
      const originalHtmlPosition = document.documentElement.style.position;
      const originalHtmlTop = document.documentElement.style.top;
      const originalHtmlWidth = document.documentElement.style.width;
      const originalBodyOverflow = document.body.style.overflow;
      const originalBodyPosition = document.body.style.position;
      const originalBodyTop = document.body.style.top;
      const originalBodyWidth = document.body.style.width;
      
      // Lock scroll on both html and body
      document.documentElement.style.overflow = 'hidden';
      document.documentElement.style.position = 'fixed';
      document.documentElement.style.top = `-${scrollY}px`;
      document.documentElement.style.width = '100%';
      document.body.style.overflow = 'hidden';
      document.body.style.position = 'fixed';
      document.body.style.top = `-${scrollY}px`;
      document.body.style.width = '100%';

      return () => {
        document.documentElement.style.overflow = originalHtmlOverflow;
        document.documentElement.style.position = originalHtmlPosition;
        document.documentElement.style.top = originalHtmlTop;
        document.documentElement.style.width = originalHtmlWidth;
        document.body.style.overflow = originalBodyOverflow;
        document.body.style.position = originalBodyPosition;
        document.body.style.top = originalBodyTop;
        document.body.style.width = originalBodyWidth;
        window.scrollTo(0, scrollY);
      };
    }
  }, [open]);

  // Close on Escape
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false);
    };
    if (open) {
      window.addEventListener('keydown', onKey);
      return () => window.removeEventListener('keydown', onKey);
    }
  }, [open]);

  return (
    <>
      {/* Minimal Transparent Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-[60] border-b backdrop-blur-md" style={{ background: '#FAFAFA', borderColor: 'rgba(0, 0, 0, 0.1)' }}>
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link href="/" className="font-grotesk font-semibold text-lg tracking-wide" style={{ color: '#000000' }}>
            J.STRANDLUND
          </Link>
          <div className="hidden sm:flex items-center gap-8 text-sm">
            <Link href="/#projects" className="font-grotesk font-semibold link-underline" style={{ color: '#4a4a4a' }}>
              Projects
            </Link>
            <Link href="/about" className="font-grotesk font-semibold link-underline" style={{ color: '#4a4a4a' }}>
              About me
            </Link>
            <Link href="/#footer-new" className="font-grotesk font-semibold link-underline" style={{ color: '#4a4a4a' }}>
              Contact
            </Link>
          </div>
          <button
            className="sm:hidden inline-flex h-10 w-10 items-center justify-center border rounded-lg transition-colors"
            style={{ borderColor: 'rgba(0, 0, 0, 0.1)', color: '#000000' }}
            aria-label={open ? 'Close menu' : 'Open menu'}
            onClick={() => setOpen(!open)}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile full-screen overlay - slides in from left */}
      <div
        className="fixed inset-0 z-50 sm:hidden pointer-events-none"
        style={{ visibility: open ? 'visible' : 'hidden' }}
      >
        {/* Backdrop overlay */}
        <div
          className="fixed inset-0 bg-black/20 backdrop-blur-sm transition-opacity duration-300"
          style={{
            opacity: open ? 1 : 0,
            pointerEvents: open ? 'auto' : 'none',
          }}
          onClick={() => setOpen(false)}
          aria-hidden="true"
        />
        
        {/* Menu panel - slides in from left to right */}
        <aside
          className="fixed inset-0 transition-transform duration-300 ease-out overflow-hidden"
          style={{
            backgroundColor: 'rgba(255, 255, 255, 0.98)',
            backdropFilter: 'blur(10px)',
            transform: open ? 'translateX(0)' : 'translateX(-100%)',
            pointerEvents: open ? 'auto' : 'none',
            overscrollBehavior: 'none',
          }}
          aria-modal="true"
          role="dialog"
          aria-hidden={!open}
          onTouchMove={(e) => {
            // Only prevent scrolling if touching the overlay itself, not interactive elements
            const target = e.target as HTMLElement;
            if (target.tagName !== 'BUTTON' && target.tagName !== 'A' && !target.closest('button') && !target.closest('a')) {
              e.preventDefault();
            }
          }}
        >
            {/* Header with logo and close button */}
            <div
              className="absolute top-0 left-0 right-0 h-16 flex items-center justify-between px-6 z-20 border-b transition-opacity duration-300 delay-100"
              style={{ 
                borderColor: 'rgba(0, 0, 0, 0.1)',
                opacity: open ? 1 : 0,
              }}
            >
              {/* Logo */}
              <Link href="/" className="font-grotesk font-semibold text-lg tracking-wide" style={{ color: '#000000' }}>
                J.STRANDLUND
              </Link>

              {/* Close button */}
              <button
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  setOpen(false);
                }}
                onTouchEnd={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  setOpen(false);
                }}
                aria-label="Close menu"
                className="inline-flex h-10 w-10 items-center justify-center border rounded-lg transition-colors relative z-10"
                style={{ borderColor: 'rgba(0, 0, 0, 0.1)', color: '#000000', touchAction: 'manipulation', pointerEvents: 'auto' }}
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Navigation links */}
            <nav className="absolute inset-0 flex items-center justify-end pr-6">
              <ul className="text-right flex flex-col items-end gap-8">
                <li
                  style={{
                    transform: open ? 'translateX(0)' : 'translateX(-30px)',
                    opacity: open ? 1 : 0,
                    transition: 'transform 0.4s ease-out, opacity 0.4s ease-out',
                    transitionDelay: open ? '200ms' : '0ms',
                  }}
                >
                  <Link
                    onClick={() => setOpen(false)}
                    href="/#projects"
                    className="font-grotesk font-semibold text-2xl transition-colors"
                    style={{ color: '#000000' }}
                  >
                    Projects
                  </Link>
                </li>
                <li
                  style={{
                    transform: open ? 'translateX(0)' : 'translateX(-30px)',
                    opacity: open ? 1 : 0,
                    transition: 'transform 0.4s ease-out, opacity 0.4s ease-out',
                    transitionDelay: open ? '300ms' : '0ms',
                  }}
                >
                  <Link
                    onClick={() => setOpen(false)}
                    href="/about"
                    className="font-grotesk font-semibold text-2xl transition-colors"
                    style={{ color: '#000000' }}
                  >
                    About me
                  </Link>
                </li>
                <li
                  style={{
                    transform: open ? 'translateX(0)' : 'translateX(-30px)',
                    opacity: open ? 1 : 0,
                    transition: 'transform 0.4s ease-out, opacity 0.4s ease-out',
                    transitionDelay: open ? '400ms' : '0ms',
                  }}
                >
                  <Link
                    onClick={() => setOpen(false)}
                    href="/#footer-new"
                    className="font-grotesk font-semibold text-2xl transition-colors"
                    style={{ color: '#000000' }}
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </nav>
          </aside>
      </div>
    </>
  );
}
