import React, { Component } from "react";
import axios from "axios";
import Card from "./Card";
import "./Deck.css";
const API_URL = "https://deckofcardsapi.com/api/deck";

export default class Deck extends Component {
    state = {
        deck: null,
        cardsDrawn: []
    };

    async componentDidMount() {
        let deck = await axios.get(`${API_URL}/new/shuffle/`);
        this.setState({ deck: deck.data });
    }

    getCard = async () => {
        try {
            let cardRes = await axios.get(
                `${API_URL}/${this.state.deck.deck_id}/draw/`
            );
            if (!cardRes.data.success) {
                throw Error("No card remaining");
            }
            let card = cardRes.data.cards[0];
            this.setState(st => ({
                cardsDrawn: [
                    ...st.cardsDrawn,
                    {
                        id: card.code,
                        image: card.images.svg,
                        name: `${card.value} of ${card.suit}`
                    }
                ]
            }));
        } catch (e) {
            alert(e);
        }
    };

    render() {
        const cards = this.state.cardsDrawn.map(c => (
            <Card key={c.id} image={c.image} name={c.name} />
        ));
        return (
            <div className="Deck">
                <h1>Card dealer</h1>
                <button onClick={this.getCard}>Get card</button>
                <div className="Deck-cardarea">{cards}</div>
            </div>
        );
    }
}
