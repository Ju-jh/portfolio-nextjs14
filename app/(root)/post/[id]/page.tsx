'use client';

import { useEffect, useState } from 'react';
import DetailPost from '@/components/DetailPost';
import { useParams } from 'next/navigation';

interface PostProps {
  author: {
    id: string;
    name: string;
  }
  id: string;
  title: string;
  content: string | null;
  authorName: string | null;
  created_at: string;
}

const DetailPostPage = () => {
  const param = useParams();
  const id = param.id.toString();

  const [data, setData] = useState<PostProps | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`/api/post/${id}`,{
        method: 'GET',
        headers: {
        'Content-Type' : 'application/json'
        },
      });
        const result = await response.json();
        console.log(result.result.author.name,'여기여기!@!@!')
        setData(result.result);
      } catch (error) {
        console.error('Error fetching post:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [id]);

  console.log(data)

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!data) {
    return <div>Post not found</div>;
  }

  return (
    <div className='w-full h-full px-[200px] pt-[200px]'>
      <DetailPost id={data.id} title={data.title} content={data.content} authorName={data.author.name} createdAt={data.created_at} />
    </div>
  );
};

export default DetailPostPage;
