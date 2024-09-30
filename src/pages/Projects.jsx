import React from 'react';
import "../../public/styles/Projects.css";
import "animate.css";
const projects = [
  {
    title: "Unreleased-Beats",
    description: "Project For Song Management. Built with NodeJS and Express",
    githubLink: "https://github.com/Sandesh4141/Unreleased-Beats",
    liveLink: "#",
  },
  {
    title: "BMI Calculator App ",
    description: "Basic BMI Calcator app built with Flutter.",
    githubLink: "https://github.com/Sandesh4141/bmi_calculator",
    liveLink: "#"
  },
  {
    title: "TDS-The Daily Scoope",
    description: "News App built With nodeJs and Axios using news-api.",
    githubLink: "https://github.com/Sandesh4141/The-Daily-Scoope",
    liveLink: "https://tds-wsyk.onrender.com/",
  },
  {
    title: "Advice Generator App ",
    description: "Advice Generator built with nodeJS and advice-api.",
    githubLink: "https://github.com/Sandesh4141/Advice-generator-app",
    liveLink: "https://sandesh4141.github.io/Advice-generator-app/",
  },
  // Add more projects here
];

function Projects() {
  return (
    <div className="projects">
      <h1 class="animate__animated animate__bounce">My Projects</h1>
      <div className="projects-container">
        {projects.map((project, index) => (
          <div className="project-card " key={index}>
            <h2>{project.title}</h2>
            <p>{project.description}</p>
            <div className="project-links">
              <a href={project.githubLink} target="_blank" rel="noopener noreferrer">GitHub</a>
              <a href={project.liveLink} target="_blank" rel="noopener noreferrer">Live Demo</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
