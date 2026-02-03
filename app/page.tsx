import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Quote } from 'lucide-react';

const sectionLinks = [
  {
    title: 'Biography',
    description: 'A life dedicated to progress and service',
    href: '/biography',
  },
  {
    title: 'Mission',
    description: 'Principles guiding humanitarian and civic work',
    href: '/mission',
  },
  {
    title: 'Works',
    description: 'Art, exhibitions, and creative practice',
    href: '/works',
  },
];

const latestNews = [
  {
    date: '2 February 2026',
    title: 'Foundation launches humanitarian initiative supporting communities across three continents',
    excerpt: 'A new humanitarian program bringing education, healthcare, and sustainable development to underserved communities in Europe, the Middle East, and Central Asia.',
    href: '/news/humanitarian-initiative',
  },
  {
    date: '28 January 2026',
    title: 'Art exhibition celebrates 25 years of creative practice',
    excerpt: 'A retrospective exhibition opens in Geneva, showcasing works that explore themes of memory, hope, and the human experience.',
    href: '/news/art-exhibition',
  },
  {
    date: '15 January 2026',
    title: 'Technology partnership brings secure communications to civil society',
    excerpt: 'New collaboration brings privacy-preserving tools to organizations working to protect human dignity in challenging environments.',
    href: '/news/technology-partnership',
  },
];

