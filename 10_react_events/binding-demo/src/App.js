import React, { Component } from "react";
import WiseSquare from "./WiseSquare";
import WiseSquareWithProps from "./WiseSquareWithProps";
import ExperimentalSquare from "./ExperimentalSquare";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className='App'>
        <WiseSquare />
        <WiseSquareWithProps />
        <ExperimentalSquare />
      </div>
    );
  }
}

export default App;
