import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { CTABanner } from '@/components/sections/CTABanner';
import { WhyChooseEmployers } from '@/components/sections/WhyChooseEmployers';
import { siteConfig } from '@/lib/config';

export const metadata: Metadata = {
  title: 'For Employers | Hire Overseas Workers in Mauritius',
  description:
    'Recruit qualified overseas workers for your Mauritius business. MyRecruit sources, screens and coordinates international candidates across construction, manufacturing, hospitality and more.',
  openGraph: {
    title: 'Hire Overseas Workers | For Employers | MyRecruit Ltd',
    description: 'Tell us your staffing requirements. We source, screen and coordinate international candidates for Mauritius employers.',
  },
};

const employerBenefits = [
  'Pre-screened, qualified candidates matched to your requirements',
  'Coordination of work permit documentation',
  'Interview scheduling with shortlisted candidates',
  'Sourcing across Asia and Africa',
  'Employer support from first enquiry to worker arrival',
  'Transparent fees — no hidden charges',
];

const sectors = [
  'Construction',
  'Manufacturing & Textiles',
  'Hospitality & Tourism',
  'Domestic & Care',
  'Agriculture',
];

export default function EmployersPage() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="bg-gradient-to-br from-[#0b1938] via-[#0f2557] to-[#070e1c] dark:from-[#060c18] dark:via-[#091326] dark:to-[#070e1c] py-24 px-4 sm:px-6 lg:px-8 border-b border-slate-200/10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block text-xs font-bold uppercase tracking-widest text-teal-400 mb-4">
                For Employers
              </span>
              <h1 className="text-4xl sm:text-5xl font-black text-white mb-5 leading-tight">
                Find the Workforce<br />Your Business Needs
              </h1>
              <p className="text-lg text-slate-300 leading-relaxed mb-6">
                Tell us your staffing requirements and let our team source, screen, and coordinate
                suitable overseas candidates — saving you time, cost, and complexity.
              </p>

              {/* Sectors served */}
              <div className="mb-8">
                <p className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">Sectors We Serve</p>
                <div className="flex flex-wrap gap-2">
                  {sectors.map((s) => (
                    <span
                      key={s}
                      className="text-xs font-semibold px-3 py-1.5 rounded-full bg-white/10 border border-white/15 text-slate-200"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/request-workers" className="btn-accent text-base px-8 py-4 font-bold">
                  Request Workers Now
                </Link>
                <Link href="/contact" className="btn-outline-white text-base px-8 py-4">
                  Talk to Our Team
                </Link>
              </div>

              {/* WhatsApp CTA */}
              <div className="mt-6">
                <a
                  href={`https://wa.me/${siteConfig.contact.whatsapp.replace(/\D/g, '')}?text=${encodeURIComponent('Hello, I am an employer looking to hire overseas workers for my business in Mauritius.')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-green-400 hover:text-green-300 transition-colors font-semibold"
                  aria-label="Contact us on WhatsApp"
                >
                  <svg viewBox="0 0 32 32" fill="currentColor" className="w-5 h-5" aria-hidden="true">
                    <path d="M16.003 2.667C8.639 2.667 2.667 8.638 2.667 16c0 2.365.633 4.587 1.74 6.507L2.667 29.333l6.988-1.715A13.28 13.28 0 0016.003 29.333c7.363 0 13.33-5.97 13.33-13.333S23.366 2.667 16.003 2.667z" />
                  </svg>
                  Discuss requirements on WhatsApp
                </a>
              </div>
            </div>

            <div className="hidden lg:block">
              <div className="rounded-2xl overflow-hidden shadow-2xl border border-white/10">
                <Image
                  src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=700&q=85"
                  alt="Construction workers on a Mauritius project"
                  width={700}
                  height={460}
                  className="w-full h-[400px] object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Employer Benefits Strip */}
      <section className="py-10 px-4 sm:px-6 lg:px-8 bg-white dark:bg-[#0a1628] border-b border-slate-200 dark:border-slate-800">
        <div className="max-w-4xl mx-auto">
          <p className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-4 text-center">
            What We Offer Employers
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {employerBenefits.map((b, i) => (
              <div key={i} className="flex items-center gap-2.5 text-sm text-slate-700 dark:text-slate-300">
                <svg className="w-4 h-4 text-teal-600 dark:text-teal-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                </svg>
                {b}
              </div>
            ))}
          </div>
        </div>
      </section>

      <WhyChooseEmployers />

      {/* CTA to form */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-50 dark:bg-[#070e1c] transition-colors" aria-labelledby="employer-cta-heading">
        <div className="max-w-3xl mx-auto text-center">
          <h2 id="employer-cta-heading" className="text-3xl font-bold text-slate-900 dark:text-white mb-4">
            Ready to Start Recruiting?
          </h2>
          <p className="text-slate-600 dark:text-slate-300 mb-8 leading-relaxed">
            Submit your staffing requirements using the form below and our team will review your
            needs and get back to you to discuss how we can help.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/request-workers" className="btn-accent text-base px-10 py-4 font-bold">
              Submit a Worker Request
            </Link>
            <Link href="/contact" className="btn-outline text-base px-8 py-4">
              Contact Us First
            </Link>
          </div>
        </div>
      </section>

      <CTABanner />
    </div>
  );
}
