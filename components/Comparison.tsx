import React from 'react';
import { X, Check, Activity, Boxes } from 'lucide-react';

export const Comparison: React.FC = () => {
  return (
    <section className="py-24 px-4 bg-[#111827] text-white relative overflow-hidden">
       {/* Ambient Glow */}
       <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-900/20 rounded-full blur-[100px] pointer-events-none"></div>
       <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-orange-900/20 rounded-full blur-[100px] pointer-events-none"></div>

       <div className="max-w-[1200px] mx-auto relative z-10">
          <div className="mb-16 md:text-center">
             <div className="inline-block px-4 py-1.5 rounded-full border border-gray-700 bg-gray-800/50 text-xs font-bold uppercase tracking-wider text-gray-400 mb-4">
                The Shift
             </div>
             <h2 className="text-3xl md:text-5xl font-bold mb-6">Stop Scaling Chaos</h2>
             <p className="text-gray-400 max-w-2xl mx-auto text-lg">
                Most companies add AI to broken processes. We fix the foundation first.
             </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16">
             {/* The Old Way */}
             <div className="bg-gray-900/50 rounded-3xl p-8 border border-gray-800 backdrop-blur-sm relative overflow-hidden group">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-red-500/50 to-transparent"></div>
                <div className="flex items-center gap-3 mb-8">
                   <div className="w-10 h-10 rounded-full bg-red-500/10 flex items-center justify-center text-red-500">
                      <Activity size={20} />
                   </div>
                   <h3 className="text-xl font-bold text-gray-200">The "Duct Tape" Approach</h3>
                </div>
                
                <ul className="space-y-4">
                   {[
                      "Hiring more people to fix broken processes",
                      "Data scattered across 15+ different tools",
                      "Founders still stuck in day-to-day operations",
                      "AI is just a shiny toy, not a strategy"
                   ].map((item, i) => (
                      <li key={i} className="flex items-start gap-3 text-gray-400">
                         <X size={18} className="text-red-500/50 mt-1 shrink-0" />
                         <span>{item}</span>
                      </li>
                   ))}
                </ul>
             </div>

             {/* The New Way */}
             <div className="bg-gradient-to-br from-purple-900/20 to-gray-900/50 rounded-3xl p-8 border border-purple-500/30 backdrop-blur-sm relative overflow-hidden shadow-2xl shadow-purple-900/20">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 to-orange-500"></div>
                <div className="flex items-center gap-3 mb-8">
                   <div className="w-10 h-10 rounded-full bg-green-500/10 flex items-center justify-center text-green-400">
                      <Boxes size={20} />
                   </div>
                   <h3 className="text-xl font-bold text-white">The AI-Ready Infrastructure</h3>
                </div>
                
                <ul className="space-y-4">
                   {[
                      "Automated workflows that scale without headcount",
                      "Unified data layer ready for AI agents",
                      "Leadership focused on strategy, not fires",
                      "AI integrated into core business logic"
                   ].map((item, i) => (
                      <li key={i} className="flex items-start gap-3 text-white font-medium">
                         <div className="bg-green-500/20 rounded-full p-0.5 mt-0.5">
                            <Check size={14} className="text-green-400 shrink-0" />
                         </div>
                         <span>{item}</span>
                      </li>
                   ))}
                </ul>
             </div>
          </div>
       </div>
    </section>
  );
};