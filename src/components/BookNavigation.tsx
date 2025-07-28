import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface BookNavigationProps {
  currentPage: number;
  totalPages: number;
  onNextPage: () => void;
  onPrevPage: () => void;
  onPageSelect: (page: number) => void;
}

export default function BookNavigation({ 
  currentPage, 
  totalPages, 
  onNextPage, 
  onPrevPage, 
  onPageSelect 
}: BookNavigationProps) {
  return (
    <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-30">
      <div className="flex items-center space-x-4 bg-white/80 backdrop-blur-sm px-6 py-3 rounded-full shadow-lg border border-white/50">
        <button
          onClick={onPrevPage}
          disabled={currentPage === 1}
          className="p-2 rounded-full transition-all duration-300 disabled:opacity-30 disabled:cursor-not-allowed hover:bg-purple-100"
        >
          <ChevronLeft className="w-5 h-5 text-purple-600" />
        </button>
        
        <div className="flex space-x-2">
          {[...Array(totalPages)].map((_, i) => (
            <button
              key={i}
              onClick={() => onPageSelect(i + 1)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                currentPage === i + 1
                  ? 'bg-purple-500 scale-125'
                  : 'bg-purple-200 hover:bg-purple-300'
              }`}
            />
          ))}
        </div>
        
        <button
          onClick={onNextPage}
          disabled={currentPage === totalPages}
          className="p-2 rounded-full transition-all duration-300 disabled:opacity-30 disabled:cursor-not-allowed hover:bg-purple-100"
        >
          <ChevronRight className="w-5 h-5 text-purple-600" />
        </button>
      </div>
    </div>
  );
}