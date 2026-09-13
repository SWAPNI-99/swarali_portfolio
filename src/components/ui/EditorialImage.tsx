import { useRef } from 'react';
import { cn } from '../../lib/cn';
import { useInView } from '../../hooks/useInView';
import { usePrefersReducedMotion } from '../../hooks/usePrefersReducedMotion';

interface EditorialImageProps {
  src: string;
  alt: string;
  className?: string;
  imgClassName?: string;
  eager?: boolean;
}

export function EditorialImage({ src, alt, className, imgClassName, eager }: EditorialImageProps) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { threshold: 0.12 });
  const reduced = usePrefersReducedMotion();

  return (
    <div ref={ref} className={cn('overflow-hidden bg-paper-300', className)}>
      <img
        src={src}
        alt={alt}
        loading={eager ? 'eager' : 'lazy'}
        decoding="async"
        className={cn(
          'img-editorial h-full w-full object-cover object-center',
          !reduced && 'transition-[clip-path,transform,opacity] duration-1000 ease-[cubic-bezier(0.76,0,0.24,1)]',
          inView || reduced ? 'opacity-100' : 'opacity-70',
          imgClassName,
        )}
      />
    </div>
  );
}
