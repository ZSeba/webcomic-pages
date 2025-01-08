import { sql } from '@vercel/postgres';

import { Page, PageDTO } from './definitions';

const mapPageDTO = (pageDTOs: PageDTO[]): Page[] => {
  return pageDTOs.map((pageDTO) => {
    return {
      number: pageDTO.number,
      imageURL: pageDTO.image_url,
    };
  });
};

const sortPages = (pages: Page[]): Page[] => {
  return pages.sort((a, b) => a.number - b.number);
};

export const fetchPages = async (): Promise<Page[]> => {
  try {
    const data = await sql<PageDTO>`SELECT * FROM pages`;
    return mapPageDTO(data.rows);
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch pages.');
  }
}