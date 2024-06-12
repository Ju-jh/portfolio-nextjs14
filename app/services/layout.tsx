const ServicesLayout = ({
  children, 
}: {
  children: React.ReactNode
}) => {
  return (
    <section className='w-full h-full xl:py-[300px] flex items-start justify-between z-0'>
      {children}
    </section>
  )
}

export default ServicesLayout;