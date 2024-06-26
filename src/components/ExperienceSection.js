// ExperienceSection.js
import React from 'react';
import './ExperienceSection.css'; // Assuming your CSS is in App.css

function ExperienceSection() {
  return (
    <div className="experience-section">
      <h2>more than 25 years of experience</h2>
      <p>We work with ambitious leaders who want their future to be successful and help them achieve extraordinary outcomes.</p>
      <div className="stats">
        <div className="stat">
          <div className="icon">📁</div>
          <p>321 projects completed</p>
        </div>
        <div className="stat">
          <div className="icon">👨‍💼</div>
          <p>27 workers employed</p>
        </div>
        <div className="stat">
          <div className="icon">🏆</div>
          <p>19 awards won</p>
        </div>
        <div className="stat">
          <div className="icon">👍</div>
          <p>280 satisfied customers</p>
        </div>
      </div>
    </div>
  );
}

export default ExperienceSection;
