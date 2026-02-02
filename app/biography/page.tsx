import Image from 'next/image';

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
  },
  {
    name: 'Pars Network',
    url: 'https://pars.network',
    description: 'Privacy-preserving platform providing resilient communications for communities facing information blackouts.',
  },
  {
    name: 'Pars DAO',
    url: 'https://pars.vote',
    description: 'On-chain transparency and accountability initiative publishing verifiable records and civic proposals.',
  },
  {
    name: 'CYRUS',
    url: 'https://cyrus.money',
    description: 'Digital collectible initiative inspired by Cyrus the Great, promoting cultural memory and civic engagement.',
  },
  {
    name: 'MIGA Protocol',
    url: 'https://migaprotocol.xyz',
    description: 'Humanitarian funding initiative supporting communities through transparent, mission-driven assistance.',
  },
  {
    name: 'Lux Fund',
    url: 'https://lux.fund',
    description: 'Investment focus on next-generation privacy and security technologies, including applied cryptography.',
  },
];

export default function BiographyPage() {
  return (
    <main>
      <section className="bg-hero-wash py-20">
        <div className="container">
          <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">Biography</p>
          <h1 className="mt-4 font-serif text-4xl text-gold">Artist, Humanitarian, Technologist</h1>
          <p className="mt-4 max-w-3xl text-muted-foreground">
            This biography is intended for public distribution with official correspondence. Primary documentation may be provided to governments and institutions through official channels when required.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="container grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <div className="rounded-3xl border border-white/10 bg-card p-6 shadow-soft">
            <Image
              src="/images/cyrus-pahlavi.jpg"
              alt="HRH Cyrus Pahlavi"
              width={520}
              height={700}
              className="rounded-2xl object-cover"
            />
            <p className="mt-4 text-center text-sm text-muted-foreground">HRH Cyrus Pahlavi</p>
          </div>
          <div className="space-y-8">
            <div>
              <h2 className="font-serif text-2xl text-gold">Early Life</h2>
              <p className="mt-4 text-muted-foreground">
                Cyrus Pahlavi is a member of Iran's Royal Family. He was born in 1969. Following the 1979 revolution, he lived with his family in the Seychelles, where isolation and displacement shaped his formative years and first commitment to creative work.
              </p>
            </div>
            <div>
              <h2 className="font-serif text-2xl text-gold">Education</h2>
              <p className="mt-4 text-muted-foreground">
                He completed his secondary education in Switzerland at Institut Le Rosey. He later pursued art and design studies at Parsons School of Design.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-3">
              {[
                { label: 'Practice', value: 'Visual Artist' },
                { label: 'Focus', value: 'Humanitarian Work' },
                { label: 'Sector', value: 'Privacy Technology' },
              ].map((item) => (
                <div key={item.label} className="rounded-xl border border-white/10 bg-white/5 p-4">
                  <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">{item.label}</p>
                  <p className="mt-2 text-sm font-semibold text-foreground">{item.value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-white/10 bg-black/40 py-20">
        <div className="container grid gap-10">
          <div className="rounded-2xl border border-white/10 bg-card p-8">
            <h3 className="font-serif text-xl text-gold">Artistic Practice</h3>
            <p className="mt-4 text-sm text-muted-foreground">
              Working primarily through painting, his practice has been shaped by themes of nature, memory, and the experience of exile. He has described painting as a personal discipline that restores calm and agency, and as a form of freedom—particularly for those living under coercion.
            </p>
            <p className="mt-4 text-sm text-muted-foreground">
              Beyond the visual arts, he has also participated in film projects as an actor and producer.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-card p-8">
            <h3 className="font-serif text-xl text-gold">Selected Exhibitions & Presentations</h3>
            <ul className="mt-6 grid gap-2 text-sm text-muted-foreground md:grid-cols-2">
              {exhibitions.map((ex) => (
                <li key={ex} className="flex items-start gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-gold/60" />
                  {ex}
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-2xl border border-gold/40 bg-card p-8">
            <h3 className="font-serif text-xl text-gold">Humanitarian & Civic Work</h3>
            <p className="mt-4 text-sm text-muted-foreground">
              He has supported humanitarian projects that combine creative practice with direct civic benefit. One such initiative, <strong className="text-foreground">"Rainbow of Beslan,"</strong> involved art workshops with children and families affected by the Beslan school attack, created as a tribute to those who were killed and to those who survived.
            </p>
            <p className="mt-4 text-sm text-muted-foreground">
              The project reflects a continuing focus on protecting children, supporting healing, and honoring victims of terrorism.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-card p-8">
            <h3 className="font-serif text-xl text-gold">Civic & Technology Initiatives</h3>
            <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {initiatives.map((init) => (
                <a
                  key={init.name}
                  href={init.url}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-xl border border-white/10 bg-white/5 p-4 transition hover:border-gold/60"
                >
                  <h4 className="font-semibold text-foreground">{init.name}</h4>
                  <p className="mt-2 text-xs text-muted-foreground">{init.description}</p>
                </a>
              ))}
            </div>
          </div>

          <div className="rounded-2xl border border-white/10 bg-card p-8">
            <h3 className="font-serif text-xl text-gold">Professional Background</h3>
            <p className="mt-4 text-sm text-muted-foreground">
              HRH Cyrus Pahlavi is a managing partner of Lux Fund (lux.fund) and a co-founder and president of Lux Partners. His work has focused on next-generation privacy and security technologies, including privacy-preserving computation and applied cryptography (including research and development in fully homomorphic encryption).
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
