'use client';
import { Countries, Images } from '@/constants';
import countries from '@/constants/countries';
import Image from 'next/image';
import React, { useState } from 'react';

const SignUpForm = () => {
    const [selectedCountry, setselectedCountry] = useState(Countries.filter(country => country.name === 'Kenya')[0]);
    const [dropDownToggle, setDropDownToggle] = useState(false);

    function toggler() {
        setDropDownToggle(prev => !prev);
    }

    return (
        <div className='flex flex-col gap-4'>
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

                <div className='flex flex-col gap-3 relative'>
                    <label className='text-[1.3rem] text-grey'>County of operation <span className='text-red'>*</span></label>
                    {/* <input type='text' className='bg-[#F6F6F6] font-manrope backdrop-custom outline-none rounded-md focus:border-green focus:border-2 px-3 py-2 text-[1.2rem]' /> */}
                    <div className='bg-[#F6F6F6] cursor text-grey font-manrope backdrop-custom outline-none rounded-md focus:border-green focus:border-2 px-4 py-2 text-[1.2rem]' onClick={() => toggler()}>
                        <div className='w-full flex justify-between place-items-center'>
                            <p>{selectedCountry.name}</p>
                            <Image src={Images.dropDown} alt='down arrow' priority={true} />
                        </div>
                    </div>

                    {dropDownToggle &&
                        <div className='absolute rounded-b-md top-[6rem] custom-shadow bg-white z-30 max-h-[15rem] overflow-y-auto text-[1rem] px-4 py-2'>
                            {countries.map((country, i) =>
                                <div key={i} className='cursor-pointer group hover:bg-lightGreen w-full p-2 rounded-md'>
                                    <p className='group-hover:text-green'>{country.name}</p>
                                </div>
                            )}
                        </div>
                    }


                </div>

                <div className='flex flex-col gap-3'>
                    <label className='text-[1.3rem] text-grey'>Email <span className='text-red'>*</span></label>
                    <input type='text' className='bg-[#F6F6F6] font-manrope backdrop-custom outline-none rounded-md focus:border-green focus:border-2 px-3 py-2 text-[1.2rem]' />
                </div>

                <div className='flex flex-col gap-3'>
                    <label className='text-[1.3rem] text-grey'>Phone Number <span className='text-red'>*</span></label>
                    <input type='number' className='bg-[#F6F6F6] font-manrope backdrop-custom outline-none rounded-md focus:border-green focus:border-2 px-3 py-2 text-[1.2rem]' />
                </div>

                <div className='flex flex-col gap-3 sm:col-span-2'>
                    <label className='text-[1.3rem] text-grey'>Pin Location of business<span className='text-red'>*</span></label>

                    <Image src={Images.map2} alt='just-a-map' className='' priority={true} />

                </div>
            </form>

            <button className='bg-green text-white text-center rounded-[4px] lg:py-[.9rem] md:py-[.7rem] py-[.5rem] sm:w-[55%] w-[70%] text-[1.3rem]'>Sign Up</button>
        </div>
    )
}

export default SignUpForm