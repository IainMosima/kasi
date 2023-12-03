/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import "./Login.scss";
import Image from 'next/image';
import { Images } from '@/constants';
const Login = () => {
    return (
        <main className='flex w-full sm:flex-row flex-col gap-7'>
            {/* part 1 */}
            <div className='flex flex-col w-full justify-between'>
                <h1 className='h1-forced text-left lg:w-[50%] md:w-[42%] w-[65%] font-base font-semibold leading-[4rem]'>Already a member? <span className='text-orange'>Log in</span></h1>

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

            </div>

            {/* part 2 */}
            <div className='w-full'>
                <Image src={Images.delivery5} alt='delivery-5' />
            </div>
        </main>
    )
}

export default Login