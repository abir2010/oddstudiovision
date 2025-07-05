import HeroSection from '@/components/shared/hero-section';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Reveal from '@/components/shared/reveal';

const resources = [
  { title: 'The Ultimate Guide to Video Marketing', date: 'May 20, 2024', description: 'Learn how to leverage video to boost engagement and conversions.' },
  { title: '5 Branding Mistakes to Avoid in 2024', date: 'May 15, 2024', description: 'Is your brand identity working for you? Here are common pitfalls.' },
  { title: 'How to Write Copy That Sells (Without Being Salesy)', date: 'May 10, 2024', description: 'Master the art of persuasive writing that connects with your audience.' },
  { title: 'A Deep Dive into Strategic Business Growth', date: 'May 5, 2024', description: 'Explore frameworks and tactics for sustainable business development.' },
];

export default function ResourcesPage() {
  return (
    <>
      <HeroSection
        title="Insights & Resources"
        subtitle="Stay ahead of the curve with our latest articles, guides, and industry insights. Knowledge is power, and we're here to share it."
        className="bg-background"
      />
      <section className="container pb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {resources.map((resource, i) => (
            <Reveal key={resource.title} delay={i * 0.1}>
                <Card className="flex flex-col h-full">
                <CardHeader>
                    <CardTitle className="font-headline">{resource.title}</CardTitle>
                    <CardDescription>{resource.date}</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                    <p className="text-muted-foreground">{resource.description}</p>
                </CardContent>
                <CardFooter>
                    <Button asChild variant="secondary">
                    <Link href="#">Read More</Link>
                    </Button>
                </CardFooter>
                </Card>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
