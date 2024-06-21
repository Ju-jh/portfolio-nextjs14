import Link from 'next/link';
import prisma from '../../../lib/prisma';
import Post from '@/components/Post';


const getPosts = async () => {
  const posts = await prisma.post.findMany({
    where: { published: true },
    include: {
      author: {
        select: { name: true}
      }
    }
  })
  return posts;
}


const Page = async () => {
  const posts = await getPosts();

  return (
    <div className='w-full'>
      <div className='w-full h-[100px] mb-[60px] flex items-center justify-between'>
        <h1>전체 게시글</h1>
        <Link href={'/post/create'} className='w-[200px] h-[50px] flex items-center justify-center shadow-inner shadow-brightDark rounded-2xl'>
          <p>
            게시글 작성
          </p>
        </Link>
      </div>
      {
        posts.map((post, index) => (
          <Link
            key={index}
            href={`/post/${post.id}`}>
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
  )
}

export default Page;