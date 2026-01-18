import React from 'react';
import { ExternalLink, TrendingUp, Users, Heart } from 'lucide-react';
import { PortfolioItem } from '../types';

const Portfolio: React.FC = () => {
  const items: PortfolioItem[] = [
    {
      id: 1,
      title: "Launch Campaign",
      client: "Brew & Bean",
      description: "A comprehensive launch strategy for a local artisanal coffee chain. We focused on local SEO and visually striking Instagram Reels.",
      image: "https://picsum.photos/800/600?random=1",
      stats: [
        { label: "Reach", value: "+150%" },
        { label: "Followers", value: "2.5k" },
      ],
      tags: ["Instagram", "Strategy", "Photography"]
    },
    {
      id: 2,
      title: "B2B Lead Gen",
      client: "TechFlow SaaS",
      description: "LinkedIn thought leadership campaign for the CEO, establishing authority in the automation space.",
      image: "https://picsum.photos/800/600?random=2",
      stats: [
        { label: "Leads", value: "45" },
        { label: "Impressions", value: "50k+" },
      ],
      tags: ["LinkedIn", "Copywriting", "Growth"]
    },
    {
      id: 3,
      title: "Community Growth",
      client: "EcoWear",
      description: "User-generated content campaign encouraging customers to share their sustainable fashion choices.",
      image: "https://picsum.photos/800/600?random=3",
      stats: [
        { label: "Engagement", value: "8.5%" },
        { label: "UGC Posts", value: "500+" },
      ],
      tags: ["TikTok", "Community", "Influencer"]
    }
  ];

  return (
    <section id="portfolio" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16">
          <div>
            <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-4">
              Featured <span className="gradient-text">Projects</span>
            </h2>
            <p className="text-slate-600 text-lg max-w-xl">
              Real results for real brands. Here is a snapshot of my recent work.
            </p>
          </div>
          <button className="hidden md:flex items-center gap-2 text-indigo-600 hover:text-indigo-800 transition-colors font-semibold">
            View All Projects <ExternalLink className="w-4 h-4" />
          </button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {items.map((item) => (
            <div key={item.id} className="group bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-md hover:border-indigo-200 transition-all hover:shadow-2xl hover:shadow-indigo-500/10 hover:-translate-y-2">
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent"></div>
                <div className="absolute bottom-4 left-4">
                  <span className="text-xs font-bold px-2 py-1 bg-white text-indigo-700 rounded shadow-sm">{item.client}</span>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-slate-900 mb-2">{item.title}</h3>
                <p className="text-slate-600 text-sm mb-6 line-clamp-3">
                  {item.description}
                </p>

                <div className="grid grid-cols-2 gap-4 mb-6">
                  {item.stats.map((stat, idx) => (
                    <div key={idx} className="bg-slate-50 p-3 rounded-lg border border-slate-100">
                      <p className="text-2xl font-bold text-indigo-600">{stat.value}</p>
                      <p className="text-xs text-slate-500 uppercase tracking-wider">{stat.label}</p>
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap gap-2">
                  {item.tags.map(tag => (
                    <span key={tag} className="text-xs text-indigo-600 bg-indigo-50 px-2 py-1 rounded border border-indigo-100 font-medium">
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-8 text-center md:hidden">
           <button className="inline-flex items-center gap-2 text-indigo-600 hover:text-indigo-800 transition-colors font-semibold">
            View All Projects <ExternalLink className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;