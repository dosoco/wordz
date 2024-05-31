import React from 'react';
import '../styles/Board.css';

const Tile = ({ letter }) => {
  let className = "tile";
  if (letter === 'T') {
    className += " correct";
  } else if (letter === 'R') {
    className += " present";
  }

  return (
    <div className={className}>
      {letter}
    </div>
  );
};

export default Tile;
