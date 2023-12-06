import React from 'react';
import './Contact.scss';
import { Images } from '@/constants';
import Image from 'next/image';
import ContactForm from './ContactForm';

const Contact = () => {
    return (
        <main className='w-full flex flex-col gap-[4.1rem] h-full'>
            {/* part 1 */}
            <div className='flex flex-col gap-6 w-full'>
                <h1 className='h1-forced text-left lg:w-[22%] md:w-[42%] w-[65%] font-base font-semibold leading-[3.2rem]'>Get in <span className='text-green'>touch with us</span></h1>
                <p className='sm:text-[1.4rem] text-[1.2rem] lg:w-[53%] w-full font-manrope font-normal'>{`Have questions or need assistance with your logistics needs? Contact us at KASI Logistics, where our dedicated team is ready to provide tailored solutions. Reach out today to streamline your supply chain, enhance efficiency, and experience seamless logistics services. Your success is our priority.`}</p>
            </div>

            {/* part 2 */}
            <Image src={Images.smiling2} alt='smiling' priority={true} />

            {/* part 3 */}
            <div className='flex lg:flex-row flex-col font-base w-full lg:gap-[4rem] gap-4 h-full'>

                <div className='w-full flex flex-col lg:h-[48rem] lg:justify-between'>
                    <p className='text-[2.2rem] lg:w-[30%] font-semibold'>Fill the <span className='text-green'>Contact Form</span></p>

                    <div className='lg:block hidden'>
                        <Image src={Images.map} alt='just-a-map' className='w-full' priority={true} />
                    </div>
                </div>

                <div className='w-full'>
                    <ContactForm />
                </div>

                <div className='lg:hidden block mt-4'>
                    <Image src={Images.map} alt='just-a-map' className='w-full' priority={true} />
                </div>



            </div>



        </main>
    )
}

export default Contact