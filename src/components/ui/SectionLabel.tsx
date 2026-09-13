import { cn } from '../../lib/cn';

export function SectionLabel({ children, className }: { children: string; className?: string }) {
  return (
    <p className={cn('text-[11px] font-mono uppercase tracking-widecaps text-ink-500', className)}>
      {children}
    </p>
  );
}
