import Link from 'next/link'
import { menuArray } from '../constants'

const Header = () => {
  
  return(
      <header className='header w-full h-[150px] px-[200px] fixed flex items-center justify-between z-10 bg-[rgba(24,26,32,0.6)] '>
        <Link
          href={'/'}
          className='logoConatiner h-full flex items-center justify-between '
        >
          <span className='text-[30px]  hover:text-[#04fa9a] z-2'>Jaehun</span>
          <span className='text-[30px] text-[#04fa9a]'>.</span>
        </Link>
        <div className='menuContainer h-full flex items-center justify-between'>
          {
            menuArray.map((item, index) => (
              <Link
                href={item.route}
                className=' hover:text-[#04fa9a] mr-[30px]'
                key={index}
              >
                <span className='text-[20px] hover:underline underline-offset-4'>{ item.name }</span>
              </Link>
            ))
          }
        </div>
      </header>
  )
}

export default Header
