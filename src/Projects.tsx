import React from 'react';
import './Projects.css';
import WebsiteShowcase1 from './images/WebsiteShowcase1.png'
import WebsiteShowcase2 from './images/WebsiteShowcase2.png'
import WebsiteShowcase3 from './images/WebsiteShowcase3.png'
import WebsiteShowcase4 from './images/WebsiteShowcase4.png'
import MMU from './images/MMU.png'
import NQueens from './images/N-Queens.png'
import clientandserver from './images/clientandserver.png'
import VADERmatrix from './images/VADERmatrix.png'
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
            <div className = "project-header"> Sentiment Analysis AI Models </div>
            <div className = "project-description">
              At WPI, I worked on this project with four of my peers to implement five different Artificial Intelligence / Machine Learning models 
              for the purpose of analyzing sentiments of social media posts, specifically on tweets that are on X (formerly twitter). These models classified each post
              into positive, negative, or neutral sentiments, with accuracy scores being displayed via confusion matrices. I was tasked with implementing the VADER model,
              the confusion matrix for which is shown on the right.
            </div>
          </div>
          <div className = "project-image-content">
            <img
              src={VADERmatrix}
              alt="Confusion matrix for VADER Model"
              style={{height: '95%', width: '85%', objectFit: "contain"}}
            />
          </div>
        </div>
        <div className = "project-section">
          <div className = "project-image-content">
            <img 
              src = {clientandserver}
              alt= "client and server"
              style={{height: '75%', width: '75%', objectFit: "contain"}}
            />
          </div>
          <div className = "project-text-content">
            <div className = "project-header"> HTTP Server and Client </div>
            <div className = "project-description">
              For this project, I created a simple HTTP server, as well as a client using a linux environment. By running these two programs, you can send HTTP GET requests to the server
              from the client, and the server will then answer the request for the domain you input. The output includes information for the website requested, as well
              as the index.html for the website. 
            </div>
          </div>
        </div>
        <div className = "project-section">
          <div className = "project-text-content"> 
            <div className = "project-header">
              Memory Management Unit Simulator
            </div>
            <div className = "project-description"> 
              For this project, I, along with my student partner, created a Memory Management Unit Simulator in C.
              This program takes instructions such as map, store, load, and so on, and uses them to interact with simulated representations of physical and 
              virtual memory. These instructions and operations simulate how an actual MMU operates in your CPU.
            </div>
          </div>
          <div className = "project-image-content">
          <img 
              src={MMU}
              alt="MMU"
              style={{height: '75%', width: '75%', objectFit: "contain"}}
            />
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
              The N-Queens problem is essentially the question of how can you put N amount of queens on an NxN board in such a way
              where no queen can attack any other queen. The project allowed me to get more familiar with backtracking algorithms and enhanced my problem solving skills 
              greatly.
            </div>
          </div>
          <div className = "project-image-content">
            <img 
              src={NQueens}
              alt="N-Queens"
              style={{height: '75%', width: '75%', objectFit: "contain"}}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;