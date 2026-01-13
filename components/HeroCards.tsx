import React from 'react';
import { Download, Play, MoreHorizontal, ChevronRight, Plus } from 'lucide-react';

export const HeroCards: React.FC = () => {
  return (
    <div className="relative w-full max-w-[1200px] mx-auto mt-20 mb-20">
      {/* 
         Main Card Container 
         We use a grid/flex layout that naturally spaces them out.
         The negative margin on the container pulls it up slightly if needed, 
         but we rely on z-index for the overlap effect with the banner below.
      */}
      <div className="relative z-20 flex flex-col xl:flex-row items-center justify-center gap-6 xl:gap-8 xl:-space-x-4 px-4">
        
        {/* Left Card: Purple Polar Chart */}
        <div className="relative w-full max-w-[340px] h-[300px] bg-gradient-to-br from-[#8B5CF6] to-[#7C3AED] rounded-[2rem] shadow-2xl shadow-purple-900/20 p-6 text-white transform xl:-rotate-6 xl:translate-y-8 transition-transform duration-500 hover:z-30 hover:scale-105 hover:rotate-0 border border-white/20 overflow-hidden group shrink-0">
          {/* Decorative Polar Grid Background */}
          <div className="absolute inset-0 flex items-center justify-center opacity-20 pointer-events-none">
             <svg viewBox="0 0 200 200" className="w-[200%] h-[200%] animate-[spin_60s_linear_infinite]">
               <circle cx="100" cy="100" r="90" fill="none" stroke="white" strokeWidth="0.5" />
               <circle cx="100" cy="100" r="60" fill="none" stroke="white" strokeWidth="0.5" />
               <circle cx="100" cy="100" r="30" fill="none" stroke="white" strokeWidth="0.5" />
               <path d="M100 0 L100 200 M0 100 L200 100" stroke="white" strokeWidth="0.5" />
               <path d="M29 29 L171 171 M29 171 L171 29" stroke="white" strokeWidth="0.5" />
             </svg>
          </div>
          
          <div className="relative z-10 flex flex-col h-full justify-between">
            {/* Top Tag */}
            <div className="flex justify-between items-start">
               <div className="bg-white/20 backdrop-blur-md px-4 py-1.5 rounded-full text-[10px] font-bold tracking-wider border border-white/10 shadow-lg">
                 VIDEO WALKTHROUGH
               </div>
               <div className="bg-white/20 backdrop-blur-md p-2 rounded-full cursor-pointer hover:bg-white/30 transition-colors">
                 <Download size={14} />
               </div>
            </div>

            {/* Floating Center Player */}
            <div className="self-center w-full max-w-[220px] bg-white rounded-2xl p-4 shadow-xl transform transition-transform duration-300 group-hover:-translate-y-1">
               <div className="flex items-center gap-3 mb-4">
                  <div className="w-2.5 h-2.5 bg-purple-500 rounded-full"></div>
                  <div className="text-xs text-gray-900 font-bold leading-tight">
                     AI Readiness<br/>Score Breakdown
                  </div>
               </div>
               <div className="h-10 bg-purple-50 rounded-xl flex items-center justify-center cursor-pointer hover:bg-purple-100 transition-colors border border-purple-100">
                  <Play size={18} className="text-purple-600 fill-purple-600 ml-0.5" />
               </div>
            </div>

            {/* Bottom Text */}
            <div className="flex justify-between items-end">
               <div>
                  <div className="text-xl font-bold">7-Pillar of AI</div>
                  <div className="text-[10px] text-white/80 font-medium">Polar Chart Visualization</div>
               </div>
               <div className="flex items-center gap-1 text-[9px] font-bold uppercase tracking-wider opacity-80 cursor-pointer hover:opacity-100">
                  Schedule Workshop <ChevronRight size={10} />
               </div>
            </div>
          </div>
        </div>

        {/* Center Card: Score Dashboard (The Main Focus) */}
        <div className="relative w-full max-w-[480px] bg-white rounded-[2.5rem] shadow-[0_30px_80px_-20px_rgba(0,0,0,0.15)] p-8 z-40 transition-transform duration-500 hover:-translate-y-2 border border-gray-100 shrink-0">
           {/* Header */}
           <div className="flex justify-between items-start mb-8">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-1">AI Readiness</h3>
                <div className="flex items-center gap-2 text-gray-900 font-bold text-lg">
                   <div className="bg-black text-white rounded-full w-6 h-6 flex items-center justify-center text-sm shadow-lg shadow-purple-500/20">
                      <Plus size={14} strokeWidth={4} />
                   </div> 
                   Score
                </div>
              </div>
              <button className="text-gray-400 hover:text-gray-600 transition-colors">
                 <Download size={22} />
              </button>
           </div>

           {/* Progress Section */}
           <div className="mb-10 bg-[#F8F9FA] p-5 rounded-3xl border border-gray-100">
              <div className="flex justify-between items-end mb-4">
                 <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">30-Day Progress</span>
                 <div className="flex gap-4 text-xs font-bold">
                    <span className="text-gray-900">35<span className="text-gray-400">/100</span></span>
                    <span className="text-gray-900">80<span className="text-gray-400">/100</span></span>
                 </div>
              </div>
              
              {/* Custom Progress Bar */}
              <div className="relative h-3 w-full rounded-full bg-gray-200 mb-2">
                 {/* Filled Gradient */}
                 <div className="absolute left-0 top-0 h-full w-[35%] bg-gradient-to-r from-[#8B5CF6] to-[#A78BFA] rounded-full"></div>
                 {/* Ghost Bar */}
                 <div className="absolute left-[35%] top-0 h-full w-[45%] bg-purple-100 rounded-r-full"></div>
                 
                 {/* Knob "Now" */}
                 <div className="absolute left-[35%] top-1/2 -translate-y-1/2 w-5 h-5 bg-white border-[3px] border-[#A78BFA] rounded-full shadow-md z-10 transform -translate-x-1/2"></div>
                 
                 {/* Dot "Target" */}
                 <div className="absolute left-[80%] top-1/2 -translate-y-1/2 w-2 h-2 bg-gray-400 rounded-full z-10 transform -translate-x-1/2"></div>
              </div>

              <div className="flex justify-between text-[10px] text-gray-400 font-bold uppercase tracking-wider px-0.5">
                 <span>Start</span>
                 <span className="pl-6">Now</span>
                 <span>Target</span>
              </div>
           </div>

           {/* Bottom Grid */}
           <div className="grid grid-cols-3 gap-3">
              {/* Gauge 1 */}
              <div className="bg-[#F8F9FA] rounded-2xl p-3 flex flex-col items-center justify-center text-center border border-gray-100">
                 <div className="relative w-16 h-10 overflow-hidden mb-1">
                    {/* Gauge Arc Background */}
                    <div className="absolute top-0 left-0 w-16 h-16 rounded-full border-[6px] border-gray-200 box-border"></div>
                    {/* Gauge Fill (Rotated) */}
                    <div className="absolute top-0 left-0 w-16 h-16 rounded-full border-[6px] border-[#8B5CF6] border-b-transparent border-r-transparent transform -rotate-45 box-border"></div>
                    
                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 text-sm font-bold text-gray-900">70<span className="text-[9px] text-gray-400">/100</span></div>
                 </div>
                 <span className="text-[9px] font-bold text-gray-500 leading-tight">Operational<br/>Infrastructure</span>
              </div>

              {/* Gauge 2 */}
              <div className="bg-[#F8F9FA] rounded-2xl p-3 flex flex-col items-center justify-center text-center border border-gray-100">
                 <div className="relative w-16 h-10 overflow-hidden mb-1">
                    <div className="absolute top-0 left-0 w-16 h-16 rounded-full border-[6px] border-gray-200 box-border"></div>
                    {/* More filled */}
                    <div className="absolute top-0 left-0 w-16 h-16 rounded-full border-[6px] border-[#8B5CF6] border-b-transparent border-l-transparent transform rotate-45 box-border"></div>
                    
                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 text-sm font-bold text-gray-900">90<span className="text-[9px] text-gray-400">/100</span></div>
                 </div>
                 <span className="text-[9px] font-bold text-gray-500 leading-tight">Team Structure<br/>& Skills</span>
              </div>

              {/* Summary Button */}
              <div className="bg-white rounded-2xl p-3 flex flex-col justify-between border border-gray-100 shadow-sm relative group cursor-pointer hover:shadow-md transition-shadow">
                 <div className="flex justify-between items-start mb-2">
                    <span className="text-[9px] font-bold text-gray-400 uppercase tracking-wide">Summary</span>
                    <MoreHorizontal size={12} className="text-gray-300"/>
                 </div>
                 <div className="leading-tight mb-2">
                    <span className="text-[10px] font-black text-gray-900 block">READ</span>
                    <span className="text-[10px] font-black text-gray-900 block">DOCUMENT</span>
                 </div>
                 <div className="self-end w-5 h-5 rounded-full bg-gray-50 flex items-center justify-center group-hover:bg-purple-100 group-hover:text-purple-600 transition-colors">
                    <ChevronRight size={12} />
                 </div>
              </div>
           </div>
        </div>

        {/* Right Card: Orange Workshop */}
        <div className="relative w-full max-w-[340px] h-[300px] bg-gradient-to-br from-[#FF6B4A] to-[#FF4820] rounded-[2rem] shadow-2xl shadow-orange-900/20 p-6 text-white transform xl:rotate-6 xl:translate-y-8 transition-transform duration-500 hover:z-30 hover:scale-105 hover:rotate-0 border border-white/20 overflow-hidden group shrink-0">
           {/* Orange Glow/Pattern */}
           <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full blur-3xl pointer-events-none -translate-y-10 translate-x-10"></div>
           
           <div className="relative z-10 flex flex-col h-full">
              {/* Header */}
              <div className="flex justify-between items-start mb-6">
                 <div>
                    <h3 className="text-xl font-bold leading-none mb-1">AI Strategy</h3>
                    <h3 className="text-xl font-bold leading-none opacity-90">Workshop</h3>
                 </div>
                 <div className="bg-white/20 backdrop-blur-md px-2.5 py-1 rounded-lg text-[9px] font-bold uppercase tracking-wider flex items-center gap-1.5 border border-white/10">
                    <div className="w-1.5 h-1.5 bg-white rounded-full animate-pulse"></div>
                    Select Date
                 </div>
              </div>

              {/* Content Row */}
              <div className="flex gap-4 flex-1">
                 {/* Left Profile Col */}
                 <div className="w-[35%] flex flex-col justify-end pb-2">
                    <div className="relative w-12 h-12 rounded-xl overflow-hidden border-2 border-white/30 mb-3 shadow-lg">
                       <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?fit=crop&w=100&h=100" alt="Avatar" className="w-full h-full object-cover" />
                    </div>
                    <div className="text-[10px] font-bold leading-tight mb-2">Set appointment with Branden</div>
                    <div className="text-[8px] font-bold opacity-80 bg-black/20 inline-block px-1.5 py-0.5 rounded w-fit">SENIOR CONSULTANT</div>
                 </div>

                 {/* Calendar Col */}
                 <div className="flex-1 bg-white/10 rounded-2xl p-3 backdrop-blur-sm border border-white/10 flex flex-col justify-between">
                    <div className="flex justify-between text-[9px] font-semibold mb-2 text-white/70 uppercase">
                       <span>S</span><span>M</span><span>T</span><span>W</span>
                    </div>
                    <div className="grid grid-cols-4 gap-1 text-center text-[10px] font-bold">
                       <div className="aspect-square flex items-center justify-center opacity-30">·</div>
                       <div className="aspect-square flex items-center justify-center opacity-30">·</div>
                       <div className="aspect-square flex items-center justify-center opacity-30">·</div>
                       <div className="aspect-square flex items-center justify-center bg-white text-orange-600 rounded-lg shadow-sm transform scale-110">1</div>
                       
                       <div className="aspect-square flex items-center justify-center opacity-30">·</div>
                       <div className="aspect-square flex items-center justify-center bg-white text-orange-600 rounded-lg shadow-sm">6</div>
                       <div className="aspect-square flex items-center justify-center bg-white/20 rounded-lg">7</div>
                       <div className="aspect-square flex items-center justify-center opacity-30">·</div>

                       <div className="aspect-square flex items-center justify-center opacity-30">·</div>
                       <div className="aspect-square flex items-center justify-center bg-white text-orange-600 rounded-lg shadow-sm relative z-10">
                          13
                          <div className="absolute -top-0.5 -right-0.5 w-1.5 h-1.5 bg-green-400 rounded-full border border-white"></div>
                       </div>
                    </div>
                    
                    <div className="mt-2 w-full bg-white/20 hover:bg-white/30 text-[9px] font-bold text-center py-1.5 rounded-lg transition-colors cursor-pointer">
                        View All
                    </div>
                 </div>
              </div>
           </div>
        </div>
      </div>

      {/* 
         Dark Background Section (Diagnostic) 
         Positioned relative within the flow but pulled up visually behind the cards.
         We add significantly more padding top to ensure the text is never covered by the cards.
      */}
      <div className="relative -mt-32 md:-mt-24 mx-4 md:mx-auto max-w-[1000px] z-10">
         <div className="bg-[#111827] rounded-[2.5rem] shadow-2xl overflow-hidden border border-gray-800">
            {/* Glow Effects */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-32 bg-white/5 blur-3xl rounded-full pointer-events-none"></div>
            <div className="absolute bottom-0 right-0 w-64 h-64 bg-purple-500/5 blur-3xl rounded-full pointer-events-none"></div>

            {/* Content Container - Large padding top to clear the floating cards */}
            <div className="pt-40 pb-16 px-8 md:px-20 text-center relative z-20">
               <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 tracking-tight">
                  Not a Tool. A Diagnostic
               </h2>
               <p className="text-gray-400 text-sm md:text-base leading-relaxed font-medium max-w-2xl mx-auto">
                  If you're a founder, COO, or internal operator scaling a business that already works — but behind the scenes, it's duct-taped together — this diagnostic was built for you.
               </p>
            </div>
         </div>
      </div>
    </div>
  );
};