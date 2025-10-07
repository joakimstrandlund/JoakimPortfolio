export default function Page() {
  return (
    <article className="bg-primary text-body">
      {/* Header */}
      <section className="pt-8 pb-6">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h1 className="font-heading text-headings text-3xl sm:text-4xl md:text-5xl tracking-tight">Restaurang Apotek</h1>
          <p className="mt-3 text-body2">2025 · UX/UI · Web · Restaurant</p>
          <p className="mt-4">Modern restaurant website design focusing on user experience and visual storytelling.</p>
        </div>
      </section>

      {/* Hero visual */}
      <section className="pb-12">
        <div className="max-w-6xl mx-auto px-6">
          <div className="rounded-2xl border border-stroke bg-gradient-to-br from-tertiary/40 to-tertiary/60 p-12 text-center">
            <div className="max-w-4xl mx-auto">
              <div className="text-6xl mb-6">🍽️</div>
              <h3 className="text-3xl font-heading text-headings mb-4">Restaurant Website Redesign</h3>
              <p className="text-body2 text-lg mb-8">Modern, accessible website design for a locally renowned restaurant</p>
              <div className="flex justify-center gap-4 text-sm text-body">
                <div className="bg-secondary/40 px-4 py-2 rounded-lg">Accessibility Focus</div>
                <div className="bg-secondary/40 px-4 py-2 rounded-lg">Mobile-First</div>
                <div className="bg-secondary/40 px-4 py-2 rounded-lg">User Research</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="pb-16">
        <div className="max-w-4xl mx-auto px-6 space-y-16">
          {/* About the project */}
          <div className="relative">
            <div className="absolute -left-4 top-0 w-1 h-16 bg-accent rounded-full"></div>
            <h2 className="font-heading text-headings text-3xl mb-8 flex items-center gap-4">
              <span className="text-4xl">🍽️</span>
              About the project
            </h2>
            <div className="bg-secondary/20 border border-stroke/30 rounded-xl p-8 space-y-6 text-body leading-relaxed">
              <p className="text-lg">
                Restaurang Apotek is a locally renowned restaurant known for its bold interior and modern take on traditional dining. When I joined the project,
                the restaurant&apos;s website no longer matched the brand&apos;s evolving identity. It lacked accessibility, was difficult to navigate
                especially on mobile and couldn&apos;t be updated without technical help.
              </p>
              <p>
                My role was to redesign the website from the ground up. The goal was to create a modern, accessible and consistent digital experience that felt
                aligned with the restaurant&apos;s personality. Key objectives included improving the booking flow, simplifying navigation, and ensuring the
                restaurant team could easily update the content themselves.
              </p>
            </div>
          </div>

          {/* Research & Discovery */}
          <div className="relative">
            <div className="absolute -left-4 top-0 w-1 h-16 bg-accent2 rounded-full"></div>
            <h2 className="font-heading text-headings text-3xl mb-8 flex items-center gap-4">
              <span className="text-4xl">🔍</span>
              Research & Discovery
            </h2>
            <div className="bg-secondary/20 border border-stroke/30 rounded-xl p-8 space-y-6 text-body leading-relaxed">
              <p>
                Our design process started by understanding what was broken. We combined usability reviews, interviews, and observational studies to uncover key
                frustrations and align them with both user and business needs.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-tertiary/20 rounded-lg p-6">
                  <h4 className="font-heading text-headings text-lg mb-4 flex items-center gap-2">
                    <span>🔍</span>
                    Heuristic Evaluation
                  </h4>
                  <p className="text-sm text-body mb-3">The Old Website</p>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-3">
                      <span className="text-accent mt-1">•</span>
                      <span>Menus were placed in unclear PDF files</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-accent mt-1">•</span>
                      <span>Site was not responsive for mobile devices</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-accent mt-1">•</span>
                      <span>Important elements like phone number were hard to find</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-accent mt-1">•</span>
                      <span>Design felt disconnected from restaurant&apos;s visual identity</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-tertiary/20 rounded-lg p-6">
                  <h4 className="font-heading text-headings text-lg mb-4 flex items-center gap-2">
                    <span>👥</span>
                    User Research
                  </h4>
                  <p className="text-sm text-body mb-3">Methods used</p>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-3">
                      <span className="text-accent mt-1">•</span>
                      <span>User Interviews (12 participants)</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-accent mt-1">•</span>
                      <span>User Observations</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-accent mt-1">•</span>
                      <span>Accessibility Audit (WCAG guidelines)</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-accent mt-1">•</span>
                      <span>Competitive Analysis (12 restaurant websites)</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Key Insights */}
          <div className="relative">
            <div className="absolute -left-4 top-0 w-1 h-16 bg-accent rounded-full"></div>
            <h2 className="font-heading text-headings text-3xl mb-8 flex items-center gap-4">
              <span className="text-4xl">💬</span>
              Key Insights – The User's Voice
            </h2>
            <div className="space-y-6">
              <div className="bg-red-500/10 border border-red-500/20 rounded-xl p-6">
                <blockquote className="text-body italic mb-3">"At first, I thought the logo was a button… it was confusing!"</blockquote>
                <p className="text-sm font-medium text-red-400">
                  Problem: Unclear navigation – users struggled to understand where they were and how to move around.
                </p>
              </div>

              <div className="bg-red-500/10 border border-red-500/20 rounded-xl p-6">
                <blockquote className="text-body italic mb-3">"I tried tabbing through the page, but I couldn't even complete a reservation."</blockquote>
                <p className="text-sm font-medium text-red-400">
                  Problem: No functional keyboard navigation – focus indicators were weak, and interactions didn't work as expected.
                </p>
              </div>

              <div className="bg-red-500/10 border border-red-500/20 rounded-xl p-6">
                <blockquote className="text-body italic mb-3">"Why is the phone number hidden? I just want to book a table!"</blockquote>
                <p className="text-sm font-medium text-red-400">
                  Problem: Important information like the booking button and contact details were hard to find.
                </p>
              </div>

              <div className="bg-red-500/10 border border-red-500/20 rounded-xl p-6">
                <blockquote className="text-body italic mb-3">"Instagram looks cool, but the website feels completely different."</blockquote>
                <p className="text-sm font-medium text-red-400">
                  Problem: Inconsistent branding – the website did not match the restaurant's visual identity on social media.
                </p>
              </div>
            </div>
          </div>

          {/* Target Audience & Key Needs */}
          <div className="relative">
            <div className="absolute -left-4 top-0 w-1 h-16 bg-accent2 rounded-full"></div>
            <h2 className="font-heading text-headings text-3xl mb-8 flex items-center gap-4">
              <span className="text-4xl">🎯</span>
              Target Audience & Key Needs
            </h2>
            <div className="bg-secondary/20 border border-stroke/30 rounded-xl p-8 space-y-6 text-body leading-relaxed">
              <p>
                Based on our research, we identified three key user groups—each with different needs and expectations when interacting with the restaurant's
                website.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-tertiary/20 rounded-lg p-6">
                  <h4 className="font-heading text-headings text-lg mb-4 flex items-center gap-2">
                    <span>👥</span>
                    Adults planning a visit
                  </h4>
                  <p className="text-sm text-body">Need quick access to the menu, opening hours, and booking functionality.</p>
                </div>
                <div className="bg-tertiary/20 rounded-lg p-6">
                  <h4 className="font-heading text-headings text-lg mb-4 flex items-center gap-2">
                    <span>📱</span>
                    Social media users
                  </h4>
                  <p className="text-sm text-body">Expect the design to reflect the restaurant's brand identity.</p>
                </div>
                <div className="bg-tertiary/20 rounded-lg p-6">
                  <h4 className="font-heading text-headings text-lg mb-4 flex items-center gap-2">
                    <span>♿</span>
                    People with disabilities
                  </h4>
                  <p className="text-sm text-body">Need an accessible website with clear navigation and adapted interaction.</p>
                </div>
              </div>

              <div className="bg-accent/10 border border-accent/20 rounded-lg p-6 mt-6">
                <h3 className="font-heading text-headings text-lg mb-4">Key Needs:</h3>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-3">
                    <span className="text-accent mt-1">•</span>
                    <span>
                      <strong>Quick access</strong> to menu, opening hours, and booking
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent mt-1">•</span>
                    <span>
                      <strong>Clear images</strong> of the venue and food
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent mt-1">•</span>
                    <span>
                      <strong>Accessible design</strong> with screen reader support and keyboard navigation
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Problem statement & goals */}
          <div className="relative">
            <div className="absolute -left-4 top-0 w-1 h-16 bg-accent rounded-full"></div>
            <h2 className="font-heading text-headings text-3xl mb-8 flex items-center gap-4">
              <span className="text-4xl">🎯</span>
              Problem statement & goals
            </h2>
            <div className="space-y-8">
              <div className="bg-accent/10 border border-accent/20 rounded-xl p-8">
                <h3 className="font-heading text-headings text-xl mb-4">The Challenge</h3>
                <p className="text-body leading-relaxed">
                  How might we redesign the restaurant's website to offer a more accessible, intuitive and trustworthy user experience, while also making it
                  easier for the business to maintain and convert visitors into bookings?
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-red-500/10 border border-red-500/20 rounded-xl p-6">
                  <h3 className="font-heading text-headings text-xl mb-4 flex items-center gap-2">
                    <span>⚠️</span>
                    User pain points
                  </h3>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-3">
                      <span className="text-accent mt-1">•</span>
                      <span>Unclear Booking Flow</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-accent mt-1">•</span>
                      <span>PDF Menus (not screen reader compatible)</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-accent mt-1">•</span>
                      <span>Lack of Accessibility</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-accent mt-1">•</span>
                      <span>Weak First Impression</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-accent mt-1">•</span>
                      <span>Poor Mobile Experience</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-accent/10 border border-accent/20 rounded-xl p-6">
                  <h3 className="font-heading text-headings text-xl mb-4 flex items-center gap-2">
                    <span>🎯</span>
                    Business goals
                  </h3>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-3">
                      <span className="text-accent mt-1">•</span>
                      <span>Improve overall user experience</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-accent mt-1">•</span>
                      <span>Reach more users (full accessibility)</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-accent mt-1">•</span>
                      <span>Increase completed bookings</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-accent mt-1">•</span>
                      <span>Empower restaurant staff</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Design process */}
          <div className="relative">
            <div className="absolute -left-4 top-0 w-1 h-16 bg-accent2 rounded-full"></div>
            <h2 className="font-heading text-headings text-3xl mb-8 flex items-center gap-4">
              <span className="text-4xl">🛠️</span>
              Design process
            </h2>
            <div className="bg-secondary/20 border border-stroke/30 rounded-xl p-8 space-y-6 text-body leading-relaxed">
              <p>
                To turn our insights into a tangible solution, we began with a Design Studio session. We quickly sketched out ideas based on our research,
                allowing us to explore multiple concepts and identify the best directions to improve the user experience.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-tertiary/20 rounded-lg p-6">
                  <h4 className="font-heading text-headings text-lg mb-4 flex items-center gap-2">
                    <span>✏️</span>
                    Sketches
                  </h4>
                  <p className="text-sm text-body">Design studio workshop to explore multiple concepts</p>
                </div>
                <div className="bg-tertiary/20 rounded-lg p-6">
                  <h4 className="font-heading text-headings text-lg mb-4 flex items-center gap-2">
                    <span>📐</span>
                    Wireframes
                  </h4>
                  <p className="text-sm text-body">Low-fidelity wireframes to define layout and structure</p>
                </div>
                <div className="bg-tertiary/20 rounded-lg p-6">
                  <h4 className="font-heading text-headings text-lg mb-4 flex items-center gap-2">
                    <span>🎨</span>
                    HI-FI Mockups
                  </h4>
                  <p className="text-sm text-body">Polished mockups focusing on quick information access</p>
                </div>
              </div>
            </div>
          </div>

          {/* Iteration & Improvements */}
          <div className="relative">
            <div className="absolute -left-4 top-0 w-1 h-16 bg-accent rounded-full"></div>
            <h2 className="font-heading text-headings text-3xl mb-8 flex items-center gap-4">
              <span className="text-4xl">🔄</span>
              Iteration & Improvements
            </h2>
            <div className="space-y-8">
              <div className="bg-secondary/20 border border-stroke/30 rounded-xl p-8 space-y-6 text-body leading-relaxed">
                <p>
                  Through usability testing, we identified friction points and refined the design accordingly. We clarified the mobile navigation, improved menu
                  readability. Each iteration brought us closer to a seamless experience for all users.
                </p>

                <div className="bg-tertiary/20 rounded-lg p-6">
                  <h3 className="font-heading text-headings text-lg mb-4 flex items-center gap-2">
                    <span>📱</span>
                    Iteration: Navbar mobile
                  </h3>
                  <p className="text-sm text-body mb-4">
                    User testing revealed that placing the phone number and the "book a table" button at the top of the navigation didn't work as intended. It
                    created a "fast food chain" feeling, where key CTAs competed for attention and caused confusion.
                  </p>
                  <p className="text-sm text-body mb-4">We therefore moved these elements into the dropdown menu, which resulted in:</p>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-3">
                      <span className="text-accent mt-1">•</span>
                      <span>Clearer visual hierarchy</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-accent mt-1">•</span>
                      <span>A more intuitive user flow</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-accent mt-1">•</span>
                      <span>Better focus on navigation and interaction</span>
                    </li>
                  </ul>
                  <p className="text-sm text-body mt-4">
                    The menu icon was also changed to a close (X) symbol to make it easier to exit the menu and strengthen recognition.
                  </p>
                </div>

                <div className="bg-tertiary/20 rounded-lg p-6">
                  <h3 className="font-heading text-headings text-lg mb-4 flex items-center gap-2">
                    <span>📋</span>
                    Iteration: Clarifying the Menu
                  </h3>
                  <p className="text-sm text-body mb-4">
                    Previously, price information and non-alcoholic options were unclear. We iterated on the menu by improving the typographic hierarchy and
                    adding a short explanation of "Mocktails" to avoid misunderstandings.
                  </p>
                  <p className="text-sm text-body">
                    The result is a more readable menu where information is easier to scan — especially for new guests or those looking for non-alcoholic
                    options.
                  </p>
                </div>
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
              <p>After user testing and design iterations, we saw clear improvements in the experience:</p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-accent/10 border border-accent/20 rounded-lg p-6">
                  <h4 className="font-heading text-headings text-lg mb-4 flex items-center gap-2">
                    <span>✅</span>
                    Clearer path to booking
                  </h4>
                  <p className="text-sm text-body">
                    The booking button was previously difficult to find. After the design changes, all test participants located it immediately.
                  </p>
                </div>
                <div className="bg-accent/10 border border-accent/20 rounded-lg p-6">
                  <h4 className="font-heading text-headings text-lg mb-4 flex items-center gap-2">
                    <span>🧭</span>
                    Improved navigation clarity
                  </h4>
                  <p className="text-sm text-body">The navigation became easier to understand, helping users identify where they were on the page.</p>
                </div>
                <div className="bg-accent/10 border border-accent/20 rounded-lg p-6">
                  <h4 className="font-heading text-headings text-lg mb-4 flex items-center gap-2">
                    <span>✨</span>
                    Stronger first impression
                  </h4>
                  <p className="text-sm text-body">
                    The new visual hierarchy created a calmer, more professional look. Users described the design as "clean" and "easy to understand."
                  </p>
                </div>
                <div className="bg-accent/10 border border-accent/20 rounded-lg p-6">
                  <h4 className="font-heading text-headings text-lg mb-4 flex items-center gap-2">
                    <span>♿</span>
                    Consistent and accessible experience
                  </h4>
                  <p className="text-sm text-body">
                    The navigation became clearer, helping users orient themselves and move through the site more confidently.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Reflection & Lessons Learned */}
          <div className="relative">
            <div className="absolute -left-4 top-0 w-1 h-16 bg-accent rounded-full"></div>
            <h2 className="font-heading text-headings text-3xl mb-8 flex items-center gap-4">
              <span className="text-4xl">📚</span>
              Reflection & Lessons Learned
            </h2>
            <div className="space-y-8">
              <div className="bg-secondary/20 border border-stroke/30 rounded-xl p-8 space-y-6 text-body leading-relaxed">
                <p>
                  This project showed how small UX details can have a big impact – especially around clarity, structure and accessibility. I learned the value
                  of early testing, real feedback, and aligning the product with both user needs and business goals.
                </p>

                <div className="bg-accent/10 border border-accent/20 rounded-lg p-6">
                  <h3 className="font-heading text-headings text-lg mb-4">Key takeaways:</h3>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-3">
                      <span className="text-accent mt-1">•</span>
                      <span>
                        <strong>Always be open to iteration</strong> - the first design is rarely the best one
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-accent mt-1">•</span>
                      <span>
                        <strong>User feedback is invaluable</strong> and often reveals blind spots in the design
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-accent mt-1">•</span>
                      <span>
                        <strong>Accessibility should be considered from the start</strong>, not as an afterthought
                      </span>
                    </li>
                  </ul>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-tertiary/20 rounded-lg p-6">
                    <h4 className="font-heading text-headings text-lg mb-4 flex items-center gap-2">
                      <span>🧪</span>
                      User testing
                    </h4>
                    <p className="text-sm text-body">
                      I learned the importance of testing early, listening carefully to users, and daring to iterate even when something 'looks finished'.
                    </p>
                  </div>
                  <div className="bg-tertiary/20 rounded-lg p-6">
                    <h4 className="font-heading text-headings text-lg mb-4 flex items-center gap-2">
                      <span>🎨</span>
                      Visual Language
                    </h4>
                    <p className="text-sm text-body">Thoughtful use of colors, typography and spacing helped guide the user and reduce cognitive load.</p>
                  </div>
                </div>

                <div className="bg-accent/10 border border-accent/20 rounded-lg p-6">
                  <h3 className="font-heading text-headings text-lg mb-4">Future Improvements</h3>
                  <p className="text-sm text-body">
                    If I had had more time, I would have liked to go even deeper into responsive design and work more structured with WCAG accessibility
                    criteria. If we had more time, we'd further develop responsive behavior and refine the experience for all devices.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </article>
  );
}
