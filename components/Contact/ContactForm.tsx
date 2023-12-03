'use client';
import React from 'react';

const ContactForm = () => {
    return (
        <form className='flex flex-col gap-3 font-base w-full'>
            <div className='grid sm:grid-cols-2 font-base gap-x-[1.4rem] gap-y-[2rem] w-full'>
                <div className='flex flex-col gap-3'>
                    <label className='text-[1.3rem] text-grey'>First Name <span className='text-red'>*</span></label>
                    <input type='text' className='bg-[#F6F6F6] font-manrope backdrop-custom outline-none rounded-md focus:border-green focus:border-2 px-3 py-2 text-[1.2rem]' />
                </div>

                <div className='flex flex-col gap-3'>
                    <label className='text-[1.3rem] text-grey'>Email <span className='text-red'>*</span></label>
                    <input type='text' className='bg-[#F6F6F6] font-manrope backdrop-custom outline-none rounded-md focus:border-green focus:border-2 px-3 py-2 text-[1.2rem]' />
                </div>

                <div className='flex flex-col gap-3'>
                    <label className='text-[1.3rem] text-grey'>Phone Number <span className='text-red'>*</span></label>
                    <input type='text' className='bg-[#F6F6F6] font-manrope backdrop-custom outline-none rounded-md focus:border-green focus:border-2 px-3 py-2 text-[1.2rem]' />
                </div>
            </div>

            <div className='flex flex-col gap-3'>
                <label className='text-[1.3rem] text-grey'>Message <span className='text-red'>*</span></label>
                <textarea rows={9} className='bg-[#F6F6F6] font-manrope backdrop-custom outline-none rounded-md focus:border-green focus:border-2 px-3 py-2 text-[1.2rem]' />
            </div>

            
            <button className='bg-orange text-white text-center rounded-[4px] py-2 w-[35%] text-[1.3rem]'>Log In</button>
        </form>
    )
}

export default ContactForm