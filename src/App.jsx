import { useState } from "react";
import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";

import "./App.css";
import Skills from "./components/Skills";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <Home />
      <About />
      <Projects />
      <Skills />
    </>
  );
}

export default App;
