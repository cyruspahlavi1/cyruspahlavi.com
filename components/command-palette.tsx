'use client';

import * as React from 'react';
import { commandGroups } from '@/lib/site-data';

type CommandItem = {
  label: string;
  href: string;
  external?: boolean;
};

type CommandGroup = {
  label: string;
  items: CommandItem[];
};

export function CommandPalette({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  const [query, setQuery] = React.useState('');
  const inputRef = React.useRef<HTMLInputElement>(null);

  React.useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
    } else {
      setQuery('');
    }
  }, [isOpen]);

  const filteredGroups = React.useMemo(() => {
    if (!query.trim()) return commandGroups as CommandGroup[];
    const q = query.toLowerCase();
    return commandGroups
      .map((group) => ({
        ...group,
        items: group.items.filter((item) => item.label.toLowerCase().includes(q)),
      }))
      .filter((group) => group.items.length > 0) as CommandGroup[];
  }, [query]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[60] flex items-start justify-center bg-black/70 p-6 backdrop-blur">
      <div className="w-full max-w-2xl rounded-2xl border border-white/10 bg-black/90 shadow-2xl">
        <div className="flex items-center gap-3 border-b border-white/10 px-5 py-4">
          <div className="text-xs uppercase tracking-[0.3em] text-muted-foreground">Search</div>
          <input
            ref={inputRef}
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Type to search pages and links..."
            className="ml-auto w-full bg-transparent text-sm text-foreground outline-none"
          />
          <button
            type="button"
            onClick={onClose}
            className="rounded-md border border-white/10 px-2 py-1 text-xs text-muted-foreground hover:text-foreground"
          >
            Esc
          </button>
        </div>
        <div className="max-h-[60vh] overflow-y-auto px-5 py-4">
          {filteredGroups.map((group) => (
            <div key={group.label} className="mb-6">
              <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">{group.label}</p>
              <div className="mt-3 grid gap-2">
                {group.items.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    target={item.external ? '_blank' : undefined}
                    rel={item.external ? 'noreferrer' : undefined}
                    className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-foreground transition hover:border-gold/60"
                    onClick={onClose}
                  >
                    {item.label}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
