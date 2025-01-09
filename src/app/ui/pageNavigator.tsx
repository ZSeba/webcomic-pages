import { Button } from './button';
import { Page } from '../lib/definitions';
import { caveat } from './fonts';

export type PageNavigatorProps = {
  pages: Page[],
  currentPage: number,
  setCurrentPage: (currentPage: number) => void,
}

export const PageNavigator = ({ pages, currentPage, setCurrentPage } : PageNavigatorProps) => {
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