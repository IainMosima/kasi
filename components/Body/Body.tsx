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
    name: 'Little BODA',
    image: Images.littleBoda,
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
      {/* part 1 */}
      <div className='w-full flex flex-col place-items-center gap-4'>

        <h1 className='text-center w-[93%] font-base'><span className='text-green'>KASI</span> is a comprehensive <span className='text-green'>logistics</span> solutions provider dedicated to assisting brands with their specific challenges related to the <span className='text-green'>pickup and delivery</span> of products</h1>


        <Image src={Images.homeImage} alt='home-image' priority={true} />


      </div>

      {/* part 2 */}
      <div className='w-full flex-col lg:flex-row flex place-items-center lg:justify-center gap-7'>

        <div className='flex justify-between flex-col lg:flex-col md:flex-row sm:gap-7 gap-7'>

          <h3 className='lg:leading-[3rem] font-semibold tracking-wide font-base sm:w-[30%]'>Partners we work with</h3>

          {/* <div className='flex flex-col font-semibold tracking-wide font-base w-[23%]'></div> */}

          <p className='font-manrope sm:w-[50%] text-[1rem]'>At KASI our success is intertwined with the invaluable support of our partners. We deeply appreciate the collaborative spirit and unwavering commitment you bring to our journey.</p>
        </div>

        <div className='grid lg:grid-cols-4 grid-cols-8 sm:gap-x-[3.3rem] gap-[1rem] place-content-center'>
          {partners.map(partner => (
            <div key={partner.name} className='grid h-auto auto-rows-auto'>
              <Image src={partner.image} alt={partner.name} />
              <p className='text-sm font-base font-normal text-grey'>{partner.name}</p>
            </div>
          ))}
        </div>

      </div>

      {/* part 3 */}
      <div className='flex gap-[3rem] w-full flex-col'>
        <h3 className='lg:leading-[3rem] text-left font-semibold tracking-wide font-base'>Statistics</h3>

        <div className='flex w-full flex-col gap-2 justify-start'>
          <hr className=' border-t-2 border-gray rounded-full w-full' />
          <div className='grid sm:grid-cols-3 place-items-start justify-start gap-2'>
            <h4 className='tracking-wide font-semibold self-center'>Orders Per Month</h4>
            <p className='text-grey text-left text-[1rem] leading-5 sm:place-self-center'>Our commitment to seamless logistics and dedicated service consistently results in high order volumes month after month, showcasing our reliability and excellence in meeting your needs.</p>
            <p className='font-manrope text-left sm:place-self-center sm:text-[4rem] text-[3rem] font-normal'>5000+</p>
          </div>
        </div>

        <div className='flex w-full flex-col gap-2 justify-start'>
          <hr className=' border-t-2 border-gray rounded-full w-full' />
          <div className='grid sm:grid-cols-3 place-items-start justify-start gap-2'>
            <h4 className='tracking-wide font-semibold self-center'>Average Delivery Time</h4>
            <p className='text-grey text-left text-[1rem] leading-5 sm:place-self-center'>Our dedicated team consistently achieves swift delivery times, ensuring your deliveries reach their destinations promptly. We understand the importance of timely deliveries, and we make it our mission to exceed your expectations.</p>
            <p className='font-manrope text-left sm:place-self-center sm:text-[4rem] text-[3rem] font-normal'>15 MIN</p>
          </div>
        </div>

        <div className='flex w-full flex-col gap-2 justify-start'>
          <hr className=' border-t-2 border-gray rounded-full w-full' />
          <div className='grid sm:grid-cols-3 place-items-start justify-start gap-2'>
            <h4 className='tracking-wide font-semibold self-center'>Customer Services Rating</h4>
            <p className='text-grey text-left text-[1rem] leading-5 sm:place-self-center'>Our commitment to excellence extends to every aspect
              of our service, including customer care. We take pride in consistently delivering top-notch logistics solutions, and your satisfaction is our measure of success.</p>
            <p className='font-manrope text-left sm:place-self-center sm:text-[4rem] text-[3rem] font-normal'>09/10</p>
          </div>
        </div>

      </div>

    </main>
  )
}

export default Body