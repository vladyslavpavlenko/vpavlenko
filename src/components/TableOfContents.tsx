import React from 'react';

interface HeaderItem {
  id: string;
  text: string;
  level: number;
}

interface TableOfContentsProps {
  headers: HeaderItem[];
  activeHeader: string;
  onHeaderClick: (id: string) => void;
}

export const TableOfContents: React.FC<TableOfContentsProps> = ({ 
  headers, 
  activeHeader, 
  onHeaderClick 
}) => (
  <div className="fixed left-1/2 transform -translate-x-[calc(50%+36rem)] top-16 w-64 z-40 hidden xl:block">
    <nav className="space-y-1">
      {headers.map((header) => (
        <button
          key={header.id}
          onClick={() => onHeaderClick(header.id)}
          className={`block w-full text-left text-sm transition-colors duration-200 hover:text-black py-1 px-2 ${
            activeHeader === header.id
              ? 'text-gray-800'
              : 'text-gray-400'
          }`}
        >
          {header.text}
        </button>
      ))}
    </nav>
  </div>
);
