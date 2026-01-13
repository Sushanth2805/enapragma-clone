import React from 'react';
import { Button } from './ui/Button';
import { Sparkles, ArrowUpRight } from 'lucide-react';
import { HeroCards } from './HeroCards';

export const Hero: React.FC = () => {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden min-h-screen flex flex-col">
      {/* Background Gradients */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-purple-100/50 rounded-full blur-[100px] -z-10"></div>
      <div className="absolute top-40 right-0 w-[500px] h-[500px] bg-orange-50/50 rounded-full blur-[80px] -z-10"></div>

      <div className="container mx-auto px-4 text-center z-10">
        
        {/* Social Proof Pills */}
        <div className="flex items-center justify-center gap-3 mb-8 animate-fade-in-up">
           <div className="flex -space-x-3">
              {[1,2,3].map((i) => (
                <div key={i} className="w-8 h-8 rounded-full border-2 border-white overflow-hidden shadow-sm">
                   <img src={`https://picsum.photos/100/100?random=${i}`} alt="Customer" className="w-full h-full object-cover" />
                </div>
              ))}
           </div>
           <span className="text-xs font-medium text-gray-500 bg-white/50 backdrop-blur px-3 py-1.5 rounded-full border border-gray-200/50">
             +100 happy customers
           </span>
        </div>

        {/* Headline */}
        <h1 className="text-5xl md:text-7xl font-bold text-[#111827] tracking-tight leading-[1.1] mb-6 max-w-5xl mx-auto">
          AI 
          <span className="inline-flex items-center justify-center w-12 h-12 mx-2 md:w-16 md:h-16 bg-[#8B5CF6] rounded-full text-white align-middle shadow-glow-purple rotate-12">
            <Sparkles size={32} className="md:w-10 md:h-10" />
          </span>
          Readiness Score
          <br className="hidden md:block" />
          For 
          <span className="inline-flex items-center justify-center w-12 h-12 mx-2 md:w-16 md:h-16 bg-[#F97316] rounded-full text-white align-middle shadow-glow-orange -rotate-12">
            <ArrowUpRight size={32} className="md:w-10 md:h-10" />
          </span>
          Growth Stage Companies
        </h1>

        {/* Subhead */}
        <p className="text-lg text-gray-500 max-w-2xl mx-auto mb-10 leading-relaxed font-medium">
          Understand how ready your business is to use AI across systems, team, and data. Get a clear score, see what breaks first, and know exactly what to fix.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
           <Button size="lg" className="shadow-2xl shadow-gray-900/20">
             Get My AI Readiness Score
           </Button>
           <Button variant="secondary" size="lg" withArrow className="bg-white/80 backdrop-blur">
             Request Callback
           </Button>
        </div>

        {/* Hero Cards Section */}
        <HeroCards />

      </div>
    </section>
  );
};