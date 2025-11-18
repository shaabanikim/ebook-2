import React from 'react';
import { FEATURES } from '../constants';

const Features: React.FC = () => {
  return (
    <section id="features" className="py-16 sm:py-24 bg-slate-100">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-2">What You'll Learn</h2>
        <p className="text-slate-600 mb-12 max-w-2xl mx-auto">This guide uses a clear, visual approach to teach the fundamentals of effective space planning, from single rooms to entire homes.</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {FEATURES.map((feature, index) => (
            <div key={index} className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
              <div className="flex justify-center mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800">{feature.title}</h3>
              <p className="text-slate-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;