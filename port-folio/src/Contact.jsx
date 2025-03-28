import React, { useState } from "react";
import {
  FaLinkedin,
  FaInstagram,
  FaTelegram,
  FaWhatsapp,
} from "react-icons/fa";
import "./Contact.css";
import contactPhoto from "./assets/contact-image.png";
import { FaPhone, FaEnvelope } from "react-icons/fa";

const Contact = () => {
  return (
    <div id="contact" className="contact-container">
      <div className="contact-img">
        <img src={contactPhoto} />
      </div>
      <div className="contact-text">
        <h1>
         Reach Out
        </h1>
        <div>
          <h3>Chanchal Kumar</h3>
          <p>
            <FaEnvelope style={{ color: "blue", marginRight: "1px" }} />{" "}
            chanchalbtps009@gmail.com
            <br />
            <FaPhone style={{ color: "green", marginRight: "1px" }} /> +91
            7633878169
          </p>
        </div>
        <div className="icons">
          <p>CONNECT WITH ME</p>
          <ul>
            <li>
              <a
                href="https://www.instagram.com/chanchal09998/"
                target="_blank"
              >
                <FaInstagram className="social-icon" />
              </a>
            </li>
            <li>
              <a href="https://t.me/chanchal09998" target="_blank">
                <FaTelegram className="social-icon" />
              </a>
            </li>
            <li>
              <a href="https://wa.me/917633878169" target="_blank">
                <FaWhatsapp className="social-icon" />
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/chanchal-kumar-590248216?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app "
                target="_blank"
              >
                <FaLinkedin className="social-icon" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Contact;
