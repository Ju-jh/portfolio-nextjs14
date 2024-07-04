import React from 'react';
import LoadingIcon from '../public/assets/svg/loading.svg'

export default function Loading() {
  return (
    <div className='w-full h-full flex items-center justify-center z-50'
    >
      <LoadingIcon width='40px' height='40px' fill='white' className='animate-spin-fast mx-auto'/>
    </div>
  )
}