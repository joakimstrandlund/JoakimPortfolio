'use client';

import Image from 'next/image';
import Link from 'next/link';
import { MagnifyingGlassIcon, UsersIcon, BeakerIcon, CursorArrowRaysIcon, Squares2X2Icon, WrenchScrewdriverIcon } from '@heroicons/react/24/outline';
import SectionHeader from '../components/SectionHeader';

export default function About() {
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
      {/* Hero - White Background */}
      <section className="pt-24 pb-32 lg:pt-32 lg:pb-40" style={{ backgroundColor: customColors.whiteBg }}>
        <div className="max-w-5xl mx-auto px-4 lg:px-6">
          <div className="text-center mb-16">
            <span className="text-xs uppercase tracking-wider mb-6 block font-semibold" style={{ color: customColors.accentDark }}>
              About
            </span>
            <h1
              className="font-grotesk font-semibold text-5xl sm:text-6xl md:text-7xl tracking-tight mb-8 leading-tight"
              style={{ color: customColors.heading }}
            >
              Joakim Strandlund
            </h1>
            <p className="text-xl mb-4" style={{ color: customColors.muted }}>
              UI/UX Designer
            </p>
            <p className="text-lg max-w-2xl mx-auto leading-relaxed" style={{ color: customColors.body }}>
              I design digital products with a focus on clarity and intuitive flow. I explore ideas quickly using tools like Cursor and Lovable, then refine everything in Figma to build interfaces that feel effortless.
            </p>
            <p className="text-lg max-w-2xl mx-auto leading-relaxed mt-4" style={{ color: customColors.body }}>
              When I'm not designing, you'll probably find me skiing, training or exploring new restaurants.
            </p>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="max-w-5xl mx-auto px-4 lg:px-6">
        <div style={{ height: '1px', backgroundColor: customColors.border }}></div>
      </div>

      {/* Background - Split Layout */}
      <section className="py-24 lg:py-32" style={{ backgroundColor: customColors.whiteBg }}>
        <div className="max-w-5xl mx-auto px-4 lg:px-6">
          <div className="space-y-6 md:space-y-0 md:grid md:grid-cols-2 md:gap-16 items-center">
            <div>
              <SectionHeader
                label="Background"
                title="From sales to design"
                description={
                  <>
                    <p className="text-lg leading-relaxed">
                      I'm a UX designer with front-end skills and a background in sales as an account manager. This combination allows me to blend creativity
                      with structure, and to design with a deep understanding of both user needs and business goals.
                    </p>
                    <p className="text-lg leading-relaxed mt-6">
                      Working closely with developers and stakeholders taught me how to balance user needs, business goals, and technical constraints. I believe
                      the best products come from close collaboration and continuous learning.
                    </p>
                  </>
                }
                accentColor={customColors.accentDark}
                headingColor={customColors.heading}
                bodyColor={customColors.body}
                descriptionClassName="space-y-6 text-lg leading-relaxed"
                mobileSpacingClassName="mb-6"
                desktopSpacingClassName="md:mb-12"
                className="mb-6 md:mb-16"
                descriptionWidthClassName=""
                align="left"
              />
            </div>
            <div
              className="rounded-2xl p-7p md:p-12"
              style={{
                background: `linear-gradient(to bottom, ${customColors.lightBeige}, ${customColors.lightBeige}dd)`,
              }}
            >
              <div className="flex items-center gap-6 mb-6">
                <div className="w-40 h-40 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: customColors.whiteBg }}>
                  <Image src="/jocke-home.png" alt="Joakim Strandlund" width={160} height={160} className="w-full h-full object-cover rounded-full" />
                </div>
                <div>
                  <h3 className="font-grotesk font-semibold text-2xl mb-2" style={{ color: customColors.heading }}>
                    Joakim Strandlund
                  </h3>
                  <p className="text-base" style={{ color: customColors.body }}>
                    UI/UX Designer
                  </p>
                  <p className="text-sm mt-2" style={{ color: customColors.muted }}>
                    Based in Stockholm, Sweden
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="max-w-5xl mx-auto px-4 lg:px-6">
        <div style={{ height: '1px', backgroundColor: customColors.border }}></div>
      </div>

      {/* How I Work - Split Layout */}
      <section className="py-24 lg:py-32" style={{ backgroundColor: customColors.whiteBg }}>
        <div className="max-w-5xl mx-auto px-4 lg:px-6">
          <SectionHeader
            label="Approach"
            title="How I work"
            description="My design process is rooted in understanding users, collaborating closely, and building solutions that work for both people and business."
            accentColor={customColors.accentDark}
            headingColor={customColors.heading}
            bodyColor={customColors.body}
            descriptionClassName="text-lg leading-relaxed"
            mobileSpacingClassName="mb-6"
            className="mb-6 md:mb-16"
            align="center"
          />

          <div className="space-y-6 md:space-y-0 md:grid md:grid-cols-3 md:gap-8">
            <div
              className="rounded-xl p-5p md:p-8"
              style={{
                background: `linear-gradient(to bottom, ${customColors.secondaryBg}, ${customColors.secondaryBg}dd)`,
              }}
            >
              <h3 className="font-grotesk font-semibold text-xl mb-4 flex items-center gap-2" style={{ color: customColors.heading }}>
                <MagnifyingGlassIcon className="w-6 h-6" style={{ color: customColors.accent }} />
                User-centered
              </h3>
              <ul className="space-y-3 text-sm">
                {['Grounded in user needs through continuous qualitative and quantitative research.', 'Validate assumptions and drive decisions using research methods and data.', 'Designing inclusively with WCAG standards and diverse user needs in mind.'].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="text-lg font-bold leading-none" style={{ color: customColors.accent, marginTop: '2px' }}>
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
                <UsersIcon className="w-6 h-6" style={{ color: customColors.accent }} />
                Collaborative
              </h3>
              <ul className="space-y-3 text-sm">
                {['Partnership with Devs & Stakeholders to find technical feasibility and business value.', 'Optimising for impact by aligning user delight with measurable business outcomes.', 'Iterative mindset for continuous delivery, testing, and rapid adaptation to feedback.'].map(
                  (item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <span className="text-lg font-bold leading-none" style={{ color: customColors.accent, marginTop: '2px' }}>
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

            <div
              className="rounded-xl p-5p md:p-8"
              style={{
                background: `linear-gradient(to bottom, ${customColors.secondaryBg}, ${customColors.secondaryBg}dd)`,
              }}
            >
              <h3 className="font-grotesk font-semibold text-xl mb-4 flex items-center gap-2" style={{ color: customColors.heading }}>
                <WrenchScrewdriverIcon className="w-6 h-6" style={{ color: customColors.accent }} />
                Tools I use
              </h3>
              <ul className="space-y-3 text-sm">
                {['Cursor & Lovable to explore ideas and test flows fast', 'Figma for prototyping, creating final designs (layout, components, interaction details), and maintaining Design Systems including component libraries and design tokens.', 'Notion to organise insights, decisions and documentation'].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="text-lg font-bold leading-none" style={{ color: customColors.accent, marginTop: '2px' }}>
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

      {/* Skills & Tools - Grid Layout */}
      <section className="py-24 lg:py-32" style={{ backgroundColor: customColors.whiteBg }}>
        <div className="max-w-5xl mx-auto px-4 lg:px-6" data-footer-trigger>
          <SectionHeader
            label="Skills"
            title="What I bring"
            accentColor={customColors.accentDark}
            headingColor={customColors.heading}
            bodyColor={customColors.body}
            descriptionClassName="" // no description
            align="center"
            mobileAlign="center"
            mobileSpacingClassName="mb-6"
            className="mb-6 md:mb-16"
          />

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { icon: MagnifyingGlassIcon, title: 'User Research', description: 'Ask the right questions, uncover the real problem.' },
              { icon: CursorArrowRaysIcon, title: 'Interaction Design', description: 'Create flows that feel fast, logical and intuitive.' },
              { icon: BeakerIcon, title: 'Prototyping', description: 'Test assumptions early, iterate fast.' },
              { icon: Squares2X2Icon, title: 'Design Systems', description: 'Consistent, scalable interfaces that reduce friction.' },
            ].map((item, index) => {
              const IconComponent = item.icon;
              return (
                <div
                  key={index}
                  className="rounded-xl p-5p md:p-8 text-center"
                  style={{
                    background: `linear-gradient(to bottom, ${customColors.secondaryBg}, ${customColors.secondaryBg}dd)`,
                  }}
                >
                  <div className="flex justify-center mb-4">
                    <IconComponent className="w-10 h-10" style={{ color: customColors.accent }} />
                  </div>
                  <div className="text-base font-grotesk font-semibold mb-2" style={{ color: customColors.heading }}>
                    {item.title}
                  </div>
                  <div className="text-sm leading-relaxed" style={{ color: customColors.body }}>
                    {item.description}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </article>
  );
}
