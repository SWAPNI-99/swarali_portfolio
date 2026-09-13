import { Reveal } from './ui/Reveal';
import { SectionLabel } from './ui/SectionLabel';

export function IntroStatement() {
  return (
    <section className="border-y border-paper-300 px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
      <div className="mx-auto max-w-[92rem]">
        <SectionLabel>Identity</SectionLabel>
        <Reveal>
          <p className="mt-8 max-w-4xl font-serif text-[clamp(1.7rem,3.4vw,3.15rem)] leading-[1.15] tracking-editorial text-ink-900">
            A reporter formed in print, sharpened in television, and now working the field —
            from remote mining belts to counting-day floors, disaster sites and firing ranges.
          </p>
        </Reveal>
        <Reveal delay={120}>
          <div className="mt-14 grid gap-8 sm:grid-cols-4">
            {[
              { k: '01', t: 'Print', d: 'Times of India · The Indian Express' },
              { k: '02', t: 'Television', d: 'Times Network · Mirror Now' },
              { k: '03', t: 'Multimedia', d: 'MIT WPU · NLC Samachar' },
              { k: '04', t: 'Field reporting', d: 'Republic Media Network' },
            ].map((item) => (
              <div key={item.k} className="border-t border-ink-900 pt-5">
                <p className="font-mono text-[11px] text-ink-400">{item.k}</p>
                <p className="mt-3 text-lg font-medium tracking-tight">{item.t}</p>
                <p className="mt-2 text-sm text-ink-500">{item.d}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
