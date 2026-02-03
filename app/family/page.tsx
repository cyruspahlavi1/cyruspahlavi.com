import { Quote, Crown, History, Heart, Globe } from 'lucide-react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

const familyMembers = [
  {
    name: 'Reza Shah Pahlavi',
    title: 'Founder of the Pahlavi Dynasty',
    years: '1878–1944',
    relation: 'Great-Grandfather',
    description: 'Founded modern Iran in 1925, unifying the nation and beginning an era of unprecedented modernization. Established the foundations of the modern Iranian state.',
  },
  {
    name: 'Mohammad Reza Shah Pahlavi',
    title: 'Shah of Iran',
    years: '1919–1980',
    relation: 'Great-Uncle',
    description: 'The last Shah of Iran, who ruled from 1941 until 1979. Modernized Iran\'s infrastructure, education system, and economy. Founder of the White Revolution reforms.',
  },
  {
    name: 'Crown Prince Reza Pahlavi',
    title: 'Crown Prince of Iran',
    years: 'Born 1960',
    relation: 'Cousin',
    description: 'Eldest son of the late Shah. Advocate for secular democracy and human rights in Iran. Continues the family\'s commitment to serving the Iranian people.',
  },
  {
    name: 'Empress Farah Pahlavi',
    title: 'Shahbanou of Iran',
    years: 'Born 1938',
    relation: 'Extended Family',
    description: 'Queen Consort of Iran from 1959 to 1979. Champion of arts, culture, and education. Continues humanitarian work and advocacy for Iranian cultural heritage.',
  },
];

const legacyMilestones = [
  {
    year: '1925',
    title: 'Founding of the Pahlavi Dynasty',
    description: 'Reza Shah Pahlavi established modern Iran, unifying the nation and beginning an era of modernization.',
  },
  {
    year: '1963',
    title: 'The White Revolution',
    description: 'Land reform, women\'s suffrage, and literacy programs transformed Iranian society.',
  },
  {
    year: '1971',
    title: '2,500 Year Celebration',
    description: 'International celebration of Persian civilization at Persepolis, honoring 25 centuries of monarchy.',
  },
  {
    year: 'Present',
    title: 'Continued Service',
    description: 'The Pahlavi family continues its commitment to humanitarian causes, cultural preservation, and advocacy for human rights.',
  },
];

