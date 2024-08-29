import { faEnvelope, faHeart, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';
import logo from "../Images/logo.png";
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <img src={logo} alt="Logo" />
      </div>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About Us</Link></li>
          <li><Link to="/findstay">Find Stays</Link></li>
          <li><Link to="/favorite"><FontAwesomeIcon icon={faHeart} /> Favorites</Link></li>
          <li><Link to="/contact"><FontAwesomeIcon icon={faEnvelope} /> Contact</Link></li>
        </ul>
      </nav>
      <div className="auth-buttons">
        <Link to="/book"><button><FontAwesomeIcon icon={faUser} /> Book Now</button></Link>
        <Link to="/login"><button><FontAwesomeIcon icon={faUser} /> Login</button></Link>
      </div>
    </header>
  );
};

export default Header;
