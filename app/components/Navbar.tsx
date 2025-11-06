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
      {/* Minimal Transparent Navbar */}
      <nav className="sticky top-0 z-50 border-b backdrop-blur-md" style={{ background: '#FAFAFA', borderColor: 'rgba(0, 0, 0, 0.1)' }}>
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

      {/* Mobile full-screen overlay */}
      {open && (
        <aside
          className="fixed inset-0 z-50 sm:hidden"
          style={{ backgroundColor: 'rgba(255, 255, 255, 0.98)', backdropFilter: 'blur(10px)' }}
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
          <div
            className="absolute top-0 left-0 right-0 h-16 flex items-center justify-between px-6 z-20 border-b"
            style={{ borderColor: 'rgba(0, 0, 0, 0.1)' }}
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
              <li>
                <Link
                  onClick={() => setOpen(false)}
                  href="/#projects"
                  className="font-grotesk font-semibold text-2xl transition-colors"
                  style={{ color: '#000000' }}
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link
                  onClick={() => setOpen(false)}
                  href="/about"
                  className="font-grotesk font-semibold text-2xl transition-colors"
                  style={{ color: '#000000' }}
                >
                  About me
                </Link>
              </li>
              <li>
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
      )}
    </>
  );
}
