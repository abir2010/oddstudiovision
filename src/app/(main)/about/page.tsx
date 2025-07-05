import HeroSection from '@/components/shared/hero-section';
import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';

const teamMembers = [
  { name: 'Alex Doe', role: 'Founder & CEO', image: 'https://placehold.co/400x400.png', hint: 'professional headshot' },
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
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold font-headline">Our Mission</h2>
            <p className="text-muted-foreground mt-4 text-lg">
              Our mission is to create exceptional work that not only looks beautiful but also achieves tangible business results. We believe in the power of great storytelling and strategic thinking to build lasting connections between brands and their audiences. We strive to be more than just a service provider; we aim to be a true partner in our clients' success.
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
      </section>

      <section className="py-24 bg-card">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold font-headline">Meet the Team</h2>
            <p className="text-muted-foreground mt-2">The odd ones who make the magic happen.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member) => (
              <Card key={member.name} className="text-center border-0 shadow-none bg-transparent">
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
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
