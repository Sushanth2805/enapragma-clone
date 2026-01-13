import React from 'react';
import { FileText, PieChart, Rocket, ChevronRight } from 'lucide-react';

export const Process: React.FC = () => {
  const steps = [
    {
      icon: FileText,
      color: "text-blue-500",
      bg: "bg-blue-50",
      title: "1. The Diagnostic",
      description: "Answer 40 questions about your ops, data, and team structure. Takes ~12 minutes.",
      badge: "Free"
    },
    {
      icon: PieChart,
      color: "text-purple-600",
      bg: "bg-purple-50",
      title: "2. The Score",
      description: "Get your AI Readiness Score and a breakdown of your 7 operational pillars.",
      badge: "Instant"
    },
    {
      icon: Rocket,
      color: "text-orange-500",
      bg: "bg-orange-50",
      title: "3. The Roadmap",
      description: "We build a step-by-step plan to fix bottlenecks before you scale with AI.",
      badge: "Actionable"
    }
  ];

  return (
    <section className="py-24 px-4 bg-white relative overflow-hidden">
       {/* Background Decoration */}
       <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent"></div>
       <div className="absolute top-1/2 left-0 w-64 h-64 bg-purple-100 rounded-full blur-[80px] -translate-x-1/2 opacity-50"></div>
       
       <div className="max-w-[1200px] mx-auto relative z-10">
          <div className="text-center max-w-2xl mx-auto mb-20">
             <h2 className="text-3xl md:text-5xl font-extrabold text-[#111827] mb-6 tracking-tight">
               From Chaos to <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-orange-500">Clarity</span>
             </h2>
             <p className="text-lg text-gray-500 font-medium">
               Stop guessing where your business is breaking. We use data to pinpoint exactly what needs to be fixed.
             </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
             {/* Connector Line (Desktop) */}
             <div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-0.5 border-t-2 border-dashed border-gray-200 z-0"></div>

             {steps.map((step, i) => (
                <div key={i} className="relative z-10 flex flex-col items-center text-center group">
                   <div className={`w-24 h-24 rounded-3xl ${step.bg} flex items-center justify-center mb-8 shadow-sm group-hover:scale-110 transition-transform duration-300 border border-white shadow-gray-200/50`}>
                      <step.icon size={32} className={step.color} strokeWidth={1.5} />
                      <div className="absolute -bottom-3 bg-white border border-gray-100 shadow-sm px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider text-gray-500">
                         {step.badge}
                      </div>
                   </div>
                   
                   <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
                   <p className="text-gray-500 leading-relaxed max-w-xs mx-auto text-sm md:text-base">
                      {step.description}
                   </p>
                </div>
             ))}
          </div>

          <div className="mt-20 flex justify-center">
              <button className="bg-[#111827] text-white px-8 py-4 rounded-full font-semibold hover:bg-black transition-all hover:shadow-xl hover:-translate-y-1 flex items-center gap-2">
                 Start Your Diagnostic <ChevronRight size={18} />
              </button>
          </div>
       </div>
    </section>
  );
};