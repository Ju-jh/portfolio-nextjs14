'use client'

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

const CreatePage = () => {

  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const router = useRouter()

  const handleTitleChange = (event:any) => {
    setTitle(event.target.value)
  }

  const handleContentChange = (event:any) => {
    setContent(event.target.value)
  }

  const handleSubmit = async (event:any) => {
    event.preventDefault();
    try {
      const response = await fetch('/api/post-create', {
        method: 'POST',
        headers: {
        'Content-Type' : 'application/json'
        },
        body: JSON.stringify({title, content})
      })
      if (response.ok) {
        router.push('/post')
        router.refresh()
      }
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <div className='w-full h-dvh px-[200px] pt-[200px] pb-[50px]'>
      <div className='w-full h-full flex flex-col items-center justify-between'>
        <div className='w-full h-[100px]'>
          <h1 className='mb-[60px]'>게시글 작성 페이지</h1>
          <Link href={'/post'}>돌아가기</Link>
        </div>
        <form onSubmit={handleSubmit} className='w-full h-full flex items-center justify-center'>
          <div>
            <label htmlFor="title">Title:</label>
            <input type="text" id='title' value={title} onChange={handleTitleChange} required className='text-black'/>
          </div>
          <div>
            <label htmlFor="content">Content:</label>
            <input type="content" id='content' value={content} onChange={handleContentChange} required className='text-black'/>
          </div>
          <button type='submit'>Submit</button>
        </form>
      </div>
    </div>
  )
}

export default CreatePage;