import React, { Component } from 'react'
import Box from './Box'
import { choose } from './helpers'
import './BoxContainer.css'

export default class BoxContainer extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            boxes: Array.from({length: this.props.noBoxes})
        }
        this.pickColor = this.pickColor.bind(this)
    }

    static defaultProps = {
        noBoxes: 160000,
        colors: ['purple', 'magenta', 'royalblue', 'darkslateblue', 'peru']
    }
    pickColor(i) {
        this.setState(st => {
            let color;
            do {
                color = choose(this.props.colors)
            }
            while ( st.boxes[i] === color);
            st.boxes[i] = color;
            return {boxes: st.boxes}
        })
    }
    componentDidMount() {
        this.setState(st => ({boxes: st.boxes.map(b => choose(this.props.colors))}))
    }
    render() {
        return (
            <div className="BoxContainer">
                {
                    this.state.boxes.map((color, i) => <Box id={i} color={color} pick={this.pickColor} key={i}/>)
                }
            </div>
        )
    }
}
