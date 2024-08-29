import AOS from 'aos';
import 'aos/dist/aos.css';
import React, { useEffect } from 'react';
import { Rotate } from 'react-reveal';
import andarban from "../Images/andarban.jpg";
import caram from "../Images/caram.jpg";
import devkund from "../Images/devkund.jpeg";
import nature from "../Images/nature.jpeg";
import river from "../Images/river.jpg";
import secret from "../Images/secret.jpg";
import '../Style/Favorites.css';

const Favorites = () => {
  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 800,
      easing: 'ease-in-sine',
      delay: 100,
    });
  }, []);

  return (
    <div className="favorites-container">
      <section className="amenities">
        <h2  data-aos="zoom-in">Amenities at Swaru-Villa</h2>
        <p>Experience comfort like never before with a range of amenities including luxurious accommodations, dining, and more. Your satisfaction is our priority.</p>
        <div className="amenities-grid">
          <Rotate>
          <div className="amenity-item">Private Lawn</div>
          <div className="amenity-item">Celebration Zone</div>
          <div className="amenity-item">Outdoor Sports</div>
          <div className="amenity-item">Badminton</div>
          <div className="amenity-item">Parking</div>
          <div className="amenity-item">Inverter</div>
          <div className="amenity-item">Security cameras</div>
          <div className="amenity-item">AC Bedrooms</div>
          <div className="amenity-item">Ensuite Bathrooms</div>
          <div className="amenity-item">Microwave</div>
          <div className="amenity-item">Wardrobe with lock</div>
          <div className="amenity-item">Smart TV</div>
          <div className="amenity-item">Board Games</div>
          <div className="amenity-item">Fully Equipped Kitchen</div>
          <div className="amenity-item">Bluetooth Music System</div>
          <div className="amenity-item">Aquagard</div>
          <div className="amenity-item">Geyser</div>
          <div className="amenity-item">Mountain-view</div>
          <div className="amenity-item">Outdoor Dining Area</div>
          <div className="amenity-item">Mosquito Net</div>
          <div className="amenity-item">First Aid Kit</div>
          </Rotate>
        </div>
      </section>

      <section className="things-to-do">
        <h2  data-aos="zoom-in">Things to Do</h2>
        <p>Enhance your stay with a variety of recreational activities. Have a fantastic time with activities such as carrom, river rafting, and nature walks!</p>
        <div data-aos="zoom-in" className="activities-grid">
          <div className="activity-item">
            <img src={caram} alt="" />
            <h3>Carrom Board</h3>
            <p>Carom board is a timeless indoor game where players use wooden strikers to skillfully pocket opponent's pieces on a marked board.</p>
          </div>
          <div data-aos="zoom-in" data-aos-delay="600" className="activity-item">
            <img src={river} alt="" />
            <h3>River Rafting at Kolad</h3>
            <p>River rafting is an adrenaline-charged water adventure, navigating turbulent rapids in inflatable rafts, offering thrilling excitement and teamwork amidst breathtaking natural scenery.</p>
          </div>
          <div data-aos="zoom-in" data-aos-delay="1100" className="activity-item">
            <img src={nature} alt="" />
            <h3>Nature Walk</h3>
            <p>Explore the 200-meter rustic walking path around the property to reconnect with nature and maintain your fitness.</p>
          </div>
        </div>
      </section>

      <section className="local-sightseeing">
        <h2 data-aos="zoom-in">Local Sightseeing</h2>
        <div className="sightseeing-grid">
          <div data-aos="zoom-in" className="sightseeing-item">
            <img src={river} alt="" />
            <h3>Kolad River Rafting</h3>
            <p>Kolad River Rafting on the Kundalika River is renowned for its challenging rapids and stunning landscapes, providing adventure seekers with an exhilarating white-water rafting experience amidst nature's beauty.</p>
            <a href="https://www.google.com/maps?q=Kolad+River+Rafting" target="_blank" rel="noopener noreferrer">Click here for direction</a>
          </div>
          <div data-aos="zoom-in" data-aos-delay="700" className="sightseeing-item">
            <img src={devkund} alt="" />
            <h3>Devkund Waterfall</h3>
            <p>Devkund waterfall mesmerizes with its three-tiered cascade, forming a pristine emerald pool amidst Maharashtra's serene landscapes, creating an enchanting hidden oasis.</p>
            <a href="https://www.google.com/maps?q=Devkund+Waterfall" target="_blank" rel="noopener noreferrer">Click here for direction</a>
          </div>
          <div data-aos="zoom-in" data-aos-delay="1100" className="sightseeing-item">
            <img src={secret} alt="" />
            <h3>Secret Waterfall</h3>
            <p>Secret waterfall, accessible through a serene trek, offering a tranquil oasis for those seeking the hidden beauty of nature. It stands as a secret gem in the Tamhini region, waiting to be discovered by adventurous souls.</p>
            <a href="https://www.google.com/maps?q=Secret+Waterfall" target="_blank" rel="noopener noreferrer">Click here for direction</a>
          </div>
          <div data-aos="zoom-in" data-aos-delay="1600" className="sightseeing-item">
            <img src={andarban} alt="" />
            <h3>Andharban Trek</h3>
            <p>Embark on the mesmerizing Andharban Jungle Trek, where youll traverse lush forests, cross quaint bridges, and immerse yourself in the captivating charm of the Sahyadri Mountains.</p>
            <a href="https://www.google.com/maps?q=Andharban+Trek" target="_blank" rel="noopener noreferrer">Click here for direction</a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Favorites;
