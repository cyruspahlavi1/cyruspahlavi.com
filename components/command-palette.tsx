'use client';

import * as React from 'react';
import { Search, ArrowRight, Command } from 'lucide-react';
import { commandGroups, type CommandGroup, type CommandItem } from '@/lib/site-data';

export function CommandPalette({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  const [query, setQuery] = React.useState('');
  const [selectedIndex, setSelectedIndex] = React.useState(0);
  const inputRef = React.useRef<HTMLInputElement>(null);
  const listRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
      setSelectedIndex(0);
    } else {
      setQuery('');
    }
  }, [isOpen]);

  const filteredGroups = React.useMemo(() => {
    if (!query.trim()) return commandGroups;
    const q = query.toLowerCase();
    return commandGroups
      .map((group) => ({
        ...group,
        items: group.items.filter((item) => item.label.toLowerCase().includes(q)),
      }))
      .filter((group) => group.items.length > 0);
  }, [query]);

  // Flatten items for keyboard navigation
  const allItems = React.useMemo(() => {
    return filteredGroups.flatMap((group) => group.items);
  }, [filteredGroups]);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    switch (e.key) {
      case 'ArrowDown':
        e.preventDefault();
        setSelectedIndex((prev) => (prev + 1) % allItems.length);
        break;
      case 'ArrowUp':
        e.preventDefault();
        setSelectedIndex((prev) => (prev - 1 + allItems.length) % allItems.length);
        break;
      case 'Enter':
        e.preventDefault();
        if (allItems[selectedIndex]) {
          const item = allItems[selectedIndex];
          if (item.external) {
            window.open(item.href, '_blank');
          } else {
            window.location.href = item.href;
          }
          onClose();
        }
        break;
    }
  };

  if (!isOpen) return null;

  let itemIndex = -1;

  return (
    <div
      className="fixed inset-0 z-[60] flex items-start justify-center bg-black/80 p-4 pt-[15vh] backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="w-full max-w-xl overflow-hidden rounded-xl border border-white/10 bg-neutral-950 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search Header */}
        <div className="flex items-center gap-3 border-b border-white/10 px-4 py-3">
          <Search className="h-5 w-5 text-neutral-500" />
          <input
            ref={inputRef}
            value={query}
            onChange={(event) => {
              setQuery(event.target.value);
              setSelectedIndex(0);
            }}
            onKeyDown={handleKeyDown}
            placeholder="Search pages, foundations, documents..."
            className="flex-1 bg-transparent text-sm text-white placeholder:text-neutral-500 outline-none"
          />
          <div className="flex items-center gap-1">
            <kbd className="hidden sm:inline-flex h-5 items-center justify-center rounded border border-white/10 bg-white/5 px-1.5 text-[10px] font-medium text-neutral-400">
              ESC
            </kbd>
          </div>
        </div>

        {/* Results */}
        <div ref={listRef} className="max-h-[60vh] overflow-y-auto p-2">
          {filteredGroups.length === 0 ? (
            <div className="px-4 py-8 text-center text-sm text-neutral-500">
              No results found for &ldquo;{query}&rdquo;
            </div>
          ) : (
            filteredGroups.map((group) => (
              <div key={group.label} className="mb-2">
                <div className="px-3 py-2 text-xs font-medium uppercase tracking-wider text-neutral-500">
                  {group.label}
                </div>
                <div className="space-y-0.5">
                  {group.items.map((item) => {
                    itemIndex++;
                    const isSelected = itemIndex === selectedIndex;
                    const Icon = item.icon;
                    return (
                      <a
                        key={item.href}
                        href={item.href}
                        target={item.external ? '_blank' : undefined}
                        rel={item.external ? 'noreferrer' : undefined}
                        className={`flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm transition-colors ${
                          isSelected
                            ? 'bg-gold/10 text-gold'
                            : 'text-neutral-300 hover:bg-white/5 hover:text-white'
                        }`}
                        onClick={onClose}
                        onMouseEnter={() => setSelectedIndex(itemIndex)}
                      >
                        <Icon className={`h-4 w-4 flex-shrink-0 ${isSelected ? 'text-gold' : 'text-neutral-500'}`} />
                        <span className="flex-1">{item.label}</span>
                        {item.external && (
                          <ArrowRight className={`h-3 w-3 ${isSelected ? 'text-gold' : 'text-neutral-600'}`} />
                        )}
                      </a>
                    );
                  })}
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between border-t border-white/10 px-4 py-2.5 text-xs text-neutral-500">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1">
              <kbd className="inline-flex h-4 w-4 items-center justify-center rounded border border-white/10 bg-white/5 text-[10px]">↑</kbd>
              <kbd className="inline-flex h-4 w-4 items-center justify-center rounded border border-white/10 bg-white/5 text-[10px]">↓</kbd>
              <span className="ml-1">to navigate</span>
            </span>
            <span className="flex items-center gap-1">
              <kbd className="inline-flex h-4 items-center justify-center rounded border border-white/10 bg-white/5 px-1 text-[10px]">↵</kbd>
              <span className="ml-1">to select</span>
            </span>
          </div>
          <div className="flex items-center gap-1.5">
            <Command className="h-3 w-3" />
            <span>K</span>
          </div>
        </div>
      </div>
    </div>
  );
}
