import React from 'react';
import { Element } from 'react-scroll';
import '../componentsCss/Skills.css';

function Skills() {
  return (
    <Element name="skills" className='skills-section'>
      <h2 className='header'>Skills</h2>       
      <div className='icons-container'>
        <div className='skill-box'>
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original-wordmark.svg" alt="Python" className='programming-image'/>
        </div>
        <div className='skill-box'>
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original-wordmark.svg"  alt="Java" className='programming-image'/>
        </div>
        <div className='skill-box'>
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original-wordmark.svg" alt="React" className='programming-image'/>
        </div>
        <div className='skill-box'>
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/django/django-plain-wordmark.svg" alt="Django" className='programming-image'/>
        </div>
        <div className='skill-box'>
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original-wordmark.svg" alt="Git" className='programming-image'/>
        </div>
        <div className='skill-box'>
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg" alt="gitHub" className='programming-image'/>
        </div>
      </div>
      <div className='resume-link'>
        <a href="https://drive.google.com/file/d/1MBLwX-7_Kw6i_bFLhVAiJRGBnIKRFOtZ/view?usp=sharing" target="_blank" rel="noopener noreferrer">
          Check out my resume
        </a>
      </div>
    </Element>
  )
}

export default Skills