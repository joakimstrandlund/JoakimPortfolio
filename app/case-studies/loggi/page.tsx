import Image from 'next/image';
import Link from 'next/link';

export default function Page() {
  return (
    <article className="bg-primary text-body">
      {/* Header */}
      <section className="pt-8 pb-6">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h1 className="font-display text-headings text-3xl sm:text-4xl md:text-5xl tracking-tight">Loggi Wellness App</h1>
          <p className="mt-3 text-body2">2025 · UX/UI · Accessibility · Mobile</p>
          <p className="mt-4">A 2-week concept sprint designing a calm, accessible wellness app for daily mood and sleep tracking.</p>
        </div>
      </section>

      {/* Hero visual */}
      <section className="pb-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="2xl border border-stroke bg-tertiary/20 p-8">
            <div className="relative">
              <div className="bg-gradient-to-br from-slate-900 to-slate-800 xl p-8">
                <div className="max-w-5xl mx-auto">
                  <div className="relative 2xl overflow-hidden">
                    <Image
                      src="/Loggi - new hero section.png"
                      alt="Loggi wellness app overview showing multiple screens and features"
                      width={1200}
                      height={800}
                      className="w-full h-auto 2xl shadow-2xl"
                      priority
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Story begins */}
      <section className="pb-16">
        <div className="max-w-4xl mx-auto px-6">
          <div className="space-y-16">
            {/* The Problem */}
            <div>
              <div className="mb-8">
                <span className="text-xs uppercase tracking-wide text-accent">The Challenge</span>
                <h2 className="mt-2 font-semibold text-headings text-3xl">Why another wellness app?</h2>
              </div>
              <div className="space-y-6 text-body leading-relaxed">
                <p className="text-lg text-body2">
                  Most wellness apps feel overwhelming. They push you to track everything, gamify your emotions, and guilt you when you miss a day. I wanted to
                  explore a different approach.
                </p>
                <p>
                  The core question became:{' '}
                  <span className="text-headings font-medium">
                    How might we design a daily wellness tool that feels calm, supportive, and emotionally safe while still helping users build consistent
                    habits over time?
                  </span>
                </p>
                <p>
                  This was a 2-week concept sprint where I explored the full UX process, from defining user needs and emotional tone to prototyping and testing
                  high-fidelity flows.
                </p>
              </div>
            </div>

            {/* Who I designed for */}
            <div>
              <div className="mb-8">
                <span className="text-xs uppercase tracking-wide text-accent">Target Users</span>
                <h2 className="mt-2 font-semibold text-headings text-3xl">Who needs this?</h2>
              </div>
              <div className="bg-secondary/20 border border-stroke/30 xl p-8 space-y-4">
                <p className="text-body2 text-lg">
                  Loggi was created for people who want to build healthy daily habits but feel overwhelmed by wellness tools that are too intense or rigid.
                </p>
                <p>
                  The goal was to create a space that feels calming, safe, and easy to return to, even on off days. No pressure. No guilt. Just gentle support.
                </p>
              </div>
            </div>

            {/* Research & Insights */}
            <div>
              <div className="mb-8">
                <span className="text-xs uppercase tracking-wide text-accent">Research</span>
                <h2 className="mt-2 font-semibold text-headings text-3xl">Understanding the landscape</h2>
              </div>
              <div className="space-y-6">
                <p>
                  I started by analyzing existing wellness apps, focusing on how they structure their flows, communicate with users, and balance clarity with
                  calm. I also drew from personal experience, reflecting on why some tools feel harder to return to than others.
                </p>

                <div className="grid md:grid-cols-2 gap-6 mt-8">
                  <div className="bg-tertiary/20 border border-stroke/30 lg p-6">
                    <h3 className="font-semibold text-headings text-lg mb-3 flex items-center gap-2">
                      <span className="text-2xl">💭</span>
                      Key Insights
                    </h3>
                    <ul className="space-y-3 text-sm">
                      <li className="flex items-start gap-3">
                        <span className="text-accent mt-1">•</span>
                        <span>Users want quick check-ins, not 10-minute journaling sessions</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-accent mt-1">•</span>
                        <span>Overly cheerful or pushy language feels inauthentic</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-accent mt-1">•</span>
                        <span>Missing a day shouldn't feel like failure</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-accent mt-1">•</span>
                        <span>Dark UI can create a calmer, more focused experience</span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-accent/10 border border-accent/20 lg p-6">
                    <h3 className="font-semibold text-headings text-lg mb-3 flex items-center gap-2">
                      <span className="text-2xl">🎯</span>
                      Design Hypothesis
                    </h3>
                    <p className="text-sm italic text-accent">
                      "If we create a check-in flow under one minute with gentle, supportive language and consistent visual rhythm, users will feel more in
                      control of their wellness journey without the pressure."
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Defining the Experience */}
            <div>
              <div className="mb-8">
                <span className="text-xs uppercase tracking-wide text-accent">Strategy</span>
                <h2 className="mt-2 font-semibold text-headings text-3xl">Shaping the emotional tone</h2>
              </div>
              <div className="space-y-6">
                <p>Before diving into screens, I defined the emotional foundation. Loggi needed to feel like a supportive friend, not a demanding coach.</p>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
                  <div className="bg-secondary/20 border border-stroke/30 lg p-4 text-center">
                    <div className="text-3xl mb-2">🤝</div>
                    <div className="text-sm font-semibold text-headings">Supportive</div>
                  </div>
                  <div className="bg-secondary/20 border border-stroke/30 lg p-4 text-center">
                    <div className="text-3xl mb-2">🌸</div>
                    <div className="text-sm font-semibold text-headings">Gentle</div>
                  </div>
                  <div className="bg-secondary/20 border border-stroke/30 lg p-4 text-center">
                    <div className="text-3xl mb-2">💙</div>
                    <div className="text-sm font-semibold text-headings">Authentic</div>
                  </div>
                  <div className="bg-secondary/20 border border-stroke/30 lg p-4 text-center">
                    <div className="text-3xl mb-2">❤️</div>
                    <div className="text-sm font-semibold text-headings">Empathetic</div>
                  </div>
                </div>

                <p className="mt-6">These principles guided every decision, from microcopy to button placement to transition timing.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Onboarding Flow - Story */}
      <section className="pb-16 bg-secondary/10">
        <div className="max-w-6xl mx-auto px-6 py-16">
          <div className="max-w-4xl mx-auto mb-12">
            <span className="text-xs uppercase tracking-wide text-accent">First Impressions</span>
            <h2 className="mt-2 font-semibold text-headings text-3xl mb-6">Welcoming users without pressure</h2>
            <p className="text-body2 text-lg">
              The onboarding needed to set the right tone from the start. I designed a 4-step flow that feels calm and goal-oriented without overwhelming new
              users with too much information.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {/* Step 1 */}
            <div className="bg-primary/40 border border-stroke/30 xl p-3 md:p-6 text-center">
              <div className="mb-3 md:mb-4">
                <Image
                  src="/loggi - start step1.png"
                  alt="Loggi onboarding step 1 - Welcome screen"
                  width={200}
                  height={400}
                  className="w-full max-w-[120px] md:max-w-none h-auto lg shadow-lg mx-auto"
                />
              </div>
              <h3 className="font-semibold text-headings text-sm md:text-lg mb-1 md:mb-2">Welcome</h3>
              <p className="text-body text-xs md:text-sm">Soft introduction</p>
            </div>

            <div className="bg-primary/40 border border-stroke/30 xl p-3 md:p-6 text-center">
              <div className="mb-3 md:mb-4">
                <Image
                  src="/loggi - start step2.png"
                  alt="Loggi onboarding step 2 - Getting started"
                  width={200}
                  height={400}
                  className="w-full max-w-[120px] md:max-w-none h-auto lg shadow-lg mx-auto"
                />
              </div>
              <h3 className="font-semibold text-headings text-sm md:text-lg mb-1 md:mb-2">Purpose</h3>
              <p className="text-body text-xs md:text-sm">Clear value</p>
            </div>

            <div className="bg-primary/40 border border-stroke/30 xl p-3 md:p-6 text-center">
              <div className="mb-3 md:mb-4">
                <Image
                  src="/loggi - start step3.png"
                  alt="Loggi onboarding step 3 - Setup preferences"
                  width={200}
                  height={400}
                  className="w-full max-w-[120px] md:max-w-none h-auto lg shadow-lg mx-auto"
                />
              </div>
              <h3 className="font-semibold text-headings text-sm md:text-lg mb-1 md:mb-2">Preferences</h3>
              <p className="text-body text-xs md:text-sm">Light setup</p>
            </div>

            <div className="bg-primary/40 border border-stroke/30 xl p-3 md:p-6 text-center">
              <div className="mb-3 md:mb-4">
                <Image
                  src="/loggi - start step4.png"
                  alt="Loggi onboarding step 4 - Ready to begin"
                  width={200}
                  height={400}
                  className="w-full max-w-[120px] md:max-w-none h-auto lg shadow-lg mx-auto"
                />
              </div>
              <h3 className="font-semibold text-headings text-sm md:text-lg mb-1 md:mb-2">Ready</h3>
              <p className="text-body text-xs md:text-sm">Encouragement</p>
            </div>
          </div>

          <div className="max-w-4xl mx-auto mt-12">
            <p className="text-body text-center">Each screen builds confidence. No clutter. No pressure. Just a gentle invitation to begin.</p>
          </div>
        </div>
      </section>

      {/* Daily Check-in Flow - Story */}
      <section className="pb-16">
        <div className="max-w-6xl mx-auto px-6 py-8">
          <div className="max-w-4xl mx-auto mb-12">
            <span className="text-xs uppercase tracking-wide text-accent">Core Experience</span>
            <h2 className="mt-2 font-semibold text-headings text-3xl mb-6">The heart of Loggi: Daily check-ins</h2>
            <p className="text-body2 text-lg mb-4">
              This is where the design philosophy comes to life. A 5-step flow designed to take under 60 seconds, with clear visual feedback and no judgment.
            </p>
            <p className="text-body">The goal was to make checking in feel like an act of self-care, not another task on a to-do list.</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
            <div className="bg-secondary/20 border border-stroke/30 xl p-3 md:p-6 text-center">
              <div className="mb-3 md:mb-4">
                <Image
                  src="/loggi - checkin step1.png"
                  alt="Loggi daily check-in step 1 - Mood assessment"
                  width={200}
                  height={400}
                  className="w-full max-w-[120px] md:max-w-none h-auto lg shadow-lg mx-auto"
                />
              </div>
              <h3 className="font-semibold text-headings text-sm md:text-lg mb-1 md:mb-2">Mood</h3>
              <p className="text-body text-xs md:text-sm">How are you?</p>
            </div>

            <div className="bg-secondary/20 border border-stroke/30 xl p-3 md:p-6 text-center">
              <div className="mb-3 md:mb-4">
                <Image
                  src="/loggi - checkin step2.png"
                  alt="Loggi daily check-in step 2 - Sleep quality"
                  width={200}
                  height={400}
                  className="w-full max-w-[120px] md:max-w-none h-auto lg shadow-lg mx-auto"
                />
              </div>
              <h3 className="font-semibold text-headings text-sm md:text-lg mb-1 md:mb-2">Sleep</h3>
              <p className="text-body text-xs md:text-sm">How have you slept?</p>
            </div>

            <div className="bg-secondary/20 border border-stroke/30 xl p-3 md:p-6 text-center">
              <div className="mb-3 md:mb-4">
                <Image
                  src="/loggi - checkin step3.png"
                  alt="Loggi daily check-in step 3 - Stress level"
                  width={200}
                  height={400}
                  className="w-full max-w-[120px] md:max-w-none h-auto lg shadow-lg mx-auto"
                />
              </div>
              <h3 className="font-semibold text-headings text-sm md:text-lg mb-1 md:mb-2">Stress</h3>
              <p className="text-body text-xs md:text-sm">Stress level today?</p>
            </div>

            <div className="bg-secondary/20 border border-stroke/30 xl p-3 md:p-6 text-center">
              <div className="mb-3 md:mb-4">
                <Image
                  src="/loggi - checkin step4.png"
                  alt="Loggi daily check-in step 4 - Reflection"
                  width={200}
                  height={400}
                  className="w-full max-w-[120px] md:max-w-none h-auto lg shadow-lg mx-auto"
                />
              </div>
              <h3 className="font-semibold text-headings text-sm md:text-lg mb-1 md:mb-2">Reflection</h3>
              <p className="text-body text-xs md:text-sm">Optional note</p>
            </div>

            <div className="bg-secondary/20 border border-stroke/30 xl p-3 md:p-6 text-center">
              <div className="mb-3 md:mb-4">
                <Image
                  src="/loggi - checkin step5.png"
                  alt="Loggi daily check-in step 5 - Completion"
                  width={200}
                  height={400}
                  className="w-full max-w-[120px] md:max-w-none h-auto lg shadow-lg mx-auto"
                />
              </div>
              <h3 className="font-semibold text-headings text-sm md:text-lg mb-1 md:mb-2">Complete</h3>
              <p className="text-body text-xs md:text-sm">Thank you for checking in</p>
            </div>
          </div>

          <div className="max-w-4xl mx-auto mt-12 space-y-6">
            <p className="text-body">
              Each step uses simple icons, clear labels, and supportive microcopy. The progress is visible but not overwhelming. Users can go back, skip, or
              pause anytime.
            </p>
            <div className="bg-accent/10 border border-accent/20 lg p-6">
              <p className="text-accent font-medium">
                "The flow respects the user's time while gathering meaningful insights. No guilt. No pressure. Just care."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Insights & Profile - Story */}
      <section className="pb-16 bg-secondary/10">
        <div className="max-w-6xl mx-auto px-6 py-16">
          <div className="max-w-4xl mx-auto mb-12">
            <span className="text-xs uppercase tracking-wide text-accent">Making Data Meaningful</span>
            <h2 className="mt-2 font-semibold text-headings text-3xl mb-6">Seeing patterns over time</h2>
            <p className="text-body2 text-lg">
              Check-ins are just the beginning. The real value comes from helping users see patterns, understand trends, and feel more aware of their wellness
              journey.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div>
              <div className="bg-primary/40 border border-stroke/30 xl p-6">
                <div className="mb-6">
                  <Image
                    src="/loggi - insight.png"
                    alt="Loggi insights screen"
                    width={300}
                    height={600}
                    className="w-full max-w-[240px] h-auto lg shadow-lg mx-auto"
                  />
                </div>
                <h3 className="font-semibold text-headings text-xl mb-3 text-center">Insights</h3>
                <p className="text-body text-sm text-center mb-4">
                  Visualized trends help users understand their mood and sleep patterns without feeling data-overwhelmed.
                </p>
                <ul className="space-y-2 text-xs text-body">
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1">•</span>
                    <span>Simple graphs showing weekly and monthly trends</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1">•</span>
                    <span>Gentle observations, not prescriptive advice</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1">•</span>
                    <span>Clear visual hierarchy focusing on key insights</span>
                  </li>
                </ul>
              </div>
            </div>

            <div>
              <div className="bg-primary/40 border border-stroke/30 xl p-6">
                <div className="mb-6">
                  <Image
                    src="/loggi - profil.png"
                    alt="Loggi profile screen"
                    width={300}
                    height={600}
                    className="w-full max-w-[240px] h-auto lg shadow-lg mx-auto"
                  />
                </div>
                <h3 className="font-semibold text-headings text-xl mb-3 text-center">Profile</h3>
                <p className="text-body text-sm text-center mb-4">
                  A clean, accessible space for users to manage preferences and personalize their experience.
                </p>
                <ul className="space-y-2 text-xs text-body">
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1">•</span>
                    <span>Easy access to settings and preferences</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1">•</span>
                    <span>Reminder customization without pushy defaults</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1">•</span>
                    <span>Privacy-first design with clear data controls</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testing & Iteration */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-6">
          <div className="mb-12">
            <span className="text-xs uppercase tracking-wide text-accent">Validation</span>
            <h2 className="mt-2 font-semibold text-headings text-3xl mb-6">Testing with real users</h2>
          </div>

          <div className="space-y-8">
            <p className="text-lg text-body2">
              I tested the high-fidelity prototype with 5 peers to validate the emotional tone, flow clarity, and overall usability.
            </p>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-secondary/20 border border-stroke/30 xl p-6">
                <h3 className="font-semibold text-headings text-lg mb-4 flex items-center gap-2">
                  <span className="text-2xl">✅</span>
                  What worked
                </h3>
                <ul className="space-y-3 text-sm">
                  <li className="flex items-start gap-3">
                    <span className="text-accent mt-1">•</span>
                    <span>The tone felt "calm and approachable", exactly what we wanted</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent mt-1">•</span>
                    <span>Check-in process was fast and easy to complete</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent mt-1">•</span>
                    <span>Visual clarity made navigation intuitive</span>
                  </li>
                </ul>
              </div>

              <div className="bg-secondary/20 border border-stroke/30 xl p-6">
                <h3 className="font-semibold text-headings text-lg mb-4 flex items-center gap-2">
                  <span className="text-2xl">🔄</span>
                  What I improved
                </h3>
                <ul className="space-y-3 text-sm">
                  <li className="flex items-start gap-3">
                    <span className="text-accent mt-1">•</span>
                    <span>Made selected states more visually distinct</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent mt-1">•</span>
                    <span>Changed "Next" button copy to more human language</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent mt-1">•</span>
                    <span>Added back button and progress indicators for clarity</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reflections */}
      <section className="pb-16 bg-accent/5">
        <div className="max-w-4xl mx-auto px-6 py-16">
          <div className="mb-8">
            <span className="text-xs uppercase tracking-wide text-accent">Reflections</span>
            <h2 className="mt-2 font-semibold text-headings text-3xl mb-6">What I learned</h2>
          </div>

          <div className="space-y-8">
            <p className="text-lg text-body2">This project deepened my understanding of how small UX decisions shape emotional experience.</p>

            <div className="space-y-6">
              <div className="bg-primary/60 border border-stroke/30 lg p-6">
                <h3 className="font-semibold text-headings text-lg mb-3">Microcopy matters more than I thought</h3>
                <p className="text-sm text-body">
                  Changing "Next" to "Let's go" or "Complete" to "You're done" made the experience feel more human and supportive. Small words, big impact.
                </p>
              </div>

              <div className="bg-primary/60 border border-stroke/30 lg p-6">
                <h3 className="font-semibold text-headings text-lg mb-3">Visual rhythm creates calm</h3>
                <p className="text-sm text-body">
                  Consistent spacing, subtle animations, and dark UI all contributed to a feeling of "calm focus" that users mentioned in testing.
                </p>
              </div>

              <div className="bg-primary/60 border border-stroke/30 lg p-6">
                <h3 className="font-semibold text-headings text-lg mb-3">Less features, more clarity</h3>
                <p className="text-sm text-body">
                  I initially wanted to add journaling, meditation timers, and habit tracking. But keeping it simple made the experience more approachable.
                </p>
              </div>
            </div>

            <div className="mt-12 bg-accent/10 border border-accent/20 xl p-8">
              <p className="text-accent font-medium text-center text-lg">"Good UX isn't always about more features. It's often about fewer, clearer steps."</p>
            </div>
          </div>
        </div>
      </section>

      {/* Next Steps */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-6">
          <div className="mb-8">
            <span className="text-xs uppercase tracking-wide text-accent">Future Vision</span>
            <h2 className="mt-2 font-semibold text-headings text-3xl mb-6">If I had more time...</h2>
          </div>

          <div className="space-y-6 text-body">
            <p>This was a 2-week sprint, so there's plenty I'd explore further:</p>

            <ul className="space-y-4">
              <li className="flex items-start gap-4">
                <span className="text-accent text-xl mt-1">→</span>
                <div>
                  <h3 className="font-semibold text-headings mb-1">Personalized insights</h3>
                  <p className="text-sm">Adapt the experience based on user patterns, offering relevant tips without being pushy</p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <span className="text-accent text-xl mt-1">→</span>
                <div>
                  <h3 className="font-semibold text-headings mb-1">Reflection tools</h3>
                  <p className="text-sm">Simple exercises or prompts that users can engage with when they want to go deeper</p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <span className="text-accent text-xl mt-1">→</span>
                <div>
                  <h3 className="font-semibold text-headings mb-1">More interactive insights</h3>
                  <p className="text-sm">Let users explore their data in more meaningful ways, connecting mood to sleep, stress to activity, etc.</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Next Project Navigation */}
      <section className="py-16 border-t border-stroke/30">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="space-y-4 mb-8">
            <p className="text-body2 text-lg">Thanks for reading! 🙌</p>
            <p className="text-body">I hope you enjoyed learning about Loggi.</p>
            <p className="text-body">Feel free to explore more of my work or get in touch.</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link href="/case-studies/treebula" className="btn btn-primary">
              Next Project: Treebula →
            </Link>
            <Link href="/#projects" className="btn">
              All Projects
            </Link>
          </div>
        </div>
      </section>
    </article>
  );
}
