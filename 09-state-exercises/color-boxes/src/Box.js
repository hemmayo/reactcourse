import React, { Component } from 'react'
import { choose } from './helpers'
import './Box.css'

export default class Box extends Component {
    state = {
        color: null
    }
    static defaultProps = {
        colors: ['purple', 'magenta', 'royalblue', 'darkslateblue', 'peru']
    }
    componentDidMount() {
        this.setState({ color: choose(this.props.colors) })
    }
    pickColor() {
        this.setState(st => {
            let color;
            do {
                color = choose(this.props.colors)
            }
            while ( this.state.color === color);
            return {color}
        })
    }
    render() {
        return (
            <div 
                className="Box" 
                onClick={() => this.pickColor()} 
                style={{backgroundColor: this.state.color}}>
                
            </div>
        )
    }
}
