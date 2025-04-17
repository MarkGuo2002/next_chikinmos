import { ArrowLongDownIcon } from "@heroicons/react/24/outline";

import Image from "next/image";
import ImageSlider from "../ImageSlider";
const spicy = "/images/hothothot.png";

export default function HomeContent(){
    return(
        <div className="w-full flex flex-col gap-24 items-center justify-center px-2 lg:px-32">
            <div className="w-full gap-12 h-auto text-center">
                <h2 className="text-chikPink200 italic">Si comemos pollo frito...</h2>
                <h1 className="text-chikPink200">¡Que sea Chikinmos!</h1>
                <ImageSlider />

                <div className="description-container md:col-span-2 h-full">   
                    <p className="mt-4">Desde su inauguración en 2023, Chikinmos ha emergido como el lugar preferido para los entusiastas del auténtico pollo frito coreano en Madrid. Situado en el corazón de la ciudad, nuestro restaurante ofrece una experiencia culinaria inigualable, donde cada bocado refleja una perfecta fusión de tradición y sabor. Ven y descubre por qué Chikinmos es la elección ideal para quienes buscan un deleite auténtico en cada visita.
                    </p>
                    <br></br>
                    <p className="font-bold italic">¡Crujiente, jugoso, siempre perfecto! - Eso es Chikinmos</p>
                </div>
            </div>

            <div className="w-full lg:w-5/12 ending-container flex items-center justify-center gap-4 ">
                <div className="w-1/3">
                    <Image
                        className="-rotate-12 scale-x-[-1]"
                        src={spicy}
                        width={1840}
                        height={1840}
                        alt="hothothot"
                    />
                </div>
                <div className="w-2/3">
                    <p className="text-lg lg:text-3xl text-center font-bold italic text-chikPink200">¡Chingu, te estamos esperando!</p>
                </div>
            </div>
        </div>
    )
}