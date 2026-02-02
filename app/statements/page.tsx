import Link from 'next/link';
import { Button } from '@/components/ui/button';

const statements = [
  {
    ref: 'HRHCP-2026-02-01-01',
    title: 'Declaration of Responsibility and Intent',
    date: 'February 1, 2026',
    pages: '8 pages',
    description:
      "Comprehensive declaration outlining Cyrus Pahlavi's commitments to Iran's peaceful transition toward constitutional democracy. The document establishes clear pledges on secular governance, equal citizenship, women's full equality, national unity, and peaceful relations with neighbors. Witnessed and attested by Prince Shahram Pahlavi-Nia.",
    pdf: '/official-statements/HRHCP-2026-02-01-01.pdf',
    html: '/official-statements/declaration-of-responsibility.html',
  },
  {
    ref: 'HRHCP-2026-02-01-02',
    title: 'Mission Statement and Operating Principles',
    date: 'February 1, 2026',
    pages: '1 page',
    description:
      'Official mission statement and operating principles. Establishes the framework for advancing peaceful, lawful, and nationally legitimate transition for Iran toward a secular constitutional order.',
    html: '/official-statements/mission-statement.html',
  },
];

export default function StatementsPage() {
  return (
    <main>
      <section className="bg-hero-wash py-20">
        <div className="container">
          <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">Statements</p>
          <h1 className="mt-4 font-serif text-4xl text-gold">Official Statements and Declarations</h1>
          <p className="mt-4 max-w-3xl text-muted-foreground">
            This page contains the authoritative archive of all official statements and declarations. All documents are timestamped and reference-numbered for verification.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="container grid gap-6">
          {statements.map((item) => (
            <div key={item.ref} className="rounded-2xl border border-white/10 bg-card p-7 shadow-soft">
              <div className="flex flex-wrap items-start justify-between gap-4">
                <div>
                  <p className="text-xs uppercase tracking-[0.3em] text-gold">{item.ref}</p>
                  <h2 className="mt-3 font-serif text-2xl text-foreground">{item.title}</h2>
                </div>
                <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                  <p>{item.date}</p>
                  <p>{item.pages}</p>
                </div>
              </div>
              <p className="mt-4 text-sm text-muted-foreground">{item.description}</p>
              <div className="mt-6 flex flex-wrap gap-3">
                {item.pdf ? (
                  <Button asChild size="sm">
                    <Link href={item.pdf} target="_blank">
                      Download PDF
                    </Link>
                  </Button>
                ) : null}
                {item.html ? (
                  <Button asChild size="sm" variant="outline">
                    <Link href={item.html} target="_blank">
                      View HTML Version
                    </Link>
                  </Button>
                ) : null}
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
