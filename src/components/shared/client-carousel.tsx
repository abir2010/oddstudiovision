'use client';

import React from 'react';
import Autoplay from 'embla-carousel-autoplay';

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel';

const clients: { name: string; Svg: React.FC<React.SVGProps<SVGSVGElement>> }[] = [
    { name: 'Globex', Svg: (props) => <svg viewBox="0 0 100 30" {...props}><text x="0" y="25" fontFamily="Arial, sans-serif" fontSize="24" fontWeight="bold">Globex</text></svg> },
    { name: 'Acme Corp', Svg: (props) => <svg viewBox="0 0 130 30" {...props}><text x="0" y="25" fontFamily="Courier, monospace" fontSize="24" fontWeight="bold">ACME</text></svg> },
    { name: 'Stark Industries', Svg: (props) => <svg viewBox="0 0 120 30" {...props}><text x="0" y="25" fontFamily="Impact, sans-serif" fontSize="22">STARK</text></svg> },
    { name: 'Wayne Ent.', Svg: (props) => <svg viewBox="0 0 150 30" {...props}><text x="0" y="25" fontFamily="Times New Roman, serif" fontSize="22" fontStyle="italic">Wayne Ent.</text></svg> },
    { name: 'Cyberdyne', Svg: (props) => <svg viewBox="0 0 150 30" {...props}><text x="0" y="25" fontFamily="monospace" fontSize="20" fontWeight="bold">Cyberdyne</text></svg> },
    { name: 'Gekko & Co', Svg: (props) => <svg viewBox="0 0 140 30" {...props}><text x="0" y="25" fontFamily="Georgia, serif" fontSize="22">Gekko & Co</text></svg> },
    { name: 'BnL', Svg: (props) => <svg viewBox="0 0 50 30" {...props}><text x="0" y="25" fontFamily="Verdana, sans-serif" fontSize="28" fontWeight="bold">BnL</text></svg> },
    { name: 'Vandelay', Svg: (props) => <svg viewBox="0 0 150 30" {...props}><text x="0" y="25" fontFamily="Helvetica, sans-serif" fontSize="22" fontWeight="bold">Vandelay</text></svg> },
];

export default function ClientCarousel() {
  const plugin = React.useRef(
    Autoplay({ delay: 1500, stopOnInteraction: false, stopOnMouseEnter: true })
  );

  return (
    <section className="py-16 bg-card">
      <div className="container">
        <p className="text-center text-sm font-semibold uppercase text-muted-foreground tracking-wider mb-8">
          Trusted by the world's most innovative companies
        </p>
        <Carousel
          plugins={[plugin.current]}
          opts={{
            align: 'start',
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-4">
            {clients.map(({ name, Svg }, index) => (
              <CarouselItem key={index} className="pl-4 basis-1/2 sm:basis-1/3 md:basis-1/4 lg:basis-1/6">
                <div className="p-1">
                    <div className="flex h-24 items-center justify-center p-6 text-muted-foreground hover:text-foreground transition-colors" title={name}>
                        <Svg className="h-8 w-auto" />
                    </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  );
}
