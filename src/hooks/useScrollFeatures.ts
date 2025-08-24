import { useState, useEffect, useCallback, useRef } from 'react';

interface HeaderItem {
  id: string;
  text: string;
  level: number;
}

const SCROLL_THRESHOLD = 300;
const SCROLL_BEHAVIOR: ScrollBehavior = 'smooth';

export const useScrollFeatures = (markdownContent: string) => {
  const [showUpButton, setShowUpButton] = useState(false);
  const [readingProgress, setReadingProgress] = useState(0);
  const [activeHeader, setActiveHeader] = useState<string>('');
  const [headers, setHeaders] = useState<HeaderItem[]>([]);
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    const headerRegex = /^(#{1,3})\s+(.+)$/gm;
    const extractedHeaders: HeaderItem[] = [];
    let match;

    while ((match = headerRegex.exec(markdownContent)) !== null) {
      const level = match[1].length;
      const text = match[2].trim();
      const id = text.toLowerCase().replace(/[^a-z0-9]+/g, '-');
      extractedHeaders.push({ id, text, level });
    }

    setHeaders(extractedHeaders);
  }, [markdownContent]);

  useEffect(() => {
    if (headers.length === 0) return;

    const timer = setTimeout(() => {
      const observer = new IntersectionObserver(
        (entries) => {
          let topMostHeader = '';
          let topMostPosition = Infinity;

          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const rect = entry.boundingClientRect;
              if (rect.top < topMostPosition) {
                topMostPosition = rect.top;
                topMostHeader = entry.target.id;
              }
            }
          });

          if (topMostHeader) {
            setActiveHeader(topMostHeader);
          }
        },
        {
          rootMargin: '-10% 0px -80% 0px',
          threshold: [0, 0.1, 0.5, 1],
        }
      );

      observerRef.current = observer;

      headers.forEach((header) => {
        const element = document.getElementById(header.id);
        if (element) {
          observer.observe(element);
        }
      });
    }, 100);

    return () => {
      clearTimeout(timer);
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, [headers]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      
      setShowUpButton(scrollTop > SCROLL_THRESHOLD);
      setReadingProgress(Math.min(100, Math.max(0, scrollPercent)));
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = useCallback(() => {
    window.scrollTo({ top: 0, behavior: SCROLL_BEHAVIOR });
  }, []);

  const scrollToHeading = useCallback((id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const elementPosition = element.offsetTop;
      const offsetPosition = elementPosition - 20;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: SCROLL_BEHAVIOR
      });
    }
  }, []);

  return { showUpButton, scrollToTop, readingProgress, headers, activeHeader, scrollToHeading };
};
