
interface PostProps {
  id: string;
  title: string;
  content: string|null;
  authorName: string|null;
  }
  
  import type { NextPage } from "next";


const Post: NextPage<PostProps> = ({id, title, content, authorName}) => {
  return (
    <div className='w-[100%] h-[100px] mb-[20px] rounded-xl shadow-sm shadow-bright-dark p-[10px] '>
      <h3>{ authorName }</h3>
      <h4>{title}</h4>
      <p>{content}</p>
    </div>
  )
}

export default Post