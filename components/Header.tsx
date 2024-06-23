'use client'

import { menuArray } from '@/constants'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const Header = () => {

  const path = usePathname()
  
  return(
      <header className='header w-full h-[150px] px-[200px] fixed flex items-center justify-between z-10 bg-[rgba(24,26,32,0.6)] '>
        <Link
          href={'/'}
          className='logoConatiner h-full flex items-center justify-between '
        >
          <span className='text-[30px]  hover:text-[#04fa9a] z-2 transition-all'>Jaehun</span>
          <span className='text-[30px] text-[#04fa9a]'>.</span>
        </Link>
        <div className='menuContainer h-full flex items-center justify-between'>
          {
            menuArray.map((item, index) => (
              <Link
                href={item.route}
                className={`${path === item.route && 'text-[#04fa9a]'} hover:text-[#04fa9a] mr-[30px] hover:underline hover:underline-offset-4 transition-all`}
                key={index}
              >
                <span className='text-[20px]'>{ item.name }</span>
              </Link>
            ))
          }
        </div>
      </header>
  )
}

export default Header
