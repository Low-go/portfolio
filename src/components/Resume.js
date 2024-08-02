import React from 'react';
import { Element } from 'react-scroll';
import '../componentsCss/Resume.css';
import resume from '../images/resume.png';

function Resume() {
  return (
    <Element name="resume" className='resume-section'>
      <div className='resume-content'>
        <div className='resume-text'>
          <h2>My Resume</h2>
          <p>Here is a list of my work experience and qualifications that I have racked up or put effort in through the years.
            I am constantly expanding myself in roles that will allow me to grow within my career at my university, and hope to continue to
            do so outside University life within the professional market.
          </p>
        </div>
        <div className='resume-card'>
          <a className='resume-card__link' href="https://drive.google.com/file/d/1Xc2Y0QfQWz8BjGaWKn65n0o1hvsdI0VN/view?usp=drive_link" target="_blank" rel="noopener noreferrer">
            <figure className='resume-card__pic-wrap' data-category="Resume">
              <img
                className='resume-card__img'
                src={resume}
                alt="resume thumbnail"
              />
            </figure>
            <div className='resume-card__info'>
              <h5 className='resume-card__text'>View My Resume</h5>
            </div>
          </a>
        </div>
        <a href="https://drive.google.com/file/d/1Xc2Y0QfQWz8BjGaWKn65n0o1hvsdI0VN/view?usp=drive_link" target="_blank" rel="noopener noreferrer" className="resume-button">
          Resume
        </a>
      </div>
    </Element>
  );
}

export default Resume;