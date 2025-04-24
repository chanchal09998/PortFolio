import React from "react";
import "./App.css";
import SplashCursor from "./SplashCursor";
import About from "./About";
import Hero from "./Hero";
import Experience from "./Experience";
import Technologies from "./Technologies";
import Projects from "./Projects";
import Review from "./Review";
import Contact from "./Contact";

function App() {
  return (
    <div className="app-container">
      {/* <SplashCursor /> */}
      <Hero />
      <About />
      <Experience />
      <Technologies />
      <Projects />
      <Review />
      <Contact />
    </div>
  );
}

export default App;
