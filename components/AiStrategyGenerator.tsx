import React, { useState } from 'react';
import { Sparkles, Loader2, ArrowRight } from 'lucide-react';
import { generateSocialStrategy } from '../services/geminiService';

const AiStrategyGenerator: React.FC = () => {
  const [niche, setNiche] = useState('');
  const [goal, setGoal] = useState('');
  const [platform, setPlatform] = useState('Instagram');
  const [result, setResult] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleGenerate = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!niche || !goal) return;

    setLoading(true);
    setResult(null);

    // Call Gemini Service
    const strategy = await generateSocialStrategy(niche, goal, platform);
    
    setResult(strategy);
    setLoading(false);
  };

  return (
    <section id="ai-demo" className="py-24 bg-indigo-50 relative overflow-hidden">
       {/* Background Elements */}
      <div className="absolute -top-20 -right-20 w-96 h-96 bg-purple-200/50 rounded-full blur-[80px] pointer-events-none"></div>
      <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-indigo-200/50 rounded-full blur-[80px] pointer-events-none"></div>

      <div className="max-w-4xl mx-auto px-4 relative z-10">
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-indigo-200 text-indigo-600 mb-4 shadow-sm">
            <Sparkles className="w-4 h-4" />
            <span className="text-sm font-semibold">Powered by Google Gemini</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            See MichTech's <br className="md:hidden" /> <span className="gradient-text">AI Strategy Engine</span>
          </h2>
          <p className="text-slate-600 text-lg">
            I combine human creativity with AI efficiency. Try my strategy generator below to see how I brainstorm content ideas instantly.
          </p>
        </div>

        <div className="bg-white/80 backdrop-blur-xl border border-white shadow-2xl rounded-3xl p-6 md:p-8">
          <form onSubmit={handleGenerate} className="grid md:grid-cols-3 gap-4 mb-8">
            <div className="space-y-2">
              <label className="text-sm font-medium text-slate-600">Your Industry / Niche</label>
              <input 
                type="text" 
                placeholder="e.g. Artisanal Coffee, Tech Startup"
                value={niche}
                onChange={(e) => setNiche(e.target.value)}
                className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 text-slate-900 focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition-all placeholder:text-slate-400"
                required
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-slate-600">Main Goal</label>
              <input 
                type="text" 
                placeholder="e.g. Brand Awareness, Sales"
                value={goal}
                onChange={(e) => setGoal(e.target.value)}
                className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 text-slate-900 focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition-all placeholder:text-slate-400"
                required
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-slate-600">Platform</label>
              <select 
                value={platform}
                onChange={(e) => setPlatform(e.target.value)}
                className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 text-slate-900 focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition-all appearance-none"
              >
                <option>Instagram</option>
                <option>LinkedIn</option>
                <option>TikTok</option>
                <option>Twitter / X</option>
              </select>
            </div>
            <div className="md:col-span-3 mt-2">
              <button 
                type="submit" 
                disabled={loading}
                className="w-full bg-gradient-to-r from-indigo-600 to-pink-600 hover:from-indigo-700 hover:to-pink-700 text-white font-bold py-4 rounded-xl shadow-lg hover:shadow-xl transform transition-all active:scale-[0.98] disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {loading ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" /> Generating Strategy...
                  </>
                ) : (
                  <>
                    Generate Sample Strategy <ArrowRight className="w-5 h-5" />
                  </>
                )}
              </button>
            </div>
          </form>

          {result && (
            <div className="animate-fade-in-up">
              <div className="flex items-center gap-2 mb-4 text-indigo-700">
                <Sparkles className="w-5 h-5" />
                <h3 className="font-semibold">AI Generated Concepts</h3>
              </div>
              <div 
                className="prose prose-slate max-w-none grid gap-4"
                dangerouslySetInnerHTML={{ __html: result }}
              />
              <p className="text-xs text-center text-slate-400 mt-6">
                *This is a demo generated by Google Gemini. Working with me means getting detailed, human-refined strategies.*
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default AiStrategyGenerator;