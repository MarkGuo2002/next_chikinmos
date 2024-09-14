import ImageContainer from "../ImageContainer";
import Image from "next/image";

const exampleImagePath = "/images/example.png";
const beer = "/decorations/beer.png";
const wings = "/decorations/fried-chicken.png"
const spicy = "/images/hothothot.png";


export default function HomeContent(){
    return(
        <div className="w-full flex flex-col gap-12 items-center justify-center px-2 lg:px-32">
            <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-12 h-auto">
                <div className="md:col-span-1">
                    <ImageContainer
                        src={exampleImagePath}
                        w={1920}
                        h={1080}
                        alt="Home image 1"
                        decoration={beer}
                        side={"tr"}
                    />
                    <p className="subtitle">Alitas bien ricas 😋</p>
                </div>
                <div className="description-container md:col-span-2">
                    <h2>Lorem Ipsum!</h2>
                    <h1>Todo 100% Hecho a mano</h1>
                    <p className="mt-4">Desde su apertura en 2023, Chikinmos se ha convertido en el destino favorito de los amantes del auténtico pollo frito coreano en Madrid. Ubicado en el corazón de la ciudad, nuestro restaurante ofrece una experiencia gastronómica única que combina tradición y sabor en cada bocado.
                    Desde su apertura en 2023, Chikinmos se ha convertido en el destino favorito de los amantes del auténtico pollo frito coreano en Madrid. Ubicado en el corazón de la ciudad, nuestro restaurante ofrece una experiencia gastronómica única que combina tradición y sabor en cada bocado.
                    </p>

                </div>
            </div>
        
            <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-12 h-auto">
                <div className="description-container order-2 md:order-1 md:col-span-2">
                    <h2>Ven con tus amig@s</h2>
                    <h1>¿Seguro que te lo vas a perder?</h1>
                    <p className="mt-4">En Chikinmos, cada plato es una obra maestra culinaria. Nuestro pollo frito, marinado con especias coreanas secretas y frito a la perfección, te llevará a un viaje de sabores que nunca olvidarás. Además, contamos con una variedad de acompañamientos y salsas exclusivas que complementan perfectamente nuestra especialidad.
                    </p>

                </div>
                <div className="order-1 md:order-2 description-container md:col-span-1">
                    <ImageContainer
                        src={exampleImagePath}
                        w={1920}
                        h={1080}
                        alt="Home image 1"
                        decoration={wings}
                        side={"tl"}
                    />
                    <p className="subtitle">Bibimbap 😋</p>
                </div>
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
                    <p className="text-lg lg:text-3xl text-center font-bold">Encuéntranos en Calle General Díaz Porlier 38 28001</p>
                </div>
            </div>
        </div>
    )
}