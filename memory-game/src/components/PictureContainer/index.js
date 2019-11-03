// Children: Picture
import React from "react";
import "./style.css";
import Picture from "../Picture"

function PictureContainer (props) {
    return (
        <div>
            <ul>
                <Picture onClick={props.handlePictureClick} pictures={props.pictures} pictureid={props} clicked={props.clicked}/>
            </ul>
        </div>
    )
}

export default PictureContainer;