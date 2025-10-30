import Image from 'next/image';
import Link from 'next/link';

export default function Hero() {
  return (
    <section className="bg-gradient-to-br from-green-50 via-white to-blue-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Left Content */}
          <div className="flex flex-col gap-6">
            <div className="text-sm font-semibold text-teal-600">
              #1 MSME Platform in Africa
            </div>
            <h1 className="text-5xl font-bold text-gray-900 leading-tight">
              Empower Your <span className="text-teal-600">MSME Business</span>
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed">
              Join Africa's premier marketplace platform designed specifically for Micro, Small & Medium Enterprises. Get your unique business page, access training, connect with stakeholders, and grow your business digitally.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
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

          {/* Right Image with Stat Box */}
          <div className="relative h-96 lg:h-full min-h-96">
            <div className="relative rounded-2xl overflow-hidden h-full shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=500&fit=crop"
                alt="Business professionals collaborating"
                fill
                className="object-cover"
              />
            </div>
            
            {/* Stat Box Overlay */}
            <div className="absolute bottom-6 right-6 bg-white rounded-2xl shadow-lg p-6 w-56">
              <div className="flex items-start gap-3">
                <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center">
                  <span className="text-teal-600 text-xl">💰</span>
                </div>
                <div>
                  <div className="text-2xl font-bold text-gray-900">N2.5B+</div>
                  <div className="text-sm text-gray-600">Revenue Generated</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
