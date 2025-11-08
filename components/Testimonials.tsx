
import React from 'react';
import { Content } from '../types';
import { useFadeIn } from '../hooks/useFadeIn';

interface TestimonialsProps {
  content: Content['testimonials'];
}

export const Testimonials: React.FC<TestimonialsProps> = ({ content }) => {
  const { ref, isVisible } = useFadeIn<HTMLDivElement>();

  return (
    <section id="testimonials" ref={ref} className={`py-20 bg-white transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-serif font-semibold text-center text-brand-dark mb-12">{content.title}</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {content.reviews.map((review, index) => (
            <div key={index} className="bg-brand-beige p-8 rounded-lg shadow-sm text-center">
              <p className="text-brand-dark italic mb-4">"{review.quote}"</p>
              <div className="font-semibold text-brand-green mb-6">- {review.name}</div>
              <div className="grid grid-cols-2 gap-4 items-center">
                <div>
                  {/* Performance: lazy-load testimonial images */}
                  <img src={`https://picsum.photos/300/300?random=${index+4}`} alt="Before" className="rounded-md w-full aspect-square object-cover" loading="lazy" />
                  <span className="text-xs text-gray-500 mt-1 block">{review.before}</span>
                </div>
                <div>
                  <img src={`https://picsum.photos/300/300?random=${index+7}`} alt="After" className="rounded-md w-full aspect-square object-cover" loading="lazy" />
                  <span className="text-xs text-gray-500 mt-1 block">{review.after}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
