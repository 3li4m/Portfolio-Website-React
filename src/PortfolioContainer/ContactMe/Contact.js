import React from "react";
import "./Contact.css"
const Contact = () =>
{
    return(
        <section className="sectionID contact top" id="contact">            
            <div className="container">
                <div className="heading">
                    <h4></h4>
                    <h1>Contact Me</h1>
                </div>
                <div className="content">
                    <form className="formGroup">
                        <label htmlFor="name" >Your Name</label>
                        <div className="form-group">
                            <input type="text" placeholder="Your Name" id="name" />
                        </div>
                        <label htmlFor="email" >Your Email</label>
                        <div className="form-group">
                            <input type="text" placeholder="YourEmail@hotmail.com" id="email" />
                        </div>
                        <label htmlFor="message" >Your Message</label>
                        <div className="form-group textArea">
                            <textarea type="text" placeholder="Input your message..." id="message" />
                        </div>
                    <button className="btn primaryBtn submit" type="submit">Send</button>
                    </form>
                </div>
            </div>
        </section>
    );
}

export default Contact;