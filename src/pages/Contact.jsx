import React from "react";
import "../../public/styles/Contact.css"; // Ensure this path is correct
import { FaLinkedin, FaGithub, FaTwitter, FaEnvelope, FaInstagram } from "react-icons/fa";

const contactDetails = [
  {
    icon: <FaLinkedin />,
    title: "LinkedIn",
    description: "Connect with me on LinkedIn",
    link: "https://www.linkedin.com/in/sandesh-pawar-263a00190/",
  },
  {
    icon: <FaGithub />,
    title: "GitHub",
    description: "Check out my projects on GitHub",
    link: "https://github.com/sandesh4141",
  },
  {
    icon: <FaTwitter />,
    title: "Twitter",
    description: "Follow me on Twitter",
    link: "https://twitter.com/sandesh",
  },
  {
    icon: <FaInstagram />,
    title: "Instagram",
    description: "See my photos on Instagram",
    link: "https://instagram.com/sandesh.sp41",
  },
];

function Contact() {
  return (
    <div className="contact">
      <h1>Contact Me</h1>
      <p>Email: sandeshpawar414141@gmail.com</p>
      <div className="contact-cards">
        {contactDetails.map((contact, index) => (
          <div className="card" key={index}>
            <div className="card-icon">{contact.icon}</div>
            <h2>{contact.title}</h2>
            <p>{contact.description}</p>
            <a href={contact.link} target="_blank" rel="noopener noreferrer">
              Visit
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Contact;
