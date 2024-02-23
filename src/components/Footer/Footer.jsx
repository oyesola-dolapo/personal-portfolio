import { motion } from "framer-motion";
import { fadeIn } from "../Variants";

export default function Footer({ mode, changeMode }) {
  const navs = [
    {
      text: "Home",
      link: "#Home",
    },
    {
      text: "My projects",
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

  const socials = [
    {
      icon: <i class="fa-brands fa-x-twitter"></i>,
      link: "https://twitter.com/ferraziii",
    },
    {
      icon: <i class="fa-brands fa-facebook-f"></i>,
      link: "https://web.facebook.com/Ferrazi.lee.5/",
    },
    {
      icon: <i class="fa-brands fa-instagram"></i>,
      link: "https://www.instagram.com/ferrazi.dev/",
    },
    {
      icon: <i class="fa-brands fa-whatsapp"></i>,
      link: "https://wa.me/2349067219868",
    },
  ];

  return (
    <footer
      className={`${
        !mode && "text-black"
      } flex flex-col lg:flex-row justify-between pb-4 px-8 lg:px-32 lg:py-8 overflow-hidden`}>
      <motion.h1
        variants={fadeIn("up", 0)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0 }}
        className="mb-4 logo tracking-wider text-xl">
        Ferrazi<i className="fa-solid fa-circle text-[6px] text-myColor"></i>
      </motion.h1>
      <div
        className={`${
          mode && "opacity-[.7]"
        } flex flex-col lg:flex-row text-sm  lg:mr-24`}>
        <motion.div
          variants={fadeIn("up", 0)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0 }}
          className="flex flex-col gap-[1rem] lg:gap-[1rem] lg:px-[4rem] lg:pb-[3rem]">
          <p>Software Developer</p>
          <p>Ui Designer</p>
        </motion.div>
        <motion.ul
          variants={fadeIn("up", 0)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0 }}
          className="flex flex-col py-[2rem] gap-[1rem] lg:py-0 lg:px-[4rem] lg:pb-[3rem] lg:border-x-2 lg:border-solid">
          {navs.map((nav) => {
            return (
              <li key={nav.text}>
                <a href={nav.link}>{nav.text}</a>
              </li>
            );
          })}
        </motion.ul>
        <div className="lg:px-[4rem]">
          <p className="mb-4">Social media handles</p>
          <ul className="flex gap-[1.5rem] ">
            {socials.map((social) => {
              return (
                <li key={social.link}>
                  <a href={social.link} target="_blank" className="text-lg">
                    {social.icon}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      
    </footer>
  );
}
