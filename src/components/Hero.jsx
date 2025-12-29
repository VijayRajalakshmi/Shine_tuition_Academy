import React, { useState } from 'react';
import './Hero.css';

function Hero() {
  const [showDropdown, setShowDropdown] = useState(false);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  return (
    <section className="hero">
      <div className="hero-content">
        <div className="hero-text">
          <h1>Empowering Students to Succeed</h1>
          <p>Join Shine Tuition Academy – Trusted by 1000+ students for both online & offline learning.</p>
          <button className="btn-primary" onClick={toggleDropdown}>Explore Courses</button>

          {showDropdown && (
            <div className="course-dropdown">
              <div className="course-section">
                <h4>Subjects</h4>
                <ul>
                  <li>Accounts</li>
                  <li>Commerce</li>
                  <li>Chemistry</li>
                  <li>Physics</li>
                  <li>Computer Science</li>
                </ul>
              </div>

              <div className="course-section">
                <h4>Levels</h4>
                <ul>
                  <li>Primary (Classes 1–5): Foundational Skills</li>
                  <li>Secondary (Classes 6–10): Broader Subjects</li>
                  <li>Higher Secondary (Classes 11–12): Specialization</li>
                </ul>
              </div>

              <div className="course-section">
                <h4>Boards</h4>
                <ul>
                  <li>CBSE</li>
                  <li>State Board</li>
                  <li>ICSE</li>
                </ul>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default Hero;
