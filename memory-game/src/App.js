import React, { Component }  from "react";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import PictureContainer from "./components/PictureContainer";
import pictures from "./pictures.json"

class App extends Component {
  state = {
    scoreMsg: "",
    scoreCounter: 0,
    topScore: 0,
    error: ""
  }

  handlePictureClick = click => {

  }

  handleScore = () => {

  }

  handleTopScore = () => {

  }

  handleScoreMsg = () => {

  }

  render () {
  return (
      <div>
        <Navbar scoreMsg={this.state.scoreMsg} scoreCounter={this.state.scoreCounter} topScore={this.state.topScore}/>
        <Header />
        <PictureContainer pictures={pictures}/>
      </div>
  );
  }
}

export default App;


