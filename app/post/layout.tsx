const PostsLayout = ({
  children, 
}: {
  children: React.ReactNode
}) => {
  return (
    <section className='w-full h-full py-[200px] flex items-start justify-between z-0'>
      {children}
    </section>
  )
}

export default PostsLayout;