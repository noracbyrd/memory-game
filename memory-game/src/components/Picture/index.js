import React from "react";
import "./style.css";

function Picture (props) {
    return (
        <div>
            {props.pictures.map(picture => (<span className={props[picture.id]} {...props} onClick={props.onClick} data-value={picture.id}><li><img id={picture.id.toString()} alt={picture.name}src={picture.image}></img></li></span>))}
        </div>
    )
}

export default Picture;

