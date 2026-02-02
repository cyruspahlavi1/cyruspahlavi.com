'use client';

import { cn } from '@/lib/utils';

interface HamburgerIconProps {
  open: boolean;
  className?: string;
}

export function HamburgerIcon({ open, className }: HamburgerIconProps) {
  return (
    <div className={cn('relative flex h-5 w-6 flex-col items-center justify-center', className)}>
      <span
        className={cn(
          'absolute h-0.5 w-5 bg-current transition-all duration-300',
          open ? 'rotate-45' : '-translate-y-1.5'
        )}
      />
      <span
        className={cn(
          'absolute h-0.5 w-5 bg-current transition-all duration-300',
          open ? '-rotate-45' : 'translate-y-1.5'
        )}
      />
    </div>
  );
}
