import React from "react";
import "./Experience.css";
import {
  FaLaptopCode,
  FaGraduationCap,
  FaProjectDiagram,
} from "react-icons/fa";

const Experience = () => {
  return (
    <div className="exp-container">
      <div className="exp-text">
        <h1>
          Experience
          <br />& Education
        </h1>
      </div>
      <div className="exp-content">
        <div className="exp1">
          <div className="exp-date">2024-25</div>
          <div className="exp-work">
            <h3>
              {" "}
              <FaProjectDiagram
                style={{
                  fontSize: "1em",
                  marginRight: "5px",
                  color: "#4CAF50",
                }} // Green for projects
              />
              Projects Building
            </h3>
            <p>Practical Knowledge</p>
            <p>
              Focused on building industry-level projects to enhance coding
              expertise and apply real-world problem-solving
              skills.Strengthening technical proficiency and hands-on
              experience.
            </p>
          </div>
        </div>
        <div className="exp2">
          <div className="exp-date">2023-24</div>
          <div className="exp-work">
            <h3>
              {" "}
              <FaLaptopCode
                style={{
                  fontSize: "1em",
                  marginRight: "5px",
                  color: "#2196F3",
                }} // Blue for coding
              />
              Full Stack Developer
            </h3>
            <p>Youtube.com</p>
            <p>
              Embarked on a self-driven journey to master MERN stack
              development. Built and deployed full-stack applications, deepening
              my understanding of front-end and back-end technologies while
              refining problem-solving and debugging skills.
            </p>
          </div>
        </div>
        <div className="exp3">
          <div className="exp-date">2022-25</div>
          <div className="exp-work">
            <h3>
              <FaGraduationCap
                style={{
                  fontSize: "1em",
                  marginRight: "5px",
                  color: "#FF9800",
                }} // Orange for education
              />
              Bachelor's Degree
            </h3>
            <p>K.B. College, Bermo</p>
            <p>
              Binod Bihari Mahto Koylanchal University, Dhanbad Pursuing a
              Bachelor's degree in Computer Applications, strengthening my
              foundation in programming, data structures, and software
              development methodologies.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
