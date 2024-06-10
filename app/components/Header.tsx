import Link from 'next/link'

function Header() {
  
  const menu = [
    { name: 'Home', route: '/' },
    { name: 'Services', route: '/services' },
    { name: 'Resume', route: '/resume' },
    { name: 'Work', route: '/work' },
    { name: 'Contact', route: '/contact' }
  ]

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
            menu.map((item, index) => (
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
