import Image from 'next/image';
import Link from 'next/link';

export default function Page() {
  return (
    <article className="bg-primary text-body">
      {/* Header */}
      <section className="pt-8 pb-6">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h1 className="font-display text-headings text-3xl sm:text-4xl md:text-5xl tracking-tight">Restaurang Apotek</h1>
          <p className="mt-3 text-body2">2024 · UX/UI · Web · Restaurant</p>
          <p className="mt-4">Redesigning a restaurant website with focus on accessibility, mobile experience, and user-centered design.</p>
        </div>
      </section>

      {/* Hero visual */}
      <section className="pb-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="2xl bg-secondary p-8">
            <div className="relative">
              <div className="max-w-5xl mx-auto">
                <div className="relative 2xl overflow-hidden">
                  <Image
                    src="/Restaurang apotek - hero section.png"
                    alt="Restaurang Apotek website redesign overview"
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
      </section>

      {/* Story begins */}
      <section className="pb-16">
        <div className="max-w-4xl mx-auto px-6">
          <div className="space-y-16">
            {/* The Challenge */}
            <div>
              <div className="mb-8">
                <span className="text-xs uppercase tracking-wide text-accent">The Challenge</span>
                <h2 className="mt-2 font-grotesk font-semibold text-headings text-3xl">A beloved restaurant with a broken website</h2>
              </div>
              <div className="space-y-6 text-body leading-relaxed">
                <p className="text-lg text-body2">
                  Restaurang Apotek is a locally renowned restaurant known for its bold interior and modern take on traditional dining. But their website? It
                  didn't match.
                </p>
                <p>
                  It lacked accessibility, was difficult to navigate especially on mobile, and couldn't be updated without technical help. Menus were buried in
                  PDFs, the booking flow was confusing, and the design felt disconnected from the restaurant's actual brand.
                </p>
                <p>
                  My role was to redesign the website from the ground up, creating a modern, accessible experience that aligned with the restaurant's
                  personality while making it easy for the team to maintain.
                </p>
              </div>
            </div>

            {/* Research */}
            <div>
              <div className="mb-8">
                <span className="text-xs uppercase tracking-wide text-accent">Discovery</span>
                <h2 className="mt-2 font-grotesk font-semibold text-headings text-3xl">Understanding what was broken</h2>
              </div>
              <div className="space-y-6">
                <p>
                  I started by conducting usability reviews, user interviews, and accessibility audits. The goal was to uncover the biggest pain points and
                  understand what users actually needed.
                </p>

                <div className="grid md:grid-cols-2 gap-6 mt-8">
                  <div className="bg-red-500/10 border border-red-500/20 lg p-6">
                    <h3 className="font-grotesk font-semibold text-headings text-lg mb-3 flex items-center gap-2">
                      <span className="text-2xl">⚠️</span>
                      What users struggled with
                    </h3>
                    <ul className="space-y-3 text-sm">
                      <li className="flex items-start gap-3">
                        <span className="text-accent mt-1">•</span>
                        <span>"At first, I thought the logo was a button... it was confusing!"</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-accent mt-1">•</span>
                        <span>"I tried tabbing through the page, but I couldn't even complete a reservation."</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-accent mt-1">•</span>
                        <span>"Why is the phone number hidden? I just want to book a table!"</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-accent mt-1">•</span>
                        <span>"Instagram looks cool, but the website feels completely different."</span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-secondary lg p-6 border-l-4 border-accent">
                    <h3 className="font-grotesk font-semibold text-headings text-lg mb-3 flex items-center gap-2">
                      <span className="text-2xl">🎯</span>
                      Business needs
                    </h3>
                    <ul className="space-y-3 text-sm">
                      <li className="flex items-start gap-3">
                        <span className="text-accent mt-1">•</span>
                        <span>Increase completed bookings</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-accent mt-1">•</span>
                        <span>Reach more users through accessibility</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-accent mt-1">•</span>
                        <span>Empower staff to update content easily</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-accent mt-1">•</span>
                        <span>Align digital presence with brand identity</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Landing Page Design */}
      <section className="pb-16 bg-secondary/10">
        <div className="max-w-6xl mx-auto px-6 py-16">
          <div className="max-w-4xl mx-auto mb-12">
            <span className="text-xs uppercase tracking-wide text-accent">Solution</span>
            <h2 className="mt-2 font-grotesk font-semibold text-headings text-3xl mb-6">A welcoming first impression</h2>
            <p className="text-body2 text-lg">
              The landing page needed to immediately communicate the restaurant's character while making it easy to find key information like hours, location,
              and booking.
            </p>
          </div>

          <div className="max-w-md mx-auto">
            <div className="bg-secondary xl p-6">
              <div className="mb-6">
                <Image
                  src="/Rstaurang apotek - landingpage phone.png"
                  alt="Restaurang Apotek landing page mobile view"
                  width={300}
                  height={600}
                  className="w-full max-w-[280px] h-auto lg shadow-lg mx-auto"
                />
              </div>
              <h3 className="font-grotesk font-semibold text-headings text-xl mb-3 text-center">Landing Page</h3>
              <p className="text-body text-sm text-center mb-4">Clean hero section with immediate access to booking and essential information.</p>
              <ul className="space-y-2 text-xs text-body">
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-1">•</span>
                  <span>Clear visual hierarchy guiding users to key actions</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-1">•</span>
                  <span>Mobile-first design with touch-friendly elements</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-1">•</span>
                  <span>Bold imagery reflecting the restaurant's personality</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Navigation Solution */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="max-w-4xl mx-auto mb-12">
            <span className="text-xs uppercase tracking-wide text-accent">Navigation</span>
            <h2 className="mt-2 font-grotesk font-semibold text-headings text-3xl mb-6">Making navigation intuitive</h2>
            <p className="text-body2 text-lg mb-4">
              The old navigation was cluttered and confusing. Users couldn't find what they needed, and the mobile experience was broken.
            </p>
            <p className="text-body">
              I redesigned it with clear structure, accessible touch targets, and a clean mobile menu that prioritizes the most important actions.
            </p>
          </div>

          <div className="max-w-md mx-auto">
            <div className="bg-secondary xl p-6">
              <div className="mb-6">
                <Image
                  src="/Rstaurang apotek - navabar open phone.png"
                  alt="Restaurang Apotek mobile navigation menu"
                  width={300}
                  height={600}
                  className="w-full max-w-[280px] h-auto lg shadow-lg mx-auto"
                />
              </div>
              <h3 className="font-grotesk font-semibold text-headings text-xl mb-3 text-center">Mobile Navigation</h3>
              <p className="text-body text-sm text-center mb-4">Clean, accessible menu with clear hierarchy and easy-to-tap elements.</p>
              <ul className="space-y-2 text-xs text-body">
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-1">•</span>
                  <span>Prominent booking CTA at the top</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-1">•</span>
                  <span>Clear close button (X) for better usability</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-1">•</span>
                  <span>Phone number easily accessible</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-1">•</span>
                  <span>Large touch targets for mobile users</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Menus Section */}
      <section className="pb-16 bg-secondary/10">
        <div className="max-w-6xl mx-auto px-6 py-16">
          <div className="max-w-4xl mx-auto mb-12">
            <span className="text-xs uppercase tracking-wide text-accent">Content Design</span>
            <h2 className="mt-2 font-grotesk font-semibold text-headings text-3xl mb-6">Making menus readable and accessible</h2>
            <p className="text-body2 text-lg">
              The old PDF menus were impossible for screen readers to parse. I redesigned them as web-native content with clear typography, pricing, and
              categories.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="bg-secondary xl p-6">
              <div className="mb-6">
                <Image
                  src="/Rstaurang apotek - foodmeny phone.png"
                  alt="Restaurang Apotek food menu mobile view"
                  width={300}
                  height={600}
                  className="w-full max-w-[240px] h-auto lg shadow-lg mx-auto"
                />
              </div>
              <h3 className="font-grotesk font-semibold text-headings text-xl mb-3 text-center">Food Menu</h3>
              <p className="text-body text-sm text-center mb-4">Clean layout with clear categories, pricing, and descriptions.</p>
              <ul className="space-y-2 text-xs text-body">
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-1">•</span>
                  <span>Improved typographic hierarchy for scanning</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-1">•</span>
                  <span>Clear pricing and portion information</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-1">•</span>
                  <span>Screen reader compatible HTML structure</span>
                </li>
              </ul>
            </div>

            <div className="bg-secondary xl p-6">
              <div className="mb-6">
                <Image
                  src="/Rstaurang apotek - cocktail phone.png"
                  alt="Restaurang Apotek cocktail menu mobile view"
                  width={300}
                  height={600}
                  className="w-full max-w-[240px] h-auto lg shadow-lg mx-auto"
                />
              </div>
              <h3 className="font-grotesk font-semibold text-headings text-xl mb-3 text-center">Cocktail Menu</h3>
              <p className="text-body text-sm text-center mb-4">Visual menu design highlighting drinks with proper categorization.</p>
              <ul className="space-y-2 text-xs text-body">
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-1">•</span>
                  <span>Added "Mocktails" explanation to avoid confusion</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-1">•</span>
                  <span>Clear distinction between alcoholic and non-alcoholic</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-1">•</span>
                  <span>Consistent pricing format throughout</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="max-w-4xl mx-auto mb-12">
            <span className="text-xs uppercase tracking-wide text-accent">Visual Storytelling</span>
            <h2 className="mt-2 font-grotesk font-semibold text-headings text-3xl mb-6">Showcasing the atmosphere</h2>
            <p className="text-body2 text-lg">
              A restaurant's atmosphere is everything. I designed a gallery section that lets the images speak for themselves while maintaining fast load times
              and accessibility.
            </p>
          </div>

          <div className="max-w-md mx-auto">
            <div className="bg-secondary xl p-6">
              <div className="mb-6">
                <Image
                  src="/Rstaurang apotek - galleri phone.png"
                  alt="Restaurang Apotek gallery section mobile view"
                  width={300}
                  height={600}
                  className="w-full max-w-[280px] h-auto lg shadow-lg mx-auto"
                />
              </div>
              <h3 className="font-grotesk font-semibold text-headings text-xl mb-3 text-center">Gallery</h3>
              <p className="text-body text-sm text-center mb-4">Image grid optimized for mobile with lazy loading and proper aspect ratios.</p>
              <ul className="space-y-2 text-xs text-body">
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-1">•</span>
                  <span>Responsive grid layout adapting to screen size</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-1">•</span>
                  <span>Optimized images for fast loading</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-1">•</span>
                  <span>Alt text for all images for accessibility</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <section className="pb-16 bg-secondary/10">
        <div className="max-w-6xl mx-auto px-6 py-16">
          <div className="max-w-4xl mx-auto mb-12">
            <span className="text-xs uppercase tracking-wide text-accent">Information Architecture</span>
            <h2 className="mt-2 font-grotesk font-semibold text-headings text-3xl mb-6">Making contact easy</h2>
            <p className="text-body2 text-lg">
              The footer became a crucial touchpoint for users looking for practical information. I designed it to be scannable, accessible, and
              mobile-friendly.
            </p>
          </div>

          <div className="max-w-md mx-auto">
            <div className="bg-secondary xl p-6">
              <div className="mb-6">
                <Image
                  src="/Rstaurang apotek - footer phone.png"
                  alt="Restaurang Apotek footer section mobile view"
                  width={300}
                  height={600}
                  className="w-full max-w-[280px] h-auto lg shadow-lg mx-auto"
                />
              </div>
              <h3 className="font-grotesk font-semibold text-headings text-xl mb-3 text-center">Footer</h3>
              <p className="text-body text-sm text-center mb-4">Organized footer with opening hours, contact details, and location.</p>
              <ul className="space-y-2 text-xs text-body">
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-1">•</span>
                  <span>Clear grouping of information for easy scanning</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-1">•</span>
                  <span>Clickable phone numbers and email addresses</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-1">•</span>
                  <span>Social media links with proper labels</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Testing & Iteration */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-6">
          <div className="mb-12">
            <span className="text-xs uppercase tracking-wide text-accent">Validation</span>
            <h2 className="mt-2 font-grotesk font-semibold text-headings text-3xl mb-6">Testing and refining</h2>
          </div>

          <div className="space-y-8">
            <p className="text-lg text-body2">I tested the redesign with users and iterated based on feedback. Some decisions needed adjusting.</p>

            <div className="bg-secondary xl p-8 space-y-6">
              <h3 className="font-grotesk font-semibold text-headings text-xl mb-4">Key Iteration: Mobile Navigation</h3>
              <p className="text-body text-sm">
                Initially, I placed the phone number and booking button at the top of the navigation. Testing revealed this created a "fast food chain" feeling
                and caused confusion.
              </p>
              <p className="text-body text-sm">
                Moving these elements into the dropdown menu resulted in clearer visual hierarchy, a more intuitive flow, and better focus on navigation.
              </p>
              <div className="bg-secondary lg p-4 mt-4">
                <p className="text-accent text-sm font-medium">
                  Lesson learned: Sometimes less visible doesn't mean less accessible. Context and clarity matter more than prominence.
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-secondary xl p-6">
                <h3 className="font-grotesk font-semibold text-headings text-lg mb-4 flex items-center gap-2">
                  <span className="text-2xl">✅</span>
                  What worked
                </h3>
                <ul className="space-y-3 text-sm">
                  <li className="flex items-start gap-3">
                    <span className="text-accent mt-1">•</span>
                    <span>Booking button became immediately findable</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent mt-1">•</span>
                    <span>Navigation clarity improved significantly</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent mt-1">•</span>
                    <span>Users described design as "clean and professional"</span>
                  </li>
                </ul>
              </div>

              <div className="bg-secondary xl p-6">
                <h3 className="font-grotesk font-semibold text-headings text-lg mb-4 flex items-center gap-2">
                  <span className="text-2xl">🎯</span>
                  Impact
                </h3>
                <ul className="space-y-3 text-sm">
                  <li className="flex items-start gap-3">
                    <span className="text-accent mt-1">•</span>
                    <span>All users could complete booking flow</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent mt-1">•</span>
                    <span>Keyboard navigation fully functional</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent mt-1">•</span>
                    <span>Staff could update content without developer help</span>
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
            <h2 className="mt-2 font-grotesk font-semibold text-headings text-3xl mb-6">What I learned</h2>
          </div>

          <div className="space-y-8">
            <p className="text-lg text-body2">
              This project taught me that good design isn't just about aesthetics. It's about solving real problems for real people.
            </p>

            <div className="space-y-6">
              <div className="bg-secondary lg p-6 border-l-4 border-accent">
                <h3 className="font-grotesk font-semibold text-headings text-lg mb-3">Accessibility opens doors</h3>
                <p className="text-sm text-body">
                  Building for accessibility from the start made the site better for everyone, not just users with disabilities. Clear navigation and semantic
                  HTML improved the entire experience.
                </p>
              </div>

              <div className="bg-secondary lg p-6 border-l-4 border-accent">
                <h3 className="font-grotesk font-semibold text-headings text-lg mb-3">User testing catches blind spots</h3>
                <p className="text-sm text-body">
                  What seemed clear to me wasn't always clear to users. Testing revealed issues I would have missed, and their feedback shaped better solutions.
                </p>
              </div>

              <div className="bg-secondary lg p-6 border-l-4 border-accent">
                <h3 className="font-grotesk font-semibold text-headings text-lg mb-3">Mobile-first matters</h3>
                <p className="text-sm text-body">
                  Most users were browsing on mobile. Designing for small screens first ensured the experience worked where it mattered most.
                </p>
              </div>
            </div>

            <div className="mt-12 bg-secondary xl p-8">
              <p className="text-accent font-medium text-center text-lg">"The best designs solve problems you didn't know existed until users showed you."</p>
            </div>
          </div>
        </div>
      </section>

      {/* Future Improvements */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-6">
          <div className="mb-8">
            <span className="text-xs uppercase tracking-wide text-accent">Next Steps</span>
            <h2 className="mt-2 font-grotesk font-semibold text-headings text-3xl mb-6">If I had more time...</h2>
          </div>

          <div className="space-y-6 text-body">
            <p>While the redesign solved the major issues, there's always room to go deeper:</p>

            <ul className="space-y-4">
              <li className="flex items-start gap-4">
                <span className="text-accent text-xl mt-1">→</span>
                <div>
                  <h3 className="font-grotesk font-semibold text-headings mb-1">Enhanced WCAG compliance</h3>
                  <p className="text-sm">Conduct a full AA-level audit and implement remaining improvements</p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <span className="text-accent text-xl mt-1">→</span>
                <div>
                  <h3 className="font-grotesk font-semibold text-headings mb-1">Online ordering integration</h3>
                  <p className="text-sm">Explore adding takeout ordering functionality for additional revenue</p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <span className="text-accent text-xl mt-1">→</span>
                <div>
                  <h3 className="font-grotesk font-semibold text-headings mb-1">Performance optimization</h3>
                  <p className="text-sm">Further optimize images and implement progressive loading strategies</p>
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
            <p className="text-body">I hope you enjoyed learning about Restaurang Apotek.</p>
            <p className="text-body">Feel free to explore more of my work or get in touch.</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link href="/case-studies/loggi" className="btn btn-primary">
              Next Project: Loggi →
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
