'use client';

import { useState } from 'react';
import Image from 'next/image';

export default function SuccessStories() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      name: 'Kwame Asante',
      business: 'Tech Solutions Ghana',
      location: 'Accra, Ghana',
      quote:
        'The training resources and stakeholder connections helped me scale my tech startup. Best investment I\'ve made for my business growth.',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop',
    },
    {
      name: 'Amara Okafor',
      business: 'Amara\'s Fashion Hub',
      location: 'Lagos, Nigeria',
      quote:
        'The unique business page feature allowed me to showcase my designs to a wider audience. My sales have tripled since joining the platform.',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop',
    },
    {
      name: 'Fatima Hassan',
      business: 'Hassan Trading Company',
      location: 'Nairobi, Kenya',
      quote:
        'Access to stakeholder networks opened doors I never thought possible. The platform has been transformative for my trading business.',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop',
    },
  ];

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-3">Success Stories from Our Community</h2>
          <p className="text-lg text-gray-600">Real businesses, real growth, real impact</p>
        </div>

        {/* Carousel */}
        <div className="bg-gradient-to-br from-teal-600 to-teal-700 rounded-3xl p-8 sm:p-12 text-white relative">
          <div className="flex flex-col sm:flex-row gap-8 items-center">
            {/* Testimonial Avatar and Info */}
            <div className="flex items-center gap-4 sm:w-1/3">
              <div className="relative w-20 h-20 rounded-full overflow-hidden flex-shrink-0">
                <Image
                  src={currentTestimonial.image}
                  alt={currentTestimonial.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <h3 className="font-bold text-lg">{currentTestimonial.name}</h3>
                <p className="text-teal-100 text-sm">{currentTestimonial.business}</p>
                <p className="text-teal-100 text-xs">{currentTestimonial.location}</p>
              </div>
            </div>

            {/* Quote and Rating */}
            <div className="sm:w-2/3">
              <p className="text-lg mb-4 italic leading-relaxed">"{currentTestimonial.quote}"</p>
              <div className="flex gap-1">
                {[...Array(currentTestimonial.rating)].map((_, i) => (
                  <span key={i} className="text-yellow-300 text-lg">
                    ★
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Navigation Dots */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition ${
                  index === currentIndex ? 'bg-white' : 'bg-teal-400'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-6 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 w-10 h-10 rounded-full flex items-center justify-center transition"
            aria-label="Previous testimonial"
          >
            ‹
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-6 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 w-10 h-10 rounded-full flex items-center justify-center transition"
            aria-label="Next testimonial"
          >
            ›
          </button>
        </div>
      </div>
    </section>
  );
}
