import React from 'react';
import './Home.css';
//import { useState, useEffect, useRef } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import WebsiteHighlight from './images/WebsiteHighlight.png'
import ImageButton from './ImageButton';
import GitHubLogo from './images/gitHubLogo.png'
import prof_pic_transparent from './images/prof_pic_transparent.png'



const Home = () => {
  return (
    <div>
      <div className = "container" style={{paddingTop: '12vh'}}>
          <div className = "section" style={{height: '81vh'}}>
            <div className = "left-content">
                <div className = "content-header"> Hello! I'm Maddux! </div>
                <div className = "content-body"> I'm a third year student at Worcester Polytechnic Institute
                  studying Computer Science. I'm currently a member of the BS/MS program at WPI,
                  where I am current pursuing both a Bachelor of Science and Master of Science 
                  degree in Computer Science simultaneously. My current interests are in Artificial Intelligence,
                  Cybersecurity, Systems Programming, and Software Development.
                </div>
                <div style={{marginTop: '1vh', fontWeight: 500}}><Link to="/about" className="nav-button2">Learn More About Me Here!</Link></div>
            </div>
          
            <div className = "right-content"> 
              <img 
                src = {prof_pic_transparent}
                alt = "me"
                style = {{objectFit: 'contain', height: '100%', width: '100%'}}
                />
            </div>
          </div>
          <div className = "divider" style={{marginBottom: '4vh'}}></div>
          <div className = "section">
            <div className = "left-content">
              <div className = "content-header" style={{marginBottom: '3vh', textDecoration: 'underline', textUnderlineOffset: '2vh'}}> Languages </div>
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
            <div className = "content-header" style ={{paddingTop:'2vh'}}> Highlighted Projects </div>
            <div className = "content-body">
            <div className = "projects-box">
                  <div className = "projects-content" style={{paddingRight: '30px', paddingTop: '1vh'}}>
                    <iframe
                      width= '80%'
                      height= '80%'
                      src="https://www.youtube.com/embed/TLQI63xV8RQ"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
            >        </iframe>
            </div>
                  <div className = "projects-content">
                  <div style={{fontSize: '1.4rem', fontWeight: '500', textDecoration: 'underline', textUnderlineOffset: '1vh', marginBottom: '.5vh'}}>Deep Learning Snake AI</div>
                       For this project, I used Python and Pytorch
                      to create a Deep Learning Neural Network Model that
                      teaches itself how to play the classic game Snake.
                  </div>
                </div>
                <div className = "divider"></div>
                <div className = "projects-box">
                  <div className = "projects-content">
                    <div style={{fontSize: '1.4rem', fontWeight: '500', textDecoration: 'underline', textUnderlineOffset: '1vh', marginBottom: '.5vh'}}>Hospital  Web Application</div>
                    For my software engineering class I worked on a team of 11
                    people as Project Manager and Full Stack Developer, and we were tasked
                    with building this website for Brigham and Women's Hospital.
                  </div>
                  <div className = "projects-content">
                    <img 
                      src={WebsiteHighlight}
                      alt="Kiosk Website Highlights"
                      style={{height: '130%', width: '110%', objectFit: 'contain', paddingTop: '.5vh'}}
                    />
                  </div>
                </div>
                <div className = "small-button-box">
                <div><Link to="/projects" className="nav-button2" style={{paddingTop: '3.4vh'}}>See the rest of my projects here! </Link></div>
                <div> 
                      Or check out my GitHub!
                      <ImageButton
                        imageSrc = {GitHubLogo}
                        url = "https://github.com/MaceTheWindu66"
                        altText = "GitHub Profile"
                      />
                </div>
                </div>

            </div>
            </div>
            
          </div>
          <div className = "divider" style={{marginTop: '4vh'}}></div>
          <div className = "section" style={{marginBottom: '7vh'}} >
            <div className = "left-content"> 
              <div className = "content-header"> Significant Course Work </div>
              <div className = "content-body"> 
                <div style={{flexDirection: 'column', display: 'flex', justifyContent: 'flex-start',
                  alignItems: 'flex-start', fontSize: '2rem', fontWeight: 300
                }}>
                    <div>Software Engineering</div>
                    <div>Artificial Intelligence</div>
                    <div>Network Security</div>
                    <div>Algorithms</div>
                    <div>Object Oriented Design</div>
                    <div>Operating Systems</div>
                    <div>Assembly Language</div>  
                    <div>Computer Networks</div>
                  </div>
              </div>
            </div>
            <div className = "right-content">
             
              <div className = "content-header"> CS Related Skills </div>
                    <div className = "content-body"> 
                      <div className = "scroller-box">
                        <div>Agile Methodologies</div>
                        <div>Algorithms</div>
                        <div>Artificial Intelligence</div>
                        <div>Machine Learning</div>
                        <div>Data Structures</div>
                        <div>Security Vulnerabilities</div>
                        <div>Return Oriented Programming</div>
                        <div>Front-End Development</div>
                        <div>Back-End Development</div>
                        <div>Software Development</div>
                        <div>Web Development</div>
                        <div>Operating Systems</div>
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