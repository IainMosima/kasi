import React from 'react';
import { Images } from '@/constants';
import Image from 'next/image';

const Body = () => {
  return (
    <main className='w-full flex min-h-screen flex-col place-items-center gap-6'>
        <h1 className='text-center w-[93%] font-base'><span className='text-green'>KASI</span> is a comprehensive <span className='text-green'>logistics</span> solutions provider dedicated to assisting brands with their specific challenges related to the <span className='text-green'>pickup and delivery</span> of products</h1>
        <Image src={Images.homeImage} alt='home-image' height={900} priority={true}/>
    </main>
  )
}

export default Body