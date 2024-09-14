'use client'
import { useState } from "react";
import { PlusIcon, MinusIcon } from '@heroicons/react/24/outline';

interface FaqItemProps {
    question: string;
    answer: string;
}

const FaqItem: React.FC<FaqItemProps> = ({ question, answer }) => {
    const [isExpanded, setIsExpanded] = useState(false);
    const toggleFaqInfo = () => {
        setIsExpanded(!isExpanded);
    };

    return (
        <div
            onClick={toggleFaqInfo}
            className="rounded-md faq-item-container w-full shadow-sm cursor-pointer px-6 py-3 bg-gray100"
            aria-expanded={isExpanded}
        >
            <div className="question flex justify-between items-center gap-2">
                <h2>{question}</h2>
                <div className="flex-shrink-0">
                    {isExpanded ? (
                        <MinusIcon className="icon-css" />
                    ) : (
                        <PlusIcon className="icon-css" />
                    )}
                </div>
            </div>
            <div className={`faq-answer overflow-hidden transition-max-height duration-300 ease-in-out ${isExpanded ? 'max-h-60' : 'max-h-0'}`}>
                <p className="mt-4">{answer}</p>
            </div>
        </div>
    );
};

export default FaqItem;
