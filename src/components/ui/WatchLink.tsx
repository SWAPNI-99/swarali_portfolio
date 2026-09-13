import { ArrowUpRight } from 'lucide-react';
import { cn } from '../../lib/cn';

interface WatchLinkProps {
  href: string;
  label: string;
  className?: string;
}

export function WatchLink({ href, label, className }: WatchLinkProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        'group inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-caps text-ink-900',
        'border-b border-ink-900 pb-0.5 hover:text-journal-red hover:border-journal-red transition-colors',
        className,
      )}
    >
      <span>{label}</span>
      <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden />
    </a>
  );
}
