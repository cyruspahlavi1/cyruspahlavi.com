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
  { label: 'Parsis Foundation', href: 'https://parsis.foundation', external: true },
  { label: 'Pars Network', href: 'https://pars.network', external: true },
  { label: 'Pars DAO', href: 'https://pars.vote', external: true },
  { label: 'MIGA Protocol', href: 'https://migaprotocol.xyz', external: true },
  { label: 'Lux Fund', href: 'https://lux.fund', external: true },
];

export const commandGroups = [
  {
    label: 'Pages',
    items: [
      { label: 'Home', href: '/' },
      { label: 'Biography', href: '/biography' },
      { label: 'Mission', href: '/mission' },
      { label: 'Initiatives', href: '/initiatives-and-partners' },
      { label: 'Works', href: '/works' },
      { label: 'Statements', href: '/statements' },
      { label: 'Contact', href: '/contact' },
    ],
  },
  {
    label: 'Foundations',
    items: foundationLinks,
  },
  {
    label: 'Documents',
    items: [
      { label: 'Declaration PDF', href: '/official-statements/HRHCP-2026-02-01-01.pdf', external: true },
      { label: 'Declaration HTML', href: '/official-statements/declaration-of-responsibility.html', external: true },
      { label: 'Mission Statement', href: '/official-statements/mission-statement.html', external: true },
    ],
  },
];
