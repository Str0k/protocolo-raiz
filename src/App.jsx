import React, { Suspense, lazy, useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ClarityModule from './components/ClarityModule';
import Problem from './components/Problem';
import Authority from './components/Authority';
import WhatsAppButton from './components/WhatsAppButton';
import FacebookParamCapture from './components/FacebookParamCapture';

// Lazy load non-critical sections for faster initial load
const ComparisonTable = lazy(() => import('./components/ComparisonTable'));
const OfferBreakdown = lazy(() => import('./components/OfferBreakdown'));
const HowItWorks = lazy(() => import('./components/HowItWorks'));
const Reviews = lazy(() => import('./components/Reviews'));
const WhatsAppScreenshots = lazy(() => import('./components/WhatsAppScreenshots'));
const Pricing = lazy(() => import('./components/Pricing'));
const HotmartWidget = lazy(() => import('./components/HotmartWidget'));
const FAQ = lazy(() => import('./components/FAQ'));
const FinalCTA = lazy(() => import('./components/FinalCTA'));
const Footer = lazy(() => import('./components/Footer'));

// Optional sections (can be re-enabled if needed)
const StickyMobileCTA = lazy(() => import('./components/StickyMobileCTA'));
const StickyBottomBar = lazy(() => import('./components/StickyBottomBar'));
const LiveViewerCount = lazy(() => import('./components/LiveViewerCount'));

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
      {/* Facebook CAPI Parameter Capture - captures fbc, fbp, IP */}
      <FacebookParamCapture />

      {/* Only render MouseFollower on desktop */}
      {isDesktop && (
        <Suspense fallback={null}>
          <MouseFollower />
        </Suspense>
      )}

      <Header />
      <main>
        {/* SECTION 1: Hero (Above-the-Fold Power Zone) */}
        <Hero />

        {/* SECTION 2: Clarity Module (Anti-Confusion Lock) */}
        <ClarityModule />

        {/* SECTION 3: Problem Education (Aha Moment Engineering) */}
        <Problem />

        {/* SECTION 7: Authority Establishment (placed early for trust) */}
        <Authority />

        {/* Lazy load remaining sections */}
        <Suspense fallback={<SectionLoader />}>
          {/* SECTION 4: Differentiation Matrix (Why This vs. Everything Else) */}
          <ComparisonTable />

          {/* SECTION 5: Offer Breakdown (Tangible Value Architecture) */}
          <OfferBreakdown />

          {/* SECTION 6: Implementation Clarity (How It Works) */}
          <HowItWorks />
        </Suspense>

        <Suspense fallback={<SectionLoader />}>
          {/* SECTION 8: Social Proof Amplification (Real Results Showcase) */}
          <Reviews />

          {/* SECTION 8B: Real WhatsApp Screenshots (Living Proof) */}
          <WhatsAppScreenshots />

          {/* SECTION 9: Offer + Pricing + Urgency (Conversion Catalyst Zone) */}
          <Pricing />
          <HotmartWidget />

          {/* SECTION 10: FAQ (Objection Demolition) */}
          <FAQ />

          {/* SECTION 11: Final CTA (Last Conversion Push) */}
          <FinalCTA />
        </Suspense>

      </main>

      <Suspense fallback={null}>
        <Footer />
      </Suspense>

      {/* Floating Elements */}
      <WhatsAppButton />
      <Suspense fallback={null}>
        <StickyMobileCTA />
        <StickyBottomBar />
        <LiveViewerCount />
      </Suspense>

      {/* Disabled aggressive elements */}
      {/* <FomoNotifications /> */}
      {/* <ExitIntentPopup /> */}
    </div>
  );
}

export default App;
