import Link from 'next/link';

const whyFeatures = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    title: 'Verified Candidates',
    desc: 'Every candidate is reviewed against employer requirements — including qualifications, experience and documentation — before being presented for consideration.',
    color: 'text-teal-600 dark:text-teal-400 bg-teal-50 dark:bg-teal-950/60 border-teal-200/60 dark:border-teal-800/60',
    glow: 'from-teal-500 to-emerald-400',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
      </svg>
    ),
    title: 'Transparent Recruitment',
    desc: 'We operate openly. Workers are never charged placement fees. Employers receive a clear breakdown of service scope, timelines and associated costs.',
    color: 'text-cyan-600 dark:text-cyan-400 bg-cyan-50 dark:bg-cyan-950/60 border-cyan-200/60 dark:border-cyan-800/60',
    glow: 'from-cyan-500 to-blue-400',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: 'Fast Processing',
    desc: 'We manage the sourcing, screening and coordination process to help employers fill their workforce requirements efficiently and without unnecessary delays.',
    color: 'text-amber-600 dark:text-amber-400 bg-amber-50 dark:bg-amber-950/60 border-amber-200/60 dark:border-amber-800/60',
    glow: 'from-amber-500 to-orange-400',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
    title: 'Employer Support',
    desc: 'Dedicated support from enquiry through to worker arrival, including candidate coordination, interview scheduling and post-placement follow-up.',
    color: 'text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-950/60 border-indigo-200/60 dark:border-indigo-800/60',
    glow: 'from-indigo-500 to-blue-500',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
    title: 'Documentation Assistance',
    desc: 'We assist with coordinating the required recruitment documentation and work permit paperwork as part of the recruitment process in Mauritius.',
    color: 'text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/60 border-emerald-200/60 dark:border-emerald-800/60',
    glow: 'from-emerald-500 to-teal-400',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    title: 'Worker-Focused Approach',
    desc: 'Workers are never charged. We brief candidates clearly on contract terms, employment conditions and their rights before accepting any placement.',
    color: 'text-rose-600 dark:text-rose-400 bg-rose-50 dark:bg-rose-950/60 border-rose-200/60 dark:border-rose-800/60',
    glow: 'from-rose-500 to-pink-400',
  },
];

export function WhyChooseSection() {
  return (
    <section
      className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50 dark:bg-[#070e1c] transition-colors duration-200"
      aria-labelledby="why-choose-heading"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="label-tag">Our Promise</span>
          <h2 id="why-choose-heading" className="section-title mt-2">
            Why Choose{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0d9488] to-[#14b8a6]">
              MyRecruit
            </span>
          </h2>
          <p className="section-subtitle mt-4 mx-auto max-w-2xl text-slate-600 dark:text-slate-300">
            A trusted bridge between international talent and Mauritius industry — defined by
            compliance, transparency, and genuine care for both employers and workers.
          </p>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {whyFeatures.map((f, i) => (
            <div
              key={i}
              className="group relative bg-white dark:bg-[#0c1a35] rounded-2xl p-7 border border-slate-200/80 dark:border-slate-800 shadow-xs hover:shadow-xl hover:border-teal-500/30 dark:hover:border-teal-400/30 hover:-translate-y-1.5 transition-all duration-300 overflow-hidden"
            >
              {/* Hover top accent */}
              <div className={`absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r ${f.glow} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />

              {/* Icon */}
              <div className={`w-12 h-12 rounded-xl border ${f.color} flex items-center justify-center mb-5 shadow-xs transition-transform duration-300 group-hover:scale-110`}>
                {f.icon}
              </div>

              <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2.5 group-hover:text-[#0d9488] dark:group-hover:text-teal-300 transition-colors">
                {f.title}
              </h3>
              <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                {f.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-14 text-center">
          <div className="inline-flex flex-col sm:flex-row gap-4">
            <Link href="/request-workers" className="btn-primary px-8 py-3 text-base">
              Start Hiring — Employers
            </Link>
            <Link href="/apply" className="btn-accent px-8 py-3 text-base">
              Apply for Work — Workers
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
