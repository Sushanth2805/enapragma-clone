import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

const FaqItem: React.FC<{ question: string; answer: string }> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-100 last:border-0">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="flex justify-between items-center w-full py-6 text-left group"
      >
        <span className={`text-lg font-bold transition-colors ${isOpen ? 'text-purple-600' : 'text-gray-900'}`}>
           {question}
        </span>
        <span className={`p-2 rounded-full transition-all duration-300 ${isOpen ? 'bg-purple-100 rotate-180' : 'bg-gray-50 group-hover:bg-gray-100'}`}>
           {isOpen ? <Minus size={16} className="text-purple-600" /> : <Plus size={16} className="text-gray-500" />}
        </span>
      </button>
      <div 
        className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-48 opacity-100 mb-6' : 'max-h-0 opacity-0'}`}
      >
        <p className="text-gray-500 leading-relaxed pr-8">
           {answer}
        </p>
      </div>
    </div>
  );
};

export const FAQ: React.FC = () => {
  const faqs = [
    {
      question: "Is this only for tech companies?",
      answer: "No. We work with agencies, service businesses, and traditional operations. If you have a team and processes, you have an operating system that can be optimized."
    },
    {
      question: "How long does the assessment take?",
      answer: "The initial diagnostic takes about 12-15 minutes. It's designed to be deep enough to provide value but fast enough to complete in one sitting."
    },
    {
      question: "What do I get at the end?",
      answer: "You receive a comprehensive AI Readiness Score (0-100), a breakdown across 7 pillars (Team, Data, Ops, etc.), and a 1-page summary of your biggest bottlenecks."
    },
    {
      question: "Do you implement the changes?",
      answer: "We offer implementation workshops and consulting for qualified companies. The diagnostic is the first step to seeing if we're a good fit."
    }
  ];

  return (
    <section className="py-24 px-4 bg-[#F8F9FA]">
       <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
             <h2 className="text-3xl md:text-5xl font-extrabold text-[#111827] mb-4">Common Questions</h2>
             <p className="text-gray-500">Everything you need to know about the diagnostic.</p>
          </div>
          
          <div className="bg-white rounded-[2rem] p-8 md:p-12 shadow-xl shadow-gray-200/50 border border-gray-100">
             {faqs.map((faq, i) => (
                <FaqItem key={i} {...faq} />
             ))}
          </div>
       </div>
    </section>
  );
};