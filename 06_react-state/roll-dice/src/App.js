import React from 'react';
import Rolldice from './Rolldice'
import './App.css';

function App() {
  return (
    <div className="App">
      <h2>Roll the Dice</h2>
      <Rolldice 
        noOfDice={2}
        faces={['one', 'two', 'three', 'four']} 
        />
    </div>
  );
}

export default App;
