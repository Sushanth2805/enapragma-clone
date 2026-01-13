import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Audience } from './components/Audience';
import { Process } from './components/Process';
import { Comparison } from './components/Comparison';
import { FAQ } from './components/FAQ';
import { Footer } from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen text-slate-900 selection:bg-purple-200">
      <Navbar />
      <main>
        <Hero />
        <Audience />
        <Comparison />
        <Process />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
};

export default App;