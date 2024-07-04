import Link from 'next/link';
import Posts from './components/Posts';
import Loading from '@/app/loading';
import { Suspense } from 'react';

export default async function PostsPage() {

  return (
    <div className='w-full h-dvh px-[200px] pt-[200px] pb-[100px] gap-[10px] flex flex-col items-center justify-between'>
      <div className='w-full h-[100px] flex items-center justify-between'>
        <h1>전체 게시글</h1>
        <Link href={'/post/create'} className='w-[200px] h-[50px] flex items-center justify-center shadow-inner shadow-brightDark rounded-2xl'>
          <p>
            게시글 작성
          </p>
        </Link>
      </div>
      <Suspense fallback={<Loading />}>
        <Posts/>
      </Suspense>
    </div>
  )
}