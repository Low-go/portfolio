import React, {useState, useEffect} from 'react';
import { Link } from 'react-scroll';
import '../componentsCss/Navbar.css';

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if(window.innerWidth <= 960){
      setButton(false);
    }
    else{
      setButton(true);
    }
  };

  useEffect(() =>{
    showButton();
    window.addEventListener('resize', showButton);
    return () => window.removeEventListener('resize', showButton);
  }, []);

  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <Link to='main' className="navbar-logo" onClick={closeMobileMenu} smooth={true} duration={500}>
            LOW-GO <i className="fa-solid fa-ghost"></i>
          </Link>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : "fa-solid fa-bars"}></i>
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>       
            <li className='nav-item'>
              <Link to="main" className='nav-links' onClick={closeMobileMenu} smooth={true} duration={500}>Home</Link>
            </li>
            <li className='nav-item'>
              <Link to="about_me" className='nav-links' onClick={closeMobileMenu} smooth={true} duration={500}>About Me</Link>
            </li>
            <li className='nav-item'>
              <Link to="skills" className='nav-links' onClick={closeMobileMenu} smooth={true} duration={500}>Skills</Link>
            </li>
            <li className='nav-item'>
              <Link to="projects" className='nav-links' onClick={closeMobileMenu} smooth={true} duration={500}>Projects</Link>
            </li>
            <li className='nav-item'>
              <Link to="contact-me" className='nav-links' onClick={closeMobileMenu} smooth={true} duration={500}>Contact Me</Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
