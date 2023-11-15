'use client';
import React, { useEffect, useState } from 'react';
import Image from "next/image";
import "./Navbar.scss";
import { Images } from '@/constants';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Navbar = () => {
    const [menuToggle, setMenuToggle] = useState(false);
    const pathname = usePathname().split('/')[1];
    const [currentTab, setCurrentTab] = useState(pathname.length > 1 ? pathname : 'home');

    useEffect(() => {
        setCurrentTab(pathname.length > 1 ? pathname : 'home');
      }, [pathname]);
    
    return (
        <div className='fixed w-full top-0'>
            <div className='relative'>
                <div className='flex  justify-between custom-shadow py-3 px-3 place-items-center bg-white'>
                    {/* logo */}
                    <Image src={Images.logo} alt="logo" width={100} priority={true} />

                    {/* desktop links */}
                    <div className=' justify-evenly gap-6 text-[1rem] place-items-center hidden sm:flex font-semibold font-manrope '>
                        <Link href='/' className={`hover:after:content-[' '] hover:after:absolute hover:after:w-2 hover:after:h-2 hover:after:bg-green hover:after:rounded-full hover:after:bottom-[-0.5rem] hover:after:ml-[-1.8rem] after:mt-[2rem] relative hover:text-green transition-colors ease-out duration-75 ${currentTab === 'home' ? "after:content-[' '] after:absolute after:w-2 after:h-2 after:bg-green after:rounded-full after:bottom-[-0.5rem] after:ml-[-1.8rem] after:mt-[2rem] relative text-green" : ''}`}>HOME</Link>

                        <Link href='/pricing' className={`hover:after:content-[' '] hover:after:absolute hover:after:w-2 hover:after:h-2 hover:after:bg-green hover:after:rounded-full hover:after:bottom-[-0.5rem] hover:after:ml-[-2.3rem] after:mt-[2rem] relative hover:text-green transition-colors ease-out duration-75 ${currentTab === 'pricing' ? "after:content-[' '] after:absolute after:w-2 after:h-2 after:bg-green after:rounded-full after:bottom-[-0.5rem] after:ml-[-2.3rem] after:mt-[2rem] relative text-green" : ''}`}>PRICING</Link>
                        
                        <Link href='/contact-us' className={`hover:after:content-[' '] hover:after:absolute hover:after:w-2 hover:after:h-2 hover:after:bg-green hover:after:rounded-full hover:after:bottom-[-0.5rem] hover:after:ml-[-3.7rem] after:mt-[2rem] relative hover:text-green transition-colors ease-out duration-75 ${currentTab === 'contact-us' ? "after:content-[' '] after:absolute after:w-2 after:h-2 after:bg-green after:rounded-full after:bottom-[-0.5rem] after:ml-[-3.7rem] after:mt-[2rem] relative text-green" : ''}`}>CONTACT US</Link>

                        <Link href='/sign-up' className={`hover:after:content-[' '] hover:after:absolute hover:after:w-2 hover:after:h-2 hover:after:bg-green hover:after:rounded-full hover:after:bottom-[-0.5rem] hover:after:ml-[-2.3rem] after:mt-[2rem] relative hover:text-green transition-colors ease-out duration-75 ${currentTab === 'sign-up' ? "after:content-[' '] after:absolute after:w-2 after:h-2 after:bg-green after:rounded-full after:bottom-[-0.5rem] after:ml-[-2.3rem] after:mt-[-2rem] relative text-green" : ''}`}>SIGN UP</Link>
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
                <div className={`absolute w-[15rem] bg-white flex justify-center place-content-evenly flex-col gap-3 top-[5.3rem] ml-1 right-0 p-3 custom-shadow transition-opacity ease-in-out duration-300 ${menuToggle ? 'opacity-100' : 'opacity-0 pointer-events-none'} sm:hidden`}>
                    <div className='flex flex-col justify-center place-content-evenly gap-2'>
                        <Link href='/' className={`w-full rounded-sm  text-sm text-left px-3 py-4 ${currentTab === 'home' ? 'bg-lightGreen text-green' : 'bg-lightGrey2 text-grey'}`} onClick={() => {setCurrentTab('home'); setMenuToggle(false)}}>HOME</Link>
                        <Link href='/pricing' className={`w-full rounded-sm  text-sm text-left px-3 py-4 ${currentTab === 'pricing' ? 'bg-lightGreen text-green' : 'bg-lightGrey2 text-grey'}`} onClick={() => {setCurrentTab('pricing'); setMenuToggle(false)}}>PRICING</Link>
                        <Link href='/contact-us' className={`w-full rounded-sm  text-sm text-left px-3 py-4 ${currentTab === 'contact-us' ? 'bg-lightGreen text-green' : 'bg-lightGrey2 text-grey'}`} onClick={() => {setCurrentTab('contact-us'); setMenuToggle(false)}}>CONTACT US</Link>
                        <Link href='/sign-up' className={`w-full rounded-sm  text-sm text-left px-3 py-4 ${currentTab === 'sign-up' ? 'bg-lightGreen text-green' : 'bg-lightGrey2 text-grey'}`} onClick={() => {setCurrentTab('sign-up'); setMenuToggle(false)}}>SIGN UP</Link>
                    </div>

                    <Link href='/login' className='bg-orange flex rounded-sm justify-center place-items-center gap-1 text-[1rem] text-white px-6 py-2 font-semibold font-monrope'>
                        <p>LOG IN</p>
                        <Image src={Images.signIn} alt='signin' height={15} priority={true} />
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Navbar