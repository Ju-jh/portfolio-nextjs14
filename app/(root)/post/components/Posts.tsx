'use client'

import { getPosts } from '@/api/getPosts';
import Loading from '@/app/loading';
import Post from '@/components/Post';
import { PostType } from '@/constants/interface';
import Link from 'next/link';
import { Suspense, useEffect, useState } from 'react';

export default function Posts() {

  const [posts, setPosts] = useState<PostType[] | null>(null);

  useEffect(() => {
    getPosts(setPosts)
  }, [])
  
  return (
    <Suspense fallback={<Loading/>}>
    <div
      className='w-full flex-1 overflow-hidden overflow-y-scroll'
    >
      {
        posts
        ?
        posts.map((post:any, index:number) => (
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
        :
        <Loading />
      }
    </div>
    </Suspense>
  )
}