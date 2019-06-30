import React, { Component } from 'react'
import Pokecard from './Pokecard'
import './Pokedex.css'

export default class Pokedex extends Component {
    static defaultProps = {
        pokemon: [
            { id: 4, name: 'charmander', type: 'fire', base_experience: 62  },
            { id: 7, name: 'squirtle', type: 'water', base_experience: 63  },
            { id: 11, name: 'metapod', type: 'bug', base_experience: 72  },
            { id: 12, name: 'butterfree', type: 'flying', base_experience: 178  }
        ]
    }
    render() {
        return (
            <div className="Pokedex">
                <h1 className="Pokedex__title">Pokedex!</h1>
                <div className="Pokedex__cards">
                    {
                        this.props.pokemon.map(p => <Pokecard id={p.id} name={p.name} type={p.type} exp={p.base_experience}/>)
                    }
                </div>
                
            </div>
        )
    }
}
