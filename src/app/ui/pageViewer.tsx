'use client';
import React, { useEffect, useState} from 'react';

import { Page } from '../lib/definitions';
import { PageImage } from './pageImage';
import { PageNavigator } from './pageNavigator';
import { caveat } from './fonts';

export type PageViewerProps = {
  pages: Page[];
}

export const PageViewer = ({ pages }: PageViewerProps ) => {
  const [ currentPage, setCurrentPage ] = useState(1);
  const shownPage = pages.find(page => page.number == currentPage) || pages[0];

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
  }, [currentPage]);

  return (
    <>
      <h1 className={`${caveat.className} font-sans text-2xl lg:text-9xl flex justify-center m-2`}>
        The Cat Defenders!
      </h1>
      <PageImage page={shownPage} />
      <PageNavigator pages={pages} currentPage={currentPage} setCurrentPage={setCurrentPage} />
      <footer>
        <p className={`${caveat.className} text-sm text-center`}>{"Website by Sebastian Vidal"}</p>
        <p className={`${caveat.className} text-sm text-center`}>{"Art by Sebastian Vidal and Story by Keyo"}</p>
      </footer>
    </>
  );
}


