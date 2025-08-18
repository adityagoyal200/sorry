// /components/BookNavigation.tsx
import React, { useEffect } from 'react';
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
  onPageSelect,
}: BookNavigationProps) {

  // Keyboard navigation
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') onNextPage();
      if (e.key === 'ArrowLeft') onPrevPage();
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [onNextPage, onPrevPage]);

  // Swipe navigation (mobile)
  useEffect(() => {
    let touchStartX = 0;
    let touchEndX = 0;

    const handleTouchStart = (e: TouchEvent) => {
      touchStartX = e.changedTouches[0].screenX;
    };

    const handleTouchEnd = (e: TouchEvent) => {
      touchEndX = e.changedTouches[0].screenX;
      if (touchStartX - touchEndX > 50) onNextPage(); // swipe left
      if (touchEndX - touchStartX > 50) onPrevPage(); // swipe right
    };

    window.addEventListener('touchstart', handleTouchStart);
    window.addEventListener('touchend', handleTouchEnd);
    return () => {
      window.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchend', handleTouchEnd);
    };
  }, [onNextPage, onPrevPage]);

  return (
    <div className="fixed bottom-6 left-0 right-0 flex justify-center items-center gap-4 z-50">
      {/* Prev Button */}
      <button
        onClick={onPrevPage}
        disabled={currentPage === 1}
        className={`p-3 rounded-full transition-all duration-300 text-white shadow-lg transform hover:scale-125 hover:rotate-12
        ${currentPage === 1 ? 'bg-gray-600 opacity-50 cursor-not-allowed' : 'bg-gradient-to-r from-pink-500 to-yellow-400 hover:shadow-[0_0_15px_#ff00ff]'}
        `}
      >
        <ChevronLeft size={24} />
      </button>

      {/* Page Indicators */}
      <div className="flex gap-2">
        {Array.from({ length: totalPages }).map((_, i) => (
          <button
            key={i}
            onClick={() => onPageSelect(i + 1)}
            className={`w-4 h-4 rounded-full transition-all duration-300 border-2 border-white
            ${currentPage === i + 1 ? 'bg-white scale-125 shadow-[0_0_10px_#00ffff]' : 'bg-transparent hover:bg-white/30'}
            `}
          />
        ))}
      </div>

      {/* Next Button */}
      <button
        onClick={onNextPage}
        disabled={currentPage === totalPages}
        className={`p-3 rounded-full transition-all duration-300 text-white shadow-lg transform hover:scale-125 hover:-rotate-12
        ${currentPage === totalPages ? 'bg-gray-600 opacity-50 cursor-not-allowed' : 'bg-gradient-to-r from-green-400 to-blue-500 hover:shadow-[0_0_15px_#00ff00]'}
        `}
      >
        <ChevronRight size={24} />
      </button>
    </div>
  );
}
