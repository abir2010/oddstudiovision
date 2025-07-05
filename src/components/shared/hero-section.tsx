import type { ReactNode } from 'react';
import Image from 'next/image';
import { cn } from '@/lib/utils';
import Reveal from './reveal';

type HeroSectionProps = {
  title: ReactNode;
  subtitle: ReactNode;
  children?: ReactNode;
  className?: string;
  imageSrc?: string;
  imageAlt?: string;
  imageHint?: string;
};

export default function HeroSection({ title, subtitle, children, className, imageSrc, imageAlt, imageHint }: HeroSectionProps) {
  return (
    <section className={cn('relative py-20 md:py-32 bg-card overflow-hidden', className)}>
      {imageSrc && (
        <Image
          src={imageSrc}
          alt={imageAlt || 'Background image'}
          fill
          className="object-cover opacity-10"
          data-ai-hint={imageHint}
          priority
        />
      )}
      <div className="container text-center relative z-10">
        <Reveal>
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl/none font-headline bg-clip-text text-transparent bg-gradient-to-r from-primary to-foreground/80">
            {title}
          </h1>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="max-w-[700px] mx-auto text-muted-foreground md:text-xl mt-4">
            {subtitle}
          </p>
        </Reveal>
        {children && <Reveal delay={0.2}>{children}</Reveal>}
      </div>
    </section>
  );
}
