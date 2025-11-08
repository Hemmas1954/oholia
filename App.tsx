
import React, { useState, useEffect } from 'react';
import { Language } from './types';
import { contentData } from './constants';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Benefits } from './components/Benefits';
import { Product } from './components/Product';
import { OrderForm } from './components/OrderForm';
import { Testimonials } from './components/Testimonials';
import { Gallery } from './components/Gallery';
import { CTA } from './components/CTA';
import { Footer } from './components/Footer';

function App() {
  const [language, setLanguage] = useState<Language>('ar');

  const toggleLanguage = () => {
    const newLang = language === 'ar' ? 'en' : 'ar';
    setLanguage(newLang);
  };
  
  useEffect(() => {
    document.documentElement.lang = language;
    document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr';
  }, [language]);

  // Safety: Fallback to English content if a language key is missing
  const content = contentData[language] ?? contentData.en;

  return (
    <div className="bg-brand-beige font-sans text-brand-dark">
      <Header language={language} toggleLanguage={toggleLanguage} content={content.nav} />
      <main>
        <Hero content={content.hero} />
        <About content={content.about} />
        <Benefits content={content.benefits} />
        <Product content={content.product} />
        {/* Integrated order form section, styled to match brand */}
        <OrderForm language={language} />
        <Testimonials content={content.testimonials} />
        <Gallery content={content.gallery} />
        <CTA content={content.cta} />
      </main>
      <Footer content={content.footer} />
    </div>
  );
}

export default App;
