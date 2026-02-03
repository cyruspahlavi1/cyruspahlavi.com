import Image from 'next/image';
import Link from 'next/link';
import { Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';

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
  { icon: Twitter, href: 'https://x.com/cyruspahlavi', label: 'X' },
  { icon: Facebook, href: 'https://facebook.com/cyruspahlavi', label: 'Facebook' },
  { icon: Instagram, href: 'https://instagram.com/cyruspahlavi', label: 'Instagram' },
  { icon: Linkedin, href: 'https://linkedin.com/in/cyruspahlavi', label: 'LinkedIn' },
];

export function SiteFooter() {
  return (
    <footer className="border-t border-white/10 bg-black">
      {/* Main Footer */}
      <div className="container py-16">
        <div className="flex flex-wrap items-center justify-center gap-8 text-sm">
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
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container flex flex-col items-center justify-between gap-6 py-8 md:flex-row">
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
    </footer>
  );
}
