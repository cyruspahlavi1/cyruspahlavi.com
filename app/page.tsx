import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { foundationLinks } from '@/lib/site-data';

const values = [
  {
    title: 'Human Rights',
    description: 'Advocacy for the protection of civilians, prisoners of conscience, journalists, and medical personnel.',
  },
  {
    title: 'Non-violence',
    description: 'Opposition to terrorism and violence; commitment to peaceful resolution and healing.',
  },
  {
    title: 'Dignity',
    description: 'Upholding human dignity and equal rights for all people regardless of faith, ethnicity, or belief.',
  },
  {
    title: 'Transparency',
    description: 'Documentation, evidence preservation, and support for independent investigation.',
  },
  {
    title: 'Privacy',
    description: 'Privacy-preserving technologies to protect communications and personal freedoms.',
  },
  {
    title: 'Cultural Memory',
    description: 'Preserving and honoring cultural heritage through art, technology, and civic initiatives.',
  },
];

const focusAreas = [
  {
    title: 'Artistic Practice',
    description: 'Painting shaped by themes of nature, memory, and the experience of exile—a form of freedom.',
    href: '/works',
  },
  {
    title: 'Humanitarian Work',
    description: 'Projects like "Rainbow of Beslan" supporting children and families affected by terrorism.',
    href: '/biography',
  },
  {
    title: 'Civic Technology',
    description: 'Privacy-preserving platforms and transparent humanitarian funding initiatives.',
    href: '/initiatives-and-partners',
  },
];

export default function HomePage() {
  return (
    <main>
      <section className="relative overflow-hidden bg-hero-wash py-20 md:py-28">
        <div className="container grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div>
            <div className="mb-6">
              <p className="font-serif text-xl text-gold">For Iran. For All Iranians.</p>
            </div>
            <h1 className="font-serif text-3xl leading-tight text-foreground md:text-5xl">
              Artist, humanitarian, and technologist working for human dignity and world peace.
            </h1>
            <p className="mt-6 max-w-2xl text-base text-muted-foreground md:text-lg">
              HRH Cyrus Pahlavi combines creative practice with direct civic benefit—from art workshops with victims of terrorism to privacy-preserving technology for communities facing censorship.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button asChild size="lg">
                <Link href="/biography">Read the Biography</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/works">View Artworks</Link>
              </Button>
            </div>
            <div className="mt-10 flex flex-wrap gap-3">
              {['Visual Artist', 'Human Rights Advocate', 'Privacy Technologist'].map((item) => (
                <div
                  key={item}
                  className="rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-[10px] uppercase tracking-[0.15em] text-muted-foreground sm:px-4 sm:py-3 sm:text-xs sm:tracking-[0.2em]"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="mx-auto w-full max-w-sm overflow-hidden rounded-3xl border border-gold/40 bg-card shadow-soft">
              <Image
                src="/images/cyrus-pahlavi.jpg"
                alt="Portrait of HRH Cyrus Pahlavi"
                width={540}
                height={720}
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container">
          <div className="max-w-3xl">
            <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">Values</p>
            <h2 className="mt-4 font-serif text-3xl text-foreground">Guiding Principles</h2>
            <p className="mt-6 text-muted-foreground">
              Committed to protecting human dignity, honoring victims of terrorism, and building technology that preserves privacy and freedom for communities around the world.
            </p>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {values.map((item) => (
              <div key={item.title} className="rounded-2xl border border-white/10 bg-card p-6 shadow-soft">
                <h3 className="font-serif text-lg text-gold">{item.title}</h3>
                <p className="mt-3 text-sm text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-white/10 bg-black/50 py-20">
        <div className="container grid gap-6 lg:grid-cols-3">
          {focusAreas.map((item) => (
            <div key={item.title} className="rounded-2xl border border-white/10 bg-card p-7 shadow-soft">
              <h3 className="font-serif text-xl text-gold">{item.title}</h3>
              <p className="mt-3 text-sm text-muted-foreground">{item.description}</p>
              <Button asChild variant="ghost" className="mt-6 justify-start px-0">
                <Link href={item.href}>Learn more →</Link>
              </Button>
            </div>
          ))}
        </div>
      </section>

      <section className="py-20">
        <div className="container grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="rounded-3xl border border-gold/40 bg-card p-8 shadow-soft">
            <h3 className="font-serif text-2xl text-gold">Rainbow of Beslan</h3>
            <p className="mt-4 text-sm text-muted-foreground">
              Art workshops with children and families affected by the Beslan school attack—a tribute to those who were killed and those who survived. This project reflects a continuing focus on protecting children, supporting healing, and honoring victims of terrorism.
            </p>
            <Button asChild variant="outline" className="mt-6">
              <Link href="/biography">Learn More</Link>
            </Button>
          </div>
          <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-black/80 to-black/30 p-8 shadow-soft">
            <h3 className="font-serif text-2xl text-gold">Works & Cultural Legacy</h3>
            <p className="mt-4 text-sm text-muted-foreground">
              Visual art shaped by themes of nature, memory, and the experience of exile. Exhibited internationally from Monaco to Dubai.
            </p>
            <Button asChild variant="outline" className="mt-6">
              <Link href="/works">Explore Works</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="border-t border-white/10 py-20">
        <div className="container">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">Foundations & Initiatives</p>
              <h2 className="mt-3 font-serif text-3xl text-gold">Linked Organizations</h2>
            </div>
          </div>
          <div className="mt-10 grid gap-4 md:grid-cols-3 lg:grid-cols-5">
            {foundationLinks.map((item) => (
              <a
                key={item.href}
                href={item.href}
                target="_blank"
                rel="noreferrer"
                className="rounded-2xl border border-white/10 bg-card p-6 text-sm font-semibold text-foreground transition hover:border-gold/60"
              >
                {item.label} →
              </a>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
