"use client";

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { Menu, School, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import Logo from '@/components/ui/logo';
import { siteConfig } from '@/lib/data';
import { cn } from '@/lib/utils';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={cn(
      "sticky top-0 z-50 w-full transition-all duration-300",
      isScrolled ? "border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60" : "bg-transparent"
    )}>
      <div className="container flex h-16 max-w-screen-2xl items-center">
        <div className="mr-4 hidden md:flex">
          <Logo className={cn(isScrolled ? "text-primary" : "text-primary-foreground")} />
        </div>
        
        <div className="md:hidden">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className={cn(isScrolled ? "text-primary" : "text-primary-foreground hover:bg-white/20 hover:text-white")}>
                <Menu className="h-6 w-6" />
                <span className="sr-only">Open Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="pr-0 bg-background">
              <div className="flex items-center justify-between p-6 border-b">
                <Logo />
              </div>
              <div className="my-4 h-[calc(100vh-8rem)] pb-10 pl-6">
                <div className="flex flex-col space-y-4">
                  {siteConfig.navLinks.map((link) => (
                    'items' in link ? (
                      <div key={link.label} className="space-y-2">
                         <h4 className="font-semibold">{link.label}</h4>
                         {link.items.map(item => (
                            <Link
                                key={item.href}
                                href={item.href}
                                onClick={() => setIsOpen(false)}
                                className="block text-lg font-medium text-muted-foreground transition-colors hover:text-foreground pl-2"
                            >
                                {item.label}
                            </Link>
                         ))}
                      </div>
                    ) : (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className="text-lg font-medium text-muted-foreground transition-colors hover:text-foreground"
                    >
                      {link.label}
                    </Link>
                    )
                  ))}
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
        
        <div className="flex flex-1 items-center justify-center md:justify-start">
            <div className="md:hidden">
                <Logo className={cn(isScrolled ? "text-primary" : "text-primary-foreground")} />
            </div>
        </div>
        
        <nav className="hidden md:flex md:items-center md:space-x-8 text-sm font-medium">
          {siteConfig.navLinks.map((link) => (
            'items' in link ? (
              <DropdownMenu key={link.label}>
                <DropdownMenuTrigger className={cn(
                  "transition-colors hover:text-primary focus:outline-none",
                  isScrolled ? "text-foreground/80" : "text-primary-foreground"
                )}>
                  {link.label}
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  {link.items.map(item => (
                    <DropdownMenuItem key={item.href} asChild>
                      <Link href={item.href}>{item.label}</Link>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "transition-colors hover:text-primary",
                  isScrolled ? "text-foreground/80" : "text-primary-foreground"
                )}
              >
                {link.label}
              </Link>
            )
          ))}
        </nav>
        
        <div className="flex flex-1 items-center justify-end space-x-4">
          <Button asChild className="hidden sm:inline-flex" variant={isScrolled ? 'default' : 'secondary'}>
            <Link href="#admissions">Apply Now</Link>
          </Button>
        </div>
      </div>
    </header>
  );
}
