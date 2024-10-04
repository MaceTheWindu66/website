import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ImageCarousel from "./ImageCarousel";
import './About.css';

function About() {
    return(
        <div>
            <div className = "page-box">
                <div className = "section-box" style={{height: '80vh'}}>
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
                <div className = "section-box">
                    <div className = "content-box">
                        <ImageCarousel />
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
                <div className = "section-box">
                    <div className = "content-box">
                            <div className = "text-header"> Boxing </div>
                            <div className = "text-box">
                                Boxing has been a passion of mine for years, and I've advanced to the point of coaching. I have
                                recently undergone recieving my coaching license, and help coach a boxing class at my college, WPI,
                                with my good friend Kane. It is an excellent way to work out, build confidence, be social, and learn
                                how to defend yourself, and I believe everyone should at least try it through their lives. 
                            </div>
                    </div>
                    <div className = "content-box">
                        Hello
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;