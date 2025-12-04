import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Reviews from './components/Reviews';
import Problem from './components/Problem';
import Science from './components/Science';
import LogicPivot from './components/LogicPivot';
import Transformation from './components/Transformation';
import Solution from './components/Solution';
import Bonuses from './components/Bonuses';
import Pricing from './components/Pricing';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import MouseFollower from './components/MouseFollower';
import ComparisonTable from './components/ComparisonTable';
import Timeline from './components/Timeline';
import SneakPeek from './components/SneakPeek';
import Ingredients from './components/Ingredients';
import Filter from './components/Filter';
import StickyCTA from './components/StickyCTA';
import HotmartWidget from './components/HotmartWidget';
import WhatsAppButton from './components/WhatsAppButton';

function App() {
  return (
    <div className="min-h-screen bg-background font-sans text-text cursor-none">
      <MouseFollower />
      <Header />
      <main>
        <Hero />
        <Reviews />
        <Problem />
        <Science />
        <LogicPivot />
        <ComparisonTable />
        <Transformation />
        <Solution />
        <Ingredients />
        <HotmartWidget />
        <Timeline />
        <Bonuses />
        <SneakPeek />
        <Filter />
        <Pricing />
        <FAQ />
      </main>
      <Footer />
      <StickyCTA />
      <WhatsAppButton />
    </div>
  );
}

export default App;
