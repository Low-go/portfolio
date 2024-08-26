import React from 'react';
import '../componentsCss/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <span className="footer-name">Lorran Alves Galdino</span>
        <div className="footer-links">
          <a href="https://github.com/Low-go" aria-label="GitHub" target="_blank" rel="noopener noreferrer">
            <svg className="footer-icon" viewBox="0 0 16 16">
              <use xlinkHref="#github"></use>
            </svg>
          </a>
          <a href="https://www.linkedin.com/in/lorran-alves-galdino/" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
            <svg className="footer-icon" viewBox="0 0 16 16">
              <use xlinkHref="#linkedin"></use>
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;