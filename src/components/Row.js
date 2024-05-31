import React from 'react';
import Tile from './Tile';
import '../styles/Board.css';

const Row = ({ row }) => {
  return (
    <div className="row">
      {row.map((letter, index) => (
        <Tile key={index} letter={letter} />
      ))}
    </div>
  );
};

export default Row;
