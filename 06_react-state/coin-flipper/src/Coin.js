import React, { Component } from 'react'
import './Coin.css'

export default class Coin extends Component {
    static defaultProps = {
        alt: 'Coin'
    }
    render() {
        return (
            <div className="Coin">
                <img src={this.props.image} alt={this.props.alt} />
            </div>
        )
    }
}
