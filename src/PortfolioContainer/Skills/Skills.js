import React from "react";
import "./Skills.css"
import data from "./Skills.Api.js"
import Card from "./Card.js"
const Skills = () => {
    return( 
        <section className="skills top" id="mySkills">
            <div className="container">
                <div className="heading">
                    <h4></h4>
                    <h1>Skills</h1>
                </div>
                <div className="content grid-3">
                        {data.map((val, index) => {
                            return <Card key={index.id} image={val.image} title={val.title} desc={val.desc}/>
                            }
                        )}
                </div>
            </div>
        </section>
    );
}

export default Skills;