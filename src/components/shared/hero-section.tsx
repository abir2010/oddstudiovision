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
    <section className={cn('relative min-h-[80vh] flex items-center justify-center py-20 md:py-32 overflow-hidden', className)}>
      {/* Abstract Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
        <div className="absolute -top-[20%] -right-[10%] w-[50vw] h-[50vw] rounded-full bg-primary/5 blur-[120px]" />
        <div className="absolute top-[40%] -left-[10%] w-[40vw] h-[40vw] rounded-full bg-blue-500/5 blur-[100px]" />
      </div>

      {imageSrc && (
        <div className="absolute inset-0 z-0">
            <Image
            src={imageSrc}
            alt={imageAlt || 'Background image'}
            fill
            className="object-cover opacity-[0.07] grayscale contrast-125"
            data-ai-hint={imageHint}
            priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
        </div>
      )}
      
      <div className="container text-center relative z-10 px-4">
        <Reveal y={40}>
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold font-headline leading-[0.9] tracking-tighter text-foreground mb-6">
            {title}
          </h1>
        </Reveal>
        
        <Reveal delay={0.1}>
          <p className="max-w-[800px] mx-auto text-muted-foreground text-lg md:text-xl leading-relaxed">
            {subtitle}
          </p>
        </Reveal>
        
        {children && (
          <Reveal delay={0.2} className="mt-10">
            {children}
          </Reveal>
        )}
      </div>
    </section>
  );
}
