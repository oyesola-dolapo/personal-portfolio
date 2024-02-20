import React from "react";

const Nav = () => {
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
      link: 'About'
    },
    {
      text: "Contact me",
      link: 'Contact'
    },
  ];
  return (
    <nav className="z-[1] flex justify-between px-[1.5rem] sm:px-[5rem] py-[1rem] absolute top-0 left-0 w-screen">
      <h1 className="logo tracking-wider text-xl">
        Ferrazi<i className="fa-solid fa-circle text-[6px] text-myColor"></i>
      </h1>
      <i class="fa-solid fa-bars text-xl lg:hidden"></i>
      <div className="hidden lg:flex gap-[3rem] text-sm">
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
          <a href="#" className="bg-myColor rounded px-4 py-2 text-black">
            Download Resume <i class="fa-solid fa-download text-black ml-2"></i>
          </a>
        </button>
      </div>
    </nav>
  );
};

export default Nav;
