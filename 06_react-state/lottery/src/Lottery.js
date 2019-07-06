import React, { Component } from 'react'
import Ball from './Ball'
import './Lottery.css'

export default class Lottery extends Component {
    state = {
        nums: Array.from({length: this.props.noOfBalls}),
        generating: false
    }

    static defaultProps = {
        title: 'Lottery',
        noOfBalls: 6,
        maxNum: 40
    }

    generateNums() {
        this.setState(curState => ({ generating: true }));
        setTimeout(() => this.setState(curState => ({
            nums: [...curState.nums.map(num => Math.floor(Math.random() * this.props.maxNum))],
            generating: false
        })), 1000);
    }

    render() {
        return (
            <div className='Lottery'>
                <h1 className="title">{this.props.title}</h1>
                <div className={`balls ${this.state.generating ? 'animated' : ''}`}>
                    {
                        this.state.nums.map((num, i) => <Ball key={i} num={num} />)
                    }
                </div>
                <button className="button" onClick={() => this.generateNums()}>Generate</button>
            </div>
        )
    }
}
