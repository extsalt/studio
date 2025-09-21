import Link from 'next/link';
import { Facebook, Twitter, Instagram } from 'lucide-react';
import Logo from '@/components/ui/logo';
import { contactData, siteConfig } from '@/lib/data';
import { Button } from '../ui/button';

export default function Footer() {
  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center md:text-left">
          <div className="space-y-4 flex flex-col items-center md:items-start">
            <Logo />
            <p className="text-sm">{siteConfig.description}</p>
          </div>
          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {siteConfig.navLinks.map((link) => (
                <li key={link.label}>
                  <Link href={link.href!} className="text-sm hover:text-primary transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-lg mb-4">Contact Us</h3>
            <address className="space-y-2 not-italic text-sm">
              <p>{contactData.address}</p>
              <p>Phone: <a href={`tel:${contactData.phone}`} className="hover:text-primary transition-colors">{contactData.phone}</a></p>
              <p>Email: <a href={`mailto:${contactData.email}`} className="hover:text-primary transition-colors">{contactData.email}</a></p>
            </address>
          </div>
          <div>
            <h3 className="font-semibold text-lg mb-4">Follow Us</h3>
            <div className="flex space-x-4 justify-center md:justify-start">
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
        <div className="mt-8 pt-8 border-t text-center text-sm">
          <p>&copy; {new Date().getFullYear()} Acme Academy. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
