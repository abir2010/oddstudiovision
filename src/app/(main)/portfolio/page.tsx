import HeroSection from '@/components/shared/hero-section';
import { Card, CardContent } from '@/components/ui/card';
import Image from 'next/image';
import Link from 'next/link';
import Reveal from '@/components/shared/reveal';
import { portfolioItems } from '@/lib/portfolio-data';

export default function PortfolioPage() {
  return (
    <>
      <HeroSection
        title="Our Work"
        subtitle="We’re proud of the work we do. Here’s a selection of projects that showcase our passion for creativity and our commitment to results."
        className="bg-background"
      />
      <section className="container pb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-start">
          {portfolioItems.map((item, i) => (
            <Reveal key={item.slug} delay={i * 0.1}>
              <Link href={`/portfolio/${item.slug}`}>
                <Card className="overflow-hidden group h-full flex flex-col">
                <CardContent className="p-0 flex flex-col flex-grow">
                    <div className="relative aspect-video bg-muted">
                    <Image src={item.image} alt={item.title} fill className="object-contain transition-transform duration-300 group-hover:scale-105" data-ai-hint={item.hint}/>
                    </div>
                    <div className="p-6 bg-card flex-grow">
                        <p className="text-sm text-primary font-medium">{item.category}</p>
                        <h3 className="text-xl font-bold font-headline mt-1">{item.title}</h3>
                    </div>
                </CardContent>
                </Card>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
