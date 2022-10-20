import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer"
import HeroSession2 from "../components/HeroSession2";

const About = () => {
    return (
        <div>
            <Navbar />
            <HeroSession2 heading="ABOUT." text="I'm a friendly Frontend Developer"/>
            <Footer />
        </div>
    )
}

export default About;