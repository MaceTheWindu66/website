import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <div className = "container">
        <div className = "section">
          <div className = "left-content">
              <div className = "content-header"> Hello! I'm Maddux! </div>
              <div className = "content-body"> I'm currently a third year student at Worcester Polytechnic Institute
                studying Computer Science. I'm currently pursuing my Bachelor's degree, and have recently applied to the Master's
                program at WPI! My current interests are in Artificial Intelligence, Cybersecurity, Systems Programming, and Web/Game Development.
              </div>
            </div>
        
            <div className = "right-content"> Image of Me</div>

        </div>
        <div className = "section">
          <div className = "left-content"> 
            <div className = "content-header"> Course Work </div>
            <div className = "content-body"> List of course work</div>
          </div>
          <div className = "right-content">
            <div className = "content-header"> Computer Science Related Skills </div>
            <div className = "content-body"> List of skills </div>
          </div>
        </div>
    </div>
  );
};

export default Home;