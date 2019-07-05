import React, { Component } from 'react'

export default class ButtonClicker extends Component {
    constructor (props) {
        super(props)
        this.state = { num: 1 }
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick(e) {
        this.setState({num: Math.floor(Math.random() * 10)})
    }

    render() {
        return (
            <div>
                <h1>Your number is { this.state.num }</h1>
                {this.state.num === 7 ? 'You win!!!' : <button onClick={this.handleClick}>Click here</button>}
            </div>
        )
    }
}
