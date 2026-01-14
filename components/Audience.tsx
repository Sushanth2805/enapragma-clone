import React from 'react';
import { Mail, Briefcase, Phone, MessageSquare, Zap } from 'lucide-react';

export const Audience: React.FC = () => {
  return (
    <section className="py-24 px-4 max-w-[1200px] mx-auto mt-24">
       {/* Header Section */}
       <div className="flex flex-col lg:flex-row justify-between items-end gap-8 mb-20">
          <div className="max-w-2xl">
             <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-gray-200 text-[11px] font-bold uppercase tracking-wider text-purple-600 mb-6 shadow-sm">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-purple-500"></span>
                </span>
                Who is it for?
             </div>
             <h2 className="text-4xl md:text-6xl font-extrabold text-[#111827] tracking-tight leading-[1.1]">
                AI Benchmarking Built<br/>for Proven Operators
             </h2>
          </div>
          <p className="max-w-md text-gray-500 text-lg font-medium leading-relaxed pb-2">
             If you're a founder, COO, or internal operator scaling a business that already works — but behind the scenes, it's duct-taped together — this diagnostic was built for you.
          </p>
       </div>

       {/* Cards Grid - Increased spacing and height */}
       <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Card 1: Revenue Chart */}
          <div className="group bg-white rounded-[2rem] p-8 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-gray-100 flex flex-col min-h-[500px]">
             <div className="flex-1 bg-[#F8F9FA] rounded-3xl mb-8 relative overflow-hidden p-6 flex flex-col justify-between">
                <div className="flex justify-between items-start z-10 relative">
                   <div className="bg-orange-50 text-orange-600 text-[10px] font-bold px-3 py-1.5 rounded-lg border border-orange-100">REVENUE</div>
                   <div className="text-orange-500 text-sm font-bold">$20M</div>
                </div>
                
                {/* Chart Area */}
                <div className="relative flex-1 flex items-end justify-center gap-3 pt-12 pb-2">
                   {/* Background Grid Lines */}
                   <div className="absolute inset-0 flex flex-col justify-between pointer-events-none opacity-50 pb-8">
                      <div className="w-full border-t border-dashed border-gray-200"></div>
                      <div className="w-full border-t border-dashed border-gray-200"></div>
                      <div className="w-full border-t border-dashed border-gray-200"></div>
                   </div>
                   
                   <div className="absolute top-1/2 left-0 text-orange-300 text-[10px] font-bold pl-2">$1M</div>

                   {/* Bars */}
                   <div className="w-8 bg-purple-100 h-[30%] rounded-t-lg group-hover:h-[35%] transition-all duration-500"></div>
                   <div className="w-8 bg-purple-200 h-[50%] rounded-t-lg group-hover:h-[55%] transition-all duration-500 delay-75"></div>
                   <div className="w-8 bg-purple-200 h-[40%] rounded-t-lg group-hover:h-[45%] transition-all duration-500 delay-100"></div>
                   <div className="w-8 bg-purple-300 h-[60%] rounded-t-lg group-hover:h-[65%] transition-all duration-500 delay-150"></div>
                   
                   {/* Pattern Bar */}
                   <div className="w-8 h-[80%] rounded-t-lg relative overflow-hidden group-hover:h-[85%] transition-all duration-500 delay-200">
                      <div className="absolute inset-0 bg-purple-100" style={{backgroundImage: 'repeating-linear-gradient(45deg, #E9D5FF, #E9D5FF 2px, transparent 2px, transparent 6px)'}}></div>
                   </div>
                   
                   {/* Main Bar */}
                   <div className="w-10 bg-gradient-to-t from-orange-500 to-orange-300 h-[95%] rounded-t-lg shadow-lg shadow-orange-200 relative z-10 group-hover:scale-105 transition-transform duration-300"></div>
                </div>
             </div>
             <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">$1M–$20M+ revenue</h3>
                <p className="text-sm text-gray-500 font-medium leading-relaxed">Established companies with room for operational growth and optimization.</p>
             </div>
          </div>

          {/* Card 2: Org Chart */}
          <div className="group bg-white rounded-[2rem] p-8 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-gray-100 flex flex-col min-h-[500px]">
             <div className="flex-1 bg-[#F8F9FA] rounded-3xl mb-8 relative overflow-hidden flex items-center justify-center p-4">
                {/* Org Tree Structure */}
                <div className="relative flex flex-col items-center w-full max-w-[240px]">
                   {/* Level 1 */}
                   <div className="relative z-10 mb-8">
                      <div className="w-16 h-16 rounded-2xl bg-white p-1 shadow-md border border-gray-100 transform group-hover:scale-110 transition-transform">
                         <img src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?fit=crop&w=100&h=100" className="w-full h-full rounded-xl object-cover" />
                      </div>
                   </div>
                   
                   {/* Lines */}
                   <div className="absolute top-[55px] w-px h-10 bg-gray-300"></div>
                   <div className="absolute top-[95px] w-[80%] h-px bg-gray-300"></div>
                   <div className="absolute top-[95px] left-[10%] w-px h-5 bg-gray-300"></div>
                   <div className="absolute top-[95px] right-[10%] w-px h-5 bg-gray-300"></div>
                   <div className="absolute top-[95px] left-1/2 w-px h-5 bg-gray-300"></div>

                   {/* Level 2 */}
                   <div className="flex justify-between w-full mt-2">
                      <div className="flex flex-col items-center gap-2 group/item">
                         <div className="px-2 py-0.5 bg-purple-600 text-white text-[9px] font-bold rounded-full shadow-sm">COO</div>
                         <div className="w-11 h-11 rounded-full bg-white p-0.5 shadow-sm border border-gray-100 group-hover/item:-translate-y-1 transition-transform">
                            <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?fit=crop&w=100&h=100" className="w-full h-full rounded-full object-cover" />
                         </div>
                      </div>
                      
                      <div className="flex flex-col items-center gap-2 mt-6">
                          <div className="w-11 h-11 rounded-full bg-white p-0.5 shadow-sm border border-gray-100 opacity-40">
                            <div className="w-full h-full rounded-full bg-gray-100"></div>
                         </div>
                      </div>

                      <div className="flex flex-col items-center gap-2 group/item">
                         <div className="px-2 py-0.5 bg-orange-500 text-white text-[9px] font-bold rounded-full shadow-sm">HR</div>
                         <div className="w-11 h-11 rounded-full bg-white p-0.5 shadow-sm border border-gray-100 group-hover/item:-translate-y-1 transition-transform">
                            <img src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?fit=crop&w=100&h=100" className="w-full h-full rounded-full object-cover" />
                         </div>
                      </div>
                   </div>
                </div>
             </div>
             <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">5-50 person teams</h3>
                <p className="text-sm text-gray-500 font-medium leading-relaxed">Mid-sized operations where communication overhead starts to slow things down.</p>
             </div>
          </div>

          {/* Card 3: Messy Operations */}
          <div className="group bg-white rounded-[2rem] p-8 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-gray-100 flex flex-col min-h-[500px]">
             <div className="flex-1 bg-[#F8F9FA] rounded-3xl mb-8 relative overflow-hidden flex items-center justify-center">
                <div className="relative w-full h-full flex items-center justify-center">
                   
                   {/* Background Chaos Lines */}
                   <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-30">
                      <path d="M 50 50 Q 150 20 250 80" fill="none" stroke="#A855F7" strokeWidth="1.5" strokeDasharray="4,4" className="animate-[pulse_3s_infinite]" />
                      <path d="M 280 280 Q 150 320 60 250" fill="none" stroke="#F97316" strokeWidth="1.5" strokeDasharray="4,4" className="animate-[pulse_4s_infinite]" />
                   </svg>
                   
                   {/* Central Confused Avatar */}
                   <div className="relative z-10 w-28 h-28 rounded-full bg-white p-1.5 shadow-xl border border-gray-100">
                      <img src="https://images.unsplash.com/photo-1604882737321-e693792f0340?fit=crop&w=200&h=200" className="w-full h-full rounded-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" />
                      <div className="absolute -top-3 -right-3 bg-red-500 text-white w-9 h-9 rounded-full flex items-center justify-center font-bold text-xl shadow-lg animate-bounce border-2 border-white">?</div>
                   </div>

                   {/* Floating Icons */}
                   <div className="absolute top-12 right-12 bg-white p-2.5 rounded-2xl shadow-lg animate-[float_4s_ease-in-out_infinite] border border-gray-100 text-purple-500">
                      <Phone size={18} />
                   </div>
                   <div className="absolute bottom-16 right-16 bg-white p-3 rounded-2xl shadow-lg animate-[float_5s_ease-in-out_infinite_1s] border border-gray-100 text-orange-500">
                      <Mail size={18} />
                   </div>
                   <div className="absolute top-20 left-12 bg-white p-2.5 rounded-2xl shadow-lg animate-[float_6s_ease-in-out_infinite_0.5s] border border-gray-100 text-blue-500">
                      <MessageSquare size={18} />
                   </div>
                   <div className="absolute bottom-20 left-14 bg-white p-2.5 rounded-2xl shadow-lg animate-[float_4.5s_ease-in-out_infinite_1.5s] border border-gray-100 text-yellow-500">
                      <Zap size={18} />
                   </div>
                </div>
             </div>
             <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Operationally messy</h3>
                <p className="text-sm text-gray-500 font-medium leading-relaxed">Profitable but chaotic. "It's all hanging by a thread" feeling.</p>
             </div>
          </div>
       </div>

       {/* Footer Illustration Area */}
       <div className="mt-12 w-full h-[400px] bg-[#F3F4F6] rounded-[3rem] relative overflow-hidden flex items-end justify-center group border border-gray-200">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_white_0%,_transparent_70%)] opacity-80"></div>
          
          <div className="relative z-10 flex flex-col items-center w-full max-w-lg">
             {/* Floating Icons Cloud */}
             <div className="flex gap-16 mb-4 relative w-full justify-center">
                 <div className="absolute left-0 -top-12 w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-purple-600 shadow-xl transform -rotate-12 animate-[float_3s_infinite] border border-gray-100"><Mail size={26} /></div>
                 <div className="absolute right-4 -top-20 w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-indigo-600 shadow-xl transform rotate-6 animate-[float_4s_infinite_0.5s] border border-gray-100"><Briefcase size={30} /></div>
                 <div className="absolute left-1/2 -translate-x-1/2 -top-28 w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-orange-500 shadow-xl animate-[float_5s_infinite_1s] border border-gray-100"><Zap size={22} /></div>
             </div>

             {/* Main Image Masked */}
             <div className="relative w-full flex justify-center">
                <img 
                    src="https://images.unsplash.com/photo-1544717305-2782549b5136?fit=crop&w=800&h=600" 
                    alt="Overwhelmed worker" 
                    className="w-[380px] h-[300px] object-cover rounded-t-[3rem] shadow-2xl relative z-10 grayscale group-hover:grayscale-0 transition-all duration-1000" 
                    style={{maskImage: 'linear-gradient(to bottom, black 60%, transparent 100%)'}} 
                />
                
                {/* CTA Overlay */}
                <div className="absolute bottom-20 z-20">
                    <button className="bg-[#8B5CF6] hover:bg-[#7C3AED] text-white font-bold py-4 px-10 rounded-full shadow-xl shadow-purple-500/30 transition-all transform hover:scale-105 active:scale-95 flex items-center gap-2 text-base">
                       Explore Business Tools <Zap size={18} fill="white" />
                    </button>
                </div>
             </div>
          </div>
       </div>
    </section>
  );
};