'use client';

import { commandGroups } from '@/lib/site-data';

export function SiteMenuPanel({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  if (!open) return null;

  return (
    <div className="absolute right-0 top-full mt-3 w-[360px] rounded-2xl border border-white/10 bg-black/90 p-4 shadow-2xl">
      {commandGroups.map((group) => (
        <div key={group.label} className="mb-4">
          <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">{group.label}</p>
          <div className="mt-2 grid gap-2">
            {group.items.map((item) => (
              <a
                key={item.href}
                href={item.href}
                target={item.external ? '_blank' : undefined}
                rel={item.external ? 'noreferrer' : undefined}
                className="rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-xs text-foreground transition hover:border-gold/60"
                onClick={onClose}
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
