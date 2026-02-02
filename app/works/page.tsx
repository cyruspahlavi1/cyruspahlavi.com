import Link from 'next/link';

const works = [
  {
    title: 'Visual Art',
    description: 'Paintings and visual works exploring themes of exile, identity, and cultural memory. Featured internationally including Sotheby’s auction house and Artnet.',
    links: [
      { label: 'CyrusPahlavi.art', href: 'https://cyruspahlavi.art' },
      { label: 'Artnet Profile', href: 'https://www.artnet.com/artists/cyrus-pahlavi/' },
      { label: 'Sotheby’s', href: 'https://www.sothebys.com' },
    ],
  },
  {
    title: 'Sculpture & Objects',
    description: 'Sculptural works and objects are part of the works archive and will be published as they are cataloged and cleared for release.',
    links: [],
  },
  {
    title: 'Screen & Acting',
    description: 'Public film and acting credits are referenced through the official IMDb listing.',
    links: [
      { label: 'IMDb', href: 'https://www.imdb.com/name/nm1797299/' },
    ],
  },
];

export default function WorksPage() {
  return (
    <main>
      <section className="bg-hero-wash py-20">
        <div className="container">
          <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">Works</p>
          <h1 className="mt-4 font-serif text-4xl text-gold">Art, Sculpture, and Screen Work</h1>
          <p className="mt-4 max-w-3xl text-muted-foreground">
            Record of artistic and cultural contributions across visual art, sculptural works, and film.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="container grid gap-6 md:grid-cols-2">
          {works.map((item) => (
            <div key={item.title} className="rounded-2xl border border-white/10 bg-card p-6 shadow-soft">
              <h3 className="font-serif text-xl text-gold">{item.title}</h3>
              <p className="mt-3 text-sm text-muted-foreground">{item.description}</p>
              {item.links.length > 0 ? (
                <div className="mt-4 flex flex-wrap gap-3 text-sm">
                  {item.links.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      target="_blank"
                      className="font-semibold text-gold hover:text-gold-light"
                    >
                      {link.label} →
                    </Link>
                  ))}
                </div>
              ) : null}
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
