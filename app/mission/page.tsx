import type { Metadata } from 'next';
import { MissionContent } from '@/components/mission-content';

export const metadata: Metadata = {
  title: 'Mission | Cyrus Pahlavi',
  description: 'Improving quality of life for humanity and envisioning a better world for all through sustainability, education, and international cooperation.',
  openGraph: {
    title: 'Mission | Cyrus Pahlavi',
    description: 'Improving quality of life for humanity and envisioning a better world for all through sustainability, education, and international cooperation.',
  },
};

export default function MissionPage() {
  return <MissionContent />;
}
