import React from "react";
import { useState } from "react";
import { motion } from "framer-motion";
import { fadeIn } from "/src/components/Variants.js";

const Nav = ({ mode, changeMode }) => {
  const navs = [
    {
      text: "Home",
      link: "#Home",
    },
    {
      text: "Services",
      link: "#Services",
    },
    {
      text: "Projects",
      link: "#Portfolio",
    },
    {
      text: "About me",
      link: "#About",
    },
    {
      text: "Contact me",
      link: "#Contact",
    },
  ];

  const [menu, setMenu] = useState(false);
  const openMenu = () => {
    setMenu(!menu);
  };

  return (
    <nav
      className={`z-[99] flex justify-between px-[1.5rem] sm:px-[5rem] py-[1rem] absolute top-0 left-0 w-full`}>
      <h1 className="logo tracking-wider text-xl">
        Ferrazi<i className="fa-solid fa-circle text-[6px] text-myColor"></i>
      </h1>
      {!menu ? (
        <i
          className="fa-solid fa-bars text-xl lg:hidden"
          onClick={() => {
            openMenu();
          }}></i>
      ) : (
        <i
          className="fa-solid fa-xmark text-xl lg:hidden"
          onClick={() => {
            openMenu();
          }}></i>
      )}
      {menu && (
        <motion.ul
          variants={fadeIn("left", 0, .3)}
          initial="hidden"
          transition={{ duration: 0.5 }}
          whileInView={"show"}
          viewport={{ once: false, amount: 0 }}
          className="bg-myColor flex flex-col gap-2 rounded-lg p-4 px-6 text-black font-medium side-nav absolute right-[1rem] top-[100%]">
          {navs.map((nav) => {
            return (
              <li
                key={nav.text}
                onClick={() => {
                  openMenu();
                }}>
                <a href={nav.link}>{nav.text}</a>
              </li>
            );
          })}
          <div
            className="cursor-pointer"
            onClick={() => {
              changeMode();
            }}>
            {mode ? (
              <i class="fa-regular fa-moon text-black"></i>
            ) : (
              <i class="fa-solid fa-sun"></i>
            )}
          </div>
        </motion.ul>
      )}
      <div className="hidden items-center lg:flex gap-[3rem] text-sm">
        <ul className="flex gap-[3rem]">
          {navs.map((nav) => {
            return (
              <li key={nav.text}>
                <a href={nav.link}>{nav.text}</a>
              </li>
            );
          })}
        </ul>
        <button>
          <a
            href="../file/Resume-Oyesola-Dolapo.pdf"
            target="_blank"
            className={`text-black bg-myColor rounded px-4 py-2`}>
            View Resume <i class="fa-solid fa-download ml-2"></i>
          </a>
        </button>
        <div
          className="cursor-pointer"
          onClick={() => {
            changeMode();
          }}>
          {!mode ? (
            <i class="fa-solid fa-sun"></i>
          ) : (
            <i class="fa-regular fa-moon text-black"></i>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Nav;
