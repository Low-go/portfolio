import React from 'react';
import { Element } from 'react-scroll';
import '../componentsCss/Projects.css';

function Projects() {
  const projects = [
    { title: "Fluid Simulation", image: "assets/promo/gallery1.webp", link: "#" },
    { title: "Music TV", image: "assets/promo/gallery2.webp", link: "#" },
    { title: "The Great Wave", image: "assets/promo/gallery3.webp", link: "#" },
    { title: "Simple System", image: "assets/promo/gallery4.webp", link: "#" },
    { title: "Synthwave", image: "assets/promo/gallery5.webp", link: "#" },
  ];

  return (
    <Element name="projects" className='project-section'>
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