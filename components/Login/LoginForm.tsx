'use client';
import React from 'react';

const LoginForm = () => {
    return (
        <form className='flex flex-col gap-10 place-items-start w-full border border-[#EDEDED] text-base py-8 px-5'>
            <p className='font text-[1.6rem] font-semibold'>Login</p>

            <div className='flex flex-col gap-3 w-full'>
                <label className='text-[1.1rem] text-grey'>Shop Code</label>
                <input type='text' className='bg-[#F6F6F6] font-manrope backdrop-custom outline-none rounded-md focus:border-green focus:border-2 px-3 py-2 text-[1.1rem]' />
            </div>

            <div className='flex flex-col gap-3 w-full'>
                <label className='text-[1.1rem] text-grey'>Password</label>
                <input type='text' className='bg-[#F6F6F6] font-manrope backdrop-custom outline-none rounded-md focus:border-green focus:border-2 px-3 py-2 text-[1.1rem]' />
            </div>

            <button className='bg-orange text-white text-center rounded-[4px] py-2 w-[35%] text-[1.3rem]'>Log In</button>

        </form>

    )
}

export default LoginForm