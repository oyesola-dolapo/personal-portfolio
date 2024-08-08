import {React} from "react";
import Nav from "../Nav/Nav";
import Intro from "../Intro/Intro";

const Landing = ({ mode, changeMode }) => {
  return (
    <section id="Home" className={`${!mode && "text-[#070707]"}`}>
      <Nav changeMode={changeMode} mode={mode} />
      <Intro />
    </section>
  );
};

export default Landing;
