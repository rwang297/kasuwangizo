'use client';

import { useEffect, useRef, useState } from 'react';

export default function StepsSection() {
  const steps = [
    {
      number: '01',
      icon: '��',
      title: 'Sign Up & Create Profile',
      description:
        'Register your business with basic information and create your professional profile',
    },
    {
      number: '02',
      icon: '⚙️',
      title: 'Customize Your Page',
      description:
        'Upload logo, add products/services, set pricing, and connect social media accounts',
    },
    {
      number: '03',
      icon: '🔒',
      title: 'Share & Grow',
      description:
        'Get your unique link, share with customers, and access training opportunities',
    },
  ];

  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-20 px-6 bg-white" ref={sectionRef}>
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-3">
            Simple Steps to Success
          </h2>
          <p className="text-lg text-gray-600">
            Get your business online in minutes, not days
          </p>
        </div>

        {/* Steps Container */}
        <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-0">
          {steps.map((step, index) => (
            <div key={index} className="flex flex-col items-center flex-1 relative">
              {/* Step Container */}
              <div
                className={`flex flex-col items-center transform transition-all duration-700 ${
                  isVisible
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-8'
                }`}
                style={{
                  transitionDelay: isVisible ? `${index * 100}ms` : '0ms',
                }}
              >
                {/* Step Number */}
                <div className="text-sm font-bold text-teal-600 mb-3">
                  {step.number}
                </div>

                {/* Icon Circle */}
                <div className="w-16 h-16 bg-teal-600 rounded-full flex items-center justify-center mb-4 hover:scale-110 transition-transform duration-300 cursor-pointer">
                  <span className="text-2xl">{step.icon}</span>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 text-center text-sm leading-relaxed max-w-xs">
                  {step.description}
                </p>
              </div>

              {/* Connector Line (Desktop only, between steps) */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-8 left-1/2 w-20 h-1 bg-gray-300 -ml-10">
                  <style>{`
                    @media (min-width: 1024px) {
                      div:nth-child(${index + 1}) ~ div .connector {
                        display: none;
                      }
                    }
                  `}</style>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
