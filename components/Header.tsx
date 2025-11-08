
import React, { useState, useEffect } from 'react';
import { Language, Content } from '../types';

interface HeaderProps {
  language: Language;
  toggleLanguage: () => void;
  content: Content['nav'];
}

export const Header: React.FC<HeaderProps> = ({ language, toggleLanguage, content }) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    // Performance: mark listener as passive to hint no preventDefault
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/80 shadow-md backdrop-blur-sm' : 'bg-transparent'}`}>
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <a href="#" className="text-2xl font-bold font-serif text-brand-green">Oholia</a>
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#about" className="text-brand-dark hover:text-brand-green transition-colors">{content.about}</a>
          <a href="#benefits" className="text-brand-dark hover:text-brand-green transition-colors">{content.benefits}</a>
          <a href="#product" className="text-brand-dark hover:text-brand-green transition-colors">{content.product}</a>
          <a href="#testimonials" className="text-brand-dark hover:text-brand-green transition-colors">{content.testimonials}</a>
        </nav>
        <button onClick={toggleLanguage} className="border border-brand-green text-brand-green px-4 py-2 rounded-full hover:bg-brand-green hover:text-white transition-all duration-300 font-semibold">
          {language === 'ar' ? 'English' : 'العربية'}
        </button>
      </div>
    </header>
  );
};
