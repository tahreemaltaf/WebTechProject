import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear(); // Dynamic year

  return (
    <footer className="footer">
      <div className="footer-content">
        <p>&copy; {currentYear} BookFlix. All rights reserved.</p>
        <nav className="footer-links">
          <a href="#faq" className="footer-link" aria-label="FAQ">FAQ</a>
          <a href="#help-center" className="footer-link" aria-label="Help Center">Help Center</a>
          <a href="#privacy" className="footer-link" aria-label="Privacy Policy">Privacy Policy</a>
          <a href="#terms" className="footer-link" aria-label="Terms of Use">Terms of Use</a>
          <a href="#contact" className="footer-link" aria-label="Contact Us">Contact Us</a>
          <a href="#jobs" className="footer-link" aria-label="Jobs">Jobs</a>
        </nav>
        <div className="footer-social">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
            <i className="fab fa-facebook"></i>
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
            <i className="fab fa-instagram"></i>
          </a>
        </div>
        <div className="footer-language">
          <label htmlFor="language-select">Language:</label>
          <select id="language-select" className="language-select" aria-label="Select Language">
            <option value="en">English</option>
            <option value="ur">Urdu</option>
            <option value="es">Spanish</option>
          </select>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
