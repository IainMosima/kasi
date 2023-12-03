import React from 'react';
import { Images } from '@/constants';
import Image from 'next/image';


interface Props {
    faq: { question: string, answer: string };
    index: number;
    expanded: boolean;
    handleExpandFaq: (index: number) => void;
}

const Faq = (props: Props) => {
    return (
        <div className={`flex flex-col gap-3 py-4 lg:px-4 w-full`} style={{ WebkitTapHighlightColor: 'transparent' }}>
            <div
                className={`flex w-full gap-4 place-items-center cursor-pointer focus:outline-none`}
                onClick={() => props.handleExpandFaq(props.index)}
                tabIndex={0}
            >
                <Image
                    src={Images.plus}
                    alt='plus-icon'
                    height={20}
                    className={`transform ease-linear duration-150 ${props.expanded ? 'rotate-45' : 'rotate-0'}`}
                />
                <p className='text-base font-semibold text-[1.4rem] leading-6'>{props.faq.question}</p>
            </div>
            {/* second div */}
            <div className={`px-7 overflow-hidden transition-max-height ease-in-out duration-150 ${props.expanded ? '' : 'max-h-0'}`}>
                <div className='border-l-4 border-orange lg:w-[80%] md:w-[85%] w-full px-3'>
                    <p className='text-gray font-manrope text-[1.2rem]'>{props.faq.answer}</p>
                </div>
            </div>

        </div>


    )
}

export default Faq