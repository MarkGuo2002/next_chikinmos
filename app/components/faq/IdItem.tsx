'use client'
import { useState } from "react";
import { PlusIcon, MinusIcon } from '@heroicons/react/24/outline';
import Image from "next/image";

const chichic = "/images/chic-chic-id.png";
const IdItem : React.FC = () => {
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
                <h2>¿Quién es Chic-Chic?</h2>
                <div className="flex-shrink-0">
                    {isExpanded ? (
                        <MinusIcon className="icon-css" />
                    ) : (
                        <PlusIcon className="icon-css" />
                    )}
                </div>
            </div>
            <div className={`faq-answer overflow-hidden transition-max-height duration-300 ease-in-out ${isExpanded ? 'max-h-100' : 'max-h-0'}`}>
                <div className="answer-content mt-4">
                    <p>Algunos conoceréis ya a nuestra querida mascota Chic-Chic y para los que no, os dejo su ID:</p>
                    <div className="p-2 md:px-24 md:py-12">
                        <Image 
                            src={chichic}
                            className="rounded-lg"
                            alt="Chic-Chic ID"
                            width={1920}
                            height={1080}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default IdItem;
