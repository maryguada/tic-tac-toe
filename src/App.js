import React from 'react';
import './App.css';
import GameManager from './Components/GameManager'

const styles = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
}

function App() {
  return (
    <div className="container">
      <h1 style={styles}> Tic Tac Toe</h1>
      <GameManager></GameManager>
    </div>
  );
}

export default App;
