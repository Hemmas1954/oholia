
import { useState, useEffect, useRef, RefObject } from 'react';

export const useFadeIn = <T extends HTMLElement,>(): { ref: RefObject<T>; isVisible: boolean } => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<T>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (ref.current) {
            observer.unobserve(ref.current);
          }
        }
      },
      {
        threshold: 0.1,
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      // Ensure the observer is fully cleaned up to prevent leaks
      // even if the ref becomes null before unobserving.
      try {
        if (ref.current) {
          observer.unobserve(ref.current);
        }
      } finally {
        observer.disconnect();
      }
    };
  }, []);

  return { ref, isVisible };
};
