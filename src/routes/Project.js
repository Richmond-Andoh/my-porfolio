import React from "react";
import Footer from "../components/Footer";
import HeroSession2 from "../components/HeroSession2";
import ProjectCards  from "../components/ProjectCards";
import Navbar from "../components/Navbar";

const Project = () => {
    return (
        <div>
            <Navbar />
            <HeroSession2 heading="PROECTS." text="Here are some of awesome works"/>
            <ProjectCards />
            <Footer />
        </div>
    )
        
}

export default Project;