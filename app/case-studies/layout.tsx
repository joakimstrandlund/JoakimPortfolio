import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Case studies',
};

export default function CaseStudiesLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="text-body min-h-screen" style={{ backgroundColor: '#FAFAFA' }}>
      <div className="max-w-4xl mx-auto px-6 py-8">
        <Link href="/" className="inline-flex items-center gap-2 text-body hover:text-heading transition-colors" style={{ color: '#6b6b6b' }}>
          <ArrowLeft className="h-4 w-4" />
          Back to home
        </Link>
      </div>
      {children}
    </div>
  );
}
