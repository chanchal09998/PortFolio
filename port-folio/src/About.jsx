import React from "react";
// import chanchalPhoto from "./assets/chanchal-study.png";
import chanchal from "./assets/portfolio-image.png";
import "./About.css";
import { motion } from "framer-motion";
import resume from "./assets/CHANCHAL-KUMAR-Resume.pdf";
import { FaDownload } from "react-icons/fa";

const About = () => {
  return (
    <section className="about-container">
      <div className="about-content">
        <h1>
          <span>ℹ️</span>
          About Me
        </h1>
        <p>
          <a href={resume} download={resume}>
            <button className="my-resume">
              RESUME <FaDownload style={{ marginLeft: "5px" }} />
            </button>
          </a>
          <br />I am a MERN Stack Developer with a strong passion for learning
          and building web applications. I have gained my skills through
          self-learning, exploring various resources like YouTube, and working
          on hands-on projects. Currently, I am looking for internship and job
          opportunities to gain real-world experience, improve my skills, and
          grow in my career. I am eager to learn, collaborate, and contribute to
          meaningful projects.
        </p>
      </div>
      <div className="about-img">
        <img src={chanchal} />
      </div>
    </section>
  );
};

export default About;
