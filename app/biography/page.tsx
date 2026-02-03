import Image from 'next/image';
import Link from 'next/link';
import { Palette, Globe, Building, GraduationCap, Heart, Briefcase, MapPin, Calendar, ArrowRight } from 'lucide-react';

const exhibitions = [
  'Marlborough Gallery, Monaco',
  'Miami Art Basel 2023 (The Continuum Opera Gallery)',
  'Galerie St. Péré, Paris, France',
  'Palace Hotel, Gstaad, Switzerland',
  'Musée d\'Art Contemporain — Le Pavillon Vendôme, Paris, France (2020)',
  'Can 7 Formentera Gallery, Ibiza, Spain',
  'Galerie Pierre Passebon, Paris, France (2012)',
  'Art Dubai 2022 (Courtyard Gallery)',
];

const initiatives = [
  {
    name: 'Parsis Foundation',
    url: 'https://parsis.foundation',
    description: 'NGO supporting privacy-preserving communications and public-interest media infrastructure.',
    icon: Building,
  },
  {
    name: 'Parsis Fund',
    url: 'https://parsis.fund',
    description: 'Public goods fund investing in technology, education, and humanitarian initiatives.',
    icon: Globe,
  },
  {
    name: 'Pars Network',
    url: 'https://pars.network',
    description: 'Privacy-preserving platform for resilient communications.',
    icon: Globe,
  },
  {
    name: 'Lux Fund',
    url: 'https://lux.fund',
    description: 'Investment in next-generation privacy and security technologies.',
    icon: Briefcase,
  },
];

