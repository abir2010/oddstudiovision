import HeroSection from '@/components/shared/hero-section';
import ServicesTabs from '@/components/services/services-tabs';

export default function ServicesPage() {
  return (
    <>
      <HeroSection
        title="Our Services"
        subtitle="We offer a comprehensive suite of creative and strategic services designed to build, grow, and elevate your brand in a noisy world."
        className="bg-background"
      />
      <section className="container pb-24">
        <ServicesTabs />
      </section>
    </>
  );
}
