'use client';

import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import PersonalSymbol from './components/PersonalSymbol';

export default function Home() {
  return (
    <main className="bg-primary text-body">
      {/* Hero */}
      <section className="relative min-h-screen px-6 flex items-center bg-primary overflow-hidden">
        {/* Animated grid background */}
        <div className="absolute inset-0 pointer-events-none opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `
              linear-gradient(rgba(255, 224, 125, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255, 224, 125, 0.1) 1px, transparent 1px)
            `,
              backgroundSize: '50px 50px',
            }}
          ></div>
        </div>

        <div className="max-w-6xl mx-auto px-6 w-full relative z-10">
          {/* Top status bar */}
                  <div className="flex justify-between items-center mb-16">
            <div className="text-body text-sm">UX/UI Designer</div>
            <div className="text-accent text-sm font-medium">Available for projects</div>
          </div>

          {/* Main content */}
          <div className="text-center space-y-8">
            {/* Main headline */}
            <div>
              <h1 className="font-display text-5xl sm:text-6xl md:text-7xl text-headings leading-tight tracking-tight">
                <span className="inline-block">
                  Creating digital
                </span>
                <br />
                <span className="inline-block text-accent">
                  experiences
                </span>
                <span className="inline-block ml-2">
                  that matter
                </span>
              </h1>
            </div>

            {/* Tagline */}
            <div className="space-y-4">
              <p className="text-body text-lg max-w-2xl mx-auto leading-relaxed">
                I'm <span className="text-accent font-medium">Joakim Strandlund</span>, a UX/UI Designer focused on solving real problems through user-centered
                design, clean interfaces, and thoughtful interactions.
              </p>
            </div>

            {/* Interactive elements */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
              <a
                href="#projects"
                className="btn btn-primary text-lg px-8 py-4"
              >
                Explore my work
              </a>

              <div className="flex items-center gap-4">
                <a
                  href="mailto:joakimstrandlund@gmail.com"
                  className="btn text-lg px-8 py-4"
                >
                  Get in touch
                </a>
              </div>
            </div>

            {/* Scroll indicator */}
            <div className="flex flex-col items-center gap-3 text-body text-sm">
              <span>Scroll to explore</span>
              <div className="w-6 h-6 flex items-center justify-center">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-accent"
                >
                  <path d="M12 5v14M19 12l-7 7-7-7" />
                </svg>
              </div>
            </div>
          </div>

          {/* Floating code snippets */}
          <div className="absolute top-1/4 left-8 opacity-20">
            <div className="bg-secondary/40 border border-stroke/30 rounded-lg p-4 text-xs font-mono text-body">
              <div className="text-accent">const</div>
              <div className="text-headings">userExperience</div>
              <div className="text-body">= {`{`}</div>
              <div className="ml-4 text-body">research: true,</div>
              <div className="ml-4 text-body">design: true,</div>
              <div className="ml-4 text-body">test: true</div>
              <div className="text-body">{`}`}</div>
            </div>
          </div>

          <div className="absolute top-1/3 right-8 opacity-20">
            <div className="bg-secondary/40 border border-stroke/30 rounded-lg p-4 text-xs font-mono text-body">
              <div className="text-accent">function</div>
              <div className="text-headings">solveProblem</div>
              <div className="text-body">() {`{`}</div>
              <div className="ml-4 text-body">return</div>
              <div className="ml-8 text-accent">"thoughtful design"</div>
              <div className="text-body">{`}`}</div>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section id="projects" className="bg-primary py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-8">
            <div className="text-xs uppercase tracking-wide text-body">Selected</div>
            <h2 className="mt-2 font-display text-2xl sm:text-3xl text-headings">Case studies</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
            {cards.map((card, index) => (
              <div key={card.href}>
                <Link
                  href={card.href}
                  className="group block h-full relative overflow-hidden transform transition-all duration-500 hover:-translate-y-3 hover:scale-[1.02] rounded-2xl"
                  style={{
                    transitionTimingFunction: 'cubic-bezier(0.34, 1.56, 0.64, 1)',
                  }}
                >
                  {/* Card background with subtle border */}
                  <div className="absolute inset-0 bg-secondary/10 border border-stroke/30 rounded-2xl group-hover:border-accent/30 transition-all duration-500 group-hover:shadow-2xl group-hover:shadow-accent/10 group-hover:bg-secondary/20" />

                  {/* Image placeholder */}
                  <div className="aspect-[16/10] bg-gradient-to-br from-tertiary/30 to-tertiary/50 relative overflow-hidden group-hover:scale-105 transition-transform duration-500 ease-out rounded-t-2xl">
                    {card.title.includes('Loggi') ? (
                      <>
                        {/* Loggi project image */}
                        <Image
                          src="/Loggi - new hero section.png"
                          alt="Loggi wellness app preview"
                          fill
                          className="object-cover"
                          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        />
                        {/* Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent transition-all duration-300 rounded-t-2xl" />
                      </>
                    ) : card.title.includes('Restaurang') ? (
                      <>
                        {/* Restaurang Apotek project image */}
                        <Image
                          src="/Restaurang apotek - hero section.png"
                          alt="Restaurang Apotek website preview"
                          fill
                          className="object-cover"
                          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        />
                        {/* Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent transition-all duration-300 rounded-t-2xl" />
                      </>
                    ) : card.title.includes('Treebula') ? (
                      <>
                        {/* Treebula project image */}
                        <Image
                          src="/Treebula - hero section.png"
                          alt="Treebula forest monitoring app preview"
                          fill
                          className="object-cover"
                          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        />
                        {/* Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent transition-all duration-300 rounded-t-2xl" />
                      </>
                    ) : (
                      <>
                        {/* Background pattern for other projects */}
                        <div className="absolute inset-0 opacity-20 rounded-t-2xl overflow-hidden">
                          <div className="absolute inset-0 bg-gradient-to-br from-accent/10 via-transparent to-accent/5" />
                          <div className="absolute top-4 left-4 w-8 h-8 border border-accent/20 rounded-lg" />
                          <div className="absolute top-4 right-4 w-6 h-6 border border-accent/20 rounded-full" />
                          <div className="absolute bottom-4 left-4 w-4 h-4 border border-accent/20 rounded" />
                          <div className="absolute bottom-4 right-4 w-10 h-2 bg-accent/20 rounded-full" />
                        </div>

                        {/* Main content */}
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="text-center">
                            {card.title.includes('Treebula') && (
                              <div className="w-20 h-20 mx-auto mb-4 rounded-3xl bg-gradient-to-br from-green-500/30 to-emerald-500/30 border border-green-400/40 flex items-center justify-center group-hover:from-green-500/50 group-hover:to-emerald-500/50 group-hover:border-green-400/60 group-hover:scale-110 transition-all duration-500 shadow-lg shadow-green-500/20">
                                <div className="text-3xl group-hover:scale-110 transition-transform duration-300">🌲</div>
                              </div>
                            )}
                            {card.title.includes('Restaurang') && (
                              <div className="w-20 h-20 mx-auto mb-4 rounded-3xl bg-gradient-to-br from-orange-500/30 to-red-500/30 border border-orange-400/40 flex items-center justify-center group-hover:from-orange-500/50 group-hover:to-red-500/50 group-hover:border-orange-400/60 group-hover:scale-110 transition-all duration-500 shadow-lg shadow-orange-500/20">
                                <div className="text-3xl group-hover:scale-110 transition-transform duration-300">🍽️</div>
                              </div>
                            )}
                            <div className="text-body2 text-sm font-medium group-hover:text-headings2 transition-colors duration-300">Project Preview</div>
                          </div>
                        </div>

                        {/* Overlay effects */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/5 via-transparent to-transparent transition-all duration-300 rounded-t-2xl" />
                      </>
                    )}
                  </div>

                  {/* Content */}
                  <div className="relative p-6 flex flex-col flex-grow transition-all duration-500 rounded-b-2xl">
                    {/* Title and year */}
                    <div className="flex items-start justify-between mb-4">
                      <h3 className="font-display text-headings text-lg leading-tight group-hover:text-headings2 group-hover:scale-105 transform transition-all duration-300">
                        {card.title}
                      </h3>
                      {card.year && <span className="text-xs text-body2 font-medium group-hover:text-accent transition-colors duration-300">{card.year}</span>}
                    </div>

                    {/* Description */}
                    <p className="text-sm text-body leading-relaxed flex-grow mb-6 group-hover:text-body2 transition-colors duration-300">{card.description}</p>

                    {/* CTA */}
                    <div className="flex items-center gap-2 text-accent text-sm font-medium group-hover:text-hover transition-colors">
                      <span className="group-hover:translate-x-1 transition-transform duration-300 ease-out">View project</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-2 group-hover:scale-110 transition-all duration-300 ease-out" />
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="bg-primary pt-20 pb-8">
        <div className="max-w-4xl mx-auto px-6">
          {/* Section header */}
          <div className="text-center mb-8">
            <div className="text-xs uppercase tracking-wide text-body">Testimonial</div>
          </div>

          {/* Testimonial card */}
          <div className="bg-primary/40 border border-stroke/30 rounded-2xl p-8 sm:p-12">
            {/* Quote */}
            <blockquote className="font-display text-headings text-lg sm:text-xl leading-relaxed mb-8 text-center">
              &quot;It&apos;s been a real pleasure working with Joakim. He&apos;s fast, pragmatic, and has a great instinct for delivering MVPs and PoCs that
              move things forward. At the same time, he builds on solid design principles and creates solutions that are easy to grow and iterate on. A
              dependable team player with a strong foundation—highly recommended.&quot;
            </blockquote>

            {/* Attribution */}
            <div className="flex items-center justify-center gap-4 pt-4 border-t border-stroke/30">
              <div className="w-12 h-12 rounded-full bg-accent/20 border border-accent/30 flex items-center justify-center">
                <span className="text-accent font-heading font-bold text-lg">ML</span>
              </div>
              <div className="text-left">
                <div className="font-display text-headings text-lg">Martin Lofti</div>
                <div className="text-body text-sm">
                  CTO at <span className="text-accent font-medium">Treebula</span>
                </div>
              </div>
            </div>
          </div>
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
    title: 'Restaurang Apotek',
    year: '2024',
    tags: ['UX/UI', 'Web', 'Restaurant'],
    description: 'Modern restaurant website design focusing on user experience and visual storytelling.',
    href: '/case-studies/restaurang-apotek',
  },
];
