import HeroSection from '@/components/shared/hero-section';
import { Card, CardContent } from '@/components/ui/card';
import Image from 'next/image';
import Reveal from '@/components/shared/reveal';

const portfolioItems = [
  { title: 'Project Alpha', category: 'Videography', image: 'https://placehold.co/600x400.png', hint: 'corporate video' },
  { title: 'Brand Beta', category: 'Branding', image: 'https://placehold.co/600x400.png', hint: 'brand identity' },
  { title: 'Campaign Gamma', category: 'Photography', image: 'https://placehold.co/600x400.png', hint: 'product photography' },
  { title: 'Launch Delta', category: 'Strategic Planning', image: 'https://placehold.co/600x400.png', hint: 'marketing strategy' },
  { title: 'Story Epsilon', category: 'Copywriting', image: 'https://placehold.co/600x400.png', hint: 'website content' },
  { title: 'Growth Zeta', category: 'Business Development', image: 'https://placehold.co/600x400.png', hint: 'business growth' },
];

export default function PortfolioPage() {
  return (
    <>
      <HeroSection
        title="Our Work"
        subtitle="We’re proud of the work we do. Here’s a selection of projects that showcase our passion for creativity and our commitment to results."
        className="bg-background"
      />
      <section className="container pb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioItems.map((item, i) => (
            <Reveal key={item.title} delay={i * 0.1}>
                <Card className="overflow-hidden group">
                <CardContent className="p-0">
                    <div className="relative aspect-[4/3]">
                    <Image src={item.image} alt={item.title} fill className="object-cover transition-transform duration-300 group-hover:scale-105" data-ai-hint={item.hint}/>
                    </div>
                    <div className="p-6 bg-card">
                        <p className="text-sm text-primary font-medium">{item.category}</p>
                        <h3 className="text-xl font-bold font-headline mt-1">{item.title}</h3>
                    </div>
                </CardContent>
                </Card>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
