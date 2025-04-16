// import React, { useContext } from 'react'
// import { Fade, Zoom } from 'react-awesome-reveal'
// import Typewriter from '../Typewriter/Typewriter'
// import { FaArrowDown } from 'react-icons/fa'
// import Card from '../Card/card'
// import { UserContext } from '../Main/main'
// import ArrowDown from '../ArrowDown/ArrowDown'

// function About() {
//         const {theme, handleSectionChange,openNav, handleTheme, handleOpenNav, visibleSection}   = useContext(UserContext);

//   return (
//     <div>
//        <section className={`${visibleSection === 1 ? 'block' : 'hidden'} lg:h-[90.6vh] `}>
//             <Zoom  className='px-8 '  cascade  >
//                 <div className=''>
//             <Card/>
//             </div>
//             </Zoom>

//                       <p onClick={() => handleSectionChange(2)}><ArrowDown/></p>

//             </section>
//     </div>
//   )
// }

// export default About

import React, { useContext, useState } from "react";
import Image1 from "../images/grad.png";
import Image2 from "../images/5052521.jpg";
import Image from "next/image";
import { Playfair_Display, Dancing_Script } from "next/font/google";
import { UserContext } from "../Main/main";
import ArrowDown from "../ArrowDown/ArrowDown";
import { Zoom } from "react-awesome-reveal";
const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: "700",
  style: "normal",
});
const DancingScript = Dancing_Script({
  subsets: ["latin-ext"],
  weight: "700",
  style: "normal",
});

function About() {
  const context = useContext(UserContext);

  if (!context) {
    throw new Error("UserContext must be used within a UserContext.Provider");
  }
  const { theme, handleSectionChange, visibleSection } = context;
  const [visibleSelection, setVisibleSelection] = useState<number>(0); // By default, show the first section

  const handleSelectionChange = (sectionNumber: number) => {
    setVisibleSelection(sectionNumber);
  };

  return (
    <div
      className={`lg:py-5 py-3 ${visibleSection === 1 ? "block" : "hidden"} `}
    >
      <Zoom>
        <div
          className={` ${visibleSelection === 0 ? "block" : "hidden"} h-56 text-center leading-8 space-y-3  sm:px-4 `}
        >
          <h1 className={`${playfair.className} font-bold text-3xl`}>
            The <span className={`${DancingScript.className}`}>Stories</span>{" "}
            Behind the Art{" "}
          </h1>
          <p
            className={`${playfair.className} sm:text-sm text-xs sm:text-center lg:text-lg text-start px-5 sm:px-0`}
          >
            My journey to earning a Bachelor of Science in Computer Science has
            been both challenging and rewarding.
            <br /> I’ve always been fascinated by technology, and pursuing this
            degree was the natural next step.
            <br /> From day one, I dove into the fundamentals of algorithms,
            data structures, and programming languages.
            <br /> While initially overwhelming, with time and practice,
            <br /> I gained confidence and skill in coding and problem-solving.
          </p>
          <button
            title="explore"
            className={`${playfair.className} cursor-pointer ${theme ? "bg-[#0a74da] border-[#2a3d52] hover:border-[#3a8fbf] " : "bg-[#007bff] border-blue-700 border-2 hover:bg-blue-700 hover:text-white"}  shadow-2xl shadow-gray-700 px-8 py-2 rounded-4xl `}
          >
            <a href="https://drive.google.com/file/d/1s_o8ObKKjZba6wvxHrmxARKYVUNpDiiF/view">
              Explore
            </a>
          </button>
        </div>
        <div className={`${visibleSelection === 1 ? "block  " : "hidden"} `}>
          <div className={`  sm:space-y-3 space-y-4 sm:text-center `}>
            <h1
              className={`${playfair.className} font-bold sm:text-3xl text-2xl px-3 sm:px-0 text-center`}
            >
              Achievement Throughout The{" "}
              <span className={`${DancingScript.className}`}>Years</span>
            </h1>
            <div className="lg:px-24 px-3 sm:px-7 sm:space-y-0 lg:space-y-3">
              <ul
                className={`${playfair.className} text-xs sm:text-lg grid lg:grid-cols-3 grid-cols-2 list-none space-y-2 sm:space-y-4 lg:space-y-4 `}
              >
                <li className="lg:text-end text-center ">
                  B.sc Computer Science
                </li>
                <li>Udemy: The Complete 2024 Web development BootCamp</li>
                <li className="lg:text-start col-start-1 col-end-4 lg:col-start-auto lg:col-end-auto  text-center">
                  Hubspot, Digital Marketing
                </li>
              </ul>
              <ul
                className={`${playfair.className}   sm:text-lg text-xs  grid lg:grid-cols-3 grid-cols-2 space-y-2 sm:space-y-2 py-1 sm:py-0  `}
              >
                <li className="lg:text-end text-center">
                  Hubspot, Content Marketing
                </li>
                <li>Google Analytics Individual Qualification</li>

                <li className="lg:text-start col-start-1 col-end-4 text-center lg:col-start-auto lg:col-end-auto">
                  Google Ads Certification
                </li>
              </ul>
            </div>
            <div className="text-center">
              <button
                title="explore"
                className={`${playfair.className} cursor-pointer ${theme ? "bg-[#0a74da] border-[#2a3d52] hover:border-[#3a8fbf] " : "bg-[#007bff] border-blue-700 border-2 hover:bg-blue-700 hover:text-white"}  shadow-2xl shadow-gray-700 px-8 py-3  sm:py-3 rounded-4xl `}
              >
                <a href="https://drive.google.com/file/d/1s_o8ObKKjZba6wvxHrmxARKYVUNpDiiF/view">
                  Explore
                </a>
              </button>
            </div>
          </div>
        </div>
      </Zoom>

      <Zoom>
        <div className="flex w-full justify-center lg:pt-12 sm:py-5 lg:py-9 pt-16 ">
          <div className="group">
            <div
              className="transform overflow-hidden  bg-white relative rotate-25 cursor-pointer    lg:w-52 lg:h-52 w-36 sm:w-40   rounded-4xl shadow-2xl shadow-black   inline-block border-2 border-white p-1 "
              onClick={() => handleSelectionChange(0)}
            >
              <Image
                src={Image1}
                className="w-full   transition-transform duration-300 ease-in-out transform group-hover:scale-110 object-cover"
                alt=""
              />
              <div className="absolute  inset-0 bg-black opacity-0 group-hover:opacity-90 flex items-center justify-center transition-opacity duration-500">
                <h2 className="text-white text-xl transform rotate-335  font-semibold">
                  The Journey: B.sc Computer Science
                </h2>
              </div>
            </div>
          </div>
          <div className="group">
            <div
              className="transform overflow-hidden  bg-white relative rotate-25 cursor-pointer   lg:w-52 lg:h-52 w-36 sm:w-40 rounded-4xl shadow-2xl shadow-black   inline-block border-2 border-white p-1"
              onClick={() => handleSelectionChange(1)}
            >
              <Image
                src={Image2}
                className=" w-full  transition-transform duration-300 ease-in-out transform group-hover:scale-110 object-cover"
                alt=""
              />
              <div className="absolute  inset-0 bg-black opacity-0 group-hover:opacity-90 flex items-center justify-center transition-opacity duration-500">
                <h2 className="text-white text-xl transform rotate-335  font-semibold">
                  CERTIFICATES
                </h2>
              </div>
            </div>
          </div>
        </div>
      </Zoom>

      <p onClick={() => handleSectionChange(2)}>
        <ArrowDown />
      </p>
    </div>
  );
}

export default About;
