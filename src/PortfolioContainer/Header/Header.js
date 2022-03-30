import React, { useState } from "react";
import "./Header.css"

const Header = () =>{
    const [toggleHamburger, setHamburgerToggle] = useState(false);

    const hamburgerClick = () =>{
        toggleHamburger ? setHamburgerToggle(false) : setHamburgerToggle (true);
    }

    // When scroll header at top 
    window.addEventListener("scroll", function(){
        const header = this.document.querySelector(".header")
        header.classList.toggle("activeHeader", window.scrollY > 100)
    })
    

    return(
        <header className="desktopNav header">

            <nav className="navContainer ">
                <div className="logo">
                    <img className="headerLogo" src="./logo-black.png" alt="Website Logo"></img>
                </div>

                <div className="navLink">
                    <ul className=" navMenu link fFlex uppercase">
                        <li><a href="#home">A Home</a></li>
                        <li><a href="#home">Projects</a></li>
                        <li><a href="#home">Contact</a></li>
                    </ul>
                </div>
                {/* Mobile */}

                <div>
                    <button className={toggleHamburger ? "navHamburger is-Active" : "navHamburger"} onClick={hamburgerClick}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>
                </div>
            </nav>

            <div className={toggleHamburger ? "panelCol" : ""} />
            <nav className={toggleHamburger ? "mobileNav isActive " : "mobileNav"}>
                <div className="centerObjects">
                    <li><a href="#home"><span className="hoverAnim">Home</span></a></li>
                    <li><a href="#home"><span className="hoverAnim">Projects</span></a></li>
                    <li><a href="#home"><span className="hoverAnim">Contact</span></a></li>
                </div>
            </nav>

        </header>
    );
}

export default Header;