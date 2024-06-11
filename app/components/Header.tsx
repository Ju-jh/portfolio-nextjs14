import Link from 'next/link'
import { menuArray } from '../constants'

const Header = () => {
  
  return(
      <header className='header w-full h-[100px] flex items-center justify-between '>
        <Link
          href={'/'}
          className='logoConatiner h-full flex items-center justify-between'
        >
          <span className='text-[30px]  hover:text-[#04fa9a]'>Jaehun</span>
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
