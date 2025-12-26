import React, { Suspense, lazy, useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ProductShowcase from './components/ProductShowcase';
import Authority from './components/Authority';
import EmotionalBenefits from './components/EmotionalBenefits';
import ProductImpact from './components/ProductImpact';
import ValueStack from './components/ValueStack';
import Reviews from './components/Reviews';
import Problem from './components/Problem';
import HotmartWidget from './components/HotmartWidget';
import Pricing from './components/Pricing';
import WhatsAppButton from './components/WhatsAppButton';
// RecentPurchases removed


// Lazy load non-critical sections for faster initial load
const DeepBenefits = lazy(() => import('./components/DeepBenefits'));
const Science = lazy(() => import('./components/Science'));
const LogicPivot = lazy(() => import('./components/LogicPivot'));
const ComparisonTable = lazy(() => import('./components/ComparisonTable'));
const StrategicCTA = lazy(() => import('./components/StrategicCTA'));
const StickyMobileCTA = lazy(() => import('./components/StickyMobileCTA'));
const ExitIntentModal = lazy(() => import('./components/ExitIntentModal'));
const DailyTransformation = lazy(() => import('./components/DailyTransformation'));
const Solution = lazy(() => import('./components/Solution'));
const Ingredients = lazy(() => import('./components/Ingredients'));
const Timeline = lazy(() => import('./components/Timeline'));
const Bonuses = lazy(() => import('./components/Bonuses'));
const LongTermRoadmap = lazy(() => import('./components/LongTermRoadmap'));
const LimitedAvailability = lazy(() => import('./components/LimitedAvailability'));
const SneakPeek = lazy(() => import('./components/SneakPeek'));
const Filter = lazy(() => import('./components/Filter'));
const CashCheckout = lazy(() => import('./components/CashCheckout'));
const FAQ = lazy(() => import('./components/FAQ'));
const CommunitySupport = lazy(() => import('./components/CommunitySupport'));
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



  return (
    <div className="min-h-screen bg-background font-sans text-text">
      {/* Only render MouseFollower on desktop */}
      {isDesktop && (
        <Suspense fallback={null}>
          <MouseFollower />
        </Suspense>
      )}

      <Header />
      <main>
        {/* 1. Hero */}
        <Hero />

        {/* 2. Product Visual */}
        <ProductShowcase />

        {/* 3. Authority */}
        <Authority />

        {/* 4. Problem */}
        <Problem />

        {/* 5. Emotional Benefits */}
        <EmotionalBenefits />

        {/* Lazy load remaining sections */}
        <Suspense fallback={<SectionLoader />}>
          {/* 6. Science */}
          <Science />

          {/* 7. Comparison */}
          <ComparisonTable />
          <StrategicCTA />

          {/* 8. Solution (Timeline) */}
          <Solution />

          {/* 9. Ingredients */}
          <Ingredients />

          {/* 10. Daily Transformation */}
          <DailyTransformation />
        </Suspense>

        <Suspense fallback={<SectionLoader />}>
          <LongTermRoadmap />
          <LimitedAvailability />
          <SneakPeek />
          <Pricing />
          <Reviews />
          <StrategicCTA urgencyText="⏰ Solo 12 cupos restantes hoy" />
          <ValueStack />
          <Bonuses />
          <FAQ />
        </Suspense>

      </main>

      <StrategicCTA
        variant="highlight"
        headline="¿Listo para tu Transformación?"
        subheadline="Únete a las 1,500+ personas que ya recuperaron su abdomen plano"
        className="mb-8"
      />
      <Suspense fallback={null}>
        <Footer />
      </Suspense>

      <WhatsAppButton />
      <StickyMobileCTA />
      <ExitIntentModal />
    </div>
  );
}

export default App;
