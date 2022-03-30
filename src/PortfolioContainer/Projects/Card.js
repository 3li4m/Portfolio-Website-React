import React from "react";

const Card = (props) =>{
    return(
        <div className="box btnShadow">
            {console.log(props.image)}
            <img src={props.image} alt="" />
            <h2>{props.title}</h2>
            <p>{props.desc}</p>

            <a href="">
                <i className="fa fa-arrow-right"></i>
            </a>
        </div>
    );
}

export default Card;