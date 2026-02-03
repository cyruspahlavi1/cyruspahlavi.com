import type { Metadata } from 'next';
import { StatementsContent } from '@/components/statements-content';

export const metadata: Metadata = {
  title: 'Statements | Cyrus Pahlavi',
  description: 'Official statements and addresses from HRH Cyrus Pahlavi on matters of importance.',
  openGraph: {
    title: 'Statements | Cyrus Pahlavi',
    description: 'Official statements and addresses from HRH Cyrus Pahlavi on matters of importance.',
  },
};

export default function StatementsPage() {
  return <StatementsContent />;
}
