import React from 'react';
import './ImageButton.css';

interface ImageButtonProps {
    imageSrc: string; // The image source should be a string
    onClick?: () => void; // The onClick handler is a function
    altText: string; // Alt text should be a string
    url?: string;
  }

  const ImageButton: React.FC<ImageButtonProps> = ({ imageSrc, onClick, altText, url }) => {
    const handleClick = () => {
      if (url) {
        window.location.href = url; // Redirect to URL
      } else if (onClick) {
        onClick(); // Call the onClick function
      } else {
        console.warn('No onClick handler or URL provided');
      }
    };

    return(
        <img
            src={imageSrc}
            alt={altText}
            className="image-button"
            onClick={handleClick}
        />
    );
};

export default ImageButton;