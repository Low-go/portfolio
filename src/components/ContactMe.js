import React from 'react';
import { Element } from 'react-scroll';
import { FaLinkedin, FaGithub, FaEnvelope, FaPhone } from 'react-icons/fa';
import '../componentsCss/ContactMe.css';


function ContactMe() {
  return (
    <Element name="contact-me" className='contactme-section'>
      <div className="contact-container">
        <h2 className="contact-title">Let's Connect</h2>
        <div className="contact-card">
          <img src={`${process.env.PUBLIC_URL}/images/me.jpg`} alt="Lorran Alves Galdino" className="profile-picture" />
          <h3 className="name">Lorran Alves Galdino</h3>
          <p className="job-title">Software Developer</p>
          <div className="contact-info">
            <div className="info-item">
              <FaPhone className="icon" />
              <a href="tel:18085016713">1 (808) 501-6713</a>
            </div>
            <div className="info-item">
              <FaEnvelope className="icon" />
              <a href="mailto:lorransoftwaredev@gmail.com">lorransoftwaredev@gmail.com</a>
            </div>
          </div>
          <div className="social-links">
            <a href="https://www.linkedin.com/in/lorran-alves-galdino/" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="social-icon linkedin" />
            </a>
            <a href="https://github.com/Low-go" target="_blank" rel="noopener noreferrer">
              <FaGithub className="social-icon github" />
            </a>
          </div>
        </div>
      </div>
    </Element>
  );
}

export default ContactMe;