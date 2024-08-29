import React, { useState } from 'react';
import client1 from "../Images/client1.png";
import client2 from "../Images/client2.png";
import client5 from "../Images/client5.png";
import "../Style/Clients.css";

const Clients = () => {
  const clientReviews = [
    {
      name: "PRIYANKA PATIL (4/23)",
      image: client1,
      review: "“Swaru Farm villa ... You can call it as your second home where you will get Luxury accommodation at an affordable price. Lush green surroundings well maintained lawn. Villa is surrounded by wonderful hills. . If you want to spend few days in lap of Nature then this place is perfect for you.",
      rating: 5,
    },
    {
      name: "BHAGWAN AHIRRAO(12/23)",
      image: client5,
      review: "“Swaru villa is located very near to Tamhini ghat and easily accessible.Place is really quite and you can spent very good time with family.Basic kitchen stuf are available in villa so that you can cook your food and also restaurant is available just outside the gated community.”",
      rating: 4,
    },
    {
      name: "AMOL MAGAR(4/23)",
      image: client5,
      review: "A wonderful experience with luxurious amenities. Me along with my three friends and a pet travelled from Hyderabad by road but the whole journey was worth it. The beauty of mountains and roar of water will make you fall in love with the place. The perfect furnished villa with everything that you need is present there. I would recommend everyone to give it a shot and you won’t regret",
      rating: 3,
    },
    {
      name: "KUSHAN MAJUMDER(1/23)",
      image: client2,
      review: "A wonderful experience with luxurious amenities. Me along with my three friends and a pet travelled from Hyderabad by road but the whole journey was worth it. The beauty of mountains and roar of water will make you fall in love with the place. The perfect furnished villa with everything that you need is present there. I would recommend everyone to give it a shot and you won’t regret",
      rating: 5,
    },
    {
      name: "Chris Wilson",
      image: "https://via.placeholder.com/100",
      review: "Good but can be improved.",
      rating: 4,
    },
    // Add more reviews as needed
  ];

  const [currentIndex, setCurrentIndex] = useState(0); // State to track the start index of the current reviews

  // Function to handle the "Next" button
  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 3) % clientReviews.length);
  };

  // Function to handle the "Previous" button
  const handlePrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 3 + clientReviews.length) % clientReviews.length);
  };

  // Get the current 3 reviews
  const currentReviews = clientReviews.slice(currentIndex, currentIndex + 4);

  return (
    <div data-aos="zoom-in" className="clients-section">
      <h2>Clients' Reviews</h2>
      <div className="client-reviews">
        {currentReviews.map((review, index) => (
          <React.Fragment key={index}>
            <div className="client-review">
              <img src={review.image} alt={review.name} className="client-image" />
              <h3>{review.name}</h3>
              <p>{review.review}</p>
              <div className="stars">
                {"★".repeat(review.rating) + "☆".repeat(5 - review.rating)}
              </div>
            </div>
          </React.Fragment>
        ))}
      </div>
      <div className="buttons">
        <button onClick={handlePrevious}>Left</button>
        <button onClick={handleNext}>Right</button>
      </div>
    </div>
  );
};

export default Clients;
