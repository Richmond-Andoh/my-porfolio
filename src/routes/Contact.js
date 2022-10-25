import React from "react";
import ContactForm from "../components/ContactForm";
import Footer from "../components/Footer";
import HeroSession2 from "../components/HeroSession2";
import Navbar from "../components/Navbar";

const Contact = () => {
    return(
        <div>
            <Navbar />
            <HeroSession2 heading="CONTACT." text="Let's have a cool Chat"/>
            <ContactForm />
            <Footer />
        </div>
    )
}

export default Contact;