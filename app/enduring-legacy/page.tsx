import Image from 'next/image';
import { Quote } from 'lucide-react';

export default function EnduringLegacyPage() {
  return (
    <main>
      {/* Hero */}
      <section className="bg-black py-24">
        <div className="container">
          <div className="mx-auto max-w-4xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.4em] text-gold">
              Legacy
            </p>
            <h1 className="mt-6 font-serif text-4xl leading-tight text-white md:text-5xl lg:text-6xl">
              Leadership shaped by the legacy of previous generations
            </h1>
            <p className="mt-8 text-lg text-neutral-400">
              HRH Cyrus Pahlavi firmly believes that a true leader has the courage to be open with his people and care for others as family, extending from the deep-rooted values of hospitality and community.
            </p>
          </div>
        </div>
      </section>

      {/* Transformation Section */}
      <section className="border-t border-white/10 bg-neutral-950 py-24">
        <div className="container">
          <div className="mx-auto max-w-4xl">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gold">
              A Continued Legacy of Transformation
            </p>
            <p className="mt-8 text-xl leading-relaxed text-white">
              The values passed on by previous generations are a guiding light for the present and future. His Royal Highness continues to draw inspiration from a commitment to leading by example and a people-centred legacy.
            </p>
            <div className="mt-12 rounded-xl border border-white/10 bg-black p-10">
              <Quote className="h-8 w-8 text-gold/40" />
              <p className="mt-6 font-serif text-xl italic leading-relaxed text-white">
                &ldquo;This legacy is precious to us all—formed by our ancestors, and continuing through us and the generations to come who will carry the flag forward. Our responsibility to past and future generations is to preserve what is precious with all the strength, effort and determination that God has bestowed upon us.&rdquo;
              </p>
              <p className="mt-6 text-sm font-semibold uppercase tracking-wider text-gold">
                HRH Cyrus Pahlavi
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Historical Leaders Section */}
      <section className="border-t border-white/10 bg-black py-24">
        <div className="container">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="font-serif text-3xl text-white md:text-4xl">
              Honouring the Values of Our Ancestors
            </h2>
            <p className="mt-8 text-lg text-neutral-400">
              Traditional values such as community, generosity, and inclusivity are a profound source of pride and belonging. HRH Cyrus Pahlavi has made it a priority to ensure that youth remain connected to the culture and values of their ancestors.
            </p>
          </div>
          <div className="mt-16 grid gap-8 md:grid-cols-2">
            <div className="rounded-xl border border-white/10 bg-neutral-950 p-10">
              <h3 className="font-serif text-2xl text-gold">Cyrus the Great</h3>
              <p className="mt-2 text-sm text-neutral-500">Founder of the Persian Empire, 559-530 BCE</p>
              <p className="mt-6 text-neutral-400">
                Across centuries and communities, Cyrus the Great is remembered for restraint after victory—for restoring sanctuaries and returning displaced peoples to rebuild their lives. The Cyrus Cylinder has been invoked as a global symbol of human dignity and fundamental rights.
              </p>
            </div>
            <div className="rounded-xl border border-white/10 bg-neutral-950 p-10">
              <h3 className="font-serif text-2xl text-gold">The Pahlavi Legacy</h3>
              <p className="mt-2 text-sm text-neutral-500">Modern Iran, 1925-1979</p>
              <p className="mt-6 text-neutral-400">
                Under the Pahlavi era, the foundations of a modern civil state were built: universities expanded, national institutions strengthened, and the law began to recognize all citizens as full participants in national life.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Commitment Section */}
      <section className="border-t border-white/10 bg-neutral-950 py-24">
        <div className="container">
          <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gold">
                A Commitment to Heritage
              </p>
              <h2 className="mt-6 font-serif text-3xl leading-tight text-white md:text-4xl">
                Preserving heritage while advancing toward the future
              </h2>
              <p className="mt-8 text-lg text-neutral-400">
                HRH is committed to preserving heritage and maintaining a longstanding spirit of unity and human fraternity. Consistent with this vision, he welcomes people of all backgrounds who are contributing to success in many fields.
              </p>
              <p className="mt-6 text-neutral-500">
                Following in the footsteps of previous generations, and inspired by the fortitude and resilience of those who came before, HRH Cyrus Pahlavi is determined to ensure that rich history and heritage remain a guiding light as we continue an ambitious march into the future.
              </p>
            </div>
            <div className="rounded-xl border border-white/10 bg-black p-10">
              <Quote className="h-8 w-8 text-gold/40" />
              <p className="mt-6 font-serif text-xl italic leading-relaxed text-white">
                &ldquo;We are fortunate to have people who have proven their spirit and determination to overcome the toughest challenges. Our pride in our people is infinite.&rdquo;
              </p>
              <p className="mt-6 text-sm font-semibold uppercase tracking-wider text-gold">
                HRH Cyrus Pahlavi
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Grid */}
      <section className="border-t border-white/10 bg-black py-24">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="font-serif text-3xl text-white md:text-4xl">
              The standard we claim
            </h2>
            <p className="mt-6 text-lg text-neutral-400">
              Strength under law. Authority disciplined by conscience. Faith honoured without compulsion. Pluralism protected by citizenship.
            </p>
          </div>
          <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-xl border border-white/10 bg-neutral-950 p-8 text-center">
              <h4 className="font-serif text-xl text-gold">Strength</h4>
              <p className="mt-4 text-sm text-neutral-500">
                Power exercised with wisdom and restraint
              </p>
            </div>
            <div className="rounded-xl border border-white/10 bg-neutral-950 p-8 text-center">
              <h4 className="font-serif text-xl text-gold">Conscience</h4>
              <p className="mt-4 text-sm text-neutral-500">
                Authority guided by moral principle
              </p>
            </div>
            <div className="rounded-xl border border-white/10 bg-neutral-950 p-8 text-center">
              <h4 className="font-serif text-xl text-gold">Tolerance</h4>
              <p className="mt-4 text-sm text-neutral-500">
                Faith honoured without compulsion
              </p>
            </div>
            <div className="rounded-xl border border-white/10 bg-neutral-950 p-8 text-center">
              <h4 className="font-serif text-xl text-gold">Citizenship</h4>
              <p className="mt-4 text-sm text-neutral-500">
                Pluralism protected under law
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
