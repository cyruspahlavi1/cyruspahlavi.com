import {
  Home,
  User,
  Target,
  Handshake,
  Palette,
  FileText,
  Mail,
  Building,
  Globe,
  Vote,
  Zap,
  Briefcase,
  Download,
  ExternalLink,
  type LucideIcon,
} from 'lucide-react';

export const site = {
  title: 'Cyrus Pahlavi',
  description:
    'Artist, humanitarian, and technologist. Painting, civic initiatives, and privacy-preserving technology.',
};

export const navItems = [
  { label: 'Biography', href: '/biography' },
  { label: 'Mission', href: '/mission' },
  { label: 'Initiatives', href: '/initiatives-and-partners' },
];

export const contactEmails = [
  { label: 'Official Correspondence', value: 'office@cyruspahlavi.com' },
  { label: 'Press Inquiries', value: 'press@cyruspahlavi.com' },
  { label: 'Government Liaison', value: 'gov@cyruspahlavi.com' },
];

export const officialAddress = [
  'Palacestrasse 28,',
  'CH-3780 Gstaad,',
  'Switzerland',
];

export const foundationLinks = [
  { label: 'Parsis Foundation', href: 'https://parsis.foundation', external: true, icon: Building },
  { label: 'Pars Network', href: 'https://pars.network', external: true, icon: Globe },
  { label: 'Pars DAO', href: 'https://pars.vote', external: true, icon: Vote },
  { label: 'MIGA Protocol', href: 'https://migaprotocol.xyz', external: true, icon: Zap },
  { label: 'Lux Fund', href: 'https://lux.fund', external: true, icon: Briefcase },
];

export type CommandItem = {
  label: string;
  href: string;
  external?: boolean;
  icon: LucideIcon;
};

export type CommandGroup = {
  label: string;
  items: CommandItem[];
};

export const commandGroups: CommandGroup[] = [
  {
    label: 'Pages',
    items: [
      { label: 'Home', href: '/', icon: Home },
      { label: 'Biography', href: '/biography', icon: User },
      { label: 'Mission', href: '/mission', icon: Target },
      { label: 'Initiatives', href: '/initiatives-and-partners', icon: Handshake },
      { label: 'Works', href: '/works', icon: Palette },
      { label: 'Statements', href: '/statements', icon: FileText },
      { label: 'Contact', href: '/contact', icon: Mail },
    ],
  },
  {
    label: 'Foundations',
    items: foundationLinks,
  },
  {
    label: 'Documents',
    items: [
      { label: 'Declaration PDF', href: '/official-statements/HRHCP-2026-02-01-01.pdf', external: true, icon: Download },
      { label: 'Declaration HTML', href: '/official-statements/declaration-of-responsibility.html', external: true, icon: ExternalLink },
      { label: 'Mission Statement', href: '/official-statements/mission-statement.html', external: true, icon: ExternalLink },
    ],
  },
];
