import Image from 'next/image';
import Link from 'next/link';
import { Facebook, Instagram, Linkedin, Twitter, Github } from 'lucide-react';

const navLinks = [
  { label: 'Biography', href: '/biography' },
  { label: 'Mission', href: '/mission' },
  { label: 'Works', href: '/works' },
  { label: 'Family', href: '/family' },
  { label: 'Initiatives', href: '/initiatives-and-partners' },
  { label: 'News', href: '/news' },
];

const legalLinks = [
  { label: 'Privacy Policy', href: '/privacy' },
  { label: 'Terms of Use', href: '/terms' },
];

const socialLinks = [
  { icon: Twitter, href: 'https://x.com/cyruspahlavi1', label: 'X' },
  { icon: Facebook, href: 'https://facebook.com/cyruspahlavi', label: 'Facebook' },
  { icon: Instagram, href: 'https://instagram.com/cyruspahlavi', label: 'Instagram' },
  { icon: Linkedin, href: 'https://www.linkedin.com/in/cyrus-pahlavi-a741b343/', label: 'LinkedIn' },
  { icon: Github, href: 'https://github.com/cyruspahlavi1', label: 'GitHub' },
];

export function SiteFooter() {
  return (
    <footer className="border-t border-white/10 bg-black">
      {/* Main Footer */}
      <div className="container py-16">
        <div className="grid gap-12 lg:grid-cols-[200px_1fr]">
          {/* Seal */}
          <div className="flex justify-center lg:justify-start">
            <Image
              src="/images/official-seal.png"
              alt="Official Seal"
              width={160}
              height={160}
              className="h-auto w-40 opacity-80"
            />
          </div>

          {/* Navigation & Info */}
          <div className="flex flex-col justify-between gap-8">
            <div className="flex flex-wrap items-center justify-center gap-8 text-sm lg:justify-start">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-neutral-400 transition-colors hover:text-gold"
                >
                  {link.label}
                </Link>
              ))}
            </div>

            <div className="flex flex-col items-center gap-6 lg:flex-row lg:justify-between">
              <p className="text-sm text-neutral-500">
                &copy; {new Date().getFullYear()} Cyrus Pahlavi
              </p>

              <div className="flex items-center gap-6">
                {legalLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="text-sm text-neutral-500 transition-colors hover:text-gold"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>

              <div className="flex items-center gap-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noreferrer"
                    className="text-neutral-500 transition-colors hover:text-gold"
                    aria-label={social.label}
                  >
                    <social.icon size={18} />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
