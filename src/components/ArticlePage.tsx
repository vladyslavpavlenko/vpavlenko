import React, { useMemo } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { ReadingProgressIndicator } from './ReadingProgressIndicator';
import { TableOfContents } from './TableOfContents';
import { ScrollToTopButton } from './ScrollToTopButton';
import { createMarkdownComponents } from './MarkdownComponents';
import { useScrollFeatures } from '../hooks/useScrollFeatures';

interface ArticlePageProps {
  markdownContent: string;
  onBack?: () => void;
}

const ArticlePage: React.FC<ArticlePageProps> = ({ markdownContent }) => {
  const { showUpButton, scrollToTop, readingProgress, headers, activeHeader, scrollToHeading } = useScrollFeatures(markdownContent);
  
  const markdownComponents = useMemo(() => createMarkdownComponents(), []);
  const remarkPlugins = useMemo(() => [remarkGfm], []);

  return (
    <div className="min-h-screen bg-white">
      <ReadingProgressIndicator progress={readingProgress} />
      {showUpButton && <ScrollToTopButton onClick={scrollToTop} />}
      {headers.length > 0 && (
        <TableOfContents 
          headers={headers}
          activeHeader={activeHeader}
          onHeaderClick={scrollToHeading}
        />
      )}

      <main className="px-4 py-8">
        <div className="flex justify-center">
          <article className="max-w-3xl w-full">
            <div className="text-left">
              <ReactMarkdown 
                remarkPlugins={remarkPlugins}
                components={markdownComponents}
              >
                {markdownContent}
              </ReactMarkdown>
            </div>
          </article>
        </div>
      </main>
    </div>
  );
};

export default ArticlePage;