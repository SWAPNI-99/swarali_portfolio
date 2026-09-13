import { useRef, type ReactNode } from 'react';
import { cn } from '../../lib/cn';
import { useInView } from '../../hooks/useInView';
import { usePrefersReducedMotion } from '../../hooks/usePrefersReducedMotion';

interface RevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

export function Reveal({ children, className, delay = 0 }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref);
  const reduced = usePrefersReducedMotion();
  const visible = inView || reduced;

  return (
    <div
      ref={ref}
      className={cn(
        !reduced &&
          'transform-gpu transition-[opacity,transform] duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)]',
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8',
        className,
      )}
      style={{ transitionDelay: reduced ? '0ms' : `${delay}ms` }}
    >
      {children}
    </div>
  );
}