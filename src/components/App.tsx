import React from 'react';
import './App.css';
import PongGame from './PongGame';
import Score from './Score';

export type KeysDownType = { [key: number]: boolean };

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <h1>SI Pong</h1>
        <Score>
          <PongGame />
        </Score>
      </header>
    </div>
  );
};

export default App;
