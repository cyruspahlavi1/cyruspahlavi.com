export const site = {
  title: 'Cyrus Pahlavi',
  description:
    'A peaceful future for Iran, built on unity, dignity, and the rule of law.',
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
  { label: 'Cyrus.NGO', href: 'https://cyrus.ngo', external: true },
  { label: 'MIGA Protocol', href: 'https://migaprotocol.xyz', external: true },
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
