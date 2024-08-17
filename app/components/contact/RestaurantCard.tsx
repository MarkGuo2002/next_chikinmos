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
}

const RestaurantCard: React.FC<RestaurantCardProps> = ({ title, image, address, phone, mail }) => {
    return(
        <div className="flex flex-col items-center gap-4">
            <h2 className="text-2xl font-bold text-chikBrown200">{title}</h2>
            <ImageContainer
                src={image}

            />
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