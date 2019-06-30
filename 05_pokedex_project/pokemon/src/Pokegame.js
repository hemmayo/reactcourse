import React, { Component } from 'react'
import Pokedex from './Pokedex'
import './Pokegame.css'

export default class Pokegame extends Component {
    static defaultProps = {
        pokemon: [
            { id: 4, name: 'charmander', type: 'fire', base_experience: 62  },
            { id: 7, name: 'squirtle', type: 'water', base_experience: 63  },
            { id: 11, name: 'metapod', type: 'bug', base_experience: 72  },
            { id: 12, name: 'butterfree', type: 'flying', base_experience: 178  }
        ]
    }
    render() {
        let hand1 = [];
        let hand2 = [ ...this.props.pokemon ];

        while (hand1.length < hand2.length) {
            let randIdx = Math.floor(Math.random() * hand2.length);
            // hand1.push(hand2[randIdx]);
            let randPokemon = hand2.splice(randIdx, 1)[0];
            hand1.push(randPokemon);
        }
        let exp1 = hand1.reduce((acc, pokemon) => acc += pokemon.base_experience, 0);
        let exp2 = hand2.reduce((acc, pokemon) => acc += pokemon.base_experience, 0);

        return (
            <div className="Pokegame">
                <h1>Pokegame!</h1>
                <Pokedex pokemon={hand1} exp={exp1} isWinner={exp1 > exp2} />
                <Pokedex pokemon={hand2} exp={exp2} isWinner={exp2 > exp1} />
            </div>
        )
    }
}
