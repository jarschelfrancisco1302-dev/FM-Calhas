import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import Services from './components/Services';
import Benefits from './components/Benefits';
import Location from './components/Location';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import CallToAction from './components/CallToAction';

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col w-full">
      <Header />
      <main className="flex-grow">
        <Hero />
        <Features />
        <Services />
        <Benefits />
        <CallToAction />
        <Location />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
};

export default App;