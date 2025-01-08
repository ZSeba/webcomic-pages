import { Button } from './button';
import { Page } from '../lib/definitions';

export type PageNavigatorProps = {
  pages: Page[],
  currentPage: number,
  setCurrentPage: (currentPage: number) => void,
}

export const PageNavigator = ({ pages, currentPage, setCurrentPage } : PageNavigatorProps) => {
  return (
    <div className="flex justify-center gap-4">
      <Button
        disabled={currentPage === 1}
        onClick={() => setCurrentPage(currentPage - 1)}
      >
        Previous
      </Button>
      <Button
        disabled={currentPage === pages.length}
        onClick={() => setCurrentPage(currentPage + 1)}
      >
        Next
      </Button>
    </div>
  );
}