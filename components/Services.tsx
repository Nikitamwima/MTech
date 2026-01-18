import React from 'react';
import { Target, PenTool, Users, BarChart3 } from 'lucide-react';

const Services: React.FC = () => {
  const services = [
    {
      icon: <Target className="w-8 h-8" />,
      title: "Strategic Planning",
      description: "Data-driven roadmaps tailored to your specific business goals, ensuring every post has a purpose."
    },
    {
      icon: <PenTool className="w-8 h-8" />,
      title: "Content Creation",
      description: "High-quality visuals and compelling copy that captures your brand voice and stops the scroll."
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Community Management",
      description: "Nurturing your audience, responding to comments, and building genuine relationships that convert."
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: "Analytics & Reporting",
      description: "Detailed monthly reports breaking down performance metrics, so you know exactly what's working."
    }
  ];

  return (
    <section id="services" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-4">
            How I <span className="text-pink-600">Elevate</span> You
          </h2>
          <p className="text-slate-600 text-lg max-w-2xl mx-auto">
            Comprehensive social media solutions designed to take the weight off your shoulders.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div key={index} className="flex gap-6 p-8 rounded-2xl bg-white border border-slate-200 hover:border-pink-300 hover:shadow-2xl hover:shadow-pink-500/10 transition-all group">
              <div className="flex-shrink-0 w-16 h-16 bg-pink-50 rounded-xl flex items-center justify-center text-pink-600 group-hover:bg-pink-600 group-hover:text-white transition-all shadow-sm">
                {service.icon}
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">{service.title}</h3>
                <p className="text-slate-600 leading-relaxed group-hover:text-slate-800 transition-colors">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;