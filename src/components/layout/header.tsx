'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, Phone } from 'lucide-react';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import Image from 'next/image';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/services', label: 'Services' },
  { href: '/portfolio', label: 'Portfolio' },
  { href: '/resources', label: 'Resources' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
];

export default function Header() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between relative">
        <div className="flex">
          <Link href="/" className="flex items-center" onClick={() => setIsOpen(false)}>
            <Image
              src="https://i.ibb.co/4nQtXqR0/Red-logo-4x.png"
              alt="Odd Studio Logo"
              width={160}
              height={48}
              className="h-12 w-auto"
              data-ai-hint="logo design"
              priority
            />
          </Link>
        </div>
        <nav className="hidden md:flex items-center space-x-6 text-sm font-medium absolute left-1/2 -translate-x-1/2">
          {navLinks.map(({ href, label }) => (
            <Link
              key={label}
              href={href}
              className={cn(
                'transition-colors hover:text-primary',
                pathname === href ? 'text-primary' : 'text-foreground/60'
              )}
            >
              {label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center justify-end space-x-2">
          <a href="tel:+8801984597890" className="hidden md:flex items-center gap-2 text-primary font-bold text-sm">
            <Phone className="h-4 w-4" />
            <span>+88 01984-597890</span>
          </a>
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                className="md:hidden"
                onClick={() => setIsOpen(true)}
              >
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px] bg-background">
              <div className="flex flex-col h-full">
                <div className="flex justify-start items-center p-4 border-b">
                   <Link href="/" className="flex items-center" onClick={() => setIsOpen(false)}>
                      <Image
                        src="https://i.ibb.co/4nQtXqR0/Red-logo-4x.png"
                        alt="Odd Studio Logo"
                        width={120}
                        height={32}
                        className="h-8 w-auto"
                        data-ai-hint="logo design"
                        priority
                      />
                   </Link>
                </div>
                <nav className="flex flex-col p-4 space-y-4">
                  {navLinks.map(({ href, label }) => (
                    <Link
                      key={label}
                      href={href}
                      onClick={() => setIsOpen(false)}
                      className={cn(
                        'text-lg transition-colors hover:text-primary',
                        pathname === href ? 'text-primary' : 'text-foreground'
                      )}
                    >
                      {label}
                    </Link>
                  ))}
                </nav>
                <div className="mt-auto p-4 border-t">
                    <a href="tel:+8801984597890" onClick={() => setIsOpen(false)} className="flex w-full items-center justify-center gap-2 text-primary font-bold">
                        <Phone className="h-5 w-5" />
                        <span>+88 01984-597890</span>
                    </a>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
