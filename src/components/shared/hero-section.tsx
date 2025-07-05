import type { ReactNode } from 'react';
import { cn } from '@/lib/utils';

type HeroSectionProps = {
  title: ReactNode;
  subtitle: ReactNode;
  children?: ReactNode;
  className?: string;
};

export default function HeroSection({ title, subtitle, children, className }: HeroSectionProps) {
  return (
    <section className={cn('py-20 md:py-32 bg-card', className)}>
      <div className="container text-center">
        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl/none font-headline bg-clip-text text-transparent bg-gradient-to-r from-primary to-foreground/80">
          {title}
        </h1>
        <p className="max-w-[700px] mx-auto text-muted-foreground md:text-xl mt-4">
          {subtitle}
        </p>
        {children && <div className="mt-8">{children}</div>}
      </div>
    </section>
  );
}
