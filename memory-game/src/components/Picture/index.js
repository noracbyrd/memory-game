import React from "react";
import "./style.css";

function Picture (props) {
    console.log(props.pictures[0].image)
    return (
        <div>
            {props.pictures.map(picture => (<li><img alt={picture.name}src={picture.image}></img></li>))}
        </div>
    )
}

export default Picture;