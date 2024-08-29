import React from 'react';
import "../Style/Contact.css"; // Import the CSS file

const Contact = () => {
  return (
    <div className="contact-container">
      {/* Google Map */}
      <div className="map-container">
        <iframe
          title="Tamini Ghat Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d243646.6023223561!2d73.18963326030077!3d18.465072755274865!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc29965c3b9b727%3A0x6c8f7abac4dd3bc5!2sTamhini%20Ghat!5e0!3m2!1sen!2sin!4v1693338246871!5m2!1sen!2sin"
          width="100%"
          height="100%"
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>

      {/* Contact Form */}
      <div className="form-container">
        <h1>Contact Us</h1>
        <form>
          <div className="form-group">
            <label>Name:</label>
            <input type="text" name="name" />
          </div>
          <div className="form-group">
            <label>Email:</label>
            <input type="email" name="email" />
          </div>
          <div className="form-group">
            <label>Message:</label>
            <textarea name="message" rows="4"></textarea>
          </div>
          <button type="submit" className="submit-button">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
