import React from 'react';
import { Element } from 'react-scroll';
import '../componentsCss/Projects.css';
import cathedral from '../images/cathedral.jpg';
import peace from '../images/peace.jpg';
import mountain from '../images/mountain.jpg';
import frog from '../images/frog.jpg';
import sunset from '../images/sunset.jpg';

function Projects() {
  const projects = [
    { title: "Fluid Simulation", image: cathedral, link: "#" },
    { title: "Music TV", image: peace, link: "#" },
    { title: "The Great Wave", image: mountain, link: "#" },
    { title: "Simple System", image: frog, link: "#" },
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
      </div>
    </Element>
  );
}

export default Projects;
