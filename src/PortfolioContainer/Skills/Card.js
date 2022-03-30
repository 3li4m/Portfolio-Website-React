import React from "react";

const Card = (props) =>{
    return(
        <div className="box btnShadow">
            {console.log(props.image)}
            <a href="">
                <i className={props.image}></i>
            </a>
            <h2>{props.title}</h2>
            <p>{props.desc}</p>
        </div>
    );
}

export default Card;