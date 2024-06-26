import React from 'react';
import teamImage from '../images/edokaperu.jpg'; // Update the path accordingly

const OurTeam = () => {
  return (
    <section className="our-team">
      <div className="container">
        <h2>Our Team</h2>
        <p>Our team of professionals includes HR consultants, executive coaches, business professionals, and more.</p>
        <div className="row">
          <div className="col-md-12">
            <img src={teamImage} alt="Our Team" className="img-fluid" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurTeam;
