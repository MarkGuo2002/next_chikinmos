import { ArrowLongDownIcon } from "@heroicons/react/24/outline";
import ImageContainer from "../ImageContainer";
import Image from "next/image";

const exampleImagePath = "/images/chikin-env.JPG";
const chikin2 = "/images/pollo.png";
const fried = "/decorations/fried-chicken.png";
const dumpling = "/decorations/dumplings.png";
const spicy = "/images/hothothot.png";
const bixin = "/images/bixin.png"


export default function HomeContent(){
    return(
        <div className="w-full flex flex-col gap-24 items-center justify-center px-2 lg:px-32">
            <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-12 h-auto items-stretch">
                <div className="md:col-span-1 rounded-3xl px-4 md:px-24 ">
                    <Image
                        src={chikin2}
                        className="rounded-xl shadow-xl"
                        width={1920}
                        height={1080}
                        alt="Home image 1"
                    />
                    <p className="subtitle">Chikins</p>
                </div>
                <div className="description-container md:col-span-2 h-full">
                    <h2 className="text-chikPink200 italic">Si comemos pollo frito...</h2>
                    <h1 className="text-chikPink200">¡Que sea Chikinmos!</h1>
                    <p className="mt-4">Desde su inauguración en 2023, Chikinmos ha emergido como el lugar preferido para los entusiastas del auténtico pollo frito coreano en Madrid. Situado en el corazón de la ciudad, nuestro restaurante ofrece una experiencia culinaria inigualable, donde cada bocado refleja una perfecta fusión de tradición y sabor. Ven y descubre por qué Chikinmos es la elección ideal para quienes buscan un deleite auténtico en cada visita.
                    </p>
                    <br></br>
                    <p className="font-bold italic">¡Crujiente, jugoso, siempre perfecto! - Eso es Chikinmos</p>

                </div>
            </div>
        
            <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-12 h-full">
                <div className="description-container order-2 md:order-1 md:col-span-2">
                    <h2 className="text-chikPink200 italic">¿Vas a comer chikin?</h2>
                    <h1 className="text-chikPink200">¡Disfruta con tu amigo!</h1>
                    <p className="mt-4">En Chikinmos, cada plato es una obra maestra culinaria. Nuestro pollo frito, marinado con especias coreanas secretas y frito a la perfección, te llevará a un viaje de sabores que nunca olvidarás. Además, contamos con una variedad de acompañamientos y salsas exclusivas que complementan perfectamente nuestra especialidad.
                    </p>
                    <br></br>
                    <p className="font-bold italic">El sabor que te hace volver, ¡Adicción a Chikinmos!</p>

                </div>
                <div className="order-1 md:order-2 description-container md:col-span-1 px-4 md:px-24">
                    <Image
                        src={exampleImagePath}
                        className="rounded-xl shadow-xl"
                        width={1920}
                        height={1080}
                        alt="Home image 1"
                    />
                    <p className="subtitle">Local en Chikinmos Ayala</p>
                </div>
            </div>
            <div>
                <ArrowLongDownIcon className="w-12 h-12 text-chikBrown200 animate-pulse font-bold mt-12"/>
            </div>


            <div className="w-full lg:w-5/12 mt-12 ending-container flex items-center justify-center gap-4 ">
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