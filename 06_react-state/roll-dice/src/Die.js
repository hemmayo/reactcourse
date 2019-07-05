import React, { Component } from 'react'
import { library } from "@fortawesome/fontawesome-svg-core"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDiceOne, faDiceTwo, faDiceThree, faDiceFour, faDiceFive, faDiceSix, faTimes } from '@fortawesome/free-solid-svg-icons'
import './Die.css'

export default class Die extends Component {

    render() {
        library.add(faDiceOne, faDiceTwo, faDiceThree, faDiceFour, faDiceFive, faDiceSix, faTimes);

        return (
            <FontAwesomeIcon className="Die" icon={`dice-${this.props.face}`} />
        )
    }
}
