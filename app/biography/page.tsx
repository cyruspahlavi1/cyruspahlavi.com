import Image from 'next/image';

export default function BiographyPage() {
  return (
    <main>
      <section className="bg-hero-wash py-20">
        <div className="container">
          <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">Biography</p>
          <h1 className="mt-4 font-serif text-4xl text-gold">Heritage, Legacy, and Contemporary Work</h1>
          <p className="mt-4 max-w-3xl text-muted-foreground">
            His Royal Highness Cyrus Pahlavi represents a lineage deeply connected to Iran's modern history and the ongoing struggle for constitutional democracy.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="container grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <div className="rounded-3xl border border-white/10 bg-card p-6 shadow-soft">
            <Image
              src="/images/cyrus-pahlavi.jpg"
              alt="His Royal Highness Cyrus Pahlavi"
              width={520}
              height={700}
              className="rounded-2xl object-cover"
            />
            <p className="mt-4 text-center text-sm text-muted-foreground">His Royal Highness Cyrus Pahlavi</p>
          </div>
          <div>
            <h2 className="font-serif text-2xl text-gold">Identity and Lineage</h2>
            <p className="mt-4 text-muted-foreground">
              His Royal Highness Cyrus Pahlavi is a member of the Pahlavi family. Public sources describe him as the son of Prince Shahram Pahlavi-Nia and Niloufar Afshar, and the grandson of Her Imperial Highness Princess Ashraf Pahlavi (twin sister of Mohammad Reza Shah Pahlavi).
            </p>
            <div className="mt-6 grid gap-4 sm:grid-cols-3">
              {[
                { label: 'Heritage', value: 'Pahlavi Family' },
                { label: 'Focus', value: 'Constitutional Democracy' },
                { label: 'Mission', value: 'Peaceful Transition' },
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
            <h3 className="font-serif text-xl text-gold">Family Legacy</h3>
            <div className="mt-6 space-y-4 text-sm text-muted-foreground">
              <p>
                Princess Ashraf Pahlavi was known as "La Panthere Noire" for her fortitude and outspoken advocacy. In July 1946, she met with Joseph Stalin in Moscow to defend Iran's sovereignty.
              </p>
              <p>
                Cyrus the Great is remembered for restraint after victory, restoring sanctuaries and returning displaced peoples to rebuild their lives. This is the Iranian standard His Royal Highness claims: strength under law; authority disciplined by conscience; faith honored without compulsion; pluralism protected by citizenship.
              </p>
              <p>
                His grandmother and great-grandmother (Queen Mother Tadj ol-Molouk) insisted Iranian women must be full participants in national life, elevating women's education, legal awareness, and public standing. His Royal Highness continues that legacy and commits to the dignity and security of Iranian women as a non-negotiable foundation of a free Iran.
              </p>
            </div>
          </div>

          <div className="rounded-2xl border border-white/10 bg-card p-8">
            <h3 className="font-serif text-xl text-gold">Public Work and Focus</h3>
            <p className="mt-4 text-sm text-muted-foreground">
              HRH Cyrus Pahlavi's public advocacy focuses on secular governance, equal citizenship, women's full equality, national unity, and a peaceful foreign policy anchored in non-aggression and law. The Office emphasizes documentation of abuses, protection of civilians, and lawful accountability—rejecting collective punishment and revenge.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-card p-8">
            <h3 className="font-serif text-xl text-gold">Current Initiatives</h3>
            <div className="mt-6 grid gap-4 md:grid-cols-3">
              <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                <h4 className="font-semibold text-foreground">Pars Network</h4>
                <p className="mt-2 text-xs text-muted-foreground">
                  Privacy-preserving platform providing resilient communications and public-interest media infrastructure.
                </p>
              </div>
              <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                <h4 className="font-semibold text-foreground">MIGA Protocol</h4>
                <p className="mt-2 text-xs text-muted-foreground">
                  Humanitarian funding initiative supporting the global Persian community through transparent, mission-driven assistance.
                </p>
              </div>
              <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                <h4 className="font-semibold text-foreground">Art Collection</h4>
                <p className="mt-2 text-xs text-muted-foreground">
                  Visual artworks exploring themes of exile, identity, and cultural memory. Featured internationally including Sotheby's auction house.
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-white/10 bg-card p-8">
            <h3 className="font-serif text-xl text-gold">Professional Background</h3>
            <p className="mt-4 text-sm text-muted-foreground">
              HRH Cyrus Pahlavi is a managing partner of Lux Fund and a co-founder and president of Lux Partners Limited (Isle of Man). His work has focused on next-generation privacy and security technologies, including privacy-preserving computation and applied cryptography research.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
