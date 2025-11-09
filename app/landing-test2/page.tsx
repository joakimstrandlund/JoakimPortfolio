'use client';

import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Mail, Phone } from 'lucide-react';
import { motion } from 'framer-motion';
import { useState, useEffect, useRef } from 'react';
import PersonalSymbol from '../components/PersonalSymbol';
import Magnetic from '../components/Magnetic';
import Reveal from '../components/Reveal';
import CardParallax from '../components/CardParallax';
import TestimonialCard from '../components/TestimonialCard';

export default function LandingTest2() {
  const [displayedText, setDisplayedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [footerTranslateY, setFooterTranslateY] = useState(100);
  const [footerScale, setFooterScale] = useState(0.6);
  const [footerBorderRadius, setFooterBorderRadius] = useState(24);
  const [testimonialTranslateY, setTestimonialTranslateY] = useState(0);
  const heroRef = useRef<HTMLElement>(null);
  const footerRef = useRef<HTMLElement>(null);
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

        // Footer slides up from bottom and pushes testimonial section up
        if (testimonialRef.current && footerRef.current) {
          const testimonialRect = testimonialRef.current.getBoundingClientRect();
          const windowHeight = window.innerHeight;
          const footerHeight = footerRef.current.offsetHeight || 600;

          // Calculate when testimonial enters viewport
          const testimonialTop = testimonialRect.top;
          const revealStart = windowHeight * 1.0; // Start revealing when testimonial enters viewport (higher = earlier)

          let scale = 0.6;
          let borderRadius = 24;

          if (testimonialTop >= revealStart) {
            // Testimonial is above reveal point - footer stays small
            scale = 0.6;
            borderRadius = 24;
          } else if (testimonialTop < revealStart && testimonialTop > -footerHeight) {
            // Footer is being revealed - scale up only
            const progress = (revealStart - testimonialTop) / (revealStart + footerHeight);
            const clampedProgress = Math.max(0, Math.min(1, progress));
            // Smoother easing
            const easedProgress = 1 - Math.pow(1 - clampedProgress, 2);

            // Scale up - more dramatic (from 60% to 100% = 40% increase)
            scale = 0.6 + easedProgress * 0.4; // From 0.6 to 1.0
            // Remove border radius as it scales up
            borderRadius = 24 * (1 - easedProgress); // From 24px to 0
          } else if (testimonialTop <= -footerHeight) {
            // Footer is fully visible
            scale = 1.0;
            borderRadius = 0;
          }

          setFooterTranslateY(0);
          setFooterScale(scale);
          setFooterBorderRadius(borderRadius);
          setTestimonialTranslateY(0);
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
  // CUSTOM COLORS FOR TEST PAGE - DARK MODE
  // ============================================
  const customColors = {
    // Background Colors
    primaryBg: '#0C0D0F',
    secondaryBg: '#141518',

    // Accent Colors
    accent: '#ff6b2c',
    accentHover: '#e55a1f',

    // Text Colors
    heading: '#EBEBEB',
    body: '#A5A5A5',
    muted: '#9a9a9f',

    // Border Colors
    border: '#2a2b2e',
    borderHover: '#3a3b3e',
  };

  return (
    <>
      {/* Custom Color Overrides for Test Page */}
      <style jsx global>{`
        html,
        body {
          background-color: ${customColors.primaryBg} !important;
          color: ${customColors.body} !important;
          margin: 0 !important;
          padding: 0 !important;
          border: none !important;
          outline: none !important;
        }

        .landing-test-override,
        .landing-test-override * {
          /* Background Colors */
          --color-primary-bg: ${customColors.primaryBg} !important;
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
          background-color: ${customColors.primaryBg} !important;
          color: ${customColors.body} !important;
        }

        .landing-test-override .bg-primary-bg {
          background-color: ${customColors.primaryBg} !important;
        }

        .landing-test-override .bg-secondary-bg {
          position: relative;
          background: linear-gradient(to right, #141518 0%, #16171a 25%, #18191c 50%, #16171a 75%, #141518 100%) !important;
          overflow: hidden;
        }

        .landing-test-override .bg-secondary-bg::before {
          content: '';
          position: absolute;
          top: -2px;
          left: -2px;
          right: -2px;
          bottom: -2px;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilterContainer1'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='2.5' numOctaves='6' stitchTiles='stitch'/%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3CfeComponentTransfer%3E%3CfeFuncA type='discrete' tableValues='0 1 0 1 0 1'/%3E%3C/feComponentTransfer%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilterContainer1)'/%3E%3C/svg%3E");
          opacity: 0.3;
          pointer-events: none;
          mix-blend-mode: overlay;
          z-index: 0;
        }

        .landing-test-override .bg-secondary-bg > * {
          position: relative;
          z-index: 1;
        }

        .landing-test-override .text-heading {
          color: ${customColors.heading} !important;
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

        /* Button border radius - premium 6px */
        .landing-test-override .btn,
        .landing-test-override .btn-primary {
          border-radius: 6px !important;
        }

        .landing-test-override #testimonial-section .bg-secondary-bg {
          background-color: ${customColors.secondaryBg} !important;
          border-radius: 1.5rem;
          border: 1px solid ${customColors.border} !important;
        }

        /* Hero section gradient with realistic grain/noise texture */
        .hero-gradient {
          position: relative;
          background: linear-gradient(to right, #0c0d0f 0%, #0d0e10 20%, #141518 50%, #0e0f11 80%, #0c0d0f 100%);
          overflow: hidden;
        }

        .hero-gradient::before {
          content: '';
          position: absolute;
          top: -2px;
          left: -2px;
          right: -2px;
          bottom: -2px;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='3.5' numOctaves='10' stitchTiles='stitch'/%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3CfeComponentTransfer%3E%3CfeFuncA type='discrete' tableValues='0 1 0 1 0 1 0 1 0 1'/%3E%3C/feComponentTransfer%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E");
          opacity: 0.8;
          pointer-events: none;
          mix-blend-mode: overlay;
        }

        /* Project cards with subtle gradient and grain - more contrast */
        .project-card-gradient {
          position: relative;
          background: linear-gradient(to right, #141518 0%, #16171a 25%, #18191c 50%, #16171a 75%, #141518 100%);
          overflow: hidden;
        }

        .project-card-gradient::before {
          content: '';
          position: absolute;
          top: -2px;
          left: -2px;
          right: -2px;
          bottom: -2px;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilterCard'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='2.5' numOctaves='6' stitchTiles='stitch'/%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3CfeComponentTransfer%3E%3CfeFuncA type='discrete' tableValues='0 1 0 1 0 1'/%3E%3C/feComponentTransfer%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilterCard)'/%3E%3C/svg%3E");
          opacity: 0.3;
          pointer-events: none;
          mix-blend-mode: overlay;
        }

        .landing-test-override main {
          margin: 0;
          padding: 0;
          border: none;
          outline: none;
        }

        /* Hide the layout footer on test page */
        body footer#contact {
          display: none !important;
        }

        /* Hide navbar border and ensure no gap on test page */
        header.sticky {
          border-bottom: none !important;
          margin-bottom: 0 !important;
          padding-bottom: 0 !important;
        }

        /* Ensure hero section starts at the very top */
        .landing-test-override main section:first-of-type {
          margin-top: 0 !important;
          padding-top: 0 !important;
        }
      `}</style>

      <main className="bg-primary-bg text-body landing-test-override" style={{ margin: 0, padding: 0 }}>
        {/* Hero */}
        <section
          ref={heroRef}
          className="hero-gradient relative min-h-screen px-6 flex items-center overflow-hidden transition-all duration-300 ease-out"
          style={{
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
                    <div
                      className="relative w-24 h-24 sm:w-32 sm:h-32 lg:w-40 lg:h-40 border border-border rounded-full overflow-hidden z-10"
                      style={{ backgroundColor: customColors.secondaryBg }}
                    >
                      <Image src="/jocke-home.png" alt="Joakim Strandlund" width={160} height={160} className="w-full h-full object-cover" />
                    </div>
                  </div>

                  {/* Greeting */}
                  <div className="border border-border rounded-2xl px-6 py-3 relative" style={{ backgroundColor: customColors.secondaryBg }}>
                    <p className="text-body text-lg">Hello, I'm Joakim 👋</p>
                    {/* Speech bubble tail pointing up */}
                    <div
                      className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-4 h-4 border-l border-t border-border rotate-45"
                      style={{ backgroundColor: customColors.secondaryBg }}
                    ></div>
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
                      className="btn btn-primary transition-all duration-300"
                      style={{
                        border: `1px solid ${customColors.accent}`,
                        background: `linear-gradient(180deg, ${customColors.accent} 0%, ${customColors.accentHover} 100%)`,
                        color: '#000000',
                        borderRadius: '6px',
                        padding: '0.875rem 1.75rem',
                        display: 'inline-flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        textDecoration: 'none',
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.borderColor = customColors.accentHover;
                        e.currentTarget.style.background = `linear-gradient(180deg, ${customColors.accentHover} 0%, ${customColors.accentHover} 100%)`;
                        e.currentTarget.style.transform = 'translateY(-1px)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.borderColor = customColors.accent;
                        e.currentTarget.style.background = `linear-gradient(180deg, ${customColors.accent} 0%, ${customColors.accentHover} 100%)`;
                        e.currentTarget.style.transform = 'translateY(0)';
                      }}
                    >
                      Explore my work
                    </a>
                  </Magnetic>
                  <Magnetic>
                    <a
                      href="mailto:joakimstrandlund@gmail.com"
                      className="btn transition-all duration-300"
                      style={{
                        border: `1px solid ${customColors.border}`,
                        background: 'transparent',
                        color: customColors.heading,
                        borderRadius: '6px',
                        padding: '0.875rem 1.75rem',
                        display: 'inline-flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        textDecoration: 'none',
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.borderColor = customColors.borderHover;
                        e.currentTarget.style.background = customColors.secondaryBg;
                        e.currentTarget.style.transform = 'translateY(-1px)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.borderColor = customColors.border;
                        e.currentTarget.style.background = 'transparent';
                        e.currentTarget.style.transform = 'translateY(0)';
                      }}
                    >
                      Get in touch
                    </a>
                  </Magnetic>
                </div>
              </Reveal>
            </div>
          </div>
          <div className="hero-fade" />
        </section>

        {/* Case Studies */}
        <section id="projects" className="bg-primary-bg pt-10 pb-16 -mt-6 relative z-20">
          <div className="max-w-6xl mx-auto px-6">
            <Reveal>
              <div className="mb-8">
                <div className="text-xs uppercase tracking-wide text-body">Selected</div>
                <h2 className="mt-2 font-grotesk font-semibold text-2xl sm:text-3xl text-heading">Case studies</h2>
              </div>
            </Reveal>

            <div className="grid grid-cols-1 gap-8 sm:gap-10">
              {cards.map((card, index) => (
                <Reveal key={card.href} delay={index * 60}>
                  <Link
                    href={card.href}
                    className="group block h-full relative transform transition-all duration-500 hover:-translate-y-1 hover:scale-[1.01] rounded-2xl overflow-hidden"
                    style={{
                      transitionTimingFunction: 'cubic-bezier(0.34, 1.56, 0.64, 1)',
                      borderRadius: '1.5rem',
                      overflow: 'hidden',
                      display: 'block',
                    }}
                  >
                    {/* Card container with border */}
                    <div
                      className="project-card-gradient relative transition-all duration-500 min-h-[480px] lg:min-h-[420px] shadow-[0_8px_24px_rgba(0,0,0,0.25)] hover:shadow-[0_12px_32px_rgba(0,0,0,0.28)]"
                      style={{
                        borderRadius: '1.5rem',
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
                            className="font-grotesk font-semibold text-3xl lg:text-6xl leading-tight mb-2 transform transition-transform duration-300 group-hover:-translate-y-[1px]"
                            style={{ color: customColors.heading }}
                          >
                            {card.title.split(' — ').map((part, index) => (
                              <div key={index}>{part}</div>
                            ))}
                          </h3>

                          {/* Description */}
                          <p className="text-body leading-relaxed mb-4 text-base lg:text-lg" style={{ color: customColors.body }}>
                            {card.description}
                          </p>

                          {/* Tags */}
                          <div className="flex flex-wrap items-center gap-2 mb-4">
                            {card.tags.map((tag, index) => (
                              <span
                                key={index}
                                className="text-muted text-sm border px-3 py-1"
                                style={{
                                  color: customColors.body,
                                  borderColor: customColors.border,
                                }}
                              >
                                {tag}
                              </span>
                            ))}
                          </div>

                          {/* CTA Button - accent button */}
                          <div
                            className="opacity-100 lg:opacity-0 lg:group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300 inline-flex items-center justify-center btn btn-primary"
                            style={{
                              border: `1px solid ${customColors.accent}`,
                              background: `linear-gradient(180deg, ${customColors.accent} 0%, ${customColors.accentHover} 100%)`,
                              color: '#000000',
                              borderRadius: '6px',
                              padding: '0.875rem 1.75rem',
                              textDecoration: 'none',
                              cursor: 'pointer',
                            }}
                            onMouseEnter={(e) => {
                              e.currentTarget.style.borderColor = customColors.accentHover;
                              e.currentTarget.style.background = `linear-gradient(180deg, ${customColors.accentHover} 0%, ${customColors.accentHover} 100%)`;
                              e.currentTarget.style.transform = 'translateY(-1px)';
                            }}
                            onMouseLeave={(e) => {
                              e.currentTarget.style.borderColor = customColors.accent;
                              e.currentTarget.style.background = `linear-gradient(180deg, ${customColors.accent} 0%, ${customColors.accentHover} 100%)`;
                              e.currentTarget.style.transform = 'translateY(0)';
                            }}
                          >
                            View project
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
        <section ref={testimonialRef} id="testimonial-section" className="bg-primary-bg pt-20 pb-20 relative z-20">
          <div className="max-w-6xl mx-auto px-6">
            {/* Testimonial card with scroll animation */}
            <div className="max-w-4xl mx-auto">
              <TestimonialCard />
            </div>
          </div>
        </section>

        {/* New Footer Section */}
        <section
          ref={footerRef}
          id="footer-new"
          className="bg-secondary-bg pt-24 pb-20 relative overflow-hidden"
          style={{
            transform: `scale(${footerScale})`,
            borderRadius: `${footerBorderRadius}px`,
            transformOrigin: 'center center',
            zIndex: 10,
            willChange: 'transform',
            width: '100vw',
            marginLeft: 'calc(-50vw + 50%)',
            marginRight: 'calc(-50vw + 50%)',
          }}
        >
          <div className="max-w-6xl mx-auto px-6 w-full">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-16">
              {/* Left Column - Bold CTA */}
              <div className="space-y-6">
                <h2 className="font-grotesk font-bold text-heading text-4xl sm:text-5xl lg:text-6xl leading-tight">Let&apos;s work together</h2>
                <p className="text-body text-xl leading-relaxed">Have a project in mind or want to chat about design? I'd love to hear from you.</p>
                <div className="pt-4">
                  <a
                    href="mailto:joakimstrandlund@gmail.com"
                    className="btn btn-primary inline-flex items-center transition-all duration-300"
                    style={{
                      border: `1px solid ${customColors.accent}`,
                      background: `linear-gradient(180deg, ${customColors.accent} 0%, ${customColors.accentHover} 100%)`,
                      color: '#000000',
                      borderRadius: '6px',
                      padding: '0.875rem 1.75rem',
                      textDecoration: 'none',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = customColors.accentHover;
                      e.currentTarget.style.background = `linear-gradient(180deg, ${customColors.accentHover} 0%, ${customColors.accentHover} 100%)`;
                      e.currentTarget.style.transform = 'translateY(-1px)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = customColors.accent;
                      e.currentTarget.style.background = `linear-gradient(180deg, ${customColors.accent} 0%, ${customColors.accentHover} 100%)`;
                      e.currentTarget.style.transform = 'translateY(0)';
                    }}
                  >
                    Get in touch
                  </a>
                </div>
              </div>

              {/* Right Column - Contact Info */}
              <div className="space-y-8">
                <div>
                  <div className="text-xs uppercase tracking-wide text-accent mb-4 font-semibold">Contact</div>
                  <div className="space-y-2">
                    <a
                      href="mailto:joakimstrandlund@gmail.com"
                      className="text-heading text-xl font-semibold hover:text-accent transition-colors inline-flex items-center gap-3"
                    >
                      <Mail className="h-5 w-5" />
                      joakimstrandlund@gmail.com
                    </a>
                    <div>
                      <a href="tel:+46739788009" className="text-body text-lg hover:text-accent transition-colors inline-flex items-center gap-3">
                        <Phone className="h-5 w-5" />
                        +46 73 97 88 009
                      </a>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="text-xs uppercase tracking-wide text-accent mb-4 font-semibold">Connect</div>
                  <div className="flex gap-6">
                    <a
                      href="https://www.linkedin.com/in/joakim-strandlund-14717817a/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-body text-lg hover:text-accent transition-colors font-medium"
                    >
                      LinkedIn
                    </a>
                  </div>
                </div>
                <div>
                  <div className="text-xs uppercase tracking-wide text-accent mb-4 font-semibold">Location</div>
                  <div className="text-body text-lg">Stockholm, Sweden</div>
                </div>
              </div>
            </div>

            {/* Bottom Bar */}
            <div className="pt-12 border-t border-border/50 flex flex-col sm:flex-row justify-between items-center gap-4">
              <div className="text-body text-sm">© {new Date().getFullYear()} Joakim Strandlund</div>
              <div className="text-body text-sm">Available for remote work</div>
            </div>
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
