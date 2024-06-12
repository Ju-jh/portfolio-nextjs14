import DetailPost from '@/app/components/DetailPost';


interface PostProps {
  id: string;
  title: string;
  content: string|null;
  authorName: string|null;
  }
  

const DetailPostPage = () => {

  return (
    <div className='w-full'>
      <DetailPost id='clxbu6ewk000112gev95h8084' title='갱갱갱' content='내용' authorName='Jujaehun'/>
    </div>
  )
}

export default DetailPostPage;