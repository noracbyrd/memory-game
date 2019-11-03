// Children: Picture
import React from "react";
import "./style.css";
import Picture from "../Picture"

function PictureContainer (props) {
    return (
        <div>
            <ul>
                <Picture onClick={props.handlePictureClick} pictures={props.pictures} pictureID={props}/>
            </ul>
        </div>
    )
}

export default PictureContainer;