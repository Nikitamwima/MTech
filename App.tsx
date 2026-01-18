import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Stats from './components/Stats';
import WhyMe from './components/WhyMe';
import Toolbox from './components/Toolbox';
import Process from './components/Process';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Contact from './components/Contact';

const App: React.FC = () => {
  return (
    <div className="bg-slate-50 min-h-screen font-sans">
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <WhyMe />
        <Toolbox />
        <Process />
        <Services />
        <Portfolio />
        <Testimonials />
        <FAQ />
        <Contact />
      </main>
    </div>
  );
};

export default App;