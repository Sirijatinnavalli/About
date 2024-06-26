import React from 'react';
import About from './components/About';
import Timeline from './components/Timeline';
import ExperienceSection from './components/ExperienceSection';
import WhyChooseUs from './components/WhyChooseUs';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';  // Ensure this file exists and is styled properly
import OurMission from './components/OurMission';
import OurTeam from './components/OurTeam';

function App() {
  return (
    <div className="App" style={{ backgroundColor: '#F2F2F2', color: '#24272C', minHeight: '100vh', padding: '20px' }}>
      <About />
      <Timeline />
      <ExperienceSection />
      <WhyChooseUs />
      <OurMission />
      <OurTeam />
    </div>
  );
}

export default App;
