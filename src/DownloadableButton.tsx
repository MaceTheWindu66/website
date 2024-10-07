import React from 'react'
import PaperIcon from './images/PaperIcon.png'
import './DownloadableButton.css'

const DownloadableButton = () => {
    const handleDownload = () => {
      const fileUrl = '/Resume.pdf';
      const fileName = 'Resume.pdf';
  
      const link = document.createElement('a');
      link.href = fileUrl;
      link.download = fileName;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    };
  
    return (
      <img 
        src={PaperIcon}
        alt="Download Resume" 
        style={{ cursor: 'pointer', objectFit:'contain', height: '100%', width: '50%' }}
        className = "download-button"
        onClick={handleDownload} 
      />
    );
  };

export default DownloadableButton;