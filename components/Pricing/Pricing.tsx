/* eslint-disable react/no-unescaped-entities */
import Image from 'next/image';
import './Pricing.scss';
import React from 'react'
import { Images } from '@/constants';
import Faqs from './FAQs/Faqs';
import Link from 'next/link';

const pricingList = [
    {
        name1: '01',
        title1: 'Bus Fare',
        info1: <p className='text-grey text-manrope text-[1.3rem]'>Every ride starts with a minimal base fare of <span className='font-bold text-black'>KES 50</span>, ensuring our electric motorbikes are charged, primed, and ready to go!</p>,

        name2: '02',
        title2: 'Eco-Savings',
        info2: <p className='text-grey font-manrope text-[1.3rem]'>Choose KASI, choose the planet! By using our green electric motorbikes, not only are you <span className='font-bold text-black'>reducing your carbon footprint</span>, but we also pass on our fuel savings to you. It’s a win-win!</p>
    },
    {
        name1: '03',
        title1: 'Distance-Driven Rates',
        // eslint-disable-next-line react/no-unescaped-entities
        info1: <p className='text-grey font-manrope text-[1.3rem]'>Simply put, you pay <span className='font-bold text-black'>100 bob</span> for <span className='font-bold text-black'>every kilometer</span> we cover. No hidden fees, no surprises. The longer the ride, the more you'll know exactly where your money's going.</p>,

        name2: '04',
        title2: 'Time-based Charges',
        info2: <p className='text-grey font-manrope text-[1.3rem]'>Waiting in traffic? Don’t worry! Our charges take into account the time spent on the road, so you’re <span className='font-bold text-black'>never unfairly charged</span> for those unforeseen delays.</p>
    },
    {
        name1: '05',
        title1: 'Dynamic Discounts',
        info1: <p className='text-grey font-manrope text-[1.3rem]'>Keep an eye out for <span className='font-bold text-black'>seasonal offers, loyalty rewards, and special promotions</span>. We love to give back to our dedicated users!</p>,

        name2: '06',
        title2: 'Peak Time Indicators',
        // eslint-disable-next-line react/no-unescaped-entities
        info2: <p className='text-grey font-manrope text-[1.3rem]'>We believe in <span className='font-bold text-black'>transparency</span>. If it’s a particularly busy time and rates are a tad higher, we'll always let you know in advance. No guessing games here!</p>
    },
    {
        name1: '07',
        title1: 'Service Fee',
        // eslint-disable-next-line react/no-unescaped-entities
        info1: <p className='text-grey font-manrope text-[1.3rem]'>In Kenya, KASI has a simple <span className='font-bold text-black'>18% Service Fee</span> based on NTSA rules and regulations. This fee helps drivers connect with customers through our platform. It also supports things like improving our platform, keeping our drivers safe, and providing top-notch support. So, every time you choose KASI, you're getting quality and assurance!</p>,
    }
];



const Pricing = () => {
   return (
        <main className='w-full flex flex-col gap-[4.1rem]'>
            {/* part 1 */}
            <div className='flex flex-col gap-6 w-full'>
                <h1 className='h1-forced text-left lg:w-[22%] md:w-[42%] w-[65%] font-base font-semibold leading-[3.2rem]'>How do we <span className='text-green'>price</span> our rides?</h1>
                <p className='text-[1.4rem] lg:w-[32%] w-full font-manrope font-normal'>{`At KASI, we believe in clear, straightforward, and fair pricing. Here's how we ensure you always get the best bang for your buck`}</p>
            </div>

            {/* part 2 */}
            <Image src={Images.delivery4} alt='delivery' priority={true} />

            {/* part 3 */}
            <div className='flex justify-between lg:flex-row flex-col'>
                <div className='basis-[75%]'>
                    <h3 className='font-semibold sm:w-[40%] tracking-wide font-base'>Our <span className='text-green'>Pricing</span> List</h3>
                </div>

                <div className='grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 w-full gap-y-[3rem] gap-x-[4rem]'>
                    {pricingList.map((item, index) => {
                        if (item.name1 !== '07') {
                            return (
                                <div key={index} className='flex flex-col gap-[3.5rem]'>
                                    <div className='flex flex-col justify-center gap-[1rem]'>
                                        <p className='font-bold text-[2.1rem] text-green font-space self-start'>{item.name1}</p>
                                        <div className='flex flex-col gap-2'>
                                            <p className='font-base text-[1.7rem] font-bold'>{item.title1}</p>
                                            {item.info1}
                                        </div>
                                    </div>

                                    <div className='flex flex-col justify-center gap-[1rem]'>
                                        <p className='font-bold text-[2.1rem] text-green font-space self-start'>{item.name2}</p>
                                        <div className='flex flex-col gap-2'>
                                            <p className='font-base text-[1.7rem] font-bold'>{item.title2}</p>
                                            {item.info2}
                                        </div>
                                    </div>

                                </div>
                            )
                        }
                        return (
                            <div key={index} className='flex flex-col items-between h-full'>
                                <div className='flex flex-col justify-between content-between h-full'>
                                    <p className='font-bold text-[2.1rem] text-green font-space self-start'>{item.name1}</p>
                                    <div className='flex flex-col gap-2  basis-1/2'>
                                        <p className='font-base text-[1.7rem] font-bold'>{item.title1}</p>
                                        {item.info1}
                                    </div>
                                </div>

                            </div>
                        )
                    })}
                </div>
            </div>

            {/* part 3 */}
            <div className='flex justify-between flex-col w-full'>
                <h3 className='font-semibold lg:w-[25%] tracking-wide font-base'>Frequently Asked <span className='text-green'>Questions</span></h3>

                <div className='flex lg:flex-row flex-col gap-[3rem] w-full justify-between'>
                    <Faqs/>                    

                    <div className='flex flex-col gap-[2.5rem] w-full'>
                        <Image src={Images.motorcycle3} alt='motorcycle-2' priority={true}/>

                        <p className='text-[1.45rem]'>Using KASI isn't just about getting from Point A to Point B. It's about <span className='text-green'>a seamless, eco-friendly journey</span> with <span className='text-green'>transparent pricing</span> every step of the way. Ride with us and experience the KASI difference!</p>

                        <p className='text-[1.2rem] text-grey lg:w-[78%] lg:ml-0 ml-8 font-manrope'>Experience the future of <span className='text-green'>efficient and eco-friendly delivery</span> with KASI. <span className='text-green'>Sign up today</span> to unlock a world of benefits from <span className='text-green'>cost-effective pricing</span> that makes deliveries affordable to scalable solutions accommodating your evolving needs. Our commitment to eco-friendliness ensures sustainable logistics without compromising <span className='text-green'>efficiency</span>. Join KASI for a smarter, greener, and more affordable <span className='text-green'>delivery</span> experience tailored just for you.</p>

                        <Link href='/sign-up' className='bg-green text-white text-center lg:ml-0 ml-8 rounded-sm py-3 w-[14rem] text-[1.4rem]'>Sign Up</Link>
                    </div>
                </div>
            
            </div>
            


            <br />


        </main>
    )
}

export default Pricing