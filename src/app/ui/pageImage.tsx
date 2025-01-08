import Image from 'next/image'

import { Page } from '../lib/definitions'

export type PageImageProps = {
  page: Page;
}

export const PageImage = ({ page } : PageImageProps) => 
  <div className='flex justify-center'>
    <Image
      aria-hidden
      src={page.imageURL}
      alt={`Page ${page.number}`}
      width={900}
      height={1400}
    />    
  </div>