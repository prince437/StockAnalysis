import React from 'react';
import './About.css'; // Import your CSS file for styling

const persons = [
  { photo: "https://i.pinimg.com/736x/78/be/72/78be72a25ac3330f30237eeb00eda964.jpg", alt: "PRINCE KUMAR", name: "PRINCE KUMAR", designation: "Web Developer", description: "Passionate B.Tech student of Computer Science, eager to innovate.", link: "https://example.com/johndoe" },
  { photo: "https://randomuser.me/api/portraits/women/2.jpg", alt: "Person 2", name: "Jane Smith", designation: "UI/UX Designer", description: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.", link: "https://example.com/janesmith" },
  { photo: "https://randomuser.me/api/portraits/men/3.jpg", alt: "Person 3", name: "Jack Brown", designation: "Software Engineer", description: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.", link: "https://example.com/jackbrown" }
];

const About = () => {
  return (
    <div className="container">
      {persons.map((person, index) => (
        <div key={index} className="card">
          <img src={person.photo} alt={person.alt} className="card-image" />
          <div className="card-details">
            <h2 className="card-title">{person.name}</h2>
            <p className="card-designation">{person.designation}</p>
            <p className="card-description">{person.description}</p>
            <a href={person.link} className="card-link" target="_blank" rel="noopener noreferrer">Read More</a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default About;
