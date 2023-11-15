'use client';
import React, { useState } from 'react';
import Image from "next/image";
import "./Navbar.scss";
import { Images } from '@/constants';
import Link from 'next/link';

const Navbar = () => {
    const [menuToggle, setMenuToggle] = useState(false);
    return (
        <div className='relative'>
            <div className='flex w-full fixed justify-between custom-shadow py-3 px-3 place-items-center'>
                {/* logo */}
                <Image src={Images.logo} alt="logo" width={100} priority={true} />

                {/* desktop links */}
                <div className=' justify-evenly gap-3 text-[1rem] place-items-center hidden sm:flex font-semibold'>
                    <Link href='/' className=''>HOME</Link>
                    <Link href='/pricing' className=''>PRICING</Link>
                    <Link href='/contact-us' className=''>CONTACT US</Link>
                    <Link href='/sign-up' className='text-green'>SIGN UP</Link>
                </div>

                {/* desktop login */}
                <Link href='/login' className='bg-orange hidden rounded-sm sm:flex justify-center place-items-center gap-1 text-[1rem] text-white px-6 py-1 font-semibold'>
                    <p>LOG IN</p>
                    <Image src={Images.signIn} alt='signin' height={15} priority={true} />
                </Link>

                {/* harmbuger menu */}
                <div className='flex flex-col gap-[0.4rem] sm:hidden' onClick={() => setMenuToggle(prev => !prev)}>
                    <div className={`w-[2.2rem] h-1 bg-black rounded-full ${menuToggle ? 'rotate-45 origin-left' : ''} ease-out duration-150`}></div>
                    <div className={`w-[2.2rem] h-1 bg-black rounded-full ${menuToggle ? 'opacity-0' : ''} ease-out duration-150`}></div>
                    <div className={`w-[2.2rem] h-1 bg-black rounded-full -rotate ${menuToggle ? '-rotate-45 origin-left' : ''} ease-out duration-150`} ></div>
                </div>

            </div>
            {/* mobile links */}
            <div className={`absolute w-[14.75rem] h-[15.9375rem] bg-white flex justify-center place-content-evenly flex-col gap-3 top-[5rem] ml-1 right-0 p-3 custom-shadow`}>
                <div className='flex flex-col justify-center place-content-evenly gap-2'>
                    <Link href='/' className='w-full rounded-sm text-green text-sm text-left px-3 py-4 bg-lightGreen'>HOME</Link>
                    <Link href='/' className='w-full rounded-sm text-green text-sm text-left px-3 py-4 bg-lightGreen'>HOME</Link>
                    <Link href='/' className='w-full rounded-sm text-green text-sm text-left px-3 py-4 bg-lightGreen'>HOME</Link>
                </div>

                <Link href='/login' className='bg-orange flex rounded-sm justify-center place-items-center gap-1 text-[1rem] text-white px-6 py-1 font-semibold'>
                    <p>LOG IN</p>
                    <Image src={Images.signIn} alt='signin' height={15} priority={true} />
                </Link>
            </div>
        </div>
    )
}

export default Navbar