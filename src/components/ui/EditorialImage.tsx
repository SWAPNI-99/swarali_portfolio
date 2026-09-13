import { useEffect, useRef } from 'react';

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
  className = '',
  eager = false,
  direction = 'none',
}: EditorialImageProps) {
  const frameRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  const animationFrame = useRef<number | null>(null);

  useEffect(() => {
    const update = () => {
      animationFrame.current = null;

      const frame = frameRef.current;
      const image = imageRef.current;

      if (!frame || !image) return;

      const rect = frame.getBoundingClientRect();
      const viewportHeight = window.innerHeight;

      const center = rect.top + rect.height / 2;
      const viewportCenter = viewportHeight / 2;

      const progress = Math.max(
        -1,
        Math.min(1, (center - viewportCenter) / viewportHeight),
      );

      let x = 0;

      if (direction === 'left') {
        x = progress * -70;
      }

      if (direction === 'right') {
        x = progress * 70;
      }

      image.style.transform = `translate3d(${x}px, 0, 0)`;
    };

    const onScroll = () => {
      if (animationFrame.current !== null) return;

      animationFrame.current = requestAnimationFrame(update);
    };

    update();

    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);

    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);

      if (animationFrame.current !== null) {
        cancelAnimationFrame(animationFrame.current);
      }
    };
  }, [direction]);

  return (
    <div
      ref={frameRef}
      className={`relative overflow-hidden ${className}`}
    >
      <img
        ref={imageRef}
        src={src}
        alt={alt}
        loading={eager ? 'eager' : 'lazy'}
        className="block h-full w-[calc(100%+140px)] max-w-none object-cover"
        style={{
          marginLeft: '-70px',
          transform: 'translate3d(0, 0, 0)',
          willChange: 'transform',
  }}
/>
    </div>
  );
}