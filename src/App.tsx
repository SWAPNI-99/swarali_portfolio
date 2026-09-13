import { Hero } from './components/Hero';
import { IntroStatement } from './components/IntroStatement';
import { Navbar } from './components/Navbar';
import { TopTicker } from './components/TopTicker';
import { STORIES } from './data/stories';
import { INTERVIEWS } from './data/interviews';
import { EditorialImage } from './components/ui/EditorialImage';
import {
  CAREER_JOURNEY,
  CONTACT_INFO,
  CORE_SKILLS,
  EDUCATION,
  LANGUAGES,
} from './data/career';
import { MEDIA } from './data/media';

const featuredStories = STORIES.filter((story) => story.featured);
const archiveStories = STORIES.filter((story) => !story.featured);

function WatchLink({ id }: { id?: string }) {
  if (!id) return null;

  return (
    <a
      href={`https://www.youtube.com/watch?v=${id}`}
      target="_blank"
      rel="noreferrer"
      className="inline-flex items-center gap-2 whitespace-nowrap text-[10px] font-semibold uppercase tracking-[0.18em] text-ink-900 underline decoration-paper-300 underline-offset-7 transition-colors hover:decoration-ink-900"
    >
      Watch report <span>?</span>
    </a>
  );
}

function ImageBlock({
  src,
  alt,
  className = '',
  direction = 'none',
}: {
  src?: string;
  alt: string;
  className?: string;
  direction?: 'left' | 'right' | 'none';
}) {
  if (!src) return null;

  return (
    <div className={`overflow-hidden ${className}`}>
      <EditorialImage
        src={src}
        alt={alt}
        direction={direction}
        className="h-full w-full"
      />
    </div>
  );
}

/* -------------------------------------------------------
   FEATURED STORY
   Large visual treatment for the strongest assignments.
------------------------------------------------------- */

