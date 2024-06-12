import Link from 'next/link';

const Page = async () => {

  return (
    <div className='w-full'>
      <div>
        <h1 className='mb-[60px]'>게시글 작성 페이지</h1>
        <Link href={'/post'}>돌아가기</Link>
        <button></button>
      </div>
    </div>
  )
}

export default Page;