export default function HomePage() {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative min-h-[calc(100vh-73px)] lg:h-[calc(100vh-73px)] flex items-center bg-black overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-neutral-900/50 to-black" />
        <div className="container relative z-10 py-12 md:py-16 lg:py-12">
          <div className="grid gap-10 lg:gap-12 lg:grid-cols-[1fr_auto] lg:items-center">
            <div className="text-center lg:text-left">
              <p className="text-xs font-semibold uppercase tracking-[0.4em] text-gold">
                His Royal Highness
              </p>
              <h1 className="mt-4 md:mt-6 font-serif text-4xl leading-[1.1] text-white md:text-5xl lg:text-6xl xl:text-7xl">
                Cyrus Pahlavi
              </h1>
              <div className="mt-6 md:mt-8 h-px w-24 bg-gold mx-auto lg:mx-0" />
              <p className="mt-6 md:mt-8 text-sm md:text-base lg:text-lg uppercase tracking-[0.12em] md:tracking-[0.2em] text-neutral-400">
                Serving and Empowering All Members of Society
              </p>
              <p className="mt-6 md:mt-8 max-w-lg text-base md:text-lg leading-relaxed text-neutral-400 hidden md:block mx-auto lg:mx-0">
                As a leader dedicated to progress, HRH Cyrus Pahlavi believes in the power of all to contribute to building a more peaceful and prosperous world.
              </p>
            </div>
            <div className="relative flex justify-center">
              <div className="relative w-[180px] sm:w-[220px] md:w-[260px] lg:w-[300px] xl:w-[360px]">
                <div className="absolute -inset-3 md:-inset-4 rounded-2xl border border-gold/20" />
                <div className="overflow-hidden rounded-xl">
                  <Image
                    src="/images/cyrus-pahlavi.jpg"
                    alt="Portrait of HRH Cyrus Pahlavi"
                    width={600}
                    height={800}
                    className="h-full w-full object-cover"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="border-y border-gold/20 bg-neutral-950 py-20">
        <div className="container">
          <div className="mx-auto max-w-4xl text-center">
            <Quote className="mx-auto h-12 w-12 text-gold/40" />
            <blockquote className="mt-8 font-serif text-2xl italic leading-relaxed text-white md:text-3xl lg:text-4xl">
              &ldquo;We have achieved significant accomplishments over the years, and with God&apos;s blessing, we are heading towards a future that is brighter, more hopeful, and more prosperous.&rdquo;
            </blockquote>
            <cite className="mt-8 block text-sm font-semibold uppercase tracking-[0.3em] text-gold">
              HRH Cyrus Pahlavi
            </cite>
          </div>
        </div>
      </section>

      {/* Section Links */}
      <section className="bg-black py-24">
        <div className="container">
          <div className="grid gap-8 md:grid-cols-3">
            {sectionLinks.map((section) => (
              <Link
                key={section.href}
                href={section.href}
                className="group relative overflow-hidden rounded-xl border border-white/10 bg-neutral-950 p-10 transition-all duration-300 hover:border-gold/40"
              >
                <div className="absolute inset-0 bg-gradient-to-b from-gold/5 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                <h3 className="relative font-serif text-2xl text-white">{section.title}</h3>
                <p className="relative mt-4 text-neutral-500">{section.description}</p>
                <div className="relative mt-8 flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-gold">
                  <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Legacy Section */}
      <section className="border-t border-white/10 bg-neutral-950 py-24">
        <div className="container">
          <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gold">
                A Continued Legacy of Transformation
              </p>
              <h2 className="mt-6 font-serif text-4xl leading-tight text-white">
                Leadership shaped by the values of previous generations
              </h2>
              <p className="mt-8 text-lg text-neutral-400">
                HRH Cyrus Pahlavi firmly believes that a true leader has the courage to be open with his people and care for others as family, extending from deep-rooted values of hospitality and community.
              </p>
              <p className="mt-6 text-neutral-500">
                The values passed on by previous generations are a guiding light for the present and future. His Royal Highness continues to draw inspiration from a commitment to leading by example and a people-centred legacy.
              </p>
              <Link
                href="/enduring-legacy"
                className="mt-10 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-gold hover:underline"
              >
                Explore the Legacy
                <ArrowRight size={14} />
              </Link>
            </div>
            <div className="rounded-xl border border-white/10 bg-black p-10">
              <Quote className="h-8 w-8 text-gold/40" />
              <p className="mt-6 font-serif text-xl italic leading-relaxed text-white">
                &ldquo;Our responsibility to the nation and our past and future generations is to preserve what is precious with all the strength, effort and determination that God has bestowed upon us.&rdquo;
              </p>
              <p className="mt-6 text-sm font-semibold uppercase tracking-wider text-gold">
                HRH Cyrus Pahlavi
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="border-t border-white/10 bg-black py-24">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gold">
              Honouring the Values of Our Ancestors
            </p>
            <h2 className="mt-6 font-serif text-4xl text-white">
              Traditional values as a guiding light
            </h2>
            <p className="mt-8 text-lg text-neutral-400">
              Traditional values such as community, generosity, and inclusivity are a profound source of pride and belonging. HRH Cyrus Pahlavi has made it a priority to ensure that youth remain connected to the culture and values of their ancestors.
            </p>
          </div>
          <div className="mt-16 grid gap-6 md:grid-cols-3">
            <div className="rounded-xl border border-white/10 bg-neutral-950 p-8 text-center">
              <h4 className="font-serif text-xl text-gold">Community</h4>
              <p className="mt-4 text-sm text-neutral-500">
                Nurturing bonds that unite people across generations and borders
              </p>
            </div>
            <div className="rounded-xl border border-white/10 bg-neutral-950 p-8 text-center">
              <h4 className="font-serif text-xl text-gold">Generosity</h4>
              <p className="mt-4 text-sm text-neutral-500">
                Extending support and resources to those in need around the world
              </p>
            </div>
            <div className="rounded-xl border border-white/10 bg-neutral-950 p-8 text-center">
              <h4 className="font-serif text-xl text-gold">Inclusivity</h4>
              <p className="mt-4 text-sm text-neutral-500">
                Welcoming all who share values of peaceful coexistence and mutual respect
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Latest News */}
      <section className="border-t border-white/10 bg-neutral-950 py-24">
        <div className="container">
          <div className="mb-16 flex items-end justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gold">Latest</p>
              <h2 className="mt-4 font-serif text-4xl text-white">News</h2>
            </div>
            <Link
              href="/news"
              className="hidden text-sm font-semibold uppercase tracking-wider text-gold hover:underline sm:block"
            >
              View All →
            </Link>
          </div>
          <div className="grid gap-8 lg:grid-cols-3">
            {latestNews.map((item, index) => (
              <article
                key={item.href}
                className={`rounded-xl border border-white/10 bg-black p-8 transition-colors hover:border-gold/40 ${index === 0 ? 'lg:col-span-2 lg:row-span-2' : ''}`}
              >
                <time className="text-xs font-semibold uppercase tracking-wider text-gold">
                  {item.date}
                </time>
                <h3 className={`mt-4 font-serif leading-snug text-white ${index === 0 ? 'text-2xl' : 'text-lg'}`}>
                  {item.title}
                </h3>
                <p className={`mt-4 text-neutral-500 ${index === 0 ? 'text-base' : 'text-sm line-clamp-3'}`}>
                  {item.excerpt}
                </p>
                <Link
                  href={item.href}
                  className="mt-6 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-gold hover:underline"
                >
                  Read More
                  <ArrowRight size={12} />
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
