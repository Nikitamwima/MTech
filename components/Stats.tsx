import React from 'react';

const Stats: React.FC = () => {
  const stats = [
    { label: "Reach Generated", value: "2M+" },
    { label: "Campaigns Managed", value: "50+" },
    { label: "Avg. Engagement Lift", value: "150%" },
    { label: "Client Satisfaction", value: "100%" },
  ];

  return (
    <section className="py-10 bg-indigo-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-indigo-800/50 text-center">
          {stats.map((stat, index) => (
            <div key={index} className="p-4">
              <p className="text-3xl md:text-5xl font-extrabold text-white mb-2 tracking-tight">{stat.value}</p>
              <p className="text-indigo-200 text-sm md:text-base font-medium uppercase tracking-wider">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;