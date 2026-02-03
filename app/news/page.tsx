import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

const newsItems = [
  {
    date: '2 February 2026',
    title: 'Foundation launches humanitarian initiative supporting communities across three continents',
    excerpt: 'A new humanitarian program bringing education, healthcare, and sustainable development to underserved communities in Europe, the Middle East, and Central Asia.',
    category: 'Humanitarian',
  },
  {
    date: '28 January 2026',
    title: 'Art exhibition celebrates 25 years of creative practice',
    excerpt: 'A retrospective exhibition opens in Geneva, showcasing works that explore themes of memory, hope, and the human experience.',
    category: 'Culture',
  },
  {
    date: '15 January 2026',
    title: 'Technology partnership brings secure communications to civil society',
    excerpt: 'New collaboration brings privacy-preserving tools to organizations working to protect human dignity in challenging environments.',
    category: 'Technology',
  },
  {
    date: '8 January 2026',
    title: 'Educational scholarship program expanded to new regions',
    excerpt: 'The scholarship initiative now supports students in twelve countries, providing opportunities for higher education and professional development.',
    category: 'Education',
  },
  {
    date: '2 January 2026',
    title: 'Annual message emphasizes unity and collective responsibility',
    excerpt: 'In a new year address, HRH Cyrus Pahlavi reflected on achievements of the past year and outlined priorities for continued progress.',
    category: 'Address',
  },
  {
    date: '18 December 2025',
    title: 'Cultural preservation initiative receives international recognition',
    excerpt: 'The heritage preservation program was recognized by UNESCO for its work in documenting and protecting cultural artifacts.',
    category: 'Culture',
  },
];

export default function NewsPage() {
  return (
    <main>
      {/* Hero */}
      <section className="bg-black py-24">
        <div className="container">
          <div className="mx-auto max-w-4xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.4em] text-gold">
              News & Media
            </p>
            <h1 className="mt-6 font-serif text-4xl leading-tight text-white md:text-5xl lg:text-6xl">
              Latest News
            </h1>
            <p className="mt-8 text-lg text-neutral-400">
              Updates on initiatives, events, and developments
            </p>
          </div>
        </div>
      </section>

      {/* News Grid */}
      <section className="border-t border-white/10 bg-neutral-950 py-24">
        <div className="container">
          <div className="grid gap-8 lg:grid-cols-2">
            {newsItems.map((item, index) => (
              <article
                key={item.title}
                className={`rounded-xl border border-white/10 bg-black p-8 transition-colors hover:border-gold/40 ${index === 0 ? 'lg:col-span-2' : ''}`}
              >
                <div className="flex flex-wrap items-center gap-4">
                  <time className="text-xs font-semibold uppercase tracking-wider text-gold">
                    {item.date}
                  </time>
                  <span className="rounded-full bg-white/5 px-3 py-1 text-xs font-medium text-neutral-400">
                    {item.category}
                  </span>
                </div>
                <h2 className={`mt-4 font-serif leading-snug text-white ${index === 0 ? 'text-3xl' : 'text-xl'}`}>
                  {item.title}
                </h2>
                <p className={`mt-4 text-neutral-500 ${index === 0 ? 'text-lg' : 'text-sm'}`}>
                  {item.excerpt}
                </p>
                <button className="mt-6 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-gold hover:underline">
                  Read More
                  <ArrowRight size={12} />
                </button>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
