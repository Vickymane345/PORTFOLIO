"use client";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import image1 from "../images/Skills/abstract01.png";
import image2 from "../images/Skills/abstract02.png";
import image3 from "../images/Skills/abstract03.png";
import image4 from "../images/Skills/abstract04.png";
import image5 from "../images/Skills/abstract05.png";
import image6 from "../images/Skills/abstract06.png";
import image7 from "../images/Skills/abstract07.png";
import image8 from "../images/Skills/abstract08.png";
import image9 from "../images/Skills/abstract09.png";
import Image from "next/image";
import { Playfair_Display } from "next/font/google";

import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../Main/main";
import ArrowDown from "../ArrowDown/ArrowDown";
import { Zoom } from "react-awesome-reveal";
import Typewriter from "../Typewriter/Typewriter";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: "700",
  style: "normal",
});

interface CarouselPropsItems {
  src: StaticImport;
}

const words = [
  "Html5",
  "CSS3",
  "BOOTSTRAP",
  "JAVASCRIPT",
  "REACT",
  "TAILWINDCSS",
  "TYPESCRIPT",
  "NEXT.JS",
  "FLUTTER",
];
const images: CarouselPropsItems[] = [
  { src: image1 },
  { src: image2 },
  { src: image3 },
  { src: image4 },
  { src: image5 },
  { src: image6 },
  { src: image7 },
  { src: image8 },
  { src: image9 },
];

export default function Skills() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const nextSlide = () => {
    setCurrentIndex((nextIndex) => (nextIndex + 1) % images.length);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 3000); // 3000ms = 3 seconds
    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);
  const context = useContext(UserContext);

  if (!context) {
    throw new Error("UserContext must be used within a UserContext.Provider");
  }
  const { theme, handleSectionChange, visibleSection } = context;

  return (
    <div className={`${visibleSection === 2 ? "block" : "hidden"}`}>
      <div
        className={`${playfair.className} text-3xl lg:py-4 h-20 lg:h-0 font-extrabold block text-center underline`}
      >
        <Typewriter text="THE JOURNEY SO FAR...." delay={1000} speed={200} />
      </div>
      <Zoom delay={1500}>
        <section
          className={`md:grid md:grid-cols-2 sm:grid sm:grid-cols-2 block  items-center justify-evenly m-auto lg:py-20 pb-7 lg:pb-0 ${theme ? "text-[#d1e6f1]" : "text-black"}`}
        >
          <div className="relative max-w-xl md:order-2 sm:order-2 ">
            <div
              className={`relative overflow-hidden  ${theme ? "border-r-[#3a4a64]" : "border-r-[#E0E0E0]"}`}
            >
              <div
                className="flex transition-all duration-300 ease-in-out"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
              >
                {images.map((image, index) => (
                  <div className="flex-shrink-0  w-full " key={index}>
                    <Image
                      src={image.src}
                      alt={`Carousel image ${index}`}
                      className="w-80 m-auto "
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="text-center md:order-1 sm:order-1">
            <p className={`${playfair.className} text-5xl`}>
              {words[currentIndex]}
            </p>
          </div>
        </section>
      </Zoom>
      <div className=" " onClick={() => handleSectionChange(3)}>
        <ArrowDown />
      </div>
    </div>
  );
}
