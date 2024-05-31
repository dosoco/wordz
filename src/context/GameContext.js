import React, { createContext, useState, useEffect } from 'react';

const GameContext = createContext();

const GameProvider = ({ children }) => {
  const [board, setBoard] = useState([]);
  const [currentRow, setCurrentRow] = useState(0);
  const [currentCol, setCurrentCol] = useState(0);
  const [solution, setSolution] = useState('');
  const [gameOver, setGameOver] = useState(false);

  const startGame = async (level) => {
    const words = await fetch(`/words/${level}.json`).then(res => res.json());
    const randomWord = words[Math.floor(Math.random() * words.length)];
    setSolution(randomWord);
    setBoard(Array(6).fill(Array(level === 'easy' ? 3 : level === 'medium' ? 5 : 7).fill('')));
    setCurrentRow(0);
    setCurrentCol(0);
    setGameOver(false);
  };

  const addLetter = (letter) => {
    if (currentCol < solution.length && currentRow < 6) {
      const newBoard = [...board];
      newBoard[currentRow][currentCol] = letter;
      setBoard(newBoard);
      setCurrentCol(currentCol + 1);
    }
  };

  const checkGuess = () => {
    if (currentCol === solution.length) {
      setCurrentRow(currentRow + 1);
      setCurrentCol(0);
    }
  };

  return (
    <GameContext.Provider value={{ board, addLetter, checkGuess, gameOver, startGame }}>
      {children}
    </GameContext.Provider>
  );
};

export { GameContext, GameProvider };
