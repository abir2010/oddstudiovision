import HeroSection from '@/components/shared/hero-section';
import { ContactForm } from '@/components/contact/contact-form';
import { Mail, Phone, MapPin } from 'lucide-react';
import Image from 'next/image';
import Reveal from '@/components/shared/reveal';

export default function ContactPage() {
  return (
    <>
      <HeroSection
        title="Get in Touch"
        subtitle="Have a project in mind? We'd love to hear from you. Fill out the form below or reach out to us directly."
        className="bg-background"
      />
      <section className="container pb-24">
        <Reveal>
            <div className="grid md:grid-cols-2 gap-16">
                <div className="bg-card p-8 rounded-lg">
                    <h2 className="text-3xl font-bold font-headline mb-6">Contact Information</h2>
                    <div className="space-y-6">
                        <div className="flex items-start gap-4">
                            <div className="bg-primary/10 p-3 rounded-full">
                            <Mail className="h-6 w-6 text-primary" />
                            </div>
                            <div>
                                <h3 className="text-lg font-semibold">Email</h3>
                                <p className="text-muted-foreground">contact@oddstudiovision.com</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-4">
                            <div className="bg-primary/10 p-3 rounded-full">
                            <Phone className="h-6 w-6 text-primary" />
                            </div>
                            <div>
                                <h3 className="text-lg font-semibold">Phone</h3>
                                <p className="text-muted-foreground">+88 01984-597890</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-4">
                            <div className="bg-primary/10 p-3 rounded-full">
                            <MapPin className="h-6 w-6 text-primary" />
                            </div>
                            <div>
                                <h3 className="text-lg font-semibold">Office</h3>
                                <p className="text-muted-foreground">Bashundhara R/A, Dhaka, Bangladesh, 1229</p>
                            </div>
                        </div>
                    </div>
                    <div className="mt-8 pt-8 border-t">
                        <h3 className="text-xl font-bold font-headline mb-4">Our Location</h3>
                        <div className="aspect-video rounded-lg overflow-hidden border">
                            <Image 
                                src="https://i.ibb.co/7xcxfFL/boshundhara-map.png" 
                                alt="Map to Odd Studio"
                                width={600}
                                height={400}
                                className="w-full h-full object-cover"
                                data-ai-hint="city map"
                            />
                        </div>
                    </div>
                </div>
                <div className="bg-card p-8 rounded-lg">
                    <h2 className="text-3xl font-bold font-headline mb-6">Send Us a Message</h2>
                    <ContactForm />
                </div>
            </div>
        </Reveal>
      </section>
    </>
  );
}
