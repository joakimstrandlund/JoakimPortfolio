'use client';

import Image from 'next/image';
import Link from 'next/link';
import {
  UserIcon,
  SignalIcon,
  BoltIcon,
  ShieldCheckIcon,
  CursorArrowRaysIcon,
  LightBulbIcon,
  HeartIcon,
  SparklesIcon,
  DevicePhoneMobileIcon,
  RectangleStackIcon,
  Square3Stack3DIcon,
  SwatchIcon,
  ArrowPathIcon,
  ExclamationTriangleIcon,
  ChartBarIcon,
} from '@heroicons/react/24/outline';

export default function Page() {
  // Dark theme colors
  const customColors = {
    // Background Colors
    primaryBg: '#0C0D0F',
    secondaryBg: '#141518',
    darkBg: '#0C0D0F',
    whiteBg: '#0C0D0F', // Use primaryBg for dark theme
    lightBeige: '#141518', // Use secondaryBg for dark theme
    mutedGreen: '#A8B5A0',

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
      {/* Hero - Dark Background, Large Image */}
      <section className="pt-32 pb-40" style={{ backgroundColor: customColors.primaryBg }}>
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-xs uppercase tracking-wider mb-6 block font-semibold" style={{ color: customColors.accent }}>
              Case Study
            </span>
            <h1
              className="font-grotesk font-semibold text-5xl sm:text-6xl md:text-7xl tracking-tight mb-8 leading-tight"
              style={{ color: customColors.heading }}
            >
              Treebula Forest Monitoring
            </h1>
            <p className="text-xl mb-4" style={{ color: customColors.muted }}>
              2025 · Product · Mobile · AI/Satellite
            </p>
            <p className="text-lg max-w-2xl mx-auto leading-relaxed" style={{ color: customColors.body }}>
              Designing a mobile-first service that helps forest owners monitor their property remotely using AI and satellite data.
            </p>
          </div>

          <div
            className="rounded-2xl overflow-hidden relative"
            style={{
              boxShadow: '0 20px 60px rgba(0, 0, 0, 0.08)',
              background: 'linear-gradient(180deg, #1a2e1f 0%, #2a3d2a 25%, #3a4d3a 50%, #2d3d2d 75%, #1f2e1f 100%)',
              position: 'relative',
            }}
          >
            {/* Misty dawn overlay - soft and elegant */}
            <div
              className="absolute inset-0"
              style={{
                background:
                  'linear-gradient(180deg, rgba(168, 181, 160, 0.15) 0%, rgba(168, 181, 160, 0.08) 30%, rgba(168, 181, 160, 0.12) 60%, rgba(168, 181, 160, 0.18) 100%)',
              }}
            />
            {/* Depth and richness - soft organic shapes */}
            <div
              className="absolute inset-0 opacity-20"
              style={{
                backgroundImage: `radial-gradient(ellipse 80% 50% at 30% 20%, rgba(168, 181, 160, 0.3) 0%, transparent 70%),
                                  radial-gradient(ellipse 60% 40% at 70% 80%, rgba(139, 158, 130, 0.25) 0%, transparent 70%),
                                  radial-gradient(ellipse 50% 60% at 50% 50%, rgba(118, 138, 108, 0.2) 0%, transparent 80%)`,
                backgroundSize: '100% 100%, 100% 100%, 100% 100%',
                backgroundPosition: '0% 0%, 100% 100%, 50% 50%',
                mixBlendMode: 'soft-light',
              }}
            />
            {/* Subtle mist texture */}
            <div
              className="absolute inset-0 opacity-10"
              style={{
                backgroundImage: `repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(168, 181, 160, 0.03) 2px, rgba(168, 181, 160, 0.03) 4px),
                                  repeating-linear-gradient(90deg, transparent, transparent 2px, rgba(139, 158, 130, 0.02) 2px, rgba(139, 158, 130, 0.02) 4px)`,
              }}
            />
            {/* Hero image */}
            <div className="relative z-10">
              <Image
                src="/Treebula - hero section.png"
                alt="Treebula forest monitoring app overview"
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

      {/* Challenge - Split Layout (Text Left, Image/Stat Right) */}
      <section className="py-32" style={{ backgroundColor: customColors.primaryBg }}>
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-xs uppercase tracking-wider mb-4 block font-semibold" style={{ color: customColors.accent }}>
                The Challenge
              </span>
              <h2 className="font-grotesk font-semibold text-4xl md:text-5xl mb-8 leading-tight" style={{ color: customColors.heading }}>
                Distance creates worry
              </h2>
              <div className="space-y-6" style={{ color: customColors.body }}>
                <p className="text-lg leading-relaxed">
                  Many forest owners live far from their property. They worry about storm damage, bark beetle attacks, and other risks but have no easy way to
                  monitor what's happening.
                </p>
                <p className="leading-relaxed">
                  Traditional solutions require physical visits or expensive consultants. By the time damage is discovered, it's often too late.
                </p>
              </div>
            </div>
            <div
              className="rounded-2xl p-8 md:p-12"
              style={{
                background: `linear-gradient(to bottom, ${customColors.secondaryBg}, ${customColors.secondaryBg}dd)`,
              }}
            >
              <p className="text-base leading-relaxed mb-4" style={{ color: customColors.body }}>
                <span className="font-semibold" style={{ color: customColors.heading }}>
                  The challenge:{' '}
                </span>
                How might we help forest owners feel secure and informed about their property, even from a distance, without overwhelming them with technical
                complexity?
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="max-w-5xl mx-auto px-6">
        <div style={{ height: '1px', backgroundColor: customColors.border }}></div>
      </div>

      {/* Target Users - Dark Background, Icon Row */}
      <section className="py-32" style={{ backgroundColor: customColors.primaryBg }}>
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-xs uppercase tracking-wider mb-4 block font-semibold" style={{ color: customColors.accent }}>
              Target Users
            </span>
            <h2 className="font-grotesk font-semibold text-4xl md:text-5xl mb-8 leading-tight" style={{ color: customColors.heading }}>
              Designing for forest owners
            </h2>
            <p className="text-lg max-w-2xl mx-auto leading-relaxed" style={{ color: customColors.body }}>
              Our target group is often engaged but not always technically savvy. This made clarity, simplicity, and accessibility crucial in every design
              decision.
            </p>
          </div>

          <div
            className="rounded-2xl p-8 md:p-12 mb-12"
            style={{
              background: `linear-gradient(to bottom, ${customColors.secondaryBg}, ${customColors.secondaryBg}dd)`,
            }}
          >
            <div className="flex items-center gap-6 mb-6">
              <div className="w-20 h-20 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: customColors.primaryBg }}>
                <UserIcon className="w-10 h-10" style={{ color: customColors.accent }} />
              </div>
              <div>
                <h3 className="font-grotesk font-semibold text-2xl mb-2" style={{ color: customColors.heading }}>
                  Private forest owners
                </h3>
                <p style={{ color: customColors.muted }}>Age group: 55–80 years</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { icon: SignalIcon, text: 'Remote monitoring' },
              { icon: BoltIcon, text: 'Quick updates' },
              { icon: ShieldCheckIcon, text: 'Security' },
              { icon: CursorArrowRaysIcon, text: 'Simplicity' },
            ].map((item, index) => {
              const IconComponent = item.icon;
              if (!IconComponent) return null;
              return (
                <div
                  key={index}
                  className="rounded-xl p-6 text-center"
                  style={{
                    background: `linear-gradient(to bottom, ${customColors.secondaryBg}, ${customColors.secondaryBg}dd)`,
                  }}
                >
                  <div className="flex justify-center mb-3">
                    <IconComponent className="w-8 h-8" style={{ color: customColors.accent }} />
                  </div>
                  <div className="text-sm font-grotesk font-semibold" style={{ color: customColors.heading }}>
                    {item.text}
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

      {/* Discovery / Insights - Full Width Centered Text */}
      <section className="py-32" style={{ backgroundColor: customColors.primaryBg }}>
        <div className="max-w-5xl mx-auto px-6">
          <span className="text-xs uppercase tracking-wider mb-4 block font-semibold text-center" style={{ color: customColors.accent }}>
            Discovery
          </span>
          <h2 className="font-grotesk font-semibold text-4xl md:text-5xl mb-12 text-center leading-tight" style={{ color: customColors.heading }}>
            Building on internal expertise
          </h2>

          <div className="space-y-8 mb-16" style={{ color: '#6b6b6b' }}>
            <p className="text-lg leading-relaxed">
              Unlike traditional UX projects with formal user interviews, we built this service on internal expertise and long industry experience. Many of our
              stakeholders and team members are forest owners themselves.
            </p>
            <p className="text-lg leading-relaxed">
              Through structured workshops, ongoing discussions, and joint decisions, I gained deep knowledge of the target group's needs, daily life, and
              challenges. This made it possible to quickly test ideas, iterate, and ensure every function created real value.
            </p>
          </div>

          {/* Subtle divider with mutedGreen accent */}
          <div className="flex items-center gap-4 mb-12">
            <div style={{ flex: 1, height: '1px', backgroundColor: customColors.border }}></div>
            <div style={{ width: '4px', height: '4px', borderRadius: '50%', backgroundColor: customColors.mutedGreen }}></div>
            <div style={{ flex: 1, height: '1px', backgroundColor: customColors.border }}></div>
          </div>

          <div>
            <h3 className="font-grotesk font-semibold text-2xl mb-8" style={{ color: customColors.heading }}>
              Key Insights
            </h3>
            <ul className="space-y-6">
              {[
                "Distance creates worry – Forest owners feel powerless when they don't know what's happening on their property",
                'Time-critical information – Damage is often discovered too late. Real-time updates are essential',
                'Need for simplicity – The target group is older and not technically savvy. The interface must be clear and safe',
                'Local and relevant data – Users want specific information about their own property, not general forestry data',
              ].map((insight, index) => (
                <li key={index} className="flex items-baseline gap-4">
                  <span className="text-xl font-bold leading-none" style={{ color: customColors.accent }}>
                    •
                  </span>
                  <span className="leading-relaxed text-base flex-1" style={{ color: customColors.body }}>
                    <strong style={{ color: customColors.heading }}>{insight.split(' – ')[0]}</strong> – {insight.split(' – ')[1]}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="max-w-5xl mx-auto px-6">
        <div style={{ height: '1px', backgroundColor: customColors.border }}></div>
      </div>

      {/* Strategy - Grid Layout */}
      <section className="py-32" style={{ backgroundColor: customColors.primaryBg }}>
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-xs uppercase tracking-wider mb-4 block font-semibold" style={{ color: customColors.accent }}>
              Strategy
            </span>
            <h2 className="font-grotesk font-semibold text-4xl md:text-5xl mb-6 leading-tight" style={{ color: customColors.heading }}>
              Balancing modern innovation with accessibility
            </h2>
            <p className="text-lg max-w-2xl mx-auto leading-relaxed" style={{ color: customColors.muted }}>
              The biggest challenge was designing for users aged 55–80 while maintaining Treebula's identity as a modern, innovative tech company.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: LightBulbIcon, title: 'Simple & Clear', desc: 'Minimal technical competence required' },
              { icon: HeartIcon, title: 'Accessible', desc: 'WCAG guidelines and clear contrasts' },
              { icon: SparklesIcon, title: 'Modern', desc: 'Clean aesthetics signaling innovation' },
              { icon: DevicePhoneMobileIcon, title: 'Mobile-First', desc: 'Optimized for on-the-go access' },
              { icon: CursorArrowRaysIcon, title: 'Focused', desc: 'Minimal choices to reduce cognitive load' },
              { icon: RectangleStackIcon, title: 'Contextual', desc: 'Property-specific, relevant data' },
            ].map((item, index) => {
              const IconComponent = item.icon;
              if (!IconComponent) return null;
              return (
                <div
                  key={index}
                  className="rounded-xl p-8"
                  style={{
                    background: `linear-gradient(to bottom, ${customColors.secondaryBg}, ${customColors.secondaryBg}dd)`,
                  }}
                >
                  <div className="flex justify-center mb-4">
                    <IconComponent className="w-10 h-10" style={{ color: customColors.accent }} />
                  </div>
                  <h3 className="font-grotesk font-semibold text-xl mb-3 text-center" style={{ color: customColors.heading }}>
                    {item.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-center" style={{ color: customColors.body }}>
                    {item.desc}
                  </p>
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

      {/* Solution / UI Showcase - Dark Background, Narrow Centered */}
      <section className="py-32" style={{ backgroundColor: customColors.primaryBg }}>
        <div className="max-w-5xl mx-auto px-6">
          <div
            className="rounded-2xl p-12 md:p-16"
            style={{
              backgroundColor: '#0C0D0F',
            }}
          >
            <span className="text-xs uppercase tracking-wider mb-4 block font-semibold" style={{ color: customColors.accent }}>
              Solution
            </span>
            <h2 className="font-grotesk font-semibold text-white text-4xl md:text-5xl mb-8 leading-tight">What we built</h2>

            <p className="text-lg leading-relaxed text-white/80 mb-12">
              Forest Monitoring combines AI and satellite data to give forest owners real-time insights about their property, all accessible from their mobile
              phone.
            </p>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              {[
                {
                  icon: RectangleStackIcon,
                  title: 'Property Overview',
                  desc: 'Dashboard showing forest status, recent events, and risk indicators at a glance',
                },
                {
                  icon: ExclamationTriangleIcon,
                  title: 'Risk Alerts',
                  desc: 'Real-time notifications about storm damage, bark beetle risks, and other threats',
                },
                { icon: ChartBarIcon, title: 'Wind Analysis', desc: 'Interactive wind rose showing wind patterns specific to the property' },
                { icon: ChartBarIcon, title: 'Weather Forecast', desc: 'Local weather data tied directly to the forest location' },
              ].map((item, index) => {
                const IconComponent = item.icon;
                if (!IconComponent) return null;
                return (
                  <div
                    key={index}
                    className="rounded-lg p-6"
                    style={{
                      backgroundColor: 'rgba(255, 255, 255, 0.05)',
                      border: `1px solid rgba(255, 255, 255, 0.1)`,
                    }}
                  >
                    <h3 className="font-grotesk font-semibold text-lg mb-3 flex items-center gap-2 text-white">
                      <IconComponent className="w-6 h-6" style={{ color: customColors.accent }} />
                      {item.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-white/70">{item.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="max-w-5xl mx-auto px-6">
        <div style={{ height: '1px', backgroundColor: customColors.border }}></div>
      </div>

      {/* Process - Split Layout */}
      <section className="py-32" style={{ backgroundColor: customColors.primaryBg }}>
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-start">
            <div>
              <span className="text-xs uppercase tracking-wider mb-4 block font-semibold" style={{ color: customColors.accent }}>
                Process
              </span>
              <h2 className="font-grotesk font-semibold text-4xl md:text-5xl mb-8 leading-tight" style={{ color: customColors.heading }}>
                From idea to product
              </h2>
              <div className="space-y-6" style={{ color: customColors.body }}>
                <p className="text-lg leading-relaxed">
                  My role was to transform ideas and insights from the team into a working, visual, and user-friendly product. It was far from linear, more like
                  a roller coaster of rapid iterations and new insights.
                </p>
                <p className="leading-relaxed">
                  Since we were building something that didn't exist on the market before, flexibility and close collaboration were essential throughout the
                  process.
                </p>
              </div>
            </div>
            <div className="space-y-6">
              {[
                { icon: Square3Stack3DIcon, title: 'Wireframes', desc: "Quick wireframes to visualize the product's basic structure and flow" },
                { icon: SwatchIcon, title: 'Prototypes', desc: 'Interactive prototypes in Figma to test interactions and flows' },
                { icon: ArrowPathIcon, title: 'Iterations', desc: 'Continuous testing and adjustments with stakeholders' },
              ].map((item, index) => {
                const IconComponent = item.icon;
                if (!IconComponent) return null;
                return (
                  <div
                    key={index}
                    className="rounded-xl p-8"
                    style={{
                      background: `linear-gradient(to bottom, ${customColors.secondaryBg}, ${customColors.secondaryBg}dd)`,
                    }}
                  >
                    <h3 className="font-grotesk font-semibold text-lg mb-3 flex items-center gap-3" style={{ color: customColors.heading }}>
                      <IconComponent className="w-6 h-6" style={{ color: customColors.accent }} />
                      {item.title}
                    </h3>
                    <p className="text-sm leading-relaxed" style={{ color: customColors.body }}>
                      {item.desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="max-w-5xl mx-auto px-6">
        <div style={{ height: '1px', backgroundColor: customColors.border }}></div>
      </div>

      {/* Reflection / Learnings - Large Quote Block */}
      <section className="py-32" style={{ backgroundColor: customColors.primaryBg }}>
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-xs uppercase tracking-wider mb-4 block font-semibold" style={{ color: customColors.accent }}>
              Reflections
            </span>
            <h2 className="font-grotesk font-semibold text-4xl md:text-5xl mb-12 leading-tight" style={{ color: customColors.heading }}>
              What I learned
            </h2>
          </div>

          {/* Large Quote Block */}
          <div
            className="rounded-2xl p-12 md:p-16 mb-12"
            style={{
              background: `linear-gradient(to bottom, ${customColors.secondaryBg}, ${customColors.secondaryBg}dd)`,
            }}
          >
            <p className="text-2xl md:text-3xl font-medium leading-relaxed text-center" style={{ color: customColors.heading }}>
              "This project proved how close collaboration between design, development, and business can create products that strengthen the brand and meet real
              needs in a traditionally analog industry."
            </p>
          </div>

          <div className="space-y-8 max-w-3xl mx-auto">
            {[
              {
                title: "Research isn't always traditional",
                desc: "User research doesn't always follow a textbook pattern. In this case, the strongest insights came from internal expertise deeply rooted in the target group's reality.",
              },
              {
                title: 'Balance function and aesthetics',
                desc: 'Designing for an older, less tech-savvy audience without compromising modern feel deepened my understanding of how design can unite usability and innovation.',
              },
              {
                title: 'Collaboration drives success',
                desc: 'When design, technology, and business goals work together, you can create products that not only work but actually make a difference.',
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

      {/* Footer - Full Width mutedGreen */}
      <section className="py-32" style={{ backgroundColor: customColors.mutedGreen }}>
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="space-y-6 mb-12">
            <p className="text-3xl font-semibold" style={{ color: customColors.heading }}>
              Thanks for reading! 🙌
            </p>
            <p className="text-lg" style={{ color: customColors.body }}>
              I hope you enjoyed learning about Treebula.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="/case-studies/restaurang-apotek"
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
              <span className="relative z-10">Next Project: Restaurang Apotek</span>
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
                e.currentTarget.style.backgroundColor = customColors.secondaryBg;
                e.currentTarget.style.borderColor = customColors.borderHover;
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
      </section>
    </article>
  );
}
