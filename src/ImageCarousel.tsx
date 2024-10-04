import React from "react";
import Slider from "react-slick";
import MusicPicture1 from "./images/MusicPicture1.jpeg";
import MusicPicture2 from "./images/MusicPicture2.jpeg";
import MusicPicture3 from "./images/MusicPicture3.jpeg";
import MusicPicture4 from "./images/MusicPicture4.jpeg";
import MusicPicture5 from "./images/MusicPicture5.jpeg";
import MusicPicture6 from "./images/MusicPicture6.jpeg";
import "./carousel_image.css";

const ImageCarousel = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
    };

    const images = [
        MusicPicture1,
        MusicPicture2,
        MusicPicture3,
        MusicPicture4,
        MusicPicture5,
        MusicPicture6,
    ];
    
    return (
        <div className="slider-container"> 
            <Slider {...settings}>
            {images.map((image, index) => (
                <div key={index} className="carousel-container"> 
                <img
                    src={image}
                    alt={`Slide ${index + 1}`}
                    className="carousel-image" 
                    style={
                        index === 1 ? { top: '20%'} : {} // Apply different position for second image
                      }
                    />
                </div>
            ))}
            </Slider>
        </div>
     );
};
    
export default ImageCarousel;

