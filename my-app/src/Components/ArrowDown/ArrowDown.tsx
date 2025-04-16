'use client'
import React, { useContext } from "react";
import { Fade } from "react-awesome-reveal";
import { FaArrowDown } from "react-icons/fa";
import { UserContext } from "../Main/main";
import Typewriter from "../Typewriter/Typewriter";

function ArrowDown(){
   const context = useContext(UserContext);
  
    if (!context) {
      throw new Error("UserContext must be used within a UserContext.Provider");
    }
  const {
    theme
  } = context;

  return (
    <div>
      <Fade triggerOnce cascade delay={800} duration={4000}>
        <div className="text-center pt-2 gap-5 ">
          <div className="text-center relative h-[4vh] ">
            <Typewriter text="WANT TO KNOW MORE?" delay={1000} speed={200} />
          </div>

          <button
            title="arrow"
            className={`animate-bounce px-4 cursor-pointer rounded-full border-2 py-4 ${theme ? "bg-[#0a74da] border-[#2a3d52] hover:border-[#3a8fbf] " : "bg-[#007bff] hover:bg-[#0056b3]"}`}
          >
            <FaArrowDown className="" />
          </button>
        </div>
      </Fade>
    </div>
  );
}

export default ArrowDown;
