import { useState } from "react";
import Landing from "./components/Landing/Landing";
import Services from "./components/Services/Services";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="bg-[#070707] min-h-[100vh] overflow-x-hidden">
      <Landing />
      <Services />
    </div>
  );
}

export default App;
