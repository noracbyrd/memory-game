// Children: Picture
import React from "react";
import "./style.css";
import Picture from "../Picture"

function PictureContainer (props) {
    return (
        <div>
            <ul>
                <Picture pictures={props.pictures}/>
            </ul>
        </div>
    )
}

export default PictureContainer;