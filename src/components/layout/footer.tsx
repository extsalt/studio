import Link from 'next/link';
import { Facebook, Twitter, Instagram } from 'lucide-react';
import Logo from '@/components/ui/logo';
import { siteConfig } from '@/lib/data';
import { Button } from '../ui/button';
import { Input } from '../ui/input';

export default function Footer() {
  return (
    <footer className="bg-card">
      <div className="container py-12 text-center">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="space-y-4 flex flex-col items-center">
            <Logo />
            <p className="text-sm text-muted-foreground">{siteConfig.description}</p>
          </div>
          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {siteConfig.navLinks.filter(l => l.href !== '#about' && l.href !== '#classes').map((link) => (
                <li key={link.label}>
                  <Link href={link.href!} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-lg mb-4">Resources</h3>
            <ul className="space-y-2">
              <li><Link href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">Blog</Link></li>
              <li><Link href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">Events</Link></li>
              <li><Link href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">Downloads</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-lg mb-4">Newsletter</h3>
            <p className="text-sm mb-4 text-muted-foreground">Stay up to date with our latest news and events.</p>
            <form className="flex gap-2">
              <Input type="email" placeholder="Your email" className="bg-background" />
              <Button type="submit">Subscribe</Button>
            </form>
          </div>
        </div>
        <div className="border-t border-border/50 pt-8">
            <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
                <p className="text-sm text-muted-foreground">&copy; {new Date().getFullYear()} Acme Academy. All rights reserved.</p>
                <div className="flex space-x-4">
                    <Button variant="ghost" size="icon" asChild>
                        <a href="#" aria-label="Facebook"><Facebook className="h-5 w-5" /></a>
                    </Button>
                    <Button variant="ghost" size="icon" asChild>
                        <a href="#" aria-label="Twitter"><Twitter className="h-5 w-5" /></a>
                    </Button>
                    <Button variant="ghost" size="icon" asChild>
                        <a href="#" aria-label="Instagram"><Instagram className="h-5 w-5" /></a>
                    </Button>
                </div>
            </div>
        </div>
      </div>
    </footer>
  );
}