function FeaturedStory({
  story,
  index,
}: {
  story: (typeof STORIES)[number];
  index: number;
}) {
  const hasImage = Boolean(story.imageSrc);

  return (
    <article className="border-t border-paper-300 py-12 sm:py-16 lg:py-20">
      <div
        className={`grid gap-8 lg:grid-cols-12 lg:gap-10 ${
          index % 2 === 1 ? 'lg:[&>*:first-child]:order-2' : ''
        }`}
      >
        {/* IMAGE */}
        <div className="lg:col-span-7">
          {hasImage ? (
            <ImageBlock
                src={story.imageSrc}
                alt={`${story.title} — ${story.location}`}
                direction={index % 2 === 0 ? 'left' : 'right'}
                className={`w-full ${
                index === 0
                ? 'aspect-[4/3] lg:aspect-[5/4]'
                : 'aspect-[4/3]'
                }`}
/>
          ) : (
            <div className="flex min-h-[260px] items-center justify-center bg-ink-900 px-8 text-center text-paper-50">
              <div>
                <span className="block text-[9px] uppercase tracking-[0.22em] text-paper-400">
                  {story.category}
                </span>
                <span className="mt-4 block font-serif text-3xl italic sm:text-4xl">
                  {story.title}
                </span>
              </div>
            </div>
          )}

          {story.secondaryImageSrc && (
            <div className="mt-5 ml-auto w-[58%]">
              <ImageBlock
                  src={story.secondaryImageSrc}
                  alt={`${story.title} — broadcast`}
                  direction={index % 2 === 0 ? 'right' : 'left'}
                  className="aspect-[4/3] w-full"
                />
            </div>
          )}

          {story.videoSrc && (
            <div className="mt-5 overflow-hidden bg-black">
              <video
                src={story.videoSrc}
                autoPlay
                muted
                loop
                playsInline
                controls
                className="aspect-video w-full object-cover"
              />
            </div>
          )}
        </div>

        {/* TEXT */}
        <div className="flex flex-col justify-between lg:col-span-5">
          <div>
            <div className="flex items-center justify-between gap-4">
              <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-ink-400">
                {String(index + 1).padStart(2, '0')}
              </span>

              <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-ink-400">
                {story.category}
              </span>
            </div>

            <h3
              className={`editorial-heading mt-7 font-sans font-medium text-ink-900 ${
                index === 0
                  ? 'text-5xl sm:text-6xl lg:text-7xl'
                  : 'text-4xl sm:text-5xl lg:text-6xl'
              }`}
            >
              {story.title}
            </h3>

            <div className="mt-6 flex flex-wrap gap-x-5 gap-y-2 text-[9px] font-medium uppercase tracking-[0.15em] text-ink-400">
              <span>{story.date}</span>
              <span>{story.location}</span>
            </div>

            <p className="mt-7 max-w-xl text-[14px] leading-7 text-ink-600 sm:text-[15px]">
              {story.summary}
            </p>

            {story.reportingDetails.length > 0 && (
              <div className="mt-8">
                <p className="text-[9px] font-semibold uppercase tracking-[0.2em] text-ink-400">
                  Reporting notes
                </p>

                <ul className="mt-4 space-y-2.5">
                  {story.reportingDetails.slice(0, 3).map((detail) => (
                    <li
                      key={detail}
                      className="flex gap-3 text-[13px] leading-5 text-ink-600"
                    >
                      <span className="mt-[9px] h-px w-4 shrink-0 bg-ink-300" />
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {story.keyInterviews && story.keyInterviews.length > 0 && (
              <div className="mt-8 border-t border-paper-300 pt-5">
                <p className="text-[9px] font-semibold uppercase tracking-[0.2em] text-ink-400">
                  Key interviews
                </p>

                <div className="mt-3 space-y-1.5 text-[12px] leading-5 text-ink-600">
                  {story.keyInterviews.map((person) => (
                    <p key={person}>{person}</p>
                  ))}
                </div>
              </div>
            )}
          </div>

          <div className="mt-9 flex flex-wrap items-center gap-6 border-t border-paper-300 pt-5">
            <span className="text-[9px] uppercase tracking-[0.16em] text-ink-400">
              {story.role}
            </span>

            <WatchLink id={story.youtubeId} />
          </div>
        </div>
      </div>
    </article>
  );
}

/* -------------------------------------------------------
   ARCHIVE
   Compact treatment � no artificial giant image areas.
------------------------------------------------------- */

function ArchiveStory({
  story,
  index,
}: {
  story: (typeof STORIES)[number];
  index: number;
}) {
  const hasImage = Boolean(story.imageSrc);

  return (
    <article className="group border-t border-paper-300 py-7 sm:py-8">
      <div className="grid gap-5 lg:grid-cols-12 lg:items-center lg:gap-8">
        <div className="lg:col-span-1">
          <span className="text-[9px] font-semibold uppercase tracking-[0.18em] text-ink-400">
            {String(index + 1).padStart(2, '0')}
          </span>
        </div>

        {hasImage && (
          <div className="lg:col-span-2">
            <ImageBlock
              src={story.imageSrc}
              alt={`${story.title} � ${story.location}`}
              className="aspect-[4/3] w-full"
            />
          </div>
        )}

        <div className={hasImage ? 'lg:col-span-6' : 'lg:col-span-8'}>
          <div className="flex flex-wrap gap-x-4 gap-y-1 text-[9px] font-semibold uppercase tracking-[0.16em] text-ink-400">
            <span>{story.date}</span>
            <span>{story.category}</span>
            <span>{story.location}</span>
          </div>

          <h3 className="mt-2 text-2xl font-medium tracking-tight text-ink-900 transition-transform duration-500 group-hover:translate-x-1 sm:text-3xl">
            {story.title}
          </h3>

          <p className="mt-2 max-w-2xl text-[13px] leading-6 text-ink-600">
            {story.summary}
          </p>
        </div>

        <div className="flex items-center lg:col-span-3 lg:justify-end">
          <div className="flex flex-wrap items-center gap-5">
            <span className="text-[9px] uppercase tracking-[0.14em] text-ink-400">
              {story.organization}
            </span>

            <WatchLink id={story.youtubeId} />
          </div>
        </div>
      </div>
    </article>
  );
}

/* -------------------------------------------------------
   INTERVIEWS
------------------------------------------------------- */

function InterviewsSection() {
  return (
    <section
      id="interviews"
      className="border-t border-paper-300 px-5 py-20 sm:px-8 lg:px-12 lg:py-28"
    >
      <div className="mx-auto max-w-[92rem]">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-4">
            <p className="text-[9px] font-semibold uppercase tracking-[0.2em] text-ink-400">
              03 / Interviews
            </p>

            <h2 className="editorial-heading mt-5 font-sans text-5xl font-medium text-ink-900 sm:text-6xl">
              Conversations
            </h2>

            <p className="mt-6 max-w-sm text-[14px] leading-6 text-ink-600">
              Political leaders, experts, public figures and cultural voices
              encountered across the newsroom and the field.
            </p>
          </div>

          <div className="lg:col-span-8">
            <div className="border-t border-paper-300">
              {INTERVIEWS.map((interview, index) => (
                <article
                  key={interview.id}
                  className="grid gap-4 border-b border-paper-300 py-6 sm:grid-cols-[42px_1fr_auto] sm:gap-6"
                >
                  <span className="text-[9px] font-semibold tracking-[0.16em] text-ink-400">
                    {String(index + 1).padStart(2, '0')}
                  </span>

                  <div>
                    <div className="flex flex-wrap items-center gap-3">
                      <h3 className="text-xl font-medium tracking-tight text-ink-900">
                        {interview.personName}
                      </h3>

                      {interview.isExclusive && (
                        <span className="rounded-full border border-ink-300 px-2 py-1 text-[8px] font-semibold uppercase tracking-[0.13em] text-ink-600">
                          Exclusive
                        </span>
                      )}
                    </div>

                    <p className="mt-1 text-[9px] uppercase tracking-[0.13em] text-ink-400">
                      {interview.designation}
                    </p>

                    <p className="mt-3 max-w-2xl text-[13px] leading-6 text-ink-600">
                      {interview.context}
                    </p>
                  </div>

                  <div className="sm:pt-1">
                    <WatchLink id={interview.youtubeId} />
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------
   ABOUT + CAREER
------------------------------------------------------- */

function AboutSection() {
  return (
    <section
      id="about"
      className="border-t border-paper-300 px-5 py-20 sm:px-8 lg:px-12 lg:py-28"
    >
      <div className="mx-auto max-w-[92rem]">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-5">
            <p className="text-[9px] font-semibold uppercase tracking-[0.2em] text-ink-400">
              04 / About
            </p>

            <h2 className="editorial-heading mt-6 font-sans text-5xl font-medium text-ink-900 sm:text-6xl">
              The hunt for
              <br />
              <span className="font-serif italic">the story.</span>
            </h2>

            <p className="mt-8 max-w-md text-[14px] leading-7 text-ink-600">
              Reporting across print, television and digital media � with a
              particular interest in geopolitics, international affairs,
              national security and stories that demand being on the ground.
            </p>
          </div>

          <div className="lg:col-span-7">
            <div className="grid gap-10 sm:grid-cols-2">
              <div>
                <p className="text-[9px] font-semibold uppercase tracking-[0.18em] text-ink-400">
                  Skills
                </p>

                <ul className="mt-4">
                  {CORE_SKILLS.map((skill) => (
                    <li
                      key={skill}
                      className="border-b border-paper-300 py-3 text-[13px] text-ink-700"
                    >
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <p className="text-[9px] font-semibold uppercase tracking-[0.18em] text-ink-400">
                  Languages
                </p>

                <ul className="mt-4">
                  {LANGUAGES.map((item) => (
                    <li
                      key={item.language}
                      className="border-b border-paper-300 py-3"
                    >
                      <span className="text-[13px] font-medium text-ink-800">
                        {item.language}
                      </span>
                      <span className="ml-2 text-[10px] text-ink-400">
                        {item.proficiency}
                      </span>
                    </li>
                  ))}
                </ul>

                <div className="mt-10 border-t border-paper-300 pt-5">
                  <p className="text-[9px] font-semibold uppercase tracking-[0.18em] text-ink-400">
                    Education
                  </p>
                  <p className="mt-3 text-[13px] leading-5 text-ink-800">
                    {EDUCATION.degree}
                  </p>
                  <p className="mt-1 text-[10px] uppercase tracking-[0.12em] text-ink-400">
                    {EDUCATION.institution} � {EDUCATION.period}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-20 border-t border-paper-300 pt-10">
          <div className="mb-7">
            <p className="text-[9px] font-semibold uppercase tracking-[0.2em] text-ink-400">
              Career
            </p>
            <h3 className="mt-3 text-3xl font-medium tracking-tight text-ink-900 sm:text-4xl">
              A newsroom career in motion.
            </h3>
          </div>

          <div>
            {CAREER_JOURNEY.map((milestone) => (
              <article
                key={`${milestone.period}-${milestone.organization}`}
                className="grid gap-5 border-t border-paper-300 py-7 lg:grid-cols-[170px_1fr_1fr] lg:gap-10"
              >
                <div className="text-[9px] font-semibold uppercase tracking-[0.14em] text-ink-400">
                  {milestone.period}
                  {milestone.current && (
                    <span className="ml-2 text-journal-red">? Current</span>
                  )}
                </div>

                <div>
                  <h4 className="text-xl font-medium text-ink-900">
                    {milestone.role}
                  </h4>

                  <p className="mt-1 text-[9px] uppercase tracking-[0.12em] text-ink-400">
                    {milestone.organization} � {milestone.location}
                  </p>

                  <p className="mt-4 max-w-md text-[13px] leading-6 text-ink-600">
                    {milestone.description}
                  </p>
                </div>

                <div>
                  <div className="flex flex-wrap gap-2">
                    {milestone.beats.map((beat) => (
                      <span
                        key={beat}
                        className="rounded-full border border-paper-300 px-2.5 py-1 text-[8px] uppercase tracking-[0.11em] text-ink-500"
                      >
                        {beat}
                      </span>
                    ))}
                  </div>

                  <ul className="mt-4 space-y-2">
                    {milestone.highlights.slice(0, 3).map((highlight) => (
                      <li
                        key={highlight}
                        className="flex gap-3 text-[12px] leading-5 text-ink-600"
                      >
                        <span className="mt-[8px] h-px w-3 shrink-0 bg-ink-300" />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------
   CONTACT
------------------------------------------------------- */

function ContactSection() {
  return (
    <section
      id="contact"
      className="border-t border-ink-900 bg-ink-900 px-5 py-20 text-paper-50 sm:px-8 lg:px-12 lg:py-28"
    >
      <div className="mx-auto max-w-[92rem]">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-8">
            <p className="text-[9px] font-semibold uppercase tracking-[0.2em] text-paper-400">
              05 / Contact
            </p>

            <h2 className="editorial-heading mt-6 font-sans text-6xl font-medium sm:text-7xl lg:text-8xl">
              Have a story?
              <br />
              <span className="font-serif italic">Let's talk.</span>
            </h2>
          </div>

          <div className="flex flex-col justify-end lg:col-span-4">
            <p className="max-w-sm text-[13px] leading-6 text-paper-300">
              Reporting opportunities, interviews, editorial collaborations
              and professional enquiries.
            </p>

            <a
              href={`mailto:${CONTACT_INFO.email}`}
              className="mt-7 break-all text-lg font-medium text-white underline decoration-paper-600 underline-offset-8 hover:decoration-white sm:text-xl"
            >
              {CONTACT_INFO.email}
            </a>

            <a
              href={`tel:${CONTACT_INFO.phone}`}
              className="mt-5 text-[12px] text-paper-300 hover:text-white"
            >
              {CONTACT_INFO.displayPhone}
            </a>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-5 border-t border-paper-700 pt-6 text-[9px] uppercase tracking-[0.16em] text-paper-400 sm:flex-row sm:items-center sm:justify-between">
          <span>{CONTACT_INFO.name}</span>

          <div className="flex flex-wrap gap-6">
            <a
              href={CONTACT_INFO.twitterUrl}
              target="_blank"
              rel="noreferrer"
              className="hover:text-white"
            >
              X / Twitter
            </a>

            <a
              href={CONTACT_INFO.instagramUrl}
              target="_blank"
              rel="noreferrer"
              className="hover:text-white"
            >
              Instagram
            </a>

            <a
              href={MEDIA.resume}
              target="_blank"
              rel="noreferrer"
              className="hover:text-white"
            >
              Resume ?
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------
   APP
------------------------------------------------------- */

export default function App() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-paper-100 text-ink-900">
      <Navbar />
      <TopTicker />

      <main>
        <Hero />

        <IntroStatement />

        <section
          id="work"
          className="px-5 pb-16 sm:px-8 lg:px-12 lg:pb-24"
        >
          <div className="mx-auto max-w-[92rem]">
            <div className="mb-10 flex flex-col justify-between gap-5 sm:flex-row sm:items-end lg:mb-14">
              <div>
                <p className="text-[9px] font-semibold uppercase tracking-[0.2em] text-ink-400">
                  01 / Selected reporting
                </p>

                <h2 className="editorial-heading mt-5 font-sans text-5xl font-medium text-ink-900 sm:text-7xl lg:text-8xl">
                  Stories from
                  <br />
                  <span className="font-serif italic">the ground.</span>
                </h2>
              </div>

              <p className="max-w-xs text-[11px] leading-5 text-ink-500">
                Investigations, breaking news, politics, national security and
                field assignments.
              </p>
            </div>

            {featuredStories.map((story, index) => (
              <FeaturedStory
                key={story.id}
                story={story}
                index={index}
              />
            ))}

            <div className="mt-12 sm:mt-16">
              <div className="mb-0 border-b border-paper-300 pb-5">
                <div className="flex items-center justify-between">
                  <h3 className="text-[9px] font-semibold uppercase tracking-[0.2em] text-ink-500">
                    Earlier reporting
                  </h3>

                  <span className="text-[9px] uppercase tracking-[0.16em] text-ink-400">
                    Selected archive
                  </span>
                </div>
              </div>

              {archiveStories.map((story, index) => (
                <ArchiveStory
                  key={story.id}
                  story={story}
                  index={index}
                />
              ))}
            </div>
          </div>
        </section>

        <InterviewsSection />
        <AboutSection />
        <ContactSection />
      </main>

      <a
        href="#top"
        aria-label="Back to top"
        className="fixed bottom-5 right-5 z-40 flex h-11 w-11 items-center justify-center rounded-full border border-ink-300 bg-paper-100 text-xs text-ink-900 shadow-sm transition-transform hover:-translate-y-1"
      >
        ?
      </a>
    </div>
  );
}
