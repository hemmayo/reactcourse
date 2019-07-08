import React, { Component } from 'react'
import './Box.css'

export default class Box extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            color: null
        }
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick(e) {
        this.props.pick(this.props.id)
    }
    
    render() {
        return (
            <div 
                className="Box" 
                onClick={this.handleClick} 
                style={{backgroundColor: this.props.color}}>
            </div>
        )
    }
}
