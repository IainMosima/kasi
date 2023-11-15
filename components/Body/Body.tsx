import React from 'react';
import { Images } from '@/constants';
import Image from 'next/image';

const partners = [
  {
    name: 'Glovo',
    image: Images.glovo
  },
  {
    name: 'Uber BODA',
    image: Images.uberBoda
  },
  {
    name: 'Bolt BODA',
    image: Images.boltBoda
  },
  {
    name: 'Uber Eats',
    image: Images.uberEats
  },
  {
    name: 'Bolt Food',
    image: Images.boltFood
  },
  {
    name: 'Jumia Foods',
    image: Images.jumiaFood
  },
  {
    name: 'Uber',
    image: Images.uber
  }
]

const Body = () => {
  return (
    <main className='w-full flex flex-col place-items-center gap-6'>
      <div className='w-full flex min-h-screen flex-col place-items-center justify-center'>
        <h1 className='text-center w-[93%] font-base'><span className='text-green'>KASI</span> is a comprehensive <span className='text-green'>logistics</span> solutions provider dedicated to assisting brands with their specific challenges related to the <span className='text-green'>pickup and delivery</span> of products</h1>
        <Image src={Images.homeImage} alt='home-image' height={800} priority={true} />
      </div>

      <div className='w-full flex min-h-[40vh] place-items-center justify-between'>
        <div className='flex flex-col gap-7'>

          <div className='flex flex-col font-semibold tracking-wide font-base w-[23%]'>
            <h3 className='leading-[3rem]'>Partners </h3>
            <h3 className='leading-[3rem]'>we work with</h3>
          </div>

          <p className='font-manrope w-[30%] text-sm '>At KASI our success is intertwined with the invaluable support of our partners. We deeply appreciate the collaborative spirit and unwavering commitment you bring to our journey.</p>
        </div>

        <div className='grid grid-cols-4'>
          
        </div>
      </div>

    </main>
  )
}

export default Body