import type { Metadata } from 'next';
import Link from 'next/link';
import { vacancies } from '@/data/vacancies';

export const metadata: Metadata = {
  title: 'Find Jobs in Mauritius | Current Vacancies',
  description:
    'Browse current job vacancies in Mauritius across construction, manufacturing, hospitality, domestic care and agriculture. Zero recruitment fees for workers.',
  openGraph: {
    title: 'Current Vacancies | MyRecruit Ltd',
    description: 'Browse job opportunities in Mauritius. Submit your profile for free and get matched with verified employers.',
  },
};

const industries = [
  'All Industries',
  'Construction',
  'Manufacturing & Textiles',
  'Hospitality & Tourism',
  'Domestic & Care',
  'Agriculture',
];

export default function VacanciesPage() {
  return (
    <div className="pt-20">
      {/* Hero Banner */}
      <section className="bg-gradient-to-br from-[#0b1938] via-[#0f2557] to-[#070e1c] dark:from-[#060c18] dark:via-[#091326] dark:to-[#070e1c] py-20 px-4 sm:px-6 lg:px-8 border-b border-slate-200/10">
        <div className="max-w-7xl mx-auto text-center">
          <span className="inline-block text-xs font-bold uppercase tracking-widest text-teal-400 mb-4">
            Job Opportunities
          </span>
          <h1 className="text-4xl sm:text-5xl font-black text-white mb-5 leading-tight">
            Find Jobs in Mauritius
          </h1>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Browse available positions across key industries. Applying is{' '}
            <span className="text-teal-300 font-semibold">100% free</span> for workers.
          </p>

          {/* Key benefits */}
          <div className="flex flex-wrap justify-center gap-4 mt-8">
            {[
              { icon: '✓', text: 'Zero Worker Fees' },
              { icon: '✓', text: 'Verified Employers' },
              { icon: '✓', text: 'Work Permit Support' },
              { icon: '✓', text: 'Transparent Contracts' },
            ].map((item) => (
              <div
                key={item.text}
                className="flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/15 rounded-full px-4 py-2 text-sm text-white font-medium"
              >
                <span className="text-teal-400 font-bold">{item.icon}</span>
                {item.text}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Filter bar (UI structure — filters are visual only for static site) */}
      <section className="sticky top-[72px] z-30 bg-white/95 dark:bg-[#0a1628]/95 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 py-4 px-4 sm:px-6 lg:px-8 shadow-sm">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col sm:flex-row gap-3 items-start sm:items-center">
            {/* Search */}
            <div className="relative flex-1 min-w-0">
              <svg
                className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <input
                type="search"
                placeholder="Search job title or keyword..."
                className="w-full pl-9 pr-4 py-2.5 text-sm border border-slate-200 dark:border-slate-700 rounded-xl bg-white dark:bg-[#0c1a35] text-slate-900 dark:text-white placeholder-slate-400 focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20 outline-none transition-all"
                aria-label="Search vacancies"
              />
            </div>

            {/* Industry filter */}
            <select
              className="px-3 py-2.5 text-sm border border-slate-200 dark:border-slate-700 rounded-xl bg-white dark:bg-[#0c1a35] text-slate-900 dark:text-white focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20 outline-none transition-all min-w-[180px]"
              aria-label="Filter by industry"
              defaultValue="All Industries"
            >
              {industries.map((ind) => (
                <option key={ind} value={ind}>{ind}</option>
              ))}
            </select>

            {/* Location filter */}
            <select
              className="px-3 py-2.5 text-sm border border-slate-200 dark:border-slate-700 rounded-xl bg-white dark:bg-[#0c1a35] text-slate-900 dark:text-white focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20 outline-none transition-all min-w-[160px]"
              aria-label="Filter by location"
              defaultValue=""
            >
              <option value="">All Locations</option>
              <option value="port-louis">Port Louis</option>
              <option value="plaine-wilhems">Plaine Wilhems</option>
              <option value="grand-port">Grand Port</option>
              <option value="riviere-du-rempart">Rivière du Rempart</option>
              <option value="flacq">Flacq</option>
            </select>
          </div>
        </div>
      </section>

      {/* Vacancies list */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-50 dark:bg-[#070e1c] transition-colors min-h-[40vh]">
        <div className="max-w-7xl mx-auto">
          {vacancies.length === 0 ? (
            /* ── No Vacancies State ── */
            <div className="max-w-xl mx-auto text-center py-16">
              <div className="w-20 h-20 rounded-full bg-slate-200 dark:bg-slate-800 flex items-center justify-center mx-auto mb-6">
                <svg
                  className="w-10 h-10 text-slate-400 dark:text-slate-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-3">
                No Vacancies Listed Right Now
              </h2>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                We currently have no open positions listed here. However, new opportunities become
                available regularly across construction, manufacturing, hospitality, and more.
              </p>
              <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed mb-8">
                Submit your profile today and our team will contact you as soon as a matching
                opportunity becomes available.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/apply"
                  className="btn-accent px-8 py-3 text-base font-bold"
                >
                  Submit Your Profile — Free
                </Link>
                <Link
                  href="/contact"
                  className="btn-outline px-8 py-3 text-base"
                >
                  Contact Our Team
                </Link>
              </div>
            </div>
          ) : (
            /* ── Job Cards (shown when vacancies exist) ── */
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {vacancies.map((v) => (
                <article
                  key={v.id}
                  className="bg-white dark:bg-[#0c1a35] rounded-2xl p-6 border border-slate-100 dark:border-slate-800 shadow-sm hover:shadow-lg hover:border-teal-400/30 hover:-translate-y-1 transition-all duration-300 flex flex-col"
                >
                  {/* Card Header */}
                  <div className="flex items-start justify-between mb-4 gap-3">
                    <div className="flex-1 min-w-0">
                      <h3 className="font-bold text-slate-900 dark:text-white text-base leading-snug mb-1">
                        {v.title}
                      </h3>
                      <p className="text-xs text-slate-500 dark:text-slate-400">
                        {v.industry}
                        {v.location ? ` · ${v.location}` : ''}
                      </p>
                    </div>
                    <span className="text-xs font-semibold px-2.5 py-1 bg-teal-500/10 dark:bg-teal-950/60 text-teal-700 dark:text-teal-300 rounded-full whitespace-nowrap border border-teal-200/60 dark:border-teal-700/40 flex-shrink-0">
                      {v.employmentType}
                    </span>
                  </div>

                  {/* Description */}
                  <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-4 flex-1">
                    {v.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {v.salary && (
                      <span className="inline-flex items-center gap-1 text-xs px-2.5 py-1 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 rounded-full">
                        <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        {v.salary}
                      </span>
                    )}
                    {v.experience && (
                      <span className="inline-flex items-center gap-1 text-xs px-2.5 py-1 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 rounded-full">
                        <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        {v.experience} exp.
                      </span>
                    )}
                  </div>

                  {/* Requirements */}
                  {v.requirements && v.requirements.length > 0 && (
                    <div className="mb-4">
                      <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-2">
                        Requirements
                      </p>
                      <ul className="space-y-1">
                        {v.requirements.slice(0, 3).map((req, idx) => (
                          <li key={idx} className="flex items-start gap-1.5 text-xs text-slate-600 dark:text-slate-300">
                            <svg className="w-3.5 h-3.5 text-teal-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                            </svg>
                            {req}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Apply CTA */}
                  <Link
                    href="/apply"
                    className="btn-accent w-full justify-center text-sm py-3 mt-auto"
                  >
                    Apply Now — It&apos;s Free
                  </Link>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* CTA strip at bottom */}
      <section className="py-14 px-4 sm:px-6 lg:px-8 bg-white dark:bg-[#0a1628] border-t border-slate-200 dark:border-slate-800">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white mb-3">
            Don&apos;t See a Matching Job?
          </h2>
          <p className="text-slate-600 dark:text-slate-300 mb-8 leading-relaxed">
            Submit your profile and our team will reach out when a suitable position becomes
            available. It is completely free for workers.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/apply" className="btn-accent px-8 py-3 text-base font-bold">
              Submit Your Profile — Free
            </Link>
            <Link href="/sectors" className="btn-outline px-8 py-3 text-base">
              View Our Sectors
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
