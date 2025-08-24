import React from 'react';

interface ReadingProgressIndicatorProps {
  progress: number;
}

export const ReadingProgressIndicator: React.FC<ReadingProgressIndicatorProps> = ({ progress }) => (
  <div className="fixed top-0 left-0 right-0 z-50 h-1">
    <div 
      className="h-full bg-gradient-to-r from-green-500 via-cyan-500 to-pink-500 transition-all duration-75 ease-out"
      style={{ 
        width: `${progress}%`,
        transition: 'width 75ms ease-out'
      }}
      role="progressbar"
      aria-valuenow={Math.round(progress)}
      aria-valuemin={0}
      aria-valuemax={100}
      aria-label={`Reading progress: ${Math.round(progress)}%`}
    />
  </div>
);
