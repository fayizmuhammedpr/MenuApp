import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-box center">
          <img src="/images/Logo.png" alt="Logo" className="footer-logo" />
          <h2 className="footer-title">
            MENU <span className="net">APP</span>
          </h2>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; 2025 Menu App. All rights reserved.</p>
        <div>
          <a href="/terms">Terms & Conditions</a> | <a href="/privacy">Privacy Policy</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
