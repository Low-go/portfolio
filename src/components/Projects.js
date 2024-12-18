import React from 'react';
import { Element } from 'react-scroll';
import '../componentsCss/Projects.css';


function Projects() {
  const projects = [
    { title: "JFS_Navigator", image: `${process.env.PUBLIC_URL}/images/code.jpg`, link: "https://www.youtube.com/watch?v=y1mFCYGkXuA" },
    { title: "LeetCode Practice", image: `${process.env.PUBLIC_URL}/images/leetcode.png`, link: "https://github.com/Low-go/LeetCodePartTwo" },
    { title: "Dev Blog", image: `${process.env.PUBLIC_URL}/images/dev_blog.png`, link: "https://low-go.github.io/dev_blog/" },
    { title: "Rock,Paper,Scissor Simulator", image: `${process.env.PUBLIC_URL}/images/rockPaperScissor.jpg`, link: "https://github.com/Low-go/RockxPaperxScissor-Simulator" },
    { title: "Portfolio Website", image: `${process.env.PUBLIC_URL}/images/portfolioImage.jpg`, link: "https://github.com/Low-go/portfolio" },
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
