import { useState } from "react";
import Landing from "./components/Landing/Landing";
import Services from "./components/Services/Services";
import Portfolio from "./components/Portfolio/Portfolio";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import "./App.css";

function App() {
  return (
    <div className="text-white bg-[#070707] min-h-[100vh] overflow-x-hidden">
      <Landing />
      <Services />
      <Portfolio />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
