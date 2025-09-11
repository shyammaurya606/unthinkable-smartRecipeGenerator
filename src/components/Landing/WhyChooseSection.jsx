import React from 'react';

const WhyChooseSection = () => {
  const features = [
    {
      icon: '🤖',
      title: 'AI-Powered Recipes',
      description: '',
      benefits: [
        'Smart ingredient analysis',
        'Personalized recommendations',
        'Dietary restriction support',
        'Nutritional optimization'
      ]
    },
    {
      icon: '⚡',
      title: 'Instant Generation',
      description: '',
      benefits: [
        'Real-time recipe creation',
        'Quick meal planning',
        'Efficient cooking prep',
        'Time-saving solutions'
      ]
    },
    {
      icon: '💾',
      title: 'Personal Recipe Library',
      description: '',
      benefits: [
        'Cloud-based storage',
        'Easy recipe management',
        'Cross-device sync',
        'Organized collections'
      ]
    }
  ];

  return (
    <div className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Why Choose Recipe<span className="text-blue-600">AI </span>?
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            We combine the expertise of a seasoned professional with the agility and personal attention that only a focused, dedicated team can provide.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-gray-800 rounded-xl p-8 border border-gray-700 hover:border-blue-500 transition-all duration-300 group">
              <div className="text-center mb-6">
                <div className="text-5xl mb-4">{feature.icon}</div>
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-blue-400 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  {feature.description}
                </p>
              </div>

              <div className="space-y-3">
                {feature.benefits.map((benefit, benefitIndex) => (
                  <div key={benefitIndex} className="flex items-center text-gray-300">
                    <div className="w-2 h-2 bg-blue-400 rounded-full mr-3 flex-shrink-0"></div>
                    <span className="text-sm">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhyChooseSection;