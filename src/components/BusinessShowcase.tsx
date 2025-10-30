import Image from 'next/image';

export default function BusinessShowcase() {
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

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900">See Your Business Page in Action</h2>
          <p className="text-lg text-gray-600 mt-2">Preview how your business will look to customers</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Features */}
          <div className="flex flex-col gap-6">
            <h3 className="text-2xl font-bold text-gray-900">Professional Business Showcase</h3>

            {features.map((feature, index) => (
              <div key={index} className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-gradient-to-br from-emerald-100 to-emerald-50 flex items-center justify-center">
                  <span className="text-xl">{feature.icon}</span>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">{feature.title}</h4>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Right Side - Preview Card */}
          <div className="relative">
            <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-200">
              {/* Card Header with Business Info */}
              <div className="bg-gradient-to-r from-teal-600 to-teal-700 px-6 py-4 flex items-center gap-4">
                <div className="w-12 h-12 bg-teal-500 rounded-full flex items-center justify-center text-white font-bold">
                  SB
                </div>
                <div>
                  <h4 className="font-bold text-white">Sample Business</h4>
                  <p className="text-teal-100 text-sm">Fashion & Accessories</p>
                </div>
              </div>

              {/* Image Section */}
              <div className="relative h-48 bg-gray-100">
                <Image
                  src="https://images.unsplash.com/photo-1599122645243-1ca349c3a7a5?w=400&h=300&fit=crop"
                  alt="Sample business products"
                  fill
                  className="object-cover"
                />
              </div>

              {/* Stats and CTA */}
              <div className="px-6 py-4">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <div className="text-2xl font-bold text-gray-900">45</div>
                    <div className="text-sm text-gray-600">Products</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-gray-900">4.9★</div>
                    <div className="text-sm text-gray-600">Reviews</div>
                  </div>
                </div>
                <button className="w-full bg-teal-600 hover:bg-teal-700 text-white font-bold py-3 rounded-lg transition">
                  Contact Business
                </button>
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-green-100 rounded-full opacity-50 blur-3xl" />
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-blue-100 rounded-full opacity-50 blur-3xl" />
          </div>
        </div>
      </div>
    </section>
  );
}
