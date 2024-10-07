import React from 'react';
import './Contact.css';
import ImageButton from './ImageButton';
import gitHubLogo from './images/gitHubLogo.png'
import linkedInLogo from './images/linkedInLogo.png'

const Contact = () => {
  return (
    <div style = {{paddingTop: '15vh', overflow: 'hidden'}}>
      <div className = "page-container-box">
        <div className = "my-image">
          Image here
        </div>
        <div className = "contact-info">
          <div className = "contact-info-header">
            Contact Me!
          </div>
          <div className = "contact-info-text">
            Below is all of my contact info and a downloadable file of my resume. Thanks for visiting my website! Feel free
            to send me a message!
          </div>
          <div className = "contact-info-text">
            Email: madduxberry31@gmail.com   |   mlberry@wpi.edu
          </div>
          <div className = "contact-info-text">
            The icons below link to my LinkedIn and GitHub accounts! 
          </div>
          <div className = "image-buttons-box">
            <ImageButton
              imageSrc = {gitHubLogo}
              url = "https://github.com/MaceTheWindu66"
              altText = "GitHub Profile"
              />
            <ImageButton
              imageSrc = {linkedInLogo}
              url = "https://www.linkedin.com/in/maddux-berry-9b94342a1"
              altText = "LinkedInProfile"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;