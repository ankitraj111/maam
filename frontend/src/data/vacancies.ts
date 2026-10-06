export interface Vacancy {
  id: string;
  title: string;
  industry: string;
  location: string;
  salary: string;
  experience: string;
  employmentType: string;
  postedDate: string;
  description: string;
  sector: string;
  requirements?: string[];
  benefits?: string[];
}

// NOTE: These are example/template vacancy cards. Replace with real live vacancies.
// When no real vacancies exist, this array should be empty and the "No Vacancies" state shown.
// Uncomment and populate real entries as they become available.
export const vacancies: Vacancy[] = [
  /* Example template — remove this comment block and add real vacancies here:
  {
    id: 'v1',
    title: 'Mason / Bricklayer',
    industry: 'Construction',
    location: 'Port Louis, Mauritius',
    salary: 'As per Mauritius Employment Act',
    experience: '3+ years',
    employmentType: 'Full-Time',
    postedDate: '2024-01-01',
    description: 'Experienced masons required for a commercial construction project in Mauritius. Work permit and accommodation support provided.',
    sector: 'construction',
    requirements: ['3+ years bricklaying/masonry experience', 'Valid passport', 'Physically fit'],
    benefits: ['Accommodation provided', 'Work permit sponsored', 'Zero recruitment fee for workers'],
  },
  */
];
