import Image, { StaticImageData } from "next/image";
import ImageContainer from "../ImageContainer";
import {
    MapPinIcon,
    PhoneIcon,
    EnvelopeIcon,
  } from '@heroicons/react/24/outline';
  

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
        <div className="flex flex-col items-center gap-4 w-[32rem]">
            <h2 className="text-2xl font-bold text-chikBrown200">{title}</h2>
            <a href={link} target="_blank" rel="noopener noreferrer" className="w-full relative cursor-pointer group">
                <p className="pointer-events-none absolute-center z-10 text-3xl text-white opacity-0 group-hover:opacity-100 transition-all duration-500 ease-in-out ">
                    Abrir en Google Maps
                </p>
                <ImageContainer 
                    src={image}
                />
            </a>
            <div className="additional-info-container flex flex-col justify-start gap-4 text-chikBrown200 text-xl">
                <div className="address-item flex gap-6 items-center">
                    <MapPinIcon className="size-8"/>
                    <p>{address}</p>
                </div>
                <div className="phone-item flex gap-6 items-center">
                    <PhoneIcon className="size-8"/>
                    <p>{phone}</p>
                </div>
                <div className="mail-item flex gap-6 items-center">
                    <EnvelopeIcon className="size-8"/>
                    <p>{mail}</p>
                </div>
            </div>
        </div>
    )
}

export default RestaurantCard;