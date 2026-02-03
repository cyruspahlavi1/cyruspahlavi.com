import type { Metadata } from 'next';
import { ContactContent } from '@/components/contact-content';

export const metadata: Metadata = {
  title: 'Contact | Cyrus Pahlavi',
  description: 'Official communication channels for HRH Cyrus Pahlavi. All official communications originate only from verified channels.',
  openGraph: {
    title: 'Contact | Cyrus Pahlavi',
    description: 'Official communication channels for HRH Cyrus Pahlavi.',
  },
};

export default function ContactPage() {
  return <ContactContent />;
}
