export default function FeaturesSection() {
  const features = [
    {
      icon: '📋',
      title: 'Unique Business Page',
      description: 'Get your personalized business page with custom link to showcase products, services, and brand story',
      bgColor: 'bg-emerald-50',
      iconBgColor: 'bg-emerald-100',
      iconColor: 'text-emerald-600',
    },
    {
      icon: '🔍',
      title: 'Searchable Marketplace',
      description: 'Be discovered by customers searching by location, category, pricing, and business type',
      bgColor: 'bg-blue-50',
      iconBgColor: 'bg-blue-100',
      iconColor: 'text-blue-600',
    },
    {
      icon: '📚',
      title: 'Training & Capacity Building',
      description: 'Access industry-specific training, business strategies, and educational resources',
      bgColor: 'bg-purple-50',
      iconBgColor: 'bg-purple-100',
      iconColor: 'text-purple-600',
    },
    {
      icon: '🤝',
      title: 'Stakeholder Network',
      description: 'Connect with government agencies, financial institutions, and industry partners',
      bgColor: 'bg-orange-50',
      iconBgColor: 'bg-orange-100',
      iconColor: 'text-orange-600',
    },
    {
      icon: '📱',
      title: 'Social Media Integration',
      description: 'Link your WhatsApp, Facebook, Instagram, and other social platforms seamlessly',
      bgColor: 'bg-pink-50',
      iconBgColor: 'bg-pink-100',
      iconColor: 'text-pink-600',
    },
    {
      icon: '🔒',
      title: 'Secure & Compliant',
      description: 'Your business data is protected with enterprise-grade security and privacy compliance',
      bgColor: 'bg-teal-50',
      iconBgColor: 'bg-teal-100',
      iconColor: 'text-teal-600',
    },
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Everything Your Business Needs</h2>
          <p className="text-lg text-gray-600">
            From business profile creation to stakeholder connections, we provide comprehensive tools for MSME growth
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`${feature.bgColor} rounded-2xl p-8 transition hover:shadow-lg`}
            >
              <div className={`${feature.iconBgColor} w-16 h-16 rounded-xl flex items-center justify-center mb-4`}>
                <span className={`text-2xl ${feature.iconColor}`}>{feature.icon}</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
              <p className="text-gray-700 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
