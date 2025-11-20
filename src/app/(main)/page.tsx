import Link from 'next/link';
import Image from 'next/image';
import HeroSection from '@/components/shared/hero-section';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { CheckCircle, Clapperboard, Camera, PenTool, Rocket, Megaphone } from 'lucide-react';
import ClientCarousel from '@/components/shared/client-carousel';
import Reveal from '@/components/shared/reveal';
import Animated3DIcon from '@/components/shared/animated-3d-icon';

const services = [
  { title: 'Videography', description: 'Crafting compelling visual narratives that captivate and convert.', icon: Clapperboard },
  { title: 'Photography', description: 'High-quality imagery that tells your brand’s story with impact.', icon: Camera },
  { title: 'Copywriting', description: 'Persuasive copy that resonates with your audience and drives action.', icon: PenTool },
  { title: 'Strategy & Branding', description: 'Comprehensive strategies for business development, branding, and strategic planning.', icon: Rocket },
  { title: 'Online Marketing', description: 'Data-driven online marketing to boost your reach and conversions.', icon: Megaphone },
];

export default function HomePage() {
  return (
    <>
      <HeroSection
        title="Odd Studio. Reflection of your THOUGHTS."
        subtitle="Odd Studio is a full-service creative agency that partners with ambitious brands to create work that makes a difference. We are strategists, creatives, and producers united by a common passion for building things that matter."
        className="bg-background"
        imageSrc="https://i.ibb.co/YFsGkYB0/Untitled-design-4.png"
        imageAlt="Creative work showcase"
        imageHint="creative work"
      >
        <div className="flex gap-4 justify-center">
          <Button asChild size="lg">
            <Link href="/portfolio">View Our Work</Link>
          </Button>
          <Button asChild size="lg" variant="outline">
            <Link href="/services">Our Services</Link>
          </Button>
        </div>
      </HeroSection>

      <Reveal>
        <ClientCarousel />
      </Reveal>

      <section className="py-24 bg-card">
        <div className="container">
          <Reveal className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold font-headline">Our Core Services</h2>
            <p className="text-muted-foreground mt-2">What we do best to elevate your brand.</p>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
            {services.map((service, i) => (
              <Reveal key={service.title} delay={0.1 * i}>
                <Card className="overflow-hidden group flex flex-col h-full">
                  <div className="relative aspect-video">
                      <Animated3DIcon>
                        <service.icon />
                      </Animated3DIcon>
                  </div>
                  <CardHeader>
                    <CardTitle className="font-headline">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <p className="text-muted-foreground">{service.description}</p>
                  </CardContent>
                  <CardFooter>
                      <Button asChild variant="link" className="p-0 h-auto">
                          <Link href="/services">Learn More &rarr;</Link>
                      </Button>
                  </CardFooter>
                </Card>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="container py-24">
        <Reveal>
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <Image
                src="https://placehold.co/600x400.png"
                alt="Strategic Planning"
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
                data-ai-hint="team collaboration"
              />
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold font-headline">Why Choose Odd?</h2>
              <p className="text-muted-foreground mt-4 mb-8">
                We're not just another agency. We are a partner in your success, dedicated to understanding your vision and bringing it to life with creativity and precision.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-primary mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold">Data-Driven Strategy</h3>
                    <p className="text-muted-foreground">Our creative decisions are backed by research and analytics to ensure maximum impact.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-primary mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold">Transparent Collaboration</h3>
                    <p className="text-muted-foreground">We believe in open communication, keeping you in the loop every step of the way.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-primary mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold">Results-Oriented</h3>
                    <p className="text-muted-foreground">Your goals are our goals. We focus on delivering measurable results that grow your business.</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </Reveal>
      </section>
    </>
  );
}
