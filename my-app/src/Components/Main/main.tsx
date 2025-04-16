"use client";
import Navbar from "@/Components/Navbar/Navbar";
import Skills from "@/Components/SKills/Skills";
import React, { useState, createContext } from "react";
import Home from "../Home/Home";
import About from "../About/About";
import Projects from "../Projects/Projects";
import ContactForm from "../Contacts/Contacts";

type props = {
  theme: boolean;
  openNav: boolean;
  visibleSection: number;
  handleSectionChange: (sectionNumber: number) => void;
  handleOpenNav: () => void;
  handleTheme: () => void;
};
export const UserContext = createContext<props | undefined>(undefined);

function Main() {
  const [visibleSection, setVisibleSection] = useState<number>(0); // By default, show the first section

  const handleSectionChange = (sectionNumber: number) => {
    setVisibleSection(sectionNumber);
  };
  const [openNav, setOpenNav] = useState(false);
  const handleOpenNav = () => {
    return setOpenNav(!openNav);
  };

  const [theme, setTheme] = useState<boolean>(false);
  const handleTheme = () => {
    return setTheme(!theme);
  };

  return (
    <div
      className={`  ${theme ? "bg-[#0d1b2a] " : "bg-[#fafafa]"} h-[100vh] ${theme ? "text-[#d1e6f1]" : "text-[#333333]"} `}
    >
      <UserContext.Provider
        value={{
          theme,
          openNav,
          handleTheme,
          handleOpenNav,
          handleSectionChange,
          visibleSection,
        }}
      >
        <Navbar />
        <Home />
        <About />
        <Skills />
        <Projects />
        <ContactForm />
      </UserContext.Provider>
    </div>
  );
}

export default Main;
