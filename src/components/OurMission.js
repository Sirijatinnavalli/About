import React from 'react';
import missionImage from '../images/edokaperu.jpg'; // Update the path accordingly
import './OurMission.css';

const OurMission = () => {
  return (
    <section className="our-mission">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-6">
            <h2>Our Mission</h2>
            <ul>
              <li>Work fewer hours — and make more money</li>
              <li>Attract and retain quality, high-paying customers</li>
              <li>Manage your time so you’ll get more done in less time</li>
              <li>Hone sharp leadership skills to manage your team</li>
              <li>Cut expenses without sacrificing quality</li>
              <li>Automate your business, so you can leave for days, weeks, or even months at a time</li>
            </ul>
          </div>
          <div className="col-md-6">
            <img src={missionImage} alt="Our Mission" className="img-fluid" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurMission;
