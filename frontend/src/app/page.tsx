import type { Metadata } from 'next';
import { HeroSection } from '@/components/sections/HeroSection';
import { UserJourneys } from '@/components/sections/UserJourneys';
import { AboutSection } from '@/components/sections/AboutSection';
import { WhyChooseSection } from '@/components/sections/WhyChooseSection';
import { CountriesSection } from '@/components/sections/CountriesSection';
import { SectorsSection } from '@/components/sections/SectorsSection';
import { HowItWorksSection } from '@/components/sections/HowItWorksSection';
import { TestimonialsSection } from '@/components/sections/TestimonialsSection';
import { ResponsibleRecruitment } from '@/components/sections/ResponsibleRecruitment';
import { FAQSection } from '@/components/sections/FAQSection';
import { ContactSection } from '@/components/sections/ContactSection';
import { CTABanner } from '@/components/sections/CTABanner';

export const metadata: Metadata = {
  title: 'MyRecruit Ltd | Professional Recruitment Agency Mauritius',
  description:
    'MyRecruit Ltd is a licensed recruitment agency in Mauritius specialising in overseas worker recruitment. We connect Mauritian employers with qualified international talent from Asia and Africa.',
  keywords: [
    'recruitment agency Mauritius',
    'jobs in Mauritius',
    'overseas workers Mauritius',
    'foreign worker recruitment Mauritius',
    'work permit Mauritius',
    'hire workers Mauritius',
    'international recruitment Mauritius',
    'MyRecruit Ltd',
  ],
  openGraph: {
    title: 'MyRecruit Ltd | Professional Recruitment Agency Mauritius',
    description: 'Licensed recruitment agency in Mauritius connecting employers with pre-vetted overseas workers. Zero worker fees. Transparent process.',
    url: 'https://myrecruitltd.mu',
    siteName: 'MyRecruit Ltd',
    type: 'website',
    locale: 'en_MU',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'MyRecruit Ltd | Professional Recruitment Agency Mauritius',
    description: 'Licensed recruitment agency in Mauritius connecting employers with pre-vetted overseas workers.',
  },
};

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <UserJourneys />
      <AboutSection />
      <WhyChooseSection />
      <CountriesSection />
      <SectorsSection />
      <HowItWorksSection />
      <TestimonialsSection />
      <ResponsibleRecruitment />
      <FAQSection />
      <ContactSection />
      <CTABanner />
    </>
  );
}
