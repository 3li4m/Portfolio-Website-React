import React from 'react'
import Typical from 'react-typical'
import './Profile.css'
export default function Profile(){
    return(
        <section className='sectionID profileContainer' id="home">
            <div className='profileParent'>
                <div className='profileDetails'>
                <p className='disclamer'><span className='note'>NOTE:</span> This is a moch website I created</p>

                    <div className='profileDetailsName'>
                        <span className='primaryText'>
                            <p>Hello, I'm <span className='highlightedText'>Elie</span></p>
                            
                        </span>
                    </div>

                    <div className='profileDetailsRole'>
                        <span className='primaryText'>
                            <h1>
                                <Typical 
                                    loop={Infinity}
                                    steps={[
                                        "Determined 👨‍🎓",
                                        2000,
                                        "Creative 🧠",
                                        2000,
                                        "Innovative 🤖",
                                        2000
                                    ]}
                                />
                            </h1>
                            <p className='profileRoleTagline'><span >
                                I am a developer and music lover! From Australia who lives to design and develop/create new things be it in IT, Robotics, Electronics or Music.
                            </span> </p>
                        </span>
                    </div>
                    <div className='profileOptions'>
                        
                        <button className='btn primaryBtn'>
                            <a href='#contact'>
                                <div  className='innerShadow'>
                                    Contact
                                </div>
                            </a>
                        </button>
                        
                        {/* UPDATE RESUME REMOVE NUMBER AND PUT (AT) INSTEAD OF @ */}
                        <a href='R.pdf' download='R.pdf'>
                            <button className='btn highlightedBtn'><div className='innerShadow'>Get Resume</div></button>
                        </a>
                        
                    </div>

                    <div className='colz'>
                        <div className='colzIcon'>
                            <p>Connect</p>
                            <span className='floatIcon'>

                            <a href='https://github.com/3li4m'>
                                    <i className="fa-brands fa-github fa-2x"></i>
                            </a>
                            </span>

                            <a href='https://www.linkedin.com/in/elie-ajaka-10a955b9/'>
                                <i className="fa-brands fa-linkedin fa-2x"></i>
                            </a>
                        </div>
                    </div>

                </div>
                <div className='profilePicture'>
                    <div className='profilePictureBackground' />
                </div>
                
            </div>
        </section>
    );
}