'use client';

import Image from 'next/image';
import Link from 'next/link';
import { MagnifyingGlassIcon, UsersIcon, PaintBrushIcon, BeakerIcon, CodeBracketIcon, DevicePhoneMobileIcon } from '@heroicons/react/24/outline';

export default function Page() {
  // Dark theme colors
  const customColors = {
    // Background Colors
    primaryBg: '#0C0D0F',
    secondaryBg: '#141518',
    whiteBg: '#0C0D0F', // Use primaryBg for dark theme
    lightBeige: '#141518', // Use secondaryBg for dark theme

    // Accent Colors
    accent: '#ff6b2c',
    accentHover: '#e55a1f',
    accentDark: '#ff6b2c', // Use accent color for dark theme

    // Text Colors
    heading: '#EBEBEB',
    body: '#A5A5A5',
    muted: '#9a9a9f',

    // Border Colors
    border: '#2a2b2e',
    borderHover: '#3a3b3e',
  };

  return (
    <article style={{ backgroundColor: customColors.primaryBg, minHeight: '100vh' }}>
      {/* Hero - Dark Background */}
      <section className="pt-32 pb-40" style={{ backgroundColor: customColors.primaryBg }}>
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-xs uppercase tracking-wider mb-6 block font-semibold" style={{ color: customColors.accent }}>
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
              I design digital products and do a bit of low vibe coding on the side. When I'm not designing, you'll probably find me skiing, training, or
              exploring new restaurants.
            </p>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="max-w-5xl mx-auto px-6">
        <div style={{ height: '1px', backgroundColor: customColors.border }}></div>
      </div>

      {/* Background - Split Layout */}
      <section className="py-32" style={{ backgroundColor: customColors.primaryBg }}>
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-xs uppercase tracking-wider mb-4 block font-semibold" style={{ color: customColors.accent }}>
                Background
              </span>
              <h2 className="font-grotesk font-semibold text-4xl md:text-5xl mb-8 leading-tight" style={{ color: customColors.heading }}>
                From sales to design
              </h2>
              <div className="space-y-6" style={{ color: customColors.body }}>
                <p className="text-lg leading-relaxed">
                  I'm a UX designer with front-end skills and a background in sales as an account manager. This combination allows me to blend creativity with
                  structure, and to design with a deep understanding of both user needs and business goals.
                </p>
                <p className="text-lg leading-relaxed">
                  Working closely with developers and stakeholders taught me how to balance user needs, business goals, and technical constraints. I believe the
                  best products come from close collaboration and continuous learning.
                </p>
              </div>
            </div>
            <div
              className="rounded-2xl p-8 md:p-12"
              style={{
                background: `linear-gradient(to bottom, ${customColors.secondaryBg}, ${customColors.secondaryBg}dd)`,
              }}
            >
              <div className="flex items-center gap-6 mb-6">
                <div className="w-40 h-40 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: customColors.primaryBg }}>
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
      <div className="max-w-5xl mx-auto px-6">
        <div style={{ height: '1px', backgroundColor: customColors.border }}></div>
      </div>

      {/* How I Work - Split Layout */}
      <section className="py-32" style={{ backgroundColor: customColors.primaryBg }}>
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-xs uppercase tracking-wider mb-4 block font-semibold" style={{ color: customColors.accent }}>
              Approach
            </span>
            <h2 className="font-grotesk font-semibold text-4xl md:text-5xl mb-8 leading-tight" style={{ color: customColors.heading }}>
              How I work
            </h2>
            <p className="text-lg max-w-2xl mx-auto leading-relaxed" style={{ color: customColors.muted }}>
              My design process is rooted in understanding users, collaborating closely, and building solutions that work for both people and business.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div
              className="rounded-xl p-8"
              style={{
                background: `linear-gradient(to bottom, ${customColors.secondaryBg}, ${customColors.secondaryBg}dd)`,
              }}
            >
              <h3 className="font-grotesk font-semibold text-xl mb-4 flex items-center gap-2" style={{ color: customColors.heading }}>
                <MagnifyingGlassIcon className="w-6 h-6" style={{ color: customColors.accent }} />
                User-centered
              </h3>
              <ul className="space-y-3 text-sm">
                {['Focus on understanding users before designing solutions', 'Research-driven decisions', 'Accessibility as a priority'].map((item, index) => (
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
                <UsersIcon className="w-6 h-6" style={{ color: customColors.accent }} />
                Collaborative
              </h3>
              <ul className="space-y-3 text-sm">
                {['Close collaboration with developers and stakeholders', 'Balancing user needs with business goals', 'Continuous learning and iteration'].map(
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

      {/* Skills & Tools - Grid Layout */}
      <section className="py-32" style={{ backgroundColor: customColors.primaryBg }}>
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-xs uppercase tracking-wider mb-4 block font-semibold" style={{ color: customColors.accent }}>
              Skills
            </span>
            <h2 className="font-grotesk font-semibold text-4xl md:text-5xl mb-8 leading-tight" style={{ color: customColors.heading }}>
              What I bring
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { icon: PaintBrushIcon, title: 'UI Design' },
              { icon: BeakerIcon, title: 'UX Research' },
              { icon: CodeBracketIcon, title: 'Front-end' },
              { icon: DevicePhoneMobileIcon, title: 'Mobile' },
            ].map((item, index) => {
              const IconComponent = item.icon;
              return (
                <div
                  key={index}
                  className="rounded-xl p-8 text-center"
                  style={{
                    background: `linear-gradient(to bottom, ${customColors.secondaryBg}, ${customColors.secondaryBg}dd)`,
                  }}
                >
                  <div className="flex justify-center mb-4">
                    <IconComponent className="w-10 h-10" style={{ color: customColors.accent }} />
                  </div>
                  <div className="text-sm font-grotesk font-semibold" style={{ color: customColors.heading }}>
                    {item.title}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="max-w-5xl mx-auto px-6">
        <div style={{ height: '1px', backgroundColor: customColors.border }}></div>
      </div>

      {/* Contact CTA - Full Width */}
      <section className="py-32" style={{ backgroundColor: customColors.primaryBg }}>
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-grotesk font-semibold text-4xl md:text-5xl mb-8 leading-tight" style={{ color: customColors.heading }}>
              Looking for a UX/UI Designer?
            </h2>
            <p className="text-lg max-w-2xl mx-auto leading-relaxed mb-8" style={{ color: customColors.body }}>
              I'm available for new projects, remote or on-site. Let's connect!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="mailto:joakimstrandlund@gmail.com"
                className="inline-flex items-center px-10 py-5 font-bold text-lg transition-all duration-300 hover:scale-105"
                style={{
                  background: `linear-gradient(180deg, ${customColors.accent} 0%, ${customColors.accentHover} 100%)`,
                  color: '#000000',
                  borderRadius: '1.5rem',
                  boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
                  border: 'none',
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
                Get in touch
              </a>
              <a
                href="https://www.linkedin.com/in/joakim-strandlund-14717817a/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-10 py-5 font-semibold text-lg transition-all duration-300 hover:scale-105"
                style={{
                  backgroundColor: 'transparent',
                  color: customColors.heading,
                  borderRadius: '1.5rem',
                  border: `2px solid ${customColors.border}`,
                  textDecoration: 'none',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = customColors.secondaryBg;
                  e.currentTarget.style.borderColor = customColors.borderHover;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'transparent';
                  e.currentTarget.style.borderColor = customColors.border;
                }}
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </section>
    </article>
  );
}
