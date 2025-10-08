import Image from 'next/image';

export default function Page() {
  return (
    <article className="bg-primary text-body">
      {/* Header */}
      <section className="pt-8 pb-6">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h1 className="font-heading text-headings text-3xl sm:text-4xl md:text-5xl tracking-tight">Treebula Forest Monitoring</h1>
          <p className="mt-3 text-body2">2025 · Product · Mobile · AI/Satellite</p>
          <p className="mt-4">Mobile-first service for forest owners to monitor risk, damage and local conditions using AI & satellite data.</p>
        </div>
      </section>

      {/* Hero visual */}
      <section className="pb-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="rounded-2xl border border-stroke bg-tertiary/20 p-8">
            <div className="relative">
              <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-xl p-8">
                <div className="max-w-5xl mx-auto">
                  <div className="relative rounded-2xl overflow-hidden">
                    <Image
                      src="/Treebula - hero section.png"
                      alt="Treebula forest monitoring app overview"
                      width={1200}
                      height={800}
                      className="w-full h-auto rounded-2xl shadow-2xl"
                      priority
                    />
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
              <span className="text-4xl">🌲</span>
              About the project
            </h2>
            <div className="bg-secondary/20 border border-stroke/30 rounded-xl p-8 space-y-6 text-body leading-relaxed">
              <p className="text-lg">
                Forest Monitoring is a new service from Treebula that enables forest owners to keep track of their forest property – without having to be
                physically on-site. By combining AI and satellite data, the service provides updates on damage, risks, and events in the local area.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-tertiary/20 rounded-lg p-6">
                  <h4 className="font-heading text-headings text-lg mb-4 flex items-center gap-2">
                    <span>🌪️</span>
                    Wind Analysis
                  </h4>
                  <p className="text-sm text-body">Interactive wind rose for specific property</p>
                </div>
                <div className="bg-tertiary/20 rounded-lg p-6">
                  <h4 className="font-heading text-headings text-lg mb-4 flex items-center gap-2">
                    <span>🌤️</span>
                    Weather Forecast
                  </h4>
                  <p className="text-sm text-body">Local weather data tied to the property</p>
                </div>
              </div>
              <p className="text-accent font-medium">
                I was involved from the start and responsible for the entire visual and user-centered design of the service.
              </p>
            </div>
          </div>

          {/* The problem & goals */}
          <div className="relative">
            <div className="absolute -left-4 top-0 w-1 h-16 bg-accent2 rounded-full"></div>
            <h2 className="font-heading text-headings text-3xl mb-8 flex items-center gap-4">
              <span className="text-4xl">🎯</span>
              The problem & goals
            </h2>
            <div className="space-y-8">
              <div className="bg-red-500/10 border border-red-500/20 rounded-xl p-6">
                <h3 className="font-heading text-headings text-xl mb-4 flex items-center gap-2">
                  <span>⚠️</span>
                  The problem
                </h3>
                <p className="text-body leading-relaxed">
                  Many forest owners struggle to keep track of what's happening in their forest. They live far away, don't always have time, or due to age have
                  difficulty getting out into the terrain. This leads to a feeling of worry and uncertainty – especially when it comes to damage like
                  storm-felled trees or bark beetle attacks that are discovered too late.
                </p>
              </div>

              <div className="bg-accent/10 border border-accent/20 rounded-xl p-6">
                <h3 className="font-heading text-headings text-xl mb-4 flex items-center gap-2">
                  <span>✨</span>
                  Our goal
                </h3>
                <p className="text-body leading-relaxed mb-4">To create security and control through a new digital service:</p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="bg-secondary/20 rounded-lg p-4 text-center">
                    <div className="text-2xl mb-2">📊</div>
                    <h4 className="font-heading text-headings text-sm mb-1">Centralized information</h4>
                    <p className="text-xs text-body">One place for all important forest information</p>
                  </div>
                  <div className="bg-secondary/20 rounded-lg p-4 text-center">
                    <div className="text-2xl mb-2">😌</div>
                    <h4 className="font-heading text-headings text-sm mb-1">Peace of mind</h4>
                    <p className="text-xs text-body">Feeling of calm even from a distance</p>
                  </div>
                  <div className="bg-secondary/20 rounded-lg p-4 text-center">
                    <div className="text-2xl mb-2">📱</div>
                    <h4 className="font-heading text-headings text-sm mb-1">Simplicity</h4>
                    <p className="text-xs text-body">Accessible interface for the target group</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Target audience & user needs */}
          <div className="relative">
            <div className="absolute -left-4 top-0 w-1 h-16 bg-accent rounded-full"></div>
            <h2 className="font-heading text-headings text-3xl mb-8 flex items-center gap-4">
              <span className="text-4xl">👥</span>
              Target audience & user needs
            </h2>
            <div className="space-y-8">
              <div className="bg-secondary/20 border border-stroke/30 rounded-xl p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center">
                    <span className="text-2xl">👴</span>
                  </div>
                  <div>
                    <h3 className="font-heading text-headings text-xl">Private forest owners</h3>
                    <p className="text-body2">Age group: 55–80 years</p>
                  </div>
                </div>
                <p className="text-body leading-relaxed">
                  A target group that is often engaged but not always technically savvy – therefore clarity, simplicity, and accessibility were crucial in
                  design decisions.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-tertiary/20 rounded-lg p-6">
                  <h4 className="font-heading text-headings text-lg mb-4 flex items-center gap-2">
                    <span>📡</span>
                    Remote monitoring
                  </h4>
                  <p className="text-sm text-body">Ability to keep track of the forest without being physically on-site</p>
                </div>
                <div className="bg-tertiary/20 rounded-lg p-6">
                  <h4 className="font-heading text-headings text-lg mb-4 flex items-center gap-2">
                    <span>⚡</span>
                    Quick updates
                  </h4>
                  <p className="text-sm text-body">Get information about damage, risks, and weather in real-time</p>
                </div>
                <div className="bg-tertiary/20 rounded-lg p-6">
                  <h4 className="font-heading text-headings text-lg mb-4 flex items-center gap-2">
                    <span>🛡️</span>
                    Security
                  </h4>
                  <p className="text-sm text-body">Feel confident about not missing important information</p>
                </div>
                <div className="bg-tertiary/20 rounded-lg p-6">
                  <h4 className="font-heading text-headings text-lg mb-4 flex items-center gap-2">
                    <span>🎯</span>
                    Simplicity
                  </h4>
                  <p className="text-sm text-body">Avoid technical complexity or complex interfaces</p>
                </div>
              </div>
            </div>
          </div>

          {/* Research & insights */}
          <div className="relative">
            <div className="absolute -left-4 top-0 w-1 h-16 bg-accent2 rounded-full"></div>
            <h2 className="font-heading text-headings text-3xl mb-8 flex items-center gap-4">
              <span className="text-4xl">🔍</span>
              Research & insights
            </h2>
            <div className="bg-secondary/20 border border-stroke/30 rounded-xl p-8 space-y-6 text-body leading-relaxed">
              <p>
                Unlike more traditional UX projects where user interviews or market analyses are often conducted, we built this project instead on internal
                expertise and long industry experience. The insights that drove the development of Forest Monitoring came from close collaboration with
                stakeholders, product owners, and developers – many of them forest owners themselves.
              </p>
              <p>
                Through structured workshops, ongoing discussions, and joint decisions, I was able to share in their deep knowledge of the target group's needs,
                daily life, and challenges. This made it possible to quickly test ideas, iterate, and ensure that every function created real value.
              </p>
              <p>
                We started from a shared desire to challenge the forest industry's traditional way of working and create something new – something that didn't
                really exist before.
              </p>
              <div className="bg-accent/10 border border-accent/20 rounded-lg p-6 mt-6">
                <h3 className="font-heading text-headings text-lg mb-4">🔍 Key insights:</h3>
                <ul className="space-y-3 text-sm">
                  <li className="flex items-start gap-3">
                    <span className="text-accent mt-1">•</span>
                    <span>
                      <strong>Distance creates worry:</strong> Many forest owners feel powerless and uncertain when they don't know what's happening on the
                      property, especially if they live far away.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent mt-1">•</span>
                    <span>
                      <strong>Time-critical information:</strong> It's common to find out about damage like storm-felled trees or bark beetle attacks too late.
                      Real-time updates are requested.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent mt-1">•</span>
                    <span>
                      <strong>Need for simplicity:</strong> Our target group is often older and not technically savvy. The interface must be safe, clear, and
                      easy to understand.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent mt-1">•</span>
                    <span>
                      <strong>Local and relevant data:</strong> Users want specific information about their own property, not general data about forestry in
                      general.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent mt-1">•</span>
                    <span>
                      <strong>Security over control:</strong> Many don't want to control everything themselves, but rather feel that they have oversight –
                      without having to act all the time.
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Design process */}
          <div className="relative">
            <div className="absolute -left-4 top-0 w-1 h-16 bg-accent rounded-full"></div>
            <h2 className="font-heading text-headings text-3xl mb-8 flex items-center gap-4">
              <span className="text-4xl">🛠️</span>
              Design process
            </h2>
            <div className="bg-secondary/20 border border-stroke/30 rounded-xl p-8 space-y-6 text-body leading-relaxed">
              <p>
                My role as a UX designer was to take all the ideas and insights from the team and transform them into a working, visual, and user-friendly
                product. It has been far from a linear journey – rather a roller coaster of rapid iterations, feedback rounds, and new insights along the way.
                Since we were building something that didn't exist on the market before, both flexibility and close collaboration were required throughout the
                process.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-tertiary/20 rounded-lg p-6">
                  <h4 className="font-heading text-headings text-lg mb-4 flex items-center gap-2">
                    <span>📐</span>
                    Wireframes
                  </h4>
                  <p className="text-sm text-body">Simple wireframes to quickly visualize the product's basic structure and flow</p>
                </div>
                <div className="bg-tertiary/20 rounded-lg p-6">
                  <h4 className="font-heading text-headings text-lg mb-4 flex items-center gap-2">
                    <span>🎨</span>
                    Interactive prototypes
                  </h4>
                  <p className="text-sm text-body">Built in Figma to test interactions and flows in practice</p>
                </div>
                <div className="bg-tertiary/20 rounded-lg p-6">
                  <h4 className="font-heading text-headings text-lg mb-4 flex items-center gap-2">
                    <span>🔄</span>
                    Rapid iterations
                  </h4>
                  <p className="text-sm text-body">Continuous testing and adjustments in close dialogue with stakeholders</p>
                </div>
              </div>
              <div className="bg-accent/10 border border-accent/20 rounded-lg p-6 mt-6">
                <h3 className="font-heading text-headings text-lg mb-4">👥 Adapted for the target group</h3>
                <p className="mb-4">
                  Since our target group is older and often less technically savvy, clarity and simplicity have been central to all design decisions. I have
                  focused heavily on:
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-3">
                    <span className="text-accent mt-1">•</span>
                    <span>Clear visual hierarchies</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent mt-1">•</span>
                    <span>Easy-to-read typography</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent mt-1">•</span>
                    <span>High contrast colors</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent mt-1">•</span>
                    <span>Icons and components with clear function</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent mt-1">•</span>
                    <span>Minimal number of choices per screen to reduce cognitive load</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Design principles & key features */}
          <div className="relative">
            <div className="absolute -left-4 top-0 w-1 h-16 bg-accent2 rounded-full"></div>
            <h2 className="font-heading text-headings text-3xl mb-8 flex items-center gap-4">
              <span className="text-4xl">🎨</span>
              Design principles & key features
            </h2>
            <div className="bg-secondary/20 border border-stroke/30 rounded-xl p-8 space-y-6 text-body leading-relaxed">
              <p>
                Designing for our target group has been both the biggest challenge and the most important success factor. Our users are often between 55 and 80
                years old, and many are unfamiliar with new technology – while Treebula wants to position itself as a modern, innovative tech company. Balancing
                these two perspectives has been central to all design decisions.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-tertiary/20 rounded-lg p-6">
                  <h4 className="font-heading text-headings text-lg mb-4 flex items-center gap-2">
                    <span>💡</span>
                    Design principles
                  </h4>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-3">
                      <span className="text-accent mt-1">•</span>
                      <span>
                        <strong>Simple and clear:</strong> Interface designed to require minimal technical competence
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-accent mt-1">•</span>
                      <span>
                        <strong>Accessible for all:</strong> Active work with WCAG guidelines and clear contrasts
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-accent mt-1">•</span>
                      <span>
                        <strong>Modern minimalism:</strong> Clean aesthetics that signal innovation
                      </span>
                    </li>
                  </ul>
                </div>
                <div className="bg-tertiary/20 rounded-lg p-6">
                  <h4 className="font-heading text-headings text-lg mb-4 flex items-center gap-2">
                    <span>🔑</span>
                    Key features
                  </h4>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-3">
                      <span className="text-accent mt-1">•</span>
                      <span>Forest property status overview</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-accent mt-1">•</span>
                      <span>Real-time risk and damage indicators</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-accent mt-1">•</span>
                      <span>Interactive wind analysis</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-accent mt-1">•</span>
                      <span>Local weather forecast</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-accent mt-1">•</span>
                      <span>Clear visual risk level indicators</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Testing & iteration */}
          <div className="relative">
            <div className="absolute -left-4 top-0 w-1 h-16 bg-accent rounded-full"></div>
            <h2 className="font-heading text-headings text-3xl mb-8 flex items-center gap-4">
              <span className="text-4xl">🧪</span>
              Testing & iteration
            </h2>
            <div className="bg-secondary/20 border border-stroke/30 rounded-xl p-8 space-y-6 text-body leading-relaxed">
              <p>
                Since the service has just been launched, we didn't have time to conduct formal user tests before release. However, the entire design process
                has been strongly iterative, with tight feedback loops together with stakeholders and developers. By showing wireframes and prototypes early, I
                was able to make quick adjustments and test ideas in real-time during development.
              </p>
              <p>
                Creating something completely new in a conservative industry has required courage to dare to test, throw away, and start over – and it's
                precisely in these rapid iterations that much of the service's functionality has taken shape.
              </p>
              <div className="bg-accent/10 border border-accent/20 rounded-lg p-6 mt-6">
                <h3 className="font-heading text-headings text-lg mb-4">🧪 Next steps</h3>
                <p className="mb-4">
                  Now that Forest Monitoring is live, I look forward to gathering feedback from real users. This will give us the opportunity to:
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-3">
                    <span className="text-accent mt-1">•</span>
                    <span>Test the interface with the target group (55–80 years)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent mt-1">•</span>
                    <span>Identify any usability issues</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent mt-1">•</span>
                    <span>Prioritize improvements and new features</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Results */}
          <div className="relative">
            <div className="absolute -left-4 top-0 w-1 h-16 bg-accent2 rounded-full"></div>
            <h2 className="font-heading text-headings text-3xl mb-8 flex items-center gap-4">
              <span className="text-4xl">📊</span>
              Results
            </h2>
            <div className="bg-secondary/20 border border-stroke/30 rounded-xl p-8 space-y-6 text-body leading-relaxed">
              <p>
                The launch of Forest Monitoring marks a major step forward for Treebula – and for forest owners in Sweden. The service makes it possible to
                monitor and gain insights about your forest in a completely new way, directly from your mobile phone. By combining AI and satellite data with an
                accessible interface, we have created a solution that feels both modern and is easy to use, even for a technically inexperienced target group.
              </p>
              <p>
                The project is also proof of how close collaboration between design, development, and business can lead to a product that is not only usable but
                also strengthens the brand and meets a real need in a traditionally analog industry.
              </p>
            </div>
          </div>

          {/* Reflection & lessons learned */}
          <div className="relative">
            <div className="absolute -left-4 top-0 w-1 h-16 bg-accent rounded-full"></div>
            <h2 className="font-heading text-headings text-3xl mb-8 flex items-center gap-4">
              <span className="text-4xl">📚</span>
              Reflection & lessons learned
            </h2>
            <div className="space-y-8">
              <div className="bg-secondary/20 border border-stroke/30 rounded-xl p-8 space-y-6 text-body leading-relaxed">
                <p>
                  This project has been one of the most educational experiences in my design journey. From a "fuzzy" idea to a finished product, I have seen the
                  value in daring to experiment, iterate quickly, and trust the process.
                </p>
                <p>
                  An important insight has been that user research doesn't always have to follow a traditional pattern – in this case, the strongest insights
                  came from internal expertise, which in itself was deeply rooted in the target group's reality.
                </p>
                <p>
                  I have also learned a lot about the balance between function and aesthetics. Designing for an older and less technically savvy target group,
                  without compromising on a modern feel, has deepened my understanding of how design can unite usability and innovation.
                </p>
                <p>
                  Team collaboration has been crucial – when design, technology, and business goals work together for real, you can create products that not
                  only work but actually make a difference.
                </p>
                <div className="bg-accent/10 border border-accent/20 rounded-lg p-6">
                  <h3 className="font-heading text-headings text-lg mb-4">Key takeaways:</h3>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-3">
                      <span className="text-accent mt-1">•</span>
                      <span>
                        <strong>Trust the process</strong> — rapid iteration and experimentation can lead to breakthrough solutions
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-accent mt-1">•</span>
                      <span>
                        <strong>Internal expertise matters</strong> — sometimes the best insights come from within the team
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-accent mt-1">•</span>
                      <span>
                        <strong>Balance is key</strong> — modern design can be both innovative and accessible
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-accent mt-1">•</span>
                      <span>
                        <strong>Collaboration drives success</strong> — when design, tech, and business align, magic happens
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </article>
  );
}
