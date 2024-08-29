import React, { useState } from 'react';
import '../Style/Register.css'; // Assuming your CSS file is named the same, you might want to rename it to Booking.css

const Booking = () => {
  const [showForm, setShowForm] = useState(true);

  const handleClose = () => {
    setShowForm(false);
  };

  return (
    showForm && (
      <div className="booking-container">
        <div className="booking-form">
          <button className="close-button" onClick={handleClose}>
            &times;
          </button>
          <h2>Book Your Stay at Swaru Villa</h2>
          <form>
            <div className="form-group">
              <label htmlFor="name">Full Name:</label>
              <input type="text" id="name" name="name" required />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email Address:</label>
              <input type="email" id="email" name="email" required />
            </div>
            <div className="form-group">
              <label htmlFor="phone">Phone Number:</label>
              <input type="tel" id="phone" name="phone" required />
            </div>
            <div className="form-group">
              <label htmlFor="checkIn">Check-In Date:</label>
              <input type="date" id="checkIn" name="checkIn" required />
            </div>
            <div className="form-group">
              <label htmlFor="checkOut">Check-Out Date:</label>
              <input type="date" id="checkOut" name="checkOut" required />
            </div>
            <div className="form-group">
              <label htmlFor="guests">Number of Guests:</label>
              <input type="number" id="guests" name="guests" min="1" required />
            </div>
            <div className="form-group">
              <label htmlFor="requests">Special Requests:</label>
              <textarea id="requests" name="requests" rows="4" placeholder="Any special requests or requirements?"></textarea>
            </div>
            <button type="submit" className="submit-button">
              Book Now
            </button>
          </form>
        </div>
      </div>
    )
  );
};

export default Booking;
