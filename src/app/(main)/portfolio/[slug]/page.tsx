import { portfolioItems } from '@/lib/portfolio-data';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import { Badge } from '@/components/ui/badge';
import Reveal from '@/components/shared/reveal';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function PortfolioItemPage({ params }: { params: { slug: string } }) {
  const item = portfolioItems.find((p) => p.slug === params.slug);

  if (!item) {
    notFound();
  }

  return (
    <div className="py-24">
        <div className="container">
            <Reveal>
                <Button variant="ghost" asChild className="mb-8">
                    <Link href="/portfolio"><ArrowLeft className="mr-2 h-4 w-4" />Back to Portfolio</Link>
                </Button>
            </Reveal>

            <article>
                <Reveal>
                <div className="relative aspect-[16/9] rounded-lg overflow-hidden mb-8 shadow-lg">
                    <Image src={item.image} alt={item.title} fill className="object-cover" data-ai-hint={item.hint} priority/>
                </div>
                </Reveal>

                <div className="max-w-3xl mx-auto">
                    <Reveal>
                    <Badge variant="secondary">{item.category}</Badge>
                    <h1 className="text-4xl md:text-5xl font-bold font-headline mt-4 mb-6">{item.title}</h1>
                    <p className="text-lg text-muted-foreground">{item.description}</p>
                    </Reveal>

                    <Reveal delay={0.1}>
                        <div className="mt-12 prose prose-lg max-w-none text-foreground prose-headings:text-foreground prose-strong:text-foreground">
                            <h2 className="text-3xl font-bold font-headline">Project Overview</h2>
                            <p>This is a detailed description of the project. It covers the client's brief, our creative process, and the outcomes we achieved. We focused on delivering a solution that not only met but exceeded expectations, resulting in a significant impact for their brand.</p>
                            <p>Our approach involved several stages of research, strategy, and execution. We collaborated closely with the client's team to ensure every detail was aligned with their vision. The final product is a testament to our commitment to excellence and innovation.</p>
                            
                            <h3 className="text-2xl font-bold font-headline mt-8">Key Challenges</h3>
                            <ul>
                                <li>Translating a complex brief into a simple, elegant visual solution.</li>
                                <li>Working within a tight timeline without compromising on quality.</li>
                                <li>Ensuring the final product resonated with a diverse target audience.</li>
                            </ul>
                        </div>
                    </Reveal>
                </div>
            </article>
        </div>
    </div>
  );
}

export function generateStaticParams() {
    return portfolioItems.map((item) => ({
      slug: item.slug,
    }));
}
