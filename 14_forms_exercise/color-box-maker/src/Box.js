import React, { Component } from "react";

export default class Box extends Component {
    handleRemove = () => {
        this.props.removeBox(this.props.id);
    };
    render() {
        return (
            <div
                style={{
                    width: this.props.width + "rem",
                    height: this.props.height + "rem",
                    backgroundColor: this.props.backgroundColor
                }}
            >
                <button onClick={this.handleRemove}>x</button>
            </div>
        );
    }
}
