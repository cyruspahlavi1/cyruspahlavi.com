import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { foundationLinks } from '@/lib/site-data';

const principles = [
  {
    title: 'Legality',
    description: 'Advocacy anchored in rule of law, due process, and constitutional constraints on power.',
  },
  {
    title: 'Non-violence',
    description: 'Opposition to terrorism and political violence; commitment to peaceful political change.',
  },
  {
    title: 'Equal Citizenship',
    description: 'One civil law for all Iranians of every faith and none, language, region, and political view.',
  },
  {
    title: 'National Unity',
    description: "Iran's territorial integrity is non-negotiable; disputes resolved by courts and ballots.",
  },
  {
    title: 'Protection of Civilians',
    description: 'Priority on preventing harm to civilians, prisoners of conscience, journalists, lawyers, and medical personnel.',
  },
  {
    title: 'Accountability',
    description: 'Documentation, evidence preservation, and support for independent investigation.',
  },
];

const focusAreas = [
  {
    title: 'Strategic Priorities',
    description: 'Operational focus on lawful transition, civic cohesion, and protection of democratic norms.',
    href: '/strategic-priorities',
  },
  {
    title: 'Enduring Legacy',
    description: 'Continuity with Iran’s constitutional heritage and the responsibilities of leadership.',
    href: '/enduring-legacy',
  },
  {
    title: 'Initiatives & Partners',
    description: 'Technology, humanitarian, and cultural initiatives supporting the Iranian people.',
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
              <p className="font-serif text-xl text-gold">In Service of Iran</p>
            </div>
            <h1 className="font-serif text-3xl leading-tight text-foreground md:text-5xl">
              A peaceful future for Iran, built on unity, dignity, and the rule of law.
            </h1>
            <p className="mt-6 max-w-2xl text-base text-muted-foreground md:text-lg">
              Working toward a free Iran where all people—of every faith, ethnicity, and belief—can live with equal rights, human dignity, and peace.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button asChild size="lg">
                <Link href="/statements">Official Statements</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/biography">Read the Biography</Link>
              </Button>
            </div>
            <div className="mt-10 flex flex-wrap gap-3">
              {['8-page declaration', '2026 statements', '6 core principles'].map((item) => (
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
                alt="Portrait of His Royal Highness Cyrus Pahlavi"
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
            <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">Mission</p>
            <h2 className="mt-4 font-serif text-3xl text-foreground">Purpose and Operating Principles</h2>
            <p className="mt-6 text-muted-foreground">
              To advance a peaceful, lawful transition for Iran—one that honors all faiths, protects every citizen equally, upholds human dignity, ensures women&apos;s full equality, preserves national unity, and fosters peaceful relations with neighbors.
            </p>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {principles.map((item) => (
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
          <div className="rounded-3xl border border-white/10 bg-card p-8 shadow-soft">
            <h3 className="font-serif text-2xl text-gold">Official Communications</h3>
            <p className="mt-4 text-sm text-muted-foreground">
              All official communications originate only from verified channels. Email authentication (SPF/DKIM/DMARC) is in place to prevent impersonation.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Button asChild size="sm">
                <Link href="/statements">View Statements</Link>
              </Button>
              <Button asChild variant="outline" size="sm">
                <Link href="/contact">Contact</Link>
              </Button>
            </div>
          </div>
          <div className="rounded-3xl border border-gold/40 bg-gradient-to-br from-black/80 to-black/30 p-8 shadow-soft">
            <h3 className="font-serif text-2xl text-gold">Works & Cultural Legacy</h3>
            <p className="mt-4 text-sm text-muted-foreground">
              Visual art, sculpture, and screen work addressing exile, identity, and cultural memory.
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
          <div className="mt-10 grid gap-4 md:grid-cols-3">
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
