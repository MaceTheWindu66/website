import React from 'react';
import './Projects.css';
import WebsiteShowcase1 from './images/WebsiteShowcase1.png'
import WebsiteShowcase2 from './images/WebsiteShowcase2.png'
import WebsiteShowcase3 from './images/WebsiteShowcase3.png'
import WebsiteShowcase4 from './images/WebsiteShowcase4.png'
import ImageCarousel from './ImageCarousel';


const website_images: string[] = [
  WebsiteShowcase4,
  WebsiteShowcase1,
  WebsiteShowcase2,
  WebsiteShowcase3,
]


const Projects = () => {
  return (
    <div style={{ paddingTop: '15vh' }}>
      <div className = "page-container">
        <div className = "project-section">
          <div className = "project-image-content">
            <ImageCarousel images={website_images}/>
          </div>
          <div className = "project-text-content">
            <div className = "project-header"> Hospital Kiosk Web Application </div>
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
            <div className = "project-header">
              Nim Bot
            </div>
            <div className = "project-description"> 
              For this project, I created a simple bot using an algorithm that will attempt to beat
              the opposing player at the famous game of Nim. The bot essentially calculates the nim-sum 
              after every move, and uses this nim sum to determine its next move, ensuring it plays the winning
              strategy every time.
            </div>
          </div>
          <div className = "project-image-content">
            
          </div>
        </div>
        <div className = "project-section">
          <div className = "project-image-content" style={{paddingRight: '2vw'}}>
          <iframe
             width= '70%'
             height= '75%'
             src="https://www.youtube.com/embed/TLQI63xV8RQ"
             frameBorder="0"
             allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
             allowFullScreen
            ></iframe>
          </div>
          <div className = "project-text-content">
            <div className = "project-header">
              Deep-Learning Snake A.I
            </div>
            <div className = "project-description">
              This project I used to dip my toes into the field of artificial intelligence, and furthermore Machine Learning.
              With the help of some tutorials and YouTube videos, this project allowed me to begin to grasp concepts such as
              neural network building, Deep-Learning, and allowed me to grow my skills in Python and PyTorch. I hope to do more
              projects like this in the future!
            </div>
          </div>
        </div>
        <div className = "project-section">
          <div className = "project-text-content">
            <div className = "project-header">
              N Queens Problem Solver
            </div>
            <div className = "project-description">
              For this project, I used a backtracking algorithm to solve the infamous N-Queens problem for any input of N.
              This project allowed me to get more familiar with backtracking algorithms and enhanced my problem solving skills 
              greatly.
            </div>
          </div>
          <div className = "project-image-content">
            Image here
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;