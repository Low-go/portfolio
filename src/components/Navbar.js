import React from 'react';
import { Link } from 'react-scroll';
import '../componentsCss/Navbar.css';
import icon from '../images/logos_linear-icon.svg';

function Navbar() {
  return (
    <nav>
      <ul>
        <li className='icon'><img src={icon} alt="Icon"/></li>
        <li><Link to="main" smooth={true} duration={500}>Main</Link></li>
        <li><Link to="projects" smooth={true} duration={500}>Projects</Link></li>
        <li><Link to="resume" smooth={true} duration={500}>Resume</Link></li>
        <li><Link to="contact-me" smooth={true} duration={500}>Contact Me</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
