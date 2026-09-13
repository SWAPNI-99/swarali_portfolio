import { useEffect, useState, type RefObject } from 'react';

export function useInView<T extends Element>(
  ref: RefObject<T>,
  options?: IntersectionObserverInit & { once?: boolean },
) {
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          if (options?.once !== false) observer.unobserve(node);
        } else if (options?.once === false) {
          setIsInView(false);
        }
      },
      {
        threshold: options?.threshold ?? 0.18,
        rootMargin: options?.rootMargin ?? '0px 0px -8% 0px',
      },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [ref, options?.once, options?.rootMargin, options?.threshold]);

  return isInView;
}
