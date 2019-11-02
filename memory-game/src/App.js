import React from "react";
// import { BrowserRouter as Router, Route } from "react-router-dom";
// import Discover from "./pages/Discover";
// import About from "./pages/About";
// import Search from "./pages/Search";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import PictureContainer from "./components/PictureContainer";
import pictures from "./pictures.json"

function App() {
  return (
      <div>
        <Navbar />
        <Header />
        <PictureContainer pictures={pictures}/>
      </div>
  );
}

export default App;
