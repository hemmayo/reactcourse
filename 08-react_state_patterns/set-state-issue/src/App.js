import React, { Component } from "react";
import ScoreKeeper from "./ScoreKeeper";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className='App'>
        <ScoreKeeper />
      </div>
    );
  }
}

export default App;
