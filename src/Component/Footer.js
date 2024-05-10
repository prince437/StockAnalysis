import React from 'react';
import './Footer.css'; // Import your CSS file for styling
import logo  from "../asset/Brand_logo.png";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-left">
        <img className="footer-logo" src={logo} alt="SSA" />
        <h3>Stock analysis and screening tool</h3>
       
        <p>Prince Analytics Private Ltd © 2023-2024</p>  
      </div>
      <div className="footer-right">
        <div className="footer-section">
          <h4>Products</h4>
          <p>Products paragraph goes here...</p>
        </div>
        <div className="footer-section">
          <h4>Team</h4>
          <p>Team paragraph goes here...</p>
        </div>
        <div className="footer-section">
          <h4>Theme</h4>
          <p>Theme paragraph goes here...</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
