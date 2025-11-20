import { ContactForm } from "@/components/contact/contact-form";
import HeroSection from "@/components/shared/hero-section";
import Reveal from "@/components/shared/reveal";
import { Mail, MapPin, Phone } from "lucide-react";
import Image from "next/image";

export default function ContactPage() {
  return (
    <>
      <HeroSection
        title="Let's Talk"
        subtitle="Ready to start your next project? We're ready to listen. Drop us a line, and let's create something impactful together."
        className="bg-background"
      />
      <section className="container pb-24">
        <Reveal>
          <div className="grid lg:grid-cols-12 gap-12 bg-card border rounded-[2rem] overflow-hidden shadow-2xl">
            {/* Left Info Side */}
            <div className="lg:col-span-5 bg-primary text-primary-foreground p-10 md:p-16 flex flex-col justify-between relative overflow-hidden">
              {/* Abstract Pattern */}
              <div className="absolute inset-0 opacity-10 pointer-events-none">
                <div className="absolute -right-20 -top-20 w-64 h-64 rounded-full border-[20px] border-white" />
                <div className="absolute -left-20 bottom-20 w-40 h-40 rounded-full bg-white" />
              </div>

              <div className="relative z-10">
                <h2 className="text-3xl font-bold font-headline mb-8">
                  Contact Information
                </h2>
                <div className="space-y-8">
                  <div className="flex items-start gap-5">
                    <div className="bg-white/20 p-3 rounded-xl backdrop-blur-sm">
                      <Mail className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg opacity-90">Email Us</h3>
                      <p className="text-lg font-light">
                        contact@oddstudiovision.com
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-5">
                    <div className="bg-white/20 p-3 rounded-xl backdrop-blur-sm">
                      <Phone className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg opacity-90">Call Us</h3>
                      <p className="text-lg font-light">+88 01984-597890</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-5">
                    <div className="bg-white/20 p-3 rounded-xl backdrop-blur-sm">
                      <MapPin className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg opacity-90">Visit Us</h3>
                      <p className="text-lg font-light leading-snug">
                        Bashundhara R/A, Dhaka,
                        <br /> Bangladesh, 1229
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative z-10 mt-12">
                <div className="aspect-video rounded-xl overflow-hidden shadow-lg border border-white/20">
                  <Image
                    src="https://i.ibb.co/7xcxfFL/boshundhara-map.png"
                    alt="Map to Odd Studio"
                    width={600}
                    height={400}
                    className="w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity"
                    data-ai-hint="city map"
                  />
                </div>
              </div>
            </div>

            {/* Right Form Side */}
            <div className="lg:col-span-7 p-10 md:p-16 bg-background">
              <h2 className="text-3xl md:text-4xl font-bold font-headline mb-2">
                Send a Message
              </h2>
              <p className="text-muted-foreground mb-10">
                Fill out the form below and we'll get back to you within 24
                hours.
              </p>
              <ContactForm />
            </div>
          </div>
        </Reveal>
      </section>
    </>
  );
}
