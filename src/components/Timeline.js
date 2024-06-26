import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './Timeline.css';  // Ensure this file exists and contains your custom styles
import img1990 from '../images/edokaperu.jpg';
import img2001 from '../images/edokaperu.jpg';
import img2015 from '../images/edokaperu.jpg';

const Timeline = () => {
  return (
    <div style={{ backgroundColor: '#F2F2F2', color: '#24272C', minHeight: '100vh', padding: '20px' }}>
      <Container>
        <Row className="text-center mb-4">
          <Col>
            <h2 style={{ color: '#192F59' }}>1990</h2>
            <div className="timeline-point"></div>
          </Col>
          <Col>
            <h2 style={{ color: '#192F59' }}>2001</h2>
            <div className="timeline-point"></div>
          </Col>
          <Col>
            <h2 style={{ color: '#192F59' }}>2015</h2>
            <div className="timeline-point"></div>
          </Col>
        </Row>
        <Row>
          <Col md={4} className="text-center">
            <img src={img1990} className="img-fluid rounded" alt="First Employees" />
            <h3 className="mt-3">First employees</h3>
            <p>This was the first period when Consulting WP actually felt like it would stick around for a while. We realized we were growing more stable and expanding at the same time. We needed a new office as we had severely outgrown the last one. We started scouting for a new location.</p>
          </Col>
          <Col md={4} className="text-center">
            <img src={img2001} className="img-fluid rounded" alt="First Recognition" />
            <h3 className="mt-3">First recognition</h3>
            <p>By this time we were a well known name within the industry. We had been prominent members of the industry for more than 16 years and worked for some of the biggest clients in the industry; we weren’t dismissed by anyone because we could not be dismissed by anyone.</p>
          </Col>
          <Col md={4} className="text-center">
            <img src={img2015} className="img-fluid rounded" alt="Corporation or Family" />
            <h3 className="mt-3">Corporation or family</h3>
            <p>Our journey has only brought us higher. Information Technology completely changes the way we analyze and present data. We have embraced new technologies and have ensured that our clients receive cutting edge analytics. As we go on towards the future we intend to exploit the full potential.</p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Timeline;
