import type { Metadata } from 'next';
import { FamilyContent } from '@/components/family-content';

export const metadata: Metadata = {
  title: 'The House of Pahlavi | Cyrus Pahlavi',
  description: 'The Pahlavi dynasty represents a century of dedication to Iran\'s modernization, cultural preservation, and service to the Persian people.',
  openGraph: {
    title: 'The House of Pahlavi | Cyrus Pahlavi',
    description: 'The Pahlavi dynasty represents a century of dedication to Iran\'s modernization, cultural preservation, and service to the Persian people.',
  },
};

export default function FamilyPage() {
  return <FamilyContent />;
}
