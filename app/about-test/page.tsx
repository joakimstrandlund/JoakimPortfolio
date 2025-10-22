import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft } from 'lucide-react';

export default function AboutTest() {
  return (
    <div className="bg-primary-bg text-body min-h-screen">
      {/* Header */}
      <div className="max-w-6xl mx-auto px-6 py-12">
        <h1 className="font-heading text-heading text-4xl mb-4">About Me Design Options</h1>
        <p className="text-muted">Choose your preferred about page layout</p>
      </div>

      {/* Option 1: Current Layout (Centered) */}
      <section className="py-16 border-t border-border">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-8">
            <span className="text-xs uppercase tracking-wide text-accent">Option 1</span>
            <h2 className="font-heading text-heading text-2xl mt-2">Current Layout (Centered)</h2>
          </div>

          <div className="bg-secondary-bg border border-border p-12">
            <div className="max-w-4xl mx-auto">
              {/* Hero section */}
              <div className="text-center mb-16">
                <h1 className="font-display text-4xl sm:text-5xl text-heading leading-tight mb-6">About me</h1>
                <p className="text-lg text-muted leading-relaxed max-w-2xl mx-auto">
                  I'm a UX/UI designer passionate about creating digital experiences that make a difference.
                </p>
              </div>

              {/* Profile image */}
              <div className="flex justify-center mb-16">
                <div className="w-48 h-48 border border-border overflow-hidden">
                  <Image src="/Bild joakim .png" alt="Joakim" width={192} height={192} className="w-full h-full object-cover" />
                </div>
              </div>

              {/* Story */}
              <div className="mb-16">
                <h2 className="font-heading font-semibold text-heading text-2xl mb-6">My story</h2>
                <div className="space-y-4 text-body leading-relaxed">
                  <p>
                    I'm a UX designer with front-end skills and a background as an Account Manager in the startup and SaaS world. My curiosity for how design
                    shapes real experiences led me to study UX, where I've focused on creating intuitive, user-centered digital solutions.
                  </p>
                  <p>
                    At Treebula, I first joined as a UX intern and later continued working with the team, collaborating closely with developers and the
                    marketing department.
                  </p>
                </div>
              </div>

              {/* Approach grid */}
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <h3 className="font-heading font-semibold text-heading text-lg">User-first thinking</h3>
                  <p className="text-body leading-relaxed">
                    Every design decision starts with understanding the user. I spend time researching, interviewing, and observing to ensure solutions address
                    real needs.
                  </p>
                </div>
                <div className="space-y-4">
                  <h3 className="font-heading font-semibold text-heading text-lg">Collaborative process</h3>
                  <p className="text-body leading-relaxed">
                    Great products come from great teams. I work closely with developers, product managers, and stakeholders to align on goals.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Option 2: Side by Side (Image + Text) */}
      <section className="py-16 border-t border-border">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-8">
            <span className="text-xs uppercase tracking-wide text-accent">Option 2</span>
            <h2 className="font-heading text-heading text-2xl mt-2">Side by Side Layout</h2>
          </div>

          <div className="bg-secondary-bg border border-border p-12">
            <div className="max-w-6xl mx-auto">
              {/* Hero section */}
              <div className="mb-16">
                <h1 className="font-display text-4xl sm:text-5xl text-heading leading-tight mb-4">About me</h1>
                <p className="text-lg text-muted leading-relaxed max-w-3xl">
                  I'm a UX/UI designer passionate about creating digital experiences that make a difference.
                </p>
              </div>

              {/* Image + Story side by side */}
              <div className="grid lg:grid-cols-2 gap-12 mb-16">
                <div>
                  <div className="w-full aspect-square border border-border overflow-hidden sticky top-8">
                    <Image src="/Bild joakim .png" alt="Joakim" width={500} height={500} className="w-full h-full object-cover" />
                  </div>
                </div>

                <div className="space-y-12">
                  <div>
                    <h2 className="font-heading font-semibold text-heading text-2xl mb-6">My story</h2>
                    <div className="space-y-4 text-body leading-relaxed">
                      <p>
                        I'm a UX designer with front-end skills and a background as an Account Manager in the startup and SaaS world. My curiosity for how
                        design shapes real experiences led me to study UX.
                      </p>
                      <p>
                        At Treebula, I first joined as a UX intern and later continued working with the team, collaborating closely with developers and the
                        marketing department.
                      </p>
                      <p>
                        I'm driven by solving meaningful problems and thrive in teams that share that mindset, where ideas move fast and feedback is valued.
                      </p>
                    </div>
                  </div>

                  <div>
                    <h2 className="font-heading font-semibold text-heading text-2xl mb-6">My approach</h2>
                    <div className="space-y-6">
                      <div>
                        <h3 className="font-heading font-semibold text-heading text-base mb-2">User-first thinking</h3>
                        <p className="text-body text-sm leading-relaxed">
                          Every design decision starts with understanding the user through research and observation.
                        </p>
                      </div>
                      <div>
                        <h3 className="font-heading font-semibold text-heading text-base mb-2">Collaborative process</h3>
                        <p className="text-body text-sm leading-relaxed">Great products come from great teams working toward the same goal.</p>
                      </div>
                      <div>
                        <h3 className="font-heading font-semibold text-heading text-base mb-2">Iterative design</h3>
                        <p className="text-body text-sm leading-relaxed">Rapid prototyping and user testing help validate ideas quickly.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Option 3: Minimal Timeline Style */}
      <section className="py-16 border-t border-border mb-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-8">
            <span className="text-xs uppercase tracking-wide text-accent">Option 3</span>
            <h2 className="font-heading text-heading text-2xl mt-2">Minimal Timeline Style</h2>
          </div>

          <div className="bg-secondary-bg border border-border p-12">
            <div className="max-w-3xl mx-auto">
              {/* Compact header with image */}
              <div className="flex flex-col sm:flex-row items-center sm:items-start gap-8 mb-16 pb-12 border-b border-border">
                <div className="w-32 h-32 border border-border overflow-hidden flex-shrink-0">
                  <Image src="/Bild joakim .png" alt="Joakim" width={128} height={128} className="w-full h-full object-cover" />
                </div>
                <div className="text-center sm:text-left">
                  <h1 className="font-display text-3xl text-heading mb-3">Joakim Strandlund</h1>
                  <p className="text-accent text-sm uppercase tracking-wide mb-4">UX/UI Designer</p>
                  <p className="text-body leading-relaxed">
                    Creating thoughtful digital experiences. Based in Stockholm, working with startups and product teams.
                  </p>
                </div>
              </div>

              {/* Timeline-style content */}
              <div className="space-y-12">
                <div className="border-l-2 border-accent pl-6">
                  <span className="text-xs uppercase tracking-wide text-accent">Background</span>
                  <h2 className="font-heading font-semibold text-heading text-xl mt-2 mb-4">My story</h2>
                  <div className="space-y-4 text-body leading-relaxed">
                    <p>
                      I'm a UX designer with front-end skills and a background in account management. My curiosity about how design shapes real experiences led
                      me to study UX and join Treebula as an intern.
                    </p>
                    <p>
                      Working closely with developers and stakeholders taught me how to balance user needs, business goals, and technical constraints. I thrive
                      in teams where ideas move fast and feedback is valued.
                    </p>
                  </div>
                </div>

                <div className="border-l-2 border-accent pl-6">
                  <span className="text-xs uppercase tracking-wide text-accent">Approach</span>
                  <h2 className="font-heading font-semibold text-heading text-xl mt-2 mb-4">How I work</h2>
                  <ul className="space-y-3 text-body">
                    <li className="flex items-start gap-3">
                      <span className="text-accent mt-1">→</span>
                      <span>Start with user research, not assumptions</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-accent mt-1">→</span>
                      <span>Collaborate early with developers and stakeholders</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-accent mt-1">→</span>
                      <span>Ship quickly, iterate based on feedback</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-accent mt-1">→</span>
                      <span>Design for accessibility from the start</span>
                    </li>
                  </ul>
                </div>

                <div className="border-l-2 border-accent pl-6">
                  <span className="text-xs uppercase tracking-wide text-accent">Skills</span>
                  <h2 className="font-heading font-semibold text-heading text-xl mt-2 mb-4">What I do</h2>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-tertiary-bg border border-border text-sm">User Research</span>
                    <span className="px-3 py-1 bg-tertiary-bg border border-border text-sm">Interface Design</span>
                    <span className="px-3 py-1 bg-tertiary-bg border border-border text-sm">Prototyping</span>
                    <span className="px-3 py-1 bg-tertiary-bg border border-border text-sm">Design Systems</span>
                    <span className="px-3 py-1 bg-tertiary-bg border border-border text-sm">Figma</span>
                    <span className="px-3 py-1 bg-tertiary-bg border border-border text-sm">HTML/CSS</span>
                  </div>
                </div>

                <div className="pt-8 border-t border-border text-center">
                  <p className="text-muted mb-6">Interested in working together?</p>
                  <a href="mailto:joakimstrandlund@gmail.com" className="btn btn-primary">
                    Get in touch
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
