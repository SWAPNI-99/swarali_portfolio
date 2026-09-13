import { MEDIA } from '../data/media';
import { EditorialImage } from './ui/EditorialImage';
import { SectionLabel } from './ui/SectionLabel';

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden px-5 pb-16 pt-8 sm:px-8 lg:px-12 lg:pb-24 lg:pt-10">
      <div className="mx-auto grid max-w-[92rem] items-end gap-10 lg:grid-cols-12 lg:gap-8">
        <div className="lg:col-span-6 lg:pb-6">
          <SectionLabel>Field journalist · Gujarat bureau</SectionLabel>
          <h1 className="mt-6 font-serif text-[clamp(3.2rem,8vw,7.4rem)] leading-[0.9] tracking-tightest text-ink-900">
            Swarali
            <span className="block italic">JoshiRao</span>
          </h1>
          <p className="mt-6 text-sm font-medium uppercase tracking-caps text-ink-600 sm:text-[13px]">
            Journalist · Anchor · Media Professional
          </p>
          <p className="mt-8 max-w-md font-serif text-2xl leading-snug tracking-editorial text-ink-800 sm:text-3xl">
            Following the story wherever it leads.
          </p>
          <p className="mt-6 max-w-lg text-[15px] leading-relaxed text-ink-600">
            An on-ground reporter at Republic Media Network. Print to television to field investigations —
            politics, national security, civic affairs and defence.
          </p>
          <a
            href="#work"
            className="mt-10 inline-flex text-[11px] font-semibold uppercase tracking-caps text-ink-900 underline decoration-ink-300 underline-offset-8 transition-colors hover:decoration-ink-900"
          >
            Selected reporting
          </a>
        </div>

        <div className="lg:col-span-6">
          <figure className="group relative">
            <EditorialImage
              src={MEDIA.hero}
              alt="Swarali JoshiRao reporting on location with a Republic microphone, standing on rocky ground near water."
              eager
              className="aspect-[4/5] w-full sm:aspect-[5/6] lg:aspect-[4/5] lg:max-h-[82vh]"
            />
            <figcaption className="mt-3 flex items-baseline justify-between gap-4 text-[11px] uppercase tracking-caps text-ink-500">
              <span>On assignment</span>
              <span>Republic Media Network</span>
            </figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
}
