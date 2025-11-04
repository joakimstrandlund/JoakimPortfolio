import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft } from 'lucide-react';

export default function About() {
  return (
    <div className="bg-primary-bg text-body min-h-screen">
      {/* Header */}
      <div className="max-w-4xl mx-auto px-6 py-8">
        <Link href="/" className="inline-flex items-center gap-2 text-body hover:text-heading transition-colors">
          <ArrowLeft className="h-4 w-4" />
          Back to home
        </Link>
      </div>

      {/* Main content */}
      <div className="max-w-3xl mx-auto px-6 pb-16">
        {/* Compact header with image */}
        <div className="flex flex-col sm:flex-row items-center sm:items-start gap-8 mb-16 pb-12 border-b border-border">
          <div className="w-40 h-40 border border-border overflow-hidden flex-shrink-0">
            <Image src="/Bild joakim .png" alt="Joakim Strandlund" width={160} height={160} className="w-full h-full object-cover" />
          </div>
          <div className="text-center sm:text-left">
            <h1 className="font-display text-3xl text-heading mb-3">Joakim Strandlund</h1>
            <p className="text-accent text-sm uppercase tracking-wide mb-4">UX/UI Designer</p>
            <p className="text-body leading-relaxed">
              I design digital products and do a bit of low vibe coding on the side. When I'm not designing, you'll probably find me skiing, training, or
              exploring new restaurants.
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
                I'm a UX designer with front-end skills and a background in sales (account manager), combining creativity, structure, and an understanding of
                both users and business.
              </p>
              <p>
                Working closely with developers and stakeholders taught me how to balance user needs, business goals, and technical constraints. I believe the
                best products come from close collaboration and continuous learning.
              </p>
            </div>
          </div>

          <div className="border-l-2 border-accent pl-6">
            <span className="text-xs uppercase tracking-wide text-accent">Approach</span>
            <h2 className="font-heading font-semibold text-heading text-xl mt-2 mb-4">How I work</h2>
            <ul className="space-y-3 text-body">
              <li className="flex items-start gap-3">
                <span className="text-accent mt-1">→</span>
                <span>Focus on understanding users before designing solutions</span>
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
            <Link href="mailto:joakimstrandlund@gmail.com" className="btn btn-primary">
              Get in touch
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
