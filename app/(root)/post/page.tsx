import Link from 'next/link';
import Post from '@/components/Post';
import { getPosts } from '@/app/api/getPosts';



const Page = async () => {
  const posts = await getPosts();

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
      <div
        className='w-full flex-1 overflow-hidden overflow-y-scroll'
      >
      {
        posts.map((post, index) => (
          <Link
            key={index}
            href={`/post/${post.id}`}
            className="w-full"
          >
            <Post
              id={post.id}
              title={post.title}
              content={post.content}
              authorName={post.author?.name || 'Unknown Author'}
            />
          </Link>
        ))
      }
      </div>
    </div>
  )
}

export default Page;