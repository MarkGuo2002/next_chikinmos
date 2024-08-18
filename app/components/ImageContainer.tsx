import Image, { StaticImageData } from 'next/image';

type Side = "tr" | "tl" | "br" | "bl";

interface ImageContainerProps {
    src: string | StaticImageData;
    decoration?: string | StaticImageData | null;
    side?: Side | null;
    alt?: string;
}

const ImageContainer: React.FC<ImageContainerProps> = ({
    src,
    decoration = null,
    side = null,
    alt = "Default alt"
}) => {
    const size = "w-96 h-96 lg:w-80 lg:h-80";
    const position = `-${side}-0`
    return (
        <div className={` w-full h-[24rem] image-container relative flex-shrink-0 overflow-hidden rounded-3xl shadow-xl border-4 border-chikBrown200`}>
            <Image
                className="object-cover brightness-100 hover:scale-110 hover:brightness-50 transition-all duration-500 ease-in-out"
                loading="lazy"
                src={src}
                alt={alt}
                fill
            />
            
            {decoration && (
                <Image
                    className={`${position} decorative-img rounded-full h-auto absolute -top-8`}
                    loading="lazy"
                    src={decoration}
                    alt="Decoration"
                    width={200}
                    height={200} 
                />
            )}
        </div>
    );
};

export default ImageContainer;
