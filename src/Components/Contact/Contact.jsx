"use client";
import "./contact.css";
import Image from "next/image";
import linkedin from "../../../public/contact-icons/linkedin-icon.png";
import github from "../../../public/contact-icons/github-icon.png";
import whatsapp from "../../../public/contact-icons/whatsapp-icon.png";
import Modal from "./Modal/Modal";
import { useState } from "react";

const Contact = () => {
  const [modalState, setModalState] = useState({
    isOpen: false,
    title: "",
    backgroundColor: "",
  });

  const openModal = (title, color, message) => {
    setModalState({
      isOpen: true,
      title,
      backgroundColor: color,
      message,
    });
  };

  const closeModal = () => {
    setModalState({
      isOpen: false,
      title: "",
      backgroundColor: "",
      message: "",
    });
  };
  const loaderProp = ({ src }) => {
    return src;
  };
  return (
    <div className="container contact">
      <h2>Get in Touch</h2>
      <div className="contact__buttons">
        <button
          className="contact__button"
          onClick={() =>
            openModal(
              "Freelance Work",
              "#9e6d40",
              "I'd like to hire you for a freelance job! here are the details: "
            )
          }
        >
          <h3>Freelance Work</h3>
        </button>
        <button
          className="contact__button"
          onClick={() =>
            openModal(
              "Job Offering",
              "#2b2e2a",
              "I have a job opportunity for you... "
            )
          }
        >
          <h3>Job Offering</h3>
        </button>
        <button
          className="contact__button"
          onClick={() =>
            openModal(
              "Collaboration",
              "#385b63",
              "Lets collaborate and work together! I'm a ..."
            )
          }
        >
          <h3>Collaboration</h3>
        </button>
      </div>
      <div className="contact-links">
        <button
          className="contact-links__button"
          onClick={() =>
            window.open("https://www.linkedin.com/in/shay-ben-ishay-46a18418b")
          }
        >
          <p>LinkedIn</p>
          <Image
            src={linkedin}
            height={37}
            width={37}
            alt="LinkedIn"
            overrideSrc="/override.jpg"
          />
        </button>
        <button
          className="contact-links__button"
          onClick={() => window.open("https://github.com/ShayBenIshay")}
        >
          <p>GitHub</p>
          <Image
            src={github}
            width={37}
            height={37}
            alt="GitHub"
            loader={({ src }) => src}
            unoptimized
          />
        </button>
        <button
          className="contact-links__button"
          onClick={() => window.open("https://wa.me/972547573914")}
        >
          <p>WhatsApp</p>
          <Image
            src={whatsapp}
            width={37}
            height={37}
            alt="WhatsApp"
            loader={({ src }) => src}
            unoptimized
          />
        </button>
      </div>
      <div className="contact-email">
        <svg
          enableBackground="new 0 0 100 100"
          height="26px"
          width="26px"
          version="1.1"
          viewBox="0 0 100 100"
          xmlSpace="preserve"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
        >
          <g id="Clock" />
          <g id="Calendar" />
          <g id="Document" />
          <g id="Bin" />
          <g id="Setting" />
          <g id="Layer_6">
            <g>
              <path d="M78.559,75.557H19.956c-3.493,0-6.337-3.109-6.337-6.932V32.639c0-3.821,2.844-6.932,6.337-6.932h58.603    c3.494,0,6.337,3.11,6.337,6.932v35.986C84.896,72.447,82.053,75.557,78.559,75.557z M19.956,31.858    c-0.724,0-1.169,0.505-1.169,0.78v35.986c0,0.275,0.445,0.78,1.169,0.78h58.603c0.724,0,1.169-0.505,1.169-0.78V32.639    c0-0.275-0.445-0.78-1.169-0.78H19.956z" />
            </g>
            <polygon points="81,30.6 49.231,49.131 18.08,30.609 14.604,35.232 49.157,55.777 84.435,35.25  " />
          </g>
        </svg>
        <p>shaybishay@gmail.com</p>
      </div>

      <Modal
        isOpen={modalState.isOpen}
        onClose={closeModal}
        title={modalState.title}
        backgroundColor={modalState.backgroundColor}
        message={modalState.message}
      />
    </div>
  );
};

export default Contact;
