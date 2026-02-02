import Image from 'next/image';
import { Palette, Globe, Building, GraduationCap, Heart, Briefcase } from 'lucide-react';

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
    description: 'NGO supporting privacy-preserving communications and public-interest media infrastructure for those facing censorship.',
    icon: Building,
  },
  {
    name: 'Pars Network',
    url: 'https://pars.network',
    description: 'Privacy-preserving platform providing resilient communications for communities facing information blackouts.',
    icon: Globe,
  },
  {
    name: 'Pars DAO',
    url: 'https://pars.vote',
    description: 'On-chain transparency and accountability initiative publishing verifiable records and civic proposals.',
    icon: Globe,
  },
  {
    name: 'CYRUS',
    url: 'https://cyrus.money',
    description: 'Digital collectible initiative inspired by Cyrus the Great, promoting cultural memory and civic engagement.',
    icon: Palette,
  },
  {
    name: 'MIGA Protocol',
    url: 'https://migaprotocol.xyz',
    description: 'Humanitarian funding initiative supporting communities through transparent, mission-driven assistance.',
    icon: Heart,
  },
  {
    name: 'Lux Fund',
    url: 'https://lux.fund',
    description: 'Investment focus on next-generation privacy and security technologies, including applied cryptography.',
    icon: Briefcase,
  },
];

export default function BiographyPage() {
  return (
    <main>
      {/* Hero - Dark */}
      <section className="bg-hero-wash py-20">
        <div className="container">
          <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">Biography</p>
          <h1 className="mt-4 font-serif text-4xl text-gold">Artist, Humanitarian, Technologist</h1>
          <p className="mt-4 max-w-3xl text-muted-foreground">
            This biography is intended for public distribution with official correspondence. Primary documentation may be provided to governments and institutions through official channels when required.
          </p>
        </div>
      </section>

      {/* Main Bio - Light Background */}
      <section className="bg-white py-20">
        <div className="container grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <div className="rounded-3xl border border-neutral-200 bg-neutral-50 p-6 shadow-sm">
            <Image
              src="/images/cyrus-pahlavi.jpg"
              alt="HRH Cyrus Pahlavi"
              width={520}
              height={700}
              className="rounded-2xl object-cover"
            />
            <p className="mt-4 text-center text-sm text-neutral-600">HRH Cyrus Pahlavi</p>
          </div>
          <div className="space-y-8">
            <div>
              <div className="flex items-center gap-3">
                <GraduationCap className="h-6 w-6 text-amber-700" />
                <h2 className="font-serif text-2xl text-neutral-900">Early Life</h2>
              </div>
              <p className="mt-4 text-neutral-700">
                Cyrus Pahlavi is a member of Iran's Royal Family. He was born in 1969. Following the 1979 revolution, he lived with his family in the Seychelles, where isolation and displacement shaped his formative years and first commitment to creative work.
              </p>
            </div>
            <div>
              <div className="flex items-center gap-3">
                <GraduationCap className="h-6 w-6 text-amber-700" />
                <h2 className="font-serif text-2xl text-neutral-900">Education</h2>
              </div>
              <p className="mt-4 text-neutral-700">
                He completed his secondary education in Switzerland at Institut Le Rosey. He later pursued art and design studies at Parsons School of Design.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-3">
              {[
                { label: 'Practice', value: 'Visual Artist', icon: Palette },
                { label: 'Focus', value: 'Humanitarian Work', icon: Heart },
                { label: 'Sector', value: 'Privacy Technology', icon: Globe },
              ].map((item) => (
                <div key={item.label} className="rounded-xl border border-neutral-200 bg-neutral-50 p-4">
                  <item.icon className="h-5 w-5 text-amber-700" />
                  <p className="mt-2 text-xs uppercase tracking-[0.2em] text-neutral-500">{item.label}</p>
                  <p className="mt-1 text-sm font-semibold text-neutral-900">{item.value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Artistic Practice - Light */}
      <section className="border-t border-neutral-200 bg-neutral-50 py-20">
        <div className="container grid gap-10">
          <div className="rounded-2xl border border-neutral-200 bg-white p-8 shadow-sm">
            <div className="flex items-center gap-3">
              <Palette className="h-6 w-6 text-amber-700" />
              <h3 className="font-serif text-xl text-neutral-900">Artistic Practice</h3>
            </div>
            <p className="mt-4 text-sm text-neutral-700">
              Working primarily through painting, his practice has been shaped by themes of nature, memory, and the experience of exile. He has described painting as a personal discipline that restores calm and agency, and as a form of freedom—particularly for those living under coercion.
            </p>
            <p className="mt-4 text-sm text-neutral-700">
              Beyond the visual arts, he has also participated in film projects as an actor and producer.
            </p>
          </div>

          <div className="rounded-2xl border border-neutral-200 bg-white p-8 shadow-sm">
            <div className="flex items-center gap-3">
              <Globe className="h-6 w-6 text-amber-700" />
              <h3 className="font-serif text-xl text-neutral-900">Selected Exhibitions & Presentations</h3>
            </div>
            <ul className="mt-6 grid gap-2 text-sm text-neutral-700 md:grid-cols-2">
              {exhibitions.map((ex) => (
                <li key={ex} className="flex items-start gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-amber-600" />
                  {ex}
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-2xl border-2 border-amber-200 bg-amber-50 p-8">
            <div className="flex items-center gap-3">
              <Heart className="h-6 w-6 text-amber-700" />
              <h3 className="font-serif text-xl text-neutral-900">Humanitarian & Civic Work</h3>
            </div>
            <p className="mt-4 text-sm text-neutral-700">
              He has supported humanitarian projects that combine creative practice with direct civic benefit. One such initiative, <strong className="text-neutral-900">"Rainbow of Beslan,"</strong> involved art workshops with children and families affected by the Beslan school attack, created as a tribute to those who were killed and to those who survived.
            </p>
            <p className="mt-4 text-sm text-neutral-700">
              The project reflects a continuing focus on protecting children, supporting healing, and honoring victims of terrorism.
            </p>
          </div>

          <div className="rounded-2xl border border-neutral-200 bg-white p-8 shadow-sm">
            <div className="flex items-center gap-3">
              <Building className="h-6 w-6 text-amber-700" />
              <h3 className="font-serif text-xl text-neutral-900">Civic & Technology Initiatives</h3>
            </div>
            <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {initiatives.map((init) => (
                <a
                  key={init.name}
                  href={init.url}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-xl border border-neutral-200 bg-neutral-50 p-4 transition hover:border-amber-400 hover:bg-amber-50"
                >
                  <init.icon className="h-5 w-5 text-amber-700" />
                  <h4 className="mt-2 font-semibold text-neutral-900">{init.name}</h4>
                  <p className="mt-2 text-xs text-neutral-600">{init.description}</p>
                </a>
              ))}
            </div>
          </div>

          <div className="rounded-2xl border border-neutral-200 bg-white p-8 shadow-sm">
            <div className="flex items-center gap-3">
              <Briefcase className="h-6 w-6 text-amber-700" />
              <h3 className="font-serif text-xl text-neutral-900">Professional Background</h3>
            </div>
            <p className="mt-4 text-sm text-neutral-700">
              HRH Cyrus Pahlavi is a managing partner of Lux Fund (lux.fund) and a co-founder and president of Lux Partners. His work has focused on next-generation privacy and security technologies, including privacy-preserving computation and applied cryptography (including research and development in fully homomorphic encryption).
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
