import React from 'react';

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'Home Chef',
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      content: 'RecipeAI has completely transformed my cooking experience. I can now create amazing meals with whatever ingredients I have in my fridge. The AI suggestions are spot-on!',
      rating: 5
    },
    {
      name: 'Michael Chen',
      role: 'Food Blogger',
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      content: 'As someone who writes about food daily, I\'m impressed by the creativity and accuracy of RecipeAI. It\'s like having a professional chef as your personal assistant.',
      rating: 5
    },
    {
      name: 'Lisa Park',
      role: 'Health Enthusiast',
      image: 'https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      content: 'I love how RecipeAI considers my dietary restrictions and health goals. Every recipe is perfectly tailored to my keto lifestyle while being absolutely delicious.',
      rating: 5
    },
  
  ];

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <span key={index} className={`text-lg ${index < rating ? 'text-yellow-400' : 'text-gray-600'}`}>
        ★
      </span>
    ));
  };

  return (
    <div className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            What Our Users Say
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Join thousands of satisfied home cooks, professional chefs, and food enthusiasts who have transformed their cooking experience with RecipeAI.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-gray-800 rounded-xl p-6 border border-gray-700 hover:border-blue-500 transition-all duration-300">
              <div className="flex items-center mb-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="text-white font-semibold">{testimonial.name}</h4>
                  <p className="text-gray-400 text-sm">{testimonial.role}</p>
                </div>
              </div>
              
              <div className="mb-4">
                {renderStars(testimonial.rating)}
              </div>
              
              <p className="text-gray-300 leading-relaxed">
                "{testimonial.content}"
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TestimonialsSection;