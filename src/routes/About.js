import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer"
import HeroSession2 from "../components/HeroSession2";
import AboutContent from "../components/AboutContent";

const About = () => {
    return (
        <div>
            <Navbar />
            <HeroSession2 heading="ABOUT." text="I'm a friendly Frontend Developer"/>
            <AboutContent />
            <Footer />
        </div>
    )
}

export default About;