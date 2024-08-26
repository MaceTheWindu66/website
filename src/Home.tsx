import React, {ReactNode} from 'react';
import './Home.css';
import {useInView} from 'react-intersection-observer';
import { useState, useEffect, useRef } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

interface SectionProps {
  children: ReactNode;
}

/*const Section: React.FC<SectionProps> = ({ children }) => {
  const { ref, inView } = useInView({
    triggerOnce: false, // Ensure the animation happens only once
    threshold: 0.9, // Trigger when 10% of the section is visible
  });

  return (
    <div ref={ref} className={`section ${inView ? 'fade-in' : ''}`}>
      {children}
    </div>
  );
}; */


const Home = () => {
  return (
    <div style={{ paddingTop: '5vh' }}>
      <div className = "container">
          <div className = "section">
            <div className = "left-content">
                <div className = "content-header"> Hello! I'm Maddux! </div>
                <div className = "content-body"> I'm a third year student at Worcester Polytechnic Institute
                  studying Computer Science. I'm currently pursuing my Bachelor's degree, and have recently applied to the Master's
                  program at WPI! My current interests are in Artificial Intelligence, Cybersecurity, Systems Programming, and Web/Game Development.
                </div>
            </div>
          
            <div className = "right-content"> Image of Me</div>
          </div>
          <div className = "section">
            <div className = "left-content">
              <div className = "content-header"> Languages </div>
                <div className = "lang-box"> 
                    <div> x86 Assembly </div>
                    <div> Java </div>
                    <div> JavaScript </div>
                    <div> C/C++ </div>
                    <div> Python </div>
                    <div> HTML </div>
                    <div> SQL </div>
                    <div> TypeScript </div>
                    <div> CSS </div>
                </div>
            </div>
            <div className = "right-content"> 
            <div className = "content-header" style ={{marginBottom:'2vh'}}> Highlighted Projects </div>
            <div className = "content-body">
            <div className = "projects-box">
                  <div className = "projects-content" style={{paddingRight: '30px'}}>
                    <iframe
                      width= '80%'
                      height= '50%'
                      src="https://www.youtube.com/embed/TLQI63xV8RQ"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
            >        </iframe>
            </div>
                  <div className = "projects-content"> For this project, I used Python and Pytorch
                      to create a Deep Learning Neural Network Model that
                      teaches itself how to play the classic game Snake.
                  </div>
                </div>
                <div className = "projects-box">
                  <div className = "projects-content">
                    For my software engineering class I worked on a team of 11
                    people as Project Manager and Full Stack Developer, and we were tasked
                    with building this website for Brigham and Women's Hospital.
                  </div>
                </div>
                <div style={{marginTop: '1vh', fontWeight: 500}}> See the rest of my Projects! <Link to="/projects" className="nav-button2">Projects</Link></div>

            </div>
            </div>
            
          </div>
          <div className = "section" >
            <div className = "left-content"> 
              <div className = "content-header"> Significant Course Work </div>
              <div className = "content-body"> 
                <div style={{flexDirection: 'column', display: 'flex', justifyContent: 'flex-start',
                  alignItems: 'flex-start', fontSize: 32, fontWeight: 300
                }}>
                    <div>Software Engineering</div>
                    <div>Introduction to Artificial Intelligence</div>
                    <div>Systems Programming Concepts</div>
                    <div>Algorithms</div>
                    <div>Object Oriented Design Concepts</div>
                    <div> Operating Systems</div>
                    <div>Assembly Language</div>  
                  </div>
              </div>
            </div>
            <div className = "right-content">
             
              <div className = "content-header"> CS Related Skills </div>
                    <div className = "content-body"> 
                      <div className = "scroller-box">
                        <div>Operating Systems</div>
                        <div>Algorithms</div>
                        <div>Data Structures</div>
                        <div>Systems Programming</div>
                        <div>Front-End Development</div>
                        <div>Back-End Development</div>
                        <div>Software Development</div>
                        <div>Web Development</div>
                        <div>Object Oriented Programming</div>
                        <div>Parallel Programming</div>
                        <div>Multithreaded Development</div>
                      </div>
                </div>
              </div>
            </div>
          </div>
      </div>
  );
};

export default Home;