'use client';
import React, { useState} from 'react';

import { Page } from '../lib/definitions';
import { PageImage } from './pageImage';
import { PageNavigator } from './pageNavigator';

export type PageViewerProps = {
  pages: Page[];
}

export const PageViewer = ({ pages }: PageViewerProps ) => {
  const [ currentPage, setCurrentPage ] = useState(1);
  const shownPage = pages.find(page => page.number == currentPage) || pages[0];
  return (
    <>
      <PageImage page={shownPage} />
      <PageNavigator pages={pages} currentPage={currentPage} setCurrentPage={setCurrentPage} />
    </>
  );
}


