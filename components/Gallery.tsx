
import React from 'react';
import { Content } from '../types';
import { useFadeIn } from '../hooks/useFadeIn';

interface GalleryProps {
    content: Content['gallery'];
}

export const Gallery: React.FC<GalleryProps> = ({ content }) => {
  const { ref, isVisible } = useFadeIn<HTMLDivElement>();

  const images = Array.from({ length: 8 }, (_, i) => `https://picsum.photos/400/400?random=${i + 10}`);

  return (
    <section id="gallery" ref={ref} className={`py-20 bg-brand-beige transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
        <div className="container mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-serif font-semibold text-center text-brand-dark mb-12">{content.title}</h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4">
            {images.map((src, index) => (
            <div key={index} className="overflow-hidden">
                {/* Performance: lazy-load gallery images */}
                <img src={src} alt={`Lifestyle image ${index + 1}`} className="w-full h-full object-cover aspect-square hover:scale-110 transition-transform duration-500" loading="lazy" />
            </div>
            ))}
        </div>
    </section>
  );
};
