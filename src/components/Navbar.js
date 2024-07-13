import React from 'react';
import { Link } from 'react-scroll';

function Navbar() {
  return (
    <nav>
      <ul>
        <li><Link to="main" smooth={true} duration={500}>Main</Link></li>
        <li><Link to="projects" smooth={true} duration={500}>Projects</Link></li>
        <li><Link to="resume" smooth={true} duration={500}>Resume</Link></li>
        <li><Link to="contact-me" smooth={true} duration={500}>Contact Me</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
