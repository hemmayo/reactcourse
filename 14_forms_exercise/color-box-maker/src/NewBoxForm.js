import React, { Component } from "react";

export default class NewBoxForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            width: "",
            height: "",
            backgroundColor: ""
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(evt) {
        this.setState({ [evt.target.name]: evt.target.value });
        // this.props.
    }

    handleSubmit(evt) {
        evt.preventDefault();
        this.props.addBox(this.state);
        this.setState({
            width: "",
            height: "",
            backgroundColor: ""
        });
    }
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label htmlFor="width">Width</label>
                <input
                    name="width"
                    id="width"
                    type="text"
                    placeholder="Enter width"
                    value={this.state.width}
                    onChange={this.handleChange}
                />

                <label htmlFor="height">Height</label>
                <input
                    name="height"
                    id="height"
                    type="text"
                    placeholder="Enter height"
                    value={this.state.height}
                    onChange={this.handleChange}
                />

                <label htmlFor="backgroundColor">Background Color</label>
                <input
                    name="backgroundColor"
                    id="backgroundColor"
                    type="text"
                    placeholder="Enter background color"
                    value={this.state.backgroundColor}
                    onChange={this.handleChange}
                />

                <button>Add box</button>
            </form>
        );
    }
}
