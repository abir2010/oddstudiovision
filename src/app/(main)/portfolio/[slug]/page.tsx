'use client';

import type { PortfolioItem } from '@/lib/portfolio-data';
import Image from 'next/image';
import { Badge } from '@/components/ui/badge';
import Reveal from '@/components/shared/reveal';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowLeft, Calendar, User, Layers, ArrowUpRight } from 'lucide-react';
import { CldVideoPlayer } from 'next-cloudinary';
import 'next-cloudinary/dist/cld-video-player.css';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { notFound } from 'next/navigation';
import { portfolioItems } from '@/lib/portfolio-data';
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
