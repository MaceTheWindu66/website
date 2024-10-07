import React from "react";
import Slider from "react-slick";
import "./carousel_image.css";

type ImageCarouselProps = {
    images: string[];  // Ensure images is an array of strings
};


const ImageCarousel: React.FC<ImageCarouselProps> = ({images}) => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
    };


    
    return (
        <div className="slider-container"> 
            <Slider {...settings}>
            {images.map((image: string, index: number) => (
               <div key={index} className="carousel-container" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
                <img
                    src={image}
                    alt={`Slide ${index + 1}`}
                    className="carousel-image" 
                    style={{ maxWidth: '100%', maxHeight: '100%' }}
                    />
                </div>
            ))}
            </Slider>
        </div>
     );
};
    
export default ImageCarousel;

