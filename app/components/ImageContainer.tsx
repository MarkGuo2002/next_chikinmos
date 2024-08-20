import Image, { StaticImageData } from 'next/image';

type Side = "tr" | "tl" | "br" | "bl";

interface ImageContainerProps {
    src: string | StaticImageData;
    w: number;
    h: number;
    decoration?: string | StaticImageData | null;
    side?: Side | null;
    alt: string;
}

const ImageContainer: React.FC<ImageContainerProps> = ({
    src,
    w,
    h,
    decoration = null,
    side = null,
    alt = "Default alt"
}) => {
    let position;
    switch (side){
        case 'tr':
            position = '-top-10 -right-10'
            break;
        case 'tl':
            position = '-top-10 -left-10'
            break;
        case 'br':
            position = '-bottom-10 -right-10'
            break;
        case 'bl':
            position = '-bottom-10 -left-10'
            break;

    }
    return (
        <div className='relative w-full h-full group'>
            <div className={` w-full h-full relative flex-shrink-0 overflow-hidden rounded-3xl shadow-xl border-4 border-chikBrown200 `}>
                <Image
                    className="group-hover:scale-110 transition-all duration-500 ease-in-out"
                    src={src}
                    alt={alt}
                    width={w}
                    height={h}
                    sizes="(max-width: 768px) 100vw, 50vw"
                />
                
            </div>
            {decoration && (
                <Image
                    className={`${position} decorative-img rounded-full h-auto absolute z-10 group-hover:translate-x-4 group-hover:rotate-3 transition-all duration-500 ease-in-out`}
                    loading="lazy"
                    src={decoration}
                    alt="Decoration"
                    width={100}
                    height={100} 
                />
            )}
        
    </div>
    );
};

export default ImageContainer;
