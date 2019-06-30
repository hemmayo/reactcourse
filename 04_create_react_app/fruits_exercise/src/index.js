import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import foods from './foods'
import { choice, remove } from './helpers'

export default class App extends Component {
    render() {
        let fruits = foods;
        let selectedFruit = choice(fruits);
        console.log('I\'d like one '+selectedFruit+', please')
        console.log('Here you go: ' + selectedFruit)
        console.log('Delicious! May I have another?')
        fruits = remove(fruits, selectedFruit)
        console.log('I\'m sorry, we\'re all out. We have '+fruits.length+' left.')
        
        console.log();
        return (
            <div>
                {selectedFruit}
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('root'))
