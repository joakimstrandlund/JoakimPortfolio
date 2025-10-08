import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft } from 'lucide-react';

export default function About() {
  return (
    <div className="bg-primary text-body min-h-screen">
      {/* Header */}
      <div className="max-w-6xl mx-auto px-6 py-8">
        <Link href="/" className="inline-flex items-center gap-2 text-body hover:text-headings transition-colors">
          <ArrowLeft className="h-4 w-4" />
          Back
        </Link>
      </div>

      {/* Main content */}
      <div className="max-w-4xl mx-auto px-6 pb-16">
        {/* Hero section */}
        <div className="text-center mb-16">
          <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl text-headings leading-tight mb-6">About me</h1>
          <p className="text-lg md:text-xl text-body2 leading-relaxed max-w-2xl mx-auto">
            I&apos;m a UX/UI designer passionate about creating digital experiences that make a difference.
          </p>
        </div>

        {/* Profile image */}
        <div className="flex justify-center mb-16">
          <div className="relative">
            <div className="w-48 h-48 sm:w-56 sm:h-56 rounded-2xl border border-stroke/30 overflow-hidden">
              <Image src="/Bild joakim .png" alt="Joakim Strandlund profile photo" width={224} height={224} className="w-full h-full object-cover" />
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-2 -right-2 w-6 h-6 bg-accent/20 rounded-full border border-accent/30" />
            <div className="absolute -bottom-2 -left-2 w-4 h-4 bg-accent2/20 rounded-full border border-accent2/30" />
          </div>
        </div>

        {/* Content sections */}
        <div className="space-y-16">
          {/* Story */}
          <section>
            <h2 className="font-heading text-headings text-2xl mb-6">My story</h2>
            <div className="space-y-4 text-body leading-relaxed">
              <p>
                I&apos;m a UX designer with front-end skills and a background as an Account Manager in the startup and SaaS world. My curiosity for how design
                shapes real experiences led me to study UX, where I&apos;ve focused on creating intuitive, user-centered digital solutions.
              </p>
              <p>
                At Treebula, I first joined as a UX intern and later continued working with the team, collaborating closely with developers and the marketing
                department. That experience gave me a deep understanding of how design, technology, and business goals intersect in practice. It also taught me
                the value of early collaboration, clear communication, and designing with both the user and the development process in mind.
              </p>
              <p>
                I&apos;m driven by solving meaningful problems and thrive in teams that share that mindset, where ideas move fast, feedback is valued, and
                everyone works toward the same goal.
              </p>
              <p>When I&apos;m not designing, I&apos;m usually at the gym, chasing powder, or exploring new restaurants around Stockholm.</p>
            </div>
          </section>

          {/* Approach */}
          <section>
            <h2 className="font-heading text-headings text-2xl mb-6">My approach</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <h3 className="font-heading text-headings text-lg">User-first thinking</h3>
                <p className="text-body leading-relaxed">
                  Every design decision starts with understanding the user. I spend time researching, interviewing, and observing to ensure solutions address
                  real needs.
                </p>
              </div>
              <div className="space-y-4">
                <h3 className="font-heading text-headings text-lg">Collaborative process</h3>
                <p className="text-body leading-relaxed">
                  Great products come from great teams. I work closely with developers, product managers, and stakeholders to align on goals and create cohesive
                  experiences.
                </p>
              </div>
              <div className="space-y-4">
                <h3 className="font-heading text-headings text-lg">Iterative design</h3>
                <p className="text-body leading-relaxed">
                  I believe in shipping early and often. Rapid prototyping and user testing help validate ideas quickly and refine solutions based on real
                  feedback.
                </p>
              </div>
              <div className="space-y-4">
                <h3 className="font-heading text-headings text-lg">Accessible design</h3>
                <p className="text-body leading-relaxed">
                  Good design is inclusive design. I ensure products work for everyone, regardless of ability, device, or context of use.
                </p>
              </div>
            </div>
          </section>

          {/* Skills */}
          <section>
            <h2 className="font-heading text-headings text-2xl mb-6">What I do</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-secondary/20 border border-stroke/30 rounded-xl p-6">
                <h3 className="font-heading text-headings text-lg mb-3">User Research</h3>
                <p className="text-body text-sm leading-relaxed">
                  Interviews, usability testing, user journeys, and persona development to understand user needs.
                </p>
              </div>
              <div className="bg-secondary/20 border border-stroke/30 rounded-xl p-6">
                <h3 className="font-heading text-headings text-lg mb-3">Interface Design</h3>
                <p className="text-body text-sm leading-relaxed">Creating intuitive and beautiful interfaces that guide users toward their goals.</p>
              </div>
              <div className="bg-secondary/20 border border-stroke/30 rounded-xl p-6">
                <h3 className="font-heading text-headings text-lg mb-3">Prototyping</h3>
                <p className="text-body text-sm leading-relaxed">Interactive prototypes to test ideas and communicate design concepts effectively.</p>
              </div>
              <div className="bg-secondary/20 border border-stroke/30 rounded-xl p-6">
                <h3 className="font-heading text-headings text-lg mb-3">Design Systems</h3>
                <p className="text-body text-sm leading-relaxed">Building scalable design systems that ensure consistency and efficiency across products.</p>
              </div>
              <div className="bg-secondary/20 border border-stroke/30 rounded-xl p-6">
                <h3 className="font-heading text-headings text-lg mb-3">Strategy</h3>
                <p className="text-body text-sm leading-relaxed">Aligning design decisions with business goals and user needs for sustainable growth.</p>
              </div>
              <div className="bg-secondary/20 border border-stroke/30 rounded-xl p-6">
                <h3 className="font-heading text-headings text-lg mb-3">Collaboration</h3>
                <p className="text-body text-sm leading-relaxed">Working closely with cross-functional teams to bring designs to life.</p>
              </div>
            </div>
          </section>

          {/* Contact CTA */}
          <section className="text-center pt-8 border-t border-stroke">
            <h2 className="font-heading text-headings text-2xl mb-4">Let&apos;s work together</h2>
            <p className="text-body2 mb-8 max-w-2xl mx-auto">
              I&apos;m always interested in new opportunities and collaborations. Whether you have a project in mind or just want to chat about design, I&apos;d
              love to hear from you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="mailto:joakimstrandlund@gmail.com" className="btn btn-primary">
                Get in touch
              </Link>
              <Link href="/" className="btn">
                View my work
              </Link>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
