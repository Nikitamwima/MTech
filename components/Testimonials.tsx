import React from 'react';
import { Quote } from 'lucide-react';
import { Testimonial } from '../types';

const Testimonials: React.FC = () => {
  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: "Sarah Jenkins",
      role: "Founder",
      company: "Bloom Cosmetics",
      text: "MichTech completely transformed our social presence. The organization using Asana and the creative output was beyond my expectations. Highly recommended!",
      avatar: "https://picsum.photos/100/100?random=10"
    },
    {
      id: 2,
      name: "David Chen",
      role: "Marketing Director",
      company: "NextGen Tech",
      text: "The data-driven approach is what sets MichTech apart. We saw a 200% increase in qualified leads from LinkedIn within 3 months.",
      avatar: "https://picsum.photos/100/100?random=11"
    },
    {
      id: 3,
      name: "Elena Rodriguez",
      role: "Owner",
      company: "Urban Eats",
      text: "Professional, creative, and incredibly organized. MichTech handles everything so I can focus on running my restaurant.",
      avatar: "https://picsum.photos/100/100?random=12"
    }
  ];

  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 text-center mb-16">
          Client <span className="text-indigo-600">Love</span>
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t) => (
            <div key={t.id} className="bg-white p-8 rounded-2xl relative border border-slate-200 shadow-sm hover:shadow-lg transition-all">
              <Quote className="absolute top-6 right-6 text-slate-100 w-10 h-10" />
              <p className="text-slate-600 italic mb-6 relative z-10 leading-relaxed">"{t.text}"</p>
              <div className="flex items-center gap-4">
                <img src={t.avatar} alt={t.name} className="w-12 h-12 rounded-full border-2 border-indigo-100" />
                <div>
                  <h4 className="text-slate-900 font-bold">{t.name}</h4>
                  <p className="text-xs text-slate-500 font-medium">{t.role}, {t.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;