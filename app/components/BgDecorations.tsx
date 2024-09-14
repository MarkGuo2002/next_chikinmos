import Image from "next/image";

import bgChikin from "/public/images/chikinminimalist.png";
const beer = "/decorations/beer.png";
const wings = "/decorations/fried-chicken.png";
const heart = "/decorations/heart.png";
const star = "/decorations/double-star.png";
const minichikin = "/decorations/mini-chikin.png";
const dumplings = "/decorations/dumplings.png";

export default function BgDecorations() {
  return (
    <>
        <Image
            src={bgChikin}
            alt="bg chicken"
            className="fixed z-0 opacity-5 top-40 right-0"
            width={600}
            height={600}
        />
            <Image
            src={beer}
            alt="beer"
            className="fixed z-0 opacity-5 top-20 left-10 w-20 h-20"
            width={600}
            height={600}
        />
        <Image
            src={dumplings}
            alt="dumplings"
            className="fixed z-0 opacity-5 bottom-20 left-1/3 rotate-10"
            width={100}
            height={100}
        />
        <Image
            src={wings}
            alt="wings"
            className="fixed z-0 opacity-5 top-1/2 right-3/4 w-20 h-16"
            width={600}
            height={600}
        />


        <div className="hidden lg:block">
            <Image
                src={star}
                alt="star"
                className="fixed z-0 opacity-5 bottom-10 left-1/2 rotate-6"
                width={100}
                height={100}
            />
            <Image
                src={minichikin}
                alt="mini chikin"
                className="fixed z-0 opacity-5 top-3/4 right-1/4 rotate-8"
                width={100}
                height={100}
            />
            <Image
                src={heart}
                alt="heart"
                className="fixed z-0 opacity-5 top-1/4 right-1/4 rotate-12"
                width={100}
                height={100}
            />
        </div>
    </>
  );
}
