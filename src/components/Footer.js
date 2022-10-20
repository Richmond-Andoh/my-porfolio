import "./FooterStyle.css";
import { FaHome } from "react-icons/fa";
import { FaPhone } from "react-icons/fa";
import { FaMailBulk } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-content">
                <div className="left-content">
                    <div className="location">
                      <div className="home">
                            <FaHome size={30} style={{color: "white"}}/>
                            <div>
                                <p>1234 Housing Society</p>
                                <p>Ghana/Bekwai</p>
                            </div>
                      </div>
                        <div className="phone">
                            <h3>
                                <FaPhone size={30} style={{color: "white"}}/>
                                <span>+233 557 010 890</span>
                            </h3>
                        </div>
                        <div className="mail">
                            <h3>
                                <FaMailBulk size={30} style={{color: "white"}}/>
                                <span>info@gmail.com</span>
                            </h3>
                        </div>
                    </div>
                </div>
                <div className="right-content">
                    <h3>About The Company</h3>
                    <p>I'm Richmond Andoh, a student of Brightfield Tech Academy</p>
                    <p>I enoy discussing new projects and design challenges</p>
                    <div className="media-icons">
                        <FaFacebook className="facebook" size={30} style={{color: "white"}}/>
                        <FaLinkedin className="linkedin" size={30} style={{color: "white"}}/>
                        <FaTwitter className="twitter" size={30} style={{color: "white"}}/>
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default Footer;