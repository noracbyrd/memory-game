// Children: Score Message and Score Counter
import React from "react";
import "./style.css";
import ScoreCounter from "../ScoreCounter";
import ScoreMsg from "../ScoreMsg";

function Navbar (props) {
    return (
        <nav>
        <div className="nav-wrapper">
            <div className="row">
            <div className="col s4">
            <a href="#" className="brand-logo">Memory Clicky Game</a>
                </div>
                <div className="col navtext s4">
                    <ScoreMsg scoreMsg={props.scoreMsg}/>
                </div>
                <div className="col navtext s4">
                    <ScoreCounter scoreCounter={props.scoreCounter} topScore={props.topScore}/>
                </div>
            </div>
        </div>
      </nav>
    )
}

export default Navbar;
