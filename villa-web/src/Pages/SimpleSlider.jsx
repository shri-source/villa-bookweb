// Import necessary packages and styles
import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import '../Style/Slider.css';

// Import your images
import home12 from "../Images/home12.png";
import home2 from "../Images/home2.png";
import home6 from "../Images/home6.png";
import home9 from "../Images/home9.png";

const SimpleSlider = () => {
  // Slider settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <>
      <div className="slider-container">
        <Slider {...settings}>
          <div className="offers">
            <span className="offer-content1">
              <img src={home2} alt="" />
            </span>
            <span className="offer-content2">
              <h1>50% Off</h1>
              <p>This Can Be Detailed Description just a short Text</p>
              <button>Book Now</button>
            </span>
          </div>
          
          <div className="offers">
            <div className="offer-content1">
              <img src={home12} alt="" />
            </div>
            <div className="offer-content2">
              <h1>50% Off</h1>
              <p>This Can Be Detailed Description just a short Text</p>
              <button>Book Now</button>
            </div>
          </div>

          <div className="offers">
            <div className="offer-content1">
              <img src={home9} alt="" />
            </div>
            <div className="offer-content2">
              <h1>50% Off</h1>
              <p>This Can Be Detailed Description just a short Text</p>
              <button>Book Now</button>
            </div>
          </div>

          <div className="offers">
            <div className="offer-content1">
              <img src={home6} alt="" />
            </div>
            <div className="offer-content2">
              <h1>50% Off</h1>
              <p>This Can Be Detailed Description just a short Text</p>
              <button>Book Now</button>
            </div>
          </div>
        </Slider>
      </div>
    </>
  );
};

export default SimpleSlider;
