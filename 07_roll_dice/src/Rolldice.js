import React, { Component } from 'react'
import Die from './Die'
import './Rolldice.css'

export default class Rolldice extends Component {
    state = {
        dice: [],
        rolling: false
    }

    static defaultProps = {
        noOfDice: 3,
        faces: ['one', 'two', 'three', 'four', 'five', 'six']
    }

    generateRan() {
        return Math.floor(Math.random() * this.props.faces.length);
    }

    roll(num) {
        let dice = [];
        for (let i = 0; i < num; i++) {
            dice.push(this.props.faces[this.generateRan()]);
        }
        this.setState({ rolling: true })
        setTimeout(() => this.setState({ dice: dice, rolling: false }), 1000);
    }

    render() {
        return (
            <div className="Rolldice">
                <div className={`dice ${this.state.rolling && 'animated'}`}>
                    {
                        this.state.dice.length > 0 ? this.state.dice.map(die => <Die face={die} />) : <h3>Click the Roll Dice button to start!</h3>
                    }
                </div>
                <button className={`button`} onClick={()=> this.roll(this.props.noOfDice)} disabled={ this.state.rolling }>{ this.state.rolling ? 'Rolling...' : 'Roll Dice'}</button>
            </div>
        )
    }
}
