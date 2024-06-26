// WhyChooseUs.js
import React from 'react';
import './WhyChooseUs.css'; // Assuming your CSS is in App.css

function WhyChooseUs() {
  return (
    <div className="why-choose-us">
      <h2>why choose us</h2>
      <div className="services">
        <div className="service">
          <div className="icon">✈️</div>
          <h3>Travel and Aviation Consulting</h3>
          <p>Consultants ranked firms on a scale of one to 10, based on prestige, firm culture, work-life balance, compensation, and other factors.</p>
        </div>
        <div className="service">
          <div className="icon">💼</div>
          <h3>Business Services Consulting</h3>
          <p>We have had to start competing on quality of life in a way that they never had to before — leading to higher ratings from consultants.</p>
        </div>
        <div className="service">
          <div className="icon">🛒</div>
          <h3>Consumer Products Consulting</h3>
          <p>We are a company that offers design and build services for you from initial sketches to the final construction.</p>
        </div>
        <div className="service">
          <div className="icon">🏦</div>
          <h3>Financial Services Consulting</h3>
          <p>We are a dynamic niche consulting firm that has been helping visionary financial services brands convey their true essence.</p>
        </div>
      </div>
    </div>
  );
}

export default WhyChooseUs;
