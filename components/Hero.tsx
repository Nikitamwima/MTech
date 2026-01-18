import React from 'react';
import { ArrowDown, Heart, CheckCircle } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="about" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-slate-50">
        <div className="absolute top-20 left-10 w-96 h-96 bg-purple-300/30 rounded-full blur-[100px] animate-pulse-slow"></div>
        <div className="absolute bottom-20 right-10 w-[500px] h-[500px] bg-indigo-300/30 rounded-full blur-[100px] animate-pulse-slow" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-white/40 rounded-full blur-[80px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-slate-200 shadow-sm mb-8 animate-fade-in-up">
          <CheckCircle className="w-4 h-4 text-green-500" />
          <span className="text-slate-700 font-bold tracking-wide text-xs md:text-sm uppercase">Available for New Projects</span>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-extrabold text-slate-900 tracking-tight mb-8 leading-tight">
          Stop Posting. <br />
          Start <span className="gradient-text">Dominating.</span>
        </h1>
        
        <p className="text-xl text-slate-600 max-w-2xl mx-auto mb-10 leading-relaxed font-medium">
          I don't just "manage" your social media. I build <strong>revenue-generating content engines</strong> using advanced tools like Asana and Notion. Get the organization of a agency with the creativity of an artist.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a href="#contact" onClick={(e) => { e.preventDefault(); document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }); }} className="w-full sm:w-auto px-8 py-4 bg-indigo-600 text-white rounded-full font-bold text-lg hover:bg-indigo-700 transition-all shadow-xl hover:shadow-indigo-500/30 hover:scale-105 flex items-center justify-center gap-2">
            Hire Me Now
          </a>
          <a href="#portfolio" onClick={(e) => { e.preventDefault(); document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' }); }} className="w-full sm:w-auto px-8 py-4 bg-white border border-slate-300 text-slate-700 rounded-full font-bold text-lg hover:border-indigo-600 hover:text-indigo-600 transition-all shadow-sm flex items-center justify-center">
            See Results
          </a>
        </div>

        <div className="mt-12 flex items-center justify-center gap-6 text-sm text-slate-400 font-semibold uppercase tracking-wider">
           <span>Strategy</span>
           <span className="w-1 h-1 bg-slate-300 rounded-full"></span>
           <span>Content</span>
           <span className="w-1 h-1 bg-slate-300 rounded-full"></span>
           <span>Analytics</span>
        </div>

        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown className="text-slate-400 w-6 h-6" />
        </div>
      </div>
      
      {/* Floating Elements */}
      <div className="absolute top-1/4 left-[5%] p-4 bg-white/80 backdrop-blur rounded-2xl border border-white shadow-xl animate-float hidden lg:block">
        <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-gradient-to-r from-yellow-400 to-orange-500 shadow-md flex items-center justify-center text-white font-bold text-xs">IG</div>
            <div className="space-y-2">
                <div className="h-2 w-24 bg-slate-200 rounded"></div>
                <div className="h-2 w-16 bg-slate-200 rounded"></div>
            </div>
        </div>
      </div>

      <div className="absolute bottom-1/3 right-[5%] p-4 bg-white/80 backdrop-blur rounded-2xl border border-white shadow-xl animate-float hidden lg:block" style={{ animationDelay: '1.5s' }}>
          <div className="flex items-center gap-2 text-pink-600 font-bold">
              <Heart className="fill-pink-500 text-pink-500" /> 
              <span>Engagement +400%</span>
          </div>
      </div>

    </section>
  );
};

export default Hero;