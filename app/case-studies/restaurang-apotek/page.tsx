'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { ExclamationTriangleIcon, CursorArrowRaysIcon, CheckCircleIcon } from '@heroicons/react/24/outline';

export default function Page() {
  const thanksSectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const thanks = thanksSectionRef.current;
    if (thanks) {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) thanks.classList.add('is-visible');
        },
        { threshold: 0.2 }
      );
      observer.observe(thanks);
      return () => observer.disconnect();
    }
  }, []);

  const customColors = {
    // Background Colors
    primaryBg: '#FFFFFF',
    secondaryBg: '#F4F4F4',
    tertiaryBg: '#B7C2B4',
    darkBg: '#0F0F0F',
    whiteBg: '#FAFAFA',
    lightBeige: '#F5F3EF',
    mutedGreen: '#A8B5A0',

    // Accent Colors
    accent: '#ff6b2c',
    accentHover: '#e55a1f',
    accentDark: '#C84F1A', // Darker accent for WCAG compliance on light backgrounds

    // Text Colors
    heading: '#000000',
    body: '#6b6b6b',
    muted: '#9a9a9f',

    // Border Colors
    border: '#e0e0e0',
    borderHover: '#d0d0d0',
  };

  return (
    <article style={{ backgroundColor: customColors.whiteBg, minHeight: '100vh' }}>
      {/* Hero - White Background, Large Image */}
      <section className="pt-32 pb-40" style={{ backgroundColor: customColors.whiteBg }}>
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-xs uppercase tracking-wider mb-4 block font-semibold" style={{ color: customColors.accentDark }}>
              Case Study
            </span>
            <h1
              className="font-grotesk font-semibold text-5xl sm:text-6xl md:text-7xl tracking-tight mb-6 leading-tight"
              style={{ color: customColors.heading }}
            >
              Restaurang Apotek
            </h1>
            <p className="text-xl mb-4" style={{ color: customColors.muted }}>
              2024 · UX/UI · Web · Restaurant
            </p>
            <p className="text-lg max-w-2xl mx-auto leading-relaxed mb-12" style={{ color: customColors.body }}>
              Redesigning a restaurant website with focus on accessibility, mobile experience, and user-centered design.
            </p>
          </div>

          <div
            className="rounded-2xl overflow-hidden relative"
            style={{
              boxShadow: '0 20px 60px rgba(0, 0, 0, 0.08)',
              background: 'linear-gradient(180deg, #2d1a1f 0%, #3d252a 25%, #4d2f35 50%, #3a2328 75%, #2e1b20 100%)',
              position: 'relative',
            }}
          >
            {/* Warm wine glow overlay - sophisticated and inviting */}
            <div
              className="absolute inset-0"
              style={{
                background:
                  'linear-gradient(180deg, rgba(139, 69, 85, 0.15) 0%, rgba(139, 69, 85, 0.08) 30%, rgba(139, 69, 85, 0.12) 60%, rgba(139, 69, 85, 0.18) 100%)',
              }}
            />
            {/* Depth and richness - warm, organic shapes */}
            <div
              className="absolute inset-0 opacity-20"
              style={{
                backgroundImage: `radial-gradient(ellipse 85% 45% at 25% 25%, rgba(139, 69, 85, 0.3) 0%, transparent 70%),
                                  radial-gradient(ellipse 65% 55% at 75% 75%, rgba(160, 82, 95, 0.25) 0%, transparent 70%),
                                  radial-gradient(ellipse 55% 65% at 50% 50%, rgba(120, 60, 75, 0.2) 0%, transparent 80%)`,
                backgroundSize: '100% 100%, 100% 100%, 100% 100%',
                backgroundPosition: '0% 0%, 100% 100%, 50% 50%',
                mixBlendMode: 'soft-light',
              }}
            />
            {/* Subtle texture - like fine wine sediment */}
            <div
              className="absolute inset-0 opacity-10"
              style={{
                backgroundImage: `repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(139, 69, 85, 0.03) 2px, rgba(139, 69, 85, 0.03) 4px),
                                  repeating-linear-gradient(90deg, transparent, transparent 3px, rgba(160, 82, 95, 0.02) 3px, rgba(160, 82, 95, 0.02) 6px)`,
              }}
            />
            {/* Hero image */}
            <div className="relative z-10">
              <Image
                src="/Restaurang apotek - hero section.png"
                alt="Restaurang Apotek website redesign overview"
                width={1200}
                height={800}
                className="w-full h-auto"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="max-w-5xl mx-auto px-6">
        <div style={{ height: '1px', backgroundColor: customColors.border }}></div>
      </div>

      {/* Challenge - Split Layout */}
      <section className="py-32" style={{ backgroundColor: customColors.whiteBg }}>
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-xs uppercase tracking-wider mb-4 block font-semibold" style={{ color: customColors.accentDark }}>
                The Challenge
              </span>
              <h2 className="font-grotesk font-semibold text-4xl md:text-5xl mb-6 leading-tight" style={{ color: customColors.heading }}>
                A beloved restaurant with a broken website
              </h2>
              <div className="space-y-6 mb-12" style={{ color: customColors.body }}>
                <p className="text-lg leading-relaxed">
                  Restaurang Apotek is a locally renowned restaurant known for its bold interior and modern take on traditional dining. But their website? It
                  didn't match.
                </p>
                <p className="leading-relaxed">
                  It lacked accessibility, was difficult to navigate especially on mobile, and couldn't be updated without technical help. Menus were buried in
                  PDFs, the booking flow was confusing, and the design felt disconnected from the restaurant's actual brand.
                </p>
              </div>
            </div>
            <div
              className="rounded-2xl p-8 md:p-12"
              style={{
                background: `linear-gradient(to bottom, ${customColors.lightBeige}, ${customColors.lightBeige}dd)`,
              }}
            >
              <p className="text-base leading-relaxed" style={{ color: customColors.body }}>
                <span className="font-semibold" style={{ color: customColors.heading }}>
                  My role:{' '}
                </span>
                To redesign the website from the ground up, creating a modern, accessible experience that aligned with the restaurant's personality while making
                it easy for the team to maintain.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="max-w-5xl mx-auto px-6">
        <div style={{ height: '1px', backgroundColor: customColors.border }}></div>
      </div>

      {/* Discovery - Full Width Centered Text */}
      <section className="py-32" style={{ backgroundColor: customColors.whiteBg }}>
        <div className="max-w-5xl mx-auto px-6">
          <span className="text-xs uppercase tracking-wider mb-4 block font-semibold text-center" style={{ color: customColors.accentDark }}>
            Discovery
          </span>
          <h2 className="font-grotesk font-semibold text-4xl md:text-5xl mb-6 text-center leading-tight" style={{ color: customColors.heading }}>
            Understanding what was broken
          </h2>

          <div className="space-y-8 mb-12" style={{ color: customColors.body }}>
            <p className="text-lg leading-relaxed">
              I started by conducting usability reviews, user interviews, and accessibility audits. The goal was to uncover the biggest pain points and
              understand what users actually needed.
            </p>
          </div>

          {/* Subtle divider */}
          <div className="flex items-center gap-4 mb-12">
            <div style={{ flex: 1, height: '1px', backgroundColor: customColors.border }}></div>
            <div style={{ width: '4px', height: '4px', borderRadius: '50%', backgroundColor: customColors.mutedGreen }}></div>
            <div style={{ flex: 1, height: '1px', backgroundColor: customColors.border }}></div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div
              className="rounded-xl p-8"
              style={{
                background: `linear-gradient(to bottom, ${customColors.secondaryBg}, ${customColors.secondaryBg}dd)`,
              }}
            >
              <h3 className="font-grotesk font-semibold text-xl mb-4 flex items-center gap-2" style={{ color: customColors.heading }}>
                <ExclamationTriangleIcon className="w-6 h-6" style={{ color: customColors.accent }} />
                What users struggled with
              </h3>
              <ul className="space-y-3 text-sm">
                {[
                  '"At first, I thought the logo was a button... it was confusing!"',
                  '"I tried tabbing through the page, but I couldn\'t even complete a reservation."',
                  '"Why is the phone number hidden? I just want to book a table!"',
                  '"Instagram looks cool, but the website feels completely different."',
                ].map((item, index) => (
                  <li key={index} className="flex items-baseline gap-3">
                    <span className="text-lg font-bold leading-none" style={{ color: customColors.accent }}>
                      •
                    </span>
                    <span className="leading-relaxed" style={{ color: customColors.body }}>
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div
              className="rounded-xl p-8"
              style={{
                background: `linear-gradient(to bottom, ${customColors.secondaryBg}, ${customColors.secondaryBg}dd)`,
              }}
            >
              <h3 className="font-grotesk font-semibold text-xl mb-4 flex items-center gap-2" style={{ color: customColors.heading }}>
                <CursorArrowRaysIcon className="w-6 h-6" style={{ color: customColors.accent }} />
                Business needs
              </h3>
              <ul className="space-y-3 text-sm">
                {[
                  'Increase completed bookings',
                  'Reach more users through accessibility',
                  'Empower staff to update content easily',
                  'Align digital presence with brand identity',
                ].map((item, index) => (
                  <li key={index} className="flex items-baseline gap-3">
                    <span className="text-lg font-bold leading-none" style={{ color: customColors.accent }}>
                      •
                    </span>
                    <span className="leading-relaxed" style={{ color: customColors.body }}>
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="max-w-5xl mx-auto px-6">
        <div style={{ height: '1px', backgroundColor: customColors.border }}></div>
      </div>

      {/* Solution - Landing Page - Split Layout */}
      <section className="py-32" style={{ backgroundColor: customColors.whiteBg }}>
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-xs uppercase tracking-wider mb-4 block font-semibold" style={{ color: customColors.accentDark }}>
              Solution
            </span>
            <h2 className="font-grotesk font-semibold text-4xl md:text-5xl mb-6 leading-tight" style={{ color: customColors.heading }}>
              A welcoming first impression
            </h2>
            <p className="text-lg max-w-2xl mx-auto leading-relaxed mb-12" style={{ color: customColors.muted }}>
              The landing page needed to immediately communicate the restaurant's character while making it easy to find key information like hours, location,
              and booking.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="flex justify-center">
              <Image
                src="/Rstaurang apotek - landingpage phone.png"
                alt="Restaurang Apotek landing page mobile view"
                width={300}
                height={600}
                className="w-full max-w-[240px] h-auto"
              />
            </div>
            <div>
              <h3 className="font-grotesk font-semibold text-2xl mb-4" style={{ color: customColors.heading }}>
                Landing Page
              </h3>
              <p className="text-base mb-6 leading-relaxed" style={{ color: customColors.body }}>
                Clean hero section with immediate access to booking and essential information.
              </p>
              <ul className="space-y-3 text-sm">
                {[
                  'Clear visual hierarchy guiding users to key actions',
                  'Mobile-first design with touch-friendly elements',
                  "Bold imagery reflecting the restaurant's personality",
                ].map((item, index) => (
                  <li key={index} className="flex items-baseline gap-3">
                    <span className="text-lg font-bold leading-none" style={{ color: customColors.accent }}>
                      •
                    </span>
                    <span className="leading-relaxed" style={{ color: customColors.body }}>
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="max-w-5xl mx-auto px-6">
        <div style={{ height: '1px', backgroundColor: customColors.border }}></div>
      </div>

      {/* Navigation - Split Layout (Reversed) */}
      <section className="py-32" style={{ backgroundColor: customColors.whiteBg }}>
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <h3 className="font-grotesk font-semibold text-2xl mb-4" style={{ color: customColors.heading }}>
                Mobile Navigation
              </h3>
              <p className="text-base mb-6 leading-relaxed" style={{ color: customColors.body }}>
                The old navigation was cluttered and confusing. I redesigned it with clear structure, accessible touch targets, and a clean mobile menu that
                prioritizes the most important actions.
              </p>
              <ul className="space-y-3 text-sm">
                {[
                  'Prominent booking CTA at the top',
                  'Clear close button (X) for better usability',
                  'Phone number easily accessible',
                  'Large touch targets for mobile users',
                ].map((item, index) => (
                  <li key={index} className="flex items-baseline gap-3">
                    <span className="text-lg font-bold leading-none" style={{ color: customColors.accent }}>
                      •
                    </span>
                    <span className="leading-relaxed" style={{ color: customColors.body }}>
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="order-1 md:order-2 flex justify-center">
              <Image
                src="/Rstaurang apotek - navabar open phone.png"
                alt="Restaurang Apotek mobile navigation menu"
                width={300}
                height={600}
                className="w-full max-w-[240px] h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="max-w-5xl mx-auto px-6">
        <div style={{ height: '1px', backgroundColor: customColors.border }}></div>
      </div>

      {/* Menus - Grid Layout */}
      <section className="py-32" style={{ backgroundColor: customColors.whiteBg }}>
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-xs uppercase tracking-wider mb-4 block font-semibold" style={{ color: customColors.accentDark }}>
              Content Design
            </span>
            <h2 className="font-grotesk font-semibold text-4xl md:text-5xl mb-6 leading-tight" style={{ color: customColors.heading }}>
              Making menus readable and accessible
            </h2>
            <p className="text-lg max-w-2xl mx-auto leading-relaxed mb-12" style={{ color: customColors.muted }}>
              The old PDF menus were impossible for screen readers to parse. I redesigned them as web-native content with clear typography, pricing, and
              categories.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="text-center">
              <div className="mb-6">
                <Image
                  src="/Rstaurang apotek - foodmeny phone.png"
                  alt="Restaurang Apotek food menu mobile view"
                  width={300}
                  height={600}
                  className="w-full max-w-[240px] mx-auto h-auto"
                />
              </div>
              <h3 className="font-grotesk font-semibold text-xl mb-3" style={{ color: customColors.heading }}>
                Food Menu
              </h3>
              <p className="text-sm mb-4 leading-relaxed" style={{ color: customColors.body }}>
                Clean layout with clear categories, pricing, and descriptions.
              </p>
            </div>

            <div className="text-center">
              <div className="mb-6">
                <Image
                  src="/Rstaurang apotek - cocktail phone.png"
                  alt="Restaurang Apotek cocktail menu mobile view"
                  width={300}
                  height={600}
                  className="w-full max-w-[240px] mx-auto h-auto"
                />
              </div>
              <h3 className="font-grotesk font-semibold text-xl mb-3" style={{ color: customColors.heading }}>
                Cocktail Menu
              </h3>
              <p className="text-sm mb-4 leading-relaxed" style={{ color: customColors.body }}>
                Visual menu design highlighting drinks with proper categorization.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="max-w-5xl mx-auto px-6">
        <div style={{ height: '1px', backgroundColor: customColors.border }}></div>
      </div>

      {/* Gallery - Split Layout */}
      <section className="py-32" style={{ backgroundColor: customColors.whiteBg }}>
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="flex justify-center">
              <Image
                src="/Rstaurang apotek - galleri phone.png"
                alt="Restaurang Apotek gallery section mobile view"
                width={300}
                height={600}
                className="w-full max-w-[240px] h-auto"
              />
            </div>
            <div>
              <h3 className="font-grotesk font-semibold text-2xl mb-4" style={{ color: customColors.heading }}>
                Gallery
              </h3>
              <p className="text-base mb-6 leading-relaxed" style={{ color: customColors.body }}>
                A restaurant's atmosphere is everything. I designed a gallery section that lets the images speak for themselves while maintaining fast load
                times and accessibility.
              </p>
              <ul className="space-y-3 text-sm">
                {['Responsive grid layout adapting to screen size', 'Optimized images for fast loading', 'Alt text for all images for accessibility'].map(
                  (item, index) => (
                    <li key={index} className="flex items-baseline gap-3">
                      <span className="text-lg font-bold leading-none" style={{ color: customColors.accent }}>
                        •
                      </span>
                      <span className="leading-relaxed" style={{ color: customColors.body }}>
                        {item}
                      </span>
                    </li>
                  )
                )}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="max-w-5xl mx-auto px-6">
        <div style={{ height: '1px', backgroundColor: customColors.border }}></div>
      </div>

      {/* Footer Section - Split Layout (Reversed) */}
      <section className="py-32" style={{ backgroundColor: customColors.whiteBg }}>
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <h3 className="font-grotesk font-semibold text-2xl mb-4" style={{ color: customColors.heading }}>
                Footer
              </h3>
              <p className="text-base mb-6 leading-relaxed" style={{ color: customColors.body }}>
                The footer became a crucial touchpoint for users looking for practical information. I designed it to be scannable, accessible, and
                mobile-friendly.
              </p>
              <ul className="space-y-3 text-sm">
                {[
                  'Clear grouping of information for easy scanning',
                  'Clickable phone numbers and email addresses',
                  'Social media links with proper labels',
                ].map((item, index) => (
                  <li key={index} className="flex items-baseline gap-2">
                    <span className="text-lg font-bold leading-none" style={{ color: customColors.accent }}>
                      •
                    </span>
                    <span className="leading-relaxed" style={{ color: customColors.body }}>
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="order-1 md:order-2 flex justify-center">
              <Image
                src="/Rstaurang apotek - footer phone.png"
                alt="Restaurang Apotek footer section mobile view"
                width={300}
                height={600}
                className="w-full max-w-[240px] h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="max-w-5xl mx-auto px-6">
        <div style={{ height: '1px', backgroundColor: customColors.border }}></div>
      </div>

      {/* Validation - Split Layout */}
      <section className="py-32" style={{ backgroundColor: customColors.whiteBg }}>
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-start">
            <div>
              <span className="text-xs uppercase tracking-wider mb-4 block font-semibold" style={{ color: customColors.accentDark }}>
                Validation
              </span>
              <h2 className="font-grotesk font-semibold text-4xl md:text-5xl mb-6 leading-tight" style={{ color: customColors.heading }}>
                Testing and refining
              </h2>
              <p className="text-lg leading-relaxed mb-12" style={{ color: customColors.body }}>
                I tested the redesign with users and iterated based on feedback. Some decisions needed adjusting.
              </p>
            </div>
            <div className="space-y-6">
              <div
                className="rounded-xl p-6"
                style={{
                  background: `linear-gradient(to bottom, ${customColors.secondaryBg}, ${customColors.secondaryBg}dd)`,
                }}
              >
                <h3 className="font-grotesk font-semibold text-lg mb-3 flex items-center gap-2" style={{ color: customColors.heading }}>
                  <CheckCircleIcon className="w-6 h-6" style={{ color: customColors.accent }} />
                  What worked
                </h3>
                <ul className="space-y-3 text-sm">
                  {[
                    'Booking button became immediately findable',
                    'Navigation clarity improved significantly',
                    'Users described design as "clean and professional"',
                  ].map((item, index) => (
                    <li key={index} className="flex items-baseline gap-3">
                      <span className="text-lg font-bold leading-none" style={{ color: customColors.accent }}>
                        •
                      </span>
                      <span className="leading-relaxed" style={{ color: customColors.body }}>
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <div
                className="rounded-xl p-6"
                style={{
                  background: `linear-gradient(to bottom, ${customColors.secondaryBg}, ${customColors.secondaryBg}dd)`,
                }}
              >
                <h3 className="font-grotesk font-semibold text-lg mb-3 flex items-center gap-2" style={{ color: customColors.heading }}>
                  <CursorArrowRaysIcon className="w-6 h-6" style={{ color: customColors.accent }} />
                  Impact
                </h3>
                <ul className="space-y-3 text-sm">
                  {['All users could complete booking flow', 'Keyboard navigation fully functional', 'Staff could update content without developer help'].map(
                    (item, index) => (
                      <li key={index} className="flex items-baseline gap-3">
                        <span className="text-lg font-bold leading-none" style={{ color: customColors.accent }}>
                          •
                        </span>
                        <span className="leading-relaxed" style={{ color: customColors.body }}>
                          {item}
                        </span>
                      </li>
                    )
                  )}
                </ul>
              </div>
            </div>
          </div>

          {/* Key Iteration */}
          <div
            className="rounded-xl p-8 mt-12"
            style={{
              background: `linear-gradient(to bottom, ${customColors.lightBeige}, ${customColors.lightBeige}dd)`,
            }}
          >
            <h3 className="font-grotesk font-semibold text-xl mb-4" style={{ color: customColors.heading }}>
              Key Iteration: Mobile Navigation
            </h3>
            <p className="text-sm mb-4 leading-relaxed" style={{ color: customColors.body }}>
              Initially, I placed the phone number and booking button at the top of the navigation. Testing revealed this created a "fast food chain" feeling
              and caused confusion.
            </p>
            <p className="text-sm mb-4 leading-relaxed" style={{ color: customColors.body }}>
              Moving these elements into the dropdown menu resulted in clearer visual hierarchy, a more intuitive flow, and better focus on navigation.
            </p>
            <p className="text-sm italic font-medium" style={{ color: customColors.accentDark }}>
              Lesson learned: Sometimes less visible doesn't mean less accessible. Context and clarity matter more than prominence.
            </p>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="max-w-5xl mx-auto px-6">
        <div style={{ height: '1px', backgroundColor: customColors.border }}></div>
      </div>

      {/* Reflection - Large Quote Block */}
      <section className="py-32" style={{ backgroundColor: customColors.whiteBg }}>
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-xs uppercase tracking-wider mb-4 block font-semibold" style={{ color: customColors.accentDark }}>
              Reflections
            </span>
            <h2 className="font-grotesk font-semibold text-4xl md:text-5xl mb-6 leading-tight" style={{ color: customColors.heading }}>
              What I learned
            </h2>
            <p className="text-lg max-w-2xl mx-auto leading-relaxed mb-12" style={{ color: customColors.muted }}>
              Reflections on the design process and key learnings from this project.
            </p>
          </div>

          {/* Large Quote Block */}
          <div
            className="rounded-2xl p-12 md:p-16 mb-12"
            style={{
              background: `linear-gradient(to bottom, ${customColors.lightBeige}, ${customColors.lightBeige}dd)`,
              boxShadow: 'inset 0 2px 8px rgba(0, 0, 0, 0.03)',
              borderLeft: '3px solid #ff6b2c',
            }}
          >
            <p className="text-3xl md:text-4xl font-medium leading-relaxed text-center" style={{ color: customColors.heading, letterSpacing: '-0.02em' }}>
              "The best designs solve problems you didn't know existed until users showed you."
            </p>
          </div>

          <div className="space-y-8 max-w-3xl mx-auto">
            {[
              {
                title: 'Accessibility opens doors',
                desc: 'Building for accessibility from the start made the site better for everyone, not just users with disabilities. Clear navigation and semantic HTML improved the entire experience.',
              },
              {
                title: 'User testing catches blind spots',
                desc: "What seemed clear to me wasn't always clear to users. Testing revealed issues I would have missed, and their feedback shaped better solutions.",
              },
              {
                title: 'Mobile-first matters',
                desc: 'Most users were browsing on mobile. Designing for small screens first ensured the experience worked where it mattered most.',
              },
            ].map((item, index) => (
              <div
                key={index}
                className="rounded-lg p-8"
                style={{
                  background: `linear-gradient(to bottom, ${customColors.secondaryBg}, ${customColors.secondaryBg}dd)`,
                }}
              >
                <h3 className="font-grotesk font-semibold text-lg mb-3" style={{ color: customColors.heading }}>
                  {item.title}
                </h3>
                <p className="leading-relaxed" style={{ color: customColors.body }}>
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Thanks Section - Editorial Style */}
      <section ref={thanksSectionRef} className="thanks-section" style={{ backgroundColor: customColors.secondaryBg }}>
        <div className="content max-w-5xl mx-auto px-6">
          <h2 className="font-grotesk font-semibold mb-4" style={{ color: customColors.heading }}>
            Thanks for reading!
          </h2>
          <p className="mb-12" style={{ color: customColors.body }}>
            I hope you enjoyed learning about Restaurang Apotek.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="/case-studies/loggi"
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
              <span className="relative z-10 flex items-center gap-2">
                Next Project: Loggi
                <ArrowRight className="h-5 w-5" />
              </span>
            </Link>
            <Link
              href="/#projects"
              className="text-base px-10 py-4 font-bold transition-all duration-300 hover:scale-105 relative overflow-hidden group"
              style={{
                backgroundColor: 'transparent',
                color: customColors.heading,
                borderRadius: '1.5rem',
                border: `2px solid ${customColors.border}`,
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                textDecoration: 'none',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = customColors.whiteBg;
                e.currentTarget.style.borderColor = customColors.border;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'transparent';
                e.currentTarget.style.borderColor = customColors.border;
              }}
            >
              <span className="relative z-10">All Projects</span>
            </Link>
          </div>
        </div>
        <style jsx>{`
          .thanks-section {
            position: relative;
            overflow: hidden;
            padding: clamp(140px, 18vh, 220px) 0;
            background-color: ${customColors.secondaryBg};
          }

          .thanks-section .content {
            position: relative;
            z-index: 1;
            text-align: center;
            max-width: 960px;
            margin: 0 auto;
            opacity: 1;
            transform: translateY(0);
          }

          .thanks-section h2 {
            font-family: 'Familjen Grotesk', sans-serif;
            color: ${customColors.heading};
            font-weight: 600;
            font-size: clamp(28px, 3vw, 44px);
            letter-spacing: -0.015em;
            margin-bottom: 16px;
          }

          .thanks-section p {
            font-family: 'Inter', sans-serif;
            color: ${customColors.body};
            font-size: 1.125rem;
            line-height: 1.7;
            margin-bottom: 48px;
          }

          .thanks-section::after {
            content: '';
            position: absolute;
            bottom: 0;
            left: 0;
            width: 100%;
            height: 1px;
            background: rgba(0, 0, 0, 0.05);
          }
        `}</style>
      </section>
    </article>
  );
}
