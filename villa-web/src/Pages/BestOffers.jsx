import AOS from 'aos';
import 'aos/dist/aos.css';
import React, { useEffect } from 'react';
import { FaBed, FaStar, FaUsers } from "react-icons/fa";
import { Fade, Rotate } from "react-reveal";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

import home1 from "../Images/home1.png";
import home12 from "../Images/home12.png";
import home13 from "../Images/home13.png";
import home2 from "../Images/home2.png";
import home6 from "../Images/home6.png";
import home9 from "../Images/home9.png";
import '../Style/BestOffers.css';
import Facilities from './Facilities';
import SimpleSlider from './SimpleSlider';

const BestOffers = () => {

  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 800,
      easing: 'ease-in-sine',
      delay: 100,
    });
  }, []);

  return (
    <>
    <div data-aos="zoom-in" className="offer">
      <h1>Best Offer This Month</h1>
    </div>
    <hr className='hr' />
    <SimpleSlider/>

      <div className='item'>
        <Fade left>
          <h1>The Most <span>Memorable</span> Rest Time <span>Stay</span> Here</h1>
        </Fade>
        <Rotate>
          <p>Our Target Is To Provide Best Quality Service</p>
        </Rotate>
      </div>

      {/* Additional content items */}
      <div data-aos="zoom-in" className="item-content">
        {/** Item Contents Start */}
        {/* Rest of your item content remains unchanged */}
      </div>

      <div  className="item-content">
        {/** Item Contents Start */}
        <div data-aos="zoom-in" className="item-content1">
          <img src={home1} alt="" />
          <h1>Swaru Luxirios villa</h1>
          <p style={{ color: "#007bff", fontSize: "13px", margin: "5px 10px" }}>$50 Per Day +Gst <FaStar style={{ color: "orange", fontSize: "15px" }} />   <FaStar style={{ color: "orange", fontSize: "15px" }} />  <FaStar style={{ color: "orange", fontSize: "15px" }} />  <FaStar style={{ color: "orange", fontSize: "15px" }} />  <FaStar style={{ color: "orange", fontSize: "15px" }} /></p>
          <p><FaUsers style={{ color: "orange", fontSize: "19px" }} /> 9 <FaBed style={{ color: "orange", fontSize: "19px" }} /> 4</p>
          <button>Show More</button>
        </div>
        <div data-aos="zoom-in" className="item-content1">
          <img src={home2} alt="" />
          <h1>Swaru Luxirios villa</h1>
          <p style={{ color: "#007bff", fontSize: "13px", margin: "5px 10px" }}>$50 Per Day +Gst <FaStar style={{ color: "orange", fontSize: "15px" }} />   <FaStar style={{ color: "orange", fontSize: "15px" }} />  <FaStar style={{ color: "orange", fontSize: "15px" }} />  <FaStar style={{ color: "orange", fontSize: "15px" }} />  <FaStar style={{ color: "orange", fontSize: "15px" }} /></p>
          <p><FaUsers style={{ color: "orange", fontSize: "19px" }} /> 9 <FaBed style={{ color: "orange", fontSize: "19px" }} /> 4</p>
          <button>Show More</button>
        </div>
        <div data-aos="zoom-in" className="item-content1">
          <img src={home9} alt="" />
          <h1>Swaru Luxirios villa</h1>
          <p style={{ color: "#007bff", fontSize: "13px", margin: "5px 10px" }}>$50 Per Day +Gst <FaStar style={{ color: "orange", fontSize: "15px" }} />   <FaStar style={{ color: "orange", fontSize: "15px" }} />  <FaStar style={{ color: "orange", fontSize: "15px" }} />  <FaStar style={{ color: "orange", fontSize: "15px" }} />  <FaStar style={{ color: "orange", fontSize: "15px" }} /></p>
          <p><FaUsers style={{ color: "orange", fontSize: "19px" }} /> 9 <FaBed style={{ color: "orange", fontSize: "19px" }} /> 4</p>
          <button>Show More</button>
        </div>
        
          <div data-aos="zoom-in" data-aos-delay="400" className="item-content1">
            <img src={home12} alt="" />
            <h1>Swaru Luxirios villa</h1>
            <p style={{ color: "#007bff", fontSize: "13px", margin: "5px 10px" }}>$50 Per Day +Gst <FaStar style={{ color: "orange", fontSize: "15px" }} />   <FaStar style={{ color: "orange", fontSize: "15px" }} />  <FaStar style={{ color: "orange", fontSize: "15px" }} />  <FaStar style={{ color: "orange", fontSize: "15px" }} />  <FaStar style={{ color: "orange", fontSize: "15px" }} /></p>
            <p><FaUsers style={{ color: "orange", fontSize: "19px" }} /> 9 <FaBed style={{ color: "orange", fontSize: "19px" }} /> 4</p>
            <button>Show More</button>
          </div>
          <div data-aos="zoom-in" data-aos-delay="400" className="item-content1">
            <img src={home6} alt="" />
            <h1>Swaru Luxirios villa</h1>
            <p style={{ color: "#007bff", fontSize: "13px", margin: "5px 10px" }}>$50 Per Day +Gst <FaStar style={{ color: "orange", fontSize: "15px" }} />   <FaStar style={{ color: "orange", fontSize: "15px" }} />  <FaStar style={{ color: "orange", fontSize: "15px" }} />  <FaStar style={{ color: "orange", fontSize: "15px" }} />  <FaStar style={{ color: "orange", fontSize: "15px" }} /></p>
            <p><FaUsers style={{ color: "orange", fontSize: "19px" }} /> 9 <FaBed style={{ color: "orange", fontSize: "19px" }} /> 4</p>
            <button>Show More</button>
          </div>
          <div data-aos="zoom-in" data-aos-delay="400" className="item-content1">
            <img src={home13} alt="" />
            <h1>Swaru Luxirios villa</h1>
            <p style={{ color: "#007bff", fontSize: "13px", margin: "5px 10px" }}>$50 Per Day +Gst <FaStar style={{ color: "orange", fontSize: "15px" }} />   <FaStar style={{ color: "orange", fontSize: "15px" }} />  <FaStar style={{ color: "orange", fontSize: "15px" }} />  <FaStar style={{ color: "orange", fontSize: "15px" }} />  <FaStar style={{ color: "orange", fontSize: "15px" }} /></p>
            <p><FaUsers style={{ color: "orange", fontSize: "19px" }} /> 9 <FaBed style={{ color: "orange", fontSize: "19px" }} /> 4</p>
            <button>Show More</button>
          </div>
      </div>

      <Facilities />
    </>
  );
}

export default BestOffers;
