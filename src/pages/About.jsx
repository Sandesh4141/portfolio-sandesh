import React, { createElement } from "react";
import "../../public/styles/About.css";
import { FaLinkedin, FaGithub, FaTwitter, FaInstagram } from "react-icons/fa";
import "animate.css";
function About() {
  function createSkillMeter(skillName, skillLevel) {
    return (
      <div className="skill">
        <span>{skillName}</span>
        <div className="skill-meter">
          <div className="meter-fill" style={{ width: skillLevel }}></div>
        </div>
      </div>
    );
  }
  return (
    <section className="about">
      <div className="about-content">
        <h1 class="animate__animated animate__bounce">About Me</h1>
        <p>
          I am a passionate Web Developer with experience in React and Flutter.
          I enjoy building web applications, solving complex problems, and
          continuously learning new technologies.
        </p>

        <div className="social-media">
          <h2>Find me on</h2>
          <a
            href="https://www.linkedin.com/in/sandesh"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin className="social-icon" />
          </a>
          <a
            href="https://github.com/sandesh"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub className="social-icon" />
          </a>
          <a
            href="https://twitter.com/sandesh"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTwitter className="social-icon" />
          </a>
          <a href="https://instagram.com/sandesh.sp41">
            <FaInstagram className="social-icon" />
          </a>
        </div>

        <div className="skills">
          <h2>My Skills</h2>

          {createSkillMeter("HTML", "90%")}
          {createSkillMeter("CSS", "90%")}
          {createSkillMeter("React", "60%")}
          {createSkillMeter("Flutter", "30%")}
          {createSkillMeter("Javascript", "70%")}
        </div>
      </div>
    </section>
  );
}

export default About;
