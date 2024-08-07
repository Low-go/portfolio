import React from 'react';
import { Element } from 'react-scroll';
import '../componentsCss/Projects.css';
import cathedral from '../images/cathedral.jpg';
import peace from '../images/peace.jpg';
import sunset from '../images/sunset.jpg';
import RPS from '../images/rockPaperScissor.jpg';
import dev_blog from '../images/dev_blog.png';

function Projects() {
  const projects = [
    { title: "Fluid Simulation", image: cathedral, link: "#" },
    { title: "Music TV", image: peace, link: "#" },
    { title: "Dev Blog", image: dev_blog, link: "https://low-go.github.io/dev_blog/" },
    { title: "Rock,Paper,Scissor Simulator", image: RPS, link: "https://github.com/Low-go/RockxPaperxScissor-Simulator" },
    { title: "Synthwave", image: sunset, link: "#" },
  ];

  return (
    <Element name="projects" className='project-section'>
      <div className="title-container">
        <h1>Projects</h1>
      </div>
      <div className="gallery-container">
        <div className="gallery-wrap">
          {projects.map((project, index) => (
            <a 
              key={index}
              href={project.link}
              className={`item item-${index + 1}`}
              style={{backgroundImage: `url(${project.image})`}}
            >
              <p>{project.title}</p>
            </a>
          ))}
        </div>
        <div className='github-link'>
        <a href="https://github.com/Low-go" target="_blank" rel="noopener noreferrer">
          Follow me on GitHub
        </a>
      </div>
      </div>
    </Element>
  );
}

export default Projects;
