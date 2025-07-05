'use client';

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Camera, Clapperboard, PenTool, BarChart, Sparkles, Rocket, Megaphone } from "lucide-react";
import Image from 'next/image';

const servicesData = {
  videography: {
    label: "Videography",
    icon: Clapperboard,
    description: "From concept to final cut, we produce high-quality videos that engage, entertain, and inspire action. Our team handles everything from scripting and storyboarding to shooting, editing, and color grading.",
    subServices: [
      { title: "Corporate Videos", video: "https://placehold.co/1280x720.png", hint: "corporate meeting" },
      { title: "Commercials & Ads", video: "https://placehold.co/1280x720.png", hint: "television commercial" },
      { title: "Social Media Content", video: "https://placehold.co/1280x720.png", hint: "social media" },
      { title: "Event Coverage", video: "https://placehold.co/1280x720.png", hint: "live event" },
    ]
  },
  photography: {
    label: "Photography",
    icon: Camera,
    description: "We capture stunning, professional images that showcase your brand in the best light. Our services cover product photography, corporate headshots, event photography, and more.",
    subServices: [
      { title: "Product Photography", video: "https://placehold.co/1280x720.png", hint: "product shoot" },
      { title: "Lifestyle & Branding", video: "https://placehold.co/1280x720.png", hint: "lifestyle photo" },
      { title: "Corporate Headshots", video: "https://placehold.co/1280x720.png", hint: "professional portrait" },
      { title: "Architectural & Real Estate", video: "https://placehold.co/1280x720.png", hint: "modern architecture" },
    ]
  },
  copywriting: {
    label: "Copywriting",
    icon: PenTool,
    description: "Words have power. Our expert copywriters craft compelling narratives, catchy taglines, and persuasive content for websites, ads, and marketing materials that convert readers into customers.",
    video: "https://placehold.co/1280x720.png",
    hint: "creative writing"
  },
  businessDev: {
    label: "Business Development",
    icon: BarChart,
    description: "We help you identify new market opportunities, develop strategic partnerships, and create growth plans that are both ambitious and achievable, driving your business forward.",
    video: "https://placehold.co/1280x720.png",
    hint: "business chart"
  },
  branding: {
    label: "Branding",
    icon: Sparkles,
    description: "A strong brand is more than a logo. We help you build a complete brand identity, from your mission and values to your visual language and tone of voice, that connects with your audience on an emotional level.",
    video: "https://placehold.co/1280x720.png",
    hint: "brand design"
  },
  strategicPlanning: {
    label: "Strategic Planning",
    icon: Rocket,
    description: "Our strategic planning services provide a clear roadmap for your marketing efforts. We analyze your market, define your objectives, and create a comprehensive strategy to achieve your long-term goals.",
    video: "https://placehold.co/1280x720.png",
    hint: "planning strategy"
  },
  onlineMarketing: {
    label: "Online Marketing",
    icon: Megaphone,
    description: "Data-driven online campaigns to boost your reach, engagement, and conversions.",
    video: "https://placehold.co/1280x720.png",
    hint: "digital marketing"
  },
};

const VideoPlaceholder = ({ src, title, hint }: { src: string; title: string; hint: string }) => (
    <div className="aspect-video bg-muted rounded-lg flex items-center justify-center relative overflow-hidden shadow-lg">
        <Image src={src} alt={`Video placeholder for ${title}`} fill className="object-cover" data-ai-hint={hint} />
        <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
            <div className="w-16 h-16 bg-white/30 rounded-full flex items-center justify-center backdrop-blur-sm cursor-pointer hover:bg-white/50 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="white" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
            </div>
        </div>
    </div>
);


export default function ServicesTabs() {
  return (
    <Tabs defaultValue="videography" className="w-full">
      <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 lg:grid-cols-7 h-auto -mx-1">
        {Object.entries(servicesData).map(([key, { label, icon: Icon }]) => (
          <TabsTrigger key={key} value={key} className="flex flex-col sm:flex-row gap-2 h-auto py-3 text-xs sm:text-sm">
            <Icon className="w-5 h-5" />
            <span>{label}</span>
          </TabsTrigger>
        ))}
      </TabsList>

      {Object.entries(servicesData).map(([key, service]) => (
        <TabsContent key={key} value={key} className="py-8">
            <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
                <div className="order-2 md:order-1">
                    <h3 className="text-3xl font-bold font-headline mb-4">{service.label}</h3>
                    <p className="text-muted-foreground text-lg">{service.description}</p>
                </div>
                <div className="order-1 md:order-2">
                    {service.subServices ? (
                        <Accordion type="single" collapsible defaultValue="item-0" className="w-full">
                          {service.subServices.map((sub, index) => (
                              <AccordionItem value={`item-${index}`} key={sub.title}>
                                  <AccordionTrigger className="text-lg font-semibold hover:no-underline">{sub.title}</AccordionTrigger>
                                  <AccordionContent>
                                      <VideoPlaceholder src={sub.video} title={sub.title} hint={sub.hint} />
                                  </AccordionContent>
                              </AccordionItem>
                          ))}
                        </Accordion>
                    ) : (
                        service.video && <VideoPlaceholder src={service.video} title={service.label} hint={service.hint || ''}/>
                    )}
                </div>
            </div>
        </TabsContent>
      ))}
    </Tabs>
  );
}
