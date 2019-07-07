import React, { Component } from 'react'
import Box from './Box'
import './BoxContainer.css'

export default class BoxContainer extends Component {
    state = {
        boxes: Array.from({length: this.props.noBoxes})
    }
    static defaultProps = {
        noBoxes: 1600
    }
    render() {
        return (
            <div className="BoxContainer">
                {
                    this.state.boxes.map((box, i) => <Box color={box} key={i}/>)
                }
            </div>
        )
    }
}
