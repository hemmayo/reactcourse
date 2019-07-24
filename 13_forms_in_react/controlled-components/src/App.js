import React, { Component } from "react";
import Form from "./Form";
import MultipleForm from "./MultipleForm";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className='App'>
        <Form />
        <MultipleForm />
      </div>
    );
  }
}

export default App;
