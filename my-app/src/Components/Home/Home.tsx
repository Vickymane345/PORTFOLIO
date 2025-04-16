"use client";
import React, { useContext } from "react";
import Image from "next/image";
import picture from "../images/dev2.png";
import Typewriter from "../Typewriter/Typewriter";
import { Zoom } from "react-awesome-reveal";
import { Dancing_Script, Playfair_Display } from "next/font/google";
import { UserContext } from "../Main/main";
import ArrowDown from "../ArrowDown/ArrowDown";
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

function Home() {
  const context = useContext(UserContext);

  if (!context) {
    throw new Error("UserContext must be used within a UserContext.Provider");
  }
  const { theme, handleSectionChange, visibleSection } = context;

  return (
    <div
      className={` ${visibleSection === 0 ? "block" : "hidden"} lg:py-24 md:py-16 py-1 lg:px-14 xl:px-40  `}
    >
      <section>
        <div
          className={`${playfair.className} lg:hidden text-4xl h-16 md:h-20 font-extrabold block text-center `}
        >
          <Typewriter text="WELCOME" speed={200} delay={1000} />
        </div>
        <div className=" items-center block md:flex   md:gap-4 py-2 px-3">
          <div className="w-full px-3 lg:px-0       m-auto lg:order-2 md:order-2 ">
            <Zoom delay={1500}>
              <Image
                src={picture}
                className="w-80 md:w-full m-auto lg:w-full animate-bounce   md:m-auto "
                alt=""
              />
            </Zoom>
          </div>
          <div className=" md:px-2  md:order-1">
            <Zoom
              delay={1500}
              className={`${theme ? "border-r-2 rounded-r-full border-[#2a3d52]" : " border-r-2 rounded-r-full border-black"}`}
            >
              <h1
                className={`${DancingScript.className}  text-2xl text-center md:text-4xl  `}
              >
                Hello,
              </h1>
              <h1
                className={`${playfair.className} h-[5vh] md:h-[9vh] lg:h-[5vh] text-center md:text-4xl text-2xl`}
              >
                {" "}
                <Typewriter
                  text=" Web Developer & Mobile Dev "
                  speed={200}
                  delay={1000}
                />
              </h1>
            </Zoom>
            <Zoom delay={1500} className="py-5">
              <p
                className={`${playfair.className} text-pretty text-justify py-2  text-sm  md:text-lg   `}
              >
                I specialize in creating visually appealing, responsive, and
                user-friendly websites. I focus on delivering seamless
                experiences across all devices. Lets collaborate and build
                something amazing!
              </p>
            </Zoom>
          </div>
        </div>
        <div className="" onClick={() => handleSectionChange(1)}>
          <ArrowDown />
        </div>
      </section>
    </div>
  );
}

export default Home;
