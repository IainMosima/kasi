import React from 'react';
import { Images } from '@/constants';
import Image from 'next/image';
import Link from 'next/link';
import './Body.scss';

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
    <main className='w-full flex flex-col place-items-center gap-[4.1rem]'>
      {/* part 1 */}
      <div className='w-full flex flex-col place-items-center gap-[4rem]'>

        <h1 className='text-center w-[80%] font-base'><span className='text-green'>KASI</span> is a B2B <span className='text-green'>logistics</span> solutions provider dedicated to assisting brands with their specific challenges related to the <span className='text-green'>pickup and delivery</span> of products</h1>
        
        <div className='animated-image w-full h-full flex justify-center'>
        <Image
          src={Images.homeImage}
          alt="home-image"
          priority={true}
          />
        </div>

      </div>

      {/* part 2 */}
      <div className='w-full flex-col lg:flex-row flex place-items-center lg:justify-between gap-7'>

        <div className='flex justify-between w-full flex-col lg:flex-col md:flex-row gap-7'>
          <h3 className='lg:leading-[3.4rem] font-semibold tracking-wide font-base sm:w-[40%]'>Partners we work with</h3>
          {/* <div className='flex flex-col font-semibold tracking-wide font-base w-[23%]'></div> */}
          <p className='font-manrope sm:w-[50%] text-[1.2rem]'>At KASI our success is intertwined with the invaluable support of our partners. We deeply appreciate the collaborative spirit and unwavering commitment you bring to our journey.</p>
        </div>

        <div className='grid lg:grid-cols-4 grid-cols-8 sm:gap-x-[4rem] gap-y-[3rem] w-full gap-x-[1rem] justify-items-end'>
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
            <h4 className='tracking-wide font-semibold self-center text-[1.6rem]'>Orders Per Month</h4>
            <p className='text-grey text-left text-[1.1rem] sm:place-self-center'>Our commitment to seamless logistics and dedicated service consistently results in high order volumes month after month, showcasing our reliability and excellence in meeting your needs.</p>
            <p className='font-manrope text-left sm:place-self-center lg:text-[6rem] text-[4rem] font-normal'>5000+</p>
          </div>
        </div>

        <div className='flex w-full flex-col gap-2 justify-start'>
          <hr className=' border-t-2 border-gray rounded-full w-full' />
          <div className='grid sm:grid-cols-3 place-items-start justify-start gap-2'>
            <h4 className='tracking-wide font-semibold self-center text-[1.6rem]'>Average Delivery Time</h4>
            <p className='text-grey text-left text-[1.1rem] sm:place-self-center'>Our dedicated team consistently achieves swift delivery times, ensuring your deliveries reach their destinations promptly. We understand the importance of timely deliveries, and we make it our mission to exceed your expectations.</p>
            <p className='font-manrope text-left sm:place-self-center lg:text-[6rem] text-[4rem] font-normal'>15 MIN</p>
          </div>
        </div>

        <div className='flex w-full flex-col gap-2 justify-start'>
          <hr className=' border-t-2 border-gray rounded-full w-full' />
          <div className='grid sm:grid-cols-3 place-items-start justify-start gap-2'>
            <h4 className='tracking-wide font-semibold self-center text-[1.6rem]'>Customer Services Rating</h4>
            <p className='text-grey text-left text-[1.1rem] sm:place-self-center'>Our commitment to excellence extends to every aspect
              of our service, including customer care. We take pride in consistently delivering top-notch logistics solutions, and your satisfaction is our measure of success.</p>
            <p className='font-manrope text-left sm:place-self-center lg:text-[6rem] text-[4rem] font-normal'>09/10</p>
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
            <p className='text-green text-[1.1rem] lg:w-[20%] md:w-[30%] w-[50%]'>Get Started by Clicking the Sign Up button</p>
            <Link href='/sign-up' className='text-white  bg-green sm:px-[3rem] sm:py-[1.5rem] px-[1.5rem] py-[.8rem] rounded-md flex place-items-center gap-2'>
              <p className='text-[1.4rem] text-base'>Sign Up</p>
              <Image src={Images.rightArrow} alt='right-arrow' priority={true} width={15} />
            </Link>
          </div>
        </div>
      </div>

      {/* part 5 */}
      <div className='flex lg:flex-row flex-col w-full gap-6 lg:gap-[10rem]'>
        <div className='flex flex-col lg:flex-col gap-2 basis-[40%] md:flex-row md:justify-between lg:justify-center w-full'>
          <h3 className='text-left font-base font-noraml'>Our Ethos</h3>
          <p className='text-left text-[1.1rem] font-manrope font-normal md:basis-[50%]'>{`At KASI, our ethos is grounded in reliability, innovation, and a steadfast dedication to our clients' success. We believe in going the extra mile, ensuring that your deliveriesreach you safely and efficiently.`}</p>
        </div>
        <Image src={Images.delivery} alt='delivery' priority={true} className='lg:hidden self-center' />


        <div className='grid sm:grid-cols-2 gap-[2rem] sm:px-0 px-3 w-full'>
          <div className='grid grid-rows-3 border px-[3rem] gap-5 py-[1.5rem] w-[full] h-[full] bg-[#201F1D] custom-shadow'>
            <p className='font-base text-[2.1rem] w-[40%] font-bold text-[#D5F756]'>Our Mission</p>
            <Image src={Images.greenStripes} alt='green-stripes' className='place-self-end' priority={true} height={110} />
            <p className='font-manrope text-[1rem] font-normal leading-5 place-self-center text-white'>{`Empowering brands with seamless logistics: From pickup to delivery, we're with you every step of the way.`}</p>
          </div>

          <div className='grid grid-rows-3 border px-[3rem] gap-5 py-[1.5rem] w-[full] h-[full] bg-green custom-shadow  '>
            <p className='font-base text-[2.1rem] w-[40%] font-bold text-white'>Our Vision</p>
            <Image src={Images.whiteStripes} alt='white-stripes' priority={true} className='place-self-end' height={110} />
            <p className='font-manrope text-[1rem] font-normal leading-5 place-self-center text-white'>{`To be the foremost choice in logistics solutions, setting industry standards and creating a world where product distribution is effortless and reliable.`}</p>
          </div>
        </div>

      </div>

      {/* part 6 */}
      <div className='flex lg:flex-row flex-col w-full gap-6 lg:gap-[10rem]'>
        <div className='flex flex-col lg:flex-col gap-2 basis-[40%] md:flex-row md:justify-between lg:justify-center w-full'>
          <h3 className='text-left font-base font-normal'>Our Values</h3>
          <p className='text-left text-[1.1rem] leading-7 font-manrope font-normal md:basis-[50%]'>At KASI Logistics, our core values drive every decision and action. We prioritize transparency, sustainability, and exceeding expectations, fostering lasting relationships with our clients and partners</p>
        </div>

        <div className='grid lg:grid-cols-9 md:grid-cols-6 grid-cols-3 gap-[2rem] sm:px-0 px-3 w-full'>
          {values.map(value => (
            <div key={value.heading} className='grid grid-rows-3 col-span-3  border p-[1.5rem] w-full h-full border-[#F2F2F2] bg-[#FBFBFB] '>
              <Image src={value.image} alt={value.heading} className='mb-[2.2rem]' priority={true} width={26} />
              <p className='text-[2.5rem] font-bold leading-5 text-orange font-space'>{value.number}</p>
              <p className='text-[1.5rem] font-base font-bold '>{value.heading}</p>
              <p className='font-manrope text-[1.1rem] font-normal text-gray'>We strive for perfection in every facet of our service, ensuring our clients receive unmatched quality at all times.</p>
            </div>
          ))}
          <Link href='/sign-up' className='col-span-3 '>
            <div className=' grid gap-2 w-full h-full border-[#F2F2F2] bg-green'>
              <Image src={Images.intersection} alt='intersection' height={150} className='place-self-end self-start' priority={true} />
              <div className='flex w-full flex-col p-3 gap-3'>
                <p className='text-white font-base font-bold text-[1.25rem]'>Sign up with KASI and meet your Delivery Targets easily.</p>
                <Image src={Images.downArrow} alt='intersection' className='self-end' priority={true} />
              </div>
            </div>
          </Link>
        </div>

      </div>

      {/* part 7 */}
      <div className='w-full bg-orange '>
        <div className='w-full relative lg:px-[7.5rem] md:px-[4rem] lg:py-[7rem] md:py-[2rem] px-3 py-5'>
          <p className='text-white lg:text-[2.6rem] md:text-[2rem] text-[1.1rem] text-left  font-normal font-base'>{`Brands collaborating with KASI are not just accessing a reliable logistics partner, they're making a conscious choice to support sustainability, innovation, and the future of eco-friendly transportation. This alignment not only boosts the brand's image but also ensures that they're part of the global solution to environmental challenges.`}</p>
          <Image src={Images.rings} alt="rings" height={490} priority={true} className='absolute right-0 top-[-3px] z-0 opacity-[0.25]' />
        </div>
      </div>

      {/* part 8 */}
      <div className='flex flex-col gap-[2rem] w-full'>
        <h3 className='text-left font-base font-semibold lg:w-[20%] md:w-[30%]'>Why Partner with KASI</h3>

        <div className='hidden md:grid lg:grid-cols-3 md:grid-cols-2 w-full place-items-center gap-x-[2rem] gap-y-[2.4rem]'>
          {/* Environmental benefits */}
          <div className='lg:col-span-1 flex flex-col p-2 h-full'>
            <p className='font-base text-[1.6rem]  w-[10%] font-bold basis-[50%]'>Environmental Benefits</p>
            <p className='font-base text-[1.3rem] font-semibold'>Reduced Carbon Footprint</p>
            <p className='font-base text-[1.1rem] text-manrope text-grey'>{`Electric motorbikes produce zero direct emissions. This means they contribute significantly less to greenhouse gas emissions compared to traditional gasoline powered vehicles.`}</p>
            <p className='font-base text-[1.2rem] font-semibold'>Noise Pollution</p>
            <p className='font-base text-[1.1rem] text-manrope text-grey'>{`Electric motorbikes operate at a significantly lower noise level, reducing noise pollution in urban areas.`}</p>
            <p className='font-bold text-[1.6rem] font-space self-end'>01</p>
          </div>
          <Image src={Images.motorcycle} className='lg:col-span-2 place-self-center' priority={true} alt='motorcycle ' />

          {/* Operational Efficiency */}
          <Image src={Images.delivery2} className='lg:col-span-2 place-self-center ' priority={true} alt='motorcycle' />
          <div className='lg:col-span-1 flex flex-col p-2 h-full'>
            <p className='font-base text-[1.6rem]  w-[10%] font-bold basis-[50%]'>Operational Efficiency</p>
            <p className='font-base text-[1.3rem] font-semibold'>Lower Operational Costs</p>
            <p className='font-base text-[1.2rem] text-manrope text-grey'>{`Electric motorbikes generally have fewer moving parts than their gasoline counterparts, leading to less wear and tear and reduced maintenance costs. Additionally, electricity is often cheaper than gasoline, leading to cost savings in refueling.`}</p>
            <p className='font-base text-[1.3rem] font-semibold'>Noise Quick and Nimble</p>
            <p className='font-base text-[1.2rem] text-manrope text-grey'>{`Their compact size and agility make electric motorbikes perfect for navigating through congested city streets, ensuring quicker deliveries.`}</p>
            <p className='font-bold text-[1.6rem] font-space self-end'>02</p>
          </div>


          {/* Public Perception and Branding */}
          <div className='lg:col-span-1 flex flex-col p-2 h-full'>
            <p className='font-base text-[1.6rem] w-[50%] font-bold basis-[50%]'>Public Perception and Branding</p>
            <p className='font-base text-[1.3rem] font-semibold'>Sustainability Image</p>
            <p className='font-base text-[1.2rem] text-manrope text-grey'>{`Brands that align themselves with environmentally-conscious partners like KASI will be perceived as more responsible and sustainable. This can be a significant competitive advantage in markets where consumers are becoming increasingly eco-aware.`}</p>
            <p className='font-base text-[1.3rem] font-semibold'>Supporting Innovation</p>
            <p className='font-base text-[1.2rem] text-manrope text-grey'>{`By supporting a company that employs electric motorbikes, brands position themselves as champions of innovative and sustainable solutions.`}</p>
            <p className='font-bold text-[1.6rem] font-space self-end'>03</p>
          </div>
          <Image src={Images.delivery3} className='lg:col-span-2 place-self-center' priority={true} alt='delivery' />

          {/* Economic Implications */}
          <Image src={Images.smiling} className='lg:col-span-2 place-self-center' priority={true} alt='smiling' />
          <div className='lg:col-span-1 flex flex-col p-2 h-full'>
            <p className='font-base text-[1.6rem]  w-[10%] font-bold basis-[50%]'>Economic Implications</p>
            <p className='font-base text-[1.3rem] font-semibold'>Supporting Green Tech</p>
            <p className='font-base text-[1.2rem] text-manrope text-grey'>{`Investing in electric motorbikes indirectly supports the broader green technology sector, driving further advancements and innovations in sustainable transportation.`}</p>
            <p className='font-base text-[1.3rem] font-semibold'>Fuel Independence</p>
            <p className='font-base text-[1.2rem] text-manrope text-grey'>{`By not relying on volatile oil markets, KASI can maintain more consistent operational costs,benefiting both the company and its clients.`}</p>
            <p className='font-bold text-[1.6rem] font-space self-end'>04</p>
          </div>

          {/* Future-proofing */}
          <div className='lg:col-span-1 flex flex-col p-2 h-full'>
            <p className='font-base text-[1.6rem]  w-[40%] font-bold basis-[70%]'>Future-proofing</p>
            <p className='font-base text-[1.3rem] font-semibold'>Regulation Ready</p>
            <p className='font-base text-[1.2rem] text-manrope text-grey'>{`Many cities around the world are introducing stricter emissions regulations or outright bans on gasoline-powered vehicles in certain zones. By using electric motorbikes, KASI is well-prepared for such future regulatory changes, ensuring uninterrupted service.`}</p>
            <p className='font-bold text-[1.6rem] font-space self-end'>05</p>
          </div>
          <Image src={Images.motorcycle2} className='lg:col-span-2 place-self-center' priority={true} alt='motorcycle' />

        </div>

        {/* for mobile */}
        <div className='w-full grid sm:hidden place-items-center lg:grid-cols-3 md:grid-cols-2 gap-x-[1.6rem] gap-y-[2.4rem]'>
          {/* Environmental benefits */}
          <div className='lg:col-span-1 flex flex-col p-2 h-full'>
            <p className='font-base text-[1.6rem] font-bold mb-5'>Environmental Benefits</p>
            <p className='font-base text-[1.3rem] font-semibold'>Reduced Carbon Footprint</p>
            <p className='font-base text-[1.2rem] text-manrope text-grey'>{`Electric motorbikes produce zero direct emissions. This means they contribute significantly less to greenhouse gas emissions compared to traditional gasoline powered vehicles.`}</p>
            <p className='font-base text-[1.3rem] font-semibold'>Noise Pollution</p>
            <p className='font-base text-[1.2rem] text-manrope text-grey'>{`Electric motorbikes operate at a significantly lower noise level, reducing noise pollution in urban areas.`}</p>
            <p className='font-bold text-[1.6rem] font-space self-end'>01</p>
          </div>
          <Image src={Images.motorcycle} className='lg:col-span-2 place-self-center' priority={true} alt='motorcycle ' />

          {/* Operational Efficiency */}
          <div className='lg:col-span-1 flex flex-col p-2 h-full'>
            <p className='font-base text-[1.6rem] font-bold mb-5'>Operational Efficiency</p>
            <p className='font-base text-[1.3rem] font-semibold'>Lower Operational Costs</p>
            <p className='font-base text-[1.2rem] text-manrope text-grey'>{`Electric motorbikes generally have fewer moving parts than their gasoline counterparts, leading to less wear and tear and reduced maintenance costs. Additionally, electricity is often cheaper than gasoline, leading to cost savings in refueling.`}</p>
            <p className='font-base text-[1.3rem] font-semibold'>Noise Quick and Nimble</p>
            <p className='font-base text-[1.2rem] text-manrope text-grey'>{`Their compact size and agility make electric motorbikes perfect for navigating through congested city streets, ensuring quicker deliveries.`}</p>
            <p className='font-bold text-[1.6rem] font-space self-end'>02</p>
          </div>
          <Image src={Images.delivery2} className='lg:col-span-2 place-self-center ' priority={true} alt='motorcycle' />



          {/* Public Perception and Branding */}
          <div className='lg:col-span-1 flex flex-col p-2 h-full'>
            <p className='font-base text-[1.6rem] font-bold mb-5'>Public Perception and Branding</p>
            <p className='font-base text-[1.3rem] font-semibold'>Sustainability Image</p>
            <p className='font-base text-[1.2rem] text-manrope text-grey'>{`Brands that align themselves with environmentally-conscious partners like KASI will be perceived as more responsible and sustainable. This can be a significant competitive advantage in markets where consumers are becoming increasingly eco-aware.`}</p>
            <p className='font-base text-[1.3rem] font-semibold'>Supporting Innovation</p>
            <p className='font-base text-[1.2rem] text-manrope text-grey'>{`By supporting a company that employs electric motorbikes, brands position themselves as champions of innovative and sustainable solutions.`}</p>
            <p className='font-bold text-[1.6rem] font-space self-end'>03</p>
          </div>
          <Image src={Images.delivery3} className='lg:col-span-2 place-self-center' priority={true} alt='delivery' />

          {/* Economic Implications */}
          <div className='lg:col-span-1 flex flex-col p-2 h-full'>
            <p className='font-base text-[1.6rem] font-bold mb-5'>Economic Implications</p>
            <p className='font-base text-[1.3rem] font-semibold'>Supporting Green Tech</p>
            <p className='font-base text-[1.2rem] text-manrope text-grey'>{`Investing in electric motorbikes indirectly supports the broader green technology sector, driving further advancements and innovations in sustainable transportation.`}</p>
            <p className='font-base text-[1.3rem] font-semibold'>Fuel Independence</p>
            <p className='font-base text-[1.2rem] text-manrope text-grey'>{`By not relying on volatile oil markets, KASI can maintain more consistent operational costs,benefiting both the company and its clients.`}</p>
            <p className='font-bold text-[1.6rem] font-space self-end'>04</p>
          </div>
          <Image src={Images.smiling} className='lg:col-span-2 place-self-center' priority={true} alt='smiling' />


          {/* Future-proofing */}
          <div className='lg:col-span-1 flex flex-col p-2 h-full'>
            <p className='font-base text-[1.6rem] font-bold mb-5'>Future-proofing</p>
            <p className='font-base text-[1.3rem] font-semibold'>Regulation Ready</p>
            <p className='font-base text-[1.2rem] text-manrope text-grey'>{`Many cities around the world are introducing stricter emissions regulations or outright bans on gasoline-powered vehicles in certain zones. By using electric motorbikes, KASI is well-prepared for such future regulatory changes, ensuring uninterrupted service.`}</p>
            <p className='font-bold text-[1.6rem] font-space self-end'>05</p>
          </div>
          <Image src={Images.motorcycle2} className='lg:col-span-2 place-self-center' priority={true} alt='motorcycle' />
        </div>

        <div className='flex col-span-3 w-full justify-end'>
          <Link href='/pricing' className='col-span-2 lg:w-[30%] md:w-[50%] w-full'>
            <div className='flex flex-col w-full h-full p-3 border-[#F2F2F2] bg-orange'>
              <p className='text-white font-base font-bold my-7 sm:ml-[1.2rem] sm:w-[70%] w-full sm:text-[2rem] text-[1.5rem]'>Our  wallet friendly pricing list is but one click away. Check it out.</p>
              <Image src={Images.downArrow} alt='intersection' className='self-end' priority={true} />
            </div>
          </Link>
        </div>

      </div>

      {/* part 9 */}
      <div className='w-full'>
        <div className='w-full relative flex justify-center'>
          <Image src={Images.smiling2} alt='smiling' priority={true} />

          <div className='flex flex-col justify-center place-items-center gap-5 w-full absolute lg:top-[30%] md:top-[23%] top-[10%]'>
            <p className='text-white lg:text-[3.5rem] md:text-[2.5rem]  w-[47%] font-bold font-base text-center'>Get in touch with our customer care team</p>

            <Link href='/contact-us'>
              <div className='bg-green w-[10rem] flex justify-center place-items-center gap-3 sm:px-[2rem] sm:py-[.8rem] px-[1.5rem] py-[.4rem] rounded-sm'>
                <p className='font-base text-white font-semibold text-[1rem]'>Email Us</p>
                <Image src={Images.email} alt='email' priority={true} height={21} />
              </div>
            </Link>
          </div>
        </div>
      </div>

      <br />


    </main>
  )
}

export default Body