import { portfolioItems } from '@/lib/portfolio-data';
import { notFound } from 'next/navigation';
import PortfolioDetail from '@/components/portfolio/portfolio-detail';

export default function PortfolioItemPage({ params }: { params: { slug: string } }) {
  const item = portfolioItems.find((p) => p.slug === params.slug);

  if (!item) {
    notFound();
  }

  return <PortfolioDetail item={item} />;
}

export function generateStaticParams() {
    return portfolioItems.map((item) => ({
      slug: item.slug,
    }));
}
