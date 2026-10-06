import Link from 'next/link';

interface Country {
  name: string;
  flag: string;
  region: string;
  note: string;
}

const recruitmentCountries: Country[] = [
  { name: 'India', flag: '🇮🇳', region: 'South Asia', note: 'Skilled tradespeople & hospitality professionals' },
  { name: 'Bangladesh', flag: '🇧🇩', region: 'South Asia', note: 'Construction & manufacturing workers' },
  { name: 'Nepal', flag: '🇳🇵', region: 'South Asia', note: 'Multi-sector workforce' },
  { name: 'Sri Lanka', flag: '🇱🇰', region: 'South Asia', note: 'Domestic care & hospitality' },
  { name: 'Madagascar', flag: '🇲🇬', region: 'East Africa', note: 'Agriculture & domestic workers' },
  { name: 'Tanzania', flag: '🇹🇿', region: 'East Africa', note: 'General labour & agriculture' },
  { name: 'Mozambique', flag: '🇲🇿', region: 'Southern Africa', note: 'Agriculture & construction' },
  { name: 'Indonesia', flag: '🇮🇩', region: 'Southeast Asia', note: 'Domestic & care professionals' },
  { name: 'Philippines', flag: '🇵🇭', region: 'Southeast Asia', note: 'Hospitality & skilled workers' },
  { name: 'Vietnam', flag: '🇻🇳', region: 'Southeast Asia', note: 'Manufacturing & textiles' },
];

export function CountriesSection() {
  return (
    <section
      className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-slate-50 dark:from-[#070e1c] dark:to-[#0a1628] transition-colors duration-200"
      aria-labelledby="countries-heading"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="label-tag">Our Global Reach</span>
          <h2 id="countries-heading" className="section-title mt-2">
            Countries We Recruit From
          </h2>
          <p className="section-subtitle mt-4 mx-auto max-w-2xl text-slate-600 dark:text-slate-300">
            We source pre-screened candidates from a growing network of partner countries across Asia
            and Africa — matching Mauritian employer needs with qualified international talent.
          </p>
        </div>

        {/* Country Cards Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
          {recruitmentCountries.map((country) => (
            <div
              key={country.name}
              className="group bg-white dark:bg-[#0c1a35] rounded-2xl p-5 border border-slate-100 dark:border-slate-800 shadow-xs hover:shadow-lg hover:border-teal-400/40 hover:-translate-y-1 transition-all duration-300 flex flex-col items-center text-center"
            >
              {/* Flag Emoji */}
              <span
                className="text-4xl mb-3 drop-shadow-sm group-hover:scale-110 transition-transform duration-300"
                role="img"
                aria-label={`${country.name} flag`}
              >
                {country.flag}
              </span>

              {/* Country name */}
              <h3 className="font-bold text-slate-900 dark:text-white text-sm mb-1">
                {country.name}
              </h3>

              {/* Region badge */}
              <span className="text-[10px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded-full bg-teal-50 dark:bg-teal-950/60 text-teal-700 dark:text-teal-300 border border-teal-200/60 dark:border-teal-700/40 mb-2">
                {country.region}
              </span>

              {/* Note */}
              <p className="text-[11px] text-slate-500 dark:text-slate-400 leading-snug">
                {country.note}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom Note */}
        <div className="mt-12 text-center">
          <p className="text-sm text-slate-500 dark:text-slate-400 mb-6">
            Specific sourcing countries are selected based on the role, required skill level, and employer preference.
            Contact us to discuss the best sourcing market for your requirements.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/request-workers"
              className="btn-accent px-8 py-3"
            >
              Request Workers
            </Link>
            <Link
              href="/contact"
              className="btn-outline px-8 py-3"
            >
              Discuss Sourcing Options
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
