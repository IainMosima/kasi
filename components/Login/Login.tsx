/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import "./Login.scss";
import Image from 'next/image';
import { Images } from '@/constants';
import LoginForm from './LoginForm';
const Login = () => {
    return (
        <main className='flex w-full sm:flex-row flex-col gap-7'>
            {/* part 1 */}
            <div className='flex flex-col w-full justify-between'>
                <h1 className='h1-forced text-left lg:w-[50%] md:w-[42%] w-[65%] font-base font-semibold leading-[4rem]'>Already a member? <span className='text-orange'>Log in</span></h1>

                <LoginForm/>
            </div>

            {/* part 2 */}
            <div className='w-full'>
                <Image src={Images.delivery5} alt='delivery-5' priority={true}/>
            </div>
        </main>
    )
}

export default Login