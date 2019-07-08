import React from 'react';
import Lottery from './Lottery'
import './App.css';

function App() {
  return (
    <div className="App">
      <Lottery />
      <Lottery title="Mini Daily" maxNum={20} noOfBalls={3}/>
      <Lottery />
    </div>
  );
}

export default App;
