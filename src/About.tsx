import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ImageCarousel from "./ImageCarousel";
import MusicPicture1 from "./images/MusicPicture1.jpeg";
//import MusicPicture2 from "./images/MusicPicture2.jpeg";
import MusicPicture3 from "./images/MusicPicture3.jpeg";
import MusicPicture4 from "./images/MusicPicture4.jpeg";
import MusicPicture5 from "./images/MusicPicture5.jpeg";
import MusicPicture6 from "./images/MusicPicture6.jpeg";
//import BoxingClassPicture from './images/BoxingClassPicture.jpg'
import TravelPicture1 from "./images/TravelPicture1.png";
import TravelPicture2 from "./images/TravelPicture2.png";
import TravelPicture3 from "./images/TravelPicture3.png";
import TravelPicture4 from "./images/TravelPicture4.png";
import TravelPicture5 from "./images/TravelPicture5.png";
import './About.css';

const music_images: string[] = [
    MusicPicture1,
    MusicPicture3,
    MusicPicture4,
    MusicPicture5,
    MusicPicture6
]

const travelImages: string[] = [
    TravelPicture2,
    TravelPicture1,
    TravelPicture3,
    TravelPicture4,
    TravelPicture5,
]


function About() {
    return(
        <div>
            <div className = "page-box">
                <div className = "section-box" style={{height: '80vh', marginBottom: '10vh'}}>
                    <div className = "content-box">
                        <div className = "text-header">
                            More About Me!
                        </div>
                        <div className = "text-box">
                            As a Computer Science Student at WPI, I have found an extreme burning passion for the field and its vast
                            array of subjects. I have particular interests in the fields of Cybersecurity, Artificial Intelligence,
                            and Software Engineering, and have dedicated myself to advancing my knowledge and expanding my horizons
                            through these fields.
                        </div>
                        <div className = "text-box">
                            I also have a number of passions outside of Computer Science, and in my free time you can find me
                            doing anything from teaching a boxing class, to gaming with friends, to making music with my band,
                            to lifting and training.
                        </div>
                    </div>
                    <div className = "content-box" style={{alignContent: 'center', alignItems: 'center'}}>
                        Image here
                    </div>
                </div>
                <div className = "divider"></div>
                <div className = "section-box">
                    <div className = "content-box">
                        <ImageCarousel images={music_images}/>
                    </div>
                    <div className = "content-box" style={{paddingBottom: '20vh'}}>
                        <div className = "text-header"> Music </div>
                        <div className = "text-box">
                            Music is a massive part of my life, and is a big passion of mine outside of the field of
                            Computer Science. I've had the opportunity to perform the music I love so dearly in front of
                            live audiences for the band Optimal, a band that my friends and I started freshman year at WPI.
                            It's an incredible outlet and has provided invaluable experiences to me and my friends.
                        </div>
                    </div>
                </div>
                <div className = "divider"></div>
                <div className = "section-box">
                    <div className = "content-box">
                            <div className = "text-header"> Boxing </div>
                            <div className = "text-box">
                                Boxing has been a passion of mine for years, and I've recently advanced to the point of coaching. I have
                                undergone recieving my coaching license, and help coach a boxing class at my college, WPI,
                                with my good friend Kane. It is an excellent way to work out, build confidence, be social, and learn
                                how to defend yourself, and I have a blast both participating in the sport and helping teach others as well.
                            </div>
                    </div>
                    <div className = "content-box" style={{alignContent: 'center', alignItems: 'center'}}>
                        
                    </div>
                </div>
                <div className = "divider"></div>
                <div className = "section-box">
                    <div className = "content-box">
                        <ImageCarousel images={travelImages} />
                    </div>
                    <div className = "content-box">
                        <div className = "text-header"> Travel </div>
                        <div className = "text-box">
                            I'm extremely fortunate to have grown up in a family where travelling was a large part of our lives. I absolutely
                            love traveling the world, and it has given me tons of absolutely incredible and invaluable experiences throughout my life.
                            These experiences have helped expand and shape my view of the world as well as providing me with core memories that will last a lifetime.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;