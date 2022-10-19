import "./HeroSessionStyle.css";
import BackgroundIntroImg from "../Images/background.jpg"
const HeroSession = () => {
    return (
        <div className="heroSession">
            <div className="hero">
               <img className="Intro-Image" src={BackgroundIntroImg} alt="IntroImg"/>
            </div>
            <div className="content">
                <p>HI, I'M A FREELANCER</p>
                <h1>FRONTEND <span style={{color: "yellow"}}>DEVELOPER</span> </h1>
                <a href="/project">
                    <button className="btn-warning" type="button">PROJECTS</button>
                </a>
                <a href="/contact">
                    <button className="btn-light" type="button">CONTACT</button>
                </a>
            </div>
        </div>
    )
}

export default HeroSession