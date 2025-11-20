'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import {
  LightBulbIcon,
  CursorArrowRaysIcon,
  CheckCircleIcon,
  ArrowPathIcon,
  HeartIcon,
  SparklesIcon,
  UserGroupIcon,
  ShieldCheckIcon,
} from '@heroicons/react/24/outline';
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
              Loggi Wellness App
            </h1>
            <p className="text-xl mb-4" style={{ color: customColors.muted }}>
              2025 · UI/UX · Accessibility · Mobile
            </p>
            <p className="text-lg max-w-2xl mx-auto leading-relaxed mb-12" style={{ color: customColors.body }}>
              A 2-week concept sprint designing a calm, accessible wellness app for daily mood and sleep tracking.
            </p>
          </div>

          <div
            className="rounded-2xl overflow-hidden relative"
            style={{
              boxShadow: '0 20px 60px rgba(0, 0, 0, 0.08)',
              background: 'linear-gradient(180deg, #1a2733 0%, #233d4a 25%, #2d4a5a 50%, #25404f 75%, #1e2f3a 100%)',
              position: 'relative',
            }}
          >
            {/* Ocean mist overlay - soft and calm */}
            <div
              className="absolute inset-0"
              style={{
                background:
                  'linear-gradient(180deg, rgba(135, 206, 235, 0.12) 0%, rgba(135, 206, 235, 0.06) 30%, rgba(135, 206, 235, 0.10) 60%, rgba(135, 206, 235, 0.15) 100%)',
              }}
            />
            {/* Depth and richness - soft water-like shapes */}
            <div
              className="absolute inset-0 opacity-20"
              style={{
                backgroundImage: `radial-gradient(ellipse 90% 40% at 20% 30%, rgba(135, 206, 235, 0.25) 0%, transparent 70%),
                                  radial-gradient(ellipse 70% 50% at 80% 70%, rgba(95, 158, 160, 0.3) 0%, transparent 70%),
                                  radial-gradient(ellipse 60% 70% at 50% 50%, rgba(70, 130, 180, 0.2) 0%, transparent 80%)`,
                backgroundSize: '100% 100%, 100% 100%, 100% 100%',
                backgroundPosition: '0% 0%, 100% 100%, 50% 50%',
                mixBlendMode: 'soft-light',
              }}
            />
            {/* Subtle water texture - like gentle waves */}
            <div
              className="absolute inset-0 opacity-10"
              style={{
                backgroundImage: `repeating-linear-gradient(0deg, transparent, transparent 3px, rgba(135, 206, 235, 0.03) 3px, rgba(135, 206, 235, 0.03) 6px),
                                  repeating-linear-gradient(90deg, transparent, transparent 4px, rgba(95, 158, 160, 0.02) 4px, rgba(95, 158, 160, 0.02) 8px)`,
              }}
            />
            {/* Hero image */}
            <div className="relative z-10">
              <Image
                src="/Loggi - new hero section.png"
                alt="Loggi wellness app overview showing multiple screens and features"
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
          <div className="space-y-6 md:space-y-0 md:grid md:grid-cols-2 md:gap-16 md:items-start">
            <div>
              <SectionHeader
                label="The Challenge"
                title="Why another wellness app?"
                description={
                  <div className="space-y-6">
                    <p className="text-lg leading-relaxed">
                      Most wellness apps feel overwhelming. They push you to track everything, gamify your emotions, and guilt you when you miss a day. I wanted
                      to explore a different approach.
                    </p>
                    <p className="text-lg leading-relaxed">
                      This was a 2-week concept sprint where I explored the full UX process, from defining user needs and emotional tone to prototyping and
                      testing high-fidelity flows.
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
                  The core question:{' '}
                </span>
                How might we design a daily wellness tool that feels calm, supportive, and emotionally safe while still helping users build consistent habits
                over time?
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="max-w-5xl mx-auto px-4 lg:px-6">
        <div style={{ height: '1px', backgroundColor: customColors.border }}></div>
      </div>

      {/* Target Users - White Background */}
      <section className="py-24 lg:py-32" style={{ backgroundColor: customColors.whiteBg }}>
        <div className="max-w-5xl mx-auto px-4 lg:px-6">
          <SectionHeader
            label="Target Users"
            title="Who needs this?"
            description="Loggi was created for people who want to build healthy daily habits but feel overwhelmed by wellness tools that are too intense or rigid. The goal was to create a space that feels calming, safe, and easy to return to, even on off days. No pressure. No guilt. Just gentle support."
            accentColor={customColors.accentDark}
            headingColor={customColors.heading}
            bodyColor={customColors.body}
            align="center"
            mobileSpacingClassName="mb-6"
            className="mb-6 md:mb-16"
          />
        </div>
      </section>

      {/* Divider */}
      <div className="max-w-5xl mx-auto px-4 lg:px-6">
        <div style={{ height: '1px', backgroundColor: customColors.border }}></div>
      </div>

      {/* Research - Full Width Centered Text */}
      <section className="py-24 lg:py-32" style={{ backgroundColor: customColors.whiteBg }}>
        <div className="max-w-5xl mx-auto px-4 lg:px-6">
          <SectionHeader
            label="Research"
            title="Understanding the landscape"
            description="I started by analyzing existing wellness apps, focusing on how they structure their flows, communicate with users, and balance clarity with calm. I also drew from personal experience, reflecting on why some tools feel harder to return to than others."
            accentColor={customColors.accentDark}
            headingColor={customColors.heading}
            bodyColor={customColors.body}
            align="center"
            mobileSpacingClassName="mb-6"
            className="mb-6 md:mb-16"
          />

          <div className="flex items-center gap-4 mb-12">
            <div style={{ flex: 1, height: '1px', backgroundColor: customColors.border }}></div>
            <div style={{ width: '4px', height: '4px', borderRadius: '50%', backgroundColor: customColors.mutedGreen }}></div>
            <div style={{ flex: 1, height: '1px', backgroundColor: customColors.border }}></div>
          </div>

          <div className="grid gap-6 md:grid-cols-2 md:gap-8">
            <div
              className="rounded-xl p-5p md:p-8"
              style={{
                background: `linear-gradient(to bottom, ${customColors.secondaryBg}, ${customColors.secondaryBg}dd)`,
              }}
            >
              <h3 className="font-grotesk font-semibold text-xl mb-4 flex items-center gap-2" style={{ color: customColors.heading }}>
                <LightBulbIcon className="w-6 h-6" style={{ color: customColors.accent }} />
                Key Insights
              </h3>
              <ul className="space-y-3 text-sm">
                {[
                  'Users want quick check-ins, not 10-minute journaling sessions',
                  'Overly cheerful or pushy language feels inauthentic',
                  "Missing a day shouldn't feel like failure",
                  'Dark UI can create a calmer, more focused experience',
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
                Design Hypothesis
              </h3>
              <p className="text-sm italic leading-relaxed" style={{ color: customColors.accentDark }}>
                "If we create a check-in flow under one minute with gentle, supportive language and consistent visual rhythm, users will feel more in control of
                their wellness journey without the pressure."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="max-w-5xl mx-auto px-4 lg:px-6">
        <div style={{ height: '1px', backgroundColor: customColors.border }}></div>
      </div>

      {/* Strategy - Grid Layout */}
      <section className="py-24 lg:py-32" style={{ backgroundColor: customColors.whiteBg }}>
        <div className="max-w-5xl mx-auto px-4 lg:px-6">
          <SectionHeader
            label="Strategy"
            title="Shaping the emotional tone"
            description="Before diving into screens, I defined the emotional foundation. Loggi needed to feel like a supportive friend, not a demanding coach."
            accentColor={customColors.accentDark}
            headingColor={customColors.heading}
            bodyColor={customColors.body}
            align="center"
            mobileAlign="left"
            mobileSpacingClassName="mb-6"
            className="mb-6 md:mb-16"
          />

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { icon: UserGroupIcon, title: 'Supportive' },
              { icon: SparklesIcon, title: 'Gentle' },
              { icon: ShieldCheckIcon, title: 'Authentic' },
              { icon: HeartIcon, title: 'Empathetic' },
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
                    <IconComponent className="w-8 h-8" style={{ color: customColors.accent }} />
                  </div>
                  <div className="text-sm font-grotesk font-semibold" style={{ color: customColors.heading }}>
                    {item.title}
                  </div>
                </div>
              );
            })}
          </div>

          <p className="text-center mt-12 leading-relaxed" style={{ color: customColors.body }}>
            These principles guided every decision, from microcopy to button placement to transition timing.
          </p>
        </div>
      </section>

      {/* Divider */}
      <div className="max-w-5xl mx-auto px-4 lg:px-6">
        <div style={{ height: '1px', backgroundColor: customColors.border }}></div>
      </div>

      {/* Onboarding Flow */}
      <section className="py-24 lg:py-32" style={{ backgroundColor: customColors.whiteBg }}>
        <div className="max-w-5xl mx-auto px-4 lg:px-6">
          <SectionHeader
            label="Onboarding Flow"
            title="Welcoming users without pressure"
            description="The onboarding needed to set the right tone from the start. I designed a 4-step flow that feels calm and goal-oriented without overwhelming new users."
            accentColor={customColors.accentDark}
            headingColor={customColors.heading}
            bodyColor={customColors.body}
            align="center"
            mobileSpacingClassName="mb-6"
            className="mb-6 md:mb-16"
          />

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { image: '/loggi - start step1.png', title: 'Welcome', desc: 'Soft introduction' },
              { image: '/loggi - start step2.png', title: 'Purpose', desc: 'Clear value' },
              { image: '/loggi - start step3.png', title: 'Preferences', desc: 'Light setup' },
              { image: '/loggi - start step4.png', title: 'Ready', desc: 'Encouragement' },
            ].map((item, index) => (
              <div key={index} className="text-center">
                <Image src={item.image} alt={`Loggi onboarding step ${index + 1}`} width={200} height={400} className="w-full h-auto mb-4" />
                <h3 className="font-grotesk font-semibold mb-1" style={{ color: customColors.heading }}>
                  {item.title}
                </h3>
                <p className="text-sm" style={{ color: customColors.muted }}>
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

          <p className="text-center mt-12 leading-relaxed" style={{ color: customColors.body }}>
            Each screen builds confidence. No clutter. No pressure. Just a gentle invitation to begin.
          </p>
        </div>
      </section>

      {/* Divider */}
      <div className="max-w-5xl mx-auto px-4 lg:px-6">
        <div style={{ height: '1px', backgroundColor: customColors.border }}></div>
      </div>

      {/* Core Experience - Daily Check-in */}
      <section className="py-24 lg:py-32" style={{ backgroundColor: customColors.whiteBg }}>
        <div className="max-w-5xl mx-auto px-4 lg:px-6">
          <SectionHeader
            label="Core Experience"
            title="The heart of Loggi: Daily check-ins"
            description="This is where the design philosophy comes to life. A 5-step flow designed to take under 60 seconds, with clear visual feedback and no judgment."
            accentColor={customColors.accentDark}
            headingColor={customColors.heading}
            bodyColor={customColors.body}
            align="center"
            mobileSpacingClassName="mb-6"
            className="mb-6 md:mb-16"
          />

          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-12">
            {[
              { image: '/loggi - checkin step1.png', title: 'Mood', desc: 'How are you?' },
              { image: '/loggi - checkin step2.png', title: 'Sleep', desc: 'How have you slept?' },
              { image: '/loggi - checkin step3.png', title: 'Stress', desc: 'Stress level today?' },
              { image: '/loggi - checkin step4.png', title: 'Reflection', desc: 'Optional note' },
              { image: '/loggi - checkin step5.png', title: 'Complete', desc: 'Thank you for checking in' },
            ].map((item, index) => (
              <div key={index} className="text-center">
                <Image src={item.image} alt={`Loggi check-in step ${index + 1}`} width={200} height={400} className="w-full h-auto mb-4" />
                <h3 className="font-grotesk font-semibold mb-1" style={{ color: customColors.heading }}>
                  {item.title}
                </h3>
                <p className="text-xs" style={{ color: customColors.muted }}>
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

          <div
            className="rounded-xl p-8"
            style={{
              background: `linear-gradient(to bottom, ${customColors.secondaryBg}, ${customColors.secondaryBg}dd)`,
            }}
          >
            <p className="leading-relaxed mb-4" style={{ color: customColors.body }}>
              Each step uses simple icons, clear labels, and supportive microcopy. The progress is visible but not overwhelming. Users can go back, skip, or
              pause anytime.
            </p>
            <p className="text-base italic font-medium" style={{ color: customColors.accentDark }}>
              "The flow respects the user's time while gathering meaningful insights. No guilt. No pressure. Just care."
            </p>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="max-w-5xl mx-auto px-4 lg:px-6">
        <div style={{ height: '1px', backgroundColor: customColors.border }}></div>
      </div>

      {/* Insights & Profile - Split Layout */}
      <section className="py-24 lg:py-32" style={{ backgroundColor: customColors.whiteBg }}>
        <div className="max-w-5xl mx-auto px-4 lg:px-6">
          <SectionHeader
            label="Making Data Meaningful"
            title="Seeing patterns over time"
            description="Check-ins are just the beginning. The real value comes from helping users see patterns, understand trends, and feel more aware of their wellness journey."
            accentColor={customColors.accentDark}
            headingColor={customColors.heading}
            bodyColor={customColors.body}
            align="center"
            mobileSpacingClassName="mb-6"
            className="mb-6 md:mb-16"
          />

          <div className="md:grid md:grid-cols-2 md:gap-8">
            <div className="text-center">
              <Image src="/loggi - insight.png" alt="Loggi insights screen" width={300} height={600} className="w-full max-w-[240px] mx-auto h-auto mb-6" />
              <h3 className="font-grotesk font-semibold text-xl mb-3" style={{ color: customColors.heading }}>
                Insights
              </h3>
              <p className="text-sm mb-4 leading-relaxed" style={{ color: customColors.body }}>
                Visualized trends help users understand their mood and sleep patterns without feeling data-overwhelmed.
              </p>
            </div>

            <div className="text-center">
              <Image src="/loggi - profil.png" alt="Loggi profile screen" width={300} height={600} className="w-full max-w-[240px] mx-auto h-auto mb-6" />
              <h3 className="font-grotesk font-semibold text-xl mb-3" style={{ color: customColors.heading }}>
                Profile
              </h3>
              <p className="text-sm mb-4 leading-relaxed" style={{ color: customColors.body }}>
                A clean, accessible space for users to manage preferences and personalize their experience.
              </p>
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
            title="Testing with real users"
            description="I tested the high-fidelity prototype with 5 peers to validate the emotional tone, flow clarity, and overall usability."
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
                points: ['The tone felt "calm and approachable"', 'Check-in process was fast and easy', 'Visual clarity made navigation intuitive'],
              },
              {
                icon: ArrowPathIcon,
                title: 'What I improved',
                points: [
                  'Made selected states more visually distinct',
                  'Changed "Next" button copy to more human language',
                  'Added back button and progress indicators',
                ],
              },
            ].map(({ icon: IconComponent, title, points }, index) => (
              <div
                key={title}
                className="rounded-xl p-5p md:p-8"
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
              Key Insight: Microcopy Matters
            </h3>
            <p className="text-sm leading-relaxed mb-4" style={{ color: customColors.body }}>
              Testing revealed that small changes in button copy had a huge impact. Changing "Next" to "Let's go" or "Complete" to "You're done" made the
              experience feel more human and supportive.
            </p>
            <p className="text-sm italic" style={{ color: customColors.accentDark }}>
              Lesson learned: Words aren't just information—they set the emotional tone of the entire experience.
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
            mobileSpacingClassName="mb-6"
            className="mb-6 md:mb-16"
          />

          {/* Large Quote Block */}
          <div
            className="rounded-2xl p-7p md:p-16 mb-8 md:mb-12"
            style={{
              background: `linear-gradient(to bottom, ${customColors.lightBeige}, ${customColors.lightBeige}dd)`,
              boxShadow: 'inset 0 2px 8px rgba(0, 0, 0, 0.03)',
            }}
          >
            <p className="text-xl md:text-2xl font-medium leading-relaxed text-center" style={{ color: customColors.heading, letterSpacing: '-0.02em' }}>
              "This project proved how close collaboration between design, development, and business can create products that strengthen the brand and meet real
              needs in a traditionally analog industry."
            </p>
          </div>

          <div className="space-y-8 max-w-3xl mx-auto">
            {[
              {
                title: 'Microcopy matters more than I thought',
                desc: 'Changing "Next" to "Let\'s go" or "Complete" to "You\'re done" made the experience feel more human and supportive. Small words, big impact.',
              },
              {
                title: 'Visual rhythm creates calm',
                desc: 'Consistent spacing, subtle animations, and dark UI all contributed to a feeling of "calm focus" that users mentioned in testing.',
              },
              {
                title: 'Less features, more clarity',
                desc: 'I initially wanted to add journaling, meditation timers, and habit tracking. But keeping it simple made the experience more approachable.',
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
      <section ref={thanksSectionRef} className="thanks-section">
        <div className="content max-w-5xl mx-auto px-4 lg:px-6">
          <h2 className="font-grotesk font-semibold mb-4" style={{ color: customColors.heading }}>
            Thanks for reading!
          </h2>
          <p className="mb-12" style={{ color: customColors.body }}>
            Up next: See how I approached Treebula.
          </p>
          <div className="flex justify-center items-center">
            <Link
              href="/case-studies/treebula"
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
                View Treebula Case Study
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
            background-color: #f4f4f4;
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
            color: #000000;
            font-weight: 600;
            font-size: clamp(28px, 3vw, 44px);
            letter-spacing: -0.015em;
            margin-bottom: 16px;
          }

          .thanks-section p {
            font-family: 'Inter', sans-serif;
            color: #6b6b6b;
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
