'use client';

import Header from '@/components/Header';
import Hero from '@/components/Hero';
import StatsSection from '@/components/StatsSection';

export default function Home() {
  return (
    <div className="w-full bg-white">
      <Header />
      <Hero />
      <StatsSection />
    </div>
  );
}
