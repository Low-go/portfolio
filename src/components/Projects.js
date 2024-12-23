import React from 'react';
import { useState } from 'react';
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

  const projects2 = [
    { title: "Alumni Digital ID Card", image: `${process.env.PUBLIC_URL}/images/ID.jpg`, link: "https://www.youtube.com/watch?v=Mlhad3SIhEo" },
    { title: "Ai PowerPoint Automation", image: `${process.env.PUBLIC_URL}/images/automation.jpg`, link: "https://github.com/Low-go/PowerPointAutomation" },

  ];
  const certificates = [
    { title: "Upsilon Membership", image: `${process.env.PUBLIC_URL}/images/Upsilon.jpg`, link: "-	https://drive.google.com/file/d/19F_kZpVJetP3mXJwvtPVtPQDTOd1wnjd/view?usp=drive_link" },
    { title: "URC Award", image: `${process.env.PUBLIC_URL}/images/Award.jpg`, link: "https://drive.google.com/file/d/1SFTEVh_ApVoiq_RBPEfkWW_xPVZMHoor/view?usp=drive_link" },
  ];

  const [activeTab, setActiveTab] = useState('projects');

  const tabs = [
    { id: 'projects', label: 'Projects' },
    { id: 'projects2', label: 'Projects 2' },
    { id: 'certificates', label: 'Certificates' }
  ];

  const getActiveProjects = () => {
    switch(activeTab) {
      case 'projects2':
        return projects2;
      case 'certificates':
        return certificates;
      default:
        return projects;
    }
  };


  return (
    <Element name="projects" className='project-section'>
      <div className="title-container">
        <div className="flex flex-col items-center gap-4">
          <h1>Projects</h1>
          
          {/* Segmented Control */}
          <div className="segmented-control">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-6 py-2 rounded-md transition-all duration-200 ${
                  activeTab === tab.id
                    ? 'bg-white/90 shadow-sm text-gray-900 font-medium'
                    : 'text-white hover:bg-white/20'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="gallery-container">
        <div className="gallery-wrap">
          {getActiveProjects().map((project, index) => (
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
