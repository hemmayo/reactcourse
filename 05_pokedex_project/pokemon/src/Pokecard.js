import React, { Component } from 'react'
import './Pokecard.css'

const POKE_API = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/'

export default class Pokecard extends Component {
    render() {
        let props = this.props;
        let imgSrc = `${POKE_API}${props.id}.png`;
        
        return (
            <div className="Pokecard">
                <h1 className="Pokecard__name">{props.name}</h1>
                <img className="Pokecard__image" src={imgSrc} alt={props.name} />
                <div className="Pokecard__type">Type: {props.type}</div>
                <div className="Pokecard__exp">EXP: {props.exp}</div>
            </div>
        )
    }
}
