
import React from 'react';
import { Content } from '../types';

interface HeroProps {
  content: Content['hero'];
}

export const Hero: React.FC<HeroProps> = ({ content }) => {
  return (
    <section className="min-h-screen bg-cover bg-center flex items-center justify-center text-white" style={{ backgroundImage: "url(https://picsum.photos/1920/1080?random=1)" }}>
      <div className="absolute inset-0 bg-black/40"></div>
      <div className="relative z-10 text-center p-6">
        <h1 className="text-4xl md:text-6xl font-serif font-bold mb-4 drop-shadow-lg">{content.headline}</h1>
        <p className="text-lg md:text-2xl max-w-3xl mx-auto mb-8 drop-shadow-md">{content.subheadline}</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="#product" className="bg-brand-green text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-opacity-90 transition-all transform hover:scale-105">
            {content.ctaPrimary}
          </a>
          <a href="#about" className="bg-white/20 backdrop-blur-sm text-white border border-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-white/30 transition-all transform hover:scale-105">
            {content.ctaSecondary}
          </a>
        </div>
      </div>
    </section>
  );
};
