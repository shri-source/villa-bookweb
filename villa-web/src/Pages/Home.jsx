import { faCalendarAlt, faSearch, faSearchLocation, faUsers } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import AOS from 'aos';
import 'aos/dist/aos.css';
import React, { useEffect } from 'react';
import home1 from "../Images/home1.png";
import home9 from "../Images/home9.png";
import '../Style/Home.css';

const MainSection = () => {

  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 800,
      easing: 'ease-in-sine',
      delay: 100
    });
  }, []);

  return (
    <>
      <section className="main-section">
        <div data-aos="zoom-in" className="content">
          <h1>Find Your <span>Perfect</span> <br /> Place to Stay.</h1>
          <p data-aos="zoom-in" data-aos-delay="400">
            Slip your Body Mind and spirit of relaxation in calm atmosphere.
            We are here to help you find the best hotel at less price worldwide with flexible payment.
          </p>
          <button className="search-button">
            <FontAwesomeIcon icon={faSearch} /> Start Your Search
          </button>
        </div>
        <div className="images">
          <div  data-aos="zoom-in" data-aos-delay="400" className="image-container">
            <img src={home1} alt="Room" />
          </div>
          <div  data-aos="zoom-in" data-aos-delay="800" className="image-container1">
            <img src={home9} alt="Pool" />
          </div>
        </div>
      </section>
       
    <div data-aos="zoom-in" className="search-bar">
      <div className="input-container">
        <FontAwesomeIcon icon={faSearchLocation} />
        <input type="text" placeholder="Location" />
      </div>
      <div className="input-container">
        <FontAwesomeIcon icon={faCalendarAlt} />
        <input type="date" placeholder="Check-in" />
      </div>
      <div className="input-container">
        <FontAwesomeIcon icon={faCalendarAlt} />
        <input type="date" placeholder="Check-out" />
      </div>
      <div className="input-container">
        <FontAwesomeIcon icon={faUsers} />
        <input type="number" placeholder="Rooms & Guests" />
      </div>
      <button>
        <FontAwesomeIcon icon={faSearchLocation} /> Search
      </button>
    </div>
    <br />
    <hr style={{color:"red"}}/>
    </>
  );
};

export default MainSection;
