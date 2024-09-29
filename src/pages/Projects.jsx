import React from 'react';
import "../../public/styles/Projects.css";

const projects = [
  {
    title: "Project 1",
    description: "Description of your project.",
    githubLink: "https://github.com/yourusername/project1",
    liveLink: "https://yourliveproject1.com",
  },
  {
    title: "Project 2",
    description: "Description of another project.",
    githubLink: "https://github.com/yourusername/project2",
    liveLink: "https://yourliveproject2.com",
  },
  {
    title: "Project 3",
    description: "Description of another project.",
    githubLink: "https://github.com/yourusername/project2",
    liveLink: "https://yourliveproject2.com",
  },
  {
    title: "Project 4",
    description: "Description of another project.",
    githubLink: "https://github.com/yourusername/project2",
    liveLink: "https://yourliveproject2.com",
  },
  // Add more projects here
];

function Projects() {
  return (
    <div className="projects">
      <h1>My Projects</h1>
      <div className="projects-container">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
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
