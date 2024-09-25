'use client'
import { useState } from "react";
import { PlusIcon, MinusIcon } from '@heroicons/react/24/outline';


const SpecialFlavoursFaq : React.FC = () => {
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
                <h2>¿Qué sabores tengo para elegir?</h2>
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
                    <p>Nuestros grandes éxitos son:</p>
                    <ul className="list-disc list-inside">
                        <li><strong>Sommerzeit:</strong> balance perfecto entre la dulzura suave de la miel y el toque ácido-picante de la mostaza</li>
                        <li><strong>Amber:</strong> combinación donde el dulzor se transforma en un picante cálido y agradable, ideal para quienes buscan un toque atrevido</li>
                        <li><strong>Ajomola:</strong> fusión de un intenso sabor a ajo y la profundidad salada de la soja, logrando un sabor profundo y envolvente.</li>
                        <li><strong>Snowing:</strong> para los amantes del queso, en este caso en polvo, acompañado de una salsa de yogur para añadir un toque de frescura</li>
                    </ul>
                    <p>Y también tenemos otras muchas más como son:</p>
                    <ul className="list-disc list-inside">
                        <li><strong>Freyo:</strong> yogur con fresa</li>
                        <li><strong>Daruma:</strong> wasabi suave con alga nor</li>
                        <li><strong>Esmeralda:</strong> agridulce con cebolleta china</li>
                        <li><strong>Hotter than U:</strong>  chile molido extremadamente picante</li>
                        <li><strong>¿La Misteriosa?:</strong></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default SpecialFlavoursFaq;
