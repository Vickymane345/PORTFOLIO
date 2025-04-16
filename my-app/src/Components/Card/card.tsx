"use client";
import Image from "next/image";
import React, { useContext } from "react";
import Image1 from "../images/grad.jpg";
import Image2 from "../images/document.jpg";
import Image3 from "../images/certificate.webp";
import image4 from "../images/cv/cv.pdf";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import { Roboto_Slab } from "next/font/google";
import { UserContext } from "../Main/main";

const Roboto = Roboto_Slab({
  subsets: ["latin"],
  weight: "400",
  style: "normal",
});

interface CardProps {
  src: StaticImport;
  alt: string;

  title?: string;
  description?: string;
  hasList: boolean;
  listItems?: string[];
  hasButton?: boolean;
  buttonText?: StaticImport;
  link?: string;
}
const images: CardProps[] = [
  {
    src: Image1,
    alt: "image1",
    title: "The Journey: B.sc Computer Science",
    description:
      "My journey to earning a Bachelor of Science in Computer Science has been both challenging and rewarding. I’ve always been fascinated by technology, and pursuing this degree was the natural next step. From day one, I dove into the fundamentals of algorithms, data structures, and programming languages. While initially overwhelming, with time and practice, I gained confidence and skill in coding and problem-solving.",
    hasList: false,
    hasButton: false,
  },
  {
    src: Image3,
    alt: "image2",
    title: "My Achievement Throughout The Years: CERTIFICATE",
    listItems: [
      "B.sc Computer Science",
      "Udemy: The Complete 2024 Web development BootCamp ",
      "Hubspot, Digital Marketing",
      "Hubspot, Content Marketing",
      "Google Ads Certification",
      "Google Analytics Individual Qualification",
    ],
    hasList: true,
    hasButton: false,
  },
  {
    src: Image2,
    title: "Curriculum Vitae",

    alt: "image3",
    buttonText: Image2,
    hasList: false,
    hasButton: true,
    link: "https://drive.google.com/file/d/1s_o8ObKKjZba6wvxHrmxARKYVUNpDiiF/view",
  },
];

function card() {
  const {
    theme,
    handleSectionChange,
    openNav,
    handleTheme,
    handleOpenNav,
    visibleSection,
  } = useContext(UserContext);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 h-full gap-7 lg:px-32 lg:pt-44 lg:pb-20">
      {images.map((image, index) => (
        <div
          key={index}
          className={`px-5 lg:relative  ${theme ? "bg-[#1f2a38] text-[#e0e0e0] border-[#3a4a64]" : "bg-[#FFFFFF] border-[#E0E0E0] text-black "}  border-2 lg:py-9 shadow-lg `}
        >
          <div className="relative animate-bounce lg:bottom-60 lg:right-0 lg:absolute w-40 h-40 m-auto mt-4">
            <Image
              src={image.src}
              layout="fill"
              objectFit="cover"
              className=" rounded-full "
              alt=""
            />
            <h2 className="absolute inset-0 flex items-center justify-center text-center text-white font-bold bg-black opacity-75 rounded-full">
              {image.title}
            </h2>
          </div>

          <div className="py-4">
            <p className={`${Roboto.className} text-sm  text-start`}>
              {image.description}
            </p>
          </div>
          <div>
            {image.hasList && image.listItems && (
              <ul className="list-disc px-9 lg:px-4 py-3">
                {image.listItems.map((item, idx) => {
                  return (
                    <li className={`${Roboto.className} text-sm `} key={idx}>
                      {item}
                    </li>
                  );
                })}
              </ul>
            )}
          </div>

          <div className={` text-center m-auto `}>
            {image.hasButton && (
              <button title="n">
                <a href={image.link} target="_blank" rel="noreferrer">
                  <Image
                    src={image.buttonText}
                    className="w-44 lg:w-48 "
                    alt=""
                  />
                </a>
              </button>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}

export default card;
