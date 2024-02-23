import Projects from "./Projects/Projects";
import { motion } from "framer-motion";
import { fadeIn } from "../Variants";

export default function Portfolio({ mode }) {
  return (
    <section id="Portfolio" className={`${!mode && "text-black"} p-8`}>
      <p className="text-center text-sm opacity-[.5]">PORTFOLIO</p>
      <h1 className="text-center">
        Featured <span className="text-myColor">Projects</span>
      </h1>
      <motion.div>
        <Projects mode={mode} />
        <div className={` flex gap-4 justify-center`}>
          <a
            href="https://www.behance.net/dolapooyesola"
            target="_blank"
            className="view relative">
            View Behance
          </a>
          <a
            href="https://github.com/oyesola-dolapo"
            target="_blank"
            className="view relative">
            View Github
          </a>
        </div>
      </motion.div>
    </section>
  );
}
