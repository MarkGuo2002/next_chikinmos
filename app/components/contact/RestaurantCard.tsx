import { StaticImageData } from "next/image";
import ImageContainer from "../ImageContainer";


import {
    MapPinIcon,
    PhoneIcon,
    EnvelopeIcon,
  } from '@heroicons/react/24/outline';

  import {
    MapIcon
  } from '@heroicons/react/24/solid';
  

interface RestaurantCardProps {
    title: string;
    image: string | StaticImageData;
    address: string;
    phone: string;
    mail: string;
    link: string;
}

const RestaurantCard: React.FC<RestaurantCardProps> = ({ title, image, address, phone, mail, link }) => {
    return(
        <div className="flex flex-col items-center gap-4 w-full">
            <h2 className="text-2xl font-bold text-chikBrown200">{title}</h2>
            <a href={link} target="_blank" rel="noopener noreferrer" className="w-full h-full relative cursor-pointer group">
                <div className="pointer-events-none absolute-center z-10 text-3xl text-white opacity-0 group-hover:opacity-100 transition-all duration-500 ease-in-out transform translate-y-4 group-hover:-translate-y-10 flex flex-col items-center justify-center">
                    <MapIcon className="size-8"/>
                    <p className="text-white text-xl text-bold">Cómo llegar</p>
                </div>
                <div className="group-hover:brightness-75 transition-all duration-500 ease-in-out">
                    <ImageContainer
                        src={image}
                        alt={"Hello"}
                        w={1920}
                        h={1080}
                    />
                </div>
            </a>
            <div className="additional-info-container flex flex-col justify-start gap-4 text-chikBrown200 text-base lg:text-xl">
                <div className="address-item flex gap-6 items-center">
                    <MapPinIcon className="size-6 lg:size-8"/>
                    <p>{address}</p>
                </div>
                <div className="phone-item flex gap-6 items-center">
                    <PhoneIcon className="size-6 lg:size-8"/>
                    <p>{phone}</p>
                </div>
                <div className="mail-item flex gap-6 items-center">
                    <EnvelopeIcon className="size-6 lg:size-8"/>
                    <p>{mail}</p>
                </div>
            </div>
        </div>
    )
}

export default RestaurantCard;