import React from 'react';
import type { Components } from 'react-markdown';

const generateHeadingId = (text: string): string => {
  return text.toLowerCase().replace(/[^a-z0-9]+/g, '-');
};

export const createMarkdownComponents = (): Components => ({
  h1: ({ children, ...props }) => {
    const id = children?.toString() ? generateHeadingId(children.toString()) : '';
    return (
      <h1 
        id={id}
        className="text-4xl font-bold text-gray-900 mb-6 mt-8 first:mt-0"
        {...props}
      >
        {children}
      </h1>
    );
  },
  h2: ({ children, ...props }) => {
    const id = children?.toString() ? generateHeadingId(children.toString()) : '';
    return (
      <h2 
        id={id}
        className="text-2xl font-semibold text-gray-900 mb-6 mt-8 first:mt-0"
        {...props}
      >
        {children}
      </h2>
    );
  },
  h3: ({ children, ...props }) => {
    const id = children?.toString() ? generateHeadingId(children.toString()) : '';
    return (
      <h3 
        id={id}
        className="text-xl font-semibold text-gray-900 mb-3 mt-6 first:mt-0"
        {...props}
      >
        {children}
      </h3>
    );
  },
  p: ({ children, ...props }) => (
    <p className="text-gray-700 leading-relaxed mb-4" {...props}>
      {children}
    </p>
  ),
  code: ({ children, ...props }) => (
    <code className="bg-gray-100 text-gray-800 px-2 py-1 rounded text-sm font-mono border border-gray-200" {...props}>
      {children}
    </code>
  ),
  pre: ({ children, ...props }) => (
    <pre className="bg-gray-100 text-gray-800 p-4 rounded-lg overflow-x-auto mb-4 border border-gray-200" {...props}>
      {children}
    </pre>
  ),
  ul: ({ children, ...props }) => (
    <ul className="list-disc list-outside text-gray-700 mb-4 space-y-1 ml-6 pl-2" {...props}>
      {children}
    </ul>
  ),
  ol: ({ children, ...props }) => (
    <ol className="list-decimal list-outside text-gray-700 mb-4 space-y-1 ml-6 pl-2" {...props}>
      {children}
    </ol>
  ),
  li: ({ children, ...props }) => (
    <li className="text-gray-700 pl-2" {...props}>
      {children}
    </li>
  ),
  blockquote: ({ children, ...props }) => (
    <blockquote className="border-l-4 border-gray-300 pl-4 italic text-gray-600 mb-4" {...props}>
      {children}
    </blockquote>
  ),
  a: ({ children, href, ...props }) => (
    <a 
      href={href} 
      className="text-blue-600 hover:text-blue-800 underline focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-1 rounded" 
      target={href?.startsWith('http') ? '_blank' : undefined}
      rel={href?.startsWith('http') ? 'noopener noreferrer' : undefined}
      {...props}
    >
      {children}
    </a>
  ),
  strong: ({ children, ...props }) => (
    <strong className="font-semibold text-gray-900" {...props}>
      {children}
    </strong>
  ),
  em: ({ children, ...props }) => (
    <em className="italic text-gray-700" {...props}>
      {children}
    </em>
  ),
});
