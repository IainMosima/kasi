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
        <div className='flex flex-col gap-6 py-4 lg:px-4 w-full'>
            <div className='flex w-full gap-4 place-items-center cursor-pointer' onClick={() => props.handleExpandFaq(props.index)}>
                <Image src={Images.plus} alt='plus-icon' height={20} />
                <p className='text-base font-semibold text-[1.1rem] leading-6'>{props.faq.question}</p>
            </div>
            {/* second div */}
            {props.expanded &&
                <div className={`px-7`}>
                    <div className='border-l-4 border-orange lg:w-[75%] md:w-[85%] w-[90%] px-3'>
                        <p className='text-gray font-manrope text-[1rem]'>{props.faq.answer}</p>
                    </div>
                </div>
            }
        </div>
    )
}

export default Faq