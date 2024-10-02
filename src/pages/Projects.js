import React from 'react';
import './Projects.css';

const projects = [
  { title: "Project 1", description: "A cool project", link: "#" },
  { title: "Project 2", description: "Another cool project", link: "#" }
];

const Projects = () => {
  return (
    <section id="projects" className="projects-section">
      <h2>My Projects</h2>
      <div className="project-cards">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <a href={project.link}>View Project</a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
