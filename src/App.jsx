import { useState } from "react";
import Landing from "./components/Landing/Landing";
import Services from "./components/Services/Services";
import Portfolio from "./components/Portfolio/Portfolio";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import "./App.css";

function App() {
  const [mode, setMode] = useState(true);
  const changeMode = () => {
    setMode(!mode);
    console.log(mode);
  };

  return (
    <div
      className={`${
        !mode ? "bg-white" : "bg-[#070707]"
      } text-white overflow-x-hidden`}>
      <Landing mode={mode} changeMode={changeMode}/>
      <Services mode={mode} />
      <Portfolio mode={mode} />
      <About mode={mode} />
      <Contact mode={mode} />
      <Footer mode={mode} changeMode={changeMode} />
    </div>
  );
}

export default App;
