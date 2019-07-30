import React from "react";
import { Route, Link, NavLink } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import "./App.css";

function App() {
    return (
        <div className="App">
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
            <Route
                exact
                path="/contact"
                component={() => <Contact email="emmapopoola@icloud.com" />}
            />
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <NavLink to="/contact">Contact</NavLink>
        </div>
    );
}

export default App;
