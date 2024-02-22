import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { motion } from "framer-motion";
import { fadeIn } from "../Variants";

export default function Intro() {
  const [typeEffect] = useTypewriter({
    words: ["Software Developer", "Ui Designer"],
    loop: {},
    typeSpeed: 80,
    deleteSpeed: 50,
  });
  const socials = [
    {
      icon: <i class="fa-brands fa-x-twitter text-black"></i>,
      link: "https://twitter.com/ferraziii",
    },
    {
      icon: <i class="fa-brands fa-linkedin-in text-black"></i>,
      link: "https://www.linkedin.com/in/oyesola-dolapo-778642173/",
    },
    {
      icon: <i class="fa-brands fa-github text-black"></i>,
      link: "https://github.com/oyesola-dolapo",
    },
    {
      icon: <i class="fa-brands fa-behance text-black"></i>,
      link: "https://www.behance.net/dolapooyesola",
    },
  ];
  return (
    <section className="h-screen relative flex px-2">
      <img
        src="../../images/background.avif"
        alt=""
        className="absolute w-full h-full opacity-[.1]"
      />
      <motion.div
        variants={fadeIn("down", 0)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.3 }}
        className=" details mx-auto my-auto flex flex-col pt-24 z-[1]">
        <h1 className="text-xl sm:text-4xl tracking-wider text-center ">
          Hi, I am&nbsp;
          <span className="text-myColor font-medium">Oyesola Dolapo</span>
        </h1>
        <p
          variants={fadeIn("down", 0)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.3 }}
          className="text-sm sm:w-[45rem] sm:text-xl text-center tracking-wider mt-6 mb-12 lg:mb-6">
          Passionate &nbsp;
          <span className="text-myColor font-medium">{typeEffect}</span>
          &nbsp; crafting innovative digital experiences with a blend of elegant
          design and cutting-edge technology.
        </p>
        <button>
          <a
            href="../file/Resume-Oyesola-Dolapo.pdf"
            target="_blank"
            className="bg-myColor rounded px-4 py-2 text-black lg:hidden">
            View Resume <i class="fa-solid fa-download text-black ml-2"></i>
          </a>
        </button>
        <ul className="flex gap-[2rem] mx-auto mt-20">
          {socials.map((social) => {
            return (
              <li>
                <a
                  href={social.link}
                  target="_blank"
                  className="bg-[#CDCDCD] cursor-pointer px-[10px] py-[5px] sm:text-2xl rounded-full">
                  {social.icon}
                </a>
              </li>
            );
          })}
        </ul>
      </motion.div>
    </section>
  );
}
