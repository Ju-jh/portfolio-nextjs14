import type { NextPage } from "next";

interface PostProps {
  id: string;
  title: string;
  content: string|null;
  authorName: string | null;
  createdAt: string;
  }
  

const DetailPost: NextPage<PostProps> = ({id, title, content, authorName, createdAt}) => {
  return (
    <div className='w-full min-h-[400px] mb-[20px] flex flex-col items-start justify-start rounded-lg shadow-sm shadow-neonGreen p-[10px]'>
      <div className='w-full h-[50px] px-[20px] flex items-center justify-between'>
        <p className='text-[20px]'>제목 : {title}</p>
        <h3>게시자 : { authorName }</h3>
        <h3>작성일자 : { createdAt }</h3>
      </div>
      <div className=' p-[20px]'>
        <span className='block'>내용 : {content}</span>
      </div>
    </div>
  )
}

export default DetailPost