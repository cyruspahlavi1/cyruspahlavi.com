import type { Metadata } from 'next';
import { NewsContent } from '@/components/news-content';

export const metadata: Metadata = {
  title: 'News & Press Room | Cyrus Pahlavi',
  description: 'Official statements, announcements, and updates on initiatives, investments, and events.',
  openGraph: {
    title: 'News & Press Room | Cyrus Pahlavi',
    description: 'Official statements, announcements, and updates on initiatives, investments, and events.',
  },
};

export default function NewsPage() {
  return <NewsContent />;
}
