
import React from 'react';
import { Content } from '../types';
import { useFadeIn } from '../hooks/useFadeIn';

interface CTAProps {
    content: Content['cta'];
}

export const CTA: React.FC<CTAProps> = ({ content }) => {
  const { ref, isVisible } = useFadeIn<HTMLDivElement>();

  return (
    <section ref={ref} className={`py-20 bg-white transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-2xl md:text-3xl font-serif font-semibold text-brand-dark max-w-2xl mx-auto mb-8">{content.title}</h2>
        <a href="#product" className="bg-brand-green text-white px-10 py-4 rounded-full text-lg font-semibold hover:bg-opacity-90 transition-all transform hover:scale-105 inline-block">
          {content.button}
        </a>
      </div>
    </section>
  );
};
