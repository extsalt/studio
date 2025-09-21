import Link from 'next/link';
import { School } from 'lucide-react';
import { cn } from '@/lib/utils';

export default function Logo({ className }: { className?: string }) {
  return (
    <Link href="#home" className="flex items-center space-x-2" aria-label="Acme Academy Home">
      <School className={cn("h-8 w-8 text-primary", className)} />
      <span className={cn("font-bold text-xl font-headline text-primary", className)}>Acme Academy</span>
    </Link>
  );
}
