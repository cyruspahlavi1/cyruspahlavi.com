export default function StrategicPrioritiesPage() {
  const priorities = [
    {
      title: 'Legal and Constitutional Order',
      description: 'Advance a lawful transition anchored in constitutional constraints, due process, and civil protections.',
    },
    {
      title: 'Equal Citizenship',
      description: 'Uphold one civil law for all Iranians across faith, language, region, and political view.',
    },
    {
      title: 'Women’s Full Equality',
      description: 'Ensure the dignity, security, and full participation of Iranian women as a non-negotiable foundation.',
    },
    {
      title: 'Protection of Civilians',
      description: 'Prioritize preventing harm to civilians, prisoners of conscience, journalists, lawyers, and medical personnel.',
    },
    {
      title: 'National Unity',
      description: 'Safeguard Iran’s territorial integrity with disputes resolved by courts and ballots.',
    },
    {
      title: 'Documentation and Accountability',
      description: 'Support evidence preservation and independent investigation to ensure lawful accountability.',
    },
  ];

  return (
    <main>
      <section className="bg-hero-wash py-20">
        <div className="container">
          <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">Strategic Priorities</p>
          <h1 className="mt-4 font-serif text-4xl text-gold">Priorities for a Lawful Transition</h1>
          <p className="mt-4 max-w-3xl text-muted-foreground">
            The Office advances a peaceful, lawful, and nationally legitimate transition toward a secular constitutional order that protects equal citizenship, human dignity, and peaceful relations with neighbors.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="container grid gap-6 md:grid-cols-2">
          {priorities.map((item) => (
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
