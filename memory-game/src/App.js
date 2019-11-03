import React, { Component } from "react";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import PictureContainer from "./components/PictureContainer";
import pictures from "./pictures.json"

class App extends Component {
  state = {
    // message starts empty
    scoreMsg: "",
    scoreCounter: 0,
    topScore: 0,
    error: "",
    pictureID: "",
    // pictures, once clicked, are added to the clickedPictures array, so that we can compare what's been clicked with what hasn't been clicked
    clickedPictures: [],
    // each image also needs to have a boolean to say, yes this has been clicked or no, it hasn't
    clicked: false
  }

  handlePictureClick = click => {
    console.log("I'm clicked")
    const pictureID = parseInt(click.target.id);
    if (this.state.pictureID === pictureID) {
      if (this.state.scoreCounter > this.state.topScore) {
        this.setState({ topScore: this.state.scoreCounter })
      }
      else {
        this.setState({
          scoreCounter: 0,
          scoreMsg: "Sorry, you already clicked that one! Starting over..."
        })
      }
    } else if (this.state.clickedPictures.includes(pictureID)) {
      if (this.state.scoreCounter > this.state.topScore) {
        this.setState({ topScore: this.state.scoreCounter })
      }
      else {
        this.setState({
          scoreCounter: 0,
          scoreMsg: "Sorry, you already clicked that one! Starting over..."
        })
      }
    } else {
      if (this.state.scoreCounter >= this.state.topScore) {
        this.setState({
          clickedPictures: this.state.clickedPictures.push(pictureID),
          scoreMsg: "Good job, you didn't have that one yet!",
          scoreCounter: this.state.scoreCounter + 1,
          topScore: this.state.scoreCounter,
        })
      }
      else {
        this.setState({
          clickedPictures: this.state.clickedPictures.push(pictureID),
          scoreMsg: "Good job, you didn't have that one yet!",
          scoreCounter: this.state.scoreCounter + 1
        })

      }

      // this.setState({id: this.state.clickedID})
    }
  }

    render() {
      return (
        <div>
          <Navbar scoreMsg={this.state.scoreMsg} scoreCounter={this.state.scoreCounter} topScore={this.state.topScore} />
          <Header />
          <PictureContainer handlePictureClick={this.handlePictureClick} pictures={pictures} pictureID={this.state.pictureID} />
        </div>
      );
    }
  }

  export default App;


