'use client';

import * as React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { navItems } from '@/lib/site-data';
import { cn } from '@/lib/utils';

export function SiteHeader() {
  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    const handler = () => setOpen(false);
    window.addEventListener('resize', handler);
    return () => window.removeEventListener('resize', handler);
  }, []);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-black/70 backdrop-blur-xl">
      <div className="container flex items-center justify-between gap-6 py-4">
        <Link href="/" className="flex items-center gap-3 text-foreground">
          <div className="h-12 w-12 rounded-full border border-gold/60 p-2">
            <Image src="/images/official-seal.png" alt="Official Seal" width={48} height={48} className="h-full w-full object-contain" />
          </div>
          <div className="hidden sm:flex flex-col">
            <span className="text-xs uppercase tracking-[0.3em] text-muted-foreground">
              Office of His Royal Highness
            </span>
            <span className="font-serif text-lg tracking-[0.2em] text-gold">Cyrus Pahlavi</span>
          </div>
        </Link>

        <nav className="hidden xl:flex items-center gap-6 text-sm font-semibold text-muted-foreground">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="relative transition-colors hover:text-gold"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <button
          type="button"
          className="inline-flex items-center justify-center rounded-lg border border-white/10 bg-white/5 p-2 text-muted-foreground xl:hidden"
          aria-label="Toggle menu"
          onClick={() => setOpen((prev) => !prev)}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      <div
        className={cn(
          'xl:hidden border-t border-white/10 bg-black/90 backdrop-blur-xl transition-all',
          open ? 'max-h-[540px] opacity-100' : 'max-h-0 opacity-0'
        )}
      >
        <div className="container flex flex-col gap-4 py-6 text-sm font-semibold text-muted-foreground">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="transition-colors hover:text-gold"
              onClick={() => setOpen(false)}
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
}
