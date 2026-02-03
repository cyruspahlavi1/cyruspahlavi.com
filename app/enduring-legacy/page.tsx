import type { Metadata } from 'next';
import { EnduringLegacyContent } from '@/components/enduring-legacy-content';

export const metadata: Metadata = {
  title: 'Enduring Legacy | Cyrus Pahlavi',
  description: 'The enduring legacy of the Pahlavi family and their continued commitment to service, progress, and the Persian people.',
  openGraph: {
    title: 'Enduring Legacy | Cyrus Pahlavi',
    description: 'The enduring legacy of the Pahlavi family and their continued commitment to service, progress, and the Persian people.',
  },
};

export default function EnduringLegacyPage() {
  return <EnduringLegacyContent />;
}
