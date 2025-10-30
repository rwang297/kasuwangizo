export default function StatsSection() {
  const stats = [
    {
      icon: '🏢',
      number: '15,000+',
      label: 'Active Businesses',
    },
    {
      icon: '💵',
      number: 'N2.5B+',
      label: 'Revenue Generated',
    },
    {
      icon: '📚',
      number: '50+',
      label: 'Training Programs',
    },
    {
      icon: '🎯',
      number: '98%',
      label: 'Success Rate',
    },
  ];

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-5xl mb-4">{stat.icon}</div>
              <div className="text-4xl font-bold text-gray-900 mb-2">{stat.number}</div>
              <div className="text-gray-600 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
