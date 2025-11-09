'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Page() {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Scrolling banner animation
    if (scrollRef.current) {
      const scrollContent = scrollRef.current.querySelector('.scroll-content');
      if (scrollContent) {
        const duplicate = scrollContent.cloneNode(true) as HTMLElement;
        scrollRef.current.appendChild(duplicate);
      }
    }
  }, []);

  return (
    <article className="bg-primary-bg text-body">
      {/* Scrolling Banner */}
      <div ref={scrollRef} className="overflow-hidden whitespace-nowrap py-2 relative" style={{ backgroundColor: '#10b981' }}>
        <div className="scroll-content inline-flex items-center gap-4 animate-scroll">
          <span className="text-black font-bold text-sm">CASE STUDY: TREEBULA FOREST MONITORING</span>
          <span className="text-black">*</span>
          <span className="text-black font-bold text-sm">CASE STUDY: TREEBULA FOREST MONITORING</span>
          <span className="text-black">*</span>
          <span className="text-black font-bold text-sm">CASE STUDY: TREEBULA FOREST MONITORING</span>
          <span className="text-black">*</span>
        </div>
      </div>

      {/* Hero Section */}
      <section className="pt-16 pb-20">
        <div className="max-w-4xl mx-auto px-6">
          {/* Project Title with Purple Asterisk */}
          <h1 className="font-display text-heading text-5xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight mb-6">
            Treebula
            <span className="text-purple text-6xl sm:text-7xl md:text-8xl lg:text-9xl" style={{ color: '#9333ea' }}>
              *
            </span>
          </h1>

          {/* Short Description / One-liner */}
          <p className="text-xl sm:text-2xl text-heading font-medium mb-6 leading-relaxed">
            A mobile-first service that helps forest owners monitor their property remotely using AI and satellite data.
          </p>

          {/* Value Statement with Handwritten Accent */}
          <div className="mb-12">
            <span className="text-green text-lg mb-4 block" style={{ fontFamily: 'var(--font-handwriting)', color: '#10b981' }}>
              Transforming forest management
            </span>
            <p className="text-lg text-body leading-relaxed max-w-3xl">
              Forest owners living far from their property needed a way to stay informed about storm damage, bark beetle risks, and other threats without
              constant travel. Treebula provides real-time insights and peace of mind, transforming how forest management works in Sweden.
            </p>
          </div>

          {/* Meta Information Grid */}
          <div className="grid sm:grid-cols-2 gap-8 mb-16 pb-16 border-b-4 border-black">
            {/* Role & Responsibilities */}
            <div className="transform transition-all duration-300 hover:scale-105" style={{ transform: 'rotate(-1deg)' }}>
              <div className="bg-secondary-bg border-4 border-black p-6">
                <h3 className="text-xs uppercase tracking-wide text-accent mb-3">Role & Responsibilities</h3>
                <p className="text-body mb-2">
                  <span className="font-semibold text-heading">UX/UI Designer</span>
                </p>
                <p className="text-sm text-muted">Research, Wireframes, Prototyping, User Testing, Interface Design</p>
              </div>
            </div>

            {/* Duration */}
            <div>
              <div className="bg-secondary-bg border-4 border-black p-6">
                <h3 className="text-xs uppercase tracking-wide text-accent mb-3">Duration</h3>
                <p className="text-body">
                  <span className="font-semibold text-heading">2025</span>
                </p>
                <p className="text-sm text-muted">Ongoing project</p>
              </div>
            </div>

            {/* Team / Context */}
            <div>
              <div className="bg-secondary-bg border-4 border-black p-6">
                <h3 className="text-xs uppercase tracking-wide text-accent mb-3">Team / Context</h3>
                <p className="text-body">
                  <span className="font-semibold text-heading">Treebula Team</span>
                </p>
                <p className="text-sm text-muted">Cross-functional collaboration with developers and product owners</p>
              </div>
            </div>

            {/* Keywords / Focus Areas */}
            <div className="transform transition-all duration-300 hover:scale-105" style={{ transform: 'rotate(1deg)' }}>
              <div className="bg-secondary-bg border-4 border-black p-6">
                <h3 className="text-xs uppercase tracking-wide text-accent mb-3">Focus Areas</h3>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-purple text-white text-xs font-semibold" style={{ backgroundColor: '#9333ea' }}>
                    Mobile UX
                  </span>
                  <span className="px-3 py-1 bg-green text-black text-xs font-semibold" style={{ backgroundColor: '#10b981' }}>
                    Accessibility
                  </span>
                  <span className="px-3 py-1 bg-tertiary-bg border border-border text-xs">AI/Satellite</span>
                  <span className="px-3 py-1 bg-tertiary-bg border border-border text-xs">User Testing</span>
                  <span className="px-3 py-1 bg-tertiary-bg border border-border text-xs">Prototyping</span>
                </div>
              </div>
            </div>
          </div>

          {/* Hero Image / Mockup - Tilted */}
          <div className="max-w-5xl mx-auto mt-16 transform transition-all duration-500 hover:scale-105" style={{ transform: 'rotate(-2deg)' }}>
            <div className="bg-secondary-bg border-4 border-black p-8">
              <div className="relative overflow-hidden">
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
        </div>
      </section>

      {/* Story begins */}
      <section className="pb-16">
        <div className="max-w-4xl mx-auto px-6">
          <div className="space-y-16">
            {/* The Challenge */}
            <div className="mb-8">
              <span className="text-xs uppercase tracking-wide text-accent">The Challenge</span>
              <h2 className="mt-2 font-heading font-semibold text-heading text-4xl md:text-5xl mb-6">
                Distance creates worry
                <span className="text-purple text-5xl md:text-6xl" style={{ color: '#9333ea' }}>
                  *
                </span>
              </h2>
              <div className="space-y-6 text-body leading-relaxed">
                <p className="text-lg text-muted">
                  Many forest owners live far from their property. They worry about storm damage, bark beetle attacks, and other risks but have no easy way to
                  monitor what's happening.
                </p>
                <p>
                  Traditional solutions require physical visits or expensive consultants. By the time damage is discovered, it's often too late. Forest owners
                  needed a way to stay informed without constant travel.
                </p>
                <div className="bg-purple p-8 rounded-lg border-4 border-black mt-8" style={{ backgroundColor: '#9333ea' }}>
                  <p className="text-white text-lg font-medium">
                    The challenge:{' '}
                    <span className="font-bold">
                      How might we help forest owners feel secure and informed about their property, even from a distance, without overwhelming them with
                      technical complexity?
                    </span>
                  </p>
                </div>
              </div>
            </div>

            {/* Target Users */}
            <div className="mb-8">
              <span className="text-xs uppercase tracking-wide text-accent">Target Users</span>
              <h2 className="mt-2 font-heading font-semibold text-heading text-4xl md:text-5xl mb-6">Designing for forest owners</h2>
              <div className="border-4 border-black p-8 space-y-6 bg-secondary-bg">
                <div className="flex items-center gap-4 mb-4">
                  <div
                    className="w-16 h-16 bg-green rounded-full flex items-center justify-center border-4 border-black"
                    style={{ backgroundColor: '#10b981' }}
                  >
                    <span className="text-2xl">👴</span>
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold text-heading text-xl">Private forest owners</h3>
                    <p className="text-muted">Age group: 55–80 years</p>
                  </div>
                </div>
                <p className="text-muted">
                  Our target group is often engaged but not always technically savvy. This made clarity, simplicity, and accessibility crucial in every design
                  decision.
                </p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
                  <div
                    className="bg-tertiary-bg border-4 border-black p-4 text-center transform hover:scale-105 transition-transform"
                    style={{ transform: 'rotate(-1deg)' }}
                  >
                    <div className="text-2xl mb-2">📡</div>
                    <div className="text-xs font-heading font-semibold text-heading">Remote monitoring</div>
                  </div>
                  <div className="bg-tertiary-bg border-4 border-black p-4 text-center">
                    <div className="text-2xl mb-2">⚡</div>
                    <div className="text-xs font-heading font-semibold text-heading">Quick updates</div>
                  </div>
                  <div
                    className="bg-tertiary-bg border-4 border-black p-4 text-center transform hover:scale-105 transition-transform"
                    style={{ transform: 'rotate(1deg)' }}
                  >
                    <div className="text-2xl mb-2">🛡️</div>
                    <div className="text-xs font-heading font-semibold text-heading">Security</div>
                  </div>
                  <div className="bg-tertiary-bg border-4 border-black p-4 text-center">
                    <div className="text-2xl mb-2">🎯</div>
                    <div className="text-xs font-heading font-semibold text-heading">Simplicity</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Research Approach */}
            <div className="mb-8">
              <span className="text-xs uppercase tracking-wide text-accent">Discovery</span>
              <h2 className="mt-2 font-heading font-semibold text-heading text-4xl md:text-5xl mb-6">Building on internal expertise</h2>
              <div className="space-y-6">
                <p>
                  Unlike traditional UX projects with formal user interviews, we built this service on internal expertise and long industry experience. Many of
                  our stakeholders and team members are forest owners themselves.
                </p>
                <p>
                  Through structured workshops, ongoing discussions, and joint decisions, I gained deep knowledge of the target group's needs, daily life, and
                  challenges. This made it possible to quickly test ideas, iterate, and ensure every function created real value.
                </p>

                <div className="bg-secondary-bg border-4 border-black p-6 mt-8">
                  <h3 className="font-heading font-semibold text-heading text-lg mb-3">Key Insights</h3>
                  <ul className="space-y-3 text-sm">
                    <li className="flex items-start gap-3">
                      <span className="text-green mt-1 font-bold" style={{ color: '#10b981' }}>
                        •
                      </span>
                      <span>
                        <strong>Distance creates worry</strong> – Forest owners feel powerless when they don't know what's happening on their property
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-purple mt-1 font-bold" style={{ color: '#9333ea' }}>
                        •
                      </span>
                      <span>
                        <strong>Time-critical information</strong> – Damage is often discovered too late. Real-time updates are essential
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-accent mt-1">•</span>
                      <span>
                        <strong>Need for simplicity</strong> – The target group is older and not technically savvy. The interface must be clear and safe
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-green mt-1 font-bold" style={{ color: '#10b981' }}>
                        •
                      </span>
                      <span>
                        <strong>Local and relevant data</strong> – Users want specific information about their own property, not general forestry data
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Design Principles */}
      <section className="pb-16" style={{ backgroundColor: '#9333ea' }}>
        <div className="max-w-4xl mx-auto px-6 py-16">
          <div className="max-w-4xl mx-auto mb-8">
            <span className="text-xs uppercase tracking-wide text-white/80">Strategy</span>
            <h2 className="mt-2 font-heading font-semibold text-white text-4xl md:text-5xl mb-4">Balancing modern innovation with accessibility</h2>
            <p className="text-white/90 text-lg">
              The biggest challenge was designing for users aged 55–80 while maintaining Treebula's identity as a modern, innovative tech company.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <div
              className="bg-white border-4 border-black p-6 text-center transform hover:scale-105 transition-transform"
              style={{ transform: 'rotate(-1deg)' }}
            >
              <div className="text-3xl mb-3">💡</div>
              <h3 className="font-heading font-semibold text-black text-lg mb-3">Simple & Clear</h3>
              <p className="text-body text-sm">Minimal technical competence required</p>
            </div>
            <div className="bg-white border-4 border-black p-6 text-center">
              <div className="text-3xl mb-3">♿</div>
              <h3 className="font-heading font-semibold text-black text-lg mb-3">Accessible</h3>
              <p className="text-body text-sm text-gray-700">WCAG guidelines and clear contrasts</p>
            </div>
            <div
              className="bg-white border-4 border-black p-6 text-center transform hover:scale-105 transition-transform"
              style={{ transform: 'rotate(1deg)' }}
            >
              <div className="text-3xl mb-3">✨</div>
              <h3 className="font-heading font-semibold text-black text-lg mb-3">Modern</h3>
              <p className="text-body text-sm text-gray-700">Clean aesthetics signaling innovation</p>
            </div>
            <div className="bg-white border-4 border-black p-6 text-center">
              <div className="text-3xl mb-3">📱</div>
              <h3 className="font-heading font-semibold text-black text-lg mb-3">Mobile-First</h3>
              <p className="text-body text-sm text-gray-700">Optimized for on-the-go access</p>
            </div>
            <div
              className="bg-white border-4 border-black p-6 text-center transform hover:scale-105 transition-transform"
              style={{ transform: 'rotate(-1deg)' }}
            >
              <div className="text-3xl mb-3">🎯</div>
              <h3 className="font-heading font-semibold text-black text-lg mb-3">Focused</h3>
              <p className="text-body text-sm text-gray-700">Minimal choices to reduce cognitive load</p>
            </div>
            <div className="bg-white border-4 border-black p-6 text-center">
              <div className="text-3xl mb-3">🌲</div>
              <h3 className="font-heading font-semibold text-black text-lg mb-3">Contextual</h3>
              <p className="text-body text-sm text-gray-700">Property-specific, relevant data</p>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-6">
          <div className="mb-8">
            <span className="text-xs uppercase tracking-wide text-accent">Solution</span>
            <h2 className="mt-2 font-heading font-semibold text-heading text-4xl md:text-5xl mb-6">What we built</h2>
          </div>

          <div className="space-y-6">
            <p className="text-lg text-muted">
              Forest Monitoring combines AI and satellite data to give forest owners real-time insights about their property, all accessible from their mobile
              phone.
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-secondary-bg border-4 border-black p-6 transform hover:scale-105 transition-transform" style={{ transform: 'rotate(-1deg)' }}>
                <h3 className="font-heading font-semibold text-heading text-lg mb-3 flex items-center gap-2">
                  <span className="text-2xl">🌲</span>
                  Property Overview
                </h3>
                <p className="text-sm text-body">Dashboard showing forest status, recent events, and risk indicators at a glance</p>
              </div>

              <div className="bg-secondary-bg border-4 border-black p-6">
                <h3 className="font-heading font-semibold text-heading text-lg mb-3 flex items-center gap-2">
                  <span className="text-2xl">⚠️</span>
                  Risk Alerts
                </h3>
                <p className="text-sm text-body">Real-time notifications about storm damage, bark beetle risks, and other threats</p>
              </div>

              <div className="bg-secondary-bg border-4 border-black p-6">
                <h3 className="font-heading font-semibold text-heading text-lg mb-3 flex items-center gap-2">
                  <span className="text-2xl">🌪️</span>
                  Wind Analysis
                </h3>
                <p className="text-sm text-body">Interactive wind rose showing wind patterns specific to the property</p>
              </div>

              <div className="bg-secondary-bg border-4 border-black p-6 transform hover:scale-105 transition-transform" style={{ transform: 'rotate(1deg)' }}>
                <h3 className="font-heading font-semibold text-heading text-lg mb-3 flex items-center gap-2">
                  <span className="text-2xl">🌤️</span>
                  Weather Forecast
                </h3>
                <p className="text-sm text-body">Local weather data tied directly to the forest location</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Design Process */}
      <section className="pb-16" style={{ backgroundColor: '#10b981' }}>
        <div className="max-w-4xl mx-auto px-6 py-16">
          <div className="mb-8">
            <span className="text-xs uppercase tracking-wide text-black/80">Process</span>
            <h2 className="mt-2 font-heading font-semibold text-black text-4xl md:text-5xl mb-4">From idea to product</h2>
          </div>

          <div className="space-y-6">
            <p className="text-lg text-black/90">
              My role was to transform ideas and insights from the team into a working, visual, and user-friendly product. It was far from linear, more like a
              roller coaster of rapid iterations and new insights.
            </p>

            <p className="text-black/80">
              Since we were building something that didn't exist on the market before, flexibility and close collaboration were essential throughout the
              process.
            </p>

            <div className="grid md:grid-cols-3 gap-6 mt-8">
              <div className="bg-white border-4 border-black p-6 transform hover:scale-105 transition-transform" style={{ transform: 'rotate(-1deg)' }}>
                <h3 className="font-heading font-semibold text-black text-lg mb-3 flex items-center gap-2">
                  <span className="text-2xl">📐</span>
                  Wireframes
                </h3>
                <p className="text-sm text-gray-700">Quick wireframes to visualize the product's basic structure and flow</p>
              </div>

              <div className="bg-white border-4 border-black p-6">
                <h3 className="font-heading font-semibold text-black text-lg mb-3 flex items-center gap-2">
                  <span className="text-2xl">🎨</span>
                  Prototypes
                </h3>
                <p className="text-sm text-gray-700">Interactive prototypes in Figma to test interactions and flows</p>
              </div>

              <div className="bg-white border-4 border-black p-6 transform hover:scale-105 transition-transform" style={{ transform: 'rotate(1deg)' }}>
                <h3 className="font-heading font-semibold text-black text-lg mb-3 flex items-center gap-2">
                  <span className="text-2xl">🔄</span>
                  Iterations
                </h3>
                <p className="text-sm text-gray-700">Continuous testing and adjustments with stakeholders</p>
              </div>
            </div>

            <div className="bg-white border-4 border-black p-6 mt-8">
              <h3 className="font-display text-black text-lg mb-3">Designing for the target group</h3>
              <p className="text-body text-sm mb-4">With users aged 55–80, clarity and simplicity were non-negotiable. Every design decision focused on:</p>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-3">
                  <span className="text-green mt-1 font-bold" style={{ color: '#10b981' }}>
                    •
                  </span>
                  <span className="text-body">Clear visual hierarchies that guide the eye</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-purple mt-1 font-bold" style={{ color: '#9333ea' }}>
                    •
                  </span>
                  <span className="text-body">Easy-to-read typography with proper sizing</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-black mt-1 font-bold">•</span>
                  <span className="text-body">High contrast colors for better readability</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green mt-1 font-bold" style={{ color: '#10b981' }}>
                    •
                  </span>
                  <span className="text-body">Icons and components with clear, obvious functions</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-purple mt-1 font-bold" style={{ color: '#9333ea' }}>
                    •
                  </span>
                  <span className="text-body">Minimal choices per screen to reduce cognitive load</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Collaboration */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-6">
          <div className="mb-8">
            <span className="text-xs uppercase tracking-wide text-accent">Team Dynamics</span>
            <h2 className="mt-2 font-heading font-semibold text-heading text-4xl md:text-5xl mb-6">Close collaboration was key</h2>
          </div>

          <div className="space-y-6">
            <p className="text-lg text-muted">This project showed me the power of tight collaboration between design, development, and business.</p>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-secondary-bg border-4 border-black p-6 transform hover:scale-105 transition-transform" style={{ transform: 'rotate(-1deg)' }}>
                <h3 className="font-heading font-semibold text-heading text-lg mb-3 flex items-center gap-2">
                  <span className="text-2xl">🤝</span>
                  Cross-functional teamwork
                </h3>
                <p className="text-sm text-body mb-4">
                  Working closely with developers and product owners meant I could test ideas in real-time and make quick adjustments during development.
                </p>
                <p className="text-sm text-body">
                  Showing wireframes and prototypes early created tight feedback loops that shaped the service's functionality.
                </p>
              </div>

              <div className="bg-secondary-bg border-4 border-black p-6 transform hover:scale-105 transition-transform" style={{ transform: 'rotate(1deg)' }}>
                <h3 className="font-heading font-semibold text-heading text-lg mb-3 flex items-center gap-2">
                  <span className="text-2xl">⚡</span>
                  Rapid iteration
                </h3>
                <p className="text-sm text-body mb-4">
                  Creating something new in a conservative industry required courage to test, throw away, and start over.
                </p>
                <p className="text-sm text-body">These rapid iterations shaped much of the service's functionality and user experience.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Impact */}
      <section className="pb-16">
        <div className="max-w-4xl mx-auto px-6 py-16">
          <div className="mb-8">
            <span className="text-xs uppercase tracking-wide text-accent">Impact</span>
            <h2 className="mt-2 font-heading font-semibold text-heading text-4xl md:text-5xl mb-6">Bringing forest monitoring to mobile</h2>
          </div>

          <div className="space-y-6">
            <p className="text-lg text-muted">The launch of Forest Monitoring marks a major step forward for Treebula and for forest owners in Sweden.</p>

            <p className="text-body">
              The service makes it possible to monitor and gain insights about your forest in a completely new way, directly from your mobile phone. By
              combining AI and satellite data with an accessible interface, we created a solution that feels both modern and easy to use, even for a technically
              inexperienced target group.
            </p>

            <div
              className="border-4 border-black p-8 mt-8 bg-secondary-bg transform hover:scale-105 transition-transform"
              style={{ transform: 'rotate(-1deg)' }}
            >
              <p className="text-accent font-medium text-center text-lg">
                "This project proved how close collaboration between design, development, and business can create products that strengthen the brand and meet
                real needs in a traditionally analog industry."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Reflections */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-6">
          <div className="mb-8">
            <span className="text-xs uppercase tracking-wide text-accent">Reflections</span>
            <h2 className="mt-2 font-heading font-semibold text-heading text-4xl md:text-5xl mb-6">What I learned</h2>
          </div>

          <div className="space-y-6">
            <p className="text-lg text-muted">
              This project has been one of the most educational experiences in my design journey. From a fuzzy idea to a finished product, I learned the value
              of experimentation, rapid iteration, and trusting the process.
            </p>

            <div className="space-y-6">
              <div className="border-4 border-black p-6 bg-secondary-bg transform hover:scale-105 transition-transform" style={{ transform: 'rotate(-1deg)' }}>
                <h3 className="font-heading font-semibold text-heading text-lg mb-3">Research isn't always traditional</h3>
                <p className="text-sm text-body">
                  User research doesn't always follow a textbook pattern. In this case, the strongest insights came from internal expertise deeply rooted in the
                  target group's reality.
                </p>
              </div>

              <div className="border-4 border-black p-6 bg-secondary-bg">
                <h3 className="font-heading font-semibold text-heading text-lg mb-3">Balance function and aesthetics</h3>
                <p className="text-sm text-body">
                  Designing for an older, less tech-savvy audience without compromising modern feel deepened my understanding of how design can unite usability
                  and innovation.
                </p>
              </div>

              <div className="border-4 border-black p-6 bg-secondary-bg transform hover:scale-105 transition-transform" style={{ transform: 'rotate(1deg)' }}>
                <h3 className="font-heading font-semibold text-heading text-lg mb-3">Collaboration drives success</h3>
                <p className="text-sm text-body">
                  When design, technology, and business goals work together, you can create products that not only work but actually make a difference.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Next Steps */}
      <section className="pb-16" style={{ backgroundColor: '#9333ea' }}>
        <div className="max-w-4xl mx-auto px-6 py-16">
          <div className="mb-8">
            <span className="text-xs uppercase tracking-wide text-white/80">Future Vision</span>
            <h2 className="mt-2 font-heading font-semibold text-white text-4xl md:text-5xl mb-4">What's next</h2>
          </div>

          <div className="space-y-6 text-white/90">
            <p className="text-lg">Now that Forest Monitoring is live, the real learning begins. Gathering feedback from actual users will help us:</p>

            <ul className="space-y-4">
              <li className="flex items-start gap-4">
                <span className="text-green text-xl mt-1 font-bold" style={{ color: '#10b981' }}>
                  →
                </span>
                <div>
                  <h3 className="font-heading font-semibold text-white mb-1">Test with real forest owners</h3>
                  <p className="text-sm text-white/80">Validate the interface with the 55–80 age group and identify usability issues</p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <span className="text-white text-xl mt-1 font-bold">→</span>
                <div>
                  <h3 className="font-heading font-semibold text-white mb-1">Refine based on feedback</h3>
                  <p className="text-sm text-white/80">Prioritize improvements and new features based on actual user behavior</p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <span className="text-green text-xl mt-1 font-bold" style={{ color: '#10b981' }}>
                  →
                </span>
                <div>
                  <h3 className="font-heading font-semibold text-white mb-1">Expand functionality</h3>
                  <p className="text-sm text-white/80">Explore additional features that provide value without adding complexity</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Next Project Navigation */}
      <section className="py-16 border-t-4 border-black">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="space-y-4 mb-8">
            <p className="text-heading text-xl">Thanks for reading! 🙌</p>
            <p className="text-body">I hope you enjoyed learning about Treebula.</p>
            <span className="text-green text-lg block" style={{ fontFamily: 'var(--font-handwriting)', color: '#10b981' }}>
              Feel free to explore more of my work or get in touch.
            </span>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link href="/case-studies/restaurang-apotek" className="btn btn-primary btn-arrow">
              Next Project: Restaurang Apotek
              <span className="arrow">→</span>
            </Link>
            <Link href="/#projects" className="btn">
              All Projects
            </Link>
          </div>
        </div>
      </section>

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-scroll {
          animation: scroll 20s linear infinite;
        }
        .scroll-content {
          display: inline-flex;
        }
      `}</style>
    </article>
  );
}
