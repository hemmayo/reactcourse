import React, { Component } from 'react'
import './Ball.css'

export default class Ball extends Component {
    static defaultProps = {
        // num: Math.floor(Math.random() * 10) + 1
    }
    render() {
        return (
            <div className="Ball">
                {this.props.num}
            </div>
        )
    }
}
