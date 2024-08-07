import React from 'react';
import {motion} from 'framer-motion';
import './Home.css';
import { Hidden } from '@mui/material';

const Home = () => {
  return (
    <div style={{ paddingTop: '5vh' }}>
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
            </div>
          </div>
      </div>
    </div>
  );
};

export default Home;