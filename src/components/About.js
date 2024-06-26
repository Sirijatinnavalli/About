import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './About.css';  // Ensure this file exists and contains your custom styles
import aboutImage from '../images/edokaperu.jpg';  // Adjust the path as necessary

const About = () => {
  return (
    <Container>
      <Row>
        <Col md={12} className="text-center">
          <h1 className="about-title">About SDG Solutions</h1>
        </Col>
      </Row>
      <Row className="align-items-center">
        <Col md={6}>
          <img src={aboutImage} className="img-fluid rounded" alt="About us" />
        </Col>
        <Col md={6}>
          <p>At SDG Solutions, We specialize in providing top-quality software solutions for businesses and individuals alike. Our team of expert developers and designers are committed to delivering cutting-edge software that is both intuitive and functional. At our company, we understand the importance of staying ahead of the curve when it comes to software development.</p>
          <p>We achieved our success because of how successfully we integrate with our clients. One complaint many people have about consultants is that they can be disruptive. Our clients face no such issues.</p>
          <div className="quote-box">
            <p>We see ourselves as a forward looking group of passionate property professionals with the relevant experience to match.</p>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default About;
