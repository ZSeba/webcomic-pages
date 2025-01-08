'use client';
import React, { useState} from 'react';

import { Page } from '../lib/definitions';
import { PageImage } from './pageImage';
import { PageNavigator } from './pageNavigator';

export type PageViewerProps = {
  pages: Page[];
}

export const PageViewer = ({ pages }: PageViewerProps ) => {
  const [ currentPage, setCurrentPage ] = useState(0);
  return (
    <>
      <PageImage page={pages[currentPage]} />
      <PageNavigator pages={pages} currentPage={currentPage} setCurrentPage={setCurrentPage} />
    </>
  );
}


