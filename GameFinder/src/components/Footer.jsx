import React from 'react';
import "./footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section about">
          <h1 className="logo-text">GameDeveloper / Finder</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quis
            lorem ut libero malesuada feugiat.
          </p>
          <div className="contact">
            <span><i className="fas fa-phone"></i> 123-456-789</span>
            <span><i className="fas fa-envelope"></i> info@example.com</span>
          </div>

        </div>
        <div className="footer-section links">
          <h2>Quick Links</h2>
          <ul>
            <a href="#"><li>Home</li></a>
            <a href="#"><li>About</li></a>
            <a href="#"><li>Services</li></a>
            <a href="#"><li>Portfolio</li></a>
            <a href="#"><li>Contact</li></a>
          </ul>
        </div>
     
      </div>
    
    </footer>
  );
}

export default Footer;
