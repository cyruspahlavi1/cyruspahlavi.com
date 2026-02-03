import type { Metadata } from 'next';
import { PrivacyContent } from '@/components/privacy-content';

export const metadata: Metadata = {
  title: 'Privacy Policy | Cyrus Pahlavi',
  description: 'Privacy policy for cyruspahlavi.com - how we collect, use, and protect your information.',
  openGraph: {
    title: 'Privacy Policy | Cyrus Pahlavi',
    description: 'Privacy policy for cyruspahlavi.com.',
  },
};

export default function PrivacyPage() {
  return <PrivacyContent />;
}
