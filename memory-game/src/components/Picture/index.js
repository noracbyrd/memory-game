import React from "react";
import "./style.css";

function Picture (props) {
    return (
        <div>
            {props.pictures.map(picture => (<li><img alt={picture.name}src={picture.image}></img></li>))}
        </div>
    )
}

export default Picture;