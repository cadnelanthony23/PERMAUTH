import React from 'react';
import './index.css';

import Navbar        from './components/Navbar';
import Hero          from './components/Hero';
import TrustBar      from './components/TrustBar';
import Categories    from './components/Categories';
import Process       from './components/Process';
import Pricing       from './components/Pricing';
import Dossier       from './components/Dossier';
import Reviews       from './components/Reviews';
import OffreSpeciale from './components/OffreSpeciale';
import Footer        from './components/Footer';
import WhatsAppFloat from './components/WhatsAppFloat';

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <TrustBar />
        <Categories />
        <Process />
        <Pricing />
        <Dossier />
        <Reviews />
        <OffreSpeciale />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
