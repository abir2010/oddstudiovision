import Link from 'next/link';
import Image from 'next/image';
import HeroSection from '@/components/shared/hero-section';
import { Button } from '@/components/ui/button';
import { Card, CardTitle } from '@/components/ui/card';
import { CheckCircle, Clapperboard, Camera, PenTool, Rocket, Megaphone, Video, ArrowRight } from 'lucide-react';
import ClientCarousel from '@/components/shared/client-carousel';
import Reveal from '@/components/shared/reveal';
import AutoAnimatedIcon from '@/components/shared/auto-animated-icon';

const services = [
  { title: 'Videography', description: 'Compelling visual narratives that captivate and convert.', icon: Clapperboard },
  { title: 'Photography', description: 'High-impact imagery that defines your brand aesthetic.', icon: Camera },
  { title: 'Copywriting', description: 'Persuasive words that resonate and drive action.', icon: PenTool },
  { title: 'Strategy & Branding', description: 'Holistic roadmaps for sustainable growth and identity.', icon: Rocket },
  { title: 'Online Marketing', description: 'Data-driven campaigns to dominate your market.', icon: Megaphone },
];

export default function HomePage() {
  return (
    <>
      <HeroSection
        title={<span className="bg-clip-text text-transparent bg-gradient-to-b from-foreground to-foreground/70">Reflection of your <span className="text-primary">THOUGHTS</span>.</span>}
        subtitle="Odd Studio is a full-service creative agency partnering with ambitious brands. We are strategists, creatives, and producers united by a passion for building things that matter."
        className="bg-background"
        imageSrc="https://i.ibb.co/YFsGkYB0/Untitled-design-4.png"
        imageAlt="Creative work showcase"
        imageHint="creative work"
      >
        <div className="flex flex-col sm:flex-row gap-4 justify-center w-full sm:w-auto">
          <Button asChild size="lg" className="text-lg px-8 h-14 rounded-full shadow-lg shadow-primary/25 hover:shadow-primary/40 transition-all duration-300">
            <Link href="/portfolio">View Our Work</Link>
          </Button>
          <Button asChild size="lg" variant="outline" className="text-lg px-8 h-14 rounded-full border-2 hover:bg-secondary">
            <Link href="/services">Our Services</Link>
          </Button>
        </div>
      </HeroSection>

      <Reveal>
        <ClientCarousel />
      </Reveal>

      <section className="py-24 bg-secondary/30 relative overflow-hidden">
         {/* Decorative blob */}
         <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl -z-10 pointer-events-none" />

        <div className="container">
          <Reveal className="mb-16 max-w-2xl">
            <h2 className="text-4xl md:text-5xl font-bold font-headline mb-4 leading-tight">
              Core Services.<br/>
              <span className="text-muted-foreground">Everything you need to scale.</span>
            </h2>
            <p className="text-lg text-muted-foreground mt-4">
              We don't just make things pretty. We create functional, strategic assets that elevate your brand position.
            </p>
          </Reveal>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, i) => (
              <Reveal key={service.title} delay={0.1 * i} className="h-full">
                <Link href="/services" className="block h-full">
                    <Card className="h-full overflow-hidden group border-2 border-transparent hover:border-primary/20 hover:shadow-xl transition-all duration-300 bg-card relative">
                    <div className="absolute top-0 right-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity">
                        <ArrowRight className="w-6 h-6 text-primary -rotate-45 group-hover:rotate-0 transition-transform duration-300" />
                    </div>
                    <div className="p-8 flex flex-col h-full">
                        <div className="mb-6">
                            <div className="w-16 h-16 rounded-2xl bg-primary/5 text-primary flex items-center justify-center group-hover:scale-110 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                                <service.icon className="w-8 h-8" />
                            </div>
                        </div>
                        <CardTitle className="font-headline text-2xl mb-3 group-hover:text-primary transition-colors">{service.title}</CardTitle>
                        <p className="text-muted-foreground flex-grow leading-relaxed">
                            {service.description}
                        </p>
                    </div>
                    <div className="h-1 w-0 bg-primary group-hover:w-full transition-all duration-500 ease-out" />
                    </Card>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="container py-32">
        <Reveal>
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="relative order-2 lg:order-1">
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent rounded-3xl transform rotate-3 scale-105 -z-10" />
                <div className="bg-card border rounded-3xl p-8 md:p-12 shadow-2xl relative overflow-hidden">
                    <AutoAnimatedIcon>
                        <Video className="w-32 h-32 md:w-48 md:h-48 text-foreground" strokeWidth={1} />
                    </AutoAnimatedIcon>
                    <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-background to-transparent" />
                </div>
            </div>
            
            <div className="order-1 lg:order-2">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-headline mb-8 leading-[0.9]">
                Why <span className="text-primary decoration-4 underline-offset-4 underline decoration-wavy">Odd</span>?
              </h2>
              <p className="text-xl text-muted-foreground mb-10 leading-relaxed">
                We are the deviation from the norm. While others follow templates, we build custom solutions. We are your creative partners in crime, dedicated to making your brand impossible to ignore.
              </p>
              
              <div className="grid gap-6">
                {[
                    { title: "Data-Driven Strategy", desc: "Creativity without strategy is just art. We back every pixel with data." },
                    { title: "Transparent Collaboration", desc: "No black boxes. You're part of the process every step of the way." },
                    { title: "Results-Oriented", desc: "We don't stop at 'pretty'. We focus on ROI and measurable growth." }
                ].map((item, i) => (
                    <div key={i} className="flex items-start group">
                        <div className="mt-1 mr-4 p-1 bg-primary/10 rounded-full group-hover:bg-primary group-hover:text-white transition-colors">
                            <CheckCircle className="w-5 h-5 text-primary group-hover:text-white" />
                        </div>
                        <div>
                            <h3 className="font-bold text-lg font-headline">{item.title}</h3>
                            <p className="text-muted-foreground">{item.desc}</p>
                        </div>
                    </div>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </section>
      
      {/* CTA Section */}
      <section className="py-24 bg-primary text-primary-foreground relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
            <div className="container relative z-10 text-center">
                <Reveal>
                    <h2 className="text-4xl md:text-6xl font-bold font-headline mb-6">Ready to stand out?</h2>
                    <p className="text-xl md:text-2xl opacity-90 mb-10 max-w-2xl mx-auto">Let's build something extraordinary together. Your audience is waiting.</p>
                    <Button asChild size="lg" variant="secondary" className="text-primary font-bold h-16 px-10 text-lg rounded-full shadow-2xl hover:shadow-white/20 hover:scale-105 transition-all">
                        <Link href="/contact">Start Your Project</Link>
                    </Button>
                </Reveal>
            </div>
      </section>
    </>
  );
}
