import React from 'react';
import { Images } from '@/constants';
import Image from 'next/image';
import Link from 'next/link';

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

const values = [
  {
    image: Images.value1,
    number: '01',
    heading: 'Commitment to Excellence',
    body: 'We strive for perfection in every facet of our service, ensuring our clients receive unmatched quality at all times.'
  },
  {
    image: Images.value2,
    number: '02',
    heading: 'Integrity and Transparency',
    body: 'We believe in open communication, honest dealings, and maintaining trust with our partners and clients.'
  },
  {
    image: Images.value3,
    number: '03',
    heading: 'Innovation Driven',
    body: 'At the heart of KASI is a desire to innovate, continually refining our processes and employing the latest technologies for optimal solutions.'
  },
  {
    image: Images.value4,
    number: '04',
    heading: 'Sustainability',
    body: "We're dedicated to adopting eco-friendly practices, minimizing our carbon footprint, and promoting a sustainable logistics industry."
  },
  {
    image: Images.value5,
    number: '05',
    heading: 'Customer Centric Approach',
    body: "Our clients' satisfaction is our utmost priority. We listen, adapt, and deliver tailored solutions for each unique logistical challenge."
  }
]
const Body = () => {
  return (
    <main className='w-full flex flex-col place-items-center gap-[3rem]'>
      {/* part 1 */}
      <div className='w-full flex flex-col place-items-center gap-4'>

        <h1 className='text-center w-[93%] font-base'><span className='text-green'>KASI</span> is a comprehensive <span className='text-green'>logistics</span> solutions provider dedicated to assisting brands with their specific challenges related to the <span className='text-green'>pickup and delivery</span> of products</h1>


        <Image src={Images.homeImage} alt='home-image' priority={true} />


      </div>

      {/* part 2 */}
      <div className='w-full flex-col lg:flex-row flex place-items-center lg:justify-between gap-7'>

        <div className='flex justify-between flex-col lg:flex-col md:flex-row sm:gap-7 gap-7'>

          <h3 className='lg:leading-[3rem] font-semibold tracking-wide font-base sm:w-[30%]'>Partners we work with</h3>

          {/* <div className='flex flex-col font-semibold tracking-wide font-base w-[23%]'></div> */}

          <p className='font-manrope sm:w-[50%] text-[1rem]'>At KASI our success is intertwined with the invaluable support of our partners. We deeply appreciate the collaborative spirit and unwavering commitment you bring to our journey.</p>
        </div>

        <div className='grid lg:grid-cols-4 grid-cols-8 sm:gap-x-[3.3rem] gap-[1rem] place-content-center'>
          {partners.map(partner => (
            <div key={partner.name} className='grid h-auto auto-rows-auto'>
              <Image src={partner.image} alt={partner.name} priority={true} />
              <p className='text-sm font-base font-normal text-grey'>{partner.name}</p>
            </div>
          ))}
        </div>

      </div>

      {/* part 3 */}
      <div className='flex gap-[4rem] w-full flex-col'>
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

      {/* part 4 */}
      <div className='flex w-full justify-between gap-2'>
        <div className='hidden lg:flex w-full'></div>

        <div className='flex flex-col place-items-center w-full gap-2'>
          <h3 className='text-left font-base font-noraml'>We continue to drive <span className='text-green'>excellence</span> in logistics, ensuring <span className='text-green'>seamless supply chains</span> and satisfied clients.</h3>
          <Image src={Images.motorcycle} height={400} alt='mortocycle' priority={true} />
          <div className='flex justify-between place-items-center w-full'>
            <p className='text-green text-sm sm:w-[20%] w-[45%]'>Get Started by Clicking the Sign Up button</p>
            <Link href='/sign-up' className='text-white bg-green px-[3rem] py-2 rounded-md flex place-items-center gap-2'>
              <p className='text-[1.5rem] text-base'>Sign Up</p>
              <Image src={Images.rightArrow} alt='right-arrow' priority={true} width={15} />
            </Link>
          </div>
        </div>
      </div>

      {/* part 5 */}
      <div className='flex lg:flex-row flex-col w-full gap-6 lg:gap-[10rem]'>
        <div className='flex flex-col lg:flex-col gap-2 basis-[40%] md:flex-row md:justify-between lg:justify-center w-full'>
          <h3 className='text-left font-base font-noraml'>Our Ethos</h3>
          <p className='text-left text-[1rem] leading-5 font-manrope font-normal md:basis-[50%]'>{`At KASI, our ethos is grounded in reliability, innovation, and a steadfast dedication to our clients' success. We believe in going the extra mile, ensuring that your deliveriesreach you safely and efficiently.`}</p>
        </div>
        <Image src={Images.delivery} alt='delivery' priority={true} className='lg:hidden self-center'/>


        <div className='grid sm:grid-cols-2 gap-[2rem] sm:px-0 px-3 w-full'>
          <div className='grid grid-rows-3 border px-[3rem] gap-5 py-[1.5rem] w-[full] h-[full] bg-[#201F1D]'>
            <p className='font-base text-[2.1rem] w-[40%] font-bold text-[#D5F756]'>Our Mission</p>
            <Image src={Images.greenStripes} alt='green-stripes' className='place-self-end' height={110} />
            <p className='font-manrope text-[1rem] font-normal leading-5 place-self-center text-white'>{`Empowering brands with seamless logistics: From pickup to delivery, we're with you every step of the way.`}</p>
          </div>

          <div className='grid grid-rows-3 border px-[3rem] gap-5 py-[1.5rem] w-[full] h-[full] bg-green'>
            <p className='font-base text-[2.1rem] w-[40%] font-bold text-white'>Our Vision</p>
            <Image src={Images.whiteStripes} alt='white-stripes' className='place-self-end' height={110} />
            <p className='font-manrope text-[1rem] font-normal leading-5 place-self-center text-white'>{`To be the foremost choice in logistics solutions, setting industry standards and creating a world where product distribution is effortless and reliable.`}</p>
          </div>
        </div>

      </div>

      {/* part 6 */}
      <div className='flex lg:flex-row flex-col w-full gap-6 lg:gap-[10rem]'>
        <div className='flex flex-col lg:flex-col gap-2 basis-[40%] md:flex-row md:justify-between lg:justify-center w-full'>
          <h3 className='text-left font-base font-noraml'>Our Values</h3>
          <p className='text-left text-[1rem] leading-5 font-manrope font-normal md:basis-[50%]'>At KASI Logistics, our core values drive every decision and action. We prioritize transparency, sustainability, and exceeding expectations, fostering lasting relationships with our clients and partners</p>
        </div>

        <div className='grid lg:grid-cols-9 md:grid-cols-6 grid-cols-3  gap-[2rem] sm:px-0 px-3 w-full'>
          {values.map(value => (
            <div key={value.heading} className='grid grid-rows-3 col-span-3 border p-[1.5rem] w-[full] h-[full] border-[#F2F2F2] bg-[#FBFBFB] '>
              <Image src={value.image} alt={value.heading} className='mb-[2.2rem]' priority={true} width={26} />
              <p className='text-[2rem] font-bold leading-5 text-orange font-space'>{value.number}</p>
              <p className='text-[1rem] font-base font-bold '>{value.heading}</p>
              <p className='font-manrope text-sm font-normal leading-4 text-gray'>We strive for perfection in every facet of our service, ensuring our clients receive unmatched quality at all times.</p>
            </div>
          ))}
          <Link href='/sign-up' className='col-span-3'>
            <div className=' grid gap-2 w-[full] h-[full] border-[#F2F2F2] bg-green'>
              <Image src={Images.intersection} alt='intersection' height={150} className='place-self-end self-start' priority={true} />
              <div className='flex w-full flex-col p-3 gap-3'>
                <p className='text-white font-base font-bold text-[1.25rem]'>Sign up with KASI and meet your Delivery Targets easily.</p>
                <Image src={Images.downArrow} alt='intersection' className='self-end' priority={true} />
              </div>
            </div>
          </Link>
        </div>

      </div>

      <br />


    </main>
  )
}

export default Body