import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { CTABanner } from '@/components/sections/CTABanner';
import { siteConfig } from '@/lib/config';

export const metadata: Metadata = {
  title: 'For Workers | Find Jobs in Mauritius',
  description:
    'Looking for work in Mauritius? MyRecruit connects overseas workers with legitimate, verified employment opportunities. Applying is completely free — no worker fees.',
  openGraph: {
    title: 'Find Work in Mauritius | For Workers | MyRecruit Ltd',
    description: 'Submit your profile for free and get matched with verified Mauritius employers. Work permit support included.',
  },
};

const steps = [
  {
    num: '01',
    title: 'Submit Your Profile',
    desc: 'Fill in your details, upload your CV/bio-data and passport copy through our secure application form. Completely free.',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
      </svg>
    ),
  },
  {
    num: '02',
    title: 'Profile Review & Screening',
    desc: 'Our team reviews your qualifications, experience, and submitted documents to verify your details.',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    num: '03',
    title: 'Employer Interview',
    desc: 'If your profile matches an employer requirement, we coordinate an interview — in person or by video call.',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    num: '04',
    title: 'Selection & Offer',
    desc: 'If selected, we clarify your contract terms, salary, and employment conditions clearly before you accept.',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
      </svg>
    ),
  },
  {
    num: '05',
    title: 'Work Permit Processing',
    desc: 'We coordinate with your employer to support the Mauritius work permit and required documentation.',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
  {
    num: '06',
    title: 'Deployment to Mauritius',
    desc: 'You travel to Mauritius and begin your employment. We provide guidance and remain available for support.',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
      </svg>
    ),
  },
];

const guarantees = [
  'Zero recruitment or placement fees for workers',
  'Transparent contract terms explained before acceptance',
  'Work permit coordination support',
  'Direct communication — no middlemen',
  'Honest information about jobs and conditions',
];

export default function WorkersPage() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="bg-gradient-to-br from-[#0b1938] via-[#0f2557] to-[#070e1c] dark:from-[#060c18] dark:via-[#091326] dark:to-[#070e1c] py-24 px-4 sm:px-6 lg:px-8 border-b border-slate-200/10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block text-xs font-bold uppercase tracking-widest text-teal-400 mb-4">
                For Workers
              </span>
              <h1 className="text-4xl sm:text-5xl font-black text-white mb-5 leading-tight">
                Find Legitimate<br />Work in Mauritius
              </h1>
              <p className="text-lg text-slate-300 leading-relaxed mb-6">
                Submit your profile and let our licensed recruitment team match your skills with
                verified employment opportunities in Mauritius. We are committed to transparent,
                ethical recruitment.
              </p>

              {/* Free badge */}
              <div className="bg-teal-500/15 border border-teal-500/30 rounded-xl px-5 py-3 inline-flex items-center gap-2 mb-8">
                <svg className="w-5 h-5 text-teal-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="text-teal-200 font-semibold text-sm">
                  Applying is completely free for workers — no hidden charges
                </span>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/apply" className="btn-accent text-base px-8 py-4 font-bold">
                  Apply Now — It&apos;s Free
                </Link>
                <Link href="/vacancies" className="btn-outline-white text-base px-8 py-4">
                  View Current Vacancies
                </Link>
              </div>

              {/* WhatsApp CTA */}
              <div className="mt-6">
                <a
                  href={`https://wa.me/${siteConfig.contact.whatsapp.replace(/\D/g, '')}?text=${encodeURIComponent('Hello, I am a worker interested in finding jobs in Mauritius.')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-green-400 hover:text-green-300 transition-colors font-semibold"
                  aria-label="Contact us on WhatsApp"
                >
                  <svg viewBox="0 0 32 32" fill="currentColor" className="w-5 h-5" aria-hidden="true">
                    <path d="M16.003 2.667C8.639 2.667 2.667 8.638 2.667 16c0 2.365.633 4.587 1.74 6.507L2.667 29.333l6.988-1.715A13.28 13.28 0 0016.003 29.333c7.363 0 13.33-5.97 13.33-13.333S23.366 2.667 16.003 2.667z" />
                  </svg>
                  Have a question? WhatsApp us directly
                </a>
              </div>
            </div>

            <div className="relative hidden lg:block">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-black/40 border border-white/10">
                <Image
                  src="https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=800&q=85"
                  alt="Skilled international worker in Mauritius industry"
                  width={800}
                  height={520}
                  className="w-full h-[460px] object-cover object-center"
                  priority
                />
                <div className="absolute top-4 right-4 bg-[#0b1938]/90 backdrop-blur-md border border-white/20 rounded-full px-3.5 py-1.5 flex items-center gap-2 shadow-lg">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="text-xs font-bold text-white tracking-wide">100% Free Application</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Worker Guarantees */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-white dark:bg-[#0a1628] border-b border-slate-200 dark:border-slate-800">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-200 dark:border-emerald-800/50 rounded-2xl p-6">
            <div className="w-10 h-10 rounded-full bg-emerald-600 text-white flex items-center justify-center flex-shrink-0">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <div>
              <h2 className="text-sm font-bold text-emerald-900 dark:text-emerald-200 mb-2">
                Our Commitment to Workers
              </h2>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-1">
                {guarantees.map((g, i) => (
                  <li key={i} className="flex items-center gap-2 text-xs text-emerald-800 dark:text-emerald-300">
                    <svg className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                    {g}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 6-Step Process */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50 dark:bg-[#070e1c] transition-colors" aria-labelledby="worker-process-heading">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <span className="label-tag">The Process</span>
            <h2 id="worker-process-heading" className="section-title mt-2">
              How It Works for Workers
            </h2>
            <p className="section-subtitle mt-4 max-w-2xl mx-auto text-slate-600 dark:text-slate-300">
              A clear, step-by-step journey from application to employment in Mauritius.
            </p>
          </div>

          {/* Steps with visual connector */}
          <div className="relative">
            {/* Vertical connector line */}
            <div className="absolute left-6 top-6 bottom-6 w-0.5 bg-gradient-to-b from-teal-400/60 via-teal-500/40 to-teal-400/20 hidden sm:block" aria-hidden="true" />

            <div className="space-y-4">
              {steps.map((s, i) => (
                <div
                  key={i}
                  className="group relative flex gap-5 items-start bg-white dark:bg-[#0c1a35] rounded-2xl p-5 border border-slate-100 dark:border-slate-800 shadow-xs hover:shadow-lg hover:border-teal-400/30 transition-all duration-300"
                >
                  {/* Step number circle */}
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#0b1938] to-[#0d9488] text-white font-black text-sm flex items-center justify-center flex-shrink-0 shadow-md group-hover:scale-105 transition-transform duration-300 z-10">
                    {s.num}
                  </div>

                  <div className="flex-1 pt-1">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-[#0d9488] dark:text-teal-400">{s.icon}</span>
                      <h3 className="font-bold text-slate-900 dark:text-white text-base">
                        {s.title}
                      </h3>
                    </div>
                    <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                      {s.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-10 text-center">
            <Link href="/apply" className="btn-accent text-base px-10 py-4 font-bold">
              Start Your Application — Free
            </Link>
          </div>
        </div>
      </section>

      <CTABanner />
    </div>
  );
}
