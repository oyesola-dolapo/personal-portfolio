import React from "react";

const Nav = () => {
  const navs = [
    {
      text: "Home",
    },
    {
      text: "Projects",
    },
    {
      text: "About me",
    },
    {
      text: "Contact me",
    },
  ];
  return (
    <nav className="flex justify-between px-[1.5rem] sm:px-[5rem] py-[1rem] absolute top-0 left-0 w-screen">
      <h1 className="logo tracking-wider text-xl">
        Ferrazi<i className="fa-solid fa-circle text-[6px] text-myColor"></i>
      </h1>
      <i class="fa-solid fa-bars text-xl md:hidden"></i>
      <div className="hidden md:flex gap-[3rem] text-sm">
        <ul className="flex gap-[3rem]">
          {navs.map((nav) => {
            return (
              <li key={nav.text}>
                <a href="#">{nav.text}</a>
              </li>
            );
          })}
        </ul>
        <button>
          <a href="#" className="bg-myColor rounded px-4 py-2 text-black">
            Download Resume <i class="fa-solid fa-download text-black ml-2"></i>
          </a>
        </button>
      </div>
    </nav>
  );
};

export default Nav;
