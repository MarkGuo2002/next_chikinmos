import Image, { StaticImageData } from 'next/image';

type Side = "tr" | "tl" | "br" | "bl";

type ImageContainerProps = {
    src: string | StaticImageData;
    w: number;
    h: number;
    decoration?: string | StaticImageData | null;
    side?: Side | null;
    alt: string;
}

export default function ImageContainer({ src, w, h, decoration, side = "tr", alt = "Default alt" }: ImageContainerProps) {
    let position;
    switch (side){
        case 'tr':
            position = '-top-10 -right-5'
            break;
        case 'tl':
            position = '-top-10 -left-5'
            break;
        case 'br':
            position = '-bottom-10 -right-5'
            break;
        case 'bl':
            position = '-bottom-10 -left-5'
            break;

    }
    return (
        <div className='relative w-full h-auto group'>
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
                    width={80}
                    height={80} 
                />
            )}
        
    </div>
    );
};

