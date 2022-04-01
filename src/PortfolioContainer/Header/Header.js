import React, { useState } from "react";
import "./Header.css"

const Header = () =>{
    const [toggleHamburger, setHamburgerToggle] = useState(false);

    const hamburgerClick = () =>{
        toggleHamburger ? setHamburgerToggle(false) : setHamburgerToggle (true);
    }


    // Click NavBar Highlight/Active
    // const [toggleActive, setActive] = useState(false);
    // const navClick = () =>{
    //     const btnElements = document.getElementsByClassName("navLinkBtn");

    //     for(var i = 0; i < btnElements.length; i++){
    //        btnElements[i].addEventListener('click', function(){
    //            var cur = document.getElementsByClassName("active");
    //            cur[0].classList = cur[0].className.replace("active");
    //            this.className += "active";
    //        })
    //     }
    // }

    // When scroll header at top 
    window.addEventListener("scroll", function(){
        const header = this.document.querySelector(".header")
        header.classList.toggle("activeHeader", window.scrollY > 100)


        // Scroll NavBar Highlight/Active ----> 
        // const home = this.document.querySelector(".home")
        // home.classList.toggle("active", window.scrollY < 550)

        // const projects = this.document.querySelector(".projects")
        // projects.classList.toggle("active", window.scrollY > 550  && window.scrollY < 1900)

        // const skills = this.document.querySelector(".skills")
        // skills.classList.toggle("active", window.scrollY > 1900 && window.scrollY < 2800)

        // const contact = this.document.querySelector(".contact")
        // contact.classList.toggle("active", window.scrollY > 2800)

        const navList = document.querySelectorAll(".navLinkBtn");
        const sec = document.querySelectorAll(".sectionID");
        let cur = '';
        sec.forEach(sec => {
            const secTop = sec.offsetTop - 100;
            const secHeight = sec.clientHeight;
            if(window.pageYOffset > (secTop ) - secHeight / 8){
                cur = sec.getAttribute('id')
            }
        })
        console.log(cur)

        navList.forEach(li => {
            li.classList.remove("active");
            if(li.classList.contains(cur)){
                li.classList.add("active");
            }
        })
        // <---- 
    })


    return(
        <header className="desktopNav header" id="header">

            <nav className="navContainer ">
                <div className="logo">
                    <img className="headerLogo" src="./logo-black.png" alt="Website Logo"></img>
                </div>

                <div className="navLink">
                    <ul className=" navMenu">
                        <li><a href="#home" className="navLinkBtn home active" active>Home</a></li>
                        <li><a href="#projects" className="navLinkBtn projects">Projects</a></li>
                        <li><a href="#skills" className="navLinkBtn skills">Skills</a></li>
                        <li><a href="#contact" className="navLinkBtn contact">Contact</a></li>
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

            <nav className={toggleHamburger ? "mobileNav isActive " : "mobileNav"}>
                <div className="centerObjects">
                    <li><a href="#home" onClick={hamburgerClick}><span className="navLinkBtn home hoverAnim">Home</span></a></li>
                    <li><a href="#projects" onClick={hamburgerClick}><span className="navLinkBtn projects hoverAnim">Projects</span></a></li>
                    <li><a href="#skills" onClick={hamburgerClick}><span className="navLinkBtn skills hoverAnim">skills</span></a></li>
                    <li><a href="#contact" onClick={hamburgerClick}><span className="navLinkBtn contact hoverAnim">Contact</span></a></li>
                </div>
            </nav>

        </header>
    );
}

export default Header;