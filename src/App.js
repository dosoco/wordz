import React from 'react';
import { GameProvider } from './context/GameContext';
import LandingPage from './components/LandingPage';
import Game from './components/Game';

function App() {
  const [gameLevel, setGameLevel] = React.useState(null);

  return (
    <GameProvider>
      <div className="app">
        <h1>Clondle</h1>
        {gameLevel ? (
          <Game level={gameLevel} />
        ) : (
          <LandingPage setGameLevel={setGameLevel} />
        )}
      </div>
    </GameProvider>
  );
}

export default App;
