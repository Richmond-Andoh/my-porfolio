import "./NavbarStyle.css";
import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";


const Navbar = () => {
 const [click, setClick] = useState(false)
 const clickHandler = () => setClick(!click) 

 const [color, setColor] = useState(false)
 const changeColor = () => {
   if(window.scrollY >= 1) {
       setColor(true)
   } else{
    setColor(false)
   }
 }
window.addEventListener("scroll", changeColor)
    return (
            <div className={color ? "header header-background" : "header"}>
                <a href="/">
                   <h1>Portfolio</h1>
                </a>
                <ul className={click ? "nav-links active" : "nav-links"}>
                    <li className="nav-link">
                        <a href="/">Home</a>
                    </li>
                    <li className="nav-link">
                        <a href="/about">About</a>
                    </li>
                    <li className="nav-link">
                        <a href="/project">Project</a>
                    </li>
                    <li className="nav-link">
                        <a href="/contact">Contact</a>
                    </li>
                </ul>
                <div className="hamburger-menu" onClick={clickHandler}>
                   {click ? (
                       <FaTimes size={25} style={{ color: "#fff"}}/>
                      ) : (<FaBars size={25} style={{ color: "#fff"}}/>)
                    }
                    
                </div>
            </div>
           
    )
}

export default Navbar;