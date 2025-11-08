
export type Language = 'ar' | 'en';

export interface Content {
  nav: {
    about: string;
    benefits: string;
    product: string;
    testimonials: string;
  };
  hero: {
    headline: string;
    subheadline: string;
    ctaPrimary: string;
    ctaSecondary: string;
  };
  about: {
    title: string;
    p1: string;
    p2: string;
    p3: string;
  };
  benefits: {
    title: string;
    items: {
      icon: string;
      text: string;
    }[];
  };
  product: {
    title: string;
    description: string;
    price: string;
    size: string;
    addToCart: string;
    feature1: string;
    feature2: string;
  };
  testimonials: {
    title: string;
    reviews: {
      quote: string;
      name: string;
      before: string;
      after: string;
    }[];
  };
  gallery: {
    title: string;
  };
  cta: {
    title: string;
    button: string;
  };
  footer: {
    madeIn: string;
    contact: string;
    privacy: string;
    rights: string;
  };
}
