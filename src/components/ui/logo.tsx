import Link from 'next/link';
import { School } from 'lucide-react';

export default function Logo() {
  return (
    <Link href="#home" className="flex items-center space-x-2" aria-label="Acme Academy Home">
      <School className="h-8 w-8 text-primary" />
      <span className="font-bold text-xl font-headline text-primary">Acme Academy</span>
    </Link>
  );
}
