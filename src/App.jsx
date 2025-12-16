import React, { Suspense, lazy, useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Reviews from './components/Reviews';
import Problem from './components/Problem';
import HotmartWidget from './components/HotmartWidget';
import Pricing from './components/Pricing';
import WhatsAppButton from './components/WhatsAppButton';
import SnowEffect from './components/SnowEffect';

// Lazy load non-critical sections for faster initial load
const DeepBenefits = lazy(() => import('./components/DeepBenefits'));
const Science = lazy(() => import('./components/Science'));
const LogicPivot = lazy(() => import('./components/LogicPivot'));
const ComparisonTable = lazy(() => import('./components/ComparisonTable'));
const Transformation = lazy(() => import('./components/Transformation'));
const Solution = lazy(() => import('./components/Solution'));
const Ingredients = lazy(() => import('./components/Ingredients'));
const Timeline = lazy(() => import('./components/Timeline'));
const Bonuses = lazy(() => import('./components/Bonuses'));
const SneakPeek = lazy(() => import('./components/SneakPeek'));
const Filter = lazy(() => import('./components/Filter'));
const CashCheckout = lazy(() => import('./components/CashCheckout'));
const FAQ = lazy(() => import('./components/FAQ'));
const Footer = lazy(() => import('./components/Footer'));

// Only load MouseFollower on desktop (not needed on mobile)
const MouseFollower = lazy(() => import('./components/MouseFollower'));

// Lightweight loading placeholder
const SectionLoader = () => (
  <div className="w-full h-20 flex items-center justify-center">
    <div className="w-8 h-8 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
  </div>
);

function App() {
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    // Detect if device is desktop (width > 768px)
    const checkDevice = () => {
      setIsDesktop(window.innerWidth > 768);
    };

    checkDevice();
    window.addEventListener('resize', checkDevice);
    return () => window.removeEventListener('resize', checkDevice);
  }, []);

  // Snow effect state with localStorage persistence
  const [isSnowEnabled, setIsSnowEnabled] = useState(() => {
    const saved = localStorage.getItem('snowEnabled');
    return saved === null ? true : saved === 'true';
  });

  const toggleSnow = () => {
    setIsSnowEnabled(prev => {
      const newValue = !prev;
      localStorage.setItem('snowEnabled', newValue.toString());
      return newValue;
    });
  };

  return (
    <div className="min-h-screen bg-background font-sans text-text">
      {/* Only render MouseFollower on desktop */}
      {isDesktop && (
        <Suspense fallback={null}>
          <MouseFollower />
        </Suspense>
      )}


      {/* Christmas Snow Effect - Desktop Only */}
      {isSnowEnabled && isDesktop && <SnowEffect />}

      <Header isSnowEnabled={isSnowEnabled} onToggleSnow={toggleSnow} />
      <main>
        {/* Critical above-the-fold content loads immediately */}
        <Hero />
        <Reviews />
        <Problem />

        {/* Lazy load remaining sections */}
        <Suspense fallback={<SectionLoader />}>
          <DeepBenefits />
          <Science />
          <LogicPivot />
          <ComparisonTable />
          <Transformation />
          <Solution />
          <Ingredients />
        </Suspense>

        {/* First checkout - loads eagerly for conversions */}
        <HotmartWidget />

        <Suspense fallback={<SectionLoader />}>
          <Timeline />
          <Bonuses />
          <SneakPeek />
          <Filter />
        </Suspense>

        {/* Second checkout - loads eagerly for conversions */}
        <Pricing />

        <Suspense fallback={<SectionLoader />}>
          <CashCheckout />
          <FAQ />
        </Suspense>
      </main>

      <Suspense fallback={null}>
        <Footer />
      </Suspense>

      <WhatsAppButton />
    </div>
  );
}

export default App;
