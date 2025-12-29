import React from 'react';
import './Home.css';
import scissorsImage from '../assets/scissors-stapler.jpg'; // Import the image from assets folder

const Home = () => {
  return (
    <div className="home-container">
      <div className="content-left">
        <h2 className="typed-text">
          Welcome to<br />
          Shine Tuition Academy!<br />
          Empowering Students Daily.
        </h2>
        <p className="fade-in delay">
          We provide excellent tuition for students of all levels. Whether you're looking for online or offline classes, we cater to your needs and ensure the best learning experience!
        </p>
      </div>
      <div className="image-right">
        <img src={scissorsImage} alt="Scissors and Stapler" className="right-image" />
      </div>
    </div>
  );
};

export default Home;
