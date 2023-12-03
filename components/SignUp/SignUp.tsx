/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import "./SignUp.scss";
import { Images } from '@/constants';
import Image from 'next/image';

const values = [
    {
        image: Images.contact,
        number: '01',
        heading: 'Fill the Sign up form',
        body: 'Take a minute to fill our online registration form. '
    },
    {
        image: Images.call,
        number: '02',
        heading: 'Client Onboarding',
        body: 'We will contact you and finalize the onboarding process within 30 minutes'
    },
    {
        image: Images.box,
        number: '03',
        heading: 'Collect your pickups',
        body: 'Begin receiving pickups and deliveries the same day!'
    }
]

const SignUp = () => {
    return (
        <main className='w-full flex flex-col gap-[4.1rem]'>
            {/* part 1 */}
            <div className='flex flex-col gap-6 w-full'>
                <h1 className='text-left h1-forced lg:w-[22%] md:w-[40%] w-[60%] font-base font-semibold leading-[3.2rem]'><span className='text-green'>Start</span> your journey with us</h1>
                <p className='text-[1.4rem] lg:w-[45%] w-full font-manrope font-normal'>{`Embark on a seamless journey with KASI by registering online. We prioritize simplicity and efficiency, ensuring a smooth start to your experience. Join our platform and unlock the convenience of streamlined services tailored to meet your unique shipping and transportation needs.`}</p>
            </div>

            {/* part 2 */}
            <Image src={Images.smiling3} alt='delivery' priority={true} />

            {/* part 3 */}
            <div className='flex lg:flex-row flex-col w-full justify-between gap-[2rem]'>

                <div className='flex sm:justify-between flex-col basis-[60%] gap-7'>
                    <h3 className='font-semibold lg:w-[40%] tracking-wide font-base'>Our <span className='text-green'>Sign-up</span> Process</h3>

                    <div className='grid lg:grid-cols-9 md:grid-cols-6 grid-cols-1 gap-5 px-[1.2rem] w-full'>
                        {values.map(value => (
                            <div key={value.heading} className='flex sm:px-0 flex-col place-items center sm:col-span-3  border p-[1.5rem] w-full h-full border-[#F2F2F2] bg-[#FBFBFB]'>
                                <Image src={value.image} alt={value.heading} className='mb-[2.2rem]' priority={true} width={35} />
                                <p className='text-[2.5rem] font-bold leading-5 text-orange font-space mt-[2.5rem]'>{value.number}</p>
                                <div className='flex flex-col mt-[2.3rem]'>
                                    <p className='text-[1.5rem] font-base font-bold '>{value.heading}</p>
                                    <p className='font-manrope text-[1.2rem] font-normal text-gray'>{value.body}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className='flex flex-col gap-4 basis-[40%] border border-[#EDEDED] justify-start place-items-start px-[1.5rem] py-[2rem]'>
                    <p className='font text-[1.6rem]-base font-semibold'>Let's Begin</p>

                    <form className='grid sm:grid-cols-2 font-base gap-x-[1.4rem] gap-y-[2rem] w-full'>
                        <div className='flex flex-col gap-3'>
                            <label className='text-[1.3rem] text-grey'>First Name <span className='text-red'>*</span></label>
                            <input type='text' className='bg-[#F6F6F6] font-manrope backdrop-custom outline-none rounded-md focus:border-green focus:border-2 px-3 py-2 text-[1.2rem]' />
                        </div>

                        <div className='flex flex-col gap-3'>
                            <label className='text-[1.3rem] text-grey'>Second Name <span className='text-red'>*</span></label>
                            <input type='text' className='bg-[#F6F6F6] font-manrope backdrop-custom outline-none rounded-md focus:border-green focus:border-2 px-3 py-2 text-[1.2rem]' />
                        </div>

                        <div className='flex flex-col gap-3'>
                            <label className='text-[1.3rem] text-grey'>Name of Business <span className='text-red'>*</span></label>
                            <input type='text' className='bg-[#F6F6F6] font-manrope backdrop-custom outline-none rounded-md focus:border-green focus:border-2 px-3 py-2 text-[1.2rem]' />
                        </div>

                        <div className='flex flex-col gap-3'>
                            <label className='text-[1.3rem] text-grey'>County of operation <span className='text-red'>*</span></label>
                            <input type='text' className='bg-[#F6F6F6] font-manrope backdrop-custom outline-none rounded-md focus:border-green focus:border-2 px-3 py-2 text-[1.2rem]' />
                        </div>

                        <div className='flex flex-col gap-3'>
                            <label className='text-[1.3rem] text-grey'>Email <span className='text-red'>*</span></label>
                            <input type='text' className='bg-[#F6F6F6] font-manrope backdrop-custom outline-none rounded-md focus:border-green focus:border-2 px-3 py-2 text-[1.2rem]' />
                        </div>

                        <div className='flex flex-col gap-3'>
                            <label className='text-[1.3rem] text-grey'>Phone Number <span className='text-red'>*</span></label>
                            <input type='number' className='bg-[#F6F6F6] font-manrope backdrop-custom outline-none rounded-md focus:border-green focus:border-2 px-3 py-2 text-[1.2rem]' />
                        </div>

                        <div className='flex flex-col gap-3'>
                            <label className='text-[1.3rem] text-grey'>Pin Location of business<span className='text-red'>*</span></label>

                        </div>
                    </form>
                    
                    <button className='bg-green text-white text-center rounded-[4px] py-2 w-[35%] text-[1.3rem]'>Sign Up</button>


                </div>
            </div>

            <br />
        </main>
    )
}

export default SignUp