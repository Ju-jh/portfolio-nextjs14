'use client'

import Link from 'next/link';
import DownloadIcon from '../../public/assets/svg/download.svg'
import Image from 'next/image';
import { iconArray } from '../constants';
import { useEffect, useState } from 'react';

const Home = () => {

  const [isFirstNameSentenceKorean, setIsFirstNameSentenceKorean] = useState<boolean>(false);
  const [isSecondNameSentenceKorean, setIsSecondNameSentenceKorean] = useState<boolean>(false);
  const [isOneSentenceKorean, setIsOneSentenceKorean] = useState<boolean>(false);
  const [isSecondSentenceKorean, setIsSecondSentenceKorean] = useState<boolean>(false);
  const [isThirdSentenceKorean, setIsThirdSentenceKorean] = useState<boolean>(false);
  const [isFourthSentenceKorean, setIsFourthSentenceKorean] = useState<boolean>(false);

  useEffect(() => {
    const toggleStates = [
      setIsFirstNameSentenceKorean,
      setIsSecondNameSentenceKorean,
      setIsOneSentenceKorean,
      setIsSecondSentenceKorean,
      setIsThirdSentenceKorean,
      setIsFourthSentenceKorean,
    ];

    let currentIndex = 0;

    const intervalId = setInterval(() => {
      toggleStates.forEach((toggleState, index) => {
        setTimeout(() => {
          toggleState(prev => !prev);
        }, index * 50);
      });
      currentIndex = (currentIndex + 1) % toggleStates.length;
    }, 5000);

    return () => clearInterval(intervalId);
  }, []);

  return (
      <section className='introduceSection w-full h-[2500px] xl:py-[300px] flex items-start justify-between z-0'>
        <div className='leftContainer flex flex-col items-start bg-red-500'>
          <p className='text-[20px] mb-[10px]'>Web Frontend Developer</p>
          <div className='flex-1 flex-col'>
            <div className='min-w-[300px] min-h-[100px] flex items-center justify-start'>
              <p
                className='text-[70px] mb-[10px] transition-opacity duration-500 absolute'
                style={{ opacity: isFirstNameSentenceKorean ? '0' : '100' }}
              >
                {`Hello I'm`}
              </p>
              <p
                className='text-[70px] mb-[10px] transition-opacity duration-500 absolute'
                style={{ opacity: isFirstNameSentenceKorean ? '100' : '0' }}
              >
                {`안녕하세요`}
              </p>

            </div>
            <div className='min-w-[300px] min-h-[100px] flex items-center justify-start'>
              <p
                className='text-[70px] text-neon-green mb-[10px] transition-opacity duration-500 absolute'
                style={{ opacity: isSecondNameSentenceKorean ? '0' : '100' }}
              >
                Jaehun Ju
              </p>
              <p
                className='text-[70px] text-neon-green mb-[10px] transition-opacity duration-500 absolute'
                style={{ opacity: isSecondNameSentenceKorean ? '100' : '0' }}
              >
                주재훈입니다
              </p>
            </div>
          </div>
          <div className='flex-1 flex-col'>
            <div className='min-w-[300px] h-[40px] flex items-center justify-start'>
              <p
                className='text-[20px] mb-[10px] transition-opacity duration-500 absolute'
                style={{ opacity: isOneSentenceKorean ? '0' : '100' }}
              >
                I am currently a frontend developer,
              </p>
              <p
                className='text-[20px] mb-[10px] transition-opacity duration-500 absolute'
                style={{ opacity: isOneSentenceKorean ? '100' : '0' }}
              >
                현재 저는 프론트엔드 개발자입니다.
              </p>
            </div>
            <div className='min-w-[700px] h-[40px] flex items-center justify-start'>
              <p
                className='text-[20px] mb-[10px] transition-opacity duration-500 absolute'
                style={{ opacity: isSecondSentenceKorean ? '0' : '100' }}
              >
                but I am also very interested in backend development, databases,
              </p>
              <p
                className='text-[20px] mb-[10px] transition-opacity duration-500 absolute'
                style={{ opacity: isSecondSentenceKorean ? '100' : '0' }}
              >
                저는 백엔드 개발과, 데이터베이스,
              </p>
            </div>
            <div className='min-w-[700px] h-[40px] flex items-center justify-start'>
              <p
                className='text-[20px] mb-[10px] transition-opacity duration-500 absolute'
                style={{ opacity: isThirdSentenceKorean ? '0' : '100' }}
              >
                infrastructure building, and AI.
              </p>
              <p
                className='text-[20px] mb-[10px] transition-opacity duration-500 absolute'
                style={{ opacity: isThirdSentenceKorean ? '100' : '0' }}
              >
                인프라 구축과 AI에도 관심이 많습니다.
              </p>
            </div>
            <div className='min-w-[700px] h-[40px] flex items-center justify-start'>
              <p
                className='text-[20px] mb-[10px] transition-opacity duration-500 absolute'
                style={{ opacity: isFourthSentenceKorean ? '0' : '100' }}
              >
                {`My belief is, "Consistency puts food on the table."`}
              </p>
              <p
                className='text-[20px] mb-[10px] transition-opacity duration-500 absolute'
                style={{ opacity: isFourthSentenceKorean ? '100' : '0' }}
              >
                {`제 유일한 신념은, "꾸준함이 밥 먹여준다 입니다."`}
              </p>
            </div>
          </div>
          <div className='referenceBoxDiv flex items-center justify-between text-neon-green py-[30px]'>
            <button className='w-[200px] h-[50px] flex items-center justify-center border-solid border-2 border-neon-green rounded-3xl mr-[40px]'>
              <span className='mr-[10px]'>
                DOWNLOAD CV
              </span>
              <DownloadIcon />
            </button>
            {
              iconArray.map((item, index) => (
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
      <div  className='rightContainer w-[500px] h-[500px] relative'>
        <div className='w-[500px] h-[500px] rounded-full border-opacity-65 border-none border-[2px] border-neon-green animate-spin-slow absolute shadow-xl shadow-neon-green '>
        </div>
        <div className='w-[500px] h-[500px] rounded-full border-opacity-65 border-none border-[2px] border-neon-green animate-spin-slow2 absolute shadow-lg shadow-neon-green '>
        </div>
        <div className='w-[500px] h-[500px] rounded-full border-opacity-65 border-none border-[2px] border-neon-green animate-spin-slow3 absolute shadow-lg shadow-[#58b791] '>
        </div>
        <div className='w-[500px] h-[500px] rounded-full border-opacity-65 border-none border-[2px] border-neon-green animate-spin-slow4 absolute drop-shadow-xl shadow-lg shadow-[#81f7f7] '>
        </div>
        <div className='w-[500px] h-[500px] flex items-center justify-center absolute'>
            <Image width={700} height={700} src='/assets/img/myPhoto.png' alt='my_Photo' className='absolute'/>
        </div>
      </div>
      </section>
  );
}

export default Home