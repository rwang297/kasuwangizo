export default function StepsSection() {
  const steps = [
    {
      number: '01',
      icon: '👤',
      title: 'Sign Up & Create Profile',
      description:
        'Register your business with basic information and create your professional profile',
    },
    {
      number: '02',
      icon: '🎨',
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

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-3">Simple Steps to Success</h2>
          <p className="text-lg text-gray-600">Get your business online in minutes, not days</p>
        </div>

        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          {steps.map((step, index) => (
            <div key={index} className="flex-1 flex flex-col items-center">
              <div className="flex items-center gap-6 w-full">
                <div className="flex-shrink-0">
                  <div className="w-20 h-20 bg-teal-600 rounded-full flex items-center justify-center text-white">
                    <span className="text-2xl">{step.icon}</span>
                  </div>
                </div>
                <div className="flex-1">
                  <div className="text-sm font-bold text-teal-600 mb-1">{step.number}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              </div>

              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute left-1/2 ml-16 w-16 h-1 bg-gray-300 mt-12" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
