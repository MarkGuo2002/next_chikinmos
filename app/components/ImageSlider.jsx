"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";
import { AnimatePresence, motion } from "framer-motion";

const SCROLLPHOTOS = [
  { src: "/images/pollo.png", alt: "Pollo" },
  { src: "/images/chikins.JPG", alt: "Chikins" },
  { src: "/images/chikin-env.jpg", alt: "shop" },
  { src: "/images/sushi2.jpg", alt: "Sushi 2" },
  { src: "/images/gyoza.jpg", alt: "Gyoza" },
  { src: "/images/chikin-env2.png", alt: "shop 2" },
  { src: "/images/tompoki.jpg", alt: "Tompoki" },
  { src: "/images/sushi1.jpg", alt: "Sushi 1" },
  { src: "/images/tompoki2.jpg", alt: "Tompoki 2" }
];

export default function ImageSlider() {
  const [page, setPage] = useState(0);
  const [direction, setDirection] = useState(0); // for animation direction
  const [imagesPerPage, setImagesPerPage] = useState(3);

  useEffect(() => {
    const updateImagesPerPage = () => {
      const width = window.innerWidth;
      if (width < 640) {
        setImagesPerPage(1);
      } else if (width < 1024) {
        setImagesPerPage(2);
      } else {
        setImagesPerPage(3);
      }
    };

    updateImagesPerPage();
    window.addEventListener("resize", updateImagesPerPage);
    return () => window.removeEventListener("resize", updateImagesPerPage);
  }, []);

  const maxPage = Math.ceil(SCROLLPHOTOS.length / imagesPerPage) - 1;
  const start = page * imagesPerPage;
  const currentImages = SCROLLPHOTOS.slice(start, start + imagesPerPage);

  const handleNext = () => {
    if (page < maxPage) {
      setDirection(1);
      setPage((p) => p + 1);
    }
  };

  const handlePrev = () => {
    if (page > 0) {
      setDirection(-1);
      setPage((p) => p - 1);
    }
  };

  return (
    <div className="w-full flex flex-col items-center gap-4 overflow-hidden">
      <div className="relative w-full h-96">
        <AnimatePresence initial={false} custom={direction}>
          <motion.div
            key={page}
            custom={direction}
            variants={{
              enter: (dir) => ({
                x: dir > 0 ? 300 : -300,
                opacity: 0
              }),
              center: {
                x: 0,
                opacity: 1
              },
              exit: (dir) => ({
                x: dir > 0 ? -300 : 300,
                opacity: 0
              })
            }}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ type: "tween", duration: 0.4 }}
            className="absolute top-0 left-0 w-full flex justify-center gap-4"
          >
            {currentImages.map((photo, index) => (
              <div key={index} className="w-full sm:w-48 md:w-60 lg:w-10/12">
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  width={800}
                  height={600}
                  className="w-full h-96 object-cover rounded-xl shadow-md"
                />
              </div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="flex gap-2 items-center">
        <button
          onClick={handlePrev}
          disabled={page === 0}
          className="p-2 text-chikPink200 disabled:opacity-30"
        >
          <ChevronLeftIcon className="w-6 h-6" />
        </button>
        <button
          onClick={handleNext}
          disabled={page === maxPage}
          className="p-2 text-chikPink200 disabled:opacity-30"
        >
          <ChevronRightIcon className="w-6 h-6" />
        </button>
      </div>
    </div>
  );
}
