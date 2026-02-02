import { contactEmails } from '@/lib/site-data';

export default function ContactPage() {
  return (
    <main>
      <section className="bg-hero-wash py-20">
        <div className="container">
          <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">Contact</p>
          <h1 className="mt-4 font-serif text-4xl text-gold">Official Channels</h1>
          <p className="mt-4 max-w-3xl text-muted-foreground">
            All official communications originate only from verified channels. Email authentication (SPF/DKIM/DMARC) is in place to prevent impersonation.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="container grid gap-6 md:grid-cols-3">
          {contactEmails.map((item) => (
            <div key={item.value} className="rounded-2xl border border-white/10 bg-card p-6 shadow-soft">
              <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">{item.label}</p>
              <p className="mt-4 text-lg font-semibold text-foreground">{item.value}</p>
            </div>
          ))}
          <div className="rounded-2xl border border-white/10 bg-card p-6 shadow-soft">
            <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">Official Website</p>
            <p className="mt-4 text-lg font-semibold text-foreground">cyruspahlavi.com</p>
          </div>
        </div>
      </section>
    </main>
  );
}
