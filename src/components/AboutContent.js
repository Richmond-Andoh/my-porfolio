import "./AboutContentStyle.css";
import react1 from "../Images/react1.avif";
import react2 from "../Images/react2.avif";

import React from 'react'

const AboutContent = () => {
  return (
    <div>
        <h1 style={{textAlign: "center"}}>ABOUT.</h1>
        <div className="about">
            <div className="left-content">
                <h1 className="left-heading">Who Am I?</h1>
                <p>I'm a Freelancer FrontEnd React Developer.
                    I create responsive secure websites for my clients.
                </p>
                <a href="/contact">
                    <button className="btn-warning" type="button">CONTACT</button>
                </a>
            </div>
            <div className="right-content">
               <div className="img-container">
                    <div className="img-top">
                        <img src={react1} alt="react1-img"/>
                    </div>
                    <div className="img-bottom">
                        <img src={react2} alt="react2-img"/>
                    </div>
               </div>
            </div>
        </div>
    </div>
  )
}

export default AboutContent;