'use client';

import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';

export default function BusinessShowcaseSection() {
  const features = [
    {
      icon: '🎨',
      title: 'Custom Branding',
      description: 'Upload your logo and brand colors',
    },
    {
      icon: '📦',
      title: 'Product Catalog',
      description: 'Showcase your products with images and prices',
    },
    {
      icon: '💬',
      title: 'Contact Integration',
      description: 'Whatsapp, calls and social media links',
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
    <section className="py-20 px-6 bg-gray-50" ref={sectionRef}>
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-3">
            See Your Business Page in Action
          </h2>
          <p className="text-lg text-gray-600">
            Preview how your business will look to customers
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Features */}
          <div
            className={`transform transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
            }`}
            style={{
              transitionDelay: isVisible ? '0ms' : '0ms',
            }}
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-8">
              Professional Business Showcase
            </h3>

            <div className="space-y-6">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4 p-4 bg-white rounded-xl hover:shadow-md transition-shadow duration-300"
                >
                  <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl">{feature.icon}</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">
                      {feature.title}
                    </h4>
                    <p className="text-gray-600 text-sm">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side - Business Card Preview */}
          <div
            className={`transform transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
            }`}
            style={{
              transitionDelay: isVisible ? '100ms' : '0ms',
            }}
          >
            <div className="relative group">
              {/* Card */}
              <div className="bg-white rounded-3xl shadow-2xl overflow-hidden hover:shadow-2xl transition-shadow duration-300">
                {/* Card Header */}
                <div className="bg-teal-600 px-6 py-4 flex items-center gap-4">
                  <div className="w-10 h-10 bg-teal-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                    SB
                  </div>
                  <div>
                    <h4 className="font-bold text-white">Sample Business</h4>
                    <p className="text-teal-100 text-sm">Fashion & Accessories</p>
                  </div>
                </div>

                {/* Card Image */}
                <div className="relative h-48 bg-gray-100 overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1599122645243-1ca349c3a7a5?w=400&h=300&fit=crop"
                    alt="Sample business products"
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>

                {/* Card Stats */}
                <div className="px-6 py-4">
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div>
                      <div className="text-2xl font-bold text-gray-900">45</div>
                      <div className="text-sm text-gray-600">Products</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-gray-900">
                        4.9<span className="text-lg">★</span>
                      </div>
                      <div className="text-sm text-gray-600">Reviews</div>
                    </div>
                  </div>

                  {/* CTA Button */}
                  <button className="w-full bg-teal-600 hover:bg-teal-700 text-white font-bold py-3 rounded-lg transition-colors duration-300">
                    Contact Business
                  </button>
                </div>
              </div>

              {/* Decorative Blur Elements */}
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-teal-100 rounded-full opacity-40 blur-3xl" />
              <div className="absolute -top-6 -left-6 w-32 h-32 bg-green-100 rounded-full opacity-40 blur-3xl" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
