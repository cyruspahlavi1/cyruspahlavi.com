'use client';

import * as React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Search, Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';
import { HamburgerIcon } from './hamburger-icon';
import { cn } from '@/lib/utils';
import { CommandPalette } from './command-palette';
import { LanguageSwitcher } from './language-switcher';

const navItems = [
  { label: 'Biography', href: '/biography' },
  { label: 'Mission', href: '/mission' },
  { label: 'Works', href: '/works' },
  { label: 'Family', href: '/family' },
  { label: 'Initiatives', href: '/initiatives-and-partners' },
  { label: 'News', href: '/news' },
];

const socialLinks = [
  { icon: Facebook, href: 'https://facebook.com/cyruspahlavi', label: 'Facebook' },
  { icon: Instagram, href: 'https://instagram.com/cyruspahlavi', label: 'Instagram' },
  { icon: Linkedin, href: 'https://linkedin.com/in/cyruspahlavi', label: 'LinkedIn' },
  { icon: Twitter, href: 'https://x.com/cyruspahlavi', label: 'X' },
];

export function SiteHeader() {
  const [open, setOpen] = React.useState(false);
  const [paletteOpen, setPaletteOpen] = React.useState(false);

  React.useEffect(() => {
    const handler = () => setOpen(false);
    window.addEventListener('resize', handler);
    return () => window.removeEventListener('resize', handler);
  }, []);

  React.useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === 'k') {
        event.preventDefault();
        setPaletteOpen((prev) => !prev);
      }
      if (event.key === 'Escape') {
        setPaletteOpen(false);
        setOpen(false);
      }
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <>
      <header className="sticky top-0 z-50 border-b border-white/10 bg-black/95 backdrop-blur-xl">
        <div className="container flex items-center justify-between gap-6 py-4">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <Image
              src="/cyrus-signature.png"
              alt="Cyrus Pahlavi"
              width={140}
              height={38}
              className="signature-logo"
              priority
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden xl:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-neutral-300 transition-colors hover:text-gold"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Right Side */}
          <div className="hidden xl:flex items-center gap-4">
            {/* Social Links */}
            <div className="flex items-center gap-2">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-lg p-2 text-neutral-400 transition-colors hover:bg-white/5 hover:text-gold"
                  aria-label={social.label}
                >
                  <social.icon size={16} />
                </a>
              ))}
            </div>

            <div className="h-6 w-px bg-white/10" />

            <LanguageSwitcher />

            <button
              type="button"
              onClick={() => setPaletteOpen(true)}
              className="rounded-lg p-2 text-neutral-400 transition-colors hover:bg-white/5 hover:text-gold"
              aria-label="Search"
            >
              <Search size={18} />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            className="inline-flex items-center justify-center rounded-lg border border-white/10 bg-white/5 p-3 text-neutral-400 xl:hidden"
            aria-label="Toggle menu"
            onClick={() => setOpen((prev) => !prev)}
          >
            <HamburgerIcon open={open} />
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={cn(
            'xl:hidden border-t border-white/10 bg-black/95 backdrop-blur-xl transition-all overflow-hidden',
            open ? 'max-h-[600px] opacity-100' : 'max-h-0 opacity-0'
          )}
        >
          <div className="container py-6">
            <nav className="flex flex-col gap-1">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="rounded-lg px-4 py-3 text-sm font-medium text-neutral-300 transition-colors hover:bg-white/5 hover:text-gold"
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            <div className="mt-6 flex items-center justify-between border-t border-white/10 pt-6">
              <div className="flex items-center gap-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-lg p-2 text-neutral-400 transition-colors hover:text-gold"
                    aria-label={social.label}
                  >
                    <social.icon size={18} />
                  </a>
                ))}
              </div>
              <LanguageSwitcher />
            </div>
          </div>
        </div>
      </header>

      <CommandPalette isOpen={paletteOpen} onClose={() => setPaletteOpen(false)} />
    </>
  );
}
