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

export default function MissionPage() {
  return (
    <main>
      <section className="bg-hero-wash py-20">
        <div className="container">
          <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">Mission</p>
          <h1 className="mt-4 font-serif text-4xl text-gold">Purpose and Operating Principles</h1>
          <p className="mt-4 max-w-3xl text-muted-foreground">
            To advance a peaceful, lawful transition for Iran—one that honors all faiths, protects every citizen equally, upholds human dignity, ensures women&apos;s full equality, preserves national unity, and fosters peaceful relations with neighbors.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="container grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {principles.map((item) => (
            <div key={item.title} className="rounded-2xl border border-white/10 bg-card p-6 shadow-soft">
              <h3 className="font-serif text-xl text-gold">{item.title}</h3>
              <p className="mt-3 text-sm text-muted-foreground">{item.description}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
