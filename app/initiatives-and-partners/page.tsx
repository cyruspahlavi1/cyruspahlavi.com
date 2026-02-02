import Link from 'next/link';

const initiatives = [
  {
    title: 'Pars Network',
    description: 'Privacy-preserving platform providing resilient communications and public-interest media infrastructure for Iranians facing censorship and information blackouts.',
    href: 'https://pars.network',
  },
  {
    title: 'MIGA Protocol',
    description: 'Humanitarian funding initiative supporting the global Persian community through transparent, mission-driven assistance and direct relief.',
    href: 'https://migaprotocol.xyz',
  },
  {
    title: 'MIGA Foundation',
    description: 'Mission and governance for transparency and accountability.',
    href: 'https://miga.us.org',
  },
  {
    title: 'Lux Fund & Lux Partners',
    description: 'Privacy and security technologies, cryptography research, and privacy-preserving computation.',
  },
];

export default function InitiativesPage() {
  return (
    <main>
      <section className="bg-hero-wash py-20">
        <div className="container">
          <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">Initiatives & Partners</p>
          <h1 className="mt-4 font-serif text-4xl text-gold">Current Projects and Partnerships</h1>
          <p className="mt-4 max-w-3xl text-muted-foreground">
            Technology, humanitarian, and cultural initiatives supporting the Iranian people and preserving Persian heritage.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="container grid gap-6 md:grid-cols-2">
          {initiatives.map((item) => (
            <div key={item.title} className="rounded-2xl border border-white/10 bg-card p-6 shadow-soft">
              <h3 className="font-serif text-xl text-gold">{item.title}</h3>
              <p className="mt-3 text-sm text-muted-foreground">{item.description}</p>
              {item.href ? (
                <Link
                  href={item.href}
                  target="_blank"
                  className="mt-4 inline-flex text-sm font-semibold text-gold hover:text-gold-light"
                >
                  Visit →
                </Link>
              ) : null}
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
