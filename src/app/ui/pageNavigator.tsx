'use client'
import { useEffect } from 'react';

import { Button } from './button';
import { Page } from '../lib/definitions';
import { caveat } from './fonts';

export type PageNavigatorProps = {
  pages: Page[],
  currentPage: number,
  setCurrentPage: (currentPage: number) => void,
}

export const PageNavigator = ({ pages, currentPage, setCurrentPage } : PageNavigatorProps) => {
  //Listen to key presses to navigate pages
  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      switch(event.key) {
        case "ArrowLeft":
          if (currentPage > 1) setCurrentPage(currentPage - 1);
          break;
        case "ArrowRight":
          if (currentPage < pages.length) setCurrentPage(currentPage + 1);
          break;
      }
    }
    document.addEventListener("keydown", handleKeyPress);
    // cleanup listener after component unmounts
    return () => document.removeEventListener("keydown", handleKeyPress);
  }, [currentPage, pages.length, setCurrentPage]);

  return (
    <div className="flex justify-center gap-4 m-2">
      <Button
        disabled={currentPage === 1}
        onClick={() => setCurrentPage(1)}
      >
        {"<<"}
      </Button>
      <Button
        disabled={currentPage === 1}
        onClick={() => setCurrentPage(currentPage - 1)}
      >
        {"<"}
      </Button>
      <p className={`${caveat.className} text-2xl`}>
        {`Page ${currentPage} of ${pages.length}`}
      </p>
      <Button
        disabled={currentPage === pages.length}
        onClick={() => setCurrentPage(currentPage + 1)}
      >
        {">"}
      </Button>
      <Button
        disabled={currentPage === pages.length}
        onClick={() => setCurrentPage(pages.length)}
      >
        {">>"}
      </Button>
    </div>
  );
}