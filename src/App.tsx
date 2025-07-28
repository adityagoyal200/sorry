import React, { useState } from 'react';
import DateLock from './components/DateLock';
import BackgroundAnimation from './components/BackgroundAnimation';
import MusicPlayer from './components/MusicPlayer';
import BookNavigation from './components/BookNavigation';
import Page1 from './components/pages/Page1';
import Page2 from './components/pages/Page2';
import Page3 from './components/pages/Page3';
import Page4 from './components/pages/Page4';
import Page5 from './components/pages/Page5';

function App() {
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [isTransitioning, setIsTransitioning] = useState(false);
  
  const totalPages = 5;

  const handlePageChange = (newPage: number) => {
    if (newPage === currentPage) return;
    
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentPage(newPage);
      setTimeout(() => setIsTransitioning(false), 100);
    }, 300);
  };

  const nextPage = () => {
    if (currentPage < totalPages) {
      handlePageChange(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      handlePageChange(currentPage - 1);
    }
  };

  if (!isUnlocked) {
    return <DateLock onUnlock={() => setIsUnlocked(true)} />;
  }

  const pages = [Page1, Page2, Page3, Page4, Page5];
  const CurrentPageComponent = pages[currentPage - 1];

  return (
    <div className="relative">
      <BackgroundAnimation />
      <MusicPlayer />
      
      <div 
        className={`transition-all duration-300 ${
          isTransitioning ? 'opacity-0 scale-95' : 'opacity-100 scale-100'
        }`}
      >
        <CurrentPageComponent />
      </div>
      
      <BookNavigation
        currentPage={currentPage}
        totalPages={totalPages}
        onNextPage={nextPage}
        onPrevPage={prevPage}
        onPageSelect={handlePageChange}
      />
    </div>
  );
}

export default App;