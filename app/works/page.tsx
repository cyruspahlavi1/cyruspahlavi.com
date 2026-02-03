import Link from 'next/link';
import { Palette, Cpu, PenTool, Film, Globe, BookOpen, ArrowRight } from 'lucide-react';

const disciplines = [
  {
    icon: Palette,
    title: 'Visual Arts',
    description: 'Paintings and visual works exploring themes of exile, identity, nature, and cultural memory. Exhibited internationally from Monaco to Dubai, with works held in private collections and featured at major auction houses.',
    achievements: [
      'Solo exhibitions in Geneva, Monaco, and Dubai',
      'Works auctioned at Sotheby\'s',
      'Featured in Artnet and international art publications',
      'Paintings exploring Persian heritage and modern identity',
    ],
    links: [
      { label: 'CyrusPahlavi.art', href: 'https://cyruspahlavi.art' },
      { label: 'Artnet Profile', href: 'https://www.artnet.com/artists/cyrus-pahlavi/' },
    ],
  },
  {
    icon: Cpu,
    title: 'Technology & Innovation',
    description: 'Pioneer in privacy-preserving technologies, decentralized systems, and applied cryptography. Building infrastructure that protects individual freedoms and enables secure communication for civil society.',
    achievements: [
      'Founder of privacy technology initiatives',
      'Applied cryptography and zero-knowledge systems',
      'Decentralized infrastructure for human rights organizations',
      'Secure communication platforms for journalists and activists',
    ],
    links: [
      { label: 'Pars Network', href: 'https://pars.network' },
      { label: 'Lux Fund', href: 'https://lux.fund' },
    ],
  },
  {
    icon: Globe,
    title: 'Investment & Finance',
    description: 'Strategic investments in technology, infrastructure, and enterprises that create lasting value. Focus on privacy technology, sustainable development, and human capital.',
    achievements: [
      'Chief Investment Officer, Parsis Fund',
      'Managing Partner, Lux Fund',
      'Focus on privacy-preserving computation',
      'ESG-integrated investment approach',
    ],
    links: [
      { label: 'Parsis Fund', href: 'https://parsis.fund' },
      { label: 'Lux Fund', href: 'https://lux.fund' },
    ],
  },
  {
    icon: BookOpen,
    title: 'Writing & Philosophy',
    description: 'Author and commentator on topics spanning technology ethics, cultural preservation, and the intersection of ancient wisdom with modern challenges.',
    achievements: [
      'Essays on privacy and human rights',
      'Commentary on technology ethics',
      'Writings on Persian cultural heritage',
      'Philosophy of decentralization and freedom',
    ],
    links: [],
  },
  {
    icon: Film,
    title: 'Screen & Performance',
    description: 'Film and acting work exploring storytelling as a medium for cultural connection and human understanding.',
    achievements: [
      'Screen credits in film and documentary',
      'Voice work and narration',
      'Cultural documentary participation',
    ],
    links: [
      { label: 'IMDb', href: 'https://www.imdb.com/name/nm1797299/' },
    ],
  },
  {
    icon: PenTool,
    title: 'Sculpture & Design',
    description: 'Three-dimensional works and design objects that bridge traditional craftsmanship with contemporary aesthetics.',
    achievements: [
      'Sculptural works in private collections',
      'Collaborative design projects',
      'Objects exploring Persian motifs',
    ],
    links: [],
  },
];

const exhibitions = [
  { year: '2024', title: 'Private Exhibition', location: 'Geneva, Switzerland' },
  { year: '2022', title: 'Art Dubai', location: 'Dubai, UAE' },
  { year: '2021', title: 'Group Exhibition', location: 'Monaco' },
  { year: '2019', title: 'Sotheby\'s Auction', location: 'London, UK' },
  { year: '2018', title: 'Private Collection', location: 'New York, USA' },
];

export default function WorksPage() {
  return (
    <main>
      {/* Hero */}
      <section className="bg-black py-24">
        <div className="container">
          <div className="mx-auto max-w-4xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.4em] text-gold">
              Works
            </p>
            <h1 className="mt-6 font-serif text-4xl leading-tight text-white md:text-5xl lg:text-6xl">
              Art, Technology & Innovation
            </h1>
            <p className="mt-8 text-lg text-neutral-400">
              A polymath's journey across visual arts, technology, investment, and philosophy—unified by a commitment to human dignity, cultural preservation, and building systems that serve humanity.
            </p>
          </div>
        </div>
      </section>

      {/* Disciplines */}
      <section className="border-t border-white/10 bg-neutral-950 py-24">
        <div className="container">
          <div className="grid gap-12">
            {disciplines.map((discipline, index) => (
              <div
                key={discipline.title}
                className={`grid gap-12 lg:grid-cols-2 lg:items-start ${index % 2 === 1 ? '' : ''}`}
              >
                <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                  <discipline.icon className="h-10 w-10 text-gold" />
                  <h2 className="mt-6 font-serif text-3xl text-white">{discipline.title}</h2>
                  <p className="mt-4 text-lg text-neutral-400">{discipline.description}</p>
                  {discipline.links.length > 0 && (
                    <div className="mt-6 flex flex-wrap gap-4">
                      {discipline.links.map((link) => (
                        <a
                          key={link.href}
                          href={link.href}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-2 text-sm font-semibold text-gold hover:underline"
                        >
                          {link.label}
                          <ArrowRight size={12} />
                        </a>
                      ))}
                    </div>
                  )}
                </div>
                <div className={`rounded-xl border border-white/10 bg-black p-8 ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <h4 className="text-sm font-semibold uppercase tracking-wider text-neutral-500">
                    Key Achievements
                  </h4>
                  <ul className="mt-4 space-y-3">
                    {discipline.achievements.map((achievement) => (
                      <li key={achievement} className="flex items-start gap-3 text-neutral-300">
                        <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-gold" />
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Exhibitions */}
      <section className="border-t border-white/10 bg-black py-24">
        <div className="container">
          <div className="mx-auto max-w-3xl">
            <div className="text-center">
              <h2 className="font-serif text-3xl text-white">Selected Exhibitions</h2>
              <p className="mt-4 text-neutral-400">
                Works exhibited and collected internationally
              </p>
            </div>
            <div className="mt-12 space-y-4">
              {exhibitions.map((exhibition) => (
                <div
                  key={`${exhibition.year}-${exhibition.title}`}
                  className="flex items-center justify-between rounded-xl border border-white/10 bg-neutral-950 px-6 py-4"
                >
                  <div>
                    <span className="font-serif text-lg text-white">{exhibition.title}</span>
                    <span className="ml-4 text-sm text-neutral-500">{exhibition.location}</span>
                  </div>
                  <span className="text-sm font-semibold text-gold">{exhibition.year}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy Quote */}
      <section className="border-t border-gold/20 bg-neutral-950 py-20">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <blockquote className="font-serif text-2xl italic leading-relaxed text-white">
              &ldquo;Art, technology, and philosophy are not separate domains—they are different expressions of the same drive to understand our world, preserve what matters, and build something lasting for those who come after us.&rdquo;
            </blockquote>
            <cite className="mt-8 block text-sm font-semibold uppercase tracking-[0.3em] text-gold">
              HRH Cyrus Pahlavi
            </cite>
          </div>
        </div>
      </section>
    </main>
  );
}
