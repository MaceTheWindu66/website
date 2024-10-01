import React from "react";
import './About.css';

function About() {
    return(
        <div>
            <div className = "page-box">
                <div className = "section-box">
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
            </div>
        </div>
    );
}

export default About;