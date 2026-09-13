import { useRef } from 'react';
import { cn } from '../../lib/cn';
import { useInView } from '../../hooks/useInView';
import { usePrefersReducedMotion } from '../../hooks/usePrefersReducedMotion';

interface EditorialImageProps {
  src: string;
  alt: string;
  className?: string;
  eager?: boolean;
  direction?: 'left' | 'right' | 'none';
}

export function EditorialImage({
  src,
  alt,
  className,
  eager = false,
  direction = 'none',
}: EditorialImageProps) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref);
  const reduced = usePrefersReducedMotion();

  const visible = inView || reduced;

  const directionClass =
    direction === 'left'
      ? visible
        ? 'translate-x-0'
        : '-translate-x-10'
      : direction === 'right'
        ? visible
          ? 'translate-x-0'
          : 'translate-x-10'
        : visible
          ? 'translate-x-0'
          : 'translate-y-6';

  return (
    <div
      ref={ref}
      className={cn(
        'overflow-hidden',
        !reduced &&
          'transition-[opacity,transform] duration-[1100ms] ease-[cubic-bezier(0.16,1,0.3,1)]',
        visible ? 'opacity-100' : 'opacity-0',
        directionClass,
        className,
      )}
    >
      <img
        src={src}
        alt={alt}
        loading={eager ? 'eager' : 'lazy'}
        className="img-editorial h-full w-full object-cover"
      />
    </div>
  );
}
