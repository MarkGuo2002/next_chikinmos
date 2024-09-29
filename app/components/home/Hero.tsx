import Image from "next/image"
import { CalendarIcon, ChevronDownIcon, ArrowDownTrayIcon } from "@heroicons/react/24/solid"

//pdf file location
const menuPDF = "/menu.pdf"


export default function Hero(){
    return(
        <div className="flex flex-col w-full items-center mb-20">
            <div className="hero-image-container max-w-sm md:max-w-xl h-auto flex-shrink-0 relative">
                <Image
                    className=""
                    priority
                    src="/images/full-logo.png"
                    alt="chikinmos main logo"
                    width={1080}
                    height={810}
                />
                {/* DECORATIONS AROUND THE LOGO */}
                <Image
                    className="absolute top-0 -right-4 md:-right-8 w-20 h-20 rotate-12 animate-pulse"
                    src="/decorations/double-star.png"
                    alt="decoration star"
                    width={1062}
                    height={1097}
                />
                <Image
                    className="absolute bottom-16 -left-4 md:-left-8 w-16 h-16 rotate-12 animate-pulse"
                    src="/decorations/double-star.png"
                    alt="decoration star"
                    width={1062}
                    height={1097}
                />
            </div>
            <h2 className="font-normal text-center text-chikBrown100 mb-16">
                <span className="text-3xl font-bold">🍗El restaurante coreano con mejor <span className="text-chikBrown200 font-bold">#chikin</span> de España<br></br></span>
                <br></br>
                            📍Calle General Díaz Porlier 38 28001 <br></br>
                            📍Calle de Ayala, 87, Salamanca, 28006 Madrid
            </h2>

            {/* hello */}
            <a
                href={menuPDF}
                download
                className="flex items-center justify-center bg-chikCaqui000 gap-2 px-6 py-4 border-2 border-chikBrown100 cursor-pointer rounded-xl hover:bg-chikBrown100 transition-all duration-300 ease-in-out text-chikBrown100 hover:text-white group"
            >
                <ArrowDownTrayIcon className="size-6" />
                <p className="group-hover:text-white font-bold text-xl">Descarga nuestra carta</p>
            </a>

            

            <div className="timetable-container my-12 max-w-xl h-auto flex flex-col items-center">
                <div className="flex items-center gap-2">
                    <CalendarIcon className="icon-css" />
                    <h2 className="text-black">Horario</h2>
                </div>

                <div className="flex gap-12 md:gap-36 mt-2">
                    <div className="max-w-md flex flex-col justify-between text-left">
                        <p>Lunes</p>
                        <p>Martes</p>
                        <p>Miércoles</p>
                        <p>Jueves</p>
                        <p>Viernes</p>
                        <p>Sábado</p>
                        <p>Domingo</p>
                    </div>
                    <div className="max-w-4xl flex flex-col justify-between text-right">
                        <p>Cerrado</p>
                        <p>13:00-17:00; 19:00-23:00</p>
                        <p>13:00-17:00; 19:00-23:00</p>
                        <p>13:00-17:00; 19:00-23:00</p>
                        <p>13:00-23:00</p>
                        <p>13:00-23:00</p>
                        <p>13:00-23:00</p>
                    </div>
                </div>
            </div>
            < ChevronDownIcon className="w-12 h-12 text-chikBrown200 font-bold animate-bounce my-12"/>
        
        </div>
    )
}