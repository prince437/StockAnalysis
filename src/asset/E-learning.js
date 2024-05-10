import React from 'react';
import './E-learning.css'; // Import your CSS file for styling

const courses = [
    { photo: "https://source.unsplash.com/random?stock-market", alt: "Stock Market Course 1", name: "Stock Market Course 1", price: 50, rating: 4 },
    { photo: "https://source.unsplash.com/random?stock-market", alt: "Stock Market Course 2", name: "Stock Market Course 2", price: 60, rating: 5 },
    { photo: "https://source.unsplash.com/random?stock-market", alt: "Stock Market Course 3", name: "Stock Market Course 3", price: 70, rating: 3 },
    { photo: "https://source.unsplash.com/random?stock-market", alt: "Stock Market Course 4", name: "Stock Market Course 4", price: 80, rating: 4 },
    { photo: "https://source.unsplash.com/random?stock-market", alt: "Stock Market Course 5", name: "Stock Market Course 5", price: 90, rating: 5 }
  ];

const Elearning = () => {
  return (
    <div className="container">
      {courses.map((course, index) => (
        <div key={index} className="card">
          <img src={course.photo} alt={course.alt} className="card-image" />
          <div className="card-details">
            <h2 className="card-title">{course.name}</h2>
            <p className="card-price">${course.price}</p>
            <div className="card-rating">
              {renderStars(course.rating)} {/* Renders star rating */}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

// Function to render star rating
const renderStars = (rating) => {
  const stars = [];
  for (let i = 0; i < rating; i++) {
    stars.push(<span key={i} className="star">&#9733;</span>); // Unicode for star character
  }
  return stars;
};

export default Elearning;
