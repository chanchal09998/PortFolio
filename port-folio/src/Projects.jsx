import React from "react";
import "./Projects.css";
// import chanchalPhoto from "./assets/chanchal.jpg";
import eCommerce from "./assets/e-commerce-image.png";
import chatSphere from "./assets/chta-sphere-image.png";
import lookUP from "./assets/socila app(lookUP).png";

const Projects = () => {
  return (
    <div className="project-container">
      <h1>Sample Work</h1>
      <div className="projects">
        <div className="project-1">
          <div className="project-img">
            <img src={eCommerce} alt="" />
          </div>
          <h3>
            {" "}
            <span style={{ fontSize: "1em", color: "#007bff" }}>🛒</span>{" "}
            PageTurner (e-commerce)
          </h3>
          <p>
            A full-featured book selling application built with the MERN stack.
            It includes: <br /> User authentication <br /> Add-to-cart
            functionality <br />
            Secure payment integration <br /> Seamless checkout process <br />
            Admin panel for efficient store management
          </p>
          <div className="btns">
            <a
              href="https://page-turner-e-commerce-app.vercel.app/"
              target="_blank"
            >
              <button className="explore-btn">Explore</button>
            </a>
            <a
              href="https://github.com/chanchal09998/PageTurner-E-commerce-App-.git"
              target="_blank"
            >
              <button className="github-btn">Github</button>
            </a>
          </div>
        </div>
        <div className="project-2">
          <div className="project-img">
            <img src={chatSphere} alt="" />
          </div>
          <h3>
            {" "}
            <span style={{ fontSize: "1em", color: "#28a745" }}>💬</span>{" "}
            Chat-Sphere (chat-App)
          </h3>
          <p>
            A modern and responsive chat application developed using the MERN
            stack. Key features include: <br /> Private and group chat support
            <br />
            Light and dark theme modes <br /> Real-time messaging <br />
            Seamless UI
            <br /> Fully responsive design for all devices
          </p>
          <div className="btns">
            <a href="https://chat-sphere-indol.vercel.app/" target="_blank">
              <button className="explore-btn">Explore</button>
            </a>
            <a
              href="https://github.com/chanchal09998/Chat-Sphere.git"
              target="_blank"
            >
              <button className="github-btn">Github</button>
            </a>
          </div>
        </div>
        <div className="project-3">
          <div className="project-img">
            <img src={lookUP} alt="lookUP App Screenshot" />
          </div>
          <h3>
            <span style={{ fontSize: "1em", color: "#ff6347" }}>🌐</span> lookUP
            (Social App)
          </h3>
          <p>
            A feature-rich social media platform built using the MERN stack.{" "}
            <br />
            Create and manage personal profiles <br />
            Post updates, images, and interact with others' posts <br />
            Follow/unfollow users <br />
            Real-time notifications and messaging <br />
            Responsive UI <br />
          </p>
          <div className="btns">
            <a href="https://look-up-ten.vercel.app/" target="_blank">
              <button className="explore-btn">Explore</button>
            </a>
            <a
              href="https://github.com/chanchal09998/lookUP.git"
              target="_blank"
            >
              <button className="github-btn">Github</button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
