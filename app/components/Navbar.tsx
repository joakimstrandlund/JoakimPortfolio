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
      const original = document.body.style.overflow;
      const originalPosition = document.body.style.position;
      const originalTop = document.body.style.top;
      const originalWidth = document.body.style.width;

      document.body.style.position = 'fixed';
      document.body.style.top = `-${scrollY}px`;
      document.body.style.width = '100%';
      document.body.style.overflow = 'hidden';

      return () => {
        document.body.style.position = originalPosition;
        document.body.style.top = originalTop;
        document.body.style.width = originalWidth;
        document.body.style.overflow = original;
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
      <header className="sticky top-0 z-40 bg-primary/70 backdrop-blur border-b border-stroke">
        <div className="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between">
          <Link href="/" className="font-display text-headings tracking-wide">
            J.STRANDLUND
          </Link>

          {/* Desktop nav */}
          <nav className="hidden sm:flex items-center gap-6 text-sm">
            <Link href="/#projects" className="link-underline">
              Projects
            </Link>
            <Link href="/about" className="link-underline">
              About me
            </Link>
            <Link href="/#contact" className="link-underline">
              Contact
            </Link>
          </nav>

          {/* Mobile toggle */}
          <button
            className="sm:hidden inline-flex h-10 w-10 items-center justify-center rounded-full border border-stroke bg-tertiary/60 text-headings hover:border-stroke2 transition touch-manipulation"
            aria-label={open ? 'Close menu' : 'Open menu'}
            onClick={() => setOpen(!open)}
            style={{ touchAction: 'manipulation' }}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </header>

      {/* Mobile full-screen overlay */}
      {open && (
        <aside
          className="fixed inset-0 z-50 sm:hidden"
          style={{ backgroundColor: '#121212' }}
          aria-modal="true"
          role="dialog"
          onClick={(e) => {
            // Close menu when clicking on the overlay background
            if (e.target === e.currentTarget) {
              setOpen(false);
            }
          }}
        >
            {/* Header with logo and close button */}
            <div className="absolute top-0 left-0 right-0 h-14 flex items-center justify-between px-6 z-20" style={{ pointerEvents: 'auto' }}>
              {/* Logo - same as desktop */}
              <Link href="/" className="font-display text-headings tracking-wide">
                J.STRANDLUND
              </Link>

              {/* Close button - same styling as hamburger */}
              <button
                onClick={(e) => {
                  console.log('Close button clicked');
                  e.preventDefault();
                  e.stopPropagation();
                  setOpen(false);
                }}
                onTouchEnd={(e) => {
                  console.log('Close button touched');
                  e.preventDefault();
                  e.stopPropagation();
                  setOpen(false);
                }}
                aria-label="Close menu"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-stroke bg-tertiary/60 text-headings hover:border-stroke2 transition touch-manipulation relative z-10"
                style={{ touchAction: 'manipulation', pointerEvents: 'auto' }}
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Navigation links */}
            <nav className="absolute inset-0 flex items-center justify-end pr-6">
              <ul className="text-right flex flex-col items-end gap-8">
                <li>
                  <Link onClick={() => setOpen(false)} href="/#projects" className="font-display text-headings2 text-2xl link-underline">
                    Projects
                  </Link>
                </li>
                <li>
                  <Link onClick={() => setOpen(false)} href="/about" className="font-display text-headings2 text-2xl link-underline">
                    About me
                  </Link>
                </li>
                <li>
                  <Link onClick={() => setOpen(false)} href="/#contact" className="font-display text-headings2 text-2xl link-underline">
                    Contact
                  </Link>
                </li>
              </ul>
            </nav>
        </aside>
      )}
    </>
  );
}
