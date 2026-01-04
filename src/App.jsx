import React, { Suspense, lazy, useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import FacebookParamCapture from './components/FacebookParamCapture';
import WhatsAppButton from './components/WhatsAppButton';

// Lazy load sections for performance
const SocialProofStrip = lazy(() => import('./components/SocialProofStrip'));
const ProblemAgitation = lazy(() => import('./components/ProblemAgitation'));
const EmotionalTrigger = lazy(() => import('./components/EmotionalTrigger'));
const ProductReveal = lazy(() => import('./components/ProductReveal'));
const ProductSneakPeek = lazy(() => import('./components/ProductSneakPeek'));
const WhatsAppScreenshots = lazy(() => import('./components/WhatsAppScreenshots'));
const SimpleOffer = lazy(() => import('./components/SimpleOffer'));
const HotmartWidget = lazy(() => import('./components/HotmartWidget'));
const FAQ = lazy(() => import('./components/FAQ'));
const FinalCTA = lazy(() => import('./components/FinalCTA'));
const Footer = lazy(() => import('./components/Footer'));

// Lightweight loading placeholder
const SectionLoader = () => (
  <div className="w-full h-20 flex items-center justify-center">
    <div className="w-8 h-8 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
  </div>
);

function App() {
  return (
    <div className="min-h-screen bg-background font-sans text-text">
      {/* Facebook CAPI Parameter Capture */}
      <FacebookParamCapture />

      {/* Header */}
      <Header />

      <main>
        {/* SECTION 1: Hero - Above the fold power zone with product image */}
        <Hero />

        {/* SECTION 2: Social Proof Strip - Quick trust builder */}
        <Suspense fallback={<SectionLoader />}>
          <SocialProofStrip />
        </Suspense>

        {/* SECTION 3: Problem Agitation (Short) */}
        <Suspense fallback={<SectionLoader />}>
          <ProblemAgitation />
        </Suspense>

        {/* SECTION 3.5: Emotional Trigger - Deep psychological copy */}
        <Suspense fallback={<SectionLoader />}>
          <EmotionalTrigger />
        </Suspense>

        {/* SECTION 4: Product Reveal - What's inside */}
        <Suspense fallback={<SectionLoader />}>
          <ProductReveal />
        </Suspense>

        {/* SECTION 4.5: Product Sneak Peek - Visual preview */}
        <Suspense fallback={<SectionLoader />}>
          <ProductSneakPeek />
        </Suspense>

        {/* SECTION 5: WhatsApp Screenshots - REAL proof */}
        <Suspense fallback={<SectionLoader />}>
          <WhatsAppScreenshots />
        </Suspense>

        {/* SECTION 6: Simple Offer + Guarantee */}
        <Suspense fallback={<SectionLoader />}>
          <SimpleOffer />
        </Suspense>

        {/* SECTION 7: Checkout */}
        <Suspense fallback={<SectionLoader />}>
          <HotmartWidget />
        </Suspense>

        {/* SECTION 8: FAQ (Condensed) */}
        <Suspense fallback={<SectionLoader />}>
          <FAQ />
        </Suspense>

        {/* SECTION 9: Final CTA */}
        <Suspense fallback={<SectionLoader />}>
          <FinalCTA />
        </Suspense>
      </main>

      <Suspense fallback={null}>
        <Footer />
      </Suspense>

      {/* Floating WhatsApp Button */}
      <WhatsAppButton />
    </div>
  );
}

export default App;
