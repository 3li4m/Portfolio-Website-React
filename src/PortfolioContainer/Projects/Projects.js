import React from "react";
import "./Projects.css"
import data from "./Projects.Api.js"
import Card from "./Card.js"
const Projects = () => {
    return( 
        <section className="projects top" id="projects">
            <div className="container">
                <div className="heading">
                    <h4></h4>
                    <h1>My A Projects</h1>
                </div>

                <div className="content grid">
                        {data.map((val, index) => {
                            return <Card key={index.id} image={val.image} title={val.title} desc={val.desc}/>
                            }
                        )}
                </div>
            </div>
        </section>
    );
}

export default Projects;