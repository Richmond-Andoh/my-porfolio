import React from "react";
import AboutContent from "../components/AboutContent";
import ContactForm from "../components/ContactForm";
import Footer from "../components/Footer";
import HeroSession from "../components/HeroSession";
import Navbar from "../components/Navbar";
import ProjectCards from "../components/ProjectCards";
const Home = () => {
    return(
        <div>
            <Navbar />
            <HeroSession />
            <AboutContent />
            <ProjectCards />
            <ContactForm />
            <Footer />
        </div>
    )
     
}

export default Home;