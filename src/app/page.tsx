'use client';

import { useState } from 'react';
import Image from 'next/image';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import StatsSection from '@/components/StatsSection';
import FeaturesSection from '@/components/FeaturesSection';
import SuccessStories from '@/components/SuccessStories';
import StepsSection from '@/components/StepsSection';
import BusinessShowcase from '@/components/BusinessShowcase';
import CTASection from '@/components/CTASection';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="w-full bg-white">
      <Header />
      <Hero />
      <StatsSection />
      <FeaturesSection />
      <SuccessStories />
      <StepsSection />
      <BusinessShowcase />
      <CTASection />
      <Footer />
    </div>
  );
}
