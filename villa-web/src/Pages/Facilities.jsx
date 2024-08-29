import AOS from 'aos';
import 'aos/dist/aos.css';
import React, { useEffect } from 'react';
import CountUp from 'react-countup';
import { Rotate } from 'react-reveal';
import bhira from "../Images/Bhira.jpg";
import divegar from "../Images/divegar.jpeg";
import home1 from "../Images/home1.png";
import home13 from "../Images/home13.png";
import home2 from "../Images/home2.png";
import home6 from "../Images/home6.png";
import imagica from "../Images/imagica.jpg";
import raigad from "../Images/Raigad.webp";
import saru1 from "../Images/saru1.png";
import saru2 from "../Images/saru2.png";
import saru3 from "../Images/saru3.png";
import saru4 from "../Images/saru4.png";
import saru5 from "../Images/saru5.png";
import saru6 from "../Images/saru6.png";
import world from "../Images/world.png";
import Clients from '../Pages/Clients';
import "../Style/Facilities.css";

const Facilities = () => {

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
    <div className='facility'>
    <div data-aos="zoom-in" className="facility-item">
        <h1>Our Best <span>Facilities</span> <br /> Provide You.</h1>
        <p>Accomadation are Desigined to provide ulmost <br /> comfort and relaxtion we ensure a memorable stay for our guests.</p>
        <button>Contact Now</button>
    </div>
    <div className="facility-item1">
        <div data-aos="zoom-in" className="facility-content">
            <img src={saru1} alt="" />
            <p>Private Workplace</p>
        </div>
        <div data-aos="zoom-in" className="facility-content">
            <img src={saru4} alt="" />
            <p>Light 24/7</p>
        </div>
        <div data-aos="zoom-in" className="facility-content">
            <img src={saru5} alt="" />
            <p>Breakfast </p>
        </div>
        <div data-aos="zoom-in" data-aos-delay="400" className="facility-content">
            <img src={saru3} alt="" />
            <p>Wifi Network</p>
        </div>
        <div data-aos="zoom-in" data-aos-delay="400" className="facility-content">
            <img src={saru6} alt="" />
            <p>Fitness</p>
        </div>
        <div data-aos="zoom-in" data-aos-delay="400" className="facility-content">
            <img src={saru2} alt="" />
            <p>Parking Area</p>
        </div>
    </div>
    </div>


    <div className="near-by">
        <h1>NearBy Attraction</h1>
    </div>
    <hr className='hr'/>
    <div className="attract">
        <div  data-aos="zoom-in" className="attract-item">
            <div className="attract-content">
            <img src={raigad} alt="" />
            </div>
            <div className="attract-content">
            <Rotate>
            <h1>RAIGAD FORT</h1>
            </Rotate>
            <p>“Raigad Fort is a historical icon symbolizing
                the valor of <br /> Chhatrapati Shivaji Maharaj and
                offering panoramic views of <br />Maharashtras
                rugged landscapes. “</p>
            </div>
        </div>
        <hr />
        <div data-aos="zoom-in" data-aos-delay="400" className="attract-item">
            <div className="attract-content">
                <Rotate>
            <h1>BHIRA DAM</h1>
            </Rotate>
            <p>“Bhira Dam, situated in the Sahyadri
                mountains near Bhira <br /> village, is a
                picturesque reservoir on the Kundalika
                River.”</p>
            </div>
            <div className="attract-content">
            <img src={bhira} alt="" />
            </div>
        </div>
        <hr />
        <div data-aos="zoom-in" className="attract-item">
            <div className="attract-content">
            <img src={imagica} alt="" />
            </div>
            <div className="attract-content">
                <Rotate>
            <h1>IMAGICA THEME PARK</h1>
            </Rotate>
            <p>“Imagicaa Theme Park is an immersive 
                entertainment destination <br /> near Mumbai, 
                India, offering a thrilling mix of rides, 
                attractions,  <br />and live entertainment for a
                memorable and magical experience.”</p>
            </div>
        </div>
        <hr />
        <div data-aos="zoom-in" className="attract-item">
            <div className="attract-content">
                <Rotate>
            <h1>DIVEGAR BEACH </h1>
            </Rotate>
            <p>“Diveagar Beach, nestled along the
                Konkan coast in Maharashtra, <br /> India,
                captivates with its pristine shores and
                tranquil <br /> ambiance, providing a serene
                escape for beach lovers.”</p>
            </div>
            <div className="attract-content">
            <img src={divegar} alt="" />
            </div>
        </div>
    </div>
    <hr />

<div data-aos="zoom-in" className="h1">
    <h1>Why The Swaru Luxrious Villa</h1>
</div>
    <div className="why-us">
        <div data-aos="zoom-in" data-aos-delay="400"  className="why-item">
        <img src={world} alt="" />
        </div>
        <div data-aos="zoom-in"   className="why-item">
        <p>1. Our Villa Situated on Heart On the city, Surrounded by Popular tourist attraction , and restaurants</p>
        <p> 2.Our Villa Dedicated to provide high level of to our guest ensuring that they have enjoyable and memorable stay</p>
        <p>3. Our villa feature on an site reasturants serves delicious meals by Oue nearby reasturants</p>
        </div>
    </div>

    <div className="snapshots">
        <div className="snap-item">
        <div data-aos="zoom-in" className="snap-item1">
            <h1>#Some SnapShotBy <br />
            <span>Swaru-Villa </span></h1>
            <p>TamhiniGhat,GoldValley, Sanaswadi,
            Maharashtra 402120</p>
            <button  className="discover-button">Discover More</button>
        </div>
        <div className="snap-item2">
            <img  data-aos="zoom-in" data-aos-delay="400" src={home2} alt="" />
            <img  data-aos="zoom-in" data-aos-delay="900" src={home6} alt="" />
            <img  data-aos="zoom-in" data-aos-delay="1500" src={home13} alt="" />
        </div>
        </div>
    </div>
    <hr />
    <div className="counter-imgs">
    <div className="counter-img">
    <img  data-aos="zoom-in" data-aos-delay="400" src={home1} alt="" />
    <img  data-aos="zoom-in" data-aos-delay="900" className='img' src={home2} alt="" />
    </div>
    <div className="counter-section">
      <h2>Best Of The <span>Month</span></h2>
      <p>Let’s spend your money and relive your stress by <br /> going around the Swaru Villa</p>
      
      <div className="counters">
        <div className="counter">
          <CountUp start={0} end={100} duration={2.75} suffix='+' delay={10}>
            {({ countUpRef, start }) => (
              <div>
                <span ref={countUpRef} onMouseEnter={start} />
                <p>Destinations</p>
              </div>
            )}
          </CountUp>
        </div>

        <div className="counter">
          <CountUp start={0} end={400} duration={2.75} suffix='+' delay={10}>
            {({ countUpRef, start }) => (
              <div>
                <span ref={countUpRef} onMouseEnter={start} />
                <p>Tourists</p>
              </div>
            )}
          </CountUp>
        </div>

        <div className="counter">
          <CountUp start={0} end={100} duration={2.75} suffix='+' delay={10}>
            {({ countUpRef, start }) => (
              <div>
                <span ref={countUpRef} onMouseEnter={start} />
                <p>Hotels</p>
              </div>
            )}
          </CountUp>
        </div>
      </div>
      
      <div className="btn">
            <button>Discover More</button>
        </div>
    </div>
    </div>

    <div className="clients">
        <h1>What Our Clients Say About Us </h1>
    </div>

    <div className="client-item">
        <div className="client-content">

        </div>
    </div>
    <Clients />
    </>
  )
}

export default Facilities