import React from "react";
import "./Hero.css";
import chanchalPhoto from "./assets/chanchal2.png";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div className="hero-container">
      <div className="image-div">
        <img src={chanchalPhoto} title="my photo" />
      </div>
      <div className="name-div">
        <h1>
          <motion.span
            animate={{ scale: [1, 1.2, 1] }} // Scaling animation
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            style={{ display: "inline-block" }} // Ensures smooth scaling
          >
            🧑‍💻
          </motion.span>
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