export default function BiographyPage() {
  return (
    <main>
      {/* Hero */}
      <section className="bg-black py-24">
        <div className="container">
          <div className="mx-auto max-w-4xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.4em] text-gold">Biography</p>
            <h1 className="mt-6 font-serif text-4xl leading-tight text-white md:text-5xl lg:text-6xl">
              A Life Dedicated to Progress
            </h1>
            <p className="mt-8 text-lg text-neutral-400">
              Artist, philanthropist, investor, and technologist—unified by a commitment to human dignity and building systems that serve humanity.
            </p>
          </div>
        </div>
      </section>

      {/* Portrait & Quick Facts */}
      <section className="border-t border-white/10 bg-neutral-950 py-24">
        <div className="container">
          <div className="grid gap-16 lg:grid-cols-[400px_1fr] lg:items-start">
            {/* Portrait */}
            <div className="mx-auto w-full max-w-sm lg:mx-0">
              <div className="overflow-hidden rounded-2xl border border-white/10">
                <Image
                  src="/images/cyrus-pahlavi.jpg"
                  alt="HRH Cyrus Pahlavi"
                  width={520}
                  height={700}
                  className="h-auto w-full object-cover"
                />
              </div>
              <p className="mt-4 text-center text-sm text-neutral-500">HRH Cyrus Pahlavi</p>
            </div>

            {/* Bio Content */}
            <div className="space-y-10">
              <div>
                <div className="flex items-center gap-3">
                  <Calendar className="h-5 w-5 text-gold" />
                  <h2 className="font-serif text-2xl text-white">Early Life</h2>
                </div>
                <p className="mt-4 text-neutral-400">
                  Cyrus Pahlavi is a member of Iran's Royal Family. Born in 1969, following the 1979 revolution, he lived with his family in the Seychelles, where isolation and displacement shaped his formative years and first commitment to creative work.
                </p>
              </div>

              <div>
                <div className="flex items-center gap-3">
                  <GraduationCap className="h-5 w-5 text-gold" />
                  <h2 className="font-serif text-2xl text-white">Education</h2>
                </div>
                <p className="mt-4 text-neutral-400">
                  He completed his secondary education in Switzerland at Institut Le Rosey, one of the world's most prestigious boarding schools. He later pursued art and design studies at Parsons School of Design in New York.
                </p>
              </div>

              <div>
                <div className="flex items-center gap-3">
                  <MapPin className="h-5 w-5 text-gold" />
                  <h2 className="font-serif text-2xl text-white">Residence</h2>
                </div>
                <p className="mt-4 text-neutral-400">
                  Currently based in Switzerland, maintaining connections to the global Persian diaspora and international art, technology, and humanitarian communities.
                </p>
              </div>

              {/* Quick Facts */}
              <div className="grid gap-4 sm:grid-cols-3">
                {[
                  { label: 'Practice', value: 'Visual Artist', icon: Palette },
                  { label: 'Focus', value: 'Humanitarian Work', icon: Heart },
                  { label: 'Sector', value: 'Privacy Technology', icon: Globe },
                ].map((item) => (
                  <div key={item.label} className="rounded-xl border border-white/10 bg-black p-5">
                    <item.icon className="h-5 w-5 text-gold" />
                    <p className="mt-3 text-xs uppercase tracking-[0.2em] text-neutral-500">{item.label}</p>
                    <p className="mt-1 font-semibold text-white">{item.value}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Artistic Practice */}
      <section className="border-t border-white/10 bg-black py-24">
        <div className="container">
          <div className="mx-auto max-w-4xl">
            <div className="flex items-center gap-3">
              <Palette className="h-6 w-6 text-gold" />
              <h2 className="font-serif text-3xl text-white">Artistic Practice</h2>
            </div>
            <p className="mt-6 text-lg text-neutral-400">
              Working primarily through painting, his practice has been shaped by themes of nature, memory, and the experience of exile. He has described painting as a personal discipline that restores calm and agency, and as a form of freedom—particularly for those living under coercion.
            </p>
            <p className="mt-4 text-neutral-500">
              Beyond the visual arts, he has also participated in film projects as an actor and producer, exploring storytelling as a medium for cultural connection.
            </p>
            <Link href="/works" className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-gold hover:underline">
              View Works & Exhibitions
              <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* Exhibitions */}
      <section className="border-t border-white/10 bg-neutral-950 py-24">
        <div className="container">
          <div className="mb-12">
            <h2 className="font-serif text-3xl text-white">Selected Exhibitions</h2>
            <p className="mt-4 text-neutral-500">Works exhibited and collected internationally</p>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            {exhibitions.map((ex) => (
              <div key={ex} className="flex items-start gap-4 rounded-xl border border-white/10 bg-black p-5">
                <span className="mt-1 h-2 w-2 flex-shrink-0 rounded-full bg-gold" />
                <span className="text-neutral-300">{ex}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Humanitarian Work */}
      <section className="border-t border-gold/20 bg-black py-24">
        <div className="container">
          <div className="mx-auto max-w-4xl">
            <div className="rounded-2xl border border-gold/30 bg-gradient-to-b from-gold/5 to-transparent p-10">
              <div className="flex items-center gap-3">
                <Heart className="h-6 w-6 text-gold" />
                <h2 className="font-serif text-3xl text-white">Humanitarian & Civic Work</h2>
              </div>
              <p className="mt-6 text-lg text-neutral-300">
                He has supported humanitarian projects that combine creative practice with direct civic benefit. One such initiative, <strong className="text-white">"Rainbow of Beslan,"</strong> involved art workshops with children and families affected by the Beslan school attack, created as a tribute to those who were killed and to those who survived.
              </p>
              <p className="mt-4 text-neutral-400">
                The project reflects a continuing focus on protecting children, supporting healing, and honoring victims of terrorism.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Initiatives */}
      <section className="border-t border-white/10 bg-neutral-950 py-24">
        <div className="container">
          <div className="mb-12">
            <div className="flex items-center gap-3">
              <Building className="h-6 w-6 text-gold" />
              <h2 className="font-serif text-3xl text-white">Civic & Technology Initiatives</h2>
            </div>
            <p className="mt-4 text-neutral-500">
              Organizations and projects supporting humanitarian work and privacy-preserving technology
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {initiatives.map((init) => (
              <a
                key={init.name}
                href={init.url}
                target="_blank"
                rel="noreferrer"
                className="group rounded-xl border border-white/10 bg-black p-6 transition-all hover:border-gold/50"
              >
                <init.icon className="h-6 w-6 text-gold" />
                <h3 className="mt-4 font-serif text-xl text-white">{init.name}</h3>
                <p className="mt-2 text-sm text-neutral-500">{init.description}</p>
                <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-gold">
                  Visit
                  <ArrowRight size={12} className="transition-transform group-hover:translate-x-1" />
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Professional Background */}
      <section className="border-t border-white/10 bg-black py-24">
        <div className="container">
          <div className="mx-auto max-w-4xl">
            <div className="flex items-center gap-3">
              <Briefcase className="h-6 w-6 text-gold" />
              <h2 className="font-serif text-3xl text-white">Professional Background</h2>
            </div>
            <p className="mt-6 text-lg text-neutral-400">
              HRH Cyrus Pahlavi is Chief Investment Officer of the Parsis Fund, a managing partner of Lux Fund, and a co-founder and president of Lux Partners.
            </p>
            <p className="mt-4 text-neutral-500">
              His work has focused on next-generation privacy and security technologies, including privacy-preserving computation and applied cryptography (including research and development in fully homomorphic encryption).
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/works"
                className="inline-flex items-center gap-2 rounded-full bg-gold px-6 py-3 text-sm font-semibold text-black transition-colors hover:bg-gold/90"
              >
                View Works
                <ArrowRight size={16} />
              </Link>
              <Link
                href="/mission"
                className="inline-flex items-center gap-2 rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/5"
              >
                Read Mission
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
