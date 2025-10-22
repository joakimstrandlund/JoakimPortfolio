import type { Metadata } from 'next';
import '@fontsource-variable/inter';
import '@fontsource-variable/familjen-grotesk';
import './globals.css';
import Link from 'next/link';
import { Github, Linkedin, Mail } from 'lucide-react';
import Navbar from './components/Navbar';

// Fonts are wired via CSS variables set in :root in globals.css

export const metadata: Metadata = {
  title: 'Joakim Strandlund | UX/UI Designer | Portfolio',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Rajdhani:wght@400;500;600;700&family=Space+Mono:wght@400;700&display=swap" rel="stylesheet" />
      </head>
      <body className="font-sans antialiased">
        <Navbar />

        {children}

        <footer id="contact" className="bg-secondary-bg mt-16">
          <div className="max-w-6xl mx-auto px-6 py-12">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Brand / Blurb */}
              <div className="space-y-2">
                <div className="font-display text-heading text-lg">Joakim Strandlund</div>
                <p className="text-sm text-body">UX/UI Designer</p>
                <p className="text-sm text-muted">Based in Stockholm, Sweden</p>
              </div>

              {/* Contact Information */}
              <nav className="space-y-3">
                <div className="text-xs uppercase tracking-wide text-accent">Contact Information</div>
                <ul className="space-y-2 text-sm">
                  <li>
                    <a href="mailto:joakimstrandlund@gmail.com" className="text-body hover:text-heading transition-colors inline-flex items-center gap-2">
                      <Mail className="h-4 w-4" /> joakimstrandlund@gmail.com
                    </a>
                  </li>
                  <li>
                    <a href="tel:+46739788009" className="text-body hover:text-heading transition-colors">
                      +46 73 97 88 009
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.linkedin.com/in/joakim-strandlund-14717817a/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-body hover:text-heading transition-colors"
                    >
                      LinkedIn
                    </a>
                  </li>
                </ul>
              </nav>

              {/* CTA */}
              <div className="space-y-3">
                <div className="text-xs uppercase tracking-wide text-accent">Work together</div>
                <p className="text-sm text-body">Have a product idea or MVP to shape? I can help bring it to life.</p>
                <div className="flex gap-3">
                  <a href="mailto:joakimstrandlund@gmail.com" className="btn btn-primary">
                    Email me
                  </a>
                  <a href="tel:+46739788009" className="btn">
                    Call
                  </a>
                </div>
              </div>
            </div>

            <div className="mt-10 border-t border-border pt-6 text-xs text-body flex flex-col sm:flex-row gap-3 sm:items-center sm:justify-between">
              <div>© {new Date().getFullYear()} Joakim Strandlund. All rights reserved.</div>
              <div className="text-body">Available for remote work</div>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
