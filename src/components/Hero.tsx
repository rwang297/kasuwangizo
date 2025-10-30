import Image from 'next/image';
import Link from 'next/link';

export default function Hero() {
  return (
    <section className="bg-gradient-to-br from-green-50 via-white to-blue-50 py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="flex flex-col gap-6">
            {/* Badge */}
            <div className="text-sm font-semibold text-teal-600">
              #1 MSME Platform in Africa
            </div>

            {/* Headline */}
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Empower Your{' '}
              <span className="text-teal-600">MSME Business</span>
            </h1>

            {/* Description */}
            <p className="text-lg text-gray-700 leading-relaxed">
              Join Africa's premier marketplace platform designed specifically for Micro, Small & Medium Enterprises. Get your unique business page, access training, connect with stakeholders, and grow your business digitally.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link
                href="/signup"
                className="px-8 py-3 bg-teal-600 text-white rounded-full font-semibold hover:bg-teal-700 transition flex items-center justify-center gap-2"
              >
                Start Your Journey →
              </Link>
              <Link
                href="#learn-more"
                className="px-8 py-3 bg-blue-600 text-white rounded-full font-semibold hover:bg-blue-700 transition flex items-center justify-center gap-2"
              >
                Learn More
              </Link>
            </div>

            {/* Features List */}
            <div className="flex flex-wrap gap-6 pt-4">
              <div className="flex items-center gap-2">
                <span className="text-teal-600">✓</span>
                <span className="text-gray-700 font-medium">Free Registration</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-teal-600">✓</span>
                <span className="text-gray-700 font-medium">Unique Business Page</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-teal-600">✓</span>
                <span className="text-gray-700 font-medium">Training Access</span>
              </div>
            </div>
          </div>

          {/* Right Image Section */}
          <div className="relative h-96 lg:h-[500px]">
            <div className="relative rounded-2xl overflow-hidden h-full shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=500&fit=crop"
                alt="Business professionals collaborating"
                fill
                className="object-cover"
              />
            </div>

            {/* Stat Box Overlay */}
            <div className="absolute bottom-6 right-6 bg-white rounded-2xl shadow-lg p-5 w-48">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-teal-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-teal-600 text-lg">💰</span>
                </div>
                <div>
                  <div className="text-xl font-bold text-gray-900">N2.5B+</div>
                  <div className="text-xs text-gray-600">Revenue Generated</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
