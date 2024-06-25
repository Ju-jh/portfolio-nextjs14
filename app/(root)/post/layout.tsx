const PostsLayout = ({
  children, 
}: {
  children: React.ReactNode
}) => {
  return (
    <section className='w-full h-full flex items-start justify-between z-0'>
      {children}
    </section>
  )
}

export default PostsLayout;