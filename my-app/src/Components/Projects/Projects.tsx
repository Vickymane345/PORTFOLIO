"use client";
import { Playfair_Display } from "next/font/google";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import { useState, useEffect, useContext } from "react";
import ArrowDown from "../ArrowDown/ArrowDown";
import Image from "next/image";
import { UserContext } from "../Main/main";
import image1 from "../images/Projects/gym.png";
import image2 from "../images/Projects/SchoolImage.png";
import image3 from "../images/Projects/Dashboard 1.png";
import image4 from "../images/Projects/Dashboard2.png";
import image5 from "../images/Projects/ecommerce.jpg";
import { Zoom } from "react-awesome-reveal";
import Typewriter from "../Typewriter/Typewriter";

interface CarouselPropsItems {
  src: StaticImport;
}

const words = [
  "GYM LANDING PAGE",
  "SCHOOL LANDING PAGE",
  "DASHBOARD",
  "DASHBOARD 2",
  "ECOMMERCE",
];
const Link = [
  "https://gym-tau-jet.vercel.app/",
  "https://school-taupe-ten.vercel.app/",
  "https://my-app-henna-five.vercel.app/",
  "https://dashboard-zeta-eight-47.vercel.app/",
  "https://ecommerce-chi-green.vercel.app/",
];
const images: CarouselPropsItems[] = [
  { src: image1 },
  { src: image2 },
  { src: image4 },
  { src: image3 },
  { src: image5 },
];

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: "700",
  style: "normal",
});
// export default function Projects() {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const nextSlide = () => {
//     setCurrentIndex((nextIndex) => (nextIndex + 1) % images.length);
//   };

//   useEffect(() => {
//     const interval = setInterval(nextSlide, 3000); // 3000ms = 3 seconds
//     return () => clearInterval(interval); // Cleanup interval on component unmount
//   }, []);
//   const context = useContext(UserContext);

// if (!context) {
//   throw new Error("UserContext must be used within a UserContext.Provider");
// }
//   const {
//     theme,
//     handleSectionChange,
//     visibleSection,
//   } = context;

//   return (
//     <div className={`${visibleSection === 3 ? "block" : "hidden"}`}>
//       <div
//         className={`${playfair.className} text-3xl h-20 lg:h-0 lg:py-4 font-extrabold block text-center underline`}
//       >
//         <Typewriter text="DOINGS..." delay={1000} speed={200} />
//       </div>
//       <Zoom>
//         <section
//           className={`md:grid md:grid-cols-2 sm:grid sm:grid-cols-2 block items-center justify-evenly m-auto md:px-5 lg:px-0 lg:py-20 pb-7 lg:pb-0   ${theme ? "text-[#d1e6f1]" : "text-black "}`}
//         >
//           <div className="relative max-w-xl md:order-2   ">
//             <div
//               className={`relative overflow-hidden  ${theme ? "border-r-[#3a4a64]" : "border-r-[#E0E0E0]"}`}
//             >
//               <div
//                 className="flex transition-all items-center justify-center m-auto text-center duration-300 ease-in-out"
//                 style={{ transform: `translateX(-${currentIndex * 100}%)` }}
//               >
//                 {images.map((image, index) => (
//                   <div className="flex-shrink-0  w-full  " key={index}>
//                     <Image
//                       src={image.src}
//                       alt={`Carousel image ${index}`}
//                       className="w-full sm:w-80 md:w-full  m-auto "
//                     />
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>
//           <div className="text-center  md:order-1  ">
//             <p
//               className={`${playfair.className} text-5xl md:text-4xl sm:text-3xl`}
//             >
//               {words[currentIndex]}
//             </p>
//             <div className="pt-6">
//               <button
//                 title="visit"
//                 className={` px-6  l border-2 py-4 rounded-4xl cursor-pointer ${theme ? "bg-[#0a74da] hover:text-white hover:bg-blue-800 " : "bg-[#007bff] border-black shadow-2xl shadow-gray-600 text-white hover:bg-blue-900 hover:text-white "}`}
//                 type="submit"
//               >
//                 <a
//                   href={Link[currentIndex]}
//                   target="_blank"
//                   rel="noreferrer"
//                   className={`text-lg  `}
//                 >
//                   Visit Site
//                 </a>
//               </button>
//             </div>
//           </div>
//         </section>
//       </Zoom>
//       <div className="pt-10  " onClick={() => handleSectionChange(4)}>
//         <ArrowDown />
//       </div>
//     </div>
//   );
// }
export default function Projects() {
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
    <div className={`${visibleSection === 3 ? "block" : "hidden"}`}>
      <div
        className={`${playfair.className} text-3xl lg:py-4 h-20 lg:h-0 font-extrabold block text-center underline`}
      >
        <Typewriter text="THE JOURNEY SO FAR...." delay={1000} speed={200} />
      </div>
      <Zoom delay={1500}>
        <section
          className={`md:grid md:grid-cols-2 sm:grid sm:grid-cols-2 block items-center justify-evenly m-auto md:px-5 lg:px-0 lg:py-20 pb-7 lg:pb-0   ${theme ? "text-[#d1e6f1]" : "text-black "}`}
        >
          <div className="relative max-w-xl md:order-2 sm:order-2 ">
            <div
              className={`relative overflow-hidden    ${theme ? "border-r-[#3a4a64]" : "border-r-[#E0E0E0]"}`}
            >
              <div
                className="flex transition-all duration-300 ease-in-out "
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
              >
                {images.map((image, index) => (
                  <div className="flex-shrink-0 px-4 md:px-0 w-full " key={index}>
                    <Image
                      src={image.src}
                      alt={`Carousel image ${index}`}
                      className="w-full sm:w-80 md:w-full  m-auto  "
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="text-center md:order-1 sm:order-1">
            <p
              className={`${playfair.className} text-5xl md:text-4xl sm:text-3xl`}
            >
              {words[currentIndex]}
            </p>
            <div className="pt-6">
              <button
                title="visit"
                className={` px-6  l border-2 py-4 rounded-4xl cursor-pointer ${theme ? "bg-[#0a74da] hover:text-white hover:bg-blue-800 " : "bg-[#007bff] border-black shadow-2xl shadow-gray-600 text-white hover:bg-blue-900 hover:text-white "}`}
                type="submit"
              >
                <a
                  href={Link[currentIndex]}
                  target="_blank"
                  rel="noreferrer"
                  className={`text-lg  `}
                >
                  Visit Site
                </a>
              </button>
            </div>
          </div>
        </section>
      </Zoom>
      <div className=" " onClick={() => handleSectionChange(4)}>
        <ArrowDown />
      </div>
    </div>
  );
}
