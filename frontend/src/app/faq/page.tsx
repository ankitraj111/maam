import type { Metadata } from 'next';
import { FAQSection } from '@/components/sections/FAQSection';
import { CTABanner } from '@/components/sections/CTABanner';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'FAQ | Frequently Asked Questions',
  description:
    'Frequently asked questions about MyRecruit Ltd recruitment services. Answers for employers and workers covering fees, process, work permits, documents and timelines.',
  openGraph: {
    title: 'Frequently Asked Questions | MyRecruit Ltd',
    description: 'Find answers to common questions from employers hiring in Mauritius and workers seeking international employment.',
  },
};

export default function FAQPage() {
  return (
    <div className="pt-20">
      {/* Hero Banner */}
      <section className="bg-gradient-to-br from-[#0b1938] via-[#0f2557] to-[#070e1c] dark:from-[#060c18] dark:via-[#091326] dark:to-[#070e1c] py-20 px-4 sm:px-6 lg:px-8 border-b border-slate-200/10">
        <div className="max-w-7xl mx-auto text-center">
          <span className="inline-block text-xs font-bold uppercase tracking-widest text-teal-400 mb-4">
            Help & Information
          </span>
          <h1 className="text-4xl sm:text-5xl font-black text-white mb-5">
            Frequently Asked Questions
          </h1>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Answers to common questions from employers hiring in Mauritius and workers seeking
            legitimate overseas employment opportunities.
          </p>

          {/* Quick links */}
          <div className="flex flex-wrap justify-center gap-3 mt-8">
            <span className="text-xs font-semibold bg-white/10 border border-white/15 rounded-full px-4 py-2 text-slate-200">
              Worker Fees &amp; Costs
            </span>
            <span className="text-xs font-semibold bg-white/10 border border-white/15 rounded-full px-4 py-2 text-slate-200">
              Required Documents
            </span>
            <span className="text-xs font-semibold bg-white/10 border border-white/15 rounded-full px-4 py-2 text-slate-200">
              Work Permits
            </span>
            <span className="text-xs font-semibold bg-white/10 border border-white/15 rounded-full px-4 py-2 text-slate-200">
              Recruitment Timeline
            </span>
          </div>
        </div>
      </section>

      {/* FAQ Accordion */}
      <FAQSection />

      {/* Contact prompt */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-white dark:bg-[#0a1628] border-t border-slate-200 dark:border-slate-800">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
            Didn&apos;t Find Your Answer?
          </h2>
          <p className="text-slate-600 dark:text-slate-300 text-sm mb-6 leading-relaxed">
            Our team is happy to answer any specific questions you have about the recruitment
            process, requirements, or working in Mauritius.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/contact" className="btn-accent px-8 py-3">
              Contact Our Team
            </Link>
            <Link href="/apply" className="btn-outline px-8 py-3">
              Apply as a Worker
            </Link>
          </div>
        </div>
      </section>

      <CTABanner />
    </div>
  );
}
