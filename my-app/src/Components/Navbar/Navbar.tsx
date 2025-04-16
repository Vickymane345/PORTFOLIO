"use client";
import React, { useContext } from "react";
import { IoMdClose } from "react-icons/io";
import { CiLight } from "react-icons/ci";
import { MdMenu } from "react-icons/md";
import { IoHome } from "react-icons/io5";
import { FaCommentDots } from "react-icons/fa";
import { GiSkills } from "react-icons/gi";
import { MdContactPage } from "react-icons/md";
import { FaDiagramProject } from "react-icons/fa6";
import { UserContext } from "@/Components/Main/main";
import { Playfair_Display } from "next/font/google";
const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: "700",
  style: "normal",
});

function Navbar() {
  const context = useContext(UserContext);

  if (!context) {
    throw new Error("UserContext must be used within a UserContext.Provider");
  }
  const {
    theme,
    handleSectionChange,
    openNav,
    handleTheme,
    handleOpenNav,
    visibleSection,
  } = context;

  return (
    <div className={` ${theme ? "bg-[#0d1b2a] " : "md:bg-[#fafafa] "} `}>
      <nav
        className={`flex md:items-center  w-full   md:w-full md:h-full   md:px-14 md:py-6 ${theme ? "text-[#d1e6f1]" : "text-black  "}`}
      >
        <ul className="hidden md:flex m-auto px-4 space-x-16  ">
          <li
            onClick={() => handleSectionChange(0)}
            className={`${visibleSection === 0 ? "border-b-2 border-[#2a3d52]" : "border-b-0 "}`}
          >
            Home
          </li>
          <li
            id="#about"
            onClick={() => handleSectionChange(1)}
            className={`${visibleSection === 1 ? "border-b-2 border-[#2a3d52]" : "border-b-0 "}`}
          >
            About
          </li>
          <li
            onClick={() => handleSectionChange(2)}
            className={`${visibleSection === 2 ? "border-b-2 border-[#2a3d52]" : "border-b-0 "}`}
          >
            Skills
          </li>
          <li
            onClick={() => handleSectionChange(3)}
            className={`${visibleSection === 3 ? "border-b-2 border-[#2a3d52]" : "border-b-0 "}`}
          >
            Projects
          </li>
          <li
            onClick={() => handleSectionChange(4)}
            className={`${visibleSection === 4 ? "border-b-2 border-[#2a3d52]" : "border-b-0 "}`}
          >
            Contact
          </li>
        </ul>
        {openNav && (
          <ul
            className={`${playfair.className} transition-all duration-300 ease-in-out items-center text-center z-50 px-5 pt-5 md:hidden border-r-2 w-full grid grid-cols-3 border-[#2a3d52] shadow-2xl absolute  space-y-7 ${theme ? "bg-[#0d1b2a] text-[#d1e6f1]" : "md:bg-white bg-gray-200"}`}
          >
            <li onClick={() => handleSectionChange(0)} className=" m-auto">
              <div
                className={`${visibleSection === 0 ? "border-2 bg-white border-white shadow-2xl" : "border-0 "} px-2 py-2`}
              >
                <IoHome size={50} />
              </div>
              <h1 className="items-center">HOME</h1>
            </li>
            <li
              id="#about"
              onClick={() => handleSectionChange(1)}
              className=" m-auto"
            >
              <div
                className={`${visibleSection === 1 ? "border-2 bg-white border-white shadow-2xl" : "border-0  "} px-2 py-2`}
              >
                <FaCommentDots size={50} />
              </div>
              <h1 className="items-center">ABOUT</h1>
            </li>
            <li onClick={() => handleSectionChange(2)} className=" m-auto">
              <div
                className={`${visibleSection === 2 ? "border-2 bg-white border-white shadow-2xl" : "border-0 "} px-2 py-2`}
              >
                <GiSkills size={50} />
              </div>
              <h1 className="items-center">SKILLS</h1>
            </li>
            <li onClick={() => handleSectionChange(3)} className=" m-auto">
              <div
                className={`${visibleSection === 3 ? "border-2 bg-white border-white shadow-2xl" : "border-0 "} px-2 py-2`}
              >
                <FaDiagramProject size={50} />
              </div>
              <h1 className="items-center">PROJECTS</h1>
            </li>
            <li onClick={() => handleSectionChange(4)} className=" m-auto">
              <div
                className={`${visibleSection === 4 ? "border-2 bg-white border-white shadow-2xl" : "border-0  "} px-2 py-2`}
              >
                <MdContactPage size={50} />
              </div>
              <h1 className="items-center">CONTACT</h1>
            </li>
            <li>
              <button
                className=" md:hidden"
                title="handtheme"
                onClick={handleTheme}
              >
                <CiLight size={50} />
              </button>
            </li>
            <li className={`${openNav ? "block" : "hidden"} py-5 `}>
              <button title="closeNav" onClick={handleOpenNav}>
                <IoMdClose size={30} />
              </button>
            </li>
          </ul>
        )}

        <div className={` py-4 px-4 md:hidden flex`}>
          <button title="openNav" className="" onClick={handleOpenNav}>
            <MdMenu size={30} />
          </button>
        </div>
        <div onClick={handleTheme}>
          <button title="handleTheme" className="hidden md:flex">
            <CiLight />
          </button>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
