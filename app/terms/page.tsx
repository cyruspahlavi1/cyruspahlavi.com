import type { Metadata } from 'next';
import { TermsContent } from '@/components/terms-content';

export const metadata: Metadata = {
  title: 'Terms of Use | Cyrus Pahlavi',
  description: 'Terms of use and conditions for cyruspahlavi.com.',
  openGraph: {
    title: 'Terms of Use | Cyrus Pahlavi',
    description: 'Terms of use and conditions for cyruspahlavi.com.',
  },
};

export default function TermsPage() {
  return <TermsContent />;
}
