import React, { Component } from 'react'
import Pokecard from './Pokecard'
import './Pokedex.css'

export default class Pokedex extends Component {
    render() {
        return (
            <div className="Pokedex">
                <h1 className="Pokedex__title">Pokedex!</h1>
                <div className="Pokedex__details">
                    <p>
                        Total Experience: {this.props.exp}&nbsp;-&nbsp;
                        <span className={this.props.isWinner ? 'Pokedex__details--winner' : 'Pokedex__details--loser'}>
                            {this.props.isWinner ? 'Winning hand!' : 'Losing hand!'}
                        </span>
                    </p>
                </div>
                <div className="Pokedex__cards">
                    {
                        this.props.pokemon.map(p => <Pokecard key={p.id} id={p.id} name={p.name} type={p.type} exp={p.base_experience}/>)
                    }
                </div>
                
            </div>
        )
    }
}
