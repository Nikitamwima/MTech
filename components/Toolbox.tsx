import React from 'react';
import { BrandIcon } from './BrandIcon';
import { Tool } from '../types';

const Toolbox: React.FC = () => {
  const tools: Tool[] = [
    { name: 'Asana', category: 'Management', iconType: 'custom', iconName: 'asana' },
    { name: 'Notion', category: 'Organization', iconType: 'custom', iconName: 'notion' },
    { name: 'Airtable', category: 'Database', iconType: 'custom', iconName: 'airtable' },
    { name: 'Slack', category: 'Communication', iconType: 'custom', iconName: 'slack' },
    { name: 'Trello', category: 'Management', iconType: 'custom', iconName: 'trello' },
    { name: 'Meta Suite', category: 'Analytics', iconType: 'custom', iconName: 'meta' },
    { name: 'Buffer', category: 'Scheduling', iconType: 'custom', iconName: 'buffer' },
    { name: 'Google Analytics', category: 'Data', iconType: 'custom', iconName: 'google analytics' },
    { name: 'Loom', category: 'Video', iconType: 'custom', iconName: 'loom' },
    { name: 'Instagram', category: 'Social', iconType: 'custom', iconName: 'instagram' },
    { name: 'LinkedIn', category: 'Network', iconType: 'custom', iconName: 'linkedin' },
  ];

  return (
    <section id="skills" className="py-24 bg-white relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
         <div className="absolute -top-[20%] -right-[10%] w-[500px] h-[500px] bg-purple-100 rounded-full blur-[80px]"></div>
         <div className="absolute top-[40%] -left-[10%] w-[400px] h-[400px] bg-indigo-100 rounded-full blur-[80px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-4">
            My <span className="gradient-text">Tech Stack</span>
          </h2>
          <p className="text-slate-600 text-lg max-w-2xl mx-auto">
            I don't just post; I organize, analyze, and optimize. My proficiency in these industry-leading tools ensures your brand's growth is managed with precision.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {tools.map((tool) => (
            <div 
              key={tool.name}
              className="group bg-white border border-slate-200 p-6 rounded-xl flex flex-col items-center justify-center gap-4 hover:border-indigo-400 hover:ring-2 hover:ring-indigo-100 transition-all hover:-translate-y-2 hover:shadow-xl cursor-default"
            >
              <div className="w-12 h-12 flex items-center justify-center text-slate-400 group-hover:text-indigo-600 transition-colors">
                <BrandIcon name={tool.iconName} className="w-10 h-10" />
              </div>
              <div className="text-center">
                <h3 className="font-semibold text-slate-800 group-hover:text-indigo-600 transition-colors">{tool.name}</h3>
                <span className="text-xs text-slate-500 uppercase tracking-wider">{tool.category}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Toolbox;