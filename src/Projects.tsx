import React from 'react';
import './Projects.css';

const Projects = () => {
  return (
    <div style={{ paddingTop: '15vh' }}>
      <div className = "page-container">
        <div className = "project-section">
          <div className = "project-image-content">
            Image here
          </div>
          <div className = "project-text-content">
            <div className = "project-header" style = {{ justifyContent: 'left'}}> Mass General Website </div>
            <div className = "project-description">
              For this project, I served as Project Manager and 
              Full-Stack Software Developer on a team of 11. We were tasked with making a fully functional
              service request website to be used on kiosks for Brigham and Women's Hospital, including pathfinding components with
              different choices of algorithms, and a service request component that uploaded requests to a database,
              among other useful features.
            </div>
          </div>
        </div>
        <div className = "project-section">
          <div className = "project-text-content"> 
            <div className = "project-header" style = {{ justifyContent: 'right'}}>
              Nim Bot
            </div>
            <div className = "project-description" style = {{textAlign: 'right'}}> 
              For this project, I created a simple bot using an algorithm that will attempt to beat
              the opposing player at the famous game of Nim. The bot essentially calculates the nim-sum 
              after every move, and uses this nim sum algorithm to determine its next move. Its true, hardcoded
              objective is to ensure the nim-sum for its own position does not = 0, which means it is playing a losing strategy.
            </div>
          </div>
          <div className = "project-image-content">
              Image here
          </div>
        </div>
        <div className = "project-section">
          
        </div>
      </div>
    </div>
  );
};

export default Projects;