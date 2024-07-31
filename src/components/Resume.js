import React from 'react';
import { Element } from 'react-scroll';
import '../componentsCss/Resume.css';

function Resume() {
  return (
    <Element name="resume" className='resume-section'>     
      
      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original-wordmark.svg" alt="Python" className='programming-image'/>

      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original-wordmark.svg"  alt="Java" className='programming-image'/>
    
      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original-wordmark.svg" alt="React" className='programming-image'/>

      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/django/django-plain-wordmark.svg" alt="Django" className='programming-image'/>         

      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original-wordmark.svg" alt="Git" className='programming-image'/>

      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original-wordmark.svg" alt="gitHub" className='programming-image'/>
  
    </Element>
  )
}

export default Resume
