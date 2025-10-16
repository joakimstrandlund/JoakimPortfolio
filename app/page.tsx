'use client';

import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import PersonalSymbol from './components/PersonalSymbol';
import Magnetic from './components/Magnetic';
import Reveal from './components/Reveal';
import CardParallax from './components/CardParallax';
import TestimonialCard from './components/TestimonialCard';

export default function Home() {
  const [displayedText, setDisplayedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const texts = ['I design digital experiences', 'I thrive on challenges', "I'm driven by curiosity", 'I never stop experimenting'];

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

  return (
    <main className="bg-primary-bg text-body">
      {/* Hero */}
      <section className="relative min-h-screen px-6 flex items-center bg-primary-bg overflow-hidden">
        {/* Subtle Grid Background */}
        <div className="absolute inset-0">
          <div className="grid grid-cols-12 grid-rows-8 h-full">
            {Array.from({ length: 96 }).map((_, i) => (
              <motion.div
                key={i}
                className="border border-border/30"
                animate={{
                  opacity: [0.1, 0.3, 0.1],
                }}
                transition={{
                  duration: 6 + Math.random() * 3,
                  repeat: Infinity,
                  delay: Math.random() * 2,
                  ease: 'easeInOut',
                }}
              />
            ))}
          </div>
        </div>

        <div className="max-w-4xl mx-auto w-full text-center relative z-10">
          <div className="space-y-6">
            {/* Profile Image with Greeting */}
            <Reveal>
              <div className="flex flex-col items-center mb-4">
                <div className="w-24 h-24 sm:w-32 sm:h-32 lg:w-40 lg:h-40 bg-secondary-bg border border-border rounded-full overflow-hidden mb-4">
                  <Image src="/jocke-home.png" alt="Joakim Strandlund" width={160} height={160} className="w-full h-full object-cover" />
                </div>

                {/* Greeting */}
                <div className="bg-secondary-bg border border-border rounded-2xl px-6 py-3 relative">
                  <p className="text-body text-lg">Hello, I'm Joakim 👋</p>
                  {/* Speech bubble tail pointing up */}
                  <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-secondary-bg border-l border-t border-border rotate-45"></div>
                </div>
              </div>
            </Reveal>

            {/* Typewriter Text */}
            <Reveal delay={200}>
              <div className="min-h-[100px] flex items-center justify-center">
                <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl text-heading leading-tight">
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
                  <a href="#projects" className="btn btn-primary text-lg px-8 py-4">
                    Explore my work
                  </a>
                </Magnetic>
                <Magnetic>
                  <a href="mailto:joakimstrandlund@gmail.com" className="btn text-lg px-8 py-4">
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
      <section id="projects" className="bg-primary-bg pt-10 pb-16 -mt-6">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-8">
            <div className="text-xs uppercase tracking-wide text-body">Selected</div>
            <h2 className="mt-2 font-grotesk font-semibold text-2xl sm:text-3xl text-heading">Case studies</h2>
          </div>

          <div className="grid grid-cols-1 gap-8 sm:gap-10">
            {cards.map((card, index) => (
              <Reveal key={card.href} delay={index * 60}>
                <Link
                  href={card.href}
                  className="group block h-full relative overflow-hidden transform transition-all duration-500 hover:-translate-y-1 hover:scale-[1.01]"
                  style={{
                    transitionTimingFunction: 'cubic-bezier(0.34, 1.56, 0.64, 1)',
                  }}
                >
                  {/* Card container with border */}
                  <div
                    className="relative transition-all duration-500 min-h-[480px] lg:min-h-[420px]"
                    style={{
                      backgroundColor: '#242329',
                      background: '#242329',
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
                        <h3 className="font-display font-semibold text-heading text-3xl lg:text-6xl leading-tight mb-6 lg:mb-8 transform transition-transform duration-300 group-hover:-translate-y-[1px]">
                          {card.title.split(' — ').map((part, index) => (
                            <div key={index}>{part}</div>
                          ))}
                        </h3>

                        {/* Description */}
                        <p className="text-body leading-relaxed mb-4 text-base lg:text-lg">{card.description}</p>

                        {/* Tags */}
                        <div className="flex flex-wrap items-center gap-2 mb-4">
                          {card.tags.map((tag, index) => (
                            <span key={index} className="text-muted text-sm border border-border px-3 py-1">
                              {tag}
                            </span>
                          ))}
                        </div>

                        {/* CTA Button - accent button */}
                        <div className="btn btn-primary btn-arrow opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                          <span>View project</span>
                          <span className="arrow">→</span>
                        </div>
                      </div>

                      {/* Image column (right) - fills entire right column */}
                      <CardParallax>
                        <div className="relative h-64 sm:h-72 md:h-80 lg:h-full p-4 lg:pt-6 lg:pr-6 lg:pb-6 lg:pl-6" style={{ gridArea: 'image' }}>
                          <div className="relative w-full h-full bg-secondary-bg pt-6 pr-6 pb-6 pl-6">
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
      <section className="bg-primary-bg pt-20 pb-8">
        <div className="max-w-6xl mx-auto px-6">
          {/* Section header */}
          <div className="text-center mb-8">
            <div className="text-xs uppercase tracking-wide text-body">Testimonial</div>
          </div>

          {/* Testimonial card with scroll animation */}
          <TestimonialCard />
        </div>
      </section>
    </main>
  );
}

const cards = [
  {
    title: 'Loggi — Wellness App',
    year: '2025',
    tags: ['UX/UI', 'Accessibility', 'Mobile'],
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
    tags: ['UX/UI', 'Web', 'Restaurant'],
    description: 'Modern restaurant website design focusing on user experience and visual storytelling.',
    href: '/case-studies/restaurang-apotek',
  },
];
