// src/components/Footer/Footer.js
import React from 'react';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; 
import { faInstagram, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="contact-info">
          <p>Contact: Andrea.loi@hotmail.it</p>
        </div>
        <div className="social-links">
          <a href="https://www.instagram.com/loi_andrea_/" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faInstagram} /> 
          </a>
          <a href="https://www.linkedin.com/in/andrea-loi-b52814284/" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faLinkedin} /> 
          </a>
          <a href="https://github.com/Loiandrea" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faGithub} /> 
          </a>
        </div>
      </div>
    </footer>
  );
};


export default Footer;
