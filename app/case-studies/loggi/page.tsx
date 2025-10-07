import Image from 'next/image';

export default function Page() {
  return (
    <article className="bg-primary text-body">
      {/* Header */}
      <section className="pt-8 pb-6">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h1 className="font-heading text-headings text-3xl sm:text-4xl md:text-5xl tracking-tight">Loggi — Wellness App</h1>
          <p className="mt-3 text-body2">2025 · UX/UI · Accessibility · Mobile</p>
          <p className="mt-4">Concept app for calm, accessible daily check-ins on mood, sleep and stress. Designed for reflection without pressure.</p>
        </div>
      </section>

      {/* Hero visual */}
      <section className="pb-12">
        <div className="max-w-6xl mx-auto px-6">
          <div className="rounded-2xl border border-stroke bg-tertiary/20 p-8">
            {/* Loggi App Mockup */}
            <div className="relative">
              <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-xl p-8 text-center">
                <div className="max-w-5xl mx-auto">
                  <h3 className="text-2xl font-heading text-headings mb-6">Loggi App Mockups</h3>
                  <p className="text-body2 mb-8">
                    iPhone mockups showing the Loggi wellness app interface:
                    <br />
                    Onboarding flow and dashboard with wellness tracking
                  </p>

                  {/* Image Container */}
                  <div className="relative rounded-2xl overflow-hidden">
                    <Image
                      src="/loggi-mockup.jpg"
                      alt="Loggi wellness app mockups showing iPhone screens with onboarding and dashboard interfaces"
                      width={800}
                      height={600}
                      className="w-full h-auto rounded-2xl shadow-2xl"
                      priority
                    />
                  </div>

                  <div className="flex justify-center gap-4 text-sm text-body mt-6">
                    <div className="bg-secondary/40 px-4 py-2 rounded-lg">Welcome Screen</div>
                    <div className="bg-secondary/40 px-4 py-2 rounded-lg">Dashboard View</div>
                    <div className="bg-secondary/40 px-4 py-2 rounded-lg">Wellness Tracking</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content blocks */}
      <section className="pb-16">
        <div className="max-w-4xl mx-auto px-6 space-y-16">
          {/* About the project */}
          <div className="relative">
            <div className="absolute -left-4 top-0 w-1 h-16 bg-accent rounded-full"></div>
            <h2 className="font-heading text-headings text-3xl mb-8 flex items-center gap-4">
              <span className="text-4xl">💙</span>
              About the project
            </h2>
            <div className="bg-secondary/20 border border-stroke/30 rounded-xl p-8 space-y-6 text-body leading-relaxed">
              <p className="text-lg">
                This was a 2-week concept sprint to design a wellness app from scratch. I explored the full UX process — from defining user needs and emotional
                tone, to prototyping and testing high-fidelity flows.
              </p>
            </div>
          </div>

          {/* Who I designed for */}
          <div className="relative">
            <div className="absolute -left-4 top-0 w-1 h-16 bg-accent2 rounded-full"></div>
            <h2 className="font-heading text-headings text-3xl mb-8 flex items-center gap-4">
              <span className="text-4xl">👥</span>
              Who I designed for
            </h2>
            <div className="bg-secondary/20 border border-stroke/30 rounded-xl p-8 space-y-6 text-body leading-relaxed">
              <p className="text-lg">
                Loggi was created for people who want to build healthy daily habits — but feel overwhelmed by wellness tools that are too intense or rigid. The
                goal was to create a space that feels calming, safe, and easy to return to, even on off days.
              </p>
            </div>
          </div>

          {/* Competitor analysis */}
          <div className="relative">
            <div className="absolute -left-4 top-0 w-1 h-16 bg-accent rounded-full"></div>
            <h2 className="font-heading text-headings text-3xl mb-8 flex items-center gap-4">
              <span className="text-4xl">🔍</span>
              Competitor analysis
            </h2>
            <div className="bg-secondary/20 border border-stroke/30 rounded-xl p-8 space-y-6 text-body leading-relaxed">
              <p>
                To better understand the landscape of mood and habit tracking, I reviewed a handful of apps that combine wellness, daily check-ins, and
                emotional reflection. I focused on how they structure their flows, communicate with users, and balance clarity with calm.
              </p>
            </div>
          </div>

          {/* Assumptions & Hypotheses */}
          <div className="relative">
            <div className="absolute -left-4 top-0 w-1 h-16 bg-accent2 rounded-full"></div>
            <h2 className="font-heading text-headings text-3xl mb-8 flex items-center gap-4">
              <span className="text-4xl">💭</span>
              Assumptions & Hypotheses
            </h2>
            <div className="space-y-8">
              <div className="bg-secondary/20 border border-stroke/30 rounded-xl p-8">
                <p className="text-body leading-relaxed mb-6">
                  Before diving into design, I outlined a few core assumptions about user behavior and created hypotheses to guide decisions throughout the
                  process. These helped ensure the experience stayed aligned with user needs and emotional goals.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="font-heading text-headings text-xl mb-4 flex items-center gap-2">
                      <span>📋</span>
                      Assumptions
                    </h3>
                    <ul className="space-y-3 text-sm">
                      <li className="flex items-start gap-3">
                        <span className="text-accent mt-1">•</span>
                        <span>Users want to check in with their mood and sleep regularly, but don&apos;t want a long process</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-accent mt-1">•</span>
                        <span>Many wellness apps feel overwhelming or too content-heavy</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-accent mt-1">•</span>
                        <span>Simple, consistent tracking over time can make users feel more in control</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-accent mt-1">•</span>
                        <span>Users prefer light emotional tone — not overly &quot;cheery&quot; or clinical</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-accent mt-1">•</span>
                        <span>A dark, focused UI helps create a calm feeling — especially in the evening</span>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-heading text-headings text-xl mb-4 flex items-center gap-2">
                      <span>🎯</span>
                      Hypotheses
                    </h3>
                    <ul className="space-y-3 text-sm">
                      <li className="flex items-start gap-3">
                        <span className="text-accent mt-1">•</span>
                        <span>A check-in flow under one minute will increase the likelihood of daily use</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-accent mt-1">•</span>
                        <span>Visualizing weekly patterns will help users feel more aware and in control</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-accent mt-1">•</span>
                        <span>Using a non-pushy tone creates a safe emotional space</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-accent mt-1">•</span>
                        <span>A calm, goal-based onboarding will increase completion rates</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-accent mt-1">•</span>
                        <span>Consistent layout and iconography will reduce friction</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Personal Insight */}
          <div className="relative">
            <div className="absolute -left-4 top-0 w-1 h-16 bg-accent rounded-full"></div>
            <h2 className="font-heading text-headings text-3xl mb-8 flex items-center gap-4">
              <span className="text-4xl">💡</span>
              Personal Insight
            </h2>
            <div className="bg-accent/10 border border-accent/20 rounded-xl p-8 space-y-6 text-body leading-relaxed">
              <p>
                Since this was a fast concept project, I didn&apos;t conduct formal interviews — but I drew heavily from personal experience and reflection.
                I&apos;ve often found that wellness apps can feel too demanding or overly cheerful, which makes them harder to return to consistently.
              </p>
              <p className="text-accent font-medium">
                Loggi was shaped around the idea that checking in with yourself should feel like an act of care, not pressure. That emotional foundation helped
                guide decisions about tone, pace, and visual rhythm throughout the app.
              </p>
            </div>
          </div>

          {/* User needs & goals */}
          <div className="relative">
            <div className="absolute -left-4 top-0 w-1 h-16 bg-accent2 rounded-full"></div>
            <h2 className="font-heading text-headings text-3xl mb-8 flex items-center gap-4">
              <span className="text-4xl">🎯</span>
              User needs & goals
            </h2>
            <div className="bg-secondary/20 border border-stroke/30 rounded-xl p-8 space-y-6 text-body leading-relaxed">
              <p>
                After gathering insights and emotional direction during the research phase, it was time to define the foundation of the product experience. This
                stage focused on clearly identifying what users need, how they want to feel, and what the design should accomplish — all leading toward a more
                focused and intentional solution.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-tertiary/20 rounded-lg p-6">
                  <h4 className="font-heading text-headings text-lg mb-4 flex items-center gap-2">
                    <span>🛡️</span>
                    Emotionally safe
                  </h4>
                  <p className="text-sm text-body">Calm tone, no guilt for missed days</p>
                </div>
                <div className="bg-tertiary/20 rounded-lg p-6">
                  <h4 className="font-heading text-headings text-lg mb-4 flex items-center gap-2">
                    <span>⚡</span>
                    Quick check-ins
                  </h4>
                  <p className="text-sm text-body">Under 1 minute, easy to repeat</p>
                </div>
                <div className="bg-tertiary/20 rounded-lg p-6">
                  <h4 className="font-heading text-headings text-lg mb-4 flex items-center gap-2">
                    <span>📊</span>
                    See patterns
                  </h4>
                  <p className="text-sm text-body">Mood and sleep trends over time</p>
                </div>
                <div className="bg-tertiary/20 rounded-lg p-6">
                  <h4 className="font-heading text-headings text-lg mb-4 flex items-center gap-2">
                    <span>💭</span>
                    Micro-support
                  </h4>
                  <p className="text-sm text-body">Space for journaling and reflection</p>
                </div>
              </div>
            </div>
          </div>

          {/* Tone & Emotion */}
          <div className="relative">
            <div className="absolute -left-4 top-0 w-1 h-16 bg-accent rounded-full"></div>
            <h2 className="font-heading text-headings text-3xl mb-8 flex items-center gap-4">
              <span className="text-4xl">💬</span>
              Tone & Emotion
            </h2>
            <div className="bg-secondary/20 border border-stroke/30 rounded-xl p-8 space-y-6 text-body leading-relaxed">
              <p>
                The tone of Loggi was designed to feel calm, consistent and emotionally safe. I wanted to avoid the pressure and &quot;productivity
                language&quot; often found in wellness tools, and instead create a space that gently supports the user, even on off days.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-tertiary/20 rounded-lg p-6">
                  <h4 className="font-heading text-headings text-lg mb-4 flex items-center gap-2">
                    <span>🤝</span>
                    Supportive
                  </h4>
                  <p className="text-sm text-body">Language that encourages without pushing, allowing users to feel guided rather than instructed</p>
                </div>
                <div className="bg-tertiary/20 rounded-lg p-6">
                  <h4 className="font-heading text-headings text-lg mb-4 flex items-center gap-2">
                    <span>🌸</span>
                    Gentle
                  </h4>
                  <p className="text-sm text-body">Soft, approachable language that creates a sense of calm and ease throughout the experience</p>
                </div>
                <div className="bg-tertiary/20 rounded-lg p-6">
                  <h4 className="font-heading text-headings text-lg mb-4 flex items-center gap-2">
                    <span>💙</span>
                    Authentic
                  </h4>
                  <p className="text-sm text-body">Human-centered communication that feels personal and genuine rather than clinical or robotic</p>
                </div>
                <div className="bg-tertiary/20 rounded-lg p-6">
                  <h4 className="font-heading text-headings text-lg mb-4 flex items-center gap-2">
                    <span>❤️</span>
                    Empathetic
                  </h4>
                  <p className="text-sm text-body">Understanding language that acknowledges users&apos; feelings and meets them where they are</p>
                </div>
              </div>
            </div>
          </div>

          {/* Design goals */}
          <div className="relative">
            <div className="absolute -left-4 top-0 w-1 h-16 bg-accent2 rounded-full"></div>
            <h2 className="font-heading text-headings text-3xl mb-8 flex items-center gap-4">
              <span className="text-4xl">🎨</span>
              Design goals
            </h2>
            <div className="bg-secondary/20 border border-stroke/30 rounded-xl p-8 space-y-6 text-body leading-relaxed">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-tertiary/20 rounded-lg p-6">
                  <h4 className="font-heading text-headings text-lg mb-4 flex items-center gap-2">
                    <span>⚡</span>
                    Easy check-ins
                  </h4>
                  <p className="text-sm text-body">Make the daily flow quick, intuitive, and repeatable in under one minute</p>
                </div>
                <div className="bg-tertiary/20 rounded-lg p-6">
                  <h4 className="font-heading text-headings text-lg mb-4 flex items-center gap-2">
                    <span>🛡️</span>
                    Emotional safety
                  </h4>
                  <p className="text-sm text-body">Use soft microcopy and non-pushy language to reduce pressure and support self-compassion</p>
                </div>
                <div className="bg-tertiary/20 rounded-lg p-6">
                  <h4 className="font-heading text-headings text-lg mb-4 flex items-center gap-2">
                    <span>👁️</span>
                    Visual clarity
                  </h4>
                  <p className="text-sm text-body">Help users see patterns over time through simple graphs and summaries</p>
                </div>
                <div className="bg-tertiary/20 rounded-lg p-6">
                  <h4 className="font-heading text-headings text-lg mb-4 flex items-center gap-2">
                    <span>🤗</span>
                    Gentle feedback
                  </h4>
                  <p className="text-sm text-body">Reinforce user progress with calm, encouraging language — even on tough days</p>
                </div>
                <div className="bg-tertiary/20 rounded-lg p-6 md:col-span-2">
                  <h4 className="font-heading text-headings text-lg mb-4 flex items-center gap-2">
                    <span>🎯</span>
                    Minimal friction
                  </h4>
                  <p className="text-sm text-body">Keep the UI clean and accessible to support consistency and reduce cognitive load</p>
                </div>
              </div>
            </div>
          </div>

          {/* Design challenge */}
          <div className="relative">
            <div className="absolute -left-4 top-0 w-1 h-16 bg-accent rounded-full"></div>
            <h2 className="font-heading text-headings text-3xl mb-8 flex items-center gap-4">
              <span className="text-4xl">🤔</span>
              Design challenge
            </h2>
            <div className="bg-accent/10 border border-accent/20 rounded-xl p-8 space-y-6 text-body leading-relaxed">
              <h3 className="font-heading text-headings text-xl mb-4">
                How might we design a daily wellness tool that feels calm, supportive, and emotionally safe — while still helping users build consistent habits
                over time?
              </h3>
              <p>
                Many wellness apps can feel overwhelming or overly focused on productivity. Loggi needed to take a softer approach: one that encourages
                reflection, avoids guilt, and meets users with empathy — especially on off days.
              </p>
            </div>
          </div>

          {/* Wireframes */}
          <div className="relative">
            <div className="absolute -left-4 top-0 w-1 h-16 bg-accent2 rounded-full"></div>
            <h2 className="font-heading text-headings text-3xl mb-8 flex items-center gap-4">
              <span className="text-4xl">📐</span>
              Wireframes
            </h2>
            <div className="bg-secondary/20 border border-stroke/30 rounded-xl p-8 space-y-6 text-body leading-relaxed">
              <p>
                Once the user needs, emotional goals, and design principles were defined, I created mid-fidelity wireframes to explore the overall structure,
                layout, and flow of the app. These wireframes helped shape how users would move through the experience — from onboarding to daily logging to
                deeper insights.
              </p>
            </div>
          </div>

          {/* HI-FI Mockups */}
          <div className="relative">
            <div className="absolute -left-4 top-0 w-1 h-16 bg-accent rounded-full"></div>
            <h2 className="font-heading text-headings text-3xl mb-8 flex items-center gap-4">
              <span className="text-4xl">🎨</span>
              HI-FI Mockups
            </h2>
            <div className="bg-secondary/20 border border-stroke/30 rounded-xl p-8 space-y-6 text-body leading-relaxed">
              <p>
                Once the user needs, emotional goals, and design principles were defined, I created mid-fidelity wireframes to explore the overall structure,
                layout, and flow of the app. These wireframes helped shape how users would move through the experience — from onboarding to daily logging to
                deeper insights.
              </p>
            </div>
          </div>

          {/* Peer testing & iterations */}
          <div className="relative">
            <div className="absolute -left-4 top-0 w-1 h-16 bg-accent2 rounded-full"></div>
            <h2 className="font-heading text-headings text-3xl mb-8 flex items-center gap-4">
              <span className="text-4xl">🧪</span>
              Peer testing & iterations
            </h2>
            <div className="space-y-8">
              <div className="bg-secondary/20 border border-stroke/30 rounded-xl p-8 space-y-6 text-body leading-relaxed">
                <p>
                  After building a high-fidelity prototype of Loggi, I conducted peer testing with fellow friends. The goal was to validate whether the app felt
                  calm, intuitive, and emotionally safe to use — especially during the daily check-in flow.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="font-heading text-headings text-xl mb-4 flex items-center gap-2">
                      <span>🔍</span>
                      What I tested
                    </h3>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-start gap-3">
                        <span className="text-accent mt-1">•</span>
                        <span>The onboarding experience and tone</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-accent mt-1">•</span>
                        <span>The daily check-in flow (mood, sleep, stress)</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-accent mt-1">•</span>
                        <span>Navigation between Home, Insights, and Profile</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-accent mt-1">•</span>
                        <span>Visual clarity, copy, and selected states</span>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-heading text-headings text-xl mb-4 flex items-center gap-2">
                      <span>💬</span>
                      Key feedback
                    </h3>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-start gap-3">
                        <span className="text-accent mt-1">•</span>
                        <span>Calm and approachable tone</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-accent mt-1">•</span>
                        <span>The check-in process was fast and easy to complete</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-accent mt-1">•</span>
                        <span>Selected states were sometimes unclear</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-accent mt-1">•</span>
                        <span>The &quot;insights&quot; screen was useful, but could be more interactive</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-accent mt-1">•</span>
                        <span>&quot;Next&quot; button copy could feel more human</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Before & After */}
          <div className="relative">
            <div className="absolute -left-4 top-0 w-1 h-16 bg-accent rounded-full"></div>
            <h2 className="font-heading text-headings text-3xl mb-8 flex items-center gap-4">
              <span className="text-4xl">🔄</span>
              Before & After – Improving clarity and emotional tone
            </h2>
            <div className="bg-secondary/20 border border-stroke/30 rounded-xl p-8 space-y-6 text-body leading-relaxed">
              <p>
                Peer feedback led to a set of refinements to improve clarity, tone and navigation. Below is a visual comparison of one of the most impactful
                changes.
              </p>

              <div className="bg-tertiary/20 rounded-lg p-6 mt-6">
                <h3 className="font-heading text-headings text-lg mb-4">Improvements made:</h3>
                <ul className="space-y-3 text-sm">
                  <li className="flex items-start gap-3">
                    <span className="text-accent mt-1">•</span>
                    <span>
                      <strong>Added back button & guiding headers</strong> - To reduce confusion and improve the overall flow, each step in the check-in process
                      now starts with a clear, contextual headline and a back button for smoother navigation
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent mt-1">•</span>
                    <span>
                      <strong>Clarified progress indicators</strong> - The progress bar was visually refined and paired with supporting text, helping users
                      understand where they are in the flow
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent mt-1">•</span>
                    <span>
                      <strong>Humanized CTA copy</strong> - The &quot;Next&quot; button was updated to more supportive phrases like &quot;Let&apos;s go&quot;
                      and &quot;Continue&quot;, in line with Loggi&apos;s calm and encouraging tone
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent mt-1">•</span>
                    <span>
                      <strong>Refined selected states</strong> - To reduce visual competition with the primary CTA, selected states were redesigned with lighter
                      styles and clearer contrast
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* What I learned */}
          <div className="relative">
            <div className="absolute -left-4 top-0 w-1 h-16 bg-accent2 rounded-full"></div>
            <h2 className="font-heading text-headings text-3xl mb-8 flex items-center gap-4">
              <span className="text-4xl">📚</span>
              What I learned
            </h2>
            <div className="space-y-8">
              <div className="bg-secondary/20 border border-stroke/30 rounded-xl p-8 space-y-6 text-body leading-relaxed">
                <p>
                  Working on Loggi deepened my understanding of how small UX decisions can impact emotional tone. I learned how to design for calmness and
                  clarity — not just in structure, but in copy, flow and feedback. Creating a supportive and guilt-free experience meant reconsidering details I
                  might normally overlook, like selected states or CTA language.
                </p>

                <div className="bg-accent/10 border border-accent/20 rounded-lg p-6">
                  <h3 className="font-heading text-headings text-lg mb-4">Key takeaways:</h3>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-3">
                      <span className="text-accent mt-1">•</span>
                      <span>
                        <strong>Microcopy matters</strong> — soft, human language can make a tool feel safer
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-accent mt-1">•</span>
                      <span>
                        <strong>Visual rhythm</strong> (spacing, hierarchy, tone) affects how &quot;calm&quot; a product feels
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-accent mt-1">•</span>
                      <span>
                        <strong>Peer testing</strong> doesn&apos;t need to be extensive to be effective
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-accent mt-1">•</span>
                      <span>
                        <strong>Good UX isn&apos;t always about more features</strong> — it&apos;s often about fewer, clearer steps
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* If I had more time */}
          <div className="relative">
            <div className="absolute -left-4 top-0 w-1 h-16 bg-accent rounded-full"></div>
            <h2 className="font-heading text-headings text-3xl mb-8 flex items-center gap-4">
              <span className="text-4xl">⏰</span>
              If I had more time
            </h2>
            <div className="bg-secondary/20 border border-stroke/30 rounded-xl p-8 space-y-6 text-body leading-relaxed">
              <p>
                I would have explored adding a more thoughtful loading or welcome screen to set the tone as the user enters the app — especially after
                onboarding. I also wanted to design a set of simple exercises or reflective tools that users could engage with directly in the app, to support
                habit-building beyond logging.
              </p>
              <p>
                The insights screen would benefit from more interactivity, and I would have looked into ways to personalize the experience further — adapting
                content and tone based on user preferences or patterns over time.
              </p>
            </div>
          </div>
        </div>
      </section>
    </article>
  );
}
