import "./HeroSession2Style.css";

import React from 'react'

const HeroSession2 = (props) => {
  return (
    <div className="hero-session">
        <div className="heading">
            <h1>{props.heading}</h1>
            <p>{props.text}</p>
        </div>
    </div>
  )
}

export default HeroSession2;