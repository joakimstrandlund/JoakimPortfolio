'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { ExclamationTriangleIcon, CursorArrowRaysIcon, CheckCircleIcon } from '@heroicons/react/24/outline';
import SectionHeader from '../../components/SectionHeader';

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
    secondaryBg: '#F4F4F4',
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
      <section className="pt-24 pb-32 lg:pt-32 lg:pb-40" style={{ backgroundColor: customColors.whiteBg }}>
        <div className="max-w-5xl mx-auto px-4 lg:px-6">
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
              2024 · UI/UX · Web · Restaurant
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
      <div className="max-w-5xl mx-auto px-4 lg:px-6">
        <div style={{ height: '1px', backgroundColor: customColors.border }}></div>
      </div>

      {/* Challenge - Split Layout */}
      <section className="py-24 lg:py-32" style={{ backgroundColor: customColors.whiteBg }}>
        <div className="max-w-5xl mx-auto px-4 lg:px-6">
          <div className="md:grid md:grid-cols-2 md:gap-16 md:items-start">
            <div>
              <SectionHeader
                label="The Challenge"
                title="A beloved restaurant with a broken website"
                description={
                  <div className="space-y-6">
                    <p className="text-lg leading-relaxed">
                      Restaurang Apotek is a locally renowned restaurant known for its bold interior and modern take on traditional dining. But their website?
                      It didn't match.
                    </p>
                    <p className="text-lg leading-relaxed">
                      It lacked accessibility, was difficult to navigate especially on mobile, and couldn't be updated without technical help. Menus were buried
                      in PDFs, the booking flow was confusing, and the design felt disconnected from the restaurant's actual brand.
                    </p>
                  </div>
                }
                accentColor={customColors.accentDark}
                headingColor={customColors.heading}
                bodyColor={customColors.body}
                align="left"
                descriptionWidthClassName=""
                className="mb-6 md:mb-16"
                mobileSpacingClassName="mb-6"
              />
            </div>
            <div
              className="rounded-2xl p-7p md:p-12 mb-8 md:mb-0"
              style={{
                background: `linear-gradient(to bottom, ${customColors.lightBeige}, ${customColors.lightBeige}dd)`,
              }}
            >
              <p className="text-base leading-relaxed" style={{ color: customColors.body }}>
                <span className="font-semibold" style={{ color: customColors.heading }}>
                  The challenge:{' '}
                </span>
                How might we create an online experience that matches the restaurant's atmosphere while staying accessible, easy to update, and
                conversion-focused?
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="max-w-5xl mx-auto px-4 lg:px-6">
        <div style={{ height: '1px', backgroundColor: customColors.border }}></div>
      </div>

      {/* Discovery - Full Width Centered Text */}
      <section className="py-24 lg:py-32" style={{ backgroundColor: customColors.whiteBg }}>
        <div className="max-w-5xl mx-auto px-4 lg:px-6">
          <SectionHeader
            label="Discovery"
            title="Understanding what was broken"
            description="I started by conducting usability reviews, user interviews, and accessibility audits. The goal was to uncover the biggest pain points and understand what users actually needed."
            accentColor={customColors.accentDark}
            headingColor={customColors.heading}
            bodyColor={customColors.body}
            align="center"
            mobileSpacingClassName="mb-6"
            className="mb-6 md:mb-16"
          />

          <div className="space-y-6 md:space-y-0 md:grid md:grid-cols-2 md:gap-8">
            <div
              className="rounded-xl p-5p md:p-8"
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
              className="rounded-xl p-5p md:p-8"
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
      <div className="max-w-5xl mx-auto px-4 lg:px-6">
        <div style={{ height: '1px', backgroundColor: customColors.border }}></div>
      </div>

      {/* Solution - Landing Page - Split Layout */}
      <section className="py-24 lg:py-32" style={{ backgroundColor: customColors.whiteBg }}>
        <div className="max-w-5xl mx-auto px-4 lg:px-6">
          <SectionHeader
            label="Solution"
            title="A welcoming first impression"
            description="The landing page needed to immediately communicate the restaurant's character while making it easy to find key information like hours, location, and booking."
            accentColor={customColors.accentDark}
            headingColor={customColors.heading}
            bodyColor={customColors.body}
            align="center"
            mobileSpacingClassName="mb-6"
            className="mb-6 md:mb-16"
          />

          <div className="space-y-6 md:space-y-0 md:grid md:grid-cols-2 md:gap-16 md:items-center">
            <div className="flex justify-center md:justify-center md:items-center">
              <Image
                src="/Rstaurang apotek - landingpage phone.png"
                alt="Restaurang Apotek landing page mobile view"
                width={300}
                height={600}
                className="w-full max-w-[240px] h-auto"
              />
            </div>
            <div className="space-y-4 md:flex md:flex-col md:justify-center md:items-start text-left">
              <h3 className="font-grotesk font-semibold text-2xl" style={{ color: customColors.heading }}>
                Landing Page
              </h3>
              <p className="text-base leading-relaxed" style={{ color: customColors.body }}>
                Clean hero section with immediate access to booking and essential information.
              </p>
              <ul className="space-y-3 text-sm">
                {[
                  'Clear visual hierarchy guiding users to key actions',
                  'Mobile-first design with touch-friendly elements',
                  "Bold imagery reflecting the restaurant's personality",
                ].map((item) => (
                  <li key={item} className="flex items-baseline gap-3">
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
      <div className="max-w-5xl mx-auto px-4 lg:px-6">
        <div style={{ height: '1px', backgroundColor: customColors.border }}></div>
      </div>

      {/* Menus - Grid Layout */}
      <section className="py-24 lg:py-32" style={{ backgroundColor: customColors.whiteBg }}>
        <div className="max-w-5xl mx-auto px-4 lg:px-6">
          <SectionHeader
            label="Accessibility"
            title="Menus that work for everyone"
            description="The old PDF menus were impossible for screen readers to parse. I redesigned them as web-native content with clear typography, pricing, and categories."
            accentColor={customColors.accentDark}
            headingColor={customColors.heading}
            bodyColor={customColors.body}
            align="center"
            mobileSpacingClassName="mb-6"
            className="mb-6 md:mb-16"
          />

          <div className="space-y-6 md:space-y-0 md:grid md:grid-cols-2 md:gap-8 md:items-center">
            {[
              {
                image: '/Rstaurang apotek - foodmeny phone.png',
                title: 'Food Menu',
                text: 'Clean layout with clear categories, pricing, and descriptions.',
              },
              {
                image: '/Rstaurang apotek - cocktail phone.png',
                title: 'Cocktail Menu',
                text: 'Visual menu design highlighting drinks with proper categorization.',
              },
            ].map(({ image, title, text }) => (
              <div key={title} className="text-center md:text-center">
                <div className="mb-6 flex justify-center">
                  <Image src={image} alt={title} width={300} height={600} className="w-full max-w-[240px] mx-auto h-auto" />
                </div>
                <h3 className="font-grotesk font-semibold text-xl mb-2" style={{ color: customColors.heading }}>
                  {title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: customColors.body }}>
                  {text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="max-w-5xl mx-auto px-4 lg:px-6">
        <div style={{ height: '1px', backgroundColor: customColors.border }}></div>
      </div>

      {/* Navigation - Split Layout (Reversed) */}
      <section className="py-24 lg:py-32" style={{ backgroundColor: customColors.whiteBg }}>
        <div className="max-w-5xl mx-auto px-4 lg:px-6">
          <div className="space-y-6 md:space-y-0 md:grid md:grid-cols-2 md:gap-12 md:items-center">
            <div className="md:order-2 flex justify-center">
              <Image
                src="/restaurang menuOpen.png"
                alt="Restaurang Apotek mobile navigation menu"
                width={300}
                height={600}
                className="w-full max-w-[240px] h-auto"
              />
            </div>
            <div className="md:order-1">
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
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="max-w-5xl mx-auto px-4 lg:px-6">
        <div style={{ height: '1px', backgroundColor: customColors.border }}></div>
      </div>

      {/* Gallery - Split Layout */}
      <section className="py-24 lg:py-32" style={{ backgroundColor: customColors.whiteBg }}>
        <div className="max-w-5xl mx-auto px-4 lg:px-6">
          <div className="space-y-6 md:space-y-0 md:grid md:grid-cols-2 md:gap-12 md:items-center">
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
                Modern gallery layout showcasing dishes with responsive image handling and clear labeling.
              </p>
              <ul className="space-y-3 text-sm">
                {[
                  'Full-width layout that adapts beautifully on mobile',
                  'Soft hover states that match the brand’s tone',
                  'Lazy-loaded images for performance',
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
      <div className="max-w-5xl mx-auto px-4 lg:px-6">
        <div style={{ height: '1px', backgroundColor: customColors.border }}></div>
      </div>

      {/* Footer Section - Split Layout (Reversed) */}
      <section className="py-24 lg:py-32" style={{ backgroundColor: customColors.whiteBg }}>
        <div className="max-w-5xl mx-auto px-4 lg:px-6">
          <div className="space-y-6 md:space-y-0 md:grid md:grid-cols-2 md:gap-12 md:items-center">
            <div className="md:order-2 flex justify-center">
              <Image
                src="/Rstaurang apotek - footer phone.png"
                alt="Restaurang Apotek footer section mobile view"
                width={300}
                height={600}
                className="w-full max-w-[240px] h-auto"
              />
            </div>
            <div className="md:order-1">
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
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="max-w-5xl mx-auto px-4 lg:px-6">
        <div style={{ height: '1px', backgroundColor: customColors.border }}></div>
      </div>

      {/* Validation - Split Layout */}
      <section className="py-24 lg:py-32" style={{ backgroundColor: customColors.whiteBg }}>
        <div className="max-w-5xl mx-auto px-4 lg:px-6">
          <SectionHeader
            label="Validation"
            title="Testing and refining"
            description="I tested the redesign with users and iterated based on feedback. Some decisions needed adjusting."
            accentColor={customColors.accentDark}
            headingColor={customColors.heading}
            bodyColor={customColors.body}
            align="left"
            mobileSpacingClassName="mb-6"
            className="mb-6 md:mb-16"
          />

          <div className="grid gap-6 md:grid-cols-2 md:gap-8">
            {[
              {
                icon: CheckCircleIcon,
                title: 'What worked',
                points: [
                  'Booking button became immediately findable',
                  'Navigation clarity improved significantly',
                  'Users described design as "clean and professional"',
                ],
              },
              {
                icon: CursorArrowRaysIcon,
                title: 'Impact',
                points: ['All users could complete booking flow', 'Keyboard navigation fully functional', 'Staff could update content without developer help'],
              },
            ].map(({ icon: IconComponent, title, points }) => (
              <div
                key={title}
                className="rounded-xl p-6 md:p-8"
                style={{
                  background: `linear-gradient(to bottom, ${customColors.secondaryBg}, ${customColors.secondaryBg}dd)`,
                }}
              >
                <h3 className="font-grotesk font-semibold text-lg mb-3 flex items-center gap-2" style={{ color: customColors.heading }}>
                  <IconComponent className="w-6 h-6" style={{ color: customColors.accent }} />
                  {title}
                </h3>
                <ul className="space-y-3 text-sm">
                  {points.map((item) => (
                    <li key={item} className="flex items-baseline gap-3">
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
            ))}
          </div>

          <div
            className="rounded-xl p-6 md:p-8 mt-6 md:mt-8"
            style={{
              background: `linear-gradient(to bottom, ${customColors.lightBeige}, ${customColors.lightBeige}dd)`,
            }}
          >
            <h3 className="font-grotesk font-semibold text-lg mb-3" style={{ color: customColors.heading }}>
              Key Insight: Mobile Navigation
            </h3>
            <p className="text-sm leading-relaxed mb-4" style={{ color: customColors.body }}>
              Initially, the phone number and booking button sat at the very top of the navigation. Testing showed it felt like a "fast food chain" homepage and
              created confusion.
            </p>
            <p className="text-sm leading-relaxed mb-4" style={{ color: customColors.body }}>
              Moving these elements into the dropdown menu clarified the hierarchy, focused attention on primary navigation, and kept critical actions easy to
              find.
            </p>
            <p className="text-sm italic" style={{ color: customColors.accentDark }}>
              Lesson learned: The most prominent placement isn’t always the most usable—context and flow matter.
            </p>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="max-w-5xl mx-auto px-4 lg:px-6">
        <div style={{ height: '1px', backgroundColor: customColors.border }}></div>
      </div>

      {/* Reflection - Large Quote Block */}
      <section className="py-24 lg:py-32" style={{ backgroundColor: customColors.whiteBg }}>
        <div className="max-w-5xl mx-auto px-4 lg:px-6">
          <SectionHeader
            label="Reflections"
            title="What I learned"
            description="Reflections on the design process and key learnings from this project."
            accentColor={customColors.accentDark}
            headingColor={customColors.heading}
            bodyColor={customColors.body}
            align="center"
          />

          {/* Large Quote Block */}
          <div
            className="rounded-2xl p-7p md:p-16 mb-8 md:mb-12"
            style={{
              background: `linear-gradient(to bottom, ${customColors.lightBeige}, ${customColors.lightBeige}dd)`,
              boxShadow: 'inset 0 2px 8px rgba(0, 0, 0, 0.03)',
              borderLeft: '3px solid #ff6b2c',
            }}
          >
            <p className="text-xl md:text-2xl font-medium leading-relaxed text-center" style={{ color: customColors.heading, letterSpacing: '-0.02em' }}>
              "The more we aligned the visual experience with the physical restaurant, the more the digital experience felt authentic and trustworthy."
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
                className="rounded-lg p-5p md:p-8"
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
        <div className="content max-w-5xl mx-auto px-4 lg:px-6">
          <h2 className="font-grotesk font-semibold mb-4" style={{ color: customColors.heading }}>
            Thanks for reading!
          </h2>
          <p className="mb-12" style={{ color: customColors.body }}>
            Up next: See how I approached Loggi.
          </p>
          <div className="flex justify-center items-center">
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
                View Loggi Case Study
                <ArrowRight className="h-5 w-5" />
              </span>
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
