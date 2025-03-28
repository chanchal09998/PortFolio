import React from "react";
import "./Hero.css";
import chanchalPhoto from "./assets/chanchal2.png";

const Hero = () => {
  return (
    <div className="hero-container">
      <div className="image-div">
        <img src={chanchalPhoto} title="my photo" />
      </div>
      <div className="name-div">
        <h1>
       
          Chanchal Kumar
        </h1>
        <hr className="hr-tag" />
        <h4>Mern Stack Developer</h4>
        <a href="#contact">
          <button>Reach Out</button>
        </a>
      </div>
    </div>
  );
};

export default Hero;
