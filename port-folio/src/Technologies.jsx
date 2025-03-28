import "./Technologies.css";
import React from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaDatabase,
  FaGitAlt,
  FaBootstrap,
} from "react-icons/fa";
import { SiRedux, SiSocketdotio, SiExpress, SiPostman } from "react-icons/si";

const Technologies = () => {
  // const techStack = [
  //   { name: "Node.js", img: "/icons/node.png" },
  //   { name: "JavaScript", img: "/icons/javascript.png" },
  //   { name: "React", img: "/icons/react.png" },
  //   { name: "HTML", img: "/icons/html.png" },
  //   { name: "CSS", img: "/icons/css.png" },
  //   { name: "Redux", img: "/icons/redux.png" },
  //   { name: "React Router", img: "/icons/react-router.png" },
  //   { name: "Bootstrap", img: "/icons/bootstrap.png" },
  //   { name: "MongoDB", img: "/icons/mongodb.png" },
  //   { name: "Express.js", img: "/icons/express.png" },
  //   { name: "Git", img: "/icons/git.png" },
  // ];

  return (
    <section className="technologies-container">
      <div className="title">
        <h1>
          Skills &<br />
          Proficiencies
        </h1>
        <hr />
      </div>
      <div className="skills-section">
        <div className="skills-left">
          <h5>TECHNICAL SKILLS</h5>
          <p>
            <FaHtml5 style={{ color: "#E34F26", fontSize: "1em" }} />
            HTML ,
            <FaCss3Alt style={{ color: "#1572B6", fontSize: "1em" }} />
            CSS ,
            <FaJs style={{ color: "#F7DF1E", fontSize: "1em" }} />
            Javascript
          </p>
          <div className="bg-div">
            <div className="progress-bar"></div>
          </div>
          <p>
            <FaReact style={{ color: "#61DAFB", fontSize: "1em" }} />
            React ,
            <FaNodeJs style={{ color: "#3C873A", fontSize: "1em" }} />
            Node-js ,
            <FaDatabase style={{ color: "#4DB33D", fontSize: "1em" }} />
            Mongo-DB
          </p>
          <div className="bg-div">
            <div className="progress-bar"></div>
          </div>
        </div>
        <div className="skills-right">
          <h5>TECHNICAL SKILLS</h5>
          <p>
            <SiRedux style={{ color: "#764ABC", fontSize: "1em" }} />
            Redux ,
            <SiSocketdotio style={{ color: "#010101", fontSize: "1em" }} />
            Socket.IO ,
            <SiExpress style={{ color: "#808080", fontSize: "1em" }} />
            Express-js
          </p>
          <div className="bg-div">
            <div className="progress-bar"></div>
          </div>
          <p>
            <FaGitAlt style={{ color: "#F05032", fontSize: "1em" }} />
            GIT ,
            <FaBootstrap style={{ color: "#7952B3", fontSize: "1em" }} />
            Bootstrap ,
            <SiPostman style={{ color: "#FF6C37", fontSize: "1em" }} />
            Postman
          </p>
          <div className="bg-div">
            <div className="progress-bar"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Technologies;
