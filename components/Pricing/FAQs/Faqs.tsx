'use client';
import React, { useState } from 'react';
import Faq from './Faq';

const faqs = [
    {
        question: "What areas do you currently serve with your electric bike delivery service",
        answer: "We currently operate in all environs near Nairobi and are continually expanding to reach more locations for sustainable, eco-friendly deliveries."
    },
    {
        question: "How does your electric bike delivery service contribute to environmental sustainability?",
        answer: "We currently operate in all environs near Nairobi and are continually expanding to reach more locations for sustainable, eco-friendly deliveries."
    },
    {
        question: "What types of items can be delivered using your electric bikes?",
        answer: "We currently operate in all environs near Nairobi and are continually expanding to reach more locations for sustainable, eco-friendly deliveries."
    },
    {
        question: "What measures do you have in place to ensure the safety of delivered items?",
        answer: "We currently operate in all environs near Nairobi and are continually expanding to reach more locations for sustainable, eco-friendly deliveries."
    },
    {
        question: "How can I track the status of my delivery in real-time?",
        answer: "We currently operate in all environs near Nairobi and are continually expanding to reach more locations for sustainable, eco-friendly deliveries."
    }
]

const Faqs = () => {
    const [expandedFaqIndex, setExpandedFaqIndex] = useState(-1);

    const handleExpandFaq = (index: number) => {
        setExpandedFaqIndex(prevIndex => prevIndex === index ? -1 : index);
    }

    return (
        <div className='flex flex-col w-full'>
            {faqs.map((faq, index) => (
                <div key={index}>
                    <Faq
                        faq={faq}
                        index={index}
                        expanded={expandedFaqIndex === index}
                        handleExpandFaq={handleExpandFaq}
                    />
                </div>
            ))}
        </div>
    )
}

export default Faqs