export default function FamilyPage() {
  return (
    <main>
      {/* Hero */}
      <section className="bg-black py-24">
        <div className="container">
          <div className="mx-auto max-w-4xl text-center">
            <Crown className="mx-auto h-16 w-16 text-gold" />
            <p className="mt-8 text-xs font-semibold uppercase tracking-[0.4em] text-gold">
              The House of Pahlavi
            </p>
            <h1 className="mt-6 font-serif text-4xl leading-tight text-white md:text-5xl lg:text-6xl">
              Family & Heritage
            </h1>
            <p className="mt-8 text-lg text-neutral-400">
              The Pahlavi dynasty represents a century of dedication to Iran's modernization, cultural preservation, and service to the Persian people. Today, this legacy continues through humanitarian work and advocacy for human dignity worldwide.
            </p>
          </div>
        </div>
      </section>

      {/* Family Members */}
      <section className="border-t border-white/10 bg-neutral-950 py-24">
        <div className="container">
          <div className="mb-16">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gold">
              The Royal Family
            </p>
            <h2 className="mt-4 font-serif text-3xl text-white md:text-4xl">
              Dedicated to Service
            </h2>
          </div>
          <div className="grid gap-8 md:grid-cols-2">
            {familyMembers.map((member) => (
              <div
                key={member.name}
                className="rounded-xl border border-white/10 bg-black p-8"
              >
                <p className="text-xs font-semibold uppercase tracking-wider text-gold">
                  {member.relation}
                </p>
                <h3 className="mt-4 font-serif text-2xl text-white">{member.name}</h3>
                <p className="mt-1 text-sm text-neutral-500">{member.title} &middot; {member.years}</p>
                <p className="mt-4 text-neutral-400">{member.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quote */}
      <section className="border-t border-gold/20 bg-black py-20">
        <div className="container">
          <div className="mx-auto max-w-4xl text-center">
            <Quote className="mx-auto h-12 w-12 text-gold/40" />
            <blockquote className="mt-8 font-serif text-2xl italic leading-relaxed text-white md:text-3xl">
              &ldquo;The legacy of our family is not measured in years of reign, but in the lives we touched and the bridges we built between peoples and cultures.&rdquo;
            </blockquote>
            <cite className="mt-8 block text-sm font-semibold uppercase tracking-[0.3em] text-gold">
              HRH Cyrus Pahlavi
            </cite>
          </div>
        </div>
      </section>

      {/* Legacy Timeline */}
      <section className="border-t border-white/10 bg-neutral-950 py-24">
        <div className="container">
          <div className="mb-16 text-center">
            <History className="mx-auto h-10 w-10 text-gold" />
            <h2 className="mt-6 font-serif text-3xl text-white md:text-4xl">
              A Century of Progress
            </h2>
            <p className="mt-4 text-neutral-400">
              Key moments in the Pahlavi dynasty's commitment to Iran's advancement
            </p>
          </div>
          <div className="mx-auto max-w-3xl">
            <div className="space-y-8">
              {legacyMilestones.map((milestone, index) => (
                <div
                  key={milestone.year}
                  className="flex gap-8"
                >
                  <div className="flex flex-col items-center">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full border border-gold bg-black">
                      <span className="text-sm font-bold text-gold">{index + 1}</span>
                    </div>
                    {index < legacyMilestones.length - 1 && (
                      <div className="mt-2 h-full w-px bg-white/10" />
                    )}
                  </div>
                  <div className="flex-1 pb-8">
                    <span className="text-sm font-semibold text-gold">{milestone.year}</span>
                    <h3 className="mt-2 font-serif text-xl text-white">{milestone.title}</h3>
                    <p className="mt-2 text-neutral-400">{milestone.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="border-t border-white/10 bg-black py-24">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="font-serif text-3xl text-white md:text-4xl">
              Enduring Values
            </h2>
            <p className="mt-6 text-lg text-neutral-400">
              The values that have guided the Pahlavi family for a century continue to inspire our work today.
            </p>
          </div>
          <div className="mt-16 grid gap-6 md:grid-cols-3">
            <div className="rounded-xl border border-white/10 bg-neutral-950 p-8 text-center">
              <Heart className="mx-auto h-8 w-8 text-gold" />
              <h4 className="mt-4 font-serif text-xl text-gold">Service</h4>
              <p className="mt-4 text-sm text-neutral-500">
                Dedication to the wellbeing and prosperity of all people
              </p>
            </div>
            <div className="rounded-xl border border-white/10 bg-neutral-950 p-8 text-center">
              <Crown className="mx-auto h-8 w-8 text-gold" />
              <h4 className="mt-4 font-serif text-xl text-gold">Dignity</h4>
              <p className="mt-4 text-sm text-neutral-500">
                Upholding human dignity and equal rights for all
              </p>
            </div>
            <div className="rounded-xl border border-white/10 bg-neutral-950 p-8 text-center">
              <Globe className="mx-auto h-8 w-8 text-gold" />
              <h4 className="mt-4 font-serif text-xl text-gold">Unity</h4>
              <p className="mt-4 text-sm text-neutral-500">
                Building bridges between peoples and cultures worldwide
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-white/10 bg-neutral-950 py-24">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="font-serif text-3xl text-white">
              Continuing the Legacy
            </h2>
            <p className="mt-6 text-neutral-400">
              Learn more about HRH Cyrus Pahlavi's work in humanitarian causes, cultural preservation, and global development.
            </p>
            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <Link
                href="/mission"
                className="inline-flex items-center gap-2 rounded-full bg-gold px-6 py-3 text-sm font-semibold text-black transition-colors hover:bg-gold/90"
              >
                Our Mission
                <ArrowRight size={16} />
              </Link>
              <Link
                href="/initiatives-and-partners"
                className="inline-flex items-center gap-2 rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/5"
              >
                Current Initiatives
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
