import React from 'react';
import { Search, Map, PenTool, TrendingUp } from 'lucide-react';

const Process: React.FC = () => {
  const steps = [
    {
      icon: <Search className="w-6 h-6" />,
      title: "1. Audit & Discovery",
      desc: "I dive deep into your current presence, auditing what works and what doesn't. We define your voice and KPIs."
    },
    {
      icon: <Map className="w-6 h-6" />,
      title: "2. Strategic Blueprint",
      desc: "I build a comprehensive strategy document and set up your client dashboard in Notion/Asana."
    },
    {
      icon: <PenTool className="w-6 h-6" />,
      title: "3. Content Production",
      desc: "My team and I craft high-fidelity visuals and copy. You review and approve everything in one click."
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "4. Scale & Optimize",
      desc: "We launch, monitor, and refine. Monthly reports show exactly where your budget is going and the ROI."
    }
  ];

  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-4">
            The <span className="text-indigo-600">MichTech Method</span>
          </h2>
          <p className="text-slate-600 text-lg max-w-2xl mx-auto">
            A proven 4-step framework to take your brand from obscurity to authority.
          </p>
        </div>

        <div className="relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-1 bg-slate-200 -translate-y-1/2 z-0"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative z-10">
            {steps.map((step, index) => (
              <div key={index} className="group">
                <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-xl transition-all h-full flex flex-col items-center text-center relative">
                  <div className="w-14 h-14 bg-indigo-600 text-white rounded-full flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform">
                    {step.icon}
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">{step.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="mt-16 text-center">
          <a href="#contact" onClick={(e) => { e.preventDefault(); document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }); }} className="inline-flex items-center font-bold text-indigo-600 hover:text-indigo-800 transition-colors border-b-2 border-indigo-600 hover:border-indigo-800 pb-1">
            Start the process today &rarr;
          </a>
        </div>
      </div>
    </section>
  );
};

export default Process;