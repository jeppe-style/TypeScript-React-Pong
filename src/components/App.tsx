import React from 'react';
import './App.css';
import PongGame from '../game/PongGame';

export type KeysDownType = { [key: number]: boolean };

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <h1>SI Pong</h1>
        <PongGame />
      </header>
    </div>
  );
};

export default App;
