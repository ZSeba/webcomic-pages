import Image from 'next/image'

import { Page } from '../lib/definitions'

export type PageImageProps = {
  page: Page;
}

export const PageImage = ({ page } : PageImageProps) => 
  <div className='flex justify-center p-2'>
    <Image
      priority
      aria-hidden
      className='border-black border-2 '
      src={page.imageURL}
      alt={`Page ${page.number}`}
      width={900}
      height={1400}
    />    
  </div>