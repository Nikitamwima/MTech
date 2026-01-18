import React from 'react';
import { LayoutDashboard, Zap, BrainCircuit, ShieldCheck } from 'lucide-react';

const WhyMe: React.FC = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          <div>
            <div className="inline-block px-4 py-1 rounded-full bg-indigo-50 text-indigo-600 font-bold text-sm mb-4">
              Why MichTech?
            </div>
            <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-6 leading-tight">
              Bring Order to the <br />
              <span className="gradient-text">Creative Chaos</span>
            </h2>
            <p className="text-lg text-slate-600 mb-6 leading-relaxed">
              Most social media managers are chaotic creatives. I am different. I combine <strong>enterprise-grade organization</strong> with <strong>viral creativity</strong>.
            </p>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              Using tools like Asana, Notion, and Airtable, I build transparent workflows where you never have to ask "What's being posted today?" again.
            </p>

            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-pink-50 rounded-xl flex items-center justify-center text-pink-600 flex-shrink-0">
                  <LayoutDashboard className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900">Custom Client Dashboards</h3>
                  <p className="text-slate-600 mt-1">Real-time view of your content calendar, approval status, and analytics. No more email threads.</p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-indigo-50 rounded-xl flex items-center justify-center text-indigo-600 flex-shrink-0">
                  <BrainCircuit className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900">AI-Enhanced Strategy</h3>
                  <p className="text-slate-600 mt-1">Leveraging GenAI for trend analysis and rapid content ideation, keeping you ahead of the curve.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 bg-amber-50 rounded-xl flex items-center justify-center text-amber-600 flex-shrink-0">
                  <Zap className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900">Execution Speed</h3>
                  <p className="text-slate-600 mt-1">Systems allow me to move fast. Trends don't wait, and neither should your brand.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-pink-500 to-indigo-500 rounded-3xl blur-2xl opacity-20"></div>
            <div className="relative bg-slate-900 p-8 rounded-3xl shadow-2xl border border-slate-800 text-white">
              <div className="flex items-center gap-3 mb-8 border-b border-slate-700 pb-4">
                <div className="flex gap-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
                <div className="text-slate-400 text-xs font-mono">MichTech_Dashboard.exe</div>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center justify-between p-3 bg-slate-800 rounded-lg border-l-4 border-green-500">
                   <span className="text-sm font-medium">✅ Content Calendar Approved</span>
                   <span className="text-xs text-slate-400">10:42 AM</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-slate-800 rounded-lg border-l-4 border-blue-500">
                   <span className="text-sm font-medium">🚀 LinkedIn Campaign Launched</span>
                   <span className="text-xs text-slate-400">Yesterday</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-slate-800 rounded-lg border-l-4 border-purple-500">
                   <span className="text-sm font-medium">📈 Analytics Report Generated</span>
                   <span className="text-xs text-slate-400">2 mins ago</span>
                </div>
                
                <div className="mt-8 pt-6 border-t border-slate-700">
                   <div className="flex justify-between items-end">
                      <div>
                        <div className="text-slate-400 text-xs mb-1">Growth (MoM)</div>
                        <div className="text-3xl font-bold text-green-400">+127%</div>
                      </div>
                      <div className="h-10 w-20 bg-green-500/20 rounded-md flex items-end justify-around pb-1 px-1">
                          <div className="w-2 bg-green-500 h-4 rounded-t-sm"></div>
                          <div className="w-2 bg-green-500 h-6 rounded-t-sm"></div>
                          <div className="w-2 bg-green-500 h-8 rounded-t-sm"></div>
                          <div className="w-2 bg-green-500 h-5 rounded-t-sm"></div>
                      </div>
                   </div>
                </div>
              </div>
            </div>
            
            {/* Floating Badge */}
            <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-xl flex items-center gap-3 animate-bounce">
               <ShieldCheck className="text-indigo-600 w-8 h-8" />
               <div>
                 <div className="font-bold text-slate-900">100% Reliable</div>
                 <div className="text-xs text-slate-500">Never miss a post</div>
               </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default WhyMe;