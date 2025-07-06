import HeroSection from '@/components/shared/hero-section';
import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import Reveal from '@/components/shared/reveal';

const teamMembers = [
  { name: 'Johir Parves', role: 'Founder & CEO', image: 'https://placehold.co/400x400.png', hint: 'professional headshot' },
  { name: 'Jane Smith', role: 'Creative Director', image: 'https://placehold.co/400x400.png', hint: 'creative headshot' },
  { name: 'Sam Wilson', role: 'Lead Strategist', image: 'https://placehold.co/400x400.png', hint: 'corporate headshot' },
  { name: 'Emily White', role: 'Head of Production', image: 'https://placehold.co/400x400.png', hint: 'person smiling' },
];

export default function AboutPage() {
  return (
    <>
      <HeroSection
        title="About Odd Studio"
        subtitle="We are a team of passionate creators, thinkers, and strategists dedicated to helping brands find their voice and tell their story."
        className="bg-background"
      />
      
      <section className="container py-24">
        <Reveal>
          <div className="grid gap-16 items-center mb-8">
            <div>
                <h2 className="text-3xl md:text-4xl font-bold font-headline">Who we are?</h2>
                <p className="text-muted-foreground mt-4 text-lg">
                Odd Studio is a Dhaka, Bangladesh-based creative advertising agency dedicated to crafting bold, effective,
                and memorable campaigns. From strategic media buying to full scale digital marketing, we deliver tailored
                solutions that connect brands with their audiences — both locally and globally.
                Driven by insight and fueled by innovation, we help businesses stand out through impactful storytelling,
                intelligent strategy, and eye-catching visuals. Whether you're building a brand from the ground up r
                amplifying an existing voice, Odd Studio brings creative excellence to every project.
                </p>
            </div>
          </div>
        </Reveal>
        <Reveal>
          <div className="grid md:grid-cols-2 gap-16 items-center mb-8">
            <div>
                <Image
                src="https://placehold.co/600x400.png"
                alt="Team working together"
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
                data-ai-hint="team meeting"
                />
            </div>
            <div>
                <h2 className="text-3xl md:text-4xl font-bold font-headline">Our Vision</h2>
                <p className="text-muted-foreground mt-4 text-lg">
                To capture the essence of life's moments, turning them into timeless visual stories that inspire, connect, and preserve memories for generations.
                </p>
            </div>
          </div>
        </Reveal>
        <Reveal>
            <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
                <h2 className="text-3xl md:text-4xl font-bold font-headline">Our Mission</h2>
                <p className="text-muted-foreground mt-4 text-lg">
                Provide exceptional marketing services that blend creativity, emotion, and authenticity. Collaborate with clients to bring their vision to brand. Creating meaningful and impactful visuals. 
                </p>
            </div>
            <div>
                <Image
                src="https://placehold.co/600x400.png"
                alt="Team working together"
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
                data-ai-hint="team meeting"
                />
            </div>
            </div>
        </Reveal>
      </section>

      <section className="py-24 bg-card">
        <div className="container">
          <Reveal className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold font-headline">Meet the Team</h2>
            <p className="text-muted-foreground mt-2">The odd ones who make the magic happen.</p>
          </Reveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, i) => (
              <Reveal key={member.name} delay={i * 0.1}>
                <Card className="text-center border-0 shadow-none bg-transparent">
                    <CardContent className="p-0">
                    <Image
                        src={member.image}
                        alt={member.name}
                        width={200}
                        height={200}
                        className="rounded-full mx-auto mb-4 object-cover"
                        data-ai-hint={member.hint}
                    />
                    <h3 className="text-lg font-bold font-headline">{member.name}</h3>
                    <p className="text-primary">{member.role}</p>
                    </CardContent>
                </Card>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
