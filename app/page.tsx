'use client';

import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { useState, useEffect, useRef } from 'react';
import PersonalSymbol from './components/PersonalSymbol';
import Magnetic from './components/Magnetic';
import Reveal from './components/Reveal';
import CardParallax from './components/CardParallax';
import TestimonialCard from './components/TestimonialCard';

export default function Home() {
  const [displayedText, setDisplayedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const heroRef = useRef<HTMLElement>(null);
  const testimonialRef = useRef<HTMLElement>(null);

  const texts = ['I design digital experiences', 'I thrive on challenges', "I'm driven by curiosity", 'I never stop experimenting'];

  // Scroll effect - scale down hero on scroll, scale up footer as you scroll to it
  useEffect(() => {
    let rafId: number | null = null;

    const handleScroll = () => {
      // Use requestAnimationFrame for smoother updates
      if (rafId) {
        cancelAnimationFrame(rafId);
      }

      rafId = requestAnimationFrame(() => {
        setScrollY(window.scrollY);
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

  useEffect(() => {
    const currentText = texts[currentIndex];

    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          if (displayedText.length < currentText.length) {
            setDisplayedText(currentText.slice(0, displayedText.length + 1));
          } else {
            setTimeout(() => setIsDeleting(true), 2000); // Pause before deleting
          }
        } else {
          if (displayedText.length > 0) {
            setDisplayedText(displayedText.slice(0, -1));
          } else {
            setIsDeleting(false);
            setCurrentIndex((prev) => (prev + 1) % texts.length);
          }
        }
      },
      isDeleting ? 50 : 100
    ); // Faster when deleting

    return () => clearTimeout(timeout);
  }, [displayedText, currentIndex, isDeleting, texts]);

  // ============================================
  // CUSTOM COLORS FOR TEST PAGE
  // Change these values to experiment with different color schemes
  // ============================================
  const customColors = {
    // Background Colors
    secondaryBg: '#F4F4F4',
    whiteBg: '#FAFAFA',

    // Accent Colors
    accent: '#ff6b2c',
    accentHover: '#e55a1f',

    // Text Colors
    heading: '#000000',
    body: '#6b6b6b',
    muted: '#9a9a9f',

    // Border Colors
    border: '#e0e0e0',
    borderHover: '#d0d0d0',
  };

  return (
    <>
      {/* Custom Color Overrides for Test Page */}
      <style jsx global>{`
        .landing-test-override,
        .landing-test-override * {
          /* Background Colors */
          --color-secondary-bg: ${customColors.secondaryBg} !important;

          /* Accent Color */
          --color-accent: ${customColors.accent} !important;
          --color-accent-hover: ${customColors.accentHover} !important;

          /* Text Colors */
          --color-heading: ${customColors.heading} !important;
          --color-body: ${customColors.body} !important;
          --color-muted: ${customColors.muted} !important;

          /* Border Colors */
          --color-border: ${customColors.border} !important;
          --color-border-hover: ${customColors.borderHover} !important;
        }

        .landing-test-override {
          background-color: ${customColors.whiteBg} !important;
          color: ${customColors.body} !important;
        }

        .landing-test-override .bg-secondary-bg {
          background-color: ${customColors.secondaryBg} !important;
        }

        .landing-test-override .text-heading {
          color: ${customColors.heading} !important;
        }

        .landing-test-override .project-card-heading {
          color: #ebebeb !important;
        }

        .landing-test-override .project-card-heading * {
          color: #ebebeb !important;
        }

        .landing-test-override .text-body {
          color: ${customColors.body} !important;
        }

        .landing-test-override .text-muted {
          color: ${customColors.muted} !important;
        }

        .landing-test-override .border-border {
          border-color: ${customColors.border} !important;
        }

        .landing-test-override #testimonial-section .bg-secondary-bg {
          background-color: ${customColors.secondaryBg} !important;
          border-radius: 1.5rem;
          border: 1px solid ${customColors.border} !important;
        }

        /* Set body background to match main background */
        body {
          background-color: ${customColors.whiteBg} !important;
        }

        /* Ensure footer can break out of any container */
        html,
        body {
          width: 100% !important;
          max-width: 100% !important;
          overflow-x: visible !important;
          padding: 0 !important;
          margin: 0 !important;
        }

        footer#footer-new {
          position: relative !important;
          max-width: none !important;
        }
      `}</style>

      <main
        className="text-body landing-test-override"
        style={{
          backgroundColor: customColors.whiteBg,
          overflowX: 'visible',
          marginBottom: '0',
          paddingBottom: '0',
          position: 'relative',
          zIndex: 1,
          minHeight: 'auto',
        }}
      >
        {/* Hero */}
        <section
          ref={heroRef}
          className="relative min-h-screen px-4 lg:px-6 flex items-center overflow-hidden transition-all duration-300 ease-out"
          style={{
            backgroundColor: customColors.secondaryBg,
            transform: `scale(${1 - Math.min(scrollY / 300, 1) * 0.15})`,
            borderRadius: `${Math.min(scrollY / 300, 1) * 24}px`,
            transformOrigin: 'center top',
          }}
        >
          <div className="max-w-4xl mx-auto w-full text-center relative z-10">
            <div className="space-y-6">
              {/* Profile Image with Greeting */}
              <Reveal>
                <div className="flex flex-col items-center mb-4">
                  {/* Container for image */}
                  <div className="relative flex items-center justify-center mb-4 w-32 h-32 sm:w-44 sm:h-44 lg:w-52 lg:h-52">
                    {/* Profile image */}
                    <div className="relative w-24 h-24 sm:w-32 sm:h-32 lg:w-40 lg:h-40 bg-white border border-border rounded-full overflow-hidden z-10">
                      <Image src="/jocke-home.png" alt="Joakim Strandlund" width={160} height={160} className="w-full h-full object-cover" />
                    </div>
                  </div>

                  {/* Greeting */}
                  <div className="bg-white border border-border rounded-2xl px-6 py-3 relative">
                    <p className="text-lg" style={{ color: customColors.body }}>
                      Hello, I'm Joakim 👋
                    </p>
                    {/* Speech bubble tail pointing up */}
                    <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-white border-l border-t border-border rotate-45"></div>
                  </div>
                </div>
              </Reveal>

              {/* Typewriter Text */}
              <Reveal delay={200}>
                <div className="min-h-[100px] flex items-center justify-center">
                  <h1 className="font-grotesk text-4xl sm:text-5xl lg:text-6xl text-heading leading-tight">
                    <span className="text-heading">{displayedText}</span>
                    <motion.span className="text-heading" animate={{ opacity: [1, 0, 1] }} transition={{ duration: 1, repeat: Infinity }}>
                      |
                    </motion.span>
                  </h1>
                </div>
              </Reveal>

              {/* CTA Buttons */}
              <Reveal delay={600}>
                <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                  <Magnetic>
                    <a
                      href="#projects"
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
                      <span className="relative z-10">Explore my work</span>
                    </a>
                  </Magnetic>
                  <Magnetic>
                    <a
                      href="mailto:joakimstrandlund@gmail.com"
                      className="text-base px-10 py-4 font-bold transition-all duration-300 hover:scale-105 relative overflow-hidden group"
                      style={{
                        backgroundColor: 'transparent',
                        color: customColors.heading,
                        borderRadius: '1.5rem',
                        border: `2px solid ${customColors.border || '#E0E0E0'}`,
                        display: 'inline-flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        textDecoration: 'none',
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.backgroundColor = customColors.secondaryBg || '#F4F4F4';
                        e.currentTarget.style.borderColor = customColors.border || '#E0E0E0';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.backgroundColor = 'transparent';
                        e.currentTarget.style.borderColor = customColors.border || '#E0E0E0';
                      }}
                    >
                      <span className="relative z-10">Get in touch</span>
                    </a>
                  </Magnetic>
                </div>
              </Reveal>
            </div>
          </div>
          <div className="hero-fade" />
        </section>

        {/* Case Studies */}
        <section id="projects" className="pt-10 pb-16 -mt-6 relative z-20" style={{ backgroundColor: customColors.whiteBg }}>
          <div className="max-w-6xl mx-auto px-4 lg:px-6">
            <Reveal>
              <div className="mb-8">
                <div className="text-xs uppercase tracking-wide" style={{ color: customColors.body }}>
                  Selected
                </div>
                <h2 className="mt-2 font-grotesk font-semibold text-2xl sm:text-3xl text-heading">Case studies</h2>
              </div>
            </Reveal>

            <div className="grid grid-cols-1 gap-8 sm:gap-10">
              {cards.map((card, index) => (
                <Reveal key={card.href} delay={index * 60}>
                  <Link
                    href={card.href}
                    className="group block h-full relative transform transition-all duration-250 ease-in-out rounded-2xl overflow-hidden"
                    style={{
                      transition: 'all 0.25s ease',
                      borderRadius: '16px',
                      overflow: 'hidden',
                      display: 'block',
                    }}
                  >
                    {/* Card container with premium matte dark style */}
                    <div
                      className="relative transition-all duration-250 ease-in-out min-h-[480px] lg:min-h-[420px]"
                      style={{
                        background: 'linear-gradient(to bottom, rgba(255,255,255,0.04), #0C0D0F)',
                        backgroundColor: '#0C0D0F',
                        borderRadius: '16px',
                        boxShadow: '0 6px 24px rgba(0, 0, 0, 0.1)',
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.backgroundColor = '#131417';
                        e.currentTarget.style.transform = 'translateY(-2px)';
                        e.currentTarget.style.boxShadow = '0 8px 32px rgba(0, 0, 0, 0.15)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.backgroundColor = '#0C0D0F';
                        e.currentTarget.style.transform = 'translateY(0)';
                        e.currentTarget.style.boxShadow = '0 6px 24px rgba(0, 0, 0, 0.1)';
                      }}
                    >
                      {/* Two-column grid layout inside container */}
                      <div
                        className="relative grid grid-cols-1 lg:grid-cols-[3fr_2fr] h-full project-card-grid"
                        style={{
                          gridTemplateAreas: 'var(--mobile-areas, "text" "image")',
                        }}
                      >
                        {/* Text column (left) - clean minimal design */}
                        <div
                          className="relative pt-8 px-8 lg:pt-16 lg:px-16 flex flex-col justify-center transition-all duration-500 project-card-text"
                          style={{ gridArea: 'text' }}
                        >
                          {/* Title - large and prominent, multi-line */}
                          <h3
                            className="font-grotesk font-semibold text-[28px] lg:text-5xl leading-tight mb-2 transform transition-transform duration-300 group-hover:-translate-y-[1px] project-card-heading"
                            style={{ color: '#FFFFFF' }}
                          >
                            {card.title.split(' — ').map((part, index) => (
                              <div key={index} style={{ color: '#FFFFFF' }}>
                                {part}
                              </div>
                            ))}
                          </h3>

                          {/* Description */}
                          <p className="text-body leading-relaxed mb-4 text-base lg:text-lg" style={{ color: 'rgba(255,255,255,0.72)' }}>
                            {card.description}
                          </p>

                          {/* Tags */}
                          <div className="flex flex-wrap items-center gap-2 mb-4">
                            {card.tags.map((tag, index) => (
                              <span
                                key={index}
                                className="text-muted text-sm border px-3 py-1"
                                style={{
                                  color: 'rgba(255,255,255,0.56)',
                                  borderColor: 'rgba(255,255,255,0.12)',
                                }}
                              >
                                {tag}
                              </span>
                            ))}
                          </div>

                          {/* CTA Button - accent button (visual only, card is clickable) */}
                          <div
                            className="opacity-100 lg:opacity-0 lg:group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300 text-base px-10 py-4 font-bold relative overflow-hidden pointer-events-none"
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
                          >
                            <span className="relative z-10 flex items-center gap-2">
                              View project
                              <ArrowRight className="h-5 w-5" />
                            </span>
                          </div>
                        </div>

                        {/* Image column (right) - fills entire right column */}
                        <CardParallax>
                          <div className="relative h-64 sm:h-72 md:h-80 lg:h-full p-4 lg:pt-6 lg:pr-6 lg:pb-6 lg:pl-6" style={{ gridArea: 'image' }}>
                            <div className="relative w-full h-full pt-6 pr-6 pb-6 pl-6 rounded-xl">
                              {card.title.includes('Loggi') ? (
                                <>
                                  {/* Loggi project image */}
                                  <Image
                                    src="/Loggi - new hero section.png"
                                    alt="Loggi wellness app preview"
                                    width={400}
                                    height={300}
                                    className="object-contain object-center w-full h-full scale-125 lg:scale-100"
                                  />
                                  {/* Clean image display */}
                                </>
                              ) : card.title.includes('Restaurang') ? (
                                <>
                                  {/* Restaurang Apotek project image */}
                                  <Image
                                    src="/Restaurang apotek - hero section.png"
                                    alt="Restaurang Apotek website preview"
                                    width={400}
                                    height={300}
                                    className="object-contain object-center w-full h-full scale-125 lg:scale-100"
                                  />
                                  {/* Clean image display */}
                                </>
                              ) : card.title.includes('Treebula') ? (
                                <>
                                  {/* Treebula project image */}
                                  <Image
                                    src="/Treebula - hero section.png"
                                    alt="Treebula forest monitoring app preview"
                                    width={400}
                                    height={300}
                                    className="object-contain object-center w-full h-full scale-125 lg:scale-100"
                                  />
                                  {/* Clean image display */}
                                </>
                              ) : (
                                <>
                                  {/* Placeholder for other projects */}
                                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-300" />
                                </>
                              )}
                            </div>
                          </div>
                        </CardParallax>
                      </div>
                    </div>
                  </Link>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonial */}
        <section
          ref={testimonialRef}
          id="testimonial-section"
          className="relative z-20"
          style={{ paddingTop: '5rem', paddingBottom: '5rem', overflow: 'visible' }}
        >
          <div className="max-w-4xl mx-auto px-4 lg:px-6" style={{ overflow: 'visible' }}>
            <TestimonialCard />
          </div>
        </section>
      </main>
    </>
  );
}

const cards = [
  {
    title: 'Loggi — Wellness App',
    year: '2025',
    tags: ['UI/UX', 'Accessibility', 'Mobile'],
    description: 'Concept app for calm, accessible daily check-ins on mood, sleep and stress. Designed for reflection without pressure.',
    href: '/case-studies/loggi',
  },
  {
    title: 'Treebula — Forest Monitoring',
    year: '2025',
    tags: ['Product', 'Mobile', 'AI/Satellite'],
    description: 'Mobile-first service for forest owners to monitor risk, damage and local conditions using AI & satellite data.',
    href: '/case-studies/treebula',
  },
  {
    title: 'Restaurang Apotek — Website',
    year: '2024',
    tags: ['UI/UX', 'Web', 'Restaurant'],
    description: 'Modern restaurant website design focusing on user experience and visual storytelling.',
    href: '/case-studies/restaurang-apotek',
  },
];
