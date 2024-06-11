import Link from 'next/link';
import GithubIcon from '../../public/assets/svg/github.svg'
import LinkedInIcon from '../../public/assets/svg/linkedin.svg'
import TistoryIcon from '../../public/assets/svg/tistory.svg'
import DownloadIcon from '../../public/assets/svg/download.svg'
import Image from 'next/image';

export default function Home() {

  const icon = [
    {name: 'github', route: '/', icon: GithubIcon},
    {name: 'linkedIn', route: '/', icon: LinkedInIcon},
    {name: 'TistoryBlog', route: '/', icon: TistoryIcon},
  ]

  return (
      <section className='introduceSection w-full xl:py-[200px] flex items-center justify-between'>
        <div className='leftContainer flex flex-col items-start'>
          <p className='text-[20px]'>Web Frontend Developer</p>
          <p className='text-[70px]'>{`Hello I'm`}</p>
          <p className='text-[70px] text-neon-green'>Jaehun Ju</p>
          <p className='text-[20px] mb-[10px]'>
            I am currently a frontend developer,
          </p>
          <p className='text-[20px] mb-[10px]'>
            but I am also very interested in backend development, databases,
          </p>
          <p className='text-[20px] mb-[10px]'>
            infrastructure building, and AI.
          </p>
          <p className='text-[20px] mb-[10px]'>
            {`My belief is, "Consistency puts food on the table."`}
          </p>
          <div className='referenceBoxDiv flex items-center justify-between text-neon-green py-[20px]'>
            <button className='w-[200px] h-[50px] flex items-center justify-center border-solid border-2 border-neon-green rounded-3xl mr-[40px]'>
              <span className='mr-[10px]'>
                DOWNLOAD CV
              </span>
              <DownloadIcon />
            </button>
            {
              icon.map((item, index) => (
                <Link
                  href={item.route}
                  key={index}
                  className='mr-[40px]'
                >
                  {<item.icon/>}
                </Link>
              ))
            }
          </div>
        </div>
        <div className='rightContainer w-[500px] h-[500px] flex items-center justify-center rounded-full border-opacity-65 border-dashed border-2 border-neon-green'>
            <Image width={700} height={700} src='/assets/img/myPhoto.png' alt='my_Photo'/>
        </div>
      </section>
  );
}
