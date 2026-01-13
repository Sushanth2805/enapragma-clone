import React from 'react';
import { Twitter, Linkedin, Github } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-gray-100 pt-20 pb-10 px-4">
      <div className="max-w-[1200px] mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-16">
           <div className="max-w-xs">
              <div className="flex items-center gap-2 mb-6">
                <div className="grid grid-cols-2 gap-0.5">
                   <div className="w-2 h-2 bg-[#111827] rounded-full"></div>
                   <div className="w-2 h-2 bg-[#111827]/50 rounded-full"></div>
                   <div className="w-2 h-2 bg-[#111827] rounded-full"></div>
                   <div className="w-2 h-2 bg-transparent rounded-full"></div>
                </div>
                <span className="font-bold text-xl tracking-tight text-[#111827]">Ena Pragma</span>
              </div>
              <p className="text-gray-500 text-sm leading-relaxed">
                 Helping growth-stage companies build the operational infrastructure to scale with AI.
              </p>
           </div>
           
           <div className="grid grid-cols-2 md:grid-cols-3 gap-12 md:gap-24">
              <div>
                 <h4 className="font-bold text-[#111827] mb-4">Product</h4>
                 <ul className="space-y-3 text-sm text-gray-500">
                    <li><a href="#" className="hover:text-purple-600 transition-colors">Diagnostic</a></li>
                    <li><a href="#" className="hover:text-purple-600 transition-colors">Workshops</a></li>
                    <li><a href="#" className="hover:text-purple-600 transition-colors">Case Studies</a></li>
                 </ul>
              </div>
              <div>
                 <h4 className="font-bold text-[#111827] mb-4">Company</h4>
                 <ul className="space-y-3 text-sm text-gray-500">
                    <li><a href="#" className="hover:text-purple-600 transition-colors">About</a></li>
                    <li><a href="#" className="hover:text-purple-600 transition-colors">Contact</a></li>
                    <li><a href="#" className="hover:text-purple-600 transition-colors">Privacy</a></li>
                 </ul>
              </div>
           </div>
        </div>
        
        <div className="border-t border-gray-100 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
           <p className="text-sm text-gray-400">© 2024 Ena Pragma. All rights reserved.</p>
           <div className="flex gap-4">
              <a href="#" className="text-gray-400 hover:text-[#111827] transition-colors"><Twitter size={20} /></a>
              <a href="#" className="text-gray-400 hover:text-[#111827] transition-colors"><Linkedin size={20} /></a>
              <a href="#" className="text-gray-400 hover:text-[#111827] transition-colors"><Github size={20} /></a>
           </div>
        </div>
      </div>
    </footer>
  );
};