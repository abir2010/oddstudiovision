import Link from 'next/link';
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
            <Link href="/" className="flex items-center space-x-2">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-8 w-8 text-primary"><path d="M12 2a10 10 0 1 0 10 10" /><path d="M12 2a10 10 0 1 0 10 10" /><path d="M22 12a10 10 0 1 0-10 10" /></svg>
                <span className="font-bold font-headline text-2xl">Odd Studio</span>
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
        <div className="mt-8 border-t pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Odd Studio. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
