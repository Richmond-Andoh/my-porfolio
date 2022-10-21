import "./ProjectCardsStyle.css";
import project1 from "../Images/project1.png";
import project2 from "../Images/project2.png";
import project3 from "../Images/project3.png";
import project4 from "../Images/project4.PNG";


import React from 'react'

const ProjectCards = () => {
  return (
    <div className="projects">
        <h1 className="pro">PROJECTS</h1>
        <div className="project-container">
            <div className="project-card">
                <div>
                    <img className="project-img" src={project1} alt="first-project" />
                    <h1 className="project-heading">Brightfield Tech Academy website Design</h1>
                    <p className="project-about">
                        A responsive website designed with Bootstrap css framwork
                    </p>
                </div>
                <div className="btn">
                    <p>
                        <a href="https://richmond-andoh.github.io/BTA-Webpage/">
                            <button type="submit" className="btn-warning">VIEW</button>
                        </a>
                    </p>
                    <p>
                        <a href="https://richmond-andoh.github.io/BTA-Webpage/">
                            <button type="submit" className="btn-warning">SOURCE</button>
                        </a>
                    </p>
                </div>
            </div>
        </div>

        <div className="project-container">
            <div className="project-card">
                <div>
                    <img className="project-img" src={project2} alt="first-project" />
                    <h1 className="project-heading">Restaurant Template Design</h1>
                    <p className="project-about">
                        A responsive website designed with Materialize css framework
                    </p>
                </div>
                <div className="btn">
                    <p>
                        <a href="https://richmond-andoh.github.io/Restaurant-Page/">
                            <button type="submit" className="btn-warning">VIEW</button>
                        </a>
                    </p>
                    <p>
                        <a href="https://github.com/Richmond-Andoh/Restaurant-Page">
                            <button type="submit" className="btn-warning">SOURCE</button>
                        </a>
                    </p>
                </div>
            </div>
        </div>

        <div className="project-container">
            <div className="project-card">
                <div>
                    <img className="project-img" src={project3} alt="first-project" />
                    <h1 className="project-heading">A Replica of Farmasyst Website Design</h1>
                    <p className="project-about">
                        A responsive website designed with Html and Bootstrap css framwork
                    </p>
                </div>
                <div className="btn">
                    <p>
                        <a href="https://richmond-andoh.github.io/Farmasyst">
                            <button type="submit" className="btn-warning">VIEW</button>
                        </a>
                    </p>
                    <p>
                        <a href="https://github.com/Richmond-Andoh/Farmasyst">
                            <button type="submit" className="btn-warning">SOURCE</button>
                        </a>
                    </p>
                </div>
            </div>
        </div>
        
        <div className="project-container">
            <div className="project-card">
                <div>
                    <img className="project-img" src={project4} alt="first-project" />
                    <h1 className="project-heading">Shopping Cart Website</h1>
                    <p className="project-about">
                        A responsive website designed with Html, Bootstrap css framework and Javascript
                    </p>
                </div>
                <div className="btn">
                    <p>
                        <a href="https://richmond-andoh.github.io/Shopping-Cart/">
                            <button type="submit" className="btn-warning">VIEW</button>
                        </a>
                    </p>
                    <p>
                        <a href="https://github.com/Richmond-Andoh/Shopping-Cart">
                            <button type="submit" className="btn-warning">SOURCE</button>
                        </a>
                    </p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ProjectCards;