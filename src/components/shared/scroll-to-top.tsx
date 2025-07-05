'use client';

import { useEffect, useState } from 'react';
import { ArrowUp } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);

    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  return (
    <div className="fixed bottom-5 right-5 z-50">
      <Button
        size="icon"
        onClick={scrollToTop}
        className={cn(
          'rounded-full shadow-lg transition-opacity duration-300',
          isVisible ? 'opacity-100' : 'opacity-0'
        )}
        variant="default"
        aria-label="Scroll to top"
        disabled={!isVisible}
      >
        <ArrowUp className="h-5 w-5" />
      </Button>
    </div>
  );
}
