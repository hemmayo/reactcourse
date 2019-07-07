import React, { Component } from 'react'
import CoinHead from './coin-head.png'
import CoinTail from './coin-tail.png'
import Coin from './Coin'
import './CoinContainer.css'

export default class CoinContainer extends Component {
    state = {
        curCoin: null,
        nFlips: 0,
        nHeads: 0,
        nTails: 0
    }
    static defaultProps = {
        coins: [
            {side: 'head', url: CoinHead},
            {side: 'tail', url: CoinTail}
        ]
    }

    choice(arr) {
        let randIndex = Math.floor(Math.random() * arr.length)
        return arr[randIndex];
    }

    flipCoin(e) {
        this.setState(curState => {
            let curCoin = this.choice(this.props.coins);
            let newState = {
                ...curState,
                curCoin: curCoin,
                nFlips: ++curState.nFlips
            }
            if (curCoin.side === 'head') {
                newState.nHeads++;
            }
            if (curCoin.side === 'tail') {
                newState.nTails++;
            }

            return newState;
        });
    }

    componentDidMount() {
        this.flipCoin()
    }

    render() {
        return (
            <div className="CoinContainer">
                <Coin image={this.state.curCoin && this.state.curCoin.url} />
                <button onClick={(e)=>this.flipCoin(e)}>Flip me</button>
                <p>{`Out of ${this.state.nFlips} flips, there have been ${this.state.nHeads} heads and ${this.state.nTails} tails.`}</p>
            </div>
        )
    }
}
