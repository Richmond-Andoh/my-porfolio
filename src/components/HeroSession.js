import "./HeroSessionStyle.css";
import BackgroundIntroImg from "../Images/background.jpg"
const HeroSession = () => {
    return (
        <div className="heroSession">
            <div className="hero">
               <img className="Intro-Image" src={BackgroundIntroImg} alt="IntroImg"/>
            </div>
            <div className="content">
                <p>Hi, I'm a Freelancer</p>
                <h1>Frontend <span style={{color: "yellow"}}>Developer</span> </h1>
                <div className="buttons">
                    <a href="/project">
                        <button className="btn-warning" type="button">PROJECTS</button>
                    </a>
                    <a href="/contact">
                        <button className="btn-light" type="button">CONTACT</button>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default HeroSession