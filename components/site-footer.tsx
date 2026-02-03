import Image from 'next/image';
import Link from 'next/link';
import { Mail } from 'lucide-react';

const navColumns = [
  {
    title: 'About',
    links: [
      { label: 'Biography', href: '/biography' },
      { label: 'Mission', href: '/mission' },
      { label: 'Family', href: '/family' },
    ],
  },
  {
    title: 'Work',
    links: [
      { label: 'Works', href: '/works' },
      { label: 'Initiatives', href: '/initiatives-and-partners' },
      { label: 'News', href: '/news' },
    ],
  },
  {
    title: 'Legal',
    links: [
      { label: 'Privacy Policy', href: '/privacy' },
      { label: 'Terms of Use', href: '/terms' },
      { label: 'Contact', href: '/contact' },
    ],
  },
];


export function SiteFooter() {
  return (
    <footer className="border-t border-white/10 bg-gradient-to-b from-neutral-950 to-black">
      {/* Main Footer */}
      <div className="container py-16 md:py-20">
        <div className="grid gap-12 md:gap-16 lg:grid-cols-[240px_1fr]">
          {/* Seal & Brand */}
          <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
            <Image
              src="/images/official-seal.png"
              alt="Official Seal"
              width={180}
              height={180}
              className="h-auto w-36 md:w-44 opacity-90"
            />
            <p className="mt-6 text-sm leading-relaxed text-neutral-500">
              Dedicated to humanitarian service, cultural preservation, and building a more peaceful world.
            </p>
          </div>

          {/* Navigation Columns */}
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 md:gap-12">
            {navColumns.map((column) => (
              <div key={column.title}>
                <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">
                  {column.title}
                </h4>
                <ul className="mt-4 space-y-3">
                  {column.links.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="text-sm text-neutral-400 transition-colors hover:text-white"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            {/* Contact Column - Desktop */}
            <div className="col-span-2 sm:col-span-3 lg:col-span-1 hidden lg:block">
              <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">
                Connect
              </h4>
              <a
                href="mailto:office@cyruspahlavi.com"
                className="mt-4 inline-flex items-center gap-2 text-sm text-neutral-400 transition-colors hover:text-gold"
              >
                <Mail size={14} />
                office@cyruspahlavi.com
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/5">
        <div className="container flex flex-col items-center justify-between gap-4 py-6 text-xs text-neutral-600 md:flex-row">
          <p>&copy; {new Date().getFullYear()} HRH Cyrus Pahlavi. All rights reserved.</p>
          <p className="text-center md:text-right">
            Member of the House of Pahlavi
          </p>
        </div>
      </div>
    </footer>
  );
}
