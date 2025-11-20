
export type PortfolioItem = { 
  slug: string;
  title: string;
  category: string;
  image: string;
  video?: string;
  hint: string;
  description: string;
};

export const portfolioItems: PortfolioItem[] = [
    { 
      slug: 'project-ventro-cgi',
      title: 'Project Ventro CGI', 
      category: 'Videography', 
      image: '/ventro banner.jpg',
      video: 'oddstudio/Ventro_CGI_kvgxdh',
      hint: 'cgi animation',
      description: 'A stunning CGI video for Project Ventro, showcasing their futuristic technology.'
    },
    { 
      slug: 'booktionary-com-bd',
      title: 'Booktionary.com.bd', 
      category: 'Branding', 
      image: '/booktionary banner.png', 
      video: 'oddstudio/booktionary-short_alozuw',
      hint: 'website design',
      description: 'A complete branding and website design for the online bookstore, Booktionary.com.bd.'
    },
    { 
      slug: 'event-hsbc-bank',
      title: 'Event HSBC Bank', 
      category: 'Photography', 
      image: 'https://placehold.co/600x400.png',
      video: 'samples/cat', 
      hint: 'corporate event',
      description: 'Event photography for a major corporate event hosted by HSBC Bank.'
    },
    { 
      slug: 'odd-signature-album-art',
      title: 'Odd Signature Album Art', 
      category: 'Branding', 
      image: 'https://placehold.co/600x400.png',
      video: 'samples/dog', 
      hint: 'album cover',
      description: 'Creative album art design for the band Odd Signature\'s latest release.'
    },
    { 
      slug: 'project-tasa',
      title: 'Project TASA', 
      category: 'Videography', 
      image: 'https://placehold.co/600x400.png', 
      video: 'samples/boat',
      hint: 'documentary film',
      description: 'A documentary-style video for Project TASA, highlighting their social impact.'
    },
    { 
      slug: 'project-spice-and-more',
      title: 'Project Spice and More', 
      category: 'Photography', 
      image: 'https://placehold.co/600x400.png',
      video: 'samples/coffee', 
      hint: 'food photography',
      description: 'Vibrant product photography for "Spice and More," a brand of exotic spices.'
    },
    {
      slug: 'project-arrivals-cave',
      title: 'Project Arrivals Cave',
      category: 'Videography',
      image: 'https://placehold.co/600x400.png',
      video: 'samples/surfing',
      hint: 'promotional video',
      description: 'A promotional video for Arrivals Cave, a new travel destination.'
    },
    {
      slug: 'astrocade-gaming-zone',
      title: 'Astrocade Gaming Zone',
      category: 'Branding',
      image: 'https://placehold.co/600x400.png',
      video: 'samples/gaming',
      hint: 'gaming logo',
      description: 'A dynamic branding package for Astrocade Gaming Zone, including logo and marketing materials.'
    },
    {
      slug: 'short-film-niaz-studio',
      title: 'Short Film - Niaz Studio',
      category: 'Videography',
      image: 'https://placehold.co/600x400.png',
      video: 'samples/cinematic',
      hint: 'film production',
      description: 'A cinematic short film produced in collaboration with Niaz Studio.'
    }
];
