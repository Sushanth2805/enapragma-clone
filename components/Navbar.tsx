import React, { useEffect } from 'react';
import { Button } from './ui/Button';

export const Navbar: React.FC = () => {
  useEffect(() => {
    const handleScroll = () => {
      // Scroll handler for future enhancements
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4">
      <nav className={`
        flex items-center justify-between pl-6 pr-2 py-2 rounded-full
        bg-[#0F1115] text-white shadow-2xl transition-all duration-300
        w-full max-w-[650px]
      `}>
        {/* Logo Area */}
        <div className="flex items-center gap-2 mr-8">
          <div className="grid grid-cols-2 gap-0.5">
             <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
             <div className="w-1.5 h-1.5 bg-white/50 rounded-full"></div>
             <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
             <div className="w-1.5 h-1.5 bg-transparent rounded-full"></div>
          </div>
          <span className="font-semibold text-sm tracking-wide">Ena Pragma</span>
        </div>

        {/* Links */}
        <div className="hidden md:flex items-center gap-6 text-sm font-medium text-gray-300">
          <a href="#" className="hover:text-white transition-colors">Results</a>
          <a href="#" className="hover:text-white transition-colors">Process</a>
          <a href="#" className="hover:text-white transition-colors">Insights</a>
          <a href="#" className="hover:text-white transition-colors">Contacts</a>
        </div>

        {/* CTA */}
        <div className="ml-4">
           <Button variant="secondary" size="sm" className="!py-2 !px-5 !text-xs !font-bold">
             Want to talk?
           </Button>
        </div>
      </nav>
    </div>
  );
};