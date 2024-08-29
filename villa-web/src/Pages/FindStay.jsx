import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";
import Fade, { Rotate } from "react-reveal";
import { Link } from 'react-router-dom';
import dog from "../Images/dog.png";
import home9 from "../Images/home9.png";
import service1 from "../Images/service1.png";
import service2 from "../Images/service2.png";
import service3 from "../Images/service3.png";
import service4 from "../Images/service4.png";
import service5 from "../Images/service5.png";
import service6 from "../Images/service6.png";
import "../Style/FindStay.css";

const FindStay = () => {

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
    <div data-aos="zoom-in" className='service'>
      <div className='service-item'>
        <img src={home9} alt=''></img>
        <h1>Indias Most   Exclusive villa</h1>
      </div>
    </div>
    
    <Rotate><h1 data-aos="zoom-in" className="h1">SWARU-VILLA SERVICES</h1></Rotate>
    <div className='service-list'>
    <div data-aos="zoom-in" className='service-list1'>
          <Link to="/villa-details">
            <img src={service1} alt='Villa Service'></img>
          </Link>
        <p>Weekdays(Mon-Thu) 2-4 Guest Per-Day</p>
        <p>Starts Form</p>
        <p>₹5500/ +GST Per Day</p>
        <Link to="/villa-details"><button style={{margin:"10px"}}>See More</button></Link>
      </div>
      <div  data-aos="zoom-in"  data-aos-delay="500" className='service-list1'>
      <Link to="/villa-details">
            <img src={service4} alt='Villa Service'></img>
          </Link>
        <p>Weekdays(Mon-Thu) 2-4 Guest Per-Day</p>
        <p>Starts Form</p>
        <p>₹5500/ +GST Per Day</p>
        <Link to="/villa-details"><button style={{margin:"10px"}}>See More</button></Link>
      </div>
      <div data-aos="zoom-in"  data-aos-delay="1100"  className='service-list1'>
      <Link to="/villa-details">
            <img src={service2} alt='Villa Service'></img>
          </Link>
        <p>Weekdays(Mon-Thu) 2-4 Guest Per-Day</p>
        <p>Starts Form</p>
        <p>₹5500/ +GST Per Day</p>
        <Link to="/villa-details"><button style={{margin:"10px"}}>See More</button></Link>
      </div>
      <div data-aos="zoom-in" data-aos-delay="1600" className='service-list1'>
      <Link to="/villa-details">
            <img src={service3} alt='Villa Service'></img>
          </Link>
        <p>Weekdays(Mon-Thu) 2-4 Guest Per-Day</p>
        <p>Starts Form</p>
        <p>₹5500/ +GSTPer Day</p>
        <Link to="/villa-details"><button style={{margin:"10px"}}>See More</button></Link>
      </div>
      <div data-aos="zoom-in" data-aos-delay="2100" className='service-list1'>
      <Link to="/villa-details">
            <img src={service5} alt='Villa Service'></img>
          </Link>
        <p>Weekdays(Mon-Thu) 2-4 Guest Per-Day</p>
        <p>Starts Form</p>
        <p>₹5500/ +GST Per Day</p>
        <Link to="/villa-details"><button style={{margin:"10px"}}>See More</button></Link>
      </div>
      <div data-aos="zoom-in" data-aos-delay="2700" className='service-list1'>
      <Link to="/villa-details">
            <img src={service6} alt='Villa Service'></img>
          </Link>
        <p>Weekdays(Mon-Thu) 2-4 Guest Per-Day</p>
        <p>Starts Form</p>
        <p>₹5500/ +GST Per Day</p>
        <Link to="/villa-details"><button style={{margin:"10px"}}>See More</button></Link>
      </div>
    </div>
    <div className='villa-rates'>
      <Rotate><h1>Villa Rates Swaru </h1></Rotate>
    </div>
    <hr className='hr1'/>
    <div className='villa-item'>
      <Fade left>
        <div data-aos="zoom-in" className='villa-item1'>
          <img src={dog} alt='Villa' />
        </div>
      </Fade>
      <Fade right>
        <div data-aos="zoom-in" data-aos-delay="400" className='villa-item1'>
          <p>1. Meals are not included in the above rates.</p>
          <p>2. Additional guests can be accommodated
              with an extra charge of Rs. 650/- per
              person per day.</p>
          <p>3. Child (up to 4 years) no charges, 6-11 Y - 500
              per child, above 11Y adult charges applicable.</p>
          <p>4. Pets are allowed with a Pet fee of Rs 50.</p>
          <p>5. Our villa has the capacity to accommodate a group
              of 15 people easily.</p>
          <p>6. The above rates are not applicable for Diwali,
              Xmas, New Year, or special holidays.</p>
        </div>
      </Fade>
    </div>
    <hr className="hr1" />
    
    </>
  )
}

export default FindStay