import React from 'react';
import { FaEnvelope, FaFacebook, FaGlobe, FaInstagram, FaWhatsapp } from 'react-icons/fa';
import './Footer.css'; // Import the CSS file for styling

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>Gold Valley, Sanaswadi, Maharashtra 402120</p>
        <h2>Thank you...</h2>
        <p>Look forward to seeing you here!</p>

        <div className="contact-icons">
          <div className="contact-item">
            <FaWhatsapp className="contact-icon" />
            <span>+91 82373 30306</span>
            <span> | +91 94237 82141</span>
          </div>
          <div className="contact-item">
            <FaInstagram className="contact-icon" />
            <span>@swaru_luxurious_villa</span>
          </div>
          <div className="contact-item">
            <FaFacebook className="contact-icon" />
            <span>Swaru Luxurious Villa</span>
          </div>
          <div className="contact-item">
            <FaGlobe className="contact-icon" />
            <span>www.book on Airbnb</span>
          </div>
          <div className="contact-item">
            <FaEnvelope className="contact-icon" />
            <span>swaruvilla@gmail.com</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
