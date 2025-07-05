import Link from 'next/link';
import Image from 'next/image';
import { Github, Twitter, Linkedin } from 'lucide-react';

const navLinks = [
  { href: '/about', label: 'About' },
  { href: '/services', label: 'Services' },
  { href: '/portfolio', label: 'Portfolio' },
  { href: '/contact', label: 'Contact' },
];

const socialLinks = [
  { name: 'Twitter', href: '#', icon: Twitter },
  { name: 'Github', href: '#', icon: Github },
  { name: 'LinkedIn', href: '#', icon: Linkedin },
];

export default function Footer() {
  return (
    <footer className="bg-card border-t">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <Link href="/">
                <Image
                    src="https://i.ibb.co/4nQtXqR0/Red-logo-4x.png"
                    alt="Odd Studio Logo"
                    width={120}
                    height={36}
                    className="h-12 w-auto"
                    data-ai-hint="logo design"
                />
            </Link>
            <p className="mt-4 text-muted-foreground text-sm">
              Creative solutions for modern brands.
            </p>
          </div>
          <div className="md:col-span-3 grid grid-cols-2 md:grid-cols-3 gap-8">
              <div>
                <h3 className="font-semibold font-headline">Navigation</h3>
                <ul className="mt-4 space-y-2">
                  {navLinks.map(({ href, label }) => (
                    <li key={label}>
                      <Link href={href} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                        {label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="font-semibold font-headline">Legal</h3>
                <ul className="mt-4 space-y-2">
                    <li><Link href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">Privacy Policy</Link></li>
                    <li><Link href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">Terms of Service</Link></li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold font-headline">Connect</h3>
                 <div className="flex space-x-4 mt-4">
                    {socialLinks.map(({ name, href, icon: Icon }) => (
                        <Link key={name} href={href} className="text-muted-foreground hover:text-primary transition-colors">
                            <Icon className="h-5 w-5" />
                            <span className="sr-only">{name}</span>
                        </Link>
                    ))}
                 </div>
              </div>
          </div>
        </div>
        <div className="mt-8 border-t pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Odd Studio. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
