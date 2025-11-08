
import React from 'react';
import { Content } from '../types';
import { useFadeIn } from '../hooks/useFadeIn';

interface AboutProps {
  content: Content['about'];
}

export const About: React.FC<AboutProps> = ({ content }) => {
  const { ref, isVisible } = useFadeIn<HTMLDivElement>();

  return (
    <section id="about" ref={ref} className={`py-20 bg-brand-beige transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="rounded-lg overflow-hidden shadow-xl">
            {/* Performance: lazy-load non-critical image to reduce LCP */}
            <img src="https://picsum.photos/600/700?random=2" alt="Natural Ingredients" className="w-full h-full object-cover" loading="lazy" />
          </div>
          <div className="text-brand-dark">
            <h2 className="text-3xl md:text-4xl font-serif font-semibold mb-6">{content.title}</h2>
            <p className="mb-4 text-lg">{content.p1}</p>
            <p className="mb-4">{content.p2}</p>
            <p className="font-semibold text-brand-green">{content.p3}</p>
          </div>
        </div>
      </div>
    </section>
  );
};
