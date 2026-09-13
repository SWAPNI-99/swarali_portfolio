import { useEffect, useRef } from 'react';
import { cn } from '../../lib/cn';
import { useInView } from '../../hooks/useInView';

interface MutedVideoProps {
  src: string;
  poster?: string;
  className?: string;
  label: string;
}

export function MutedVideo({ src, poster, className, label }: MutedVideoProps) {
  const wrapRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const near = useInView(wrapRef, { once: false, rootMargin: '280px 0px', threshold: 0 });

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    video.muted = true;
    video.defaultMuted = true;
    video.playsInline = true;
    if (near) {
      const play = video.play();
      if (play) play.catch(() => undefined);
    } else {
      video.pause();
    }
  }, [near]);

  return (
    <div ref={wrapRef} className={cn('overflow-hidden bg-paper-300', className)}>
      <video
        ref={videoRef}
        muted
        loop
        playsInline
        autoPlay
        preload="metadata"
        poster={poster}
        className="h-full w-full object-cover"
        aria-label={label}
      >
        {near ? <source src={src} type="video/mp4" /> : null}
      </video>
    </div>
  );
}
