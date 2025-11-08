
import React from 'react';
import { Content } from '../types';
import { useFadeIn } from '../hooks/useFadeIn';

interface ProductProps {
  content: Content['product'];
}

export const Product: React.FC<ProductProps> = ({ content }) => {
  const { ref, isVisible } = useFadeIn<HTMLDivElement>();

  return (
    <section id="product" ref={ref} className={`py-20 bg-brand-beige transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="rounded-lg overflow-hidden shadow-xl p-8 bg-white">
             {/* Performance: lazy-load product image; hero CTA drives initial focus */}
             <img src="https://picsum.photos/600/600?random=3" alt="Oholia Moisturizing Cream" className="w-full h-full object-cover rounded-md" loading="lazy" />
          </div>
          <div className="text-brand-dark">
            <h2 className="text-3xl md:text-4xl font-serif font-semibold mb-4">{content.title}</h2>
            <p className="mb-6">{content.description}</p>
            <div className="text-2xl font-bold text-brand-green mb-2">{content.price}</div>
            <div className="text-sm text-gray-500 mb-6">{content.size}</div>
            <button className="w-full bg-brand-green text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-opacity-90 transition-all transform hover:scale-105 mb-6">
              {content.addToCart}
            </button>
            <div className="flex items-center justify-center space-x-6 text-sm">
                <div className="flex items-center space-x-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-brand-light-green" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                    <span>{content.feature1}</span>
                </div>
                <div className="flex items-center space-x-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-brand-light-green" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
                    <span>{content.feature2}</span>
                </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
