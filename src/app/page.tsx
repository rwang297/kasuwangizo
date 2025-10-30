'use client';

import Header from '@/components/Header';
import Hero from '@/components/Hero';
import StatsSection from '@/components/StatsSection';
import FeaturesSection from '@/components/FeaturesSection';
import AboutSection from '@/components/AboutSection';
import StepsSection from '@/components/StepsSection';

export default function Home() {
  return (
    <div className="w-full bg-white">
      <Header />
      <Hero />
      <StatsSection />
      <FeaturesSection />
      <AboutSection />
      <StepsSection />
    </div>
  );
}
