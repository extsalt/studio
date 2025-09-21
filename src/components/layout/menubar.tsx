
'use client';

import * as React from 'react';
import Link from 'next/link';
import { siteConfig } from '@/lib/data';
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarShortcut,
  MenubarTrigger,
} from '@/components/ui/menubar';
import { cn } from '@/lib/utils';
import Logo from '../ui/logo';

export function MenuBarDemo() {
  return (
    <div className="flex justify-between items-center w-full">
      <Logo />
      <Menubar>
        {siteConfig.navLinks.map((link) =>
          link.items ? (
            <MenubarMenu key={link.label}>
              <MenubarTrigger>{link.label}</MenubarTrigger>
              <MenubarContent>
                {link.items.map((item) => (
                  <Link href={item.href} passHref key={item.label}>
                    <MenubarItem>{item.label}</MenubarItem>
                  </Link>
                ))}
              </MenubarContent>
            </MenubarMenu>
          ) : (
            <Link href={link.href!} passHref key={link.label}>
              <MenubarMenu>
                <MenubarTrigger>{link.label}</MenubarTrigger>
              </MenubarMenu>
            </Link>
          )
        )}
      </Menubar>
    </div>
  );
